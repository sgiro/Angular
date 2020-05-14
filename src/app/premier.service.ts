import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PremierService {

  dataS = [
    'data1','data2','data3','data4'
  ]
  constructor() { }

  logger(data){
    console.log(this.dataS);
    console.log(data);

  }
  addData(data){

   this.dataS.push(data)
  }
}
