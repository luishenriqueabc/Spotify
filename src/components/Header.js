import './Header.css';
import {AiOutlineLeft} from 'react-icons/ai';
import {AiOutlineRight} from 'react-icons/ai';

const Header = () => {
    return(
        <>
            <div className="Topo">
                <AiOutlineLeft size={22}  style={{paddingRight:"22px" , color:"rgba(255, 255, 255, 0.678)", paddingTop:"20px"}}/>
                <AiOutlineRight size={22} style={{ color:"rgba(255, 255, 255, 0.678)", paddingTop:"20px", paddingRight:"850px"}} />
                <p className="Efeito">Inscreva-se</p>
                <div className="BorderBottom">
                    <p>Entrar</p>
                </div>
            </div>
        </>
    );
};
export default Header;