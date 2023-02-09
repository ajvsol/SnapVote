import "./index.css";
import SubmitButton from "../SubmitButton/index";
import SingleInputBox from "../SingleInputBox/index";
import MultipleChoiceInput from "../MultipleChoiceInput/index";
import AllOptionsTable from "../AllOptionsTable/index"
import Results from "../Results/index";

export default function Body({
  pageType,
  inputDecisionName,
  numberOfUsers,
  changePage,
  inputOptions,
  inputProCon,
  handleProConClick,
  optionsArr,
  votersArr,
  proConVote,
  proConSubmitVote,
  selectProCon
}) {
  return (
    <div className='body-component' data-testid='body-component' >
    
      <SingleInputBox
        pageType={pageType}
        inputDecisionName={inputDecisionName}
        numberOfUsers={numberOfUsers}
      />
      <MultipleChoiceInput 
        pageType={pageType} 
        inputOptions={inputOptions} 
        inputProCon={inputProCon}
        optionsArr={optionsArr}
        selectProCon={selectProCon}
      />
      <AllOptionsTable
        pageType={pageType} 
        optionsArr={optionsArr} 
        votersArr={votersArr} 
        proConVote={proConVote}
      />
      <Results 
        pageType={pageType}
        optionsArr={optionsArr}
      />
      <SubmitButton 
        pageType={pageType} 
        changePage={changePage}
        handleProConClick={handleProConClick}
        proConSubmitVote={proConSubmitVote}
      />
    </div>
  );
}
