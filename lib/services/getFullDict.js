const getFullDict=async (word)=>{
	let anotherWord = await (require('./getAnotherWords'))(word)
	return {   
		Definations: await (require('./getDefinations'))(word),
		Synonyms: anotherWord.synonym? anotherWord.synonym :'',
		Antonyms: anotherWord.antonym? anotherWord.antonym:'',
		Examples: await (require('./getExamples'))(word),
	}
}
module.exports = getFullDict;