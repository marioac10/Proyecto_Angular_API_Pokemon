import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { first } from 'rxjs';
import { PokemonService } from 'src/app/core/services/pokemon.service';
import { PokemonPicture } from 'src/app/shared/models/pokemon-picture.model';
import { ResponsePokemon } from 'src/app/shared/models/response.pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent implements OnInit {
  //Inicializamos la variable que contendra el JSON recibido
  response: ResponsePokemon = new ResponsePokemon();
  //picture: PokemonPicture = new PokemonPicture();
  Pokemones:PokemonPicture[]=[];
  picture: any;
  pokemon:any;
  urlImage:any;
  filterData = '';

  modalRef?: BsModalRef;
  page:number = 0;

  constructor(private pokemonService:PokemonService, private modalService:BsModalService ) { }

  ngOnInit(): void {
    this.loadData();
    //this.loadPicture();
  }

  //Mostramos todos los pokemones
  private loadData(){
    console.log("Uno");
    this.pokemonService.getAll().pipe(first()).subscribe(data => {
      if(data !== null){
        this.Pokemones = data;
        // this.response.count = data.count;
        // this.response.next = data.next;
        // this.response.previous = data.previous;
        // this.response.results = data.results;
        //this.response = data;
      }
      //console.log(this.response);
    },error =>{
      console.error(error);
    });
  }

  // loadPicture(id:string){
  //   this.pokemonService.getPicture(id).pipe(first()).subscribe(data=>{
  //     this.picture = data.sprites.other.dream_world.front_default;
  //     console.log(this.picture);
  //   },error=>{
  //     console.log(error);
  //   });
  // }

  // pokemonId(url:string):string{
  //   let cadena:string[] = url.split('/');
  //   const id:string = cadena[6].toString();
  //   console.log("iddelPokemon:"+cadena.length);
  //   return id;
  // }

  showModal(pokemon:any,modalTemplate:TemplateRef<any>){
    //const urlPokemon:string = pokemon.url;
    //console.log("urlpoke:"+urlPokemon);
    //const id:string = this.pokemonId(urlPokemon);
    //const id:string = pokemon.id;
    //this.loadPicture(id);
    //this.pokemon=pokemon;
    //this.urlImage= this.picture;
    this.pokemon = pokemon;
    this.modalRef = this.modalService.show(modalTemplate);
  }

  onShowPokemon(){
    this.page=0;
  }

  nextPage(){
    this.page += 50;
  }

  prevPage(){
    if(this.page > 0){
      this.page -= 50;
    }
  }


  pokemones = [
    {nombre:'unown', id:201},
    {nombre:'wobbuffet', id:202},
    {nombre:'girafarig', id:203},
    {nombre:'pineco', id:204}
  ];

}
