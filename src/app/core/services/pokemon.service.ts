import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 
import { map, Observable } from 'rxjs';
import { ResponsePokemon } from 'src/app/shared/models/response.pokemon.model';
import { Data } from '@angular/router';
import { PokemonPicture } from 'src/app/shared/models/pokemon-picture.model';
import { Pokemon } from 'src/app/shared/models/pokemon.model';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {
  _url:string = "pokemon";

  constructor(private http: HttpClient) { }

  getAll():Observable<PokemonPicture[]>{
    //const url = `${this._url}?limit=100&offset=200`;
    const url = `${this._url}?limit=500`;
    return this.http.get<ResponsePokemon>(url).pipe(map(res => this.transformPokemon(res)));
  }

  private transformPokemon(response: ResponsePokemon):PokemonPicture[]{
    const pokemonList:any = response.results?.map( pokemon =>{
      const pokemonUrl:any = pokemon.url?.split('/'); 
      const id:string = pokemonUrl[6];
      const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
      
      return {
        id:id,
        name: pokemon.name,
        picture: image
      };
    });
    console.log(pokemonList);
    return pokemonList;
  }

  getPicture<Data>(id:string):Observable<any>{
    const url = `${this._url}/${id}`;
    return this.http.get<any>(url);
  }



}
