import fs from 'fs';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

//Defining the tuple
type MatchData = [Date, string, string, number, number, MatchResult, string];

export class CsvFileReader {
  data: MatchData[] = [];

  constructor(public filename: string) {};

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
      encoding: 'utf-8'
      })
      .split('\n')
      .map((row: string): string[] => {
      return row.split(',')
      })
      .map((row: string[]): MatchData => {
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
      })
  }
}