import { AriaAttribute } from "./attributes";
import { ARIA_ROLES } from "./roles";

const ARIA_ATTRIBUTE_SUPPORT_BY_ROLE = {
  [ARIA_ROLES.alert]: [
    "aria-atomic",
    "aria-busy",
    "aria-controls",
    "aria-current",
    "aria-describedby",
    "aria-details",
    "aria-disabled", // (deprecated on this role in ARIA 1.2)
    "aria-dropeffect",
    "aria-errormessage", // (deprecated on this role in ARIA 1.2)
    "aria-flowto",
    "aria-grabbed",
    "aria-haspopup", // (deprecated on this role in ARIA 1.2)
    "aria-hidden",
    "aria-invalid", // (deprecated on this role in ARIA 1.2)
    "aria-keyshortcuts",
    "aria-label",
    "aria-labelledby",
    "aria-live",
    "aria-owns",
    "aria-relevant",
    "aria-roledescription",
  ],
  [ARIA_ROLES.alertdialog]: [
    "aria-atomic",
    "aria-busy",
    "aria-controls",
    "aria-current",
    "aria-describedby",
    "aria-details",
    "aria-disabled", // (deprecated on this role in ARIA 1.2)
    "aria-dropeffect",
    "aria-errormessage", // (deprecated on this role in ARIA 1.2)
    "aria-flowto",
    "aria-grabbed",
    "aria-haspopup", // (deprecated on this role in ARIA 1.2)
    "aria-hidden",
    "aria-invalid", // (deprecated on this role in ARIA 1.2)
    "aria-keyshortcuts",
    "aria-label",
    "aria-labelledby",
    "aria-live",
    "aria-owns",
    "aria-relevant",
    "aria-roledescription",
  ],
  [ARIA_ROLES.input]: [
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

/**
 * @param {keyof typeof ARIA_ROLES} ariaRole
 * @returns {AriaAttribute[]} supported aria attributes for the given role
 */
export const getSupportedAriaAttributes = (ariaRole) => {
  const supportedAriaAttributes = ARIA_ATTRIBUTE_SUPPORT_BY_ROLE[ariaRole];

  return supportedAriaAttributes ?? [];
};
