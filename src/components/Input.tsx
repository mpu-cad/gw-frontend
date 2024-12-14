import React, { useRef} from "react";
import "./AcceptReg.css"

type InputProps = {
    length: number;
    values: string[]
    onChange: (values: string[]) => void
}
const Input: React.FC<InputProps> = ({length, values, onChange}) => {
    //const [values, setValues] = useState<string[]>(Array(length).fill(""));
    const inputRef = useRef<Array<HTMLInputElement | null>>([])
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const value = event.target.value
        const pattern = /^[A-Za-z0-9]$/
        if(value && pattern.test(value)){
            const upValue = value.toUpperCase()
            const newValues = [...values]
            newValues[index] = upValue
            onChange(newValues)
            if(inputRef.current[index+1]){
                inputRef.current[index+1]?.focus() 
            }
        }else{
            event.target.value = ""
        }
    }
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, index: number) =>{
        if(event.key === "Backspace"){
            const newValues = [...values]
            newValues[index] = ""
            onChange(newValues)
            if(inputRef.current[index-1] && !values[index]){
                inputRef.current[index-1]?.focus()
            }
        }
        // if(event.key === "Backspace" && !values[index]){
        //     if(inputRef.current[index-1]){
        //         inputRef.current[index-1]?.focus()
        //     }
        // }
    }
    return(
        <div style={{display:"flex", flexDirection:"row", gap:"10px"}}>
            {Array.from({length}).map((_, index) => (
                <input className="codeInput"
                    key={index}
                    type="text"
                    ref={(el) => {inputRef.current[index] = el}}
                    value={values[index]}
                    maxLength={1}
                    onChange ={(event) => handleInput(event, index)}
                    onKeyDown={(event) => handleKeyDown(event, index)}
                    
                />
            )) }
        </div>
    )
}
export default Input