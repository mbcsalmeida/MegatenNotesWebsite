import { useState } from 'react'
import data from '../../res/demons.json'

function Tracker() {
  const [total, setTotal] = useState(0);

  let handleOnChange = (id) => {
    let checkboxes = Array.from(document.querySelectorAll('input[id='+id.value+']'));
    checkboxes.map((value) => value.checked = !value.checked)
    setTotal(total+1)
  }

  let firstLetterUppercase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);

  }

  return (
    <>
      <h3>Shin Megami Tensei - Demon Tracker</h3>
      {Object.entries(data).map(([area, demons]) => {
        return (<fieldset>
        <legend>{area}:</legend>

        {demons.map((value) => {
          return (<div className='dropdown'>
            <input type="checkbox" id={value} name={value} onClick={() => handleOnChange({value})} />
            <label for={value}>{firstLetterUppercase(value)}</label>
          </div>)
        })}
        </fieldset>)
      })}
    <h3>Total: {total} / 155</h3>
    </>
  )
}

export default Tracker