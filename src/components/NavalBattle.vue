<script setup>
    import { ref, Text } from "vue";

    const display_x = ref()
    const display_y = ref()

    const quadrante1 = ref("Q1")
    const q1_boolean = ref(false)

    const quadrante2 = ref("Q2")
    const q2_boolean = ref(false)

    const quadrante3 = ref("Q3")
    const q3_boolean = ref(false)

    const quadrante4 = ref("Q4")
    const q4_boolean = ref(false)



    const clickButton = () => {
        let temp_number_x = display_x  
        let temp_number_y = display_y  

        if (temp_number_x.value > 0 && temp_number_y.value > 0) {
            q1_boolean.value = true
        } else {
            q1_boolean.value = false
        }

        if (temp_number_x.value < 0 && temp_number_y.value > 0) {
            q2_boolean.value = true
        } else {
            q2_boolean.value = false
        }

        if (temp_number_x.value < 0 && temp_number_y.value < 0) {
            q3_boolean.value = true
        } else {
            q3_boolean.value = false
        }

        if (temp_number_x.value > 0 && temp_number_y.value < 0) {
            q4_boolean.value = true
        } else {
            q4_boolean.value = false
        }

        // if (temp_number_x.value == 0.0 && temp_number_y.value == 0.0) {
        //     q1_boolean.value = true
        //     q2_boolean.value = true
        //     q3_boolean.value = true
        //     q4_boolean.value = true
        // } else {
        //     q1_boolean.value = false
        //     q2_boolean.value = false
        //     q3_boolean.value = false
        //     q4_boolean.value = false
        // }
    }

</script>

<template>
    <div id="all" class="flex w-full h-screen max-w-7xl justify-center items-center">
        <div class="absolute top-28 left-32 text-zinc-400">
            <router-link to="/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </router-link> 
         </div>
        <div id="container" class="mt-10   text-center w-10/12 shadow-2xl rounded-xl">
            <form @submit.prevent="clickButton"  class="mt-10 mb-10 flex justify-center items-center"> 
                <div class="ml-40 mr-8 ">
                    <input required v-model="display_x" min="-1" max="1" 
                    class="p-3 w-20 bg-zinc-300 text-center rounded-full" type="number" placeholder="X" on-submit="">
                </div>
                <div class="mr-10">
                    <input required v-model="display_y" min="-1" max="1" 
                    class="p-3 w-20  bg-zinc-300 text-center rounded-full" type="number" placeholder="Y">
                </div>
                <div class="ml-10 text-white">
                    <button class="p-3 w-20  bg-zinc-600 hover:bg-white hover:text-zinc-500 text-center rounded-full">Search</button>
                </div>
            </form>

        
            <div class="m-16">
                <div class="grid grid-cols-2 ">
                        <div :class="q2_boolean && 'bg-zinc-950 text-zinc-300'" class="text-zinc-900 transition ease-in-out delay-150 flex justify-center items-center  w-full h-80 border-r-2 border-b-2 border-zinc-700">
                            <p class="  text-9xl   ">
                                {{ quadrante2 }}
                            </p>
                        </div>

                        <div :class="q1_boolean && 'bg-zinc-950 text-zinc-300'" class="text-zinc-900 transition  ease-in-out delay-150 flex justify-center items-center w-full h-80 border-b-2 border-zinc-700 ">
                            <p class="text-9xl ">
                                {{ quadrante1 }}
                            </p>
                        </div>
                      

                </div>

                <div class="grid grid-cols-2">
                        <div :class="q3_boolean && 'bg-zinc-950 text-zinc-300'" class="text-zinc-900 transition ease-in-out delay-150 flex justify-center items-center w-full h-80 border-r-2 border-zinc-700">
                            <p @click="clickButton" class="  text-9xl   ">
                                {{ quadrante3 }}
                            </p>
                        </div>
                      
                        <div :class="q4_boolean && 'bg-zinc-950 text-zinc-300'" class="text-zinc-900  transition ease-in-out delay-150 flex justify-center items-center  w-full h-80">
                            <p class="  text-9xl">
                                {{ quadrante4 }}
                            </p>
                        </div>
                </div>
            </div>
        </div>
    </div>
    <button id="btn-arrow" class="text-zinc-500 hover:text-white">
                    <router-link class="" to="/navalbattle">  
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </router-link>
                </button>
</template>






<style scoped> 
    #all {
        background-color: #111;
    }

    #container {
        background: rgb(5,5,5);
        background: linear-gradient(90deg, rgba(5,5,5,1) 20%, rgba(36,36,38,1) 49%, rgba(1,1,1,1) 87%);
    }

  
</style>

