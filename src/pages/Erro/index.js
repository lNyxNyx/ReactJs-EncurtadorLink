import "../Erro/styles.css";
import { Link } from 'react-router-dom';
import { ReactComponent as ErroIcon } from "../../assets/img/notfound.svg";

function Erro() {
    return (
        <div className="container-erro">
            <ErroIcon />
            <h1> Página não encontrada!</h1>
            <Link to="/">
                Voltar para Home
            </Link>
        </div>
    );
}

export default Erro;