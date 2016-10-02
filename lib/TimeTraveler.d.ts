export interface TravelerState<T> {
    index: number;
    canBackToThePast: boolean;
    canBackToTheFuture: boolean;
    memories: T[];
}
export default class TimeTraveler<Memory, State, StateTree> {
    private remember;
    private index;
    private isTravering;
    private memories;
    private unsubscribe;
    private listeners;
    constructor(memorize: (state: StateTree) => Memory | void, remember: (memory: Memory) => State, subscriber: (listener: (state: StateTree) => void) => () => void);
    protected createTravelerState(): TravelerState<Memory>;
    subscribe(listener: (travelerState: TravelerState<Memory>) => void): () => void;
    tellMyMemories(listener: <U>(memories: Memory[], arg?: any) => U): (arg?: any) => {};
    private back(canBack, num);
    backToThePast(): () => boolean;
    backToTheFuture(): () => boolean;
    endTravel(): () => void;
}
