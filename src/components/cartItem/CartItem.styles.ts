import styled from 'styled-components';

export const CartItemRoot = styled.div`
    width: auto;
    margin-bottom: 45px;

    a {
        width: auto;
        text-decoration: none;
        color: ${props => (props.theme === 'light') ? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%)'}; 
        text-align: left;
    }

    div.card-body {
        padding-bottom: 40px;
        font-size: 16px;
    }

    div.card-title {
        font-weight: 800
    }

    div.details {
        font-size: 14px;
        font-weight: 600;
    }

    div.details span{
        font-weight: 400;
    }
`