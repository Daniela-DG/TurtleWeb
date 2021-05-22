import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {SugerenciasService} from'../../Services/sugerencias.service'
@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  createCategoryForm: FormGroup
  
  constructor(
    private formbuilder : FormBuilder,
    private sugerenciaService: SugerenciasService 
  ) {
    this.validator(
    )
   }

  ngOnInit(): void {
  }

  validator(){
    console.log("El validador funciona")
    this.createCategoryForm= this.formbuilder.group({
      Nombre:['', Validators.required],
      Email:['', [Validators.required, Validators.email]],
      Sugerencia:['', Validators.required],
      
    })
  }
  createCategory(){
    console.log("El metodo esta funcionando")
    if(this.createCategoryForm.valid){
      this.sugerenciaService.create(this.createCategoryForm.value).subscribe(
        (servicioCreated)=>{
          alert('Informacion enviada')
        },
        (error) =>{
          alert ('Error al enviar ')
        }
      )
      alert ('Se envio la informacion a nuestra base de datos!! Gracias por ayudarnos a mejorar')
    }else{
      alert ('Lo sentimos no se envio la informacion verifica que el correo este correcto y que no tengas ningun campo vacio ')
    }    
  }

}
