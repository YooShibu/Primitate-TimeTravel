# Primitate-TimeTravel

Primitate-TimeTravel is an addon for the [Primitate](https://github.com/YooShibu/Primitate.git).
It provies a simple way to undo and redo.


## Install
``` sh
npm install --save primitate-time-travel
```

## Example
``` js
const startPrimitate = require("primitate").default;
const initTTCreator = require("primitate-time-travel").default;


const initialState = { counter: { count: 0 } };

function increment(previousState, next, initialState) {
  return { count: previousState.count + next };
}


const { createAction, subscribe, applyAddon } = startPrimitate(initialState);

const increment$ = createAction( state => state.counter )(increment);

const unsubscribe = subscribe( state => state.counter )( counter => {
  console.log(counter);
});
// console: { count: 0 }

const createTimeTraveler = applyAddon(initTTCreator);


const traveler = createTimeTraveler( state => state.counter )(
  state => state.count,   // memorize
  count => ({ count })    // remember
);
const undo = traveler.backToThePast();
const redo = traveler.backToTheFuture();


increment$(3); // console: { count: 3 }
increment$(7); // console: { count: 10 }

// Start time travel!

undo(); // console: { count: 3 }
redo(); // console: { count: 10 }

undo(); // console: { count: 3 }
undo(); // console: { count: 0 }
undo(); // listener does not called
redo(); // console: { count: 3 }
redo(); // console: { count: 10 }
redo(); // listener does not called
```

## License
MIT