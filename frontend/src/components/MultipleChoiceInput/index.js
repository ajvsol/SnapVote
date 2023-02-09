import "./index.css";
import { v4 as uuidv4 } from 'uuid';



export default function MultipleChoiceInput({
  pageType,
  changePage,
  inputOptions,
  inputProCon,
  optionsArr,
  selectProCon
}) {
  switch (pageType) {
    case "options-input":
      return (
        <div className="MultipleChoiceInput options-input-container" data-testid="MultipleChoiceInput">
          <input
            className="options-input"
            placeholder="Enter an option..."
            name="input-1"
            onChange={inputOptions}
          ></input>
          <input
            className="options-input"
            placeholder="Enter an option..."
            name="input-2"
            onChange={inputOptions}
          ></input>
          <input
            className="options-input"
            placeholder="Enter an option..."
            name="input-3"
            onChange={inputOptions}
          ></input>
          <input
            className="options-input"
            placeholder="Enter an option..."
            name="input-4"
            onChange={inputOptions}
          ></input>
        </div>
      );
    case "pros-cons-input":
      return <div className='pros-cons-input pros-cons-input1' data-testid='pros-cons-input1' >
        {optionsArr.map((el) => <div key={uuidv4()} className="pro-con-container">
          <div className="pro-con-header"><h1>{el.option}</h1></div>
          <div className="pro-con">
            <select 
              className="custom-select"
              onChange={selectProCon}
              name={el.option + 1}
            >
              <option></option>
              <option>Pro</option>
              <option>Con</option>
            </select>
            <input
              placeholder="Enter a pro or con..."
              name={el.option + 1}
              onChange={inputProCon}
            ></input>
          </div>
          <div className="pro-con">
          <select 
              className="custom-select"
              onChange={selectProCon}
              name={el.option + 2}
            >
              <option></option>
              <option>Pro</option>
              <option>Con</option>
            </select>
            <input
              placeholder="Enter a pro or con..."
              name={el.option + 2}
              onChange={inputProCon}
            ></input>
          </div>
          <div className="pro-con">
          <select
              className="custom-select"
              onChange={selectProCon}
              name={el.option + 3}
            >
              <option></option>
              <option>Pro</option>
              <option>Con</option>
            </select>
            <input
              placeholder="Enter a pro or con..."
              name={el.option + 3}
              onChange={inputProCon}
            ></input>
          </div>
          <div className="pro-con">
          <select
              className="custom-select"
              onChange={selectProCon}
              name={el.option + 4}
            >
              <option></option>
              <option>Pro</option>
              <option>Con</option>
            </select>
            <input
              placeholder="Enter a pro or con..."
              name={el.option + 4}
              onChange={inputProCon}
            ></input>
          </div>
      </div>)}
      </div>;
    case "pros-cons-comment":
      return <h1>To do if time</h1>;
    case "weighted-vote-input":
      return <h1>To do if time</h1>;
    default:
      break;
  }
}