import { sightsThailand } from '../data';
import Sight from './Sight';

function SightThailand() {
  return (
        <section className="container-sight">


                <h2 className="title">hot spots</h2>        


                {sightsThailand.map((sight) => (
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

export default SightThailand