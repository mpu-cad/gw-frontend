import {Tag} from "../Tag/Tag.tsx";
import s from "./TagEdit.module.scss"
import cn from "classnames";

export function TagEdit({title, changeTag, type}: {title: string, changeTag: ()=>void, type: string}) {
    return (
        <div className={s.container}>
            <div onClick={changeTag} className={cn(s.symbol , {
                [s.plus]: type === "plus"
            })}>{type==="minus" ? "-" : "+"}</div>
            <Tag type={type} title={title}/>
        </div>
    )
}