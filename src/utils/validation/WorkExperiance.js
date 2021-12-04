import * as yup from "yup";

function WorkExperianceSchema() {
  return yup.object({
    jobTitle: yup
      .string("This Field Should Be Text")
      .required("This Field Is Required"),
    jobField: yup.string("This Field Should Be Text"),
    jobLocation: yup.string("This Field Should Be Text"),
    startDate: yup.date(),
    endDate: yup.date(),
    currentlyWork: yup.boolean(),
    jobDescription: yup.string("This Field Should Be Text"),
    companyName: yup
      .string("This Field Should Be Text")
      .required("This Field Is Required"),
    companyAdress: yup.string("This Field Should Be Text"),
    companyIndustry: yup.string("This Field Should Be Text"),
    companySize: yup.number("This Field Should Be Number"),
    companySector: yup.string("This Field Should Be Text"),
    supervisorName: yup.string("This Field Should Be Text"),
    supervisedEmployees: yup.string("This Field Should Be Text"),
    leavingReazon: yup.string("This Field Should Be Text"),
    startSalary: yup.number("This Field Should Be Number"),
    endSalary: yup.number("This Field Should Be Number"),
    currency: yup.string("This Field Should Be Text"),
  });
}

export default WorkExperianceSchema;
