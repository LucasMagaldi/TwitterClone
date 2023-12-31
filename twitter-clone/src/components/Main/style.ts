import styled, { css } from "styled-components";
import { ArrowLeft } from "styled-icons/heroicons-solid";
import {
    Home,
    Notifications,
    Email,
    FavoriteBorder,
    ExitToApp,
    LocationOn,
    Search,
} from 'styled-icons/material-outlined';


export const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: min(601px, 100%);

    @media (min-width: 500px) {
        border-left: 1px solid var(--gray);
        border-right: 1px solid var(--gray);
    }
`

export const Header = styled.header`
    z-index: 2;
    position: sticky; //position fixed on top
    top: 0;
    background: var(--primary);

    display: flex;
    align-items: center;

    text-align: left;

    padding: 8px 0px 9px 14px;
    border-bottom: 1px solid var(--outline);

    > button {
        padding: 8px;
        border-radius:50%;
        margin-right: 17px;

        cursor: pointer;

        &:hover {
            background-color: var(--twitter-dark-hover);
        }
    } 
`

export const BackIcon = styled(ArrowLeft)`
    width: 24px;
    height: 24px;

    fill: var(--twitter)
`

export const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;

    > strong {
        font-size: 19px;
    }

    > span {
        font-size: 15px;
        color: var(--gray);
    }
`

export const BottomMenu = styled.div`
    position: fixed;
    bottom: 0;
    left:0;
    z-index:2;

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    border-top: 1px solid var(--outline);

    padding: 8px;

    @media (min-width: 500px) {
        display: none;
    }
`;

export const iconCSS = css`
    width: 31px;
    height: 31px;

    cursor: pointer;

    fill: var(--gray);

    &:hover,
    &.active {
        fill: var(--twitter)
    };
`;

export const HomeIcon = styled(Home)`
    ${iconCSS};
`;

export const SearchIcon = styled(Search)`
  ${iconCSS}
`;
export const BellIcon = styled(Notifications)`
  ${iconCSS}
`;
export const EmailIcon = styled(Email)`
  ${iconCSS}
`;