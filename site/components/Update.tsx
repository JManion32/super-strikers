//import { useState } from 'react';
import '../css/update.css';

type Props = {
    title: string;
    content: string;
    date: string;
};

function Update({title, content, date} : Props) {
    return (
        <>
            <div className="update-container">
                <div className="update-header">
                    <h3>{title}</h3>
                    <span>{date}</span>
                </div>
                <p>{content}</p>
            </div>
        </>
    );
}

export default Update;
