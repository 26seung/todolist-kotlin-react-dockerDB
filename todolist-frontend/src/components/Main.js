import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            main Page
            <div>
                <Link to="/todo"> 페이지 이동</Link>
            </div>            
        </div>
    );
};

export default Main;