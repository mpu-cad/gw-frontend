import s from "./TagsEdit.module.scss"
import {TagEdit} from "../TagEdit/TagEdit.tsx";
import {AddButton} from "../../UI/buttons/AddButton/AddButton.tsx";
import {useState} from "react";
import {AddTagsModal} from "../AddTagsModal/AddTagsModal.tsx";
import {TAGS} from "../../data/tags.ts";

interface propsInterface {
    chosenTags: string[],
    editTags: (value: string, type: "minus" | "plus")=>void
}

export function TagsEdit({chosenTags, editTags}: propsInterface) {
    const [tagsModal, setTagsModal] = useState(false);

    return (
        <>
            {tagsModal && <AddTagsModal close={() => setTagsModal(false)} deleteTag={editTags} addTag={editTags}
                                        chosenTag={chosenTags} tags={TAGS}/>}
            <div className={s.tags}>
                {chosenTags.length > 0 ? chosenTags.map((el, index) => (
                    <TagEdit type="minus" changeTag={() => {
                        editTags(el, "minus")
                    }} key={index} title={el}/>
                )) : <p>Добавьте теги к своей статье</p>}
                <AddButton type="button" onClick={() => setTagsModal(true)} className={s.add_tag}/>
            </div>
        </>
    )
}