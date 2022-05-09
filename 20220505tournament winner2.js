function tournamentWinner(competitions, results) {
  // Write your code here.
	let competitorScore = {};
	let currentBestTeam = '';

	for (let i=0; i<competitions.length; i++) {
		let homeTeam = competitions[i][0];
		let awayTeam = competitions[i][1];
		let result = results[i];
		if (result === 1) {
			if (!competitorScore[homeTeam]) {competitorScore[homeTeam] = 1;}
				else {competitorScore[homeTeam]++;}
		} else {
			if (!competitorScore[awayTeam]) {competitorScore[awayTeam] = 1;}
				else {competitorScore[awayTeam]++;}
		}
	} 
	
	let winner = "";
	let highestScore = -Infinity
	for (let team in competitorScore) {
		if (competitorScore[team] > highestScore) {
			highestScore = competitorScore[team]; 
			winner = team;}
	}
 
	return winner;
}
// Do not edit the line below.
exports.tournamentWinner = tournamentWinner;
