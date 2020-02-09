import './exUi/exUi';

import 'normalize.css';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Don't warn about using the dev version of Vue in development.
Vue.config.productionTip = process.env.NODE_ENV === 'production';

(async () => {
    if (process.env.NODE_ENV !== 'development') {
        await window.cefSharp.bindObjectAsync('exUiInput');
        Vue.prototype.$exUiInput = window.exUiInput;
        Vue.prototype.$window = window;
        Vue.prototype.$console = console;
    }

    new Vue({
        router,
        store,
        render: h => h(App),
    }).$mount('#app');
})();
