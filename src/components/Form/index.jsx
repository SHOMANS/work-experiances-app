import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { WorkExperianceSchema } from "../../utils/validation";
import CustomForm from "./CustomForm";
import {
  createNewWorkExperiance,
  updateWorkExperiance,
} from "../../redux/WorkExperiance/actions";
import ScrollToTop from "../../utils/scrollToTop";
import { useSelector } from "react-redux";

function Form() {
  const dispatch = useDispatch();
  const {
    FormReduser: { isUpdate, workExperiances },
  } = useSelector((state) => state);
  return (
    <Formik
      enableReinitialize={true}
      initialValues={isUpdate ? workExperiances : initialValues}
      onSubmit={(values, { resetForm }) => {
        // alert(JSON.stringify(values, null, 2));
        isUpdate
          ? dispatch(updateWorkExperiance(values))
          : dispatch(createNewWorkExperiance(values));

        resetForm();
        ScrollToTop();
      }}
      validationSchema={WorkExperianceSchema}
      children={CustomForm}
    />
  );
}

export default Form;

const initialValues = {
  jobTitle: "",
  jobField: "",
  jobLocation: "",
  startDate: "",
  endDate: "",
  currentlyWork: false,
  jobDescription: "",
  companyName: "",
  companyAdress: "",
  companyIndustry: "",
  companySize: "",
  companySector: "",
  supervisorName: "",
  supervisedEmployees: "",
  leavingReazon: "",
  startSalary: "",
  endSalary: "",
  currency: "",
};
