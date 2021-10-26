import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            main Page 입니다.
            <div>
                <Link to="/todo"> 페이지 이동 변경</Link>
            </div>            
        </div>
    );
};

export default Main;