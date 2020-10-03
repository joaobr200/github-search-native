import * as Yup from "yup";

const searchUserSchema = Yup.object().shape({
  username: Yup.string()
    .trim("Cannot include leading and trailing spaces")
    .strict(true)
    .min(3, "This field required a cool github username")
    .max(16, "This github username is not so cool")
    .required("This field is required"),
});

export default searchUserSchema;
