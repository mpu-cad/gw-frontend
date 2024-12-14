import "./Home.css"
import Header from "../components/Header";
import AcceptReg from "../components/AcceptReg.tsx";

const Home = () => {
    return(
        <div style={{display: "flex", flexDirection: "column", justifyContent:"start"}}>
            <div>
                <Header/>
            </div>
            <section className="bgimage">
                <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center"}}>
                    <h1>База знаний</h1>
                    <h2>
                        центра САПР разработки
                    </h2>
                    <AcceptReg/>
                </div>

            </section>
        </div>
    )
}
export default Home