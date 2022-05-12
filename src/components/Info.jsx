import { Children, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ApiCountries from '../api/config';
import useFetch from '../hooks/useFetch';
import Map from './Map';
import { Loader } from './UI/spinner/Loader';

const Wrapper = styled.section`
        & > {
                white-space: nowrap;
        }
        margin-top: 3rem;
        width: 100%;
        display: grid;
        grid-template-columns: 100%;
        gap: 2rem;

        @media (min-width: 768px) {
                grid-template-columns: minmax(100px, 400px) 1fr;
                align-items: center;
                gap: 5rem;
        }

        @media (min-width: 1024px) {
                grid-template-columns: minmax(400px, 600px) 1fr;
        }
`;

const InfoImage = styled.img`
        border-radius: var(--radii);
        box-shadow: ${({ theme }) => theme.shadow};
        margin: 0;
        padding: 0;
        display: block;
        width: 100%;

        object-fit: contain;
`;

const InfoTitle = styled.h1`
        font-size: 3rem;
        margin: 0;
        font-weight: var(--fw-normal);
`;

const ListGroup = styled.div`
        display: flex;
        flex-direction: column;

        gap: 2rem;

        @media (min-width: 768px) {
                flex-direction: row;
                gap: 2rem;
        }
`;

const List = styled.ul`
        list-style: none;
        margin: 0;
        padding: 0;
`;

const ListItem = styled.li`
        line-height: 1.8;

        & > b {
                font-weight: var(--fw-bold);
        }
`;

const Meta = styled.div`
        margin-top: 3rem;
        display: flex;
        gap: 1.5rem;
        flex-direction: column;

        & > b {
                font-weight: var(--fw-bold);
        }

        @media (min-width: 768px) {
                flex-direction: row;
                align-items: center;
        }
`;

const TagGroup = styled.div`
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
`;

const Tag = styled.span`
        padding: 0 1rem;
        border-radius: var(--raddii-btn);
        background-color: ${({ theme }) => theme.colorUiBase};
        box-shadow: ${({ theme }) => theme.shadow};
        line-height: 2.5;
        cursor: pointer;
        &:hover {
                background-color: ${({ theme }) => theme.colorUiBase2};
        }
`;

const Info = (props) => {
        const {
                name,
                nativeName,
                flags,
                capital,
                population,
                region,
                subregion,
                topLevelDomain,
                currencies = [],
                languages = [],
                borders = [],
                latlng,
        } = props;

        const navigate = useNavigate();

        const [neighbors, setNeighbors] = useState([]);
        const [fetchCountry, isCountryLoading, isError] = useFetch(async () => {
                if (borders.length) {
                        const response = await ApiCountries.getByCode(borders);
                        setNeighbors(response.data);
                }
        });

        useEffect(() => {
                fetchCountry();
                // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        const handleOpenNeighbor = (countryName) => {
                navigate(`/country/${countryName}`);
        };

        return (
                <>
                        <Wrapper>
                                <InfoImage src={flags.png} alt={name} />
                                <div>
                                        <InfoTitle>{name}</InfoTitle>
                                        <ListGroup>
                                                <List>
                                                        <ListItem>
                                                                <b>Native Name: </b> {nativeName}
                                                        </ListItem>

                                                        <ListItem>
                                                                <b>Population: </b> {population}
                                                        </ListItem>

                                                        <ListItem>
                                                                <b>Region: </b> {region}
                                                        </ListItem>

                                                        <ListItem>
                                                                <b>Sub-Region: </b> {subregion}
                                                        </ListItem>

                                                        <ListItem>
                                                                <b>Capital: </b> {capital}
                                                        </ListItem>
                                                </List>
                                                <List>
                                                        <ListItem>
                                                                <b>Top Level Domain: </b>{' '}
                                                                {Children.toArray(
                                                                        topLevelDomain.map((domain) => (
                                                                                <span>{domain}</span>
                                                                        ))
                                                                )}
                                                        </ListItem>

                                                        <ListItem>
                                                                <b>Currency: </b>{' '}
                                                                {Children.toArray(
                                                                        currencies.map((c) => <span>{c.name} </span>)
                                                                )}
                                                        </ListItem>

                                                        <ListItem>
                                                                <b>Languages: </b>{' '}
                                                                {Children.toArray(
                                                                        languages.map((l) => <span>{l.name} </span>)
                                                                )}
                                                        </ListItem>
                                                </List>
                                        </ListGroup>
                                        {isCountryLoading ? (
                                                <Loader />
                                        ) : (
                                                <Meta>
                                                        <b>Border Counries</b>
                                                        {!borders.length ? (
                                                                <span> There's No Borders </span>
                                                        ) : (
                                                                <TagGroup>
                                                                        {Children.toArray(
                                                                                neighbors.map((n) => (
                                                                                        <Tag
                                                                                                onClick={() =>
                                                                                                        handleOpenNeighbor(
                                                                                                                n.name
                                                                                                        )
                                                                                                }
                                                                                        >
                                                                                                {n.name}
                                                                                        </Tag>
                                                                                ))
                                                                        )}
                                                                </TagGroup>
                                                        )}
                                                </Meta>
                                        )}
                                        {isError && <div>ERROR: {isError.message}</div>}
                                </div>
                        </Wrapper>
                        <Map location={latlng} />
                </>
        );
};

export default Info;
