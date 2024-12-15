import Header from "../../components/Header/Header.tsx";
import {Outlet} from "react-router";


export function MainLayout() {
    return(
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}