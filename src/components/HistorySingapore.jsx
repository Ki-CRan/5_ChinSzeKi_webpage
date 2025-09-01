// import React from 'react';
import historysingapore from "../assets/Singapore.jpg";

function HistorySingapore() {
  return (
        <section className="container-history">

            <h2 className="title">Singapore</h2>
            
                <div className="card">
                    <img src={historysingapore} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">History of Singapore</h5>
                        <p className="card-text">Singapore’s history began as a fishing village before becoming a strategic British trading post in 1819 under Sir Stamford Raffles. It grew rapidly as a vital port in Southeast Asia. During World War II, Singapore was occupied by Japan from 1942 to 1945. After the war, it experienced political and social changes, gaining self-governance in 1959. Singapore briefly joined Malaysia in 1963 but became an independent republic in 1965. Since independence, Singapore has transformed from a developing country into a global financial and trade center, known for its strict laws, efficient governance, and multicultural society.</p>

                        <p className="card-text">Singapore’s culture is a dynamic blend of Chinese, Malay, Indian, and Western influences, reflecting its ethnic diversity. This multiculturalism is celebrated through festivals like Chinese New Year, Hari Raya, Deepavali, and Christmas. English is the primary language, alongside Mandarin, Malay, and Tamil. Singapore is famous for its diverse cuisine, offering dishes like laksa, satay, and chili crab. The city values education, innovation, and harmony among its communities. Traditional arts coexist with modern entertainment, and the city’s architecture combines colonial heritage with futuristic designs. Singapore’s culture emphasizes respect, multiculturalism, and progress, making it a unique global city.</p>
                    </div>
                </div>       
        </section>
  )
}

export default HistorySingapore