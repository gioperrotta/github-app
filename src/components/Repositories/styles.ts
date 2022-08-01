import styled from "styled-components";
import { Tab, TabList, TabPanel, Tabs, } from 'react-tabs';

export const ContainerTabs = styled(Tabs)`
  font-size: 1rem;
  width: 100%;
  margin-top: 16px;
`;

export const ContainerTabList = styled(TabList)`
  list-style-type: none;
  padding: 0.25rem;
  display:flex;
  margin:0 ;
`;

export const ContainerTab = styled(Tab)`
  border-radius: 16px 16px 0 0;
  border: 1px solid ${props => props.theme.colors.secundary} ;
  padding: 16px;
  user-select: none;
  cursor: pointer;
  z-index: 9999;
  
  &:nth-child(2) {
    margin-left: 16px;
  }
  &:focus {
    outline: none ;
  };

  &.is-selected {
    border-bottom: none;
    background:  ${props => props.theme.colors.background} ;
  }
`;

export const ContainerTabPanel = styled(TabPanel)`
  display: none;
  min-height: 50vh;
  padding: 8px;
  border: 1px solid ${props => props.theme.colors.secundary};
  margin-top: -5px ; 
  padding: 16px;

  &.is-selected {
    display: flex;
    flex-wrap: wrap ;
    justify-content: space-between ;
  }
`;


