import styled from "styled-components";

export const Container = styled.div`
  display: block ;
  border: 1px solid ${props => props.theme.colors.text};
  margin: 4px;
  padding: 8px ;
  width: 250px ;
  min-height: 100px ;
  a {
    color: ${props => props.theme.colors.text};
  }
  border-radius: 6px;
`;
