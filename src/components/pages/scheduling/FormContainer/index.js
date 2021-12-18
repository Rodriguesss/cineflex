import './style.css'

export default function FormContainer({children: [form, button]}) {
  return (
    <div className="form-container">
      {form}
      <div class="button-container">
      {button}
      </div>
      
    </div>
  )
}