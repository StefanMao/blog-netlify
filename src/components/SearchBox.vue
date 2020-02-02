<template>
  <div class="search-box">
      <input type="text" id="search" placeholder="Search..." v-model.trim="search_text" :change="PassTexttoParent"/>
  </div>
</template>
<script>
export default {
    data() {
        return{
            search_text:''
        }
    },
    computed: {
        PassTexttoParent(){
            this.$emit('update',this.search_text)
        }
    }
}
</script>

<style>

.search-box{
    display: flex;
    height:50px;
    margin: 0px auto;
}
.search-box input#search{
    font-size: 15pt;
    margin: 0px auto;
  
}
</style>