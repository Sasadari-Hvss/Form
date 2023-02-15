import React from "react";
function TextField (props){
    // const [enteredName, setEnteredName] = useState('');
    // const [enteredNameTouched, setEnteredNameTouched] = useState(false);



//     const nameInputChangeHandler = (event) => {
//         setEnteredName(event.target.value);
//       };

//        const nameInputBlurHandler = (event) => {
//     setEnteredNameTouched(true);
//   };
    


<div className={props.name}>
        <label htmlFor={props.name}>{props.name}</label>
        <input
          type='text'
          id={props.name}
        //   onChange={nameInputChangeHandler}
        //   onBlur={nameInputBlurHandler}
        //   value={enteredName}
        />
        {/* {nameInputIsInvalid && (
          <p className='error-text'>Name must not be empty.</p>
        )} */}
      </div>
}
export default TextField;