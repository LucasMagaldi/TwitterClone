import React from "react";
import { 
    Container, 
    Header, 
    BackIcon, 
    ProfileInfo, 
    BottomMenu,
    HomeIcon,
    SearchIcon,
    BellIcon,
    EmailIcon
 } from "./style";
import { ProfilePage } from "../ProfilePage";

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

            <ProfilePage />

            <BottomMenu>
                <HomeIcon />
                <SearchIcon />
                <BellIcon className="active"/>
                <EmailIcon />
            </BottomMenu>
        </Container>
    )
};