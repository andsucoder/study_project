<script setup>
import { ref } from 'vue';

    const value_converter = ref()
    const cedulas100 = ref(0)
    const cedulas50 = ref(0)
    const cedulas20 = ref(0)
    const cedulas10 = ref(0)
    const cedulas5 = ref(0)
    const cedulas2 = ref(0)
    const moeda1real = ref(0)
    const moeda50 = ref(0)
    const moeda25 = ref(0)
    const moeda10 = ref(0)
    const moeda5 = ref(0)
    const moeda1 = ref(0)


    const clickButton = ()=> {//Função de impressão
        //Cedulas
        let temp_value = value_converter.value

        cedulas100.value = Math.floor(temp_value / 100)
        temp_value %= 100
        
        cedulas50.value = Math.floor(temp_value / 50)
        temp_value %= 50

        cedulas20.value = Math.floor(temp_value / 20)
        temp_value %= 20

        cedulas10.value = Math.floor(temp_value / 10)
        temp_value %= 10    

        cedulas5.value = Math.floor(temp_value / 5)
        temp_value %= 5          

        cedulas2.value = Math.floor(temp_value / 2)
        temp_value %= 2  

        //1 Real
        moeda1real.value = Math.floor(temp_value)
        temp_value %= 1

        //50 Centavos
        temp_value >= 0.50 ? moeda50.dvalue = 1 : moeda50.value = 0
        temp_value %= 0.50

        //25 Centavos
        temp_value >= 0.25 ? moeda25.value = 1 : moeda25.value = 0
        temp_value %= 0.25

        //10 Centavos
        if (temp_value >= 0.20) {
            moeda10.value = 2
        } else if (temp_value >= 0.10) {
            moeda10.value = 1
        } else {
            moeda10.value = 0
        }
        temp_value %= 0.10

           
        //5 Centavos
        temp_value >= 0.05 ? moeda5.value = 1 : moeda5.value = 0
        temp_value %= 0.05

    }

</script>

<template>
    <div id="all" class="flex-col p-5 w-full max-w-7xl h-screen shadow-2xl">  <!-- Tela interna -->
        <div class="absolute top-36 left-10 text-cyan-700">
            <router-link to="/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </router-link> 
        </div>
        <div class=" mt-32 h-20 max-h-20 min-w-4xl ">  <!-- Area do inpout -->
            <form @submit.prevent="clickButton" class="flex justify-center items-center text-center "> 
                <div class="mr-10 w-full max-w-sm">
                    <input required min="0" max="10000000" step=".010" v-model="value_converter"  class="p-2 text-black rounded-2xl w-full max-w-sm" type="number" placeholder="  Qual o valor á converter?">
                </div>
                <div class=" flex justify-center">
                    <button id="btn_converter" class="p-3 bg-cyan-800 hover:bg-cyan-400 text-sm rounded-full">
                        Converter
                    </button>
                </div>
            </form>
        </div>



        <!-- Panel CEDULAS de 100 50 20 -->
        <div class="min-w-6xl  text-3xl text-cyan-900 grid grid-cols-3 mt-10 text-center justify-center items-center w-screen max-w-full">
             <!-- Col 1 -->
            <div class="flex items-center justify-center ">
                <!-- icone cedula -->
                <div class="mr-7 shadow-2xl">
                    <img class="w-full mr-2  max-w-56" src="../assets/cedula100.png" alt="">
                </div>
                  <!-- frase -->
                <div class="flex justify-center items-center p-8 h-4 w-4 rounded-full bg-white">
                    <p class="">{{ cedulas100 }}</p>
                </div>
            </div>

            <!-- Col 2 -->
            <div class="flex items-center justify-center  ">
                 <!-- icone cedula -->
                 <div class="mr-7 shadow-2xl">
                    <img class="max-w-56" src="../assets/cedula50.jpg" alt="">
                </div>
                
                 <!-- frase -->
                 <div class=" flex justify-center items-center p-8 h-4 w-4 rounded-full bg-white">
                    <p>{{ cedulas50 }}</p>
                </div>     
            </div>

              <!-- Col 3 -->
              <div class="flex items-center justify-center ">
                <!-- icone cedula -->
                <div class="mr-7 shadow-2xl">
                    <img class="w-full mr-2  max-w-56" src="../assets/cedula20.jpg" alt="">
                </div>
                  <!-- frase -->
                <div class="flex justify-center items-center p-8 h-4 w-4 rounded-full bg-white">
                    <p class="">{{ cedulas20 }}</p>
                </div>
            </div>
        </div>

        <!-- Panel CEDULAS de 10 5 2-->
        <div class="text-3xl text-cyan-900 grid grid-cols-3 mt-10 text-center justify-center items-center w-screen max-w-full h-auto max-h-full">
           
            <!-- Col 1 -->
            <div class="flex items-center justify-center  ">
                 <!-- icone cedula -->
                 <div class="mr-7 shadow-2xl">
                    <img class="max-w-56" src="../assets/cedula10.png" alt="">
                </div>
                
                 <!-- frase -->
                 <div class=" flex justify-center items-center p-8 h-4 w-4 rounded-full bg-white">
                    <p>{{ cedulas10 }}</p>
                </div>     
            </div>

            <!-- Col 2 -->
            <div class="flex items-center justify-center ">
                <!-- icone cedula -->
                <div class="mr-7 shadow-2xl">
                    <img class="w-full mr-2  max-w-56" src="../assets/cedula5.jpg" alt="">
                </div>
                  <!-- frase -->
                <div class="flex justify-center items-center p-8 h-4 w-4 rounded-full bg-white">
                    <p class="">{{ cedulas5 }}</p>
                </div>
            </div>

            <!-- Col 3 -->
            <div class="flex items-center justify-center  ">
                 <!-- icone cedula -->
                 <div class="mr-7 shadow-2xl">
                    <img class="max-w-56" src="../assets/cedula2.jpg" alt="">
                </div>
                
                 <!-- frase -->
                 <div class=" flex justify-center items-center p-8 h-4 w-4 rounded-full bg-white">
                    <p>{{ cedulas2 }}</p>
                </div>     
            </div>
        </div>



        <div class="ml-9" >   <!-- Tela das moedas-->
            <!-- Panel MOEDAS  de 1 e 0.50-->
            <div class=" text-3xl text-cyan-900 grid grid-cols-3 mt-10 text-center justify-center items-center w-screen max-w-full h-auto max-h-full">
                <!-- Col 1 -->
                <div class=" flex items-center justify-center ">
                    
                    <div class="shadow-2xl">
                        <img class=" max-w-32" src="../assets/coin1real.png" alt="">
                    </div>
                    
                    <div class="flex justify-center items-center p-7 h-2 w-2 rounded-full bg-white">
                        <p class="">{{ moeda1real }}</p>
                    </div>
                </div>

                <!-- Col 2 -->
                <div class=" flex items-center justify-center  ">
                    <div class="shadow-2xl">
                        <img class="mr-3 max-w-24" src="../assets/coin50.png" alt="">
                    </div>
                    
                    <div class="flex justify-center items-center p-7 h-2 w-2 rounded-full bg-white">
                        <p class="">{{ moeda50 }}</p>
                    </div>
                </div>

                <!-- Col 3 -->
                <div class="flex items-center justify-center ">
                    <div class="shadow-2xl">
                        <img class="mr-5 max-w-24" src="../assets/coin25.png" alt="">
                    </div>
                    
                    <div class="flex justify-center items-center p-7 h-2 w-2 rounded-full bg-white">
                        <p class="">{{ moeda25 }}</p>
                    </div>
                </div>
            </div>    

            <div class="mb-32 text-3xl text-cyan-900 grid grid-cols-3 mt-10 text-center justify-center items-center w-screen max-w-full h-auto max-h-full">
                <!-- Col 1 -->
                <div class=" flex items-center justify-center  ">
                    <div class="shadow-2xl">
                        <img class="mr-3 max-w-24" src="../assets/coin10.png" alt="">
                    </div>
                    
                    <div class="flex justify-center items-center p-7 h-2 w-2 rounded-full bg-white">
                        <p class="">{{ moeda10 }}</p>
                    </div>
                </div>

                <!-- Col 2 -->
                <div class="flex items-center justify-center ">
                    <div class="shadow-2xl">
                        <img class="mr-3 max-w-24" src="../assets/coin5.png" alt="">
                    </div>
                    
                    <div class="flex justify-center items-center p-7 h-2 w-2 rounded-full bg-white">
                        <p class="">{{ moeda5 }}</p>
                    </div>
                </div>

                <!-- Col 3 -->
                <div class=" flex items-center justify-center  ">
                    <div class="shadow-2xl">
                        <img class="mr-3 max-w-24" src="../assets/coin1.png" alt="">
                    </div>
                    
                    <div class="flex justify-center items-center p-7 h-2 w-2 rounded-full bg-white">
                        <p class="">{{ moeda1 }}</p>
                    </div>
                </div>
            </div>
       
        </div>
       
    </div>
</template>


<style scoped>
    #all {
        background: rgb(15,16,37);
        background: linear-gradient(90deg, rgba(15,16,37,1) 38%, rgba(32,43,78,1) 82%, rgba(0,8,29,1) 100%);
}


</style>