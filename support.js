// attribute definitions from https://www.w3.org/TR/wai-aria-1.2/#state_prop_taxonomy

const WIDGET_ARIA_ATTRIBUTES = {
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
}

const LIVE_REGION_ATTRIBUTES = {
    "aria-atomic": "aria-atomic",
    "aria-busy": "aria-busy",
    "aria-live": "aria-live",
    "aria-relevant": "aria-relevant",
};

const DRAG_AND_DROP_ATTRIBUTES = {
    "aria-dropeffect": "aria-dropeffect",
    "aria-grabbed": "aria-grabbed",
};

const RELATIONSHIP_ATTRIBUTES = {
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


const ARIA_ATTRIBUTE_SUPPORT_BY_ROLE = {
  input: [
    "aria-atomic",
    "aria-busy ",
    "aria-controls",
    "aria-current ",
    "aria-describedby",
    "aria-details",
    "aria-disabled ",
    "aria-dropeffect",
    "aria-errormessage",
    "aria-flowto",
    "aria-grabbed ",
    "aria-haspopup",
    "aria-hidden ",
    "aria-invalid ",
    "aria-keyshortcuts",
    "aria-label",
    "aria-labelledby",
    "aria-live",
    "aria-owns",
    "aria-relevant",
    "aria-roledescription",
  ],
};



export const getSupportedAriaAttributes = (ariaRole) => {
  const supportedAriaAttributes = ARIA_ATTRIBUTE_SUPPORT_BY_ROLE[ariaRole];

  return supportedAriaAttributes ?? [];
};
