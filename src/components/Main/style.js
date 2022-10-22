import styled from "styled-components"

export const Filtros = styled.div`
    display: flex;
    height: 6.8rem;
    padding: 0 6rem;
    justify-content: space-between;
`;

export const Left = styled.div`
    display: flex;
    align-items: center;

    h2 {
        color: white;
        font-size: 3.8rem;
        margin-right: 1.5rem;
    }

    .gender {
        display: flex;
        align-items: center;
        border: 0.25rem solid gray;
        height: 3.6rem;
        width: 13.5rem;
        margin-left: 2rem;

        h3 {
            color: white;
            font-size: 1.8rem;
            margin-left: 1rem;
            margin-right: 3.5rem;
        }
    }

`;

export const Right = styled.div`
    display: flex;
    align-items: center;

    .square {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 2.8rem;
        width: 4.4rem;
        border: 0.25rem solid gray;
        border-right: none;
        position: relative;

        span {
            position: absolute;
            height: 1rem;
            width: 1rem;
            background-color: white;
        }
    }

    .sugest {
        height: 2.8rem;
        display: flex;
        align-items: center;
        border: 0.25rem solid gray;
        border-left: none;
        
        h3 {
            color: white;
            font-size: 1.44rem;
            margin-left: 0.6rem;
            margin-right: 5rem;
        }

        .arrow {
            padding-right: 1.5rem;
        }
    }
`;

export const Row = styled.div`
    display: flex;
    padding-left: 6rem;
    padding-right: 6rem;
    gap: 1rem;
`;

export const Series = styled.div`
    padding-top: 7.2rem;
`;