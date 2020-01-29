<template>
<body>
  <div class ="content">
    <section class ="left-col">
      <section class="sidebar">
        <g-link class="nav-link" to="/Home/">Home</g-link>
        <a href="#">Travel</a>
        <g-link class="nav-link" to="/Photo/">Photo</g-link>
        <a href="#">Book</a>
        <a href="#">About</a>
        <div class="mypicture display">
          <g-image class="picture" src="../maomao.png" quality="80"/>
        </div>
        <span class="blogtext display">MaoMao's Blog</span>
      </section>
    </section>
    <div class="verticalLine">
    </div>
    <section class="right-col">
      <slot/>
    </section>
  </div>
    
</body>
</template>

<script>
export default {
    name:'Fixedsidebar',
    metaInfo:{
        title:'Fixedsidebar',
        meta:[
          {charset : 'utf-8'},
          {name : 'viewport', content: 'width=device-width, initial-scale=1'},
          {'http-equiv':'X-UA-Compatible' , content :'ie=edge'}
        ]
    }
}
</script>

<style>

body{
  width: 100%;
  height: 100%;
}

.content{
  display: flex;
  flex-direction: column;
}
.left-col{
  width: 30%;
}
.right-col{
  display: flex;
  width:85%;
  padding-top: 5%;
}

.verticalLine{
   border-left: 0.8px solid #bfc0bcf1;
}

/* The side navigation menu */
.sidebar {
  margin: 0;
  padding: 0;
  width: 20%;
  background-color:white;
  position: fixed;
  height: 100%;
  overflow: auto;
  margin-left: 5%;
  margin-top: 10%;
}

/* Sidebar links */
.sidebar a {
  display: block;
  color: rgba(24, 23, 23, 0.712);
  padding: 10px;
  text-decoration: none;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 1.3vw;
  font-weight: bold;
  text-decoration-thickness: 0.15em;
}

/* Active/current link */
.sidebar a.active {
  color: rgb(13, 158, 241);
  text-decoration: underline   rgb(13, 158, 241);
  text-underline-position: under;
}

/* Links on mouse-over */
.sidebar a:hover:not(.active) {
  text-decoration: underline   rgb(13, 158, 241);
  color: black;
  text-underline-position: under;
}
.mypicture{
  
  margin-top:45%;
}
.picture{
  display: flex;
  width:200px;
  height:200px;
  object-fit: cover;
}
.blogtext{
  width: 200px;
  display: flex;
  justify-content: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: black;
  font-size: 2rem;
  font-weight: 100;
  
}

/* On screens that are less than 700px wide, make the sidebar into a topbar */
@media screen and (max-width: 1200px) {
  .content{
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .left-col{
    width:100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    
  }
  .sidebar {
    width: 100%;
    position: relative;
  }
  .sidebar a {
    padding-right: 5px;
    font-size: 4vw;
    float: left;
    }
    .display{
      display: none;
    }
}

</style>