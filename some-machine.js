import { createMachine } from "xstate";
const testMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QBc7IHQEsB2nmYEMAbAZWQNQGIB7bAYQAsDsYACAYwIFswAnA1gCYA2gAYAuolAAHarDyZaUkAA9EARgDsm9ADZdAFlG7BAVgA0IAJ6IAHAGZ0twYICc6+wde3T6g-fUAX0DLVFgMHAViMgowGnomFjAObj4BdTFJJBBZeXwlbLUELyd7QVEAs0sbBD9HZzcPLx864JCQbGoIOGUw5GVchQLQIoBaVydNM3sHXVFpg1tdasRR3XQtTVFXQSnF23VdV11g0LQsXHxo8lQBuSHsZSKDQRWEA-Qyxs9vX38g9p9dDYMAAd1Y4VirHUdzyikehUQ9lcBk+zgOVWsdgmBlMxy+iz+AVOICBnB4-GhsIeTyRtg2uwMukOyM0TL+b3s2ycOy8XlEtlEmnUPjagSAA */
  id: "test",
  initial: "initialState",
  states: {
    initialState: {
      on: {
        "onChange camera 1": {
          target: "camera 1",
          reenter: true,
        },
      },
    },

    "new state 1": {},
    "camera 1": {},
  },
});
