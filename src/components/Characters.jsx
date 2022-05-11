import React from 'react';
import CharacterCard from './CharacterCard';
import Gorilla from '../images/gorilla.svg';
import Fly from '../images/fly.svg';
import Giraffe from '../images/giraffe.svg';

export default function Characters() {
  return (
    <section className="d-flex vh-100 align-items-center" style={{backgroundColor: '#354856'}}>
      <div className="d-flex flex-column w-100 container">
            <h1 className="display-1 fw-bold text-center text-white mb-5 pb-5">Characters</h1>
            <div className="d-flex w-100">
                <CharacterCard 
                    character="Gojo Gorira" 
                    image={Gorilla} 
                    business="Anima Bank"
                    occupation="Executive Manager"
                    fact="Does not like to do any work himself"/>
                <CharacterCard 
                    character="Tobias Tobu" 
                    image={Fly} 
                    business="Local Bar"
                    occupation="Bartender/Crypto Enthusiast"
                    fact="Is happy to make customers do the dishes"/>
                <CharacterCard 
                    character="Katarina Kirin" 
                    image={Giraffe} 
                    business="Anima Bank"
                    occupation="Chief Executive Officer"
                    fact="her long neck leaves her succeptible to danger"/>
            </div>
      </div>
    </section>
  )
}
