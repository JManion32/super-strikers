import { useState } from "react";
import { createPortal } from "react-dom";

import '../css/popup.css';

type Props = {
  trigger: React.ReactNode;
  children: React.ReactNode;
  borderColor?: string;
  canOutsideClick?: boolean;
};

function Popup({ canOutsideClick=true, borderColor, trigger, children }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const closePopup = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            setIsOpen(false);
        }, 300);
    };

    const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if ((e.target as HTMLElement).classList.contains("popup-container")) {
            closePopup();
        }
    };

    const popup = isOpen ? (
        <div
            className="popup-container"
            onClick={canOutsideClick ? handleOutsideClick : undefined}
        >
            <div
                className={`popup ${isClosing ? "slide-down" : "slide-up"}`}
                style={{
                    border:
                    borderColor === "cyan"
                        ? "4px solid var(--standard-cyan)"
                        : borderColor === "pink"
                        ? "4px solid var(--standard-pink)"
                        : undefined
                }}
            >
            {children}
            </div>
        </div>
    ) : null;

    return (
        <>
            {/* Trigger */}
            <span onClick={() => setIsOpen(true)}>
                {trigger}
            </span>

            {popup &&
                createPortal(
                popup,
                document.getElementById("popup-root")!
            )}
        </>
    );
}

export default Popup;