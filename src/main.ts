import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

(async () => {
    await cefSharp.bindObjectAsync('exUiInput');
    function focusIn(): void {
        exUiInput.setFocus(true);
    }
    function focusOut(): void {
        exUiInput.setFocus(false);
    }
    Vue.prototype.$exUiInput = exUiInput;
    Vue.prototype.$window = window;
    Vue.prototype.$console = console;
    Vue.directive('ui-focusable', {
        bind: el => {
            el.addEventListener('focusin', focusIn);
            el.addEventListener('focusout', focusOut);
        },
        unbind: el => {
            el.removeEventListener('focusin', focusIn);
            el.removeEventListener('focusout', focusOut);
        },
    });
    new Vue({
        router,
        store,
        render: h => h(App),
    }).$mount('#app');
})();
