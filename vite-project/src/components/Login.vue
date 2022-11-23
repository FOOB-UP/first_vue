<template>
  {{count}}
        <button type="primary" @click="increment({comts:1})">Submit</button>
        <button type="primary" @click="increments()">Submits</button>
        
        <li v-for="todo in todsx" :key="todo.id">{{todo.text}}</li>
  </template>
<script>
import {mapMutations, mapState} from 'vuex'
import {mapGetters} from 'vuex'
 export default{
    data() {
        return {};
    },
    computed: {
      ...mapState([ 'count','todos' ]),
      ...mapGetters({
        todsx : 'gettodo'
      }),

    },
    methods: {
      ...mapMutations([
        "increment",
        "increments"
    ]),
    action(){
       store.dispatch("increment")

    }
}
}
</script>