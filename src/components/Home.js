import React from 'react';
import Hats from './Hats';
import Hero from './Hero';

const Home = () => {
    return (  
        <div className="home">
            <div>
                <Hero />
            </div>
            <div>
                <Hats />
            </div>
        </div>
    );
}
 
export default Home;