import s from "./ArticleReduction.module.scss"
import {ArticleInterface} from "../../interfaces/articleInterface.ts";
import {useEffect, useState} from "react";
import {ARTICLES} from "../../data/articles.ts";
import {useNavigate, useParams} from "react-router";
import {Input} from "../../UI/inputs/Input/Input.tsx";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import {ButtonWithBorder} from "../../UI/buttons/ButtonWithBorder/ButtonWithBorder.tsx";
import {TagsEdit} from "../../components/TagsEdit/TagsEdit.tsx";

export function ArticleReduction() {
    const {id, id_course} = useParams();
    const [data, setData] = useState<ArticleInterface | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const article = ARTICLES.find(el => el.id === Number(id));
        setData(article || null);
    }, [id]);

    const changeData = (key: keyof ArticleInterface, value: string) => {
        setData(prevState => {
            if (!prevState) return prevState;
            return {
                ...prevState,
                [key]: value
            } as ArticleInterface;
        });
    }

    const editTags = (name: string, type: "plus" | "minus") => {
        if (data) {
            let newTags = [...data?.tags]
            if (type === "minus") {
                newTags = data?.tags.filter(el => el !== name)
            } else {
                newTags = [...data.tags, name];
            }
            setData(prevState => {
                if (!prevState) return prevState;
                return {
                    ...prevState,
                    tags: newTags
                } as ArticleInterface;
            });
        }
    }

    const save = (e: React.FormEvent) => {
        e.preventDefault();
        if (data) {
            const articleIndex = ARTICLES.findIndex(el => el.id === data.id);
            if (articleIndex !== -1) {
                ARTICLES[articleIndex] = data;
            }
            navigate(`/course/${id_course}/article-view/${id}`);
        }
    }

    if (data) {
        return (
            <>
                <form onSubmit={save}>
                    <div className={s.top}>
                        <Input className={s.article_title} value={data.title} onChange={(e) => {
                            changeData("title", e.target.value)
                        }}/>
                        <div>
                            <ButtonWithBorder type="submit"
                                    onClick={() => navigate(`/course/${id_course}/article-reduction/${id}`)}>
                                Сохранить
                            </ButtonWithBorder>
                        </div>
                    </div>

                    <TagsEdit chosenTags={data.tags} editTags={editTags}/>
                    <ReactQuill value={data.text} onChange={(v: string) => changeData("text", v)}/>
                </form>
            </>
        )
    } else {
        return null;
    }
}
