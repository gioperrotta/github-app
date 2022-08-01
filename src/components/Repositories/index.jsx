import { useContext } from 'react';
import { GitUserContext } from '../../context/GitUserContext';

import { RepositoryItem } from './RepositoryItem'

import {
  ContainerTab,
  ContainerTabList,
  ContainerTabPanel,
  ContainerTabs
} from './styles'

export function Repositories() {
  const { repos, reposStarred } = useContext(GitUserContext);

  return (
    <>
      <ContainerTabs
        selectedTabClassName='is-selected'
        selectedTabPanelClassName='is-selected'
      >
        <ContainerTabList>
        <ContainerTab>Repositories</ContainerTab>
         <ContainerTab>Starred</ContainerTab>
        </ContainerTabList>
          <ContainerTabPanel>
          {repos.map((repo) => (
            <RepositoryItem
              key={repo.name}
              name={repo.name}
              fullName={repo.full_name}
              linkToRepo={repo.html_url}
            />
          ))}
        </ContainerTabPanel>

          <ContainerTabPanel>
            {reposStarred.map((repo) => (
              <RepositoryItem
                key={repo.name}
                name={repo.name}
                fullName={repo.full_name}
                linkToRepo={repo.html_url}
              />
            ))}
          </ContainerTabPanel>
      </ContainerTabs>
    </>
  )
}