import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <Link to="/photo">See NASA Picture of The Day</Link> 
        </div>
    );
}

