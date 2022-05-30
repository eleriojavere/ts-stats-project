"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const matchResult_1 = require("./matchResult");
const reader = new MatchReader_1.MatchReader('football.csv');
reader.read();
let manchesterUnitedWins = 0;
for (let match of reader.data) {
    if (match[1] === 'Man United' && match[5] === matchResult_1.MatchResult.HomeWin) {
        manchesterUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === matchResult_1.MatchResult.AwayWin) {
        manchesterUnitedWins++;
    }
}
console.log(`Manchester United has won ${manchesterUnitedWins} times`);
