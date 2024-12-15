import s from "./CourseEdit.module.scss";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { CourseInterface } from "../../interfaces/coursesInterface.ts";
import { COURSES } from "../../data/courses.ts";
import { ARTICLES } from "../../data/articles.ts";
import { ButtonWithBorder } from "../../UI/buttons/ButtonWithBorder/ButtonWithBorder.tsx";
import { ArticleInCourse } from "../../components/ArticleInCourse/ArticleInCourse.tsx";
import { CameraIcon } from "../../images/icons/CameraIcon.tsx";
import { Input } from "../../UI/inputs/Input/Input.tsx";
import { Textarea } from "../../UI/inputs/Textarea/Textarea.tsx";
import { TagsEdit } from "../../components/TagsEdit/TagsEdit.tsx";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

export function CourseEdit() {
    const navigation = useNavigate();
    const { id_course } = useParams();
    const [data, setData] = useState<CourseInterface>();

    useEffect(() => {
        const courseData = COURSES.find(el => String(el.id) === id_course);
        setData(courseData);
    }, [id_course]);

    const changeData = (key: keyof CourseInterface, value: string) => {
        setData(prevState => {
            if (!prevState) return prevState;
            return {
                ...prevState,
                [key]: value
            } as CourseInterface;
        });
    }

    const editTags = (name: string, type: "plus" | "minus") => {
        if (data) {
            let newTags = [...data?.tags];
            if (type === "minus") {
                newTags = data?.tags.filter(el => el !== name);
            } else {
                if (!newTags.includes(name)) {
                    newTags = [...data.tags, name];
                }
            }
            setData(prevState => {
                if (!prevState) return prevState;
                return {
                    ...prevState,
                    tags: newTags
                } as CourseInterface;
            });
        }
    }

    const updatePoster = (newPosterUrl: string) => {
        setData(prevState => {
            if (!prevState) return prevState;
            return {
                ...prevState,
                poster: newPosterUrl
            } as CourseInterface;
        });
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const imageUrl = reader.result as string;
                updatePoster(imageUrl);
            };
            reader.readAsDataURL(file);
        }
    }

    const save = () => {
        if (data) {
            const courseIndex = COURSES.findIndex(course => course.id === data.id);
            if (courseIndex !== -1) {
                debugger
                COURSES[courseIndex] = data;
                navigation(`/course/${id_course}`);
            } else {
                console.error(`Курс с id ${data.id} не найден`);
            }
        }
    }

    const handleDragEnd = (result: any) => {
        if (!result.destination) return;
        if (!data) return;

        const newOrder = [...data.articles]; // Создаём копию массива
        const [movedItem] = newOrder.splice(result.source.index, 1); // Удаляем элемент по source.index
        newOrder.splice(result.destination.index, 0, movedItem); // Вставляем его в новую позицию

        // Обновляем состояние
        setData(prevState => {
            if (!prevState) return prevState;
            return {
                ...prevState,
                articles: newOrder
            } as CourseInterface;
        });
    }

    return (
        <div className={s.container}>
            <div className={s.course_details}>
                <button className={s.course_poster}>
                    {data?.poster ? (
                        <img src={data?.poster} alt="poster" className={s.poster} />
                    ) : null}
                    <input
                        type="file"
                        accept="image/*"
                        className={s.file_input}
                        onChange={handleFileChange}
                    />
                    <div className={s.edit_photo}>
                        <CameraIcon color="#6666FF" />
                    </div>
                </button>
                <div className={s.course_info}>
                    <Input
                        value={data?.title}
                        onChange={(e) => changeData('title', e.target.value)}
                    />
                    <Textarea
                        value={data?.description}
                        onChange={(e) => changeData('description', e.target.value)}
                    />
                    <TagsEdit
                        chosenTags={data?.tags || []}
                        editTags={editTags}
                    />
                </div>
                <ButtonWithBorder onClick={save}>Сохранить</ButtonWithBorder>
            </div>
            <div className={s.articles_section}>
                <p className={s.list_title}>Список статей</p>
                <DragDropContext onDragEnd={handleDragEnd}>
                    <Droppable droppableId="articles">
                        {(provided) => (
                            <div className={s.articles_list} ref={provided.innerRef} {...provided.droppableProps}>
                                {data?.articles.map((id, index) => {
                                    const article = ARTICLES.find(article => article.id === Number(id));
                                    if (!article) return null;
                                    return (
                                        <Draggable key={String(id)} draggableId={String(id)} index={index}>
                                            {(provided) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                >
                                                    <ArticleInCourse type="edit" key={article.id} {...article} />
                                                </div>
                                            )}
                                        </Draggable>
                                    );
                                })}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </div>
        </div>
    );
}
