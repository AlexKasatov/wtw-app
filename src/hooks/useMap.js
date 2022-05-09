import mapboxgl from 'mapbox-gl';
import { useLayoutEffect } from 'react';
import { useProviderContext } from './useProviderContext';

export const useMap = (mapContainer, location, mapZoom = 8) => {
        const { mode } = useProviderContext();
        mapboxgl.accessToken = process.env.REACT_APP_API_KEY;
        const lightTheme = 'mapbox://styles/mapbox/light-v10';
        const darkTheme = 'mapbox://styles/mapbox/dark-v10';

        useLayoutEffect(() => {
                (async () => {
                        if (location && mapContainer && mode) {
                                const map = new mapboxgl.Map({
                                        container: mapContainer.current,
                                        style: mode === 'light' ? lightTheme : darkTheme,
                                        center: location.reverse(),
                                        zoom: mapZoom,
                                        marker: true,
                                });

                                map.addControl(new mapboxgl.NavigationControl(), 'top-right');

                                return () => map.remove();
                        }
                })();
                // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [location, mode]);
};
