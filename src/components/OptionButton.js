import React from 'react'

export const OptionButton = (props) => {
  return (
    <div>
            <label>{props.text}</label>
            <select>
              {props.options &&
              props.options.map((option)=>
                <option>{option}</option>
              )}
            </select>
          </div>
  )
}

export default OptionButton;