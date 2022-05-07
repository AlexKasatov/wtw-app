import mapboxgl from 'mapbox-gl';
import { useLayoutEffect } from 'react';

export const useMap = (mapContainer, location, mapZoom = 8) => {
        const MY_KEY = process.env.REACT_APP_API_KEY;
        mapboxgl.accessToken = MY_KEY;

        const lightTheme = 'light-v10';
        const darkTheme = 'dark-v10';

        useLayoutEffect(() => {
                (async () => {
                        if (location && mapContainer) {
                                const map = new mapboxgl.Map({
                                        container: mapContainer.current,
                                        style: 'mapbox://styles/mapbox/dark-v10',
                                        center: location.reverse(),
                                        zoom: mapZoom,
                                        marker: true,
                                });

                                map.addControl(new mapboxgl.NavigationControl(), 'top-right');

                                return () => map.remove();
                        }
                })();
                // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [location]);
};
