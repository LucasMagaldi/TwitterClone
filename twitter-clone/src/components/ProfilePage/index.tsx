import React from 'react'
import { Avatar, Banner, CakeIcon, Container, EditButton, Followage, LocationIcon, ProfileData } from './style'
import Feed from '../Feed';

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

        <h1>Lucas Magaldi</h1>
        <h2>@smx_lucas</h2>

        <p>Developer at <a href="#">ExxonMobil Brasil</a></p>
        <ul>
          <li>
            <LocationIcon />
            São Paulo
          </li>
          <li>
            <CakeIcon />
            Born in Octuber, 28
          </li>
        </ul>
        <Followage>
          <span>
            Following <strong>94</strong>
          </span>
          <span>
            <strong>984</strong> followers
          </span>
        </Followage>

        <Feed />
      </ProfileData>
    </Container>
  )
};

