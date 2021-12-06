import {
  CREATE_NEW_WORK_EXPERIANCE,
  DELETE_WORK_EXPERIANCE,
  END_LOADING,
  ERROR,
  FETCH_ALL_WORK_EXPERIANCES,
  START_LOADING,
  UPDATE_WORK_EXPERIANCE,
} from "./types";
import { checkCurrentlyWork } from "../../utils/deleteEndDate";

import * as api from "./api";
import { FINISH_UPDATE } from "../From/types";

export const fetchAllWorkExperiances = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchAll();
    dispatch({ type: FETCH_ALL_WORK_EXPERIANCES, payload: data });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
  dispatch({ type: END_LOADING });
};

export const createNewWorkExperiance = (body) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    checkCurrentlyWork(body);
    const { data } = await api.createNew(body);
    dispatch({ type: CREATE_NEW_WORK_EXPERIANCE, payload: data });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
  dispatch({ type: END_LOADING });
};

export const deleteWorkExperiance = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    await await api.deleteOne(id);

    dispatch({ type: DELETE_WORK_EXPERIANCE, payload: id });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
  dispatch({ type: END_LOADING });
};
export const updateWorkExperiance = (body) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    checkCurrentlyWork(body);
    const { data } = await api.updateOne(body);
    dispatch({ type: UPDATE_WORK_EXPERIANCE, payload: data });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
  dispatch({ type: END_LOADING });
  dispatch({ type: FINISH_UPDATE });
};
