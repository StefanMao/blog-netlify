<template>
<body>
<div class="content">
    <section class="sidenav">
            <a href="#">Home</a>
            <a href="#">Travel</a>
            <a href="#">Photo</a>
            <a href="#">Book</a>
    </section>
    <section class="headerDivider"></section> 
    <section class="right-container">
       <!-- right - content -->
      <slot/>
    </section>
</div>
</body>

</template>

<script>
export default {
    name:'Blog',
    metaInfo:{
        title:'Mao_Blog',
        meta:[
          {charset : 'utf-8'},
          {name : 'viewport', content: 'width=device-width, initial-scale=1'},
          {'http-equiv':'X-UA-Compatible' , content :'ie=edge'}
        ],
        link:[
            {rel:'stylesheet',href:'//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css',id:'bootstrap-css'},
        ]
    }
}
</script>

<style>
* {
  font-family: sans-serif;
  box-sizing: border-box;
}
body,html{
    height: 100%;
}
.content{
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    height: 100%;
}
/* The sidebar menu */
.sidenav {
  display: flex;
  flex-direction: column;
  width: 20%; /* Set the width of the sidebar */
  z-index: 1; /* Stay on top */
  top: 0%; /* Stay at the top */
  left: 0;
  background-color:rgb(241, 236, 236); 
  overflow-x: hidden; /* Disable horizontal scroll */
  align-items: center;
  justify-content: center;
  margin: 5px 10px;
  padding-top: 1.5rem;
}

/* The navigation menu links */
.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color: #f1f1f1;
}

/* Style page content */
.main {
  margin-left: 160px; /* Same as the width of the sidebar */
  padding: 0px 10px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}

/* the-line */
.headerDivider { 
    display: flex;
    border-left:0.8px solid rgb(173, 169, 169) ;
    max-height: 90%;
    margin: 10% 0px;
} 
/* right-container */
.right-container{
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    width:100%;
    background-color:whitesmoke;
    margin: 5px 10px;
}

</style>