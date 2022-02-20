import "../Erro/styles.css";
import { Link } from 'react-router-dom';
function Erro() {
    return (
        <div className="container-erro">
            <img src="/img/notfound.png" alt="Página não encontrada"></img>
            <h1> Página não encontrada!</h1>
            <Link to="/">
                Voltar para Home
            </Link>
        </div>
    );
}

export default Erro;