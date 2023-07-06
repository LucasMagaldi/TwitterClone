import React from 'react'
import { Container, Tab, Tweets } from './styele'
import Tweet from '../Tweet'

const Feed: React.FC = () => {
  return (
    <Container>
        <Tab>Twitter</Tab>

        <Tweets>
            <Tweet />
            <Tweet retweet/>
            <Tweet />
        </Tweets>
    </Container>
  )
}

export default Feed