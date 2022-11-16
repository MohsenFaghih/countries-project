import styled from 'styled-components';

export const HomeRootDiv = styled.div`
    margin: auto;
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.bgColor}; 
    height: 100%;
`
export const FilterDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 0;

    @media (max-width: 768px) {
        flex-direction: column;
    }

    input, select, option {
        color: ${props => props.theme.filterColor};
        background-color: ${props => props.theme.filterBg};
        padding: 12px;
        border: none;
        border-radius: 5px;
        box-shadow: 0px 0px 5px -2px black;
        min-width: 200px;
        outline: none;

        @media (max-width: 768px) {
            margin: 10px 0;
        }
    }

    .searchBox {
        width: 500px;
    }

    .selectForm {
        max-width: 180px;
    }
`