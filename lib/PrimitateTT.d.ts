import { createAction, subscribe } from "primitate";
import TimeTraveler from "./TimeTraveler";
declare function initTTCreator<T>(createAction: createAction<T>, subscribe: subscribe<T>): <U>(pick: (state: T) => U) => <V>(memorize: (state: U) => V, remember: (memory: V, state: U) => U) => TimeTraveler<V, U>;
export default initTTCreator;
