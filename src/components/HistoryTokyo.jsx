
import historytokyo from "../assets/koyto.jpeg";

function HistoryTokyo() {
  return (
        <section className="container-history">
          
            <h2 className="title">Tokyo</h2>

                <div className="card">
                    <img src={historytokyo} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">History</h5>
                        <p className="card-text">Japan is an island nation in East Asia, known for its rich cultural heritage, technological innovations, and natural beauty. From the bustling streets of Tokyo to the peaceful temples of Kyoto, Japan offers a unique blend of ancient traditions and modern life.
</p>

                        <p className="card-text">The country is famous for its cuisine, including sushi, ramen, and traditional tea ceremonies. Japanese culture emphasizes respect, harmony, and attention to detail, which is reflected in everything from architecture to daily interactions </p>
                    </div>
                </div>       
        </section>
  )
}

export default HistoryTokyo