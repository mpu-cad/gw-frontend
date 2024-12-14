import { useState } from "react";
import "./AcceptReg.css"
import Input from "./Input";

const AcceptReg = () => {
    const [values, setValues] = useState<string[]>(Array(6).fill(""));
    console.log(values)
    return (

        <div className="acceptioncard"  style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
            <form action="/submit" method="post" noValidate style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent:"center"}}>
                    <label htmlFor="code1">Код:</label>
                    <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                        <Input length={6} values={values} onChange={setValues}/>
                    </div>
                </div>
                <button type="submit" className="btnSubmission">Отправить</button>
            </form>
        </div>
    )
}
export default AcceptReg