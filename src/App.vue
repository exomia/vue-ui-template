<template>
    <div id="app">
        <router-view />
        <input type="text" v-ui-focusable:Escape.MOUSE_MOVE="true" />
    </div>
</template>
<style scoped>
div {
    color: white;
}
</style>

<script>
export default {
    data() {
        return {};
    },
};
</script>
