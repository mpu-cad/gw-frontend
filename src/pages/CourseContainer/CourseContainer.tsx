import s from "./CourseContainer.module.scss";
import { ARTICLES } from "../../data/articles.ts";
import { COURSES } from "../../data/courses.ts";
import { ArticleItemInPanel } from "../../components/ArticleItemInPanel/ArticleItemInPanel.tsx";
import { Outlet, useNavigate, useParams } from "react-router";

export function CourseContainer() {
    const navigate = useNavigate();
    const { id_course } = useParams();
    const course = COURSES.find(course => course.id === Number(id_course));

    if (!course) {
        return <div>Курс не найден</div>;
    }

    const courseArticles = course.articles
        .map((articleId) => ARTICLES.find(article => article.id === Number(articleId)))
        .filter((el): el is typeof ARTICLES[number] => el !== undefined); // Убираем undefined и убеждаемся, что el — это статья

    return (
        <div className={s.container}>
            <div className={s.course_panel}>
                <div className={s.course}>{course.title}</div>
                <div className={s.articles}>
                    {courseArticles.map((el) => (
                        <ArticleItemInPanel
                            idArticle={el.id}
                            onClick={() => navigate(`/course/${id_course}/article-view/${el.id}`)}
                            title={el.title}
                            key={el.id}
                        />
                    ))}
                    <button onClick={() => navigate(`/course/${id_course}/article-add`)}>+ Добавить статью</button>
                </div>
            </div>

            <div className={s.main}>
                <Outlet />
            </div>
        </div>
    );
}
