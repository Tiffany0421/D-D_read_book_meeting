import Layout from "./views/Layout";

// react-router
import {BrowserRouter} from 'react-router-dom';
import AppContext from './routes/AppContext';
import routes from './routes/routesConfig';

// services
import EventService from "./services/event";

function App() {

    EventService.init();

    return (
        <AppContext.Provider value={{routes}}>
            <BrowserRouter basename="/D-D_read_book_meeting" >
                <Layout/>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;
