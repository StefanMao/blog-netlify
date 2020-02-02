
<template>
  <Fixedsidebar>
    <div class="content">
      <section class ="left-content">
        <PostList v-for="edge in filteredData" :key="edge.node.id" :post="edge.node" />
      </section>
      <section class="right-content">
          <div class="r-item searchbox">
             <SearchBox @update="selfsearchupdate"></SearchBox>
          </div>
          <div class ="r-item category">
            <h3 class="r-item c-title">Categories</h3>
            <div class ="r-item">
              <g-link class="c-text" v-for="tag in $page.tags.edges" :key="tag.node.id" :to="tag.node.path">
              <p class="c-text row-title">{{tag.node.title}}</p>
   		        </g-link>
            </div>
          </div>
          <div class ="r-item ariticle">
            <h3 class ="r-item c-title">Newest Ariticle</h3>
            <NewestCard v-for="eachnew in $page.newpost.edges" :key="eachnew.node.id" :eachnewpost="eachnew.node"/>
          </div>
      </section>
    </div>

  </Fixedsidebar>
</template>




<script>
import Fixedsidebar from '../layouts/Fixedsidebar'
import PostList from '@/components/PostList'
import SearchBox from '@/components/SearchBox'
import NewestCard from '@/components/NewestCard'


export default {
    metaInfo: {
      title: "Home-Page"
    },
    components:{
        PostList,
        Fixedsidebar,
        SearchBox,
        NewestCard
    },
    data () {
    return {
      search: ''
    }
  },
  computed: {
    filteredData () {
      return this.$page.posts.edges.filter(edge => {
        const lowercase_title = edge.node.title.toLowerCase()
        return lowercase_title.indexOf(this.search.toLowerCase()) >= 0
        //console.log(lowercase_title)
        //console.log(lowercase_title.indexOf(this.search.toLowerCase()))
        //console.log(edge)
      })
    }
  },
  methods:{
    selfsearchupdate(val){
      this.search = val
    }
  } 
}
</script>

<page-query>
query {
  metadata {
    siteName
  }
  posts: allPost {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        description
        cover_image (width: 770, height: 380, blur: 10)
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
  tags:allTag{
    edges{
      node
      {
        id
        title
        path
      }
    }
  }
  newpost:allPost(sortBy:"date" ,order:DESC ,limit:3){
    edges{
      node{
        id
        title
        date(format: "D. MMMM YYYY")
        cover_image (width: 770, height: 380, blur: 10)
        path
      }
    }
  }
}
</page-query>

<style>
.content{
  display: flex;
  flex-direction:row;
  width:100%;
}
.left-content{
  display: flex;
  flex-direction: column;
  width:100%;
  background-color:white;
  margin-left: 70px;
}
.right-content{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding:50px;
  width:50%;
  background-color: rgba(100, 98, 98, 0.041);
}
.r-item{
  width:100%;
  margin: 10px;
  color: black;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.c-title{
  font-size: 1.5rem;
  color:black;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: 100;
  justify-content: flex-start;
  margin-top:15%;
  
}
.c-text{
  width:100%;
  font: 1rem;
  color:black;
  border-bottom-style: solid;
  border-color:gray;
  border-width: thin;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-decoration: none;
  margin: 0px;
}
.row-title{
  width: 100%;
  font: 0.8rem;
  padding:10px;

}
@media screen and (max-width: 1200px) {
  .content{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width:100%;
    justify-content: center;
    align-items: center;
  }
  .left-content{
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-self: center;
    margin-left: 10px;
  }
  .right-content{
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    width:100%;
    background-color: rgba(100, 98, 98, 0.041);

  }
}
</style>