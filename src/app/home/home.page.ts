import { Component } from '@angular/core';
import { APIServiceService } from './../Services/apiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private api: APIServiceService) {}



  

  // Primera tarjeta
  numberValue: number = 0;
  cardTitle: string = 'Pokemon Card';
  pokemonImage: string = '';

  cardTitlet: string = 'Item Card';
  itemImage: string = '';

  // Segunda tarjeta
  searchna: string = '';
  searchCardTitle: string = 'Search Result';
  searchPokemonImage: string = '';

  // Tercera tarjeta
  searchitt: string = '';
  searchCardTitlet: string = 'Search itemt';
  searchitemtImage: string = '';

  // Cuarta tarjeta
  searchitn: string = '';
  searchCardTitlen: string = 'Search itemn';
  searchitemnImage: string = '';

  // Función para incrementar el número en la primera tarjeta
  increment() {
    if (this.numberValue < 100) {
      this.numberValue += 1;
      // Actualiza el número de ítem
      this.numberValue = this.numberValue;
      // Si incrementas o decrementas, resetea la búsqueda por texto
      this.resetSearch();
    }
  }

  // Función para decrementar el número en la primera tarjeta
  decrement() {
    if (this.numberValue > 0) {
      this.numberValue -= 1;
      // Si incrementas o decrementas, resetea la búsqueda por texto
      this.resetSearch();
    }
  }

  // Función para buscar en la segunda tarjeta
  search() {
    // Si hay un valor en searchna, busca por ID.
    if (this.searchna) {
      this.getPokemonDataByName(this.searchna, true);
    } else {
      // Si no hay valor en searchna, busca por el número actual.
      this.getPokemonDataByID(this.numberValue, false);
    }
  }

  // Función para obtener datos de un Pokémon por nombre
  getPokemonDataByName(name: string, isSearchCard: boolean) {
    try {
      // Convierte el nombre del Pokémon a minúsculas
      const lowercaseName = name.toLowerCase();
  
      // Llama al método getPokemonName del servicio y se suscribe al observable.
      this.api.getPokemonName(lowercaseName).subscribe((response => {
        // Asigna el nombre del Pokémon a la variable local 'pokemon'.
        const pokemon = response.name;
        // Imprime el nombre del Pokémon en la consola.
        console.log(pokemon);
  
        // Actualiza las variables de la tarjeta correspondiente con el nombre y la imagen del Pokémon.
        if (isSearchCard) {
          this.searchCardTitle = pokemon;
          this.searchPokemonImage = response.sprites.front_default;
        } else {
          this.cardTitle = pokemon;
          this.pokemonImage = response.sprites.front_default;
        }
      }));
    } catch (error) {
      // Captura cualquier error que pueda ocurrir durante la suscripción y lo imprime en la consola.
      console.log(error);
    }
  }
  

  // Función para obtener datos de un Pokémon por ID
  getPokemonDataByID(id: number, isSearchCard: boolean) {
    try {
      // Llama al método getPokemon del servicio y se suscribe al observable.
      this.api.getPokemonID(id).subscribe((response => {
        // Asigna el nombre del Pokémon a la variable local 'pokemon'.
        const pokemon = response.name;
        // Imprime el nombre del Pokémon en la consola.
        console.log(pokemon);

        // Actualiza las variables de la tarjeta correspondiente con el nombre y la imagen del Pokémon.
        if (isSearchCard) {
          this.searchCardTitle = pokemon;
          this.searchPokemonImage = response.sprites.front_default;
        } else {
          this.cardTitle = pokemon;
          this.pokemonImage = response.sprites.front_default;
        }
      }));
    } catch (error) {
      // Captura cualquier error que pueda ocurrir durante la suscripción y lo imprime en la consola.
      console.log(error);
    }
  }

  // Función para resetear la búsqueda por texto
  resetSearch() {
    this.searchna = '';
    this.searchCardTitle = 'Search Result';
    this.searchPokemonImage = '';
  }

  // Función para manejar el evento de clic en el icono de búsqueda
  searchByIcon() {
    this.search();
  }


//ITEM


// Función para buscar en la tercera tarjeta
// En la función searcht
searcht() {
  // Si hay un valor en searchitt, busca el ítem.
  if (this.searchitt) {
    this.getItemDataByNamet(this.searchitt, true);
  } else {
    // Si no hay valor en searchitt, busca por el número actual.
    this.getPokemonDataByItemID(this.searchitn, false);
  }
}


getPokemonDataByItemID(name: string, isSearchCard: boolean) {
  try {
    const lowercaseItemn = name.toLowerCase();

    this.api.getPokemonitemn(lowercaseItemn).subscribe(
      (response) => {
        const itemn = response.name;
        const imageUrl = response.sprites?.default || '';

        if (isSearchCard) {
          this.searchCardTitlet = itemn;
          this.searchitemnImage = imageUrl;
        } else {
          this.searchCardTitlen = itemn;
          this.searchitemnImage = imageUrl;
        }
      },
      (error) => {
        console.error(error);
      }
    );
  } catch (error) {
    console.error(error);
  }
}
  
  // Función para obtener datos de un ítem por nombre en la tercera tarjeta
  getItemDataByNamet(name: string, isSearchCard: boolean) {
    try {
      const lowercaseItemt = name.toLowerCase();
  
      this.api.getPokemonitemt(lowercaseItemt).subscribe(
        (response) => {
          const itemt = response.name;
          const imageUrl = response.sprites?.default || '';
  
          if (isSearchCard) {
            this.searchCardTitlet = itemt;
            this.searchitemtImage = imageUrl;
          } else {
            this.cardTitlet = itemt;
            this.itemImage = imageUrl;
          }
        },
        (error) => {
          console.error(error);
        }
      );
    } catch (error) {
      console.error(error);
    }
  }

  // Función para resetear la búsqueda por texto en la tercera tarjeta
  resetSearchT() {
    this.searchitt = '';
    this.searchCardTitlet = 'Search itemt';
    this.searchitemtImage = '';
  }
}