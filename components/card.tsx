import React from 'react';
import {
    Container,
    Image,
    CardUser
} from './cardStyle';

interface Props {
    title: string;
    avatar: string;
    description: string;
}

const Card: React.FunctionComponent<Props> = ({ title, avatar, description }) => (
    <CardUser>
        <Image src={avatar} alt="Avatar" />
        <Container>
            <h4><b>{title}</b></h4>
            <p>{description}</p>
        </Container>
    </CardUser>
);

export default Card;
