import query from '../db/index.js';

// GET
// get all options
export async function getAllOptions() {
    const result = await query('SELECT option FROM options;')
    const optionsList = result.rows;
    return optionsList;
}

// get all pros/cons
export async function getAllProsCons() {
    const result = await query('SELECT pros_cons FROM pros_cons;')
    const prosConsList = result.rows;
    return prosConsList;
}

// TODO if time: get all previous results

// POST
// post a new option
export async function addNewOption(option){
    const result = await query('INSERT INTO options (author, option) VALUES ($1, $2);', [option.author, option.option])
    return option;
}

// post a new pro/con
export async function addNewProCon(procon){
    const result = await query('INSERT INTO pros_cons (author, category, pros_cons) VALUES ($1, $2, $3);', [procon.author, procon.category, procon.pros_cons])
    return procon;
}