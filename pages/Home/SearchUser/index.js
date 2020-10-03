import React from "react";
import { View, Button, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { AppContext } from "../../../context/AppContext";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import searchUserSchema from "../../../schemas/SearchUserSchema";
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
  const { loadUserProfile, loadUserRepos, loadProfileState } = React.useContext(
    AppContext
  );
  const navigation = useNavigation();

  async function handleSearchUserSubmit({ username }) {
    await loadUserProfile(username, navigation);
    await loadUserRepos(username);
  }

  return (
    <Container>
      <Title>Github Search</Title>
      <Wrapper>
        <InputReference>Username</InputReference>
        <Formik
          initialValues={{ username: "" }}
          onSubmit={handleSearchUserSubmit}
          validationSchema={searchUserSchema}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <FormView>
              <Input
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
                placeholder="Search for specific github user"
              />
              {errors.username && (
                <ErrorMessage>
                  <AntDesign name="close" size={14} />
                  {errors.username}
                </ErrorMessage>
              )}
              <SubmitButton
                onPress={handleSubmit}
                disabled={loadProfileState.loading ? true : false}
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
