import React from "react";
import { Container, Header, BackIcon, ProfileInfo } from "./style";

export const Main: React.FC = () => {
    return (
        <Container>
            <Header>
                <button>
                    <BackIcon />
                </button>
                <ProfileInfo>
                    <strong>Lucas Magaldi</strong>
                    <span>44 new Tweets</span>
                </ProfileInfo>
            </Header>
        </Container>
    )
};