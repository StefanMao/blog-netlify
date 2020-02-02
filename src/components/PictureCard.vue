<<template>
<div class="card">
    <div class="item picture-box bg">

    </div>
</div>
    
</template>

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
.bg{
    background:url('../../content/posts/image/picture-3.png');
    background-size:cover;
}
.item{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}
.picture-box{
    width:auto;
    min-height: 250px;
}
.picture-box:hover{
    background:url('../../content/posts/image/picture-2.png');
    background-size:cover;

    
}

</style>