import { createContext, ReactNode, useState, useEffect } from 'react';
import { api } from '../services/api';

type UserType = {
  name: string;
  html_url: string;
  avatar_url: string;
  login: string;
  public_repos: number;
  followers: number;
  following: number;
  repos_url: string;
};

type RepoType = {
  name: string;
  full_name: string;
  html_url: string;
}

type ReposType = RepoType[];


export const INITIAL_VALUE = {
  name: '',
  html_url: '',
  avatar_url: '',
  login: '',
  public_repos: 0,
  followers: 0,
  following: 0,
  repos_url: '',
};

interface GitUserProviderProps {
  children: ReactNode;
}

interface GitUserContextData {
  userName: string,
  githubUser: UserType,
  repos: ReposType,
  reposStarred: ReposType,
  setNewUserNameToSearch: (userName: string) => void;
}

export const GitUserContext = createContext<GitUserContextData>(
  {} as GitUserContextData
);


export function GitUserProvider({ children }: GitUserProviderProps) {
  const [userName, setUserName] = useState('');
  const [githubUser, setGithubUser] = useState<UserType>(INITIAL_VALUE);
  const [repos, setRepos] = useState<ReposType>([]);
  const [reposStarred, setReposStarred] = useState<ReposType>([]); 

  function saveGithubUserReturned(data :any) {
          
    const { name, html_url, avatar_url, login, repos_url } = data
    const public_repos = Number(data.public_repos)
    const followers = Number(data.followers)
    const following = Number(data.following)
    
    setGithubUser({
      name,
      html_url,
      avatar_url,
      login,
      public_repos,
      followers,
      following,
      repos_url,
    })
  }

    useEffect(() => {
        api.get(`users/${userName}`)
        .then(({ data }) => saveGithubUserReturned(data))
        .catch(error => console.log('GitUserContext 01=>',error))
      }, [userName]);
  
    useEffect(() => {
      api.get(`users/${userName}/starred`).then(({ data })  => {
        const newReposStarred: ReposType = [];
        data.map((item: any) => {
          const newRepo: RepoType = {
            name: item.name,
            full_name: item.full_name,
            html_url: item.html_url
          }
          newReposStarred.push(newRepo)
        })
        setReposStarred(newReposStarred)
      })
      .catch(error => console.log('GitUserContext 02=>',error))
    }, [userName]);
  
    useEffect(() => {
      api.get(githubUser.repos_url).then(({ data }) => {
        const newRepos: ReposType = [];
        data.map((item: any) => {
          const newRepo: RepoType = {
            name: item.name,
            full_name: item.full_name,
            html_url: item.html_url
          }
          newRepos.push(newRepo)
        })
        setRepos(newRepos)
      })
      .catch(error => console.log('GitUserContext 03=>',error))
    }, [githubUser]);

  function setNewUserNameToSearch(userName: string) {
    setUserName(userName);
  }

  return (
    <GitUserContext.Provider 
    value={{ userName, githubUser, repos, reposStarred, setNewUserNameToSearch }}
    >
      {children}
    </GitUserContext.Provider>
  )

}

