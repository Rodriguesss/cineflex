import Label from '../Label'
import Input from '../Input'

import './style.css'

export default function Form({ label, placeholder, cpf}) {
    return (
        <div className="form">
            <Label name={label} />
            <Input placeholder={placeholder} cpf={cpf} />
        </div>
    )
}