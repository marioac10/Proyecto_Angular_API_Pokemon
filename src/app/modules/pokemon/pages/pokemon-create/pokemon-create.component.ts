import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pokemon } from 'src/app/shared/models/pokemon.model';

@Component({
  selector: 'app-pokemon-create',
  templateUrl: './pokemon-create.component.html',
  styleUrls: ['./pokemon-create.component.sass']
})
export class PokemonCreateComponent implements OnInit {

  form!: FormGroup;
  submit = false;

  constructor(private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.createForm();
  }

  public get f(){return this.form.controls}

  private createForm(): void{
    this.form = this.fb.group({
      nombre: ['',[Validators.required]],
      nivel: ['',Validators.required],
      especie: ['',Validators.required]
    });
  }

  public onSubmit(formulario:any){
    console.log(formulario);
    this.submit = true;

    if(this.form.invalid){
      alert("Faltan campos");
      return;
    }
    const model: Pokemon = Object.assign({},this.form.value);
    console.debug(model);

    alert("Enviado");
  }





}
