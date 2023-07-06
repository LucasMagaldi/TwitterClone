import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export const Tab = styled.div`
    margin-top: 10px;
    border-bottom: 2px solid var(--twitter);
    text-align: center;

    font-size: 15px;
    font-weight: bold;

    cursor: pointer;
    outline: 0;

    &:hover {
        background: var(--twitter-dark-hover);
    }
`;

export const Tweets = styled.div`
    display: flex;
    flex-direction: column;

    flex-shrink: 0;
`;