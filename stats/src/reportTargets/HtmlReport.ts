import { OutputTarget } from '../Summary';
import fs from 'fs';

export class HtmlReport implements OutputTarget {
  print(report: string):void {
    const html = `
      <div>
        <hi>Analysis Output</h1>
        <div>${report}</div>
      </div>
    `;

    fs.writeFileSync('report.html', html);
  }
}