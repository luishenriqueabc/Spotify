import { Routes, Route} from 'react-router-dom';
import PageBuscar from './pages/paginaBuscar';
import PageHome from './pages/PaginaHome';

const Routers = () =>{
    return(
        <Routes>
           <Route path="/" element={<PageHome/>} />
           <Route path="/Search" element={<PageBuscar/>} />
        </Routes>
    );
};
export default Routers;