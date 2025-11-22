import {promises as fs} from "node:fs";
import path from "node:path";

const DATA_ROOT=path.join(process.cwd(),"data","private");

export type CsvRow=Record<string,string>;

const parseLine=(line:string,headers:string[]):CsvRow=>{
  const cells=line.split(",").map((cell)=>cell.trim());
  return headers.reduce((row,C,i)=>{
    row[C]=cells[i]??"";
    return row;
  },{} as CsvRow);
};

export const readCsv=async (filename:string):Promise<CsvRow[]>=>{
  const filePath=path.join(DATA_ROOT,filename);
  const contents=await fs.readFile(filePath,"utf-8");
  const [headerLine,...lines]=contents.split(/\r?\n/).filter((line)=>line.length);
  const headers=headerLine.split(",").map((header)=>header.trim());
  return lines.map((line)=>parseLine(line,headers));
};
