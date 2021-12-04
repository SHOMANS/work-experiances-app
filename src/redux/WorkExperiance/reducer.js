import {
  CREATE_NEW_WORK_EXPERIANCE,
  DELETE_WORK_EXPERIANCE,
  END_LOADING,
  ERROR,
  FETCH_ALL_WORK_EXPERIANCES,
  START_LOADING,
  UPDATE_WORK_EXPERIANCE,
} from "./types";

export default function WorkExperiancesReducer(
  state = { isLoading: false, error: "", workExperiances: [] },
  action
) {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case END_LOADING:
      return { ...state, isLoading: false };
    case ERROR:
      return { ...state, error: action.payload };
    case FETCH_ALL_WORK_EXPERIANCES:
      return {
        ...state,
        workExperiances: action.payload,
        error: "",
      };

    case CREATE_NEW_WORK_EXPERIANCE:
      return {
        ...state,
        workExperiances: [action.payload, ...state.workExperiances],
        error: "",
      };

    case DELETE_WORK_EXPERIANCE:
      return {
        ...state,
        workExperiances: state.workExperiances.filter(
          (item) => item._id !== action.payload
        ),
      };
    case UPDATE_WORK_EXPERIANCE:
      return {
        ...state,
        workExperiances: state.workExperiances.map((experiance) =>
          experiance._id === action.payload._id ? action.payload : experiance
        ),
      };

    default:
      return state;
  }
}
