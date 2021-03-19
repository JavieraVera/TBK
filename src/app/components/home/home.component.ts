import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor() { }

    miFormulario = new FormGroup({
      Nombre : new FormControl('',[Validators.required, Validators.maxLength(20), Validators.minLength(3)]),
      Apellido : new FormControl('',[Validators.required, Validators.maxLength(20), Validators.minLength(3)]),
      Telefono : new FormControl('',[Validators.required, Validators.minLength(9), Validators.maxLength(11)]),
      Email : new FormControl('',[Validators.email,Validators.required]),
      Coment : new FormControl('',[Validators.maxLength(300)])

    });

  ngOnInit(): void {
  }

  saveData(){
      console.log(this.miFormulario);
  }

}
