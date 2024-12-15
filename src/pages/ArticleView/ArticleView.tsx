import s from "./ArticleView.module.scss"
import { ArticleInterface } from "../../interfaces/articleInterface.ts";
import { useEffect, useState } from "react";
import { ARTICLES } from "../../data/articles.ts";
import {useNavigate, useParams} from "react-router";
import {Tag} from "../../components/Tag/Tag.tsx";
import {ButtonWithBorder} from "../../UI/buttons/ButtonWithBorder/ButtonWithBorder.tsx";

export function ArticleView() {
    const { id, id_course } = useParams();
    const [data, setData] = useState<ArticleInterface | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const article = ARTICLES.find(el => el.id === Number(id));
        setData(article || null);
    }, [id]);

    if (data) {
        return (
            <div>
                <div className={s.top}>
                    <div className={s.article_title}>{data.title}</div>
                    <div>
                        <ButtonWithBorder
                            onClick={() => navigate(`/course/${id_course}/article-reduction/${id}`)}>
                            Редактировать
                        </ButtonWithBorder>
                    </div>
                </div>

                <div className={s.tags}>
                    {data.tags.map((el, index) => (
                        <Tag key={index} title={el}/>
                    ))}
                </div>

                <div className={s.text}
                     dangerouslySetInnerHTML={{ __html: data.text }}>
                </div>
            </div>
        )
    } else {
        return null;
    }
}
