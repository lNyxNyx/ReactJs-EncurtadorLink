import "../Home/styles.css";
import { useState } from "react";
import { FiLink } from "react-icons/fi";

import Navbar from '../../components/Navbar';
import Modal from "../../components/Modal";

import api from '../../services/api';

function Home() {
    const [link, setLink] = useState('');
    const [data, setData] = useState({});
    const [showModal, setshowModal] = useState(false);

    async function handleShortLink() {
        try {

            const response = await api.post('/shorten', {
                long_url: link
            });

            setData(response.data);
            setshowModal(true);
            setLink('');

        } catch {
            alert("⚠️ Link Invalido ! ⚠️");
            setLink('');
        }
    }

    return (
        <div className="container-home">
            <div className="area-logo">
                <img src="/img/logo.png" alt="logo - Sujeito-Links" />
                <h1> SujeitoLink</h1>
                <span> Cole o seu link para encurtar ! 👇</span>
            </div>

            <div className="area-input">
                <div>
                    <FiLink size={24} color={"#fff"} />
                    <input placeholder="Cole seu link aqui..." value={link} onChange={(e) => setLink(e.target.value)} />
                </div>
                <button onClick={handleShortLink}>  Gerar Link</button>
            </div>
            <Navbar />
            {showModal && (
                <Modal
                    closeModal={() => setshowModal(false)}
                    content={data}
                />
            )}

        </div >
    );
}

export default Home;