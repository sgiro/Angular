import { Observable } from 'rxjs';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Personne } from './../Model/Personne';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CvService {

 private  Personnes : Personne[];
 link ='http://localhost:3000/api/personnes';

  constructor( private http: HttpClient) {}


  getPersonne(): Observable<Personne[]>{
    return this.http.get<Personne[]>(this.link);
  }
  getPersonneById(id: number) : Observable<Personne>{
  return this.http.get<Personne>(this.link + `/${id}`)
  }
  AddPersonne(personne: Personne) : Observable<Personne>{
   return this.http.post<Personne>(this.link,personne);
  }
  deletePersonne(id) : Observable<any> {
  return this.http.delete(this.link + `/${id}`);
}
  findbyName(name) :Observable<Personne[]>{
    const filter = `{"where":{"name":{"like":"%${name}%"}}}`
    const params  = new HttpParams().set('filter',filter)
    return this.http.get<Personne[]>(this.link,{params})
  }
 updatePersonne(Personne : Personne ){
   return  this.http.put(this.link,Personne);

 }
}
