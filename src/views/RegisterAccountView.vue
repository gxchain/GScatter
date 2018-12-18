<template>
    <section class="network scroller">
        <section class="panel" v-if="step === 1">
            <figure class="header">{{locale(langKeys.REGISTER_HEADER)}}</figure>
            <figure class="sub-header">{{locale(langKeys.REGISTER_DESCRIPTION)}}</figure>
            <sel :disabled="loading" :selected="supportNetworks[0]" :options="supportNetworks"
                    :parser="(network) => network.name.length ? network.name : network.unique()"
                    v-on:changed="selectNetwork"></sel>
            <cin :placeholder="locale(langKeys.PLACEHOLDER_Name)" :text="name"
                    v-on:changed="changed => name = changed"></cin>
            <btn :text="locale(langKeys.REGISTER_HEADER)" @click.native="registerAccount" margined="true"></btn>
        </section>

        <section class="panel" v-else>
            <figure class="header">{{locale(langKeys.REGISTER_SUC_HEADER)}}</figure>
            <figure class="sub-header">{{locale(langKeys.REGISTER_SUC_DESCRIPTION)}}</figure>
            <keypair :keypair="keypair"></keypair>
            <btn :text="locale(langKeys.BUTTON_Copy)" :is-blue="true" @click.native="copyKeyPair()"
                    margined="true"></btn>
            <btn :text="locale(langKeys.GENERIC_Save)" :is-blue="true" @click.native="saveKeyPair()"
                    margined="true"></btn>
        </section>

        <!-- INPUT FIELD USED FOR COPYING -->
        <input tabindex="-1" type="text" ref="copier" class="copier"/>

    </section>
</template>

<script>
    import {mapActions, mapGetters, mapState} from 'vuex'
    import * as Actions from '../store/constants';
    import AlertMsg from '../models/alerts/AlertMsg'
    import {BlockchainsArray} from '../models/Blockchains';
    import KeyPair from '../models/KeyPair';
    import KeyPairService from '../services/KeyPairService'
    import AccountService from '../services/AccountService'
    import Identity from "../models/Identity";
    import Account from "../models/Account";
    import RIDLService from '../services/RIDLService';
    import {validate_account_name} from 'gxc-frontend-base/build/script/util'
    import {RouteNames} from '../vue/Routing'

    export default {
        data() {
            return {
                blockchains: BlockchainsArray,
                keypair: KeyPair.placeholder(),
                isValid: false,
                name: '',
                selectedNetwork: null,
                loading: false,
                step: 1
            }
        },
        computed: {
            ...mapState([
                'scatter'
            ]),
            ...mapGetters([
                'supportNetworks'
            ])
        },
        mounted() {
            this.selectedNetwork = this.supportNetworks[0]
        },
        methods: {
            selectNetwork(changed) {
                this.selectedNetwork = changed
                console.log(changed)
            },
            copyKeyPair() {
                const copier = this.$refs.copier;
                copier.value = `Private Key: ${this.keypair.privateKey} Public Key: ${this.keypair.publicKey}`;
                copier.select();
                document.execCommand("copy");
                copier.value = '';
            },
            async registerAccount() {
                // validate name
                const errType = validate_account_name(this.name)
                if (errType) {
                    this[Actions.PUSH_ALERT](AlertMsg.CommonError(new Error(this.locale('gxc_account_error_'+errType)), this.locale(this.langKeys.GXC_ACCOUNT_NAME_ERROR)));
                    return;
                }

                // gxclient register account
                let keypair
                try {
                    keypair = await AccountService.registerAccount(this.name, this.selectedNetwork)
                } catch (err) {
                    if (err.error && err.error.base && err.error.base[0].indexOf(
                        'current_account_itr') > -1) {
                        err.message = this.locale(this.langKeys.GXC_REGISTER_REPEAT);
                    }else{
                        err.message = this.locale(this.langKeys.GXC_REGISTER_FAIL);
                    }
                    this[Actions.PUSH_ALERT](AlertMsg.CommonError(err));
                    return;
                }

                this[Actions.PUSH_ALERT](AlertMsg.RegisterSuc(keypair)).then(ret => {
                    if (ret.hasOwnProperty('accepted')) {
                        this.step++;
                    }
                })
                this.keypair = KeyPair.fromJson({...keypair, name: this.name})
                this.isValid = true
            },
            saveKeyPair() {
                // save keypair
                if (!this.isValid) return this[Actions.PUSH_ALERT](AlertMsg.NotRigister());
                this.loading = true;

                KeyPairService.saveKeyPair(this.keypair, this, async () => {
                    // create default identity
                    const identity = Identity.placeholder()
                    identity.initialize(this.scatter.hash).then(async () => {
                        const identified = await RIDLService.identify(identity.publicKey)
                        if (!identified) return null;
                        identity.name = identified

                        const account = Account.fromJson({
                            keypairUnique: this.keypair.unique(),
                            publicKey: this.keypair.publicKey,
                            name: this.name,
                            authority: 'active'
                        })
                        identity.setAccount(this.selectedNetwork, account)

                        const scatter = this.scatter.clone();
                        scatter.meta.acceptedTerms = true;
                        scatter.keychain.updateOrPushIdentity(identity);
                        this.loading = false;
                        this[Actions.UPDATE_STORED_SCATTER](scatter).then(() => {
                            this.$router.push({name: RouteNames.MAIN_MENU});
                        })
                    }).catch(err => {
                        this.loading = false;
                    })
                })
            },
            ...mapActions([
                Actions.UPDATE_STORED_SCATTER,
                Actions.PUSH_ALERT
            ])
        }
    }
</script>

<style type="text/scss" lang="scss">
    .network {
        font-family: 'Open Sans', sans-serif;

        .panel {
            padding: 20px;

            &:not(:last-child) {
                border-bottom: 1px solid #eaeaea;
            }

            .header {
                color: #cecece;
                font-size: 11px;
                padding-bottom: 5px;
                margin-top: -5px;
                margin-bottom: 10px;
                border-bottom: 1px solid #eaeaea;
            }

            .sub-header {
                color: #aeaeae;
                font-size: 9px;
                margin-bottom: 20px;

                &.blue {
                    color: blue;
                }

                &.red {
                    color: red;
                }
            }
        }
    }
</style>
