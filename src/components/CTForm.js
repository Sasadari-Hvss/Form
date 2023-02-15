const Form = (props) => {
  return (
    
      
        <div className='form-control'>
          <label htmlFor='name'>{props.lable}</label>
          <input type='text' id={props.inputId} onChange={props.onChangeName} placeholder={props.placeholder} />
          <span>{props.err==="true"?"wrong name":""}</span>
        
        
      </div>
      
      
    
  );
};

export default Form;
