import React from "react";
import apiUser from "../services/api/user";
import apiSearch from "../services/api/search";

const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
  const [userRepos, setUserRepos] = React.useState();
  const [userProfile, setUserProfile] = React.useState();
  const [repositories, setRepositories] = React.useState();

  const [loadProfileState, setLoadProfileState] = React.useState({
    loading: false,
    error: "",
    success: false,
  });

  const [loadRepositoriesState, setLoadRepositoriesState] = React.useState({
    loading: false,
    error: "",
    success: false,
  });

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

      console.log(response);
  
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
  
      
      if(response.status === 200) {
        setLoadProfileState({
          ...loadProfileState,
          error: "",
          loading: false,
          success: true,
        });
    
        setUserProfile(response.data);
        navigation.navigate("UserDetails");
      }
      
    } catch (error) {
      if(error) {
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

  async function loadUserRepos(user) {
    setUserRepos("");
    const response = await apiUser.get(`/${user}/repos`);

    if (response.ok) {
      setUserRepos(response.data);
    }
  }

  async function loadRepositories(repositorie, navigation) {
    try {
      setRepositories("");
      setLoadRepositoriesState({
        ...loadRepositoriesState,
        error: "",
        loading: true,
        success: false,
      });
  
      const response = await apiSearch.get(`/repositories?q=${repositorie}`);
  
      if (response.status === 404) {
        setLoadRepositoriesState({
          ...loadRepositoriesState,
          error: "Repositories not found",
          loading: false,
          success: false,
        });
      }

      if (!response.status) {
        setLoadRepositoriesState({
          ...loadRepositoriesState,
          error: "Network error",
          loading: false,
          success: false,
        });
      }
  
      if(response.status === 200) {
        setLoadRepositoriesState({
          ...loadRepositoriesState,
          error: "",
          loading: false,
          success: true,
        });
    
        setRepositories(response.data);
        navigation.navigate("Repositories");
      }
    } catch (error) {
      if(error) {
        setLoadRepositoriesState({
          ...loadRepositoriesState,
          error: "Unsexpected error",
          loading: false,
          success: false,
        });
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
