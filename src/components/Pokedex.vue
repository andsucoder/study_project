<script setup>
  import { computed, ref, onMounted } from "vue";
  import { loadRouteLocation, useRouter } from "vue-router";
  import PokedexDisplay from "./PokedexDisplay.vue";

  const router = useRouter()
  const pokemons = ref([])
  const text = ref("")

    fetch(`https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`)
    .then((res) => res.json())
    .then((data) => {
        pokemons.value = data.results
    })

    const getPokemonId = (item) => {
        return pokemons.value.findIndex((p) => p.name ===item) + 1;
    };

    const clickButton = () => {
      location.reload()
    }

    const filteredPokemon = computed(() => {
        if(!text.value){
            return []
        }
        return pokemons.value.filter((pokemon) =>
            pokemon.name.includes(text.value)
        )
    });
</script>
    
<template>
  <div class="pokedex about">
    <div class="absolute top-52 left-5 text-yellow-400">
        <router-link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
              <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </router-link> 
     </div>
    <div class="bg-red-600 flex h-40 min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="">
        <img class="w-44 absolute left-6 top-12" src="../assets/pokemon-logo.png" alt="">
      </div>
      
      <div class="w-full max-w-md space-y-8">
        <form class="mt-8 space-y-6 absolute top-3 left-80 right-80" action="#" method="POST" >
          <input type="hidden" name="remember" value="true" />
          <div class="-space-y-px rounded-md shadow-sm">
            <div>
               <input id="pokemon-name" v-model="text" class="relative block w-full appearance-none rounded-md  border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Quem é esse Pokémon?" />
            </div>
          </div>
  
          <div @click="clickButton" class="items-center z-50">
            <div class="flex flex-wrap ml-4 text-2xl text-yellow-300   z-50"
            v-for="(pokemon, idx) in filteredPokemon"
            :key="idx">
              <router-link class="z-50 bg-zinc-900 " :to="`/pokedexdisplay/${getPokemonId(pokemon.name)}`">
                  {{ pokemon.name }}
              </router-link>
            </div>
          </div>
        </form>
      </div>
      
    </div>
    <div class=" max-h-screen bg-red-600 flex justify-center item-center">
        <div class=" mb-20 flex justify-center ml-44 mr-44 w-96 absolute top-48">
          <img class="" src="@/assets/bg-pokedex.jpg" alt="">
        </div>

        <div class="flex justify-center items-center absolute  bottom-56  h-96 max-h-72 w-96">
          <PokedexDisplay />
        </div>

    </div>
  </div>
    
</template>




<style >
  
</style>