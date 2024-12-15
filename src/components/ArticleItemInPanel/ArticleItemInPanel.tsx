import s from "./ArticleItemInPanel.module.scss"
import cn from "classnames";
import {useParams} from "react-router";
interface propsInterface extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    idArticle: number
    title: string
}

export function ArticleItemInPanel({title, idArticle, ...props}: propsInterface) {
    const { id } = useParams();

    return (
        <button className={cn(s.container, {
            [s.chosen]: idArticle ===  Number(id)
        })} {...props}>{title}</button>
    )
}