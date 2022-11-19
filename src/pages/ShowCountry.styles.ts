import styled from 'styled-components'

export const ShowCountryRootDiv = styled.div`
    background-color: ${props => props.theme === 'light' ? 'hsl(0, 0%, 98%)' : 'hsl(207, 26%, 17%)'};
    padding: 60px 0;
    color: ${props => props.theme === 'light' ? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%)'};
    min-height: 100vh;
    height: auto;

    div.btnDiv {
        margin: 0 0 60px 0;
        display: flex;
        justify-content: start;

        button {
            border: none;
            width: 130px;
            box-shadow: 0px 0px 4px 0px ${props => props.theme === 'light' ? 'gray' : '#0000004f'};
            border-radius: 5px;
            font-weight: 500;
            background-color: ${props => props.theme === 'light' ? 'rgb(255, 255, 255)' : 'hsl(209,23%,22%)'};
            color: ${props => props.theme === 'light' ? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%)'};

            svg {
                margin-right: 10px;
            }
        }
    }

    div.borderDiv {
        div {display: inline-block;}

        span.border {
            display: inline-block;
            width: 100px;
            background-color: ${props => props.theme === 'light' ? 'hsl(0, 0%, 100%)' : 'hsl(209,23%,22%)'};
            color: ${props => props.theme === 'light' ? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%)'};
            box-shadow: 0px 0px 4px 0px ${props => props.theme === 'light' ? '#8080806e' : '#0000006e'};
            border-radius: 3px;
            margin: 5px 5px 5px 0;
            text-align: center;
            border: none !important
        }
    }
`

export const DetailsDiv = styled.div`
    display: flex;
    height: 100%;
    flex-wrap: wrap;
    align-content: center;

    div.title {
        font-weight: 600
    }

    div.title span {
        font-weight: 400
    }

`