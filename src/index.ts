import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { Summary } from './Summary';
import { WinsAnalyzis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './ReportTargets.ts/ConsoleReport';
import { HtmlReport } from './ReportTargets.ts/HtmlReport';

// Create an object that satisfies the DataReader interface
const csvFileReader = new CsvFileReader('football.csv');

// Create an instance of MatchReader and pass in something that satisfies the DataReader interface
const matchReader = new MatchReader(csvFileReader);

matchReader.load();
const winsAnalysis = new WinsAnalyzis('Manchester United');
const consoleReport = new ConsoleReport();

const summary = new Summary(winsAnalysis, new HtmlReport());
summary.buildAndPrintReport(matchReader.matches);

Summary.winsAnalysisWithHtmlReport('manu');
