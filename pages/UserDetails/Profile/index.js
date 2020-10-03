import React from "react";
import { AppContext } from "../../../context/AppContext";
import AntDesign from "@expo/vector-icons/AntDesign";

import { Container, Panel, Avatar, Info, InfoName, InfoLogin, Follows, FollowsText, Bio,BioText, Social,BlogSocialButton,BlogButtonIcon, GithubSocialButton, TwitterSocialButton } from './styles';

function Profile({navigation}) {
  const {userProfile } = React.useContext(AppContext);
  
  function handleNavigate() {
    navigation.navigate("Repos"); 
  }
  return (
    <Container>
      {userProfile && (
        <>
        <Panel>
    
        <Avatar source={{uri: userProfile.avatar_url}}/>
    
        <Info>
          <InfoName>{userProfile.name}</InfoName>
          <InfoLogin>@{userProfile.login}</InfoLogin>
          <Follows>
          <FollowsText>Following <FollowsText style={{display:"block"}}>{userProfile.following}</FollowsText></FollowsText>
          <FollowsText>Followers <FollowsText style={{display:"block"}}>{userProfile.followers}</FollowsText></FollowsText>
          <FollowsText>Repositories <FollowsText style={{display:"block"}}>{userProfile.public_repos}</FollowsText></FollowsText>
          </Follows>  
        </Info>
    
        <Bio>
          <BioText>{userProfile.bio}</BioText>
        </Bio>
    
        <Social>
          <GithubSocialButton onPress={handleNavigate}>
          <AntDesign name="github" size={26} color="#fff" />
          </GithubSocialButton>
          {userProfile.twitter_username && (
            <TwitterSocialButton>
            <AntDesign name="twitter" size={26} color="#fff" />
          </TwitterSocialButton>
          )}
          {
            userProfile.blog && (
              <BlogSocialButton>
            <BlogButtonIcon>@</BlogButtonIcon>
          </BlogSocialButton>
            )
          }
        </Social>
        </Panel>
            </>
      )}
    </Container>
  );
};

export default Profile;
