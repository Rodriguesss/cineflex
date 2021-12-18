import Label from '../Label'
import Input from '../Input'

import './style.css'

export default function Form({ label, placeholder}) {
    return (
        <div className="form">
            <Label name={label} />
            <Input placeholder={placeholder} />
        </div>
    )
}