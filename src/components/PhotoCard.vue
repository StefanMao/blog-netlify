<template>
<div class="card">
    <div class="item picture-box">

    </div>
    <div class="item content-box">
        <div class="content">
            <h1>Tailored Jeans</h1>
            <p>Some text about the jeans..</p>
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
.item{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 1%;
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
    widows: 100%
}

</style>