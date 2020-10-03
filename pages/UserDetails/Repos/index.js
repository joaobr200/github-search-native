import React from "react";
import { AppContext } from "../../../context/AppContext";
import { SafeAreaView,ScrollView, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import GetLanguageIcon from "../../../utils/getLanguageIcon";

import { Container,RepoWrapper, Owner, RepoName, OwnerLogin, Description, DescriptionText, Info, Status, StatusIconBlock, Lang } from './styles';

function Repos() {

  const { userRepos } = React.useContext(AppContext);

    return (
    <Container>
      <ScrollView style={{marginHorizontal: 20}}>
        {/* {userRepos && userRepos.map(({name, description, forks, fork, stargazers_count, watchers, language, owner, html_url}) => (
          <>
            <RepoWrapper>
              <Owner>
        <RepoName>{name}</RepoName>
                <OwnerLogin>@{owner.login}</OwnerLogin>
              </Owner>
              <Description>
        <DescriptionText>{description}</DescriptionText>
              </Description>
              <Info>
                <Status>
        <Text><StatusIconBlock><AntDesign name="fork" size={12}/></StatusIconBlock>{forks}</Text>
        <Text><StatusIconBlock><AntDesign name="star" size={12}/></StatusIconBlock>{stargazers_count}</Text>
                    <Text><StatusIconBlock><AntDesign name="eyeo" size={12}/></StatusIconBlock>{watchers}</Text>
                </Status>
        <Text><GetLanguageIcon lang={language ? language : "" }/> {fork ? "Forked" : language }</Text>
              </Info>
            </RepoWrapper>
          </>
        ))} */}
      </ScrollView>
    </Container>
  );
};

export default Repos;