<script setup>

    import { ref } from "vue";

    const x_input = ref()
    const y_input = ref()

    const pares = ref([])
    const impares = ref([])
    const positivos = ref([])
    const negativos = ref([])

    const clickButton = (i) => {

        pares.value = []
        impares.value = []
        positivos.value = []
        negativos.value = []

        if (x_input.value >= y_input.value){
                alert("A deve ser menor que B")
                x_input.value = ""
                y_input.value = "" 
                
            } else {
    
        for( i = x_input.value; i <= y_input.value; i++) {
            console.log(i)
              
            if (i % 2 == 0) {
                pares.value.push(' ' + i) 
            }
            if (i % 2 !== 0) {
                impares.value.push(' ' + i) 
            }
            if (i > 0) {
                positivos.value.push(' ' + i) 
            }
            if (i < 0) {
                negativos.value.push(' ' + i) 
            }
        }        
        x_input.value = ""
        y_input.value = ""
    }
    }
</script>


<template>
    <div id="all" class=" text-white p-20 flex justify-center items-center text-center h-screen">
        <div class="absolute top-16 left-20 text-zinc-800 hover:text-zinc-500">
            <router-link to="/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </router-link> 
            </div>
        <div id="container" class="w-full h-96 max-h-96 bg-zinc-800 shadow-2xl border-4 border-zinc-950 rounded-full ">
            <form @submit.prevent="clickButton" class="mt-10 text-black ">
                <input required min="-5" max="10" v-model="x_input" type="number" class="text-center w-20 mr-10 rounded-full bg-zinc-200">

                <input required min="-5" max="10" v-model="y_input" type="number" class="text-center w-20 mr-16 rounded-full bg-zinc-200">
                
                <button @click="clickButton" class="p-3 text-sm shadow-2xl rounded-full text-zinc-300 bg-zinc-700 hover:bg-zinc-100 hover:text-black">Start</button>
            </form>

            <div class="flex justify-center">

                <div>
                    <ul class="mt-20 text-start">
                        <li class=" border-b-2 w-96"> Pares: {{ String(pares) }} </li>
                        <li class=" border-b-2 w-96"> Impares: {{ String(impares) }} </li>
                        <li class=" border-b-2 w-96"> Positivos: {{ String(positivos) }} </li>
                        <li class=" border-b-2 w-96"> Negativos: {{ String(negativos) }} </li>
                    </ul>
                </div>
            </div>

            <div class=" mt-10 ml-44 w-20 ">
                <button id="btn-arrow" class="text-zinc-500 hover:text-white">
                    <router-link class="" to="/navalbattle">  
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </router-link>
                </button>
            </div>

        </div>
    </div>
</template>





<style scoped>
    #all {
        background: rgb(0,0,0);
        background: linear-gradient(90deg, rgba(0,0,0,1) 24%, rgba(17,16,16,1) 49%, rgba(0,0,0,1) 73%);    }

    #container {
        background: rgb(0,0,0);
        background: linear-gradient(90deg, rgba(1,1,1,1) 24%, rgba(17,16,16,1) 43%, rgba(0,0,0,1) 73%);
    }

</style>