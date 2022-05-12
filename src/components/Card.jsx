import { Children } from 'react';
import styled from 'styled-components';

const Wrapper = styled.article`
        border-radius: var(--raddii);
        background-color: ${({ theme }) => theme.colorBg};
        box-shadow: ${({ theme }) => theme.shadow};
        cursor: pointer;
        overflow: hidden;

        &:hover {
                transform: scale(0.9);
                transition: transform 0.4s ease;
        }
`;

const CardImage = styled.img`
        display: block;
        width: 100%;
        height: 150px;

        object-fit: cover;
        object-position: center;
        box-shadow: ${({ theme }) => theme.shadow};

        @media (max-width: 1024px) {
                height: 350px;
        }
`;

const CardBody = styled.div`
        padding: 1rem 1.5rem 2rem;
`;

const CardTitle = styled.h2`
        /* margin: 0; */
        font-size: var(--fs-d-xs);
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

const Card = ({ img, name, info = [], onOpenDetails }) => (
        <Wrapper onClick={onOpenDetails}>
                <CardImage src={img} alt={name} />
                <CardBody>
                        <CardTitle>{name}</CardTitle>
                        <CardList>
                                {Children.toArray(
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
