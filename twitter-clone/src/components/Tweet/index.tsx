import React from 'react'
import { 
    Container, 
    Retweeted, 
    Header, 
    Avatar,
    ProfileData,
    Description,
    ImageContent
 } from './style';

interface Props {
    retweet?: boolean;
};

const Tweet = ({ retweet } : Props) => {
  return (
    <Container>
        { retweet && 
            <Retweeted>
                You Retweeteded it
            </Retweeted>
        }
        <Header>
            <Avatar />
            <ProfileData>
                <span>SmxLucas</span>
                <div>@smxLucas</div>
            </ProfileData>
            <Description><p>Mais um dia na correria</p></Description>
        </Header>
        <ImageContent />
    </Container>
  )
}

export default Tweet