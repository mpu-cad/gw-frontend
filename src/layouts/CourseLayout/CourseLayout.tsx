import s from "./Course.module.scss"
import { ARTICLES } from "../../data/articles.ts";
import { ArticleItemInPanel } from "../../components/ArticleItemInPanel/ArticleItemInPanel.tsx";
import {useNavigate, useParams} from "react-router";
import { useEffect, useState } from "react";
import { ArticleInterface } from "../../interfaces/articleInterface.ts";

export function Course() {
    const { id } = useParams();
    const navigation = useNavigate()
    const [data, setData] = useState<ArticleInterface | null>(null);

    useEffect(() => {
        const article = ARTICLES.find(el => el.id === Number(id));
        setData(article || null);
    }, [id]);

    return (
        <div className={s.container}>
            <div className={s.course_panel}>
                <div className={s.course}>Название курса</div>
                <div className={s.articles}>
                    {ARTICLES.map((el) => (
                        <ArticleItemInPanel idArticle={el.id} onClick={()=>navigation(`/course/view/${el.id}`)} title={el.title} key={el.id} />
                    ))}
                </div>
            </div>

            <div className={s.main}>
                {data ? (
                    <>
                        <div className={s.top}>
                            <div className={s.article_title}>{data.title}</div>
                            <div>
                                <button className={s.reduction}>Редактировать</button>
                            </div>
                        </div>

                        <div className={s.tags}>
                            {data.tags.map((el, index) => (
                                <div className={s.tag} key={index}>{el}</div>
                            ))}
                        </div>

                        <div
                            className={s.text}
                            dangerouslySetInnerHTML={{ __html: data.text }}>
                        </div>
                    </>
                ) : (
                    <div>Загрузка...</div>
                )}
            </div>
        </div>
    )
}
