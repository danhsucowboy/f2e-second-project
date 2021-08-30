import {FC} from 'react';
import styled from 'styled-components';
import CSS from 'csstype';

interface CardProps {
    picAddress?: string;
}

const box: CSS.Properties = {
    width: '9.79%',
    height: '4.854%'
}

const test = "../asset/cards_background/C1.png";

const CardPic = styled.div<CardProps>`
    position: absolute;
    width: 5.9375rem;
    aspect-ratio: 95/145;
    cursor: pointer;
    background-image: url(${props => props.picAddress});
    background-repeat: no-repeat;
    background-size: 100% 100%;
`;


const Card: FC<CardProps> = ({picAddress}) => (
    <div style={box} >
        <CardPic picAddress={picAddress}></CardPic>
    </div>
) 

export default Card;