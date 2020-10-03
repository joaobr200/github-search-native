import React from 'react';
import api from "../services/api";

const AppContext = React.createContext();

const AppContextProvider = ({children}) => {
  const [user, setUser] = React.useState("joaobr200")
  const [userRepos, setUserRepos] = React.useState();
  const [userProfile, setUserProfile] = React.useState();


  async function loadUserProfile(user) {
    const response = await api.get(`/${user}`);

    if(response.ok) {
      setUserProfile(response.data);
    }
  }

  async function loadUserRepos(user) {
    const response = await api.get(`/${user}/repos`);

    if(response.ok) {
      setUserRepos(response.data);
    }
  }
  return(
    <AppContext.Provider value={{user, userRepos,userProfile}}>
          {children}
    </AppContext.Provider>
  )
}

export {AppContext, AppContextProvider};