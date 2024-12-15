import s from "./AddTagsModal.module.scss"
import {TagEdit} from "../TagEdit/TagEdit.tsx";
import {useEffect, useState} from "react";
import {Input} from "../../UI/inputs/Input/Input.tsx";


interface propsInterface {
    tags: string[],
    chosenTag: string[],
    deleteTag: (value: string, type: "plus" | "minus") => void
    addTag: (value: string, type: "plus" | "minus") => void
    close: ()=>void
}

export function AddTagsModal({tags, chosenTag, deleteTag, addTag, close}: propsInterface) {
    const [allTags, setAllTags] = useState(tags)
    const [search, setSearch] = useState("")

    useEffect(() => {
        const newAllTags = tags.filter(el =>
            !chosenTag.includes(el) && el.toLowerCase().includes(search.toLowerCase())
        );
        setAllTags(newAllTags);
    }, [chosenTag, search, tags]);


    const changeSearch = (value: string) => {
        setSearch(value);
    }

    return (
        <>
            <div onClick={close} className={s.background}></div>
            <div className={s.window}>
                <p className={s.text}>Выбранные теги</p>
                <div className={s.tags}>{chosenTag.map(el => <TagEdit type="minus"
                                                                      changeTag={() => deleteTag(el, "minus")}
                                                                      title={el}/>)}</div>
                <Input placeholder="Поиск" value={search} onChange={e => changeSearch(e.target.value)}
                       className={s.input}/>
                <p className={s.text}>Доступные теги</p>
                <div className={s.tags}>{allTags.map(el => <TagEdit type="plus" changeTag={() => addTag(el, "plus")}
                                                                    title={el}/>)}</div>
            </div>
        </>
    )
}