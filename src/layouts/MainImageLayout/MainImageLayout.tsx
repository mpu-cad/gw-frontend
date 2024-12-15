import s from "./MainImageLayout.module.scss"
import Header from "../../components/Header/Header.tsx";
import {Outlet} from "react-router";

export function MainImageLayout() {
    return (
        <div className={s.background}>
            <Header/>
            <Outlet/>
        </div>
    )
}