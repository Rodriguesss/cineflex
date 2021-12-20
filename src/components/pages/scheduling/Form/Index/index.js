import Label from '../Label'
import Input from '../Input'

import './style.css'

export default function Form({ label, placeholder, cpf, setInputName, setInputCPF }) {
    return (
        <div className="form">
            <Label name={label} />
            <Input placeholder={placeholder} cpf={cpf} setInputName={setInputName} setInputCPF={setInputCPF} />
        </div>
    )
}