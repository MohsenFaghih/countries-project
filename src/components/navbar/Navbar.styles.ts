import styled from 'styled-components';

export const NavRootDiv =styled.div`
    width: 100vw;
    height: auto;
    box-shadow: 0px 0px 5px -2px black;
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    max-height: 100px;
    max-width: 1200px;
    margin: auto;
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.bgColor}; 

    a {
        font-size: 1.5rem;
        font-family: tahoma;
        text-decoration: none;
        color: inherit;
        font-weight: bold;
    }

    h6 {
        cursor: pointer;
        display: flex;
        font-size: 0.7rem;
    }

    img {
        width: 15px;
        height: 15px;
        margin: 0 5px 0 5px;
    }
    
`;

