import styled from "styled-components";


export const Container = styled.div`
  padding: 20px 0 ;
  display: flex;
  align-items: center;
`;

export const ContainerImg = styled.img`
  border-radius: 50% ;
  width: 200px ;
  margin: 8px ;
`;

export const ContainerNoUser = styled.div`
  display: flex;
  align-items: center ;
  justify-content: center;
  height: 200px;
  width: 80% ;
`;

export const ContainerInfoUser = styled.div`
  display: flex;
  flex-direction: column ;
  align-items: flex-start ;
  justify-content: space-between;
  margin-left: 0.5rem;
  h1 {
    font-size: 2rem;
    font-weight: bold;
  }
  h3 {
    font-size: 1.2rem;
    font-weight: bold;
  }
  h4 {
    font-size: 1rem;
    font-weight: bold;
  }
`;

export const ContainerStatus = styled.div`
  display: flex;
  align-items: center;
  div {
    margin: 8px;
    text-align: center ;
    span {
        display: block ;
        margin-top: 5px ;
      }
  }
`;

export const ContainerUserName = styled.div`
  display: flex;
  align-items: center;
  margin-top: .5rem ;
 h3 {margin-right: 10px};
 a {
  font-size: 1.2rem;
  color: ${props => props.theme.colors.secundary};
  font-weight: bold;
 } 
`;

