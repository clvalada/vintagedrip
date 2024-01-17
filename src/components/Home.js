import React from 'react';
import About from './About';
import Hats from './Hats';
import Footer from './Footer';

const Home = () => {
    return (  
        <div className="home">
            <div>
                <About />
            </div>
            <div>
                <Hats />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}
 
export default Home;