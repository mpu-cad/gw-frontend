
import "./AcceptReg.css"

const AcceptReg = () => {
    return (
        <div className="acceptioncard"  style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
            <form action="/submit" method="post" noValidate style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent:"center"}}>
                    <label htmlFor="code1">Код:</label>
                    <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                        <input className="codeInput" type="text" id="code1" name="code1" maxLength={1} pattern="[A-Z0-9]" required autoFocus></input>
                        <input className="codeInput" type="text" id="code2" name="code2" maxLength={1} pattern="[A-Z0-9]" required></input>
                        <input className="codeInput" type="text" id="code3" name="code3" maxLength={1} pattern="[A-Z0-9]" required></input>
                        <input className="codeInput" type="text" id="code4" name="code4" maxLength={1} pattern="[A-Z0-9]" required></input>
                        <input className="codeInput" type="text" id="code5" name="code5" maxLength={1} pattern="[A-Z0-9]" required></input>
                        <input className="codeInput" type="text" id="code6" name="code6" maxLength={1} pattern="[A-Z0-9]" required></input>
                    </div>
                </div>
                <button type="submit" className="btnSubmission">Отправить</button>
            </form>
        </div>
    )
}
export default AcceptReg