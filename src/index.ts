import { MatchReader } from './MatchReader';
import { MatchResult } from './matchResult';

const reader = new MatchReader('football.csv');
reader.read();

let manchesterUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manchesterUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manchesterUnitedWins++;
  }
}

console.log(`Manchester United has won ${manchesterUnitedWins} times`);
