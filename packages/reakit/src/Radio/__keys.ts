// Automatically generated by scripts/build/keys.js
const RADIO_STATE_KEYS = [
  "baseId",
  "unstable_idCountRef",
  "unstable_virtual",
  "rtl",
  "orientation",
  "items",
  "groups",
  "currentId",
  "loop",
  "wrap",
  "unstable_moves",
  "unstable_angular",
  "unstable_hasActiveWidget",
  "state",
  "unstable_setBaseId",
  "registerItem",
  "unregisterItem",
  "registerGroup",
  "unregisterGroup",
  "move",
  "next",
  "previous",
  "up",
  "down",
  "first",
  "last",
  "unstable_sort",
  "unstable_setVirtual",
  "setRTL",
  "setOrientation",
  "setCurrentId",
  "setLoop",
  "setWrap",
  "reset",
  "unstable_setHasActiveWidget",
  "setState",
] as const;
export const RADIO_KEYS = [
  ...RADIO_STATE_KEYS,
  "value",
  "checked",
  "unstable_checkOnFocus",
] as const;
export const RADIO_GROUP_KEYS = RADIO_STATE_KEYS;