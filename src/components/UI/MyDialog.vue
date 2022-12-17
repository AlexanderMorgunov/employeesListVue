<template>
    <div class="dialog" v-if="show">
        <div class="dialog_content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'my-dialog',
        props: {
            show: {
                type: Boolean,
                default: false
            }
        },
    }
</script>

<style>
    .dialog {
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        position: fixed;
        background: rgba(0, 0, 0, .5);
        display: flex;
    }
    .dialog_content {
        margin: auto;
        background-color: white;
        border-radius: 12px;
        min-width: 300px;
        min-height: 200px;
        display: flex;
    }

</style>