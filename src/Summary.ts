import { Console } from 'console';
import { MatchData } from './MatchData';
import { WinsAnalyzis } from './analyzers/WinsAnalysis';
import { HtmlReport } from './ReportTargets.ts/HtmlReport';
export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static winsAnalysisWithHtmlReport(teamName: string): Summary {
    return new Summary(new WinsAnalyzis(teamName), new HtmlReport());
  }
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}
  buildAndPrintReport(matches: MatchData[]): void {
    const report = this.analyzer.run(matches);
    this.outputTarget.print(report);
  }
}
