import "./Header.scss"
import logo from "../../images/LEARNIO.svg"
import {Link} from "react-router";


const Header = () => {
    return(
           <header>
            <div>
                <Link to="/" >
                <img src={logo} alt="logo" className="logo" />
                </Link>
            </div>
             <div>
                <button className="btnForum">Форум</button>
                <button className="btnReg">Авторизация</button>
             </div>
            </header> 
    )
}
export default Header