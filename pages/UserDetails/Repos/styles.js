import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  padding: 15px;
  background:#1c1c1c;
`;

export const RepoWrapper = styled.View`
  width:100%;
  margin: 15px 0 15px 0;
  padding: 15px;
  
  background:#e1e1e6;
  border-radius:8px;
`

export const Owner = styled.View`
  
`

export const RepoName = styled.Text`
  font-size:22px;
    font-weight: 700;
`

export const OwnerLogin = styled.Text`
  font-size:12px;
    color: #069;
`


export const Description = styled.View`
    margin: 15px 0 15px 0;
`

export const DescriptionText = styled.Text`
    font-size: 14px;
    font-weight:500;
`

export const Info = styled.View`
      width:100%;
      flex-direction:row;
      justify-content: space-between;
`

export const Status = styled.View`
      flex-direction:row;
`

export const StatusIconBlock = styled.View`
    width:18px;
    height:18px;
    margin: 0 6px 0 6px;
    
    border-radius: 6px;
    background: #c9c9c9;

    align-items:center;
    justify-content:center;
`
