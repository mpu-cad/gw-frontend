import s from "./ButtonWithBorder.module.scss"
import {ButtonHTMLAttributes, ReactNode} from "react";
import cn from "classnames";


interface propsInterface extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode
}
export function ButtonWithBorder({children, ...props}: propsInterface) {
    return (
        <button {...props} className={cn(s.button, props.className)}>{children}</button>
    )
}