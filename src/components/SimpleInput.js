import { useState } from "react";
import CTForm from "./CTForm";
import OptionButton from "./OptionButton";

const SimpleInput = (props) => {
  const [task, setTask] = useState("");
  const [taskError, setTaskError] = useState("error");

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    console.log(task);
    task.length < 10 ? setTaskError("true") : setTaskError("false");
  };

  const nameHandeler = (event) => {
    // console.log(event.target.value);
    setTask(event.target.value);
  };

  const flags = ["🏴", "🚩"];

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <div className="control-group">
          <CTForm
            lable="Task Name"
            inputId="task"
            onChangeName={nameHandeler}
            placeholder="Enter a task name"
            err={taskError}
          />
          <CTForm 
          lable="Assign" 
          placeholder="Add asign member" />
        </div>
        <div className="control-group">
          <OptionButton text="Select a flag" options={flags}  />
          <CTForm lable="Reporter" 
          placeholder="Enter reporter"/>
        </div>

        <div className="control-group">
          <CTForm lable="Flag" 
          placeholder="Enter flag"/>

          <CTForm lable="Link to" 
          placeholder="Enter linked task"/>
        </div>
        <div className="control-group">
          <CTForm lable="Start Date"
          type="date" />

          <CTForm lable="End Date" />
        </div>

        <br />
        <div className="text">
          <textarea></textarea>
        </div>
      </div>

      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

//<select>
//<option>🏳</option>
//<option>🏴</option>
//<option>🚩</option>
//</select>
