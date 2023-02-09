
/**
 * This is a test function blah 
 * @param {*} param2 comment text sample
 * @returns 
 */
export default function SubmitFunction({
	pageType, 
	changePage, 
	handleProConClick, 
	proConSubmitVote
}) {

	/** 
	 * Calls handleProConClick before changing the page
	 */
	function proConSubmit(){
		handleProConClick();
		changePage();
	}

	/** 
	 * Calls proConSubmitVote before changing the page
	 */
	function proConSubmitVoteFinal(){
		proConSubmitVote();
		changePage();
	}

  switch (pageType) {
		case "start": 
			return <button className='submit' data-testid='start' onClick={changePage}>Submit</button>
		case "decision-input":
			return <button className='submit' data-testid='decision-input' onClick={changePage}>Submit</button>
		case "options-input":
			return <button className='submit' data-testid='options-input' onClick={changePage}>Submit</button>
		case "pros-cons-input":
			return <button className='submit' onClick={proConSubmit}>Submit</button>
		case "pros-cons-comment":
			return <button className='submit' onClick={changePage}>Submit</button>
		case "pros-cons-vote":
			return <button className='submit' onClick={proConSubmitVoteFinal}>Submit</button>
		case "pros-cons-results":
			break;
		case "weighted-vote-input":
			return <button className='submit' onClick={changePage}>Submit</button>
		case "weighted-vote-results":
			return <button className='submit' onClick={changePage}>Submit</button>
		case "randomiser":
			return <button className='submit' onClick={changePage}>Submit</button>
		case "final-results":
			return <button className='submit' onClick={changePage}>Submit</button>		
        default:
			break;
	}
}
