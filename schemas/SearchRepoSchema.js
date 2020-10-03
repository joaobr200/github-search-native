import * as Yup from "yup";

const searchRepoSchema = Yup.object().shape({
  repositorie: Yup.string()
    .min(3, "This is a repositorie ??")
    .max(16, "Its a verse of bible, i'm alright ?")
    .required("This field is required"),
});

export default searchRepoSchema;
