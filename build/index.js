"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const CsvFileReader_1 = require("./CsvFileReader");
const Summary_1 = require("./Summary");
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
const ConsoleReport_1 = require("./ReportTargets.ts/ConsoleReport");
const HtmlReport_1 = require("./ReportTargets.ts/HtmlReport");
// Create an object that satisfies the DataReader interface
const csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
// Create an instance of MatchReader and pass in something that satisfies the DataReader interface
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
const winsAnalysis = new WinsAnalysis_1.WinsAnalyzis('Manchester United');
const consoleReport = new ConsoleReport_1.ConsoleReport();
const summary = new Summary_1.Summary(winsAnalysis, new HtmlReport_1.HtmlReport());
summary.buildAndPrintReport(matchReader.matches);
