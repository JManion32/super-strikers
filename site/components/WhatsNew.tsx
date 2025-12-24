import Popup from './Popup.tsx'
import '../css/home.css';

function WhatsNew() {

    return (
    <>
        <Popup 
            canOutsideClick={true}
            trigger={<a className="footer-link-cyan">What's New?</a>}
        >
            <h1>What's New?</h1>
        </Popup>
    </>
  );
}

export default WhatsNew;
