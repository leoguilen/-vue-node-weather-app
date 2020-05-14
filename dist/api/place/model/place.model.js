"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Place {
    constructor(place, states) {
        this.cod = place.cod;
        this.geoId = place.geoId;
        this.countryName = place.countryName;
        this.countryCode = place.countryCode;
        this.states = states;
    }
}
exports.default = Place;
//# sourceMappingURL=place.model.js.map