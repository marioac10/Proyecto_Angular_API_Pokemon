import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonFilter'
})
export class PokemonPipe implements PipeTransform {

  transform(value?: Array<any>, page:number = 0, search?:string): any {
    console.log(search);
    //console.log('value: '+value);
    //let val = value;
    //console.log("valueee:"+value);
    if(search !== undefined && search.trim().length === 0)
      //val = value?.filter(x => x.name.includes(query));
      return value?.slice(page,page+50);
      //value = value?.filter(x => x.name.includes(search?.toLocaleLowerCase()));
    
    
    const filterPokemones = value?.filter(x => x.name.includes(search?.toLocaleLowerCase()));
    
    return filterPokemones?.slice(page,page+50);
  }

  // transform(value?: Array<any>, query?: string): any {
  //   console.log('value: '+value);
  //   let val = value;
  //   console.log("valueee:"+value);
   
  //   if(query !== undefined && query.trim().length > 0){
  //     val = value?.filter(x => x.name.includes(query));
      
  //     value = value?.filter(x => x.name.includes(query.toLocaleLowerCase()));
  //     console.log(value);
  //   }
  //   return value;
  // }

}
