"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
const ConsoleReport_1 = require("./ReportTargets.ts/ConsoleReport");
// Create an object that satisfies the DataReader interface
// const csvFileReader = new CsvFileReader('football.csv');
// Create an instance of MatchReader and pass in something that satisfies the DataReader interface
// const matchReader = new MatchReader(csvFileReader);
const matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
matchReader.load();
const winsAnalysis = new WinsAnalysis_1.WinsAnalyzis('Manchester United');
const consoleReport = new ConsoleReport_1.ConsoleReport();
// const summary = new Summary(winsAnalysis, new HtmlReport());
const summary = Summary_1.Summary.winsAnalysisWithHtmlReport('manu');
summary.buildAndPrintReport(matchReader.matches);
