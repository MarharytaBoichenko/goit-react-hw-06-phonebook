import { createAction } from "@reduxjs/toolkit";

export const increment = createAction("counter/increment");
console.log(increment(3));
let a = increment(3);
console.log(increment.type);
console.log(a.payload);

export const decrement = createAction("counter/decrement");
console.log(decrement(3));
// export const decrement = (value) => ({
//   type: counterTypes.DECREMENT,
//   payload: value,
// });
