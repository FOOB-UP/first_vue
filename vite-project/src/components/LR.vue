<template>
    <h3>
       nihao
        <img src=""/>
    </h3>
</template>

<script>
import axios from "axios"
export default {

    data() {
        return {
            list : []
        }
    },
    methods: function(){
        this.$axios.get("/user")
        .then(list => console.log(response.data))
    }
}

</script>