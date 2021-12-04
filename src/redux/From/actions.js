const { FINISH_UPDATE, STORAGE_FORM } = require("./types");

module.exports = {
  storageForm: (data) => (dispatch) => {
    dispatch({
      type: STORAGE_FORM,
      payload: data,
    });
  },
  finishUpdate: () => (dispatch) => {
    dispatch({ type: FINISH_UPDATE });
  },
};
