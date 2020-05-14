"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function FormatName(name) {
    if (name.split('%20').length === 1) {
        return name;
    }
    else {
        const stateNameParts = name.split('%20');
        name = '';
        for (let i = 0; i < stateNameParts.length; i++) {
            if (i === stateNameParts.length - 1) {
                name += `${stateNameParts[i]}`;
            }
            else {
                name += `${stateNameParts[i]} `;
            }
        }
    }
    return name;
}
exports.FormatName = FormatName;
//# sourceMappingURL=string.utils.js.map