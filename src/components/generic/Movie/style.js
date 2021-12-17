import styled from 'styled-components'

export const MovieItem = styled.div `
    position: relative;

    background-color: #FFF;

    width: ${({dimesion: {width}}) => parseInt(width) + 10}px; 
    height: ${({dimesion: {heigth}}) => parseInt(heigth) + 10}px; 

    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);

    border: 1px solid #ececec;
    border-radius: 3px;

    img {
        position: absolute;
        top: 5px;
        left: 5px;

        text-align: center;
    }
`;