<template>
    <nav :class="navState()">
        <figure class="logo" v-if="showLogo()">GXC Wallet</figure>
        <section class="breadcrumb" v-else>
            <figure class="icon" v-on:click="back">
                <i class="fa fa-chevron-left"></i>
            </figure>
            <figure class="route">{{breadcrumb()}}</figure>
        </section>
        <figure class="settings-button" v-on:click="toggleSettings">
            <i class="fa fa-gear"></i>
        </figure>
    </nav>
</template>

<script>
    import { mapActions, mapGetters, mapState } from 'vuex'
    import {RouteNames} from '../vue/Routing'

    export default {
        computed: {
            ...mapState([
                'scatter'
            ])
        },
        methods: {
            back(){ this.$router.back() },
            showLogo(){
                switch(this.$route.name){
                    case RouteNames.ENTRY:
                    case RouteNames.MAIN_MENU:
                    case RouteNames.FIRST_TIME:
                    case RouteNames.ONBOARDING:
                    case RouteNames.SHOW_MNEMONIC: return true;
                    default: return false;
                }
            },
            navState(){
                switch(this.$route.name){
                    case RouteNames.ENTRY:
                        if(this.scatter.settings.hasEncryptionKey) {
                            return 'locked';
                        } else{
                            return 'no-chain';
                        }
                        break;
                    case RouteNames.MAIN_MENU:
                        return 'main-menu-nav';
                        break;
                    default: return '';
                }
            },
            breadcrumb(){
                // TODO: Localize
                switch(this.$route.name){
                    case RouteNames.LOAD_FROM_BACKUP: return this.locale(this.langKeys.ROUTENAMES_LOAD_FROM_BACKUP);
                    case RouteNames.SETTINGS: return this.locale(this.langKeys.ROUTENAMES_SETTINGS);
                    case RouteNames.TRANSFER: return this.locale(this.langKeys.ROUTENAMES_TRANSFER);
                    case RouteNames.IDENTITIES: return this.locale(this.langKeys.ROUTENAMES_IDENTITIES);
                    case RouteNames.IDENTITY: return this.locale(this.langKeys.ROUTENAMES_IDENTITY);
                    case RouteNames.PERMISSIONS:
                    case RouteNames.DOMAIN_PERMISSIONS: return this.locale(this.langKeys.ROUTENAMES_DOMAIN_PERMISSIONS);
                    case RouteNames.HISTORY: return this.locale(this.langKeys.ROUTENAMES_HISTORY);
                    case RouteNames.NETWORKS: return this.locale(this.langKeys.ROUTENAMES_NETWORKS);
                    case RouteNames.NETWORK: return this.locale(this.langKeys.ROUTENAMES_NETWORK);
                    case RouteNames.CHANGE_PASSWORD: return this.locale(this.langKeys.ROUTENAMES_CHANGE_PASSWORD);
                    case RouteNames.BACKUP:
                    case RouteNames.EXPORT_JSON: return this.locale(this.langKeys.ROUTENAMES_EXPORT_JSON);
                    case RouteNames.DESTROY: return this.locale(this.langKeys.ROUTENAMES_DESTROY);
                    case RouteNames.AUTO_LOCK: return this.locale(this.langKeys.ROUTENAMES_AUTO_LOCK);
                    case RouteNames.LANGUAGE: return this.locale(this.langKeys.ROUTENAMES_LANGUAGE);
                    case RouteNames.KEYPAIRS: return this.locale(this.langKeys.ROUTENAMES_KEYPAIRS);
                    case RouteNames.KEYS: return this.locale(this.langKeys.ROUTENAMES_KEYS);
                    case RouteNames.REGISTER_ACCOUNT: return this.locale(this.langKeys.ROUTENAMES_REGISTER_ACCOUNT);
                }
                return 'Undefined'
            },
            toggleSettings(){
                if(this.$route.name === RouteNames.SETTINGS) this.back();
                else if(this.$route.name == RouteNames.ENTRY) this.$router.push({name:RouteNames.LANGUAGE});
                else this.$router.push({name:RouteNames.SETTINGS})
            }
        },
    }
</script>

<style lang="scss">
    nav {
        height:600px;
        max-height:60px;
        line-height:60px;
        background:#fff;
        transition:all 0.2s ease;
        transition-property: max-height, line-height, background;
        padding:0 20px;
        overflow:hidden;
        /*border-bottom:1px solid #f9f9f9;*/
        position: relative;
        z-index:2;

        .logo {
            font-family: 'Grand Hotel', sans-serif;
            font-size:22px;
            color:#888888;
            width:calc(100% - 60px);
            float:left;
        }

        .settings-button {
            cursor: pointer;
            float: right;
            height: 60px;
            margin-left:10px;
            line-height: 59px;
            font-size: 24px;
            text-align:right;
            color: #d6d6d6;
        }

        .breadcrumb {
            width:calc(100% - 60px);
            float:left;

            .icon {
                cursor: pointer;
                display:inline-block;
                font-size:18px;
                color:#dbdbdb;
                padding-right:15px;
                transition: color 0.2s ease;

                &:hover {
                    color:rgba(0,0,0,0.3);
                }
            }

            .route {
                display:inline-block;
                font-family:'Raleway', sans-serif;
                font-size:18px;
                color:#a5a5a5;
                vertical-align: top;
            }
        }

        &.no-chain {
            max-height:299px;
            line-height:299px;

            .logo {
                font-size:64px;
                color:#656565;
                width:100%;
                text-align:center;
            }

            .settings-button {
                position: absolute;
                top:0px;
                right:20px;
                z-index:99;
            }
        }

        &.locked {
            max-height:450px;
            line-height:450px;

            .logo {
                font-size:64px;
                color:#656565;
                width:100%;
                text-align:center;
            }
        }

        &.main-menu-nav {
            background:#f9f9f9;
        }
    }
</style>
