import React from 'react';
import Hero from './Hero';
import Featured from './Featured';

const Home = () => {
    return (  
        <div className="home">
            <div>
                <Hero />
            </div>
            <div>
                <Featured />
            </div>
        </div>
    );
}
 
export default Home;