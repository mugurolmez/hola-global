// snackbarReducer.js

import { SHOW_SNACKBAR, HIDE_SNACKBAR } from "../actions/snackbarActions";

const initialState = {
  open: false,
  message: "",
  severity: "info", // "success", "error", "warning", "info"
};

export default function snackbarReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_SNACKBAR:
      return {
        ...state,
        open: true,
        message: action.payload.message,
        severity: action.payload.severity,
      };
    case HIDE_SNACKBAR:
      return {
        ...state,
        open: false,
        message: "",
        severity: "info",
      };
    default:
      return state;
  }
}
