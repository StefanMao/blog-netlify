<template>
  <section class="post-list">
    <div class="pl-left-content">
        <g-image class="img-circle" v-if="post.cover_image" :src='post.cover_image' quality="50"/>
    </div>
    <div class="pl-right-content">
    <h3 class="title" v-html="post.title" href='post.path'/>
        <section class="middle-content">
        <p class="middle-content date" v-html="post.date"/> 
        <p class="middle-content comment">5 Comment</p>
        </section>
    <p class="description" v-html="post.description"/>
    <PostTags :post="post"/>
    <g-link :to="post.path" class="read-link">Read More ></g-link>
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
};
</script>

<style>
.post-list{
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  background-color:white;
  margin-bottom: 30px;
}
.pl-left-content{
  width: auto;
  display: flex;
  background-color: white;
  justify-content: center;
  margin: 0px 20px;
}
.pl-right-content{
  width:100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color:white;
  margin: 0px 20px;
}
.img-circle{
  display: flex;
  width:150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-top:20px;
}
.title{
  display: flex;
  margin-top: 10px;
  justify-content: left;
  font-size: 2rem;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-weight: 100;
}
.middle-content{
  display: flex;
  flex-direction: row;
  margin-top:0px;
  padding-right: 30px;
}

.date, .comment{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  color:rgb(201, 197, 197);
}
.description{
  display: flex;
  flex-wrap: wrap;
  max-height: 40%;
  margin: 5px 0px;
  font-weight: 400;
  font-family: Arial, Helvetica, sans-serif;
  color:gray;
  margin: 10px 0px;
}
.visuallyhidden {
  position: absolute !important;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;

  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
}
.visuallyhidden:focus {
  display: inline-block;
  padding: 15px 23px 14px;
  width: auto;
  height: auto;
  clip: auto;
  color: #000000;
  background-color: #ffffff;
  clip-path: unset;
}
.read-link {
    display: flex;
    align-content: flex-start;
    text-decoration :none;
    width:100%;
    padding: 15px 0px;
    color: rgb(13, 158, 241);
    font-weight: 500;
}
@media screen and (max-width: 1200px) {
  .post-list{
  width: 100%;
  display: flex;
  flex-direction: columns;;
  flex-wrap: wrap;
  background-color:white;
  margin-bottom: 30px;
  justify-content: center;

  }
  .pl-left-content{
  width: 100%;
  display: flex;
  background-color: white;
  justify-content: center;
  }
  .title{
  display: flex;
  margin-top: 10px;
  justify-content: center;
  font-size: 8vw;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-weight: 100;
}
 

}

</style>