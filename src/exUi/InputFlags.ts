export enum InputFlags {
    KEY_DOWN = 1,
    KEY_UP = 1 << 1,
    KEY_PRESS = 1 << 2,
    KEY_EVENT = 1 << 3,
    KEY_ALL = KEY_DOWN | KEY_UP | KEY_PRESS | KEY_EVENT,
    MOUSE_DOWN = 1 << 4,
    MOUSE_UP = 1 << 5,
    MOUSE_CLICK = 1 << 6,
    MOUSE_MOVE = 1 << 7,
    MOUSE_WHEEL = 1 << 8,
    MOUSE_ALL = MOUSE_DOWN | MOUSE_UP | MOUSE_CLICK | MOUSE_MOVE | MOUSE_WHEEL,
    ALL = KEY_ALL | MOUSE_ALL,
}
