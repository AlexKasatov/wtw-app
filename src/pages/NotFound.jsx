import useTitle from '../hooks/useTitle';

const NotFound = () => {
        useTitle('404-Country :(');
        return <div>This page doesn't exist</div>;
};

export default NotFound;
