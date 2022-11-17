import styled from 'styled-components';

export const NavRootDiv =styled.div`
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    background-color: ${props => props.theme.bgColor};
    box-shadow: 0px 0px 5px -2px black;
`;

export const ContainerDiv = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    max-height: 100px;
    margin: auto;
    padding: 10px 0;
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.bgColor}; 

    a {
        font-size: 1.5rem;
        font-family: tahoma;
        text-decoration: none;
        color: ${props => props.theme.color};
        font-weight: bold;
    }

    h6 {
        cursor: pointer;
        display: flex;
        font-size: 14px;
        margin: 0;
        color: ${props => props.theme.color};
        font-weight: 600;
        align-items: center;
    }

    img {
        width: 15px;
        height: 15px;
        margin: 0 5px 0 5px;
    }
    
`;

