import styled from "styled-components";

export const NavBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: calc(100vw-6rem);
    height: 6.8rem;
    background-color: black;
    padding: 0 6rem;
`;

export const LeftContainer = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 9.252rem;
        height: 3.1rem;
        margin-right: 2.5rem;
    }

    .nav_names {
        display: flex;
        color: white;
        list-style: none;
        padding: 0;
        margin: 0;
        font-size: 1.4rem;

        li {
            margin-left: 2rem;
        }
    }
`;

export const RightContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;

    .infantil {
        font-size: 1.4rem;
        color: white;
    }

    .userButton {
        display: flex;
        align-items: center;
        width: 5.2rem;
        height: 3.2rem;

        svg {
            margin-left: 1rem;
        }

        img {
            width: 3.2rem;
            height: 3.2rem;
            border-radius: 10%;
        }   
    }

`;
