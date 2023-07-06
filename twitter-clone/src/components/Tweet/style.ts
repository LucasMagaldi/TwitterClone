import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    max-width: 100%;
    height: 420px;

    padding: 8px 8px;
    border-bottom: 1px solid var(--outline);
`;

export const Retweeted = styled.div`
    font-size: 13px;
    color: var(--gray);
    padding-left: 50px;
    margin-bottom: 3px;
`;

export const Header = styled.div`
    display: flex;
    position: relative;
`;

export const Avatar = styled.div`
    width: max(13px, min(61px, 22vw));
    height: max(13px, min(61px, 22vw));


    border: 3.75px solid var(--primary);
    background:var(--gray);
    border-radius: 50%;
`;

export const ProfileData = styled.div`
    display: flex;

    margin-left: 5px;
    padding-top: 8px;

    > span {
        font-size: 13px;
    }

    > div {
        margin-left: 5px;
        color: var(--gray);
        font-size: 13px;
    }
`;

export const Description = styled.div`
    position: absolute;
    bottom: 10px;
    left:68px;

    >p {
        font-size: 13px;
    }
`;

export const ImageContent = styled.div`
    position: absolute;
    left: 68px;
    top: 75px;

    width: 380px;
    height: 280px;
    background-color: var(--gray);
    border-radius: 20px;
`;