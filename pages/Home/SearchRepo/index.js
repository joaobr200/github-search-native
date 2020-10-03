import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AppContext } from "../../../context/AppContext";
import { Formik } from "formik";
import searchRepoSchema from "../../../schemas/SearchRepoSchema";
import AntDesign from "@expo/vector-icons/AntDesign";

import Input from "../../../components/Input";
import {
  Container,
  Title,
  Wrapper,
  FormView,
  InputReference,
  ErrorMessage,
  SubmitButton,
  SubmitButtText,
} from "./styles";

function SearchUser() {
  const { loadRepositories, loadRepositoriesState } = React.useContext(
    AppContext
  );
  const navigation = useNavigation();

  async function handleSearchRepoSubmit({ repositorie }) {
    await loadRepositories(repositorie, navigation);
  }

  return (
    <Container>
      <Title>Github Search</Title>
      <Wrapper>
        <InputReference>Repositories</InputReference>
        <Formik
          initialValues={{ repositorie: "" }}
          onSubmit={handleSearchRepoSubmit}
          validationSchema={searchRepoSchema}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <FormView>
              <Input
                onChangeText={handleChange("repositorie")}
                onBlur={handleBlur("repositorie")}
                value={values.repositorie}
                placeholder="Search for repositories"
              />
              {errors.repositorie && (
                <ErrorMessage>
                  <AntDesign name="close" size={14} />
                  {errors.repositorie}
                </ErrorMessage>
              )}
              <SubmitButton
                onPress={handleSubmit}
                disabled={loadRepositoriesState.loading ? true : false}
              >
                <SubmitButtText>Search now</SubmitButtText>
              </SubmitButton>
            </FormView>
          )}
        </Formik>
      </Wrapper>
    </Container>
  );
}

export default SearchUser;
