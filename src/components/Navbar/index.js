import './styles.css';
import { AiOutlineGithub } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { Link } from 'react-router-dom';


/* import { AiOutlineGithub } from "react-icons/wi"; */

function Navbar() {
    return (
        <div className='container-navbar'>
            <div className='menu'>
                <a className='itens' href="https://www.youtube.com" alt="Youtube" target="blank">
                    <BsYoutube size={26} />
                </a>
                <a className='itens' href="https://github.com/lNyxNyx" alt="Github" target="blank">
                    <AiOutlineGithub size={26} />
                </a>

                <Link className="button-links" to={"/Link"}>
                    <h1> Meus Links</h1>
                </Link>

            </div>
        </div >
    );
}

export default Navbar;