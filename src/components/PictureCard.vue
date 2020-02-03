<<template>
<div class="card">
    <div class="item picture-box">
        <g-image class ="p-img" v-if="post.cover_image" :src='post.cover_image'></g-image>
    </div>
    <div class ="item picture-title">
    <g-link class="p-title" :to='post.path'>{{post.title}}</g-link>
    </div> 
</div>
    
</template>

<script>
export default {
    props:['post'],
}
</script>

<style scoped>
.card {
    flex-wrap: wrap;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    width: 450px;
    margin: auto;
    text-align: center;
    font-family: arial;
    margin-top:5%;
}
.item{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}
.picture-box{
    display: flex;
    width:100%;
    min-height: 200px;
}
.p-img{
    display: flex;
    object-fit: cover;
    width:100%;
    max-height: 200px;;
}
.picture-title{
    display: flex;
    flex-direction: column;
    width: 100%;
}
.p-title{
    text-decoration-line: none;
    color: black;
    font-size: 1.5rem;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
</style>