import React from "react";
import apiUser from "../services/api/user";

const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
  const [userRepos, setUserRepos] = React.useState();
  const [userProfile, setUserProfile] = React.useState();

  const [loadProfileState, setLoadProfileState] = React.useState({
    loading: false,
    error: "",
    success: false,
  });

  async function loadUserRepos(user) {
    setUserRepos("");
    const response = await apiUser.get(`/${user}/repos`);

    if (response.ok) {
      setUserRepos(response.data);
    }
  }

  async function loadUserProfile(user, navigation) {
    try {
      setUserProfile("");
      setLoadProfileState({
        ...loadProfileState,
        error: "",
        loading: true,
        success: false,
      });

      const response = await apiUser.get(`/${user}`);

      if (response.status === 404) {
        setLoadProfileState({
          ...loadProfileState,
          error: "User not found",
          loading: false,
          success: false,
        });
        return;
      }

      if (!response.status) {
        setLoadProfileState({
          ...loadProfileState,
          error: "Network error",
          loading: false,
          success: false,
        });
        return;
      }

      if (response.status === 200) {
        setLoadProfileState({
          ...loadProfileState,
          error: "",
          loading: false,
          success: true,
        });

        setUserProfile(response.data);
        navigation.navigate("UserDetails");
        await loadUserRepos(user);
      }
    } catch (error) {
      if (error) {
        setLoadProfileState({
          ...loadProfileState,
          error: "Unsexpected error",
          loading: false,
          success: false,
        });
        return;
      }
    }
  }

  return (
    <AppContext.Provider
      value={{
        loadProfileState,
        loadUserProfile,
        loadUserRepos,
        userProfile,
        userRepos,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
