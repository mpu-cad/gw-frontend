import s from "./AddButton.module.scss"
import cn from "classnames";

interface propsInterface extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title?: string
}
export function AddButton({title, ...props}: propsInterface) {
    return (
        <button {...props} className={cn(s.button, props.className)}>{title ?? "+"}</button>
    )
}