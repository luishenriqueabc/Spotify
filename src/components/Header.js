import spotify from '../assets/spotify.png';
import {RiHome7Fill} from 'react-icons/ri';
import {FaSearch} from 'react-icons/fa';
import {BiBlanket} from 'react-icons/bi';
import './Header.css';

const Header = () =>{
    return(
        <>
            <div className="Menu">
                <div className="Logo">
                    <img src= {spotify} alt="Logo" width="125px"/>
                    <ul className="Listas">
                        <li > <RiHome7Fill size={22}/>  Inicio</li>
                        <li> <FaSearch   size={22}/>   Buscar</li>
                        <li> <BiBlanket size={22} />   Sua Biblioteca</li>
                    </ul>
                </div>
            </div>
        </>
    );
};
export default Header;;