import s from "./CourseCard.module.scss"
import {CourseInterface} from "../../interfaces/coursesInterface.ts";
import {Tag} from "../Tag/Tag.tsx";
import {Link} from "react-router";

export function CourseCard({id, title, description, tags}: CourseInterface) {
    return (
        <Link to={`/course/${id}`} className={s.container}>
            <div className={s.title}>{title}</div>
            <div className={s.description}>{description}</div>
            <div className={s.tags}>{tags.slice(0, 3).map(el=><Tag title={el}/>)}</div>
        </Link>
    )
}