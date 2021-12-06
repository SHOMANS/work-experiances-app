import * as yup from "yup";

function WorkExperianceSchema() {
  return yup.object({
    jobTitle: yup
      .string("This Field Should Be Text")
      .required("This Field Is Required"),
    jobField: yup
      .string("This Field Should Be Text")
      .required("This Field Is Required"),
    jobLocation: yup
      .string("This Field Should Be Text")
      .required("This Field Is Required"),
    startDate: yup.date().required("This Field Is Required"),
    endDate: yup
      .date()
      .default(undefined)
      .when("currentlyWork", (currentlyWork, field) =>
        currentlyWork === false
          ? field.required("This Field Should Be Text")
          : field
      )
      .when(
        "startDate",
        (startDate, schema) =>
          startDate &&
          schema.min(startDate, "End date must be greater than start date")
      ),

    currentlyWork: yup.boolean(),
    jobDescription: yup
      .string("This Field Should Be Text")
      .required("This Field Is Required"),
    companyName: yup
      .string("This Field Should Be Text")
      .required("This Field Is Required"),
    companyAdress: yup
      .string("This Field Should Be Text")
      .required("This Field Is Required"),
    companyIndustry: yup
      .string("This Field Should Be Text")
      .required("This Field Is Required"),
    companySize: yup
      .number("This Field Should Be Number")
      .positive()
      .integer("It should be integer number")
      .required("This Field Is Required"),
    companySector: yup
      .string("This Field Should Be Text")
      .required("This Field Is Required"),
    supervisorName: yup
      .string("This Field Should Be Text")
      .required("This Field Is Required"),
    supervisedEmployees: yup
      .number("This Field Should Be Number")
      .positive()
      .integer("It should be integer number")
      .required("This Field Is Required"),
    leavingReazon: yup
      .string("This Field Should Be Text")
      .required("This Field Is Required"),
    startSalary: yup
      .number("This Field Should Be Number")
      .positive()
      .integer("It should be integer number")
      .required("This Field Is Required"),
    endSalary: yup
      .number("This Field Should Be Number")
      .positive()
      .integer("It should be integer number")
      .required("This Field Is Required"),
    currency: yup
      .string("This Field Should Be Text")
      .required("This Field Is Required"),
  });
}

export default WorkExperianceSchema;
