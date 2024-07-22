<template>
    <div id="all" class="flex flex-col justify-center items-center text-white w-screen h-screen">
        <div class="flex flex-col justify-center items-center w-96 h-96 border border-green-950 rounded-full p-10 ">
            <router-link to="/Pokedex" class="mb-3 font-mono font-bold shadow-2xl rounded-xl p-3 hover:text-green-400" >
                Pokedex</router-link>
            <router-link to="/Money" class="mb-3 font-mono font-bold shadow-2xl rounded-xl p-3 hover:text-green-400" >
                MoneyConverter</router-link>
            <router-link to="/NavalBattle" class="mb-3 font-mono font-bold shadow-2xl rounded-xl p-3 hover:text-green-400" >
                NavalBattle</router-link>
            <router-link to="/ParImpares" class="mb-3 font-mono font-bold shadow-2xl rounded-xl p-3 hover:text-green-400" >
                ParImpares</router-link>
        </div>
    </div>
</template>

<script>
</script>
  
<style scoped>
    #all {
        background: rgb(4,14,6);
        background: radial-gradient(circle, rgba(4,14,6,1) 22%, rgba(11,27,0,1) 49%, rgba(6,15,0,1) 73%);
        }
</style>>
    

  