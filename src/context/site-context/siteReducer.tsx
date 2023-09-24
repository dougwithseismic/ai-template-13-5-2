import { Actions, actionMap } from './siteActions';
import { State } from './siteActions';

export const siteReducer = (state: State, action: Actions): State => {
  const reducer = actionMap[action.type];
  if (reducer) {
    return reducer(state, action);
  }
  return state;
};
