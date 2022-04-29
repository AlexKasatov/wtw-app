import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.article`
        border-radius: var(--raddii);
        background-color: var(--color-bg);
        box-shadow: var(--shadow);
        cursor: pointer;
        overflow: hidden;
`;

const CardImage = styled.img`
        display: block;
        width: 100%;
        height: 150px;

        object-fit: cover;
        object-position: center;
        box-shadow: var(--shadow);

        @media (max-width: 1024px) {
                height: 350px;
        }
`;

const CardBody = styled.div`
        padding: 1rem 1.5rem 2rem;
`;

const CardTitle = styled.h2`
        /* margin: 0; */
        font-size: var(--fs-md);
        font-weight: var(--fw-bold);
`;

const CardList = styled.ul`
        list-style: none;
        margin: 0;
        padding: 1rem 0 0;
`;

const CardListItem = styled.li`
        font-size: var(--fs-sm);
        line-height: 1.5;
        font-weight: var(--fw-light);

        & > b {
                font-weight: var(--fw-bold);
        }
`;

const Card = ({ img, name, info = [], onClick }) => (
        <Wrapper onClick={onClick}>
                <CardImage src={img} alt={name} />
                <CardBody>
                        <CardTitle>{name}</CardTitle>
                        <CardList>
                                {React.Children.toArray(
                                        info.map((el) => (
                                                <CardListItem>
                                                        <b>{el.title}:</b> {el.description}
                                                </CardListItem>
                                        ))
                                )}
                        </CardList>
                </CardBody>
        </Wrapper>
);

export default Card;