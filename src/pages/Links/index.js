import "../Links/styles.css";

import { useState, useEffect } from "react";
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Modal from '../../components/Modal';
import { getLinksSave, deleteLink } from '../../services/storeLink';

function Links() {

    const [myLinks, setMyLinks] = useState([]);
    const [data, setData] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [emptyList, setEmptyList] = useState(false);

    // Renderizar a lista
    useEffect(() => {
        async function getLink() {
            const result = await getLinksSave('@encurtaLink');

            if (result.length === 0) {
                setEmptyList(true);
            }
            setMyLinks(result);
        }

        getLink();
    }, []);

    // Abrir o modal de acordo com link escolhido 
    function handleOpenLink(link) {
        setData(link);
        setShowModal(true);
    }

    async function handleDelete(id) {
        const result = await deleteLink(myLinks, id);
        if (result.length === 0) {
            setEmptyList(true);
        }

        setMyLinks(result);
    }

    return (
        <div className="container-links">

            <div className="links-header">
                <Link to="/">
                    <FiArrowLeft size={50} color={"#fff"} />
                </Link>
                <h1>Meus Links</h1>
            </div>
            {emptyList && (
                <div className="links-itens">
                    <h2 className="empty-text"> ⚠️  Lista Vazia ! ⚠️</h2>
                </div>
            )}
            {myLinks.map(link => (
                <div key={link.id} className="links-itens">

                    <button className="button-link" onClick={() => handleOpenLink(link)} >
                        <FiLink size={18} color={"#fff"} />
                        {link.long_url}
                    </button>

                    <button className="link-delete" onClick={() => handleDelete(link.id)}>
                        <FiTrash size={24} color={"#FF5454"} />
                    </button>
                </div>
            ))}

            {showModal && (
                <Modal
                    closeModal={() => setShowModal(false)}
                    content={data}
                />
            )}
        </div >
    );
}

export default Links;