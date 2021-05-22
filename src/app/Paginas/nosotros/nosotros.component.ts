import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  createCategoryForm: FormGroup
  
  constructor(
    private formbuilder : FormBuilder
  ) {
    this.validator(
    )
   }

  ngOnInit(): void {
  }

  validator(){
    console.log("El validador funciona")
    this.createCategoryForm= this.formbuilder.group({
      name:['', Validators.required],
      description:['', [Validators.required, Validators.email]],
     // text:['', Validators.required],
      
    })
  }
  createCategory(){
    console.log("El metodo esta funcionando")
    if(this.createCategoryForm.valid){
      alert ('Se envio la informacion a nuestra base de datos!! Gracias por ayudarnos a mejorar')
    }else{
      alert ('Lo sentimos no se envio la informacion verifica que el correo este correcto y que no tengas ningun campo vacio ')
    }    
  }

}
