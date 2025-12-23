//import { useState } from 'react';
// @ts-ignore
import { useNavigate } from 'react-router-dom';

function CustomMatch() {
    const navigate = useNavigate();

    function goHome() {
        navigate('/');
    }

    return (
        <>
            <h1>Custom Match</h1>
            <button onClick={goHome}>Home</button>
        </>
    );
}

export default CustomMatch;
