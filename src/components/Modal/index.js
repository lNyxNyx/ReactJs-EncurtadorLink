import './styles.css';
import { FiX, FiClipboard, } from 'react-icons/fi';


function Modal({ closeModal, content }) {

    async function copyLink() {

        await navigator.clipboard.writeText(content.link);
        alert("URL Copiada com sucesso");
    }

    return (
        <div className="container-modal">

            <div className='modal-header'>
                <h2> Link Encurtado: </h2>
                <button onClick={closeModal}>
                    <FiX size={28} color={"#000"} />
                </button>
            </div>

            <span>
                {content.long_url}
            </span>

            <button className='modal-link' onClick={copyLink}>
                {content.link}
                <FiClipboard size={20} color={"#fff"} />
            </button>

        </div >
    );
}

export default Modal;