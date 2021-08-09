import { MatchReader } from "./MatchReader";
import { CsvFileReader } from './CsvFileReader';
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";


//Step1. create an object that satisfies the 'DataReader' interface
const csvFilerReader = new CsvFileReader('football.csv');

//Step2. create an instance of MatchReader and pass in something satisfaying the 'DataReader' interface
const matchReader = new MatchReader(csvFilerReader);
matchReader.load();

const summary = new Summary(new WinsAnalysis('Man United'), new ConsoleReport());

summary.buildAndPrintReport(matchReader.matches);