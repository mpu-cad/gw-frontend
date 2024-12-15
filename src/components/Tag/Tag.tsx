import s from "./Tag.module.scss"
import cn from "classnames";

export function Tag({title, type}: {title: string, type?: string}) {
    return (
        <div className={cn(s.tag, {
            [s.plus]: type==="plus",
            [s.minus]: type==="minus"
        })}>
            {title}
        </div>
    )
}