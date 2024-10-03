import { describe, it, expect } from "vitest";
import { getSupportedAriaAttributes } from "./support";

describe("getSupportedAriaAttributes", () => {
  it("should return an empty array for any input", () => {
    expect(getSupportedAriaAttributes("button")).toEqual([]);
    expect(getSupportedAriaAttributes("link")).toEqual([]);
    expect(getSupportedAriaAttributes("checkbox")).toEqual([]);
  });

  it("should return an empty array for undefined input", () => {
    expect(getSupportedAriaAttributes(undefined)).toEqual([]);
  });

  it("should return an empty array for null input", () => {
    expect(getSupportedAriaAttributes(null)).toEqual([]);
  });

  it("should return an empty array for empty string input", () => {
    expect(getSupportedAriaAttributes("")).toEqual([]);
  });

  describe("returns correct list of ARIA attributes for a given ARIA role", () => {
    it('when the ARIA role is "alert"', () => {
      const ariaRole = "alert";

      const expectedAttributes = [
        "aria-atomic",
        "aria-busy",
        "aria-controls",
        "aria-current",
        "aria-describedby",
        "aria-details",
        "aria-disabled", // deprecated on this role in ARIA 1.2
        "aria-dropeffect",
        "aria-errormessage", // deprecated on this role in ARIA 1.2
        "aria-flowto",
        "aria-grabbed",
        "aria-haspopup", // deprecated on this role in ARIA 1.2
        "aria-hidden",
        "aria-invalid", // deprecated on this role in ARIA 1.2
        "aria-keyshortcuts",
        "aria-label",
        "aria-labelledby",
        "aria-live",
        "aria-owns",
        "aria-relevant",
        "aria-roledescription",
      ];

      expect(getSupportedAriaAttributes(ariaRole)).toEqual(expectedAttributes);
    });
    it('when the ARIA role is "alertdialog"', () => {
      const ariaRole = "alertdialog";

      const expectedAttributes = [
        "aria-atomic",
        "aria-busy",
        "aria-controls",
        "aria-current",
        "aria-describedby",
        "aria-details",
        "aria-disabled", // deprecated on this role in ARIA 1.2
        "aria-dropeffect",
        "aria-errormessage", // deprecated on this role in ARIA 1.2
        "aria-flowto",
        "aria-grabbed",
        "aria-haspopup", // deprecated on this role in ARIA 1.2
        "aria-hidden",
        "aria-invalid", // deprecated on this role in ARIA 1.2
        "aria-keyshortcuts",
        "aria-label",
        "aria-labelledby",
        "aria-live",
        "aria-owns",
        "aria-relevant",
        "aria-roledescription",
      ];

      expect(getSupportedAriaAttributes(ariaRole)).toEqual(expectedAttributes);
    });
    it('when the ARIA role is "input"', () => {
      const ariaRole = "input";

      const expectedAttributes = [
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
      ];

      expect(getSupportedAriaAttributes(ariaRole)).toEqual(expectedAttributes);
    });
  });
});
