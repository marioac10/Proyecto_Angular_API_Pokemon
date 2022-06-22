import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';
import { PokemonPipe } from './pages/pokemon-list/pokemon.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PokemonCreateComponent } from './pages/pokemon-create/pokemon-create.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonPipe,
    PokemonCreateComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ]
})
export class PokemonModule { }
