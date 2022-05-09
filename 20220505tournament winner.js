function tournamentWinner(competitions, results) {
  // Write your code here.
	let competitorScore = {};
	let currentBestTeam = '';
	let highestScore = 0;

	for (let i=0; i<competitions.length; i++) {
		let homeTeam = competitions[i][0];
		let awayTeam = competitions[i][1];
		if (!competitorScore[homeTeam]) {
	 	 	competitorScore[homeTeam] = 0;
	 	 } 
		
		if (!competitorScore[awayTeam]) {
	 	 	competitorScore[awayTeam] = 0;
	 	 } 
		

		if (results[i] === 1) {
			// winningTeam = homeTeam;
			competitorScore[homeTeam] += 3;
			if (competitorScore[homeTeam] > highestScore ) {
	 		 currentBestTeam = homeTeam;
			 highestScore = competitorScore[homeTeam];
	 	 }
			 } else {
			// winningTeam = awayTeam;
			competitorScore[awayTeam] += 3;
				 if (competitorScore[awayTeam] > highestScore ) {
	 		 currentBestTeam = awayTeam;
					 highestScore = competitorScore[awayTeam];
	 	 		}
			}
		}  return currentBestTeam;
	} 
 

// Do not edit the line below.
exports.tournamentWinner = tournamentWinner;
