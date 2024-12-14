import "./MailCard.css"

const MailCard = () => {
    const code: string = "123456"
    return (
        <div className="mailcard" style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "auto", backgroundColor: "white"}}>  
                 <h1 style={{fontSize: "16px", margin: "20px", textAlign: "center", fontFamily: 'Trebuchet MS'}}>Это письмо было автоматически сгенерировано и отправлено на ваш почтовый ящик. </h1>
                 <div style={{height:"54px", width:"auto", marginBottom: "20px", border: "2px solid #FF3366", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: "24px"}}>
                    <h2 style={{fontSize: "14px", color: "#FF3366", margin: "20px", textAlign: "center", fontFamily: 'Trebuchet MS'}}>Код для подтверждения регистрации:</h2>
                </div>
                 <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}> 
                    <p className="code" style={{fontSize: "48px", margin: "20px", textAlign: "center", fontFamily: 'Trebuchet MS', fontWeight: "bold", backgroundColor: "#f0f0f0"}}>{code}</p>
                 </div>
                 <div>
                    <h2 style={{fontSize: "14px", marginTop: "20px", textAlign: "left", fontFamily: 'Trebuchet MS'}}> - Не сообщайте код никому.</h2>
                    <h2 style={{fontSize: "14px", marginTop: "5px", textAlign: "left", fontFamily: 'Trebuchet MS'}}> - После ввода кода на странице регистрации, вы сможете войти в свой аккаунт. </h2>
                </div>
                <h2 style={{fontSize: "16px", marginTop: "15px", textAlign: "left", fontFamily: 'Trebuchet MS'}}> Если вы получили это письмо ошибочно, проигнорируйте его.</h2>
        </div>
    )
}
export default MailCard