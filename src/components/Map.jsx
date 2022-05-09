import styled from 'styled-components';
import { useRef } from 'react';
import { useMap } from '../hooks/useMap';

const MapStyled = styled.div`
        position: relative;
        height: 400px;
        margin: 4rem 0;
        box-shadow: ${({ theme }) => theme.shadow};
        border-radius: 1.2rem;
`;

const Map = ({ location }) => {
        const mapRef = useRef();
        useMap(mapRef, location);
        return <MapStyled ref={mapRef}>Map</MapStyled>;
};

export default Map;
