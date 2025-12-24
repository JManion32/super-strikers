import Popup from './Popup.tsx'
import '../css/home.css';

function PrivacyPolicy() {

    return (
    <>
        <Popup 
            canOutsideClick={true}
            trigger={<a className="footer-link-pink">Privacy Policy</a>}
        >
            <h1>Privacy Policy</h1>
        </Popup>
    </>
  );
}

export default PrivacyPolicy;
