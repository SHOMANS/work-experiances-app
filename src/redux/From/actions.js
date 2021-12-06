const { checkCurrentlyWork } = require("../../utils/deleteEndDate");
const { FINISH_UPDATE, STORAGE_FORM } = require("./types");

module.exports = {
  storageForm: (data) => (dispatch) => {
    checkCurrentlyWork(data);
    dispatch({
      type: STORAGE_FORM,
      payload: data,
    });
  },
  finishUpdate: () => (dispatch) => {
    dispatch({ type: FINISH_UPDATE });
  },
};
