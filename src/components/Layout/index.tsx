import { ReactNode } from "react";
import { Profile } from "../Profile";
import { useContext } from 'react';
import { GitUserContext } from '../../context/GitUserContext';
import { Repositories } from "../Repositories";

import { Container } from './styles';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { githubUser } = useContext(GitUserContext);

  return (
    <Container>
      {children}
      <Profile />
      {githubUser.name ?
        <Repositories /> :
        <div></div>
      }
    </Container>
  )
}