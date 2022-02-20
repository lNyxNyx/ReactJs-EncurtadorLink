import "../Links/styles.css";
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Links() {
    return (
        <div className="container-links">

            <div className="links-header">
                <Link to="/">
                    <FiArrowLeft size={50} color={"#fff"} />
                </Link>
                <h1>Meus Links</h1>
            </div>

            <div className="links-itens">

                <button className="link">
                    <FiLink size={18} color={"#fff"} />
                    https://www.figma.com
                </button>

                <button className="link-delete">
                    <FiTrash size={24} color={"#FF5454"} />
                </button>
            </div>

            <div className="links-itens">

                <button className="link">
                    <FiLink size={18} color={"#fff"} />
                    https://www.figma.comwhite-space: nowrap;
                    overflow: hidden;
                    text-overflow: clip;white-space: nowrap;
                    overflow: hidden;
                    text-overflow: clip;white-space: nowrap;
                    overflow: hidden;
                    text-overflow: clip;white-space: nowrap;
                    overflow: hidden;
                    text-overflow: clip;white-space: nowrap;
                    overflow: hidden;
                    text-overflow: clip;white-space: nowrap;
                    overflow: hidden;
                    text-overflow: clip;white-space: nowrap;
                    overflow: hidden;
                    text-overflow: clip;white-space: nowrap;
                    overflow: hidden;
                    text-overflow: clip;white-space: nowrap;
                    overflow: hidden;
                    text-overflow: clip;
                </button>

                <button className="link-delete">
                    <FiTrash size={24} color={"#FF5454"} />
                </button>
            </div>
        </div >
    );
}

export default Links;