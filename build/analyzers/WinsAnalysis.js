"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalyzis = void 0;
const matchResult_1 = require("../matchResult");
class WinsAnalyzis {
    constructor(teamName) {
        this.teamName = teamName;
    }
    run(matches) {
        let wins = 0;
        for (let match of matches) {
            if (match[1] === 'Man United' && match[5] === matchResult_1.MatchResult.HomeWin) {
                wins++;
            }
            else if (match[2] === 'Man United' && match[5] === matchResult_1.MatchResult.AwayWin) {
                wins++;
            }
        }
        return `Team ${this.teamName} won ${wins} games`;
    }
}
exports.WinsAnalyzis = WinsAnalyzis;
