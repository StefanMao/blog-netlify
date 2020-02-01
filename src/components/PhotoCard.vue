<template>
<div class="card">
    <div class="item picture-box bg">

    </div>
    <div class="item content-box">
        <div class="content">
            <div class="h1-content">
            <h1>Web Design</h1>
            </div>
            <div class="p-content">
                <p>Her companions instrument set estimating sen remarkably solicitude motionless, property men calibrate</p>
            </div>
        </div> 
    </div>
</div>
    
</template>

<style scoped>
.card {
    flex-wrap: wrap;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    width: 350px;
    margin: auto;
    text-align: center;
    font-family: arial;
}
.bg{
    background:url('../../content/posts/image/picture-2.png');
    background-size:cover;
}
.item{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}
.picture-box{
    width:100%;
    min-height: 200px;
    max-width: 100%;
}
.content-box{
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap:wrap;
    background-color: white;
    max-width: 100%;
}
.content{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
}
.h1-content{
    width:100%;
    display: flex;
    flex-direction: column;
}
.p-content{
    width: 70%;
    max-width: 70%;
    display: flex;
    flex-direction: column;
}

</style>