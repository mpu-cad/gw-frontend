import React from "react";
import s from "./Textarea.module.scss";
import cn from "classnames";

interface PropsInterface extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Textarea({ ...props }: PropsInterface) {
    return (
        <textarea {...props} className={cn(s.textarea, props.className)} />
    );
}
