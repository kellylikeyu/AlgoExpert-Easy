function minimumWaitingTime(queries) {
  // Write your code here.
	let sorted_queries = queries.sort((a,b) => a-b);
	let waitTime = 0;
	for (let i = 0; i< sorted_queries.length - 1; i++) {
		waitTime += sorted_queries[i] * (sorted_queries.length - 1 - i)
	}
  return waitTime;
}

// Do not edit the line below.
exports.minimumWaitingTime = minimumWaitingTime;
