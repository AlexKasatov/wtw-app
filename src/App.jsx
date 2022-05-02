import { PageRouters } from './router/PageRouters';
import ContextProvider from './context/index';

// TODO create global styles

const App = () => (
        <ContextProvider>
                <PageRouters />
        </ContextProvider>
);

export default App;
