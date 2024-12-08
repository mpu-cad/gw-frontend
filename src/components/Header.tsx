import "./Header.css"
import logo from "../images/LEARNIO.svg"


const Header = () => {
    return(
           <header>
            <div style={{paddingLeft: "60px"}}>
                <a href="#" >
                <img src={logo} alt="logo" className="logo" />
                </a>
            </div>
             <div>
                <button className="btnForum">Форум</button>
                <button className="btnReg">Авторизация</button>
             </div>
            </header> 
    )
}
export default Header