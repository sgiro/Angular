import { Personne } from './../Model/Personne';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  PersonnesEmbauchees : Personne[]
  constructor() {
    this.PersonnesEmbauchees=[]
  }


getEmbauchees() : Personne[]{
  return this.PersonnesEmbauchees;
}

EmbaucherPersonne(personne : Personne) : void {

    const index = this.PersonnesEmbauchees.indexOf(personne);
    if(index<0){
      this.PersonnesEmbauchees.push(personne);
  }else
      {
       alert(`${personne.name} est déjà selectionnée`)
      }
}

DebaucherPersonne(personne) : void{
  const index = this.PersonnesEmbauchees.indexOf(personne);
 if(index<=0){
    this.PersonnesEmbauchees.splice(index,1);
  }
}
}
