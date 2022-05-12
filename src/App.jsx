import { PageRouters } from './router/PageRouters';
import ContextProvider from './context/index';
import { GlobalStyle } from './styles/Theme';

const App = () => (
        <ContextProvider>
                <GlobalStyle />
                <PageRouters />
        </ContextProvider>
);

export default App;
