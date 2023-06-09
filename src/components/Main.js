import './Main.css';
import CardImg from '../assets/cardimg.jpeg'
import {BsPlayCircleFill} from 'react-icons/bs'


const Main = () =>{
    return(
        <div className="Corpo">
            <div className="Land">
                <h1>Foco</h1>
                <h3 style={{marginLeft:"990px"}}>Mostar Tudo</h3>
            </div>
            <div className="Cards">
                <div className="Card">
                    <img src={CardImg} alt="Card" width="180px" height={200}/>
                    <div className="Icone">
                        <BsPlayCircleFill size={50} style={{color:"green"}}/>
                    </div>
                    <h1>Nome</h1>
                    <h3>Descriçao sobre as músicas..</h3>
                </div>
                <div className="Card">
                <img src={CardImg} alt="Card" width="180px" height={200}/>
                <div className="Icone">
                        <BsPlayCircleFill size={50} style={{color:"green"}}/>
                </div>
                    <h1>Nome</h1>
                    <h3>Descriçao sobre as músicas..</h3>
                </div>
                <div className="Card">
                <img src={CardImg} alt="Card" width="180px" height={200}/>
                <div className="Icone">
                        <BsPlayCircleFill size={50} style={{color:"green"}}/>
                </div>
                    <h1>Nome</h1>
                    <h3>Descriçao sobre as músicas..</h3>  
                </div>
                <div className="Card">
                <img src={CardImg} alt="Card" width="180px" height={200}/>
                <div className="Icone">
                        <BsPlayCircleFill size={50} style={{color:"green"}}/>
                </div>
                    <h1>Nome</h1>
                    <h3>Descriçao sobre as músicas..</h3>  
                </div>
                <div className="Card">
                <img src={CardImg} alt="Card" width="180px" height={200}/>
                <div className="Icone">
                        <BsPlayCircleFill size={50} style={{color:"green"}}/>
                </div>
                    <h1>Nome</h1>
                    <h3>Descriçao sobre as músicas..</h3>  
                </div>
            </div>

            {/* Parte da Playlist */}

            <div className="LandPlaylist">
                <h1>Playlist do Spotify</h1>
                <h3 style={{marginLeft:"825px"}}>Mostar Tudo</h3>
            </div>
            <div className="Cards">
                <div className="Card">
                    <img src={CardImg} alt="Card" width="180px" height={200}/>
                    <div className="Icone">
                        <BsPlayCircleFill size={50} style={{color:"green"}}/>
                    </div>
                    <h1>Nome</h1>
                    <h3>Descriçao sobre as músicas..</h3>
                </div>
                <div className="Card">
                <img src={CardImg} alt="Card" width="180px" height={200}/>
                <div className="Icone">
                        <BsPlayCircleFill size={50} style={{color:"green"}}/>
                </div>
                    <h1>Nome</h1>
                    <h3>Descriçao sobre as músicas..</h3>
                </div>
                <div className="Card">
                <img src={CardImg} alt="Card" width="180px" height={200}/>
                <div className="Icone">
                        <BsPlayCircleFill size={50} style={{color:"green"}}/>
                </div>
                    <h1>Nome</h1>
                    <h3>Descriçao sobre as músicas..</h3>  
                </div>
                <div className="Card">
                <img src={CardImg} alt="Card" width="180px" height={200}/>
                <div className="Icone">
                        <BsPlayCircleFill size={50} style={{color:"green"}}/>
                </div>
                    <h1>Nome</h1>
                    <h3>Descriçao sobre as músicas..</h3>  
                </div>
                <div className="Card">
                <img src={CardImg} alt="Card" width="180px" height={200}/>
                <div className="Icone">
                        <BsPlayCircleFill size={50} style={{color:"green"}}/>
                </div>
                    <h1>Nome</h1>
                    <h3>Descriçao sobre as músicas..</h3>  
                </div>
            </div>
            <div className="ParaDormir">
                <h1>Para dormir</h1>
                <h3 style={{marginLeft:"900px"}}>Mostar Tudo</h3>
            </div>
            <div className="Cards">
                <div className="Card">
                    <img src={CardImg} alt="Card" width="220px" height={200}/>
                    <div className="Icone">
                        <BsPlayCircleFill size={50} style={{color:"green"}}/>
                    </div>
                    <h1>Nome</h1>
                    <h3>Descriçao sobre as músicas..</h3>
                </div>
                <div className="Card">
                <img src={CardImg} alt="Card" width="220px" height={200}/>
                <div className="Icone">
                        <BsPlayCircleFill size={50} style={{color:"green"}}/>
                </div>
                    <h1>Nome</h1>
                    <h3>Descriçao sobre as músicas..</h3>
                </div>
                <div className="Card">
                <img src={CardImg} alt="Card" width="220px" height={200}/>
                <div className="Icone">
                        <BsPlayCircleFill size={50} style={{color:"green"}}/>
                </div>
                    <h1>Nome</h1>
                    <h3>Descriçao sobre as músicas..</h3>  
                </div>
            </div>
            <hr className="Line"></hr>
        </div>
    
    );
};
export default Main;