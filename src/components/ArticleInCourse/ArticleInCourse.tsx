import s from "./ArticleInCourse.module.scss"
import {ArticleInterface} from "../../interfaces/articleInterface.ts";
import {EditIcon} from "../../images/icons/EditIcon.tsx";
import {Tag} from "../Tag/Tag.tsx";
import {Link, useParams} from "react-router";
import cn from "classnames";


interface propsInterface extends ArticleInterface{
    type?: string
}
export function ArticleInCourse({type, ...data} : propsInterface) {
    const {id_course} = useParams()
    return (
        <div className={cn(s.container, {
            [s.edit]: type==="edit"
        })}>
            <div className={s.info}>
                <p>{data.title}</p>
                <div className={s.tags}>{data.tags.map(el=><Tag title={el}/>)}</div>
            </div>
            <Link to={`/course/${id_course}/article-reduction/${data.id}`}><EditIcon color="#6666FF"/></Link>
        </div>
    )
}