<template>
  <section class="tag-card">
      <div class="top-image">
        <g-image class="t-img" v-if="post.cover_image" :src='post.cover_image' quality="80"/>
      </div>
      <div class="bottom-content">
        <h3 class="title" v-html="post.title" href="post.path"/>
        <p class="description" v-html="post.description"/>
        <PostTags :post="post"/>
         <div class="footer">
            <g-link :to="post.path" class="read-link">Read More ></g-link>
        <p class="date" v-html="post.date"/> 
    </div>
      </div>
    
  </section>
</template>


<script>
import PostTags from '../components/PostTags'
export default {
    components:{
        PostTags
    },
    props: ['post'], 
}
</script>

<style scoped>
.tag-card{
  width: 100%;
  display: flex;
  flex-direction:column;
  flex-wrap: nowrap;
  background-color:white;
  margin-bottom: 30px;
  border-style: outset;
}
.top-image{
    width: 95%;
    height: auto;
    display: flex;
    align-self: center;
    justify-content: center;
    margin-top:2%;
}
.bottom-content{
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color:white;
    align-items: center;
}
.t-img{
    width: 100%;
    height: 50%;
    display: flex;
    object-fit: cover;
    
}
.title{
  display: flex;
  height: 100%;
  margin-top: 10px;
  justify-content: left;
  font-size: 2rem;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-weight: 100;
}
.description{
    max-width:90%;
    display: flex;
    flex-wrap: wrap;
    max-height: 50%;
    font-weight: 400;
    font-family: Arial, Helvetica, sans-serif;
    color:gray;
    margin-bottom: 20px;
}
.footer{
    width: 90%;
    max-height: 20%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    background-color: white;
}
.read-link{
    width: auto;
    display: flex;
    text-decoration :row;
    color: rgb(13, 158, 241);
    font-weight: 500;
    justify-content:left;
    align-items: center;
    text-decoration :none;
}
.read-link:hover:not(.active){
    text-decoration: underline   rgb(13, 158, 241);
    color: black;
    text-underline-position: under;
    text-decoration-thickness: 0.15em;
}

.date{
    width:auto;
    display: flex;
    flex-wrap: wrap;
    font-weight: 200;
    justify-content: center;
    align-self: center;
    color: rgb(32, 31, 31);
    
    
}
</style>
