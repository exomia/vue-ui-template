import { InputFlags } from '@/exUi/InputFlags';

declare global {
    // tslint:disable-next-line
    interface Window {
        cefSharp: {
            /**
             * Bind the object that matches objectName,
             * the IJavascriptObjectRepository.ResolveObject will be raised with args.ObjectName equal to objectName.
             * @param objectName Name of the object you wish to bind
             */
            bindObjectAsync(objectName: string): Promise<void>;
            /**
             * Bind the object that matches objectName,
             * the IJavascriptObjectRepository.ResolveObject will be raised with args.ObjectName equal to objectName.
             * @param settings A set of key/value pairs that configure the default binding settings.
             * @param objectName Name of the object you wish to bind
             */
            bindObjectAsync(
                settings: { NotifyIfAlreadyBound: boolean; IgnoreCache: boolean },
                objectName: string
            ): Promise<void>;
            /**
             * Deletes the object that matches objectName
             * @param objectName Name of the object to be deleted
             */
            deleteBoundObject(objectName: string): boolean;
            /**
             * Removes the object that matches objectName from the cache
             * @param objectName Name of the object to be removed from the cache
             */
            removeObjectFromCache(objectName: string): boolean;
            /**
             * Does an object with name objectName exist in the cache
             * @param objectName Name of the object
             */
            isObjectCached(objectName: string): void;
        };
        exUiInput: {
            /**
             * [vue-ui] call this function to disable input forwarding, for a specific flag, to the <see cref="InputHandler"/>.
             * @param flag the flag to set.
             */
            setFlag(flag: InputFlags): Promise<void>;
            /**
             * [vue-ui] call this function to enable input forwarding, for a specific flag, to the <see cref="InputHandler"/>.
             * @param flag the flag to remove.
             */
            removeFlag(flag: InputFlags): Promise<void>;
        };
        exUi: {
            /**
             * [vue-ui] call this function to trigger actions bound to the key value.
             * @param key The key.
             * @param args A variable-length parameters list containing arguments.
             */
            trigger(key: number, ...args: object[]): void;
        };
    }
}
