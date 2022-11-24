<template lang="">
    <div>
        <h1>{{teo.name}}</h1>
        <h1>{{teo.age}}</h1>
        test1:<input type="text" v-model="teo.age"/>
        test2:<input type="number" v-model="teo.name"/>
        <h1>{{s}}</h1>
        <button @click="jix">test</button>
        <button @click="addrse++">test</button>
    </div>
</template>
<script>
import { ref,reactive } from '@vue/reactivity'
import { computed, watch } from '@vue/runtime-core'

export default {
    setup() {
        const name = ""
        const age = "kis"
        const addrse = ref(1)
        const teo = reactive({name,age})
        function jix(){
            console.log(teo)
            teo.name=211    
        }

        // const s = computed(()=>{
        //      return teo.name+teo.age
        // })
        watch([addrse,teo],(newv,olde)=>{
            console.log(newv,olde)
            console.log(ss)
        })

        return {teo,jix,addrse}
    },
}
</script>
<style lang="">
    
</style>