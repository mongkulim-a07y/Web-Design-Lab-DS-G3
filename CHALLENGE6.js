function challenge6(votes) {
  if (!votes || votes.length === 0) {
    return 'There is not vote yet';
  }

  const counts = { A: 0, B: 0, C: 0 };
  for (const vote of votes) {
    if (Object.prototype.hasOwnProperty.call(counts, vote)) {
      counts[vote]++;
    }
  }

  const maxVotes = Math.max(counts.A, counts.B, counts.C);
  const winners = ['A', 'B', 'C'].filter((candidate) => counts[candidate] === maxVotes);

  if (winners.length === 1) {
    return `${winners[0]} is the winner`;
  }
  if (winners.length === 2) {
    return `${winners[0]} and ${winners[1]} are both winners`;
  }
  return `${winners[0]}, ${winners[1]}, and ${winners[2]} are all winners`;
}

const vote1 = ['A','B','B','A','C','C'];
const vote2 = ['A','B','B','A','C'];
const vote3 = [];
console.log( challenge6(vote1));
console.log( challenge6(vote2));
console.log( challenge6(vote3));