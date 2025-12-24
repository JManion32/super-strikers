import { useState } from "react";
import '../css/popup.css';

type Props = {
    canOutsideClick: boolean;
    trigger: React.ReactNode
    children: React.ReactNode
};

function Popup({ canOutsideClick, trigger, children }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const openPopup = () => {
        setIsOpen(true);
    };

    const closePopup = () => {
        setIsClosing(true);
        setTimeout(() => {
        setIsClosing(false);
        setIsOpen(false);
        }, 300);
    };

    const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if ((e.target as HTMLElement).classList.contains("popup-overlay")) {
            closePopup();
        }
    };

    return (
    <>
      {/* Trigger */}
      <span onClick={openPopup} style={{ display: "inline-block" }}>
        {trigger}
      </span>

      {/* Popup */}
      {isOpen && (
        <div
          className="popup-container"
          onClick={canOutsideClick ? handleOutsideClick : undefined}
        >
          <div
            className={`popup ${isClosing ? "slide-down" : "slide-up"}`}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
}

export default Popup;
