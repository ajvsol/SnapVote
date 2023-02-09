import Header from '../Header/index';
import Body from '../Body/index';
import { pageTypes } from '../../data/pageTypes';
import { useState, useEffect } from 'react';

export default function Display() {

	const [decisionTitle, setDecisionTitle] = useState("");
	const [index, setIndex] = useState(0);
	const [pageType, setPageType] = useState(pageTypes[index]);
	const [voters, setVoters] = useState(0);
	const [votersArr, setVotersArr] = useState([]);
	const [options, setOptions] = useState([])
	const [inputArr, setInputArr] = useState([])
	const [optionsArr, setOptionsArr] = useState([])

	/**
	 * This function updates the pageType variable using the pageTypes array in "../../data/pageTypes.js"
	 * This array contains the names of all the pages
	 * The index variable is also updated by 1 each time the page needs to be changed
	 */
	function changePage() {
		// Ensures the pageType doesn't go higher than our amount of finished pages
		if (index < 7){
			setPageType(pageTypes[index + 1]);
			setIndex(index + 1)
		}
		else {
			console.log("End of application")
		}
	}
	
	/**
	 * Sets the number of users to be equivalent to whatever number the user enters
	 */
	function numberOfUsers(event){
		//To-do: only vaildate numbers under 10
		setVoters(Number(event.target.value))
	}

	/**
	 * When the "voters" variable changes, the following code is run to update the votersArr
	 */
	useEffect(() => {
		let newArr = [];
		for (let i = 0; i < voters; i++){
			newArr = [...newArr, {name: i + 1, vote: "", voted: false}]
		}
		setVotersArr(newArr);
	}, [voters])

	/**
	 * Sets the "decisionTitle" variable to be whatever is entered by the user
	 */
	function inputDecisionName(event){
		//Only validate strings (perhaps limit number of characters too)
		setDecisionTitle(event.target.value)
	}

	/**
	 * OnChange, creates an object with the name of the input box as its property and the value as its key
	 * Each object is stored in an array called "inputArr"
	 */
	function inputOptions(event){
		let inputOptionsObj = {};
		inputOptionsObj[event.target.name] = event.target.value;
		setInputArr([...inputArr, inputOptionsObj]);
	}
	/**
	 * Whenever inputArr is updated, the inputArr is converted into a map to handle the duplicate values
	 * This map is converted back into an array free of duplicates
	 */
	useEffect(() => {
		let inputOptionsMap = new Map ();	
		inputArr.map(object => inputOptionsMap.set(Object.keys(object)[0], Object.values(object)[0]));
		setOptions(Array.from(inputOptionsMap, key => key[1]));
	}, [inputArr])

	/** 
	 * Whenever "options" is updated, the optionsArr is updated accordingly
	 */
	useEffect(() => {
		let newArr = [];
		options.map(option => {
			newArr = [...newArr, {
				option: option,
				votes: 0,
				eliminated: false,
				prosCons: {
					pros: [],
					cons: []
				}
			}]
			setOptionsArr(newArr)
			return option;
		})
	}, [options])

	let proConSelect = []
	/**
	 * Make an array of objects
	 * Each object contains the name of the select and its value
	 * This array is converted to a map to remove duplicates and then converted back into an array
	 */
	function selectProCon(event){
		let proConObj = {};
		proConObj[event.target.name] = event.target.value;
		proConSelect = [...proConSelect, proConObj]
		const proConMap = new Map();
		proConSelect.map(object => proConMap.set(Object.keys(object)[0], Object.values(object)[0]))
		proConSelect = Array.from(proConMap, key => {
		  	return {[key[0]]:key[1]};
		});
	}

	let proConInput = [];
	/**
	 * Make an array of objects
	 * Each object contains the name of the input and its value
	 * This array is converted to a map to remove duplicates and then converted back into an array
	 */
	function inputProCon(event){
		let proConObj = {};
		proConObj[event.target.name] = event.target.value
		proConInput = [...proConInput, proConObj]
		const proConMap2 = new Map();
		proConInput.map(object => proConMap2.set(Object.keys(object)[0], Object.values(object)[0]))
		proConInput = Array.from(proConMap2, (key, value) => {
		  	return {[key[0]]:key[1]};
		});
	}

	/**
	 * Update the options array to contain the pros and cons comments
	 */
	function handleProConClick(){
		//Create a copy of the optionsArr
		let newOptions = [...optionsArr]
		//Loop through the proConSelect array (contains the data about whether or not it is a pro or con and which option it refers to)
		for (let i = 0; i < proConSelect.length; i++){
			//Loop through the proConInput array (contains the pro or con comment and which option it refers to)
			for (let j = 0; j < proConInput.length; j++){
				//If both the "pro / con" select and the comment are referring to the same option...
				if (Object.keys(proConSelect[i])[0] === Object.keys(proConInput[j])[0]){
					//Whether or not it's a "pro" or a "con" is stored in a variable
					let proOrCon = Object.values(proConSelect[i])[0];
					//Which option it refers to is stored in a variable
					let compare = Object.keys(proConSelect[i])[0].replace(/["0-9"]/g, "");
					//Loop through the options array (contains all options and the data relating to them)
					for (let k = 0; k < newOptions.length; k++){
						//If the option matches the "compare" variable...
						if (newOptions[k].option === compare){
							//And if its comment is a "pro"
							if (proOrCon === "Pro"){
								//Make a variable to store the comment
								let newPro = Object.values(proConInput[j])[0]
								//Make a copy of the pros array to store the comment into 
								let newPros = [...newOptions[k].prosCons.pros, newPro]
								//Make a copy of the prosCons object to store the newPros array into
								let newObj = {...newOptions[k].prosCons, pros: newPros}
								//Make a copy of the entire option object to store the new options object into 
								let newOption = {...newOptions[k], prosCons: newObj}
								//Store the entire new object into the copy of the options array
								newOptions = [...newOptions.slice(0, k), newOption, ...newOptions.slice(k + 1)]
							}
							if (proOrCon === "Con"){
								let newCon = Object.values(proConInput[j])[0]
								let newCons = [...newOptions[k].prosCons.cons, newCon]
								let newObj = {...newOptions[k].prosCons, cons: newCons}
								let newOption = {...newOptions[k], prosCons: newObj}
								newOptions = [...newOptions.slice(0, k), newOption, ...newOptions.slice(k + 1)]
							}
						}
					}
				}
			}
		}
		//Set the optionsArr to be the newOptions array
		setOptionsArr(newOptions)
	}

	let votes = [];
	/**
	 * Make an array of objects
	 * Each object contains the name of the select and its value (i.e. what the person is voting on)
	 * This array is converted to a map to remove duplicates and then converted back into an array
	 */
	function proConVote(event){
		let proConObj = {};
		proConObj[event.target.name] = event.target.value;
		votes = [...votes, proConObj]
		const map2 = new Map();
		votes.map(object => map2.set(Object.keys(object)[0], Object.values(object)[0]))
		votes = Array.from(map2, (key, value) => {
		  	return {[key[0]]:key[1]};
		});
	}

	/**
	 * Update the options array to include the number of votes each option received
	 */
	function proConSubmitVote(){
		let newArr = [...optionsArr];
		for (let i = 0; i < votes.length; i++){
			for (let j = 0; j < newArr.length; j++){
				if (Object.values(votes[i])[0] === newArr[j].option){
					const newObj = {...newArr[j], votes: newArr[j].votes + 1}
					newArr = [...newArr.slice(0, j), newObj, ...newArr.slice(j + 1)]
				}
			}
		}
		setOptionsArr(newArr)
	}

	return (
		<div className='Display' data-testid='Display-components'>
			<Header 
			decisionTitle={decisionTitle}
			pageType={pageType}
			/>
			<Body 
				decisionTitle={decisionTitle}
				pageType={pageType} 
				changePage={changePage}  
				inputDecisionName={inputDecisionName}
				numberOfUsers={numberOfUsers}
				inputOptions={inputOptions}
				inputProCon={inputProCon}
				handleProConClick={handleProConClick}
				optionsArr={optionsArr}
				votersArr={votersArr}
				proConVote={proConVote}
				proConSubmitVote={proConSubmitVote}
				selectProCon={selectProCon}
			/>
		</div>    
	);
}