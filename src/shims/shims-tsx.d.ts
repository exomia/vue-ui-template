import Vue, { VNode } from 'vue';

declare global {
    namespace JSX {
        // tslint:disable no-empty-interface
        // tslint:disable interface-name
        interface Element extends VNode {}
        // tslint:disable no-empty-interface
        // tslint:disable interface-name
        interface ElementClass extends Vue {}
        // tslint:disable interface-name
        interface IntrinsicElements {
            [elem: string]: any;
        }
    }
}
