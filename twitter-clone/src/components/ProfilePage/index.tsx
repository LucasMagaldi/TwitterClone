import React from 'react'
import { Avatar, Banner, Container, EditButton, ProfileData } from './style'

export const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      
      <ProfileData>
        <EditButton outlined>
          Edit Profile
        </EditButton>
      </ProfileData>
    </Container>
  )
};

