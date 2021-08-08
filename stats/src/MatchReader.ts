import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

//Defining the tuple
type MatchData = [Date, string, string, number, number, MatchResult, string];

interface DataReader {
    read(): void;
    data: string[][];
};

export class MatchReader {

  matches: MatchData[] = [];

  constructor(public reader: DataReader) {};

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): MatchData => {
      //[ strings] --> [ parsed items]
      //has to return an array with 7 items: [date, string, string, number, number, enum string, string ] 
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6]
      ];
    });
  }
};