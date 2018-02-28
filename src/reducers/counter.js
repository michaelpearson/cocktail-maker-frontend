import { CounterActions } from "../actions/index";

export default function (counterState = 0, action) {
  switch (action.type) {
    case CounterActions.ACTION_INCREMENT:
      return counterState+1;
    case CounterActions.ACTION_DECREMENT:
      return counterState-1;
    default:
      return counterState;
  }
}