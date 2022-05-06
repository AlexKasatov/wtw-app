import styled from 'styled-components';
import { useRef } from 'react';
import { useMap } from '../hooks/useMap';

const MapWrapper = styled.div`
        /* margin-top: 3rem;
        border-radius: var(--radii);
        border: 5px solid var(--color-ui-base);
        box-shadow: var(--shadow); */
`;

const MapStyled = styled.div`
        position: relative;
        height: 400px;
        margin: 4rem 0;
        box-shadow: var(--shadow);
        border-radius: 1.2rem;
`;

const Map = ({ location }) => {
        const mapRef = useRef();
        useMap(mapRef, location);
        return (
                <MapWrapper>
                        <MapStyled ref={mapRef}>Map</MapStyled>
                </MapWrapper>
        );
};

export default Map;
