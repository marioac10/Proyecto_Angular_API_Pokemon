import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pokemon } from 'src/app/shared/models/pokemon.model';
import { PokemonCreateComponent } from './pages/pokemon-create/pokemon-create.component';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';


const routes: Routes = [
  {path: 'lista', component: PokemonListComponent},
  {path: 'crear', component: PokemonCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
