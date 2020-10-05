import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 70px 15px 15px 15px;

  background: #1c1c1c;
`;

export const Panel = styled.View`
  align-items: center;

  width: 100%;
  padding: 15px;

  background: #e1e1e6;
  border-radius: 8px;
`;

export const Avatar = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;

  background: #c3c3c3;
`;

export const Info = styled.View`
  width: 100%;
  align-self: flex-start;
`;

export const InfoName = styled.Text`
  font-size: 22px;
  font-weight: 700;
`;

export const InfoLogin = styled.Text`
  font-size: 12px;
  color: #069;
`;

export const Follows = styled.View`
  width: 100%;
  margin: 15px 0 0px 0;
  flex-direction: row;
  text-align: center;
  justify-content: space-evenly;
`;

export const FollowsText = styled.Text`
  font-size: 16px;
  font-weight: 500;
`;

export const Bio = styled.View`
  margin: 30px 0 30px 0;
`;

export const BioText = styled.Text`
  font-size: 15.5px;
  font-weight: 500;
`;

export const Social = styled.View`
  flex-direction: row;
  align-self: flex-start;
`;

const SocialButtonCSS = css`
  width: 46px;
  height: 46px;
  margin: 0 4px 0 4px;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
`;

export const BlogSocialButton = styled.TouchableOpacity`
  ${SocialButtonCSS}
  color:#fff;
  background: rgb(28, 100, 242);
`;

export const BlogButtonIcon = styled.Text`
  color: #fff;
  font-size: 26px;
`;

export const GithubSocialButton = styled.TouchableOpacity`
  ${SocialButtonCSS}
  background:#000;
`;

export const TwitterSocialButton = styled.TouchableOpacity`
  ${SocialButtonCSS}
  background:#1da1f2;
`;
