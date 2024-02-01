import React from 'react';
import dawson from '../blogimages/blogpost1_images/dawson.png';
import fashion from '../blogimages/blogpost1_images/fashion.jpg';
import mixtape from "../blogimages/blogpost1_images/mixtape.jpg";
import rugrats from '../blogimages/blogpost1_images/rugrats.png';
import tech from '../blogimages/blogpost1_images/tech.jpg';

const BlogPost1 = () => {
  return (
    <div>
      <h1>Throwback Bliss: Exploring 90s Vibes</h1>
      <p>Posted on January 28, 2024</p>
      
      
      <p>  
        The 1990s—a decade that resonates with vibrant colors, iconic music, and unforgettable pop culture moments. As we journey through the sands of time, let's take a minute to bask in the warmth of 1990s nostalgia.
      </p>

      <h2>1. The Technological Revolution</h2>
      <img src={tech} className='blog-image' alt="Collection of Technology from the 1990s including cassette tapes and VHS tapes"/>
      <p>
        Remember the sweet sound of dial-up internet and the thrill of receiving your first email? The 1990s marked the advent of the digital age, introducing us to the wonders of personal computers, AOL Instant Messenger, and the unforgettable chaos of untangling cassette tapes.
      </p>

      <h2>2. Fashion Statements</h2>
      <img src={fashion} className='blog-image' alt="Woman wearing 90's Grunge Fashion"/>
      <p>
        From flannel shirts to scrunchies, the '90s had a style all its own. The era witnessed the rise of grunge fashion, where oversized denim jackets and combat boots became a cultural uniform. Let's not forget the iconic sitcom characters who influenced our wardrobes—Fresh Prince's bold prints or Rachel Green's chic attire on Friends.
      </p>

      <h2>3. The Rise of Teen Culture</h2>
      <img src={dawson} className='blog-image' alt="Cast of Dawson's Creek"/>
      <p>  
        For many, the '90s were synonymous with teen idols and coming-of-age films. Whether you were Team Dawson or Team Pacey, or perhaps swooning over the Backstreet Boys or Spice Girls, the '90s gifted us with timeless entertainment that still holds a special place in our hearts.
      </p>

      <h2>4. Saturday Morning Cartoons</h2>
      <img src={rugrats} className='blog-image' alt="Characters from the Rugrats cartoon series"/>
      <p>
        Saturday mornings meant one thing—cartoons! The animated adventures of Rugrats, Pokémon, and Scooby-Doo became our weekend companions. These shows not only entertained but also imparted valuable life lessons in the most colorful and imaginative ways.
      </p>

      <h2>5. Mixtapes and Walkmans</h2>
      <img src={mixtape} className='blog-image' alt="Cassette"/>
      <p>
        Creating the perfect mixtape was an art form. The '90s embraced the joy of crafting personalized playlists on cassette tapes, and the Walkman was our portal to a world of musical exploration. Each rewind and fast forward was a carefully orchestrated dance to find the right track.
      </p>

      <p>
        In these five minutes, we've merely scratched the surface of the vast landscape that was the 1990s. So, whether you're reminiscing about the iconic sitcoms, belting out the lyrics to your favorite boy band, or just missing the simplicity of pre-smartphone days, take a moment to revel in the nostalgia. The '90s will forever hold a magical place in our hearts.
      </p>

      <p>
        Here's to the neon colors, the dial-up tones, and the everlasting spirit of the 1990s!
      </p>
    </div>
  );
};

export default BlogPost1;
