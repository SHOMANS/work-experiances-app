export const checkCurrentlyWork = (experiance) => {
  if (experiance.currentlyWork) {
    delete experiance.endDate;
  }
};
