import React from 'react';
import Hats from './Hats';
import Featured from './Featured';

const Home = () => {
    return (  
        <div className="home">
            <div>
                <Featured />
            </div>
            <div>
                <Hats />
            </div>
        </div>
    );
}
 
export default Home;