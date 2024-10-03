// attribute definitions from https://www.w3.org/TR/wai-aria-1.2/#state_prop_taxonomy

export const WIDGET_ARIA_ATTRIBUTES = {
  "aria-autocomplete": "aria-autocomplete",
  "aria-checked": "aria-checked",
  "aria-disabled": "aria-disabled",
  "aria-errormessage": "aria-errormessage",
  "aria-expanded": "aria-expanded",
  "aria-haspopup": "aria-haspopup",
  "aria-hidden": "aria-hidden",
  "aria-invalid": "aria-invalid",
  "aria-label": "aria-label",
  "aria-level": "aria-level",
  "aria-modal": "aria-modal",
  "aria-multiline": "aria-multiline",
  "aria-multiselectable": "aria-multiselectable",
  "aria-orientation": "aria-orientation",
  "aria-placeholder": "aria-placeholder",
  "aria-pressed": "aria-pressed",
  "aria-readonly": "aria-readonly",
  "aria-required": "aria-required",
  "aria-selected": "aria-selected",
  "aria-sort": "aria-sort",
  "aria-valuemax": "aria-valuemax",
  "aria-valuemin": "aria-valuemin",
  "aria-valuenow": "aria-valuenow",
  "aria-valuetext": "aria-valuetext",
};
const WIDGET_ARIA_ATTRIBUTES_LIST = Object.keys(WIDGET_ARIA_ATTRIBUTES);

export const LIVE_REGION_ATTRIBUTES = {
  "aria-atomic": "aria-atomic",
  "aria-busy": "aria-busy",
  "aria-live": "aria-live",
  "aria-relevant": "aria-relevant",
};
const LIVE_REGION_ATTRIBUTES_LIST = Object.keys(LIVE_REGION_ATTRIBUTES);

export const DRAG_AND_DROP_ATTRIBUTES = {
  "aria-dropeffect": "aria-dropeffect",
  "aria-grabbed": "aria-grabbed",
};
const DRAG_AND_DROP_ATTRIBUTES_LIST = Object.keys(DRAG_AND_DROP_ATTRIBUTES);

export const RELATIONSHIP_ATTRIBUTES = {
  "aria-activedescendant": "aria-activedescendant",
  "aria-colcount": "aria-colcount",
  "aria-colindex": "aria-colindex",
  "aria-colspan": "aria-colspan",
  "aria-controls": "aria-controls",
  "aria-describedby": "aria-describedby",
  "aria-details": "aria-details",
  "aria-errormessage": "aria-errormessage",
  "aria-flowto": "aria-flowto",
  "aria-labelledby": "aria-labelledby",
  "aria-owns": "aria-owns",
  "aria-posinset": "aria-posinset",
  "aria-rowcount": "aria-rowcount",
  "aria-rowindex": "aria-rowindex",
  "aria-rowspan": "aria-rowspan",
  "aria-setsize": "aria-setsize",
};
const RELATIONSHIP_ATTRIBUTES_LIST = Object.keys(RELATIONSHIP_ATTRIBUTES);

/**
 * @typedef {keyof typeof WIDGET_ARIA_ATTRIBUTES | keyof typeof LIVE_REGION_ATTRIBUTES | keyof typeof RELATIONSHIP_ATTRIBUTES | keyof typeof DRAG_AND_DROP_ATTRIBUTES} AriaAttribute
 */
