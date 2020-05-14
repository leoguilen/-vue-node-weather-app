"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const string_utils_1 = require("../../../utils/string.utils");
describe('FormatStateName Method', () => {
    it('should be returned a new string formatted replacing the caracter "-" for spaces', () => {
        const notFormattedString = 'Rio%20Grande%20Do%20Sul';
        const expectedFormattedString = 'Rio Grande Do Sul';
        const string = string_utils_1.FormatName(notFormattedString);
        expect(string).toBe(expectedFormattedString);
    });
});
//# sourceMappingURL=string.utils.test.js.map