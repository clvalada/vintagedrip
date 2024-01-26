import React from 'react';
import Hero from './Hero';
import Featured from './Featured';
import Newsletter from './Newsletter';

const Home = () => {
    return (  
        <div className="home">
            <div>
                <Hero />
            </div>
            <div>
                <Newsletter />
            </div>
            <div>
                <Featured />
            </div>
        </div>
    );
}
 
export default Home;