import {
  Container
} from './styles'

interface RepositoryItemProps {
  name: string;
  fullName: string;
  linkToRepo: string;
}

export function RepositoryItem({ name, fullName, linkToRepo }: RepositoryItemProps) {
  return (
    <Container>
      <h2>{name}</h2>
      <a href={linkToRepo} target={'_blank'} rel="noreferrer">{fullName}</a>
    </Container>
  )
}