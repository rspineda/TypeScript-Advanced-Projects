import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";
import { CsvFileReader } from './CsvFileReader';

//Former approach:
// const reader = new MatchReader('football.csv');
// reader.read();

//New approach:
//Step1. create an object that satisfies the 'DataReader' interface
const csvFilerReader = new CsvFileReader('football.csv');

//Step2. create an instance of MatchReader and pass in something satisfaying the 'DataReader' interface
const matchReader = new MatchReader(csvFilerReader);
matchReader.load();


let manUnitedWins = 0;

for (let match of matchReader.matches) {
  if(match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);