import s from "./Input.module.scss"
import cn from "classnames";

interface propsInterface extends React.InputHTMLAttributes<HTMLInputElement> {

}

export function Input({...props}: propsInterface) {
    return(
        <input {...props} className={cn(s.input, props.className)}/>
    )
}