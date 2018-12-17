<template>
    <section class="key-value">
        <p>
            <label class="key">{{locale(langKeys.PLACEHOLDER_PublicKey)}}</label>
            <span class="value">{{keypair.publicKey}}</span>
        </p>
        <p>
            <label class="key">{{locale(langKeys.PLACEHOLDER_PrivateKey)}}</label>
            <span v-if="isShow" class="value">{{keypair.privateKey}}</span>
            <span v-else class="value mark">{{getMarkFromValue(keypair.privateKey)}}</span>
            <span class="icon" @click="toggle()">
                <i v-if="isShow" class="fa fa-eye-slash"></i>
                <i v-else class="fa fa-eye"></i>
            </span>
        </p>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                isShow: false
            }
        },
        methods: {
            toggle() {
                this.isShow = !this.isShow;
            },
            getMarkFromValue(value) {
                return '*'.repeat(value.length)
            }
        },
        props: ['keypair'],
    }
</script>

<style lang="scss" type="text/scss">
    .icon {
        cursor: pointer;
        margin-left: 10px;
    }

    .fa-eye{
        position: relative;
        top: -2px;
    }

    .key-value {
        padding: 20px;
        border: 2px dashed rgba(0, 0, 0, 0.05);
        border-radius: 4px;
        margin-bottom: 20px;
        margin-top: 20px;

        .key {
            display: block;
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
</style>
