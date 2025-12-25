import Modal from './Modal.tsx'
import '../css/home.css';

function PrivacyPolicy() {

    return (
    <>
        <Modal 
            canOutsideClick={true}
            trigger={<a className="footer-link-pink">Privacy Policy</a>}
        >
            <h1>Privacy Policy</h1>
        </Modal>
    </>
  );
}

export default PrivacyPolicy;
