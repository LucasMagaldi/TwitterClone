import styled from "styled-components";
import { ArrowLeft } from "styled-icons/heroicons-solid";

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