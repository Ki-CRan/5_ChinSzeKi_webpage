

import { sightsSeoul } from '../data';
import Sight from './Sight';

function SightSeoul() {
  return (
        <section className="container-sight">


                <h2 className="title">hot spots</h2>        


                {sightsSeoul.map((sight) => (
                    <Sight 
                        key={sight.id}
                        image={sight.image}
                        title={sight.title}
                        content={sight.content}
                    />


                ))
        
            }
          </section>
    )
}

export default SightSeoul