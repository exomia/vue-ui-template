import { InputFlags } from '@/exUi/InputFlags';
import Vue from 'vue';

Vue.directive('ui-focusable', {
    bind: (el, binding) => {
        const modifiers = Object.keys(binding.modifiers);
        let flags = InputFlags.ALL;
        if (!binding.value && modifiers.length !== 0) {
            flags = 0;
            for (const key of modifiers) {
                flags |= InputFlags[key as keyof typeof InputFlags];
            }
        } else {
            for (const key of modifiers) {
                flags &= ~InputFlags[key as keyof typeof InputFlags];
            }
        }
        el._exUiFocusIn = async () => {
            el._hasFocus = true;
            window.exUiInput.removeFlag(flags);
        };
        el.addEventListener('focusin', el._exUiFocusIn);

        if (!binding.arg) {
            el._exUiFocusOut = async () => window.exUiInput.setFlag(flags);
        } else {
            el._exUiFocusOut = () => {
                if (el._hasFocus) {
                    el.focus();
                }
            };
            el._exUikeyUp = async (e: KeyboardEvent) => {
                if (binding.arg === e.key) {
                    el._hasFocus = false;
                    el.blur();
                    await window.exUiInput.setFlag(flags);
                }
            };
            el.addEventListener('keyup', el._exUikeyUp);
        }
        el.addEventListener('focusout', el._exUiFocusOut);
    },
    unbind: (el, binding) => {
        if (el._exUiFocusIn != null) {
            el.removeEventListener('focusin', el._exUiFocusIn);
            el._exUiFocusIn = null;
        }
        if (binding.arg) {
            if (el._exUikeyUp != null) {
                el.removeEventListener('keyup', el._exUikeyUp);
                el._exUikeyUp = null;
            }
        }
        if (el._exUiFocusOut != null) {
            el.removeEventListener('focusout', el._exUiFocusOut);
            el._exUiFocusOut = null;
        }
    },
});
