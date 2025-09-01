
import historythailand from "../assets/Phuket.jpg";

function HistoryThailand() {
  return (
        <section className="container-history">

            <h2 className="title">ThaiLand</h2>

                <div className="card">
                    <img src={historythailand} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Thailand history</h5>
                        <p className="card-text">Thailand, formerly Siam, is the only Southeast Asian country never colonized by Europeans. Its history began with early kingdoms like Sukhothai, founded in the 13th century, known for creating the Thai script and promoting Buddhism. The powerful Ayutthaya Kingdom followed, thriving through trade until destroyed by the Burmese in 1767. The Chakri dynasty then established Bangkok as the capital in 1782. Kings Rama IV and V modernized Thailand in the 19th century, preserving its independence. In 1932, Thailand became a constitutional monarchy. Today, it is a vibrant nation with a rich culture shaped by resilience and adaptation.</p>

                        <p className="card-text">Thai culture is rich and diverse, deeply rooted in Buddhism, which influences daily life, festivals, and traditions. Respect for elders and the monarchy is central, reflected in polite greetings like the “wai.” Thai cuisine, known for its bold flavors, balances sweet, sour, salty, and spicy tastes. Traditional arts include classical dance, music, and intricate crafts like silk weaving and pottery. Festivals such as Songkran (Thai New Year) and Loy Krathong showcase vibrant celebrations. Family and community play vital roles in Thai society, emphasizing harmony, hospitality, and generosity. Overall, Thai culture blends tradition and modernity with warmth and spirituality.</p>
                    </div>
                </div>       
        </section>
  )
}

export default HistoryThailand