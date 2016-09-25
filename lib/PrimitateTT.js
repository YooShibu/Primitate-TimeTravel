"use strict";
var TimeTraveler_1 = require("./TimeTraveler");
// Primitate - Time Travelable
function initTTCreator(createAction, subscribe) {
    return function (pick) {
        /**
         * Create Time Traveler
         *
         * @template V
         * @param {(state: U) => V} memorize - Time traveler memorize the return value of the memorize function when state changed
         * @param {(memory: V, state: U) => U} remember - Remember the state value from memories and current state.
         * @returns {TimeTraveler}
         *
         */
        return function (memorize, remember) {
            var remember$ = createAction(pick)(function (previousState, memory) { return remember(memory, previousState); });
            return new TimeTraveler_1["default"](memorize, remember$, subscribe(pick));
        };
    };
}
exports.__esModule = true;
exports["default"] = initTTCreator;
//# sourceMappingURL=PrimitateTT.js.map