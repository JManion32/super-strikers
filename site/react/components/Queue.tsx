//import { useState } from 'react';
import '../../css/queue.css';

function Queue() {
    return (
        <>
            <div className="queue-container">
                <p>Queueing for online match...</p>
                <p className="error-msg">No backend implementation, unable to queue.</p>
            </div>
        </>
    );
}

export default Queue;
