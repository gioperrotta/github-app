import { useContext } from 'react';
import { GitUserContext } from '../../context/GitUserContext';

import AvatarUrlImg from '../../assets/Github.png'

import {
  Container,
  ContainerInfoUser,
  ContainerImg,
  ContainerUserName,
  ContainerStatus,
  ContainerNoUser
} from './styles'

export function Profile() {
  const { githubUser } = useContext(GitUserContext);

  return (
    <Container>
      {githubUser.avatar_url ?
        <ContainerImg
          src={githubUser.avatar_url}
          alt="Avatar do usuário no github"
        /> :
        <ContainerImg
          src={AvatarUrlImg}
          alt="Avatar do usuário no github"
        />
      }

      {githubUser.name ?
        <ContainerInfoUser>
          <div>
            <h1>{githubUser.name}</h1>
            <ContainerUserName>
              <h3>Username: </h3>
              <a href={githubUser.html_url}
                target={'_blank'}
                rel="noreferrer"
              >{githubUser.login}</a>
            </ContainerUserName>
          </div>

          <ContainerStatus>
            <div>
              <h4>Public-Repos</h4>
              <span>{githubUser.public_repos}</span>
            </div>
            <div>
              <h4>Followers</h4>
              <span>{githubUser.followers}</span>
            </div>
            <div>
              <h4>Following</h4>
              <span>{githubUser.following}</span>
            </div>
          </ContainerStatus>
        </ContainerInfoUser> :
        <ContainerNoUser>
          <h1> Busque um Usuário válido do Github </h1>
        </ContainerNoUser>
      }
    </Container>


  )
}