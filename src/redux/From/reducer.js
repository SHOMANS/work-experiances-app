import { STORAGE_FORM, FINISH_UPDATE } from "./types";

export default function FormReduser(state = { isUpdate: false }, action) {
  switch (action.type) {
    case STORAGE_FORM:
      return {
        ...state,
        workExperiances: action.payload,
        isUpdate: true,
      };
    case FINISH_UPDATE:
      return {
        ...state,
        workExperiances: state,
        isUpdate: false,
      };
    default:
      return state;
  }
}
