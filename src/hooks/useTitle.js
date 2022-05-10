import { useEffect } from 'react';

const useTitle = (arg, dep) => {
        useEffect(() => {
                document.title = arg;
        }, [dep]);
};

export default useTitle;
