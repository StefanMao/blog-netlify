<template>
<div class="single-post">
  <Arrowback/>
  <section class="main-content">
    <div class="post-title">
      <h1>{{$page.post.title}}</h1>
      <p class="post-date"> {{ $page.post.date}} | {{$page.post.timeToRead}} min read</p>
    </div>
    <div class="post-content">
      <p class="post-content arictle" v-html="$page.post.content" />
    </div>
  </section>
    
</div>
</template>
<script>
import PostTags from '../components/PostTags'
import Arrowback from '../components/Arrowback'
export default {
  components:{
    PostTags,
    Arrowback
  }
  
}
</script>
<page-query>
query Post ($path: String!) {
   post: post (path: $path) {
    id
    title
    content
    date (format: "D MMMM YYYY")
    timeToRead
    description
    tags{
      id
      title
      path
    }
  }
}
</page-query>

<style>

.single-post{
  display: flex;
  flex-direction: column;
  width:100%;
  margin: 20px;
}
.main-content{
  width:60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin:0px auto;
  align-content: center;
}

.post-title {
  width:100%;
  display: flex;
  flex-direction: column;;
  font-size: 30px;
  line-height: 10px;
  padding: 2em 0;
  font-family: 'Stylish';
  justify-content: center;
  align-items: center;
}
.post-date {
  width:100%;
  display: flex;
  flex-direction: row;
  font-size: 16px;
  font-weight: 400;
  justify-content: center;
}
.post-content {
  width:100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-size: 1rem;
  background-color:whitesmoke;
  margin: 0px auto;
  justify-content: center;
  padding: 10px;
}
</style>