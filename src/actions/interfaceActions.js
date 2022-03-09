import { finishLoading, startLoading } from "../reducers/interfaceReducer";

export function startLoadingAction() {
  return function (dispatch) {
    dispatch(startLoading());
  };
}

export function finishLoadingAction() {
  return function (dispatch) {
    dispatch(finishLoading());
  };
}