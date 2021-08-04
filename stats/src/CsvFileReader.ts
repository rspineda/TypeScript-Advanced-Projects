import fs from 'fs';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

export class CsvFileReader {
  data: string[][] = [];

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
      .map((row: string[]): any => {
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