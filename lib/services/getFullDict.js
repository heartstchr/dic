const getFullDict=(word)=>{
	return {   
		getDefinations: require('./getDefinations')(word),
		getSynonyms: require('./getAnotherWords')(word).getSynonyms,
		getAntonyms: require('./getAnotherWords')(word).getAntonyms,
		getExamples: require('./getExamples')(word),
	}
}
module.exports = getFullDict;