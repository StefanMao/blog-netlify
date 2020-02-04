<template>
  <section class="newest-post">
      <div class="newest-post top-content">
          <g-image class="img-square" v-if="eachnewpost.cover_image" :src="eachnewpost.cover_image" quality="30"/>
      </div>
      <div class ="newest-post down-content">
          <div class="title">
              <g-link class="n-title" :to="eachnewpost.path">{{eachnewpost.title}}</g-link>
          </div>
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
    max-width: 350px;
    min-width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    margin:2%;
}
.top-content{
    width: 100%;
}
.down-content{
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    border-bottom:2px solid gray;
    border-top:2px solid gray;
    margin:1%;
}
.img-square{
  width:95%;
  height:200px;
  object-fit:cover;
  margin: 0px auto;
}
.title{
    width: 100%;
    display: flex;
    justify-content: center;

}
.n-title{
    height: 100%;
    min-height: 100%;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font: 100;
    font-size: 1.3rem;
    text-decoration-line: none;
    color: black;
    padding:1%;
    margin-top:1%;
}
.n-date{
    height: 100%;
    color:rgb(122, 121, 121);
     font-size: 0.8rem;
}
</style>