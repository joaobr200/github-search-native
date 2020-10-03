import React from "react";
import apiUser from "../services/api/user";
import apiSearch from "../services/api/search";

const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
  const [userRepos, setUserRepos] = React.useState();
  const [userProfile, setUserProfile] = React.useState();
  const [repositories, setRepositories] = React.useState();

  const [loadProfileState, setLoadProfileState] = React.useState({
    loading: true,
    error: "",
    success: false,
  });

  const [loadRepositoriesState, setLoadRepositoriesState] = React.useState({
    loading: false,
    error: "",
    success: false,
  });

  async function loadUserProfile(user, navigation) {
    setLoadProfileState({
      ...loadProfileState,
      error: "",
      loading: true,
      success: false,
    });

    const response = await apiUser.get(`/${user}`);

    if (!response.ok) {
      setLoadProfileState({
        ...loadProfileState,
        error: "Cannot find this user",
        loading: false,
        success: false,
      });
    }

    setLoadProfileState({
      ...loadProfileState,
      error: "",
      loading: false,
      success: true,
    });

    setUserProfile(response.data);
    navigation.navigate("UserDetails");
  }

  async function loadUserRepos(user) {
    const response = await apiUser.get(`/${user}/repos`);

    if (response.ok) {
      setUserRepos(response.data);
    }
  }

  async function loadRepositories(repositorie, navigation) {
    setLoadRepositoriesState({
      ...loadRepositoriesState,
      error: "",
      loading: true,
      success: false,
    });

    const response = await apiSearch.get(`/repositories?q=${repositorie}`);

    if (!response.ok) {
      setLoadRepositoriesState({
        ...loadRepositoriesState,
        error: "Cannot find repositoires",
        loading: false,
        success: false,
      });
    }

    setLoadRepositoriesState({
      ...loadRepositoriesState,
      error: "",
      loading: false,
      success: true,
    });

    setRepositories(response.data);
    navigation.navigate("Repositories");
  }

  return (
    <AppContext.Provider
      value={{
        loadProfileState,
        loadUserProfile,
        loadUserRepos,
        userProfile,
        userRepos,
        loadRepositoriesState,
        loadRepositories,
        repositories,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
