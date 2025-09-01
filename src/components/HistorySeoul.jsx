// import React from 'react';
import historyseoul from "../assets/Seoul.jpeg";

function HistorySeoul() {
  return (
        <section className="container-history">

            <h2 className="title">south korea</h2>
            
                <div className="card">
                    <img src={historyseoul} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">history</h5>
                        <p className="card-text">South Korea’s history traces back to ancient kingdoms like Goguryeo, Baekje, and Silla, which laid the foundation for Korean culture. The unified Silla and later the Goryeo and Joseon dynasties shaped Korea’s identity with Confucian values and cultural achievements. </p>

                        <p className="card-text">In the early 20th century, Korea was colonized by Japan until 1945. After liberation, Korea was divided into North and South, leading to the Korean War (1950–1953). South Korea transformed from a war-torn country into a major global economic power, embracing modernization while preserving its rich cultural heritage and democratic government.</p>
                    </div>
                </div>       
        </section>
  )
}

export default HistorySeoul