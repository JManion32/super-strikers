import Modal from './Modal.tsx'
import '../css/home.css';

function WhatsNew() {

    return (
    <>
        <Modal
            canOutsideClick={true}
            trigger={<a className="footer-link-cyan">What's New?</a>}
        >
            <h1>What's New?</h1>
        </Modal>
    </>
  );
}

export default WhatsNew;
