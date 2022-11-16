import styled from 'styled-components'

export const Border = styled.div`
    
    div {display: inline-block;}

    span.border {
        display: inline-block;
        width: 100px;
        background-color: gray;
        border-radius: 3px;
        box-shadow: 0 0 0 2px gray;
        color: white;
        margin: 5px;
        text-align: center;
        border: none !important
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