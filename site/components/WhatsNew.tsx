import Modal from './Modal.tsx'
import '../css/home.css';
import '../css/whats-new.css';
import Update from './Update.tsx';

function WhatsNew() {

    return (
    <>
        <Modal
            canOutsideClick={true}
            borderColor={"cyan"}
            trigger={<a className="footer-link-cyan">What's New?</a>}
        >
            <div className="whats-new-container">
                <h2>What's New?</h2>
                <Update
                    title={"Welcome to Super Strikers!"}
                    content={"The cross between air hockey and soccer! I hope you enjoy this game, it was a lot of fun to make. To learn more, visit the About modal. If you have any feature suggestions, submit a request via feature request. Best of luck!"}
                    date={"01 / 12 / 2026"}
                />
            </div>
        </Modal>
    </>
  );
}

export default WhatsNew;
