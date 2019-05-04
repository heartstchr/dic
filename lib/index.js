module.exports = {   
	getDefinations: require('./services/getDefinations'),
	getSynonyms: require('./services/getAnotherWords').getSynonyms,
	getAntonyms: require('./services/getAnotherWords').getAntonyms,
	getExamples: require('./services/getExamples'),
	getFullDict: require('./services/getFullDict'),
	getWordOfDay: require('./services/getWordOfDay'),
	getWordGame: require('./services/getWordGame')
};