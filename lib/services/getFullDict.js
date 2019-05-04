const getFullDict=async (word)=>{
	let anotherWord = await (require('./getAnotherWords'))(word)
	return {   
		getDefinations: await (require('./getDefinations'))(word),
		getSynonyms: anotherWord.object? anotherWord.object.synonyms:'',
		getAntonyms: anotherWord.object? anotherWord.object.antonyms:'',
		getExamples: await (require('./getExamples'))(word),
	}
}
module.exports = getFullDict;