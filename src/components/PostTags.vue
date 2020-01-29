<template>
   <div class="post-tags">
   		<g-link class="tag-link" v-for="tag in post.tags" :key="tag.id" :to="tag.path">
            <p class="tag">＃{{tag.title}}</p>
   		</g-link>
    </div>
</template>

<script>
export default {
    props:['post']
}
</script>
<style>

.post-tags{
    display:flex;
    flex-direction: row;
    width:100%;
   
}
.tag-link{
    display:flex;
    flex-direction: row;
    margin-right:5px;
    color:black;
    font-weight: 500;
    
}
.tag{
    display: flex;
    width: 100%;
    border-radius: 3px;
    background-color:rgba(196, 194, 194, 0.616);
}
</style>