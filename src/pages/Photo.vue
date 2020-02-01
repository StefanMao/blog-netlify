<template>
    <div class="photo-main-content">
      <section class ="item silder-container">
        <div class="silder-center">
          <div class ="s-text">
             <a class="silder-text small-text">I AM A BOY !</a>
             <h1 class="silder-text large-text">Here We Are !</h1>
             <a class="silder-text small-text">This is a book digital agency crafting sophisticated </a>
             <a class="silder-text small-text">This ia a pen Unordinary digital agency </a>
            <a href="#" class="sileder-text silder-button" id="silderbtn-text">EXPLORE NOW</a>
          </div>
        </div>
      </section>
      <section class ="item text-container">
        <div class="text-container-box">
          <h1>OurStory</h1>
          <h2>Unordinary digital agency crafting sophisticated and eccentric stuff that will leave you speechless</h2>
          <h3>we had opportunity to work on wide variety of projects for different clients around the world</h3>
          <a class="text-container-aword">we're responsible and our client is our priority</a>
        </div>
         
      </section>
       <Navbar/>
       <section name ="Card" class ="item card-container">
         <a class="card-title">Service</a>
         <div class="card-rol">
           <div class="card-rol1-content">
            <PhotoCard/>
            <PhotoCard/>
           </div>
         </div>
         <div class="card-rol">
           <div class="card-rol2-content">
             <PhotoCard/>
           </div>
         </div>
         <div class ="card-rol">
           <div class="card-rol3-content">
             <a class="rol3-content-text">we're responsible and our client is our priority</a>
             <a class="rol3-btn">Click Me </a>
           </div>
         </div>
      </section>
      <section class ="item picture-container">
        <div class="picture-rol p-rol1" >
           <a class="picture-title">picture</a>
              <div class ="picture-tag">
                <a class="tag-text">Tag-1</a>
                <a class="tag-text">Tag-2</a>
                <a class="tag-text">Tag-3</a>
                <a class="tag-text">Tag-4</a>
              </div>
        </div>
         <div class="picture-rol p-rol2" >
           <a class="picture-title">picture</a>
              
        </div>
        
         
      </section>
      <section class="item footer">
        <div class="item footer">
             <g-image class="footer-img" src="../../content/posts/image/instagram.svg"></g-image>
             <g-link class="text-nav-link" to="/Home/">| Instagram</g-link>
             <g-image class="footer-img" src="../../content/posts/image/facebook.svg"></g-image>
             <g-link class="text-nav-link" to="/Home/">| FaceBook</g-link>
             <g-image class="footer-img" src="../../content/posts/image/twitter.svg"></g-image>
             <g-link class="text-nav-link" to="/Home/">| Twitter</g-link>
        </div>
      </section>
    </div>
</template>

<script>
import Navbar from '../components/Navbar'
import PhotoCard from '../components/PhotoCard'
export default {
    metaInfo: {
      title: "Photo-Page",
      meta:[
          {charset : 'utf-8'},
          {name : 'viewport', content: 'width=device-width, initial-scale=1'},
          {'http-equiv':'X-UA-Compatible' , content :'ie=edge'}
        ]
    },
    components:{
      Navbar,
      PhotoCard
    }
}
</script>

<style>
/* main content*/
.photo-main-content{
  display: flex;
  flex-direction: column;
  min-height: 100%;
  min-width: 100%;
  background-size:contain;
  background-attachment:fixed;
  background-repeat: repeat;
  background-image: url('../../content/posts/image/picture-6.jpg');
}
.item{
  display: flex;
  flex-wrap: wrap;
  width:100%;
}
/* silder content */

.silder-container{
  display: flex;
  flex-direction: column;
  width: 100%;
  background:url('../../content/posts/image/picture-6.jpg') center center repeat;
  background-size: cover;
}
.right-nav{
  justify-content: flex-end;
}
.silder-center{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width:30%;
  max-height: 40%;
  margin: 15% auto;
}
.silder-text{
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.silder-button{
  display: flex;
  justify-content: center;
  margin: 20% auto;
  color: white;
  width: 100%;
  height: 50%;
  min-height: 50px;
  border-radius: 10px;
  font-size: 2vh;
  text-decoration-line: none;
  background-color: rgb(157, 207, 240);
}

#silderbtn-text{
  align-items: center;
}
.silder-button:hover{
  background-color: rgba(157, 207, 240, 0.7);
}
.s-text{
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 100%;
}
.small-text
{
  font-size: 1vw;
  color: #ffffff;
  margin: 0px auto;
}
.large-text{
  font-size:4vw;
  color: #ffffff;
  margin: 0px auto;
}
.text-container{
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color:#ffffff;
}
.text-container-box{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width:70%;
  max-width: 70%;
  justify-content: center;
  align-items: center;
  font-size:1.5vh;
  min-height: 320px;
}
.text-container-aword{
  color: gray;
}
.card-container{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width:100%;
  max-width: 100%;
  background-color:rgb(245, 243, 219);
  flex-wrap: wrap;
  padding: 0.5%;
  justify-content: center;
  z-index: 0;
}
.card-title{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5vh;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  min-height: 150px;
  max-width: 100%;
}
.card-rol{
  width: 100%;
  padding:1%;
}
.card-rol1-content{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 100%;
  padding:1%;
}
.card-rol2-content{
  width:100%;
}
.card-rol3-content{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width:100%;
  margin-top:8%;
}
.rol3-content-text{
  color: gray;
}
.rol3-btn{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:1%;
  margin-bottom: 8%;
  width:auto;
  height: 15px;
  min-width: 20%;
  border-radius: 10px;
  font-size: 2vh;
  border-style: solid;
  border-width: 1px;
  padding: 1.5%;

}

.picture-container{
  display: flex;
  flex-direction: column;
  height: 900px;
  background-color:white;
}
.picture-rol{
  width:100%;
  display: flex;
  padding:1%;
}
.p-rol1{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 100%;
  padding-bottom: 8%;
}
.picture-title{
  display: flex;
  width:100%;
  justify-content: center;
  align-items: center;
  font-size: 4vh;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  margin-bottom: 2%;
}
.picture-tag{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 3vh;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  text-decoration-line:underline;
  width: 100%;
}
.tag-text{
  margin-right: 1%;
}
.footer{
  display: flex;
  flex-direction: row;
  height:30%;
  justify-content:center;
  align-items: center;
  
}
.footer-img{
  object-fit: cover;
  width:1%;
  height: 1%;
  max-width:5%;
  max-height:5%;
  margin-right: 1%;
}
.text-nav-link{
  font-size: 1.5vh;
  font-weight: 100;
  font-family:'Times New Roman', Times, serif;
  margin-right: 4%;
  color: rgba(0, 0, 0, 0.781);
  text-decoration-line: none;
}

@media screen and (max-width: 1200px){

}

</style>