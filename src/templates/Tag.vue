<template>
  <div class ="tag-content">
    <div class="arrow-back">
      <Arrowback/>
    </div>
     <h1 class="tag-title">
      # {{ $page.tag.title }}
    </h1>

    <div class="tag-posts">
      <TagCard v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id" :post="edge.node"/>
    </div>
  </div>
</template>

<script>
import Arrowback from '../components/Arrowback'
import TagCard from '../components/TagCard'

export default {
    components:
    {
        Arrowback,
        TagCard
    }
    
}
</script>
<page-query>
query Tag ($id: ID!) {
  tag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Post {
            title
            path
            date (format: "D. MMMM YYYY")
            cover_image (width: 770, height: 380, blur: 10)
            description
            content
          }
        }
      }
    }
  }
}
</page-query>
<style>
.tag-content{
  display:flex;
  flex-direction: column;
  margin: 20px;
}
.arrow-back{
  display: flex;
}
.tag-title{
  display: flex;
  align-self: center;
}
.tag-posts{
  width: 50%;
  min-width: 50%;
  max-width: 70%;
  display: flex;
  flex-direction: column;
  align-self: center;
}

</style>