import styled from "styled-components";

export const Container = styled.div`
  height: 60px ;
  background:  ${props => props.theme.colors.primary};
  color:  ${props => props.theme.colors.text};
  display: flex ;
  align-items: center ;
  justify-content:space-between ;
  padding: 0 30px;

  img {
    height: 60px ;
  }
`;

export const SearchContainer = styled.div`
  display: felx;
  align-items: center ;
  justify-content: flex-end;
  width: 600px ;
  input {
    display: block ;
    border-radius: 4px;
    flex-grow: 1 ;
    margin-right:4px ;
    height: 32px ;
    padding: 4px;
  }

  button {
    height: 32px ;
    width: 150px ;
    background: ${props => props.theme.colors.secundary};
    color : ${props => props.theme.colors.text};
    padding: 0 12px;

    display: flex ;
    align-items: center ;
    justify-content: center ;

    font-size: 20px ;
    font-weight: 500 ;
    cursor: pointer ;
  
    border-radius: 6px ;
    border: 0;
    
    &:hover {
      filter: 1;
    }

    svg {
      width: 20px ;
      height: 20px ;
      margin-left: 8px ;
    }
  }

    

`;
