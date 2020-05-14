import { Router } from '@angular/router';
import { AuthentificationService } from './../authentification.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(
    private authentificationService : AuthentificationService,
    private router : Router
    ) { }

  ngOnInit(): void {

  }

  Login(credentials ){
       this.authentificationService.login(credentials).subscribe(
      (response) => {
         const token = response.id;
        const link = ['cv'];
        localStorage.setItem('token',token);
        this.router.navigate(link);
      },
      (error)=>
      {console.log(error);}
    )

  }

}
