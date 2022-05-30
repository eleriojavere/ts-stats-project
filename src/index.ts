import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './matchResult';

const reader = new CsvFileReader('football.csv');
reader.read();
const dateOfFirstMatch = reader.data[0][0];
console.log(dateOfFirstMatch);

let manchesterUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manchesterUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manchesterUnitedWins++;
  }
}
