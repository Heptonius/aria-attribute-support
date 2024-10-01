import { describe, it, expect } from 'vitest';
import { getSupportedAriaAttributes } from './support';

describe('getSupportedAriaAttributes', () => {
    it('should return an empty array for any input', () => {
        expect(getSupportedAriaAttributes('button')).toEqual([]);
        expect(getSupportedAriaAttributes('link')).toEqual([]);
        expect(getSupportedAriaAttributes('checkbox')).toEqual([]);
    });

    it('should return an empty array for undefined input', () => {
        expect(getSupportedAriaAttributes(undefined)).toEqual([]);
    });

    it('should return an empty array for null input', () => {
        expect(getSupportedAriaAttributes(null)).toEqual([]);
    });

    it('should return an empty array for empty string input', () => {
        expect(getSupportedAriaAttributes('')).toEqual([]);
    });

    describe("aria roles aria attribute support", () => {
        it('should return an array of supported aria attributes for input role', () => {
            expect(getSupportedAriaAttributes('input')).toEqual([
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
            ]);
        });
    })
});
