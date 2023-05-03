import './NavBar.css';
import { Link } from 'react-router-dom';
import spotify from '../assets/spotify.png';
import {RiHome7Fill} from 'react-icons/ri';
import {FaSearch} from 'react-icons/fa';
import {BiBlanket} from 'react-icons/bi';
import {BsPlusSquareFill} from 'react-icons/bs';
import {BsFillSuitHeartFill} from 'react-icons/bs';
import {RiGlobalFill} from 'react-icons/ri';



const NavBar = () =>{
  
    return(
        <>
            <div className="Menu">
                <div className="Logo">
                    <img src= {spotify} alt="Logo" width="125px"/>
                    <ul className="Listas">
                        <li > <RiHome7Fill size={22}  style={{paddingRight:"20px"}}/> <Link to='/'>Inicio</Link> </li>
                        <li> <FaSearch size={22}  style={{paddingRight:"20px"}} /> <Link to='/Search'>Buscar</Link></li>
                        <li onClick={Overlay}> <BiBlanket size={22}  style={{paddingRight:"20px"}} />  Sua Biblioteca</li>
                    {/* Espaçamento e criação de playlist */}
                        <li> <BsPlusSquareFill size={22}  style={{paddingRight:"20px", paddingTop:"30px"}} />  Criar Playlist </li>
                        <li> <BsFillSuitHeartFill size={22}  style={{paddingRight:"20px"}} />   Musicas Curt...</li>
                    </ul>
                </div>
                <div className="Cokies">
                    <p> Cookies</p>
                </div>
                <div className="Idioma">
                    <h3> <RiGlobalFill/>  Portugues do  Brasil</h3>
                </div>

            </div>
        </>
    );
};
export default NavBar;;