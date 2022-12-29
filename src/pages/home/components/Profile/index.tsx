import { useEffect, useState } from 'react';
import { api } from '../../../../lib/axios';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { TagLink, ProfileContainer, ProfileContent, Tags } from "./styles";

interface UserType {
  avatar_url: string,
  name: string,
  html_url: string,
  bio: string,
  login: string,
  company?: string,
  followers: number,
}

export function Profile() {
  const [user, setUser] = useState<UserType>()

  async function fetchProfile() {
    const response = await api.get('users/felipe-mlopes')

    setUser(response.data)
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  return (
    <ProfileContainer>
      <img src={user?.avatar_url} alt="Foto do perfil" />
      <ProfileContent>
        <header>
          <h2>{user?.name}</h2>
          <TagLink>
            <a href={user?.html_url}>
              github
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </TagLink>
        </header>
        <p>{user?.bio}</p>
        <Tags>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <p>{user?.login}</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} />
            <p>{user?.company}</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <p>{user?.followers} seguidores</p>
          </div>
        </Tags>
      </ProfileContent>
    </ProfileContainer>
  )
}