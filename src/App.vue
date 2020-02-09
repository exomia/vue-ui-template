<template>
    <div id="app">
        <router-view />
        <!-- <input type="text" v-ui-focusable:Escape.MOUSE_MOVE="true" /> -->
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class App extends Vue {}
</script>

<style src="@/assets/scss/_global.scss" lang="scss"></style>
