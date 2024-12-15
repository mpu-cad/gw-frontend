import s from "./ArticleAdding.module.scss"
import {AddTagsModal} from "../../components/AddTagsModal/AddTagsModal.tsx";
import {TAGS} from "../../data/tags.ts";
import {Input} from "../../UI/inputs/Input/Input.tsx";
import {TagEdit} from "../../components/TagEdit/TagEdit.tsx";
import {AddButton} from "../../UI/buttons/AddButton/AddButton.tsx";
import ReactQuill from "react-quill";
import {useState} from "react";
import {ArticleInterface} from "../../interfaces/articleInterface.ts";
import {useNavigate, useParams} from "react-router";
import {COURSES} from "../../data/courses.ts";
import {ARTICLES} from "../../data/articles.ts";
import {ButtonWithBorder} from "../../UI/buttons/ButtonWithBorder/ButtonWithBorder.tsx";

export function ArticleAdding() {
    const navigate = useNavigate();
    const {id_course} = useParams()
    const [tagsModal, setTagsModal] = useState(false);
    const [data, setData] = useState<ArticleInterface>({
        id: 0,
        title: "",
        text: "",
        tags: []
    });

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
            if(type=== "minus") {
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
        const courseId = Number(id_course);
        const courseIndex = COURSES.findIndex(course => course.id === courseId);
        if (courseIndex !== -1) {
            const newArticleId = String(Date.now());
            const newArticle = { ...data, id: Number(newArticleId) };
            COURSES[courseIndex].articles.push(newArticleId);
            ARTICLES.push(newArticle);
            navigate(`/course/${id_course}`);
        } else {
            console.error(`Курс с id ${courseId} не найден`);
        }
    }

    return (
        <>
            {tagsModal && <AddTagsModal close={() => setTagsModal(false)} deleteTag={editTags} addTag={editTags}
                                        chosenTag={data.tags} tags={TAGS}/>}
            <form onSubmit={save}>
                <div className={s.top}>
                    <Input placeholder="Название статьи" className={s.article_title} value={data.title} onChange={(e) => {
                        changeData("title", e.target.value)
                    }}/>
                    <div>
                        <ButtonWithBorder type="submit"
                                onClick={() => navigate(`/course/${id_course}`)}>
                            Сохранить
                        </ButtonWithBorder>
                    </div>
                </div>

                <div className={s.tags}>
                    {data.tags.length > 0 ? data.tags.map((el, index) => (
                        <TagEdit type="minus" changeTag={() => {
                            editTags(el, "minus")
                        }} key={index} title={el}/>
                    )) : <p>Добавьте теги к своей статье</p>}
                    <AddButton type="button" onClick={() => setTagsModal(true)} className={s.add_tag}/>
                </div>
                <ReactQuill value={data.text} onChange={(v: string) => changeData("text", v)}/>
            </form>
        </>
    )
}