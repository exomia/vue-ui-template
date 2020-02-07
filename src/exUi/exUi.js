import { InputFlags } from '@/exUi/InputFlags';
import Vue from 'vue';

Vue.directive('ui-focusable', {
    bind(el, binding) {
        const modifiers = Object.keys(binding.modifiers);
        let flags = InputFlags.ALL;
        if (!binding.value && modifiers.length !== 0) {
            flags = 0;
            for (const key of modifiers) {
                flags |= InputFlags[key];
            }
        } else {
            for (const key of modifiers) {
                flags &= ~InputFlags[key];
            }
        }
        el._exUiFocusIn = async () => {
            await window.exUiInput.removeFlag(flags);
        };
        el.addEventListener('focusin', el._exUiFocusIn);

        if (!binding.arg) {
            el._exUiFocusOut = async () => {
                await window.exUiInput.setFlag(flags);
            };
        } else {
            el._exUiFocusOut = () => {
                el.focus();
            };
            el._exUikeyUp = async event => {
                if (binding.arg === event.key) {
                    el.removeEventListener('focusout', el._exUiFocusOut);
                    el.blur();
                    await window.exUiInput.setFlag(flags);
                }
            };
            el.addEventListener('keyup', el._exUikeyUp);
        }

        el.addEventListener('focusout', el._exUiFocusOut);
    },
    unbind(el, binding) {
        el.removeEventListener('focusin', el._exUiFocusIn);
        el._exUiFocusIn = null;
        if (binding.arg) {
            el.removeEventListener('keyup', el._exUikeyUp);
            el._exUikeyUp = null;
        }
        el.removeEventListener('focusout', el._exUiFocusOut);
        el._exUiFocusOut = null;
    },
});
