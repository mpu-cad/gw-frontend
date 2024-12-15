import s from "./Courses.module.scss"
import {COURSES} from "../../data/courses.ts";
import {CourseCard} from "../../components/CourseCard/CourseCard.tsx";

export function Courses() {
    return (
        <div className={s.container}>
            {COURSES.map(el=> <CourseCard {...el}/>)}
        </div>
    )
}