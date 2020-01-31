<template>
    <section class="nav-bar">
        <div class="nav-bar n-container">
        <button  class="navbar-item box1">
            <g-link class="text-nav-link" to="/Home/">Home</g-link>
        </button >
        <button  class="navbar-item box2">
            <g-link class="text-nav-link" to="/Home/">Travel</g-link>
        </button >
        <button class="navbar-item box3">
             <g-link class="text-nav-link" to="/Home/">About</g-link>
        </button >
        <button class="navbar-item box4">
            <g-link class="text-nav-link" to="/Home/">Photo</g-link>
        </button>

        </div>
        
      </section>
</template>


<style scoped>
/* navbar content */
.nav-bar{
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    max-width: 100%;
    background-color: whitesmoke;
    justify-content: center;
    align-items: center;
    padding:1%;
}
.n-container{
    width:60%;
}
.navbar-item{
    flex-wrap: wrap;
    height: 100px;
    width: 100px;
    border: solid rgb(126, 206, 243);
    background-color: white;
    margin: 0 2%;
    
}
.text-nav-link{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: auto;

}
</style>