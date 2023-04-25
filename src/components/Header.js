import spotify from '../assets/spotify.png';
import {RiHome7Fill} from 'react-icons/ri';
import {FaSearch} from 'react-icons/fa';
import {BiBlanket} from 'react-icons/bi';
import {BsPlusSquareFill} from 'react-icons/bs';
import {BsFillSuitHeartFill} from 'react-icons/bs';
import './Header.css';

const Header = () =>{
    return(
        <>
            <div className="Menu">
                <div className="Logo">
                    <img src= {spotify} alt="Logo" width="125px"/>
                    <ul className="Listas">
                        <li > <RiHome7Fill size={22}  style={{paddingRight:"20px"}}/>  Inicio</li>
                        <li> <FaSearch size={22}  style={{paddingRight:"20px"}} />  Buscar  </li>
                        <li> <BiBlanket size={22}  style={{paddingRight:"20px"}} />   Sua Biblioteca</li>
                    {/* Espaçamento e criação de playlist */}
                        <li> <BsPlusSquareFill size={22}  style={{paddingRight:"20px", paddingTop:"30px"}} />  Criar Playlist </li>
                        <li> <BsFillSuitHeartFill size={22}  style={{paddingRight:"20px"}} />   Musicas Curt...</li>
                    </ul>
                </div>
                <div className="Cokies">
                    <p> Cookies</p>
                </div>
            </div>
        </>
    );
};
export default Header;;