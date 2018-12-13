<template>
    <section class="network scroller">
        <section class="panel">
            <figure class="header">{{locale(langKeys.KEYPAIR_Header)}}</figure>
            <figure class="sub-header">{{locale(langKeys.KEYPAIR_Description)}}</figure>
            <figure class="sub-header" style="color:red; font-weight:bold; font-size:13px;">
                {{locale(langKeys.KEYPAIR_Important)}}
            </figure>
            <sel :disabled="importing" :selected="supportNetworks[0]" :options="supportNetworks"
                    :parser="(network) => network.name.length ? network.name : network.unique()"
                    v-on:changed="selectNetwork"></sel>
            <cin :placeholder="locale(langKeys.PLACEHOLDER_Name)" :text="name"
                    v-on:changed="changed => name = changed"></cin>
            <btn :text="注册账户" @click.native="registerAccount" margined="true"></btn>
            <btn :text="locale(langKeys.GENERIC_Save)" :is-blue="true" half="true" @click.native="saveKeyPair()"
                    margined="true"></btn>
            <btn :text="locale(langKeys.BUTTON_Copy)" half="true" @click.native="copyKeyPair()" margined="true"></btn>
        </section>

        <!-- INPUT FIELD USED FOR COPYING -->
        <input tabindex="-1" type="text" ref="copier" class="copier"/>

    </section>
</template>

<script>
    import {mapActions, mapGetters, mapState} from 'vuex'
    import * as Actions from '../store/constants';
    import {RouteNames} from '../vue/Routing'
    import Network from '../models/Network'
    import Scatter from '../models/Scatter'
    import AlertMsg from '../models/alerts/AlertMsg'
    import * as AlertTypes from '../models/alerts/AlertTypes'
    import IdentityService from '../services/IdentityService'
    import {BlockchainsArray, Blockchains} from '../models/Blockchains';
    import KeyPair from '../models/KeyPair';
    import ecc from 'eosjs-ecc';
    import PluginRepository from '../plugins/PluginRepository'
    import KeyPairService from '../services/KeyPairService'
    import AccountService from '../services/AccountService'

    export default {
        data() {
            return {
                blockchains: BlockchainsArray,
                keypair: KeyPair.placeholder(),
                isValid: false,
                name: '',
                selectedNetwork: null
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
                // gxclient register account
                const keypair = await AccountService.registerAccount(this.name, this.selectedNetwork)
                console.log('kkkkppp', keypair)
            },
            saveKeyPair() {
                // 将keypair存入
                if (!this.isValid) return this[Actions.PUSH_ALERT](AlertMsg.InvalidPrivateKey());
                KeyPairService.saveKeyPair(this.keypair, this, () => {
                    // push identity
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
