import './Main.css';
import CardImg from '../assets/cardimg.png'

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
                    <h1>Nome</h1>
                    <h3>Descriçao sobre as músicas..</h3>
                </div>
                <div className="Card">
                <img src={CardImg} alt="Card" width="180px" height={200}/>
                    <h1>Nome</h1>
                    <h3>Descriçao sobre as músicas..</h3>
                </div>
                <div className="Card">
                <img src={CardImg} alt="Card" width="180px" height={200}/>
                    <h1>Nome</h1>
                    <h3>Descriçao sobre as músicas..</h3>  
                </div>
                <div className="Card">
                <img src={CardImg} alt="Card" width="180px" height={200}/>
                    <h1>Nome</h1>
                    <h3>Descriçao sobre as músicas..</h3>  
                </div>
                <div className="Card">
                <img src={CardImg} alt="Card" width="180px" height={200}/>
                    <h1>Nome</h1>
                    <h3>Descriçao sobre as músicas..</h3>  
                </div>
            </div>
        </div>
    );
};
export default Main;