import React, { useContext, useState } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { GitUserContext } from '../../context/GitUserContext';
import { FaGithub } from 'react-icons/fa'

import GioPerrotaDevImg from '../../assets/gioperrottadev.png'


import {
  Container,
  SearchContainer
} from './styles';


interface HeaderProps {
  toggleTheme(): void;
}

export const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);
  const [userName, setUserName] = useState('');

  const { setNewUserNameToSearch } = useContext(GitUserContext);

  const handleClick = () => {
    if (!userName) return;
    setNewUserNameToSearch(userName);
  }
    return (
      <Container>
        <img src={GioPerrotaDevImg} alt="Logo GioPerrotta" />
        <SearchContainer>
          <input 
          type="text" 
          placeholder='Digite o Username para pesquisa'
          onChange={(e) => setUserName(e.target.value) }/>

          <button
            onClick={handleClick}
          >
             Buscar
             <FaGithub/>
         </button>
        </SearchContainer>
        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          onColor={colors.text}
        />
      </Container>
    )
  }
