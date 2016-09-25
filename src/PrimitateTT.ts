import { createAction, subscribe } from "primitate"
import TimeTraveler from "./TimeTraveler"

// Primitate - Time Travelable
function initTTCreator<T>(createAction: createAction<T>, subscribe: subscribe<T>) {
  return <U>(pick: (state: T) => U) => {
    /**
     * Create Time Traveler
     * 
     * @template V
     * @param {(state: U) => V} memorize - Time traveler memorize the return value of the memorize function when state changed
     * @param {(memory: V, state: U) => U} remember - Remember the state value from memories and current state.
     * @returns {TimeTraveler}
     * 
     */
      return <V>( memorize: (state: U) => V, remember: ( memory: V, state: U ) => U ) => {
        const remember$ = createAction(pick)<V>( (previousState, memory) =>  remember(memory, previousState) );
        
        return new TimeTraveler(
          memorize, remember$, subscribe(pick)
        );
      }
    }
}

export default initTTCreator