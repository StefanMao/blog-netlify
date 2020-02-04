<template>
  <section class="newest-post">
      <div class="newest-post left-content">
        <g-image class="img-square" v-if="eachnewpost.cover_image" :src="eachnewpost.cover_image" quality="30"/>
      </div>
      <div class ="newest-post right-content">
          <g-link class="n-title" :to="eachnewpost.path">{{eachnewpost.title}}</g-link>
          <p class="n-date" v-html="eachnewpost.date"/>
      </div>
    
  </section>
</template>
<script>
export default {
    props:['eachnewpost'],
}
</script>
<style scoped>
.newest-post{
    width: 100%;
    display: flex;
    flex-direction: row;
    padding:0px;
    margin: 3px;
    
}
.left-content{
    width: auto;
    background-color:rgba(100, 98, 98, 0.041);
}
.right-content{
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    margin: 0px;
    padding:0px;
    justify-content: center;
    align-items: center;
}
.img-square{
  width:80px;
  height:80px;
  object-fit:cover;
  margin: 0px auto;
}
.n-title{
    height: 100%;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font: 100;
    font-size: 1.2rem;
    text-decoration-line: none;
    color: black;
    padding:1%;
}
.n-date{
    height: 100%;
    color:rgb(122, 121, 121);
     font-size: 0.8rem;
}
</style>