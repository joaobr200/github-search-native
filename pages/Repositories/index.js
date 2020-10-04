import React from "react";
import { AppContext } from "../../context/AppContext";
import { ScrollView, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import GetLanguageIcon from "../../utils/getLanguageIcon";

import {
  Container,
  Header,
  HeaderText,
  RepoNotFoundView,
  RepoNotFoundText,
  RepoWrapper,
  Owner,
  RepoName,
  OwnerLogin,
  Description,
  DescriptionText,
  Info,
  Status,
  StatusIconBlock,
} from "./styles";

const Repositories = () => {
  const { repositories } = React.useContext(AppContext);
  return (
    <>
    {repositories.total_count > 0 && (
      <Header>
          <HeaderText>
            {repositories.total_count} Repositories Founds{" "}
          </HeaderText>
      </Header>
        )}
      <Container>
          {repositories.total_count > 0 ?
          <ScrollView style={{ marginHorizontal: 20 }} showsVerticalScrollIndicator={false}  >
          {repositories.items.map(
              ({
                name,
                description,
                forks,
                fork,
                stargazers_count,
                watchers,
                language,
                owner,
                html_url,
              }) => (
                <RepoWrapper key={name}>
                  <Owner>
                    <RepoName>{name}</RepoName>
                    <OwnerLogin>@{owner.login}</OwnerLogin>
                  </Owner>
                  <Description>
                    <DescriptionText>{description}</DescriptionText>
                  </Description>
                  <Info>
                    <Status>
                      <Text>
                        <StatusIconBlock>
                          <AntDesign name="fork" size={12} />
                        </StatusIconBlock>
                        {forks}
                      </Text>
                      <Text>
                        <StatusIconBlock>
                          <AntDesign name="star" size={12} />
                        </StatusIconBlock>
                        {stargazers_count}
                      </Text>
                      <Text>
                        <StatusIconBlock>
                          <AntDesign name="eyeo" size={12} />
                        </StatusIconBlock>
                        {watchers}
                      </Text>
                    </Status>
                    <Text>
                      <GetLanguageIcon lang={language ? language : ""} />{" "}
                      {fork ? "Forked" : language}
                    </Text>
                  </Info>
                </RepoWrapper>
              )
            )}
        </ScrollView> :  <RepoNotFoundView>
              <RepoNotFoundText>No repository found</RepoNotFoundText>
            </RepoNotFoundView>}
      </Container>
    </>
  );
};

export default Repositories;
