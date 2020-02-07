import './exUi/exUi.js';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

(async () => {
    await window.cefSharp.bindObjectAsync('exUiInput');
    Vue.prototype.$exUiInput = window.exUiInput;
    Vue.prototype.$window = window;
    Vue.prototype.$console = console;

    new Vue({
        router,
        store,
        render: h => h(App),
    }).$mount('#app');
})();
