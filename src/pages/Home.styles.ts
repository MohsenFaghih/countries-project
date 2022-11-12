import styled from 'styled-components';

export const HomeRootDiv = styled.div`
    max-width: 1200px;
    margin: auto;
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.bgColor}; 
`

export const FilterDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 0;
`