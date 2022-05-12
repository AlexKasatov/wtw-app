import { useEffect } from 'react';

const useTitle = (arg, dep) => {
        useEffect(() => {
                document.title = arg;
                // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [dep]);
};

export default useTitle;
