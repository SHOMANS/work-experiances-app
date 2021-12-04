import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchAllWorkExperiances } from "../../redux/WorkExperiance/actions";
import WorkExperianceItem from "./WorkExperianceItem";

export default function WorkExperianceSlices() {
  const dispatch = useDispatch();

  const { WorkExperiancesReducer } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchAllWorkExperiances());
  }, [dispatch]);

  return (
    <div className="workExperiances">
      {WorkExperiancesReducer?.isLoading && (
        <div className="loading">Loading ...</div>
      )}
      {WorkExperiancesReducer?.error && (
        <div className="error">`Error: ${WorkExperiancesReducer.error}`</div>
      )}
      {!WorkExperiancesReducer?.error &&
        !WorkExperiancesReducer?.isLoading &&
        WorkExperiancesReducer?.workExperiances.length === 0 && (
          <div className="slice">Empty</div>
        )}
      {WorkExperiancesReducer?.workExperiances.map((item) => (
        <WorkExperianceItem itemDetails={item} key={item._id} />
      ))}
    </div>
  );
}
