<template>
    <section class="prompt-body">

        <section class="prompt-actions">
            <btn :text="locale(langKeys.BUTTON_Cancel)" v-on:clicked="accepted"></btn>
        </section>


        <section class="partitioned">

            <section class="partition">
                 <section class="description">
                    <b>{{locale(langKeys.REQUEST_ScatterIsLocked)[0]}}</b>
                </section>
                <section class="description">
                    {{locale(langKeys.REQUEST_ScatterIsLocked)[1]}}
                    <br><br>
                    <b>{{locale(langKeys.REQUEST_ScatterIsLocked)[2]}}</b><br>
                    {{locale(langKeys.REQUEST_ScatterIsLocked)[3]}}
                </section>
              
            </section>

            <section class="partition">
                 <section class="tip-img">
                    <img src='../copied/unlock.gif' />
                </section>
            </section>

        </section>


       

    </section>
</template>

<script>
    import { mapActions, mapGetters, mapState } from 'vuex'
    import NotificationService from '../services/NotificationService'

    export default {
        data(){ return {

        }},
        computed: {
            ...mapState([
                'prompt'
            ])
        },
        methods: {
            accepted(){
                this.prompt.responder(null);
                NotificationService.close();
            }
        }
    }
</script>

<style lang="scss">


    .prompt-body {
        padding:20px;
    }

     .description {
            margin-top: 5px;
            font-size: 13px;
            color: rgba(0, 0, 0, 0.8);

            b {
                color: #54a7fc;
            }
        }

    .partitioned {
        overflow: hidden;
        height: 436px;
        width: 100%;

        .partition {
            width: 50%;
            float: left;
            height: 436px;
            overflow-y: auto;
            position: relative;
            display: block;

            .tip {
                font-size: 1rem;
                margin: 15px 0;
                color: #666666;
                border-left: 2px solid #666;
                padding-left: 15px;
            }

            &.scroller {
                height: 405px;
            }

            &:first-child {
                /*padding:20px;*/
                padding: 40px 50px;

                .key-value {
                    padding: 20px;
                    border: 2px dashed rgba(0, 0, 0, 0.05);
                    border-radius: 4px;
                    margin-bottom: 20px;
                    margin-top: 20px;

                    .key {
                        font-size: 9px;
                        color: #bbbbbb;
                    }

                    .value {
                        font-size: 12px;
                        color: #707070;
                        font-weight: 900;
                        font-style: italic;
                    }
                }
            }

            &:last-child {
                background: #f5f5f5;
                padding: 20px;
            }
        }
    }

    .tip-img {
        margin:20px;
    }
    .tip-img img {
        height:300px;
    }

</style>