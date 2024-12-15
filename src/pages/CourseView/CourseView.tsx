import s from "./CourseView.module.scss";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { CourseInterface } from "../../interfaces/coursesInterface.ts";
import { COURSES } from "../../data/courses.ts";
import { Tag } from "../../components/Tag/Tag.tsx";
import { ARTICLES } from "../../data/articles.ts";
import { ArticleInCourse } from "../../components/ArticleInCourse/ArticleInCourse.tsx";
import { ButtonWithBorder } from "../../UI/buttons/ButtonWithBorder/ButtonWithBorder.tsx";

export function CourseView() {
    const navigation = useNavigate();
    const { id_course } = useParams();
    const [data, setData] = useState<CourseInterface>();

    useEffect(() => {
        const courseData = COURSES.find(el => String(el.id) === id_course);
        setData(courseData);
    }, [id_course]);

    return (
        <div className={s.container}>
            <div className={s.course_details}>
                <div className={s.course_poster}>
                    {data?.poster && <img src={data?.poster} alt="poster" className={s.poster} />}
                </div>
                <div className={s.course_info}>
                    <p className={s.course_title}>{data?.title}</p>
                    <p className={s.course_description}>{data?.description}</p>
                    <div className={s.tags}>
                        {data?.tags.map((el, index) => <Tag key={index} title={el} />)}
                    </div>
                </div>
                <ButtonWithBorder onClick={() => navigation(`/course-edit/${id_course}`)}>
                    Редактировать
                </ButtonWithBorder>
            </div>

            <div className={s.articles_section}>
                <p className={s.list_title}>Список статей</p>
                <div className={s.articles_list}>
                    {data?.articles.map(articleId => {
                        const article = ARTICLES.find(article => article.id === Number(articleId));
                        if (!article) return null;
                        return <ArticleInCourse key={article.id} {...article} />;
                    })}
                </div>
            </div>
        </div>
    );
}
