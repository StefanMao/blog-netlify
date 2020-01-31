<template>
    <div class="photo-main-content">
      <section class ="item silder-container">
        <div class="silder-center">
          <div class ="s-text">
             <a class="silder-text small-text">smile</a>
            <h1 class="silder-text large-text">Here We Are !</h1>
            <g-link class="sileder-text silder-button" to="/Home/">Click</g-link>
          </div>
        </div>
      </section>
      <section class ="item text-container">
        <div class="text-container-box">
          <h1>Some words...</h1>
          <h2>一些文字....一些文字....一些文字....一些文字....一些文字....一些文字....一些文字....一些文字....</h2>
          <h3>Some words...</h3>
          <a>Some words...</a>
        </div>
         
      </section>
       <Navbar/>
       <section class ="item card-container">
         <a class="card-title">card-container</a>
         <div class="card-rol1">
           <div class="card-rol1-content">
            <PhotoCard/>
            <PhotoCard/>
           </div>
         </div>
         <div class="card-rol2">
           <div class="card-rol2-content">
             <PhotoCard/>
           </div>
           
         </div>
         
         
      </section>
      <section class ="item picture-container">
         <a class="picture-title">picture-container</a>
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
  flex-wrap: wrap;
  justify-content: center;
}
.silder-button{
  display: flex;
  justify-content: center;
  margin: 10px auto;
  color: white;
  border: 2px solid #4CAF50; /* Green */
  width: auto;
  font-size: auto;
  text-decoration-line: none;
}
.small-text
{
  font-size: 2vh;
  color: #ffffff;
  margin: 0px auto;
}
.large-text{
  font-size:4vh;
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
.card-container{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width:100%;
  max-width: 100%;
  background-color:rgb(226, 221, 221);
  flex-wrap: wrap;
  padding: 0.5%;
  justify-content: center;
}
.card-title{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3vh;
  min-height: 150px;
  max-width: 100%;
}
.card-rol1{
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
.card-rol2{
  padding:1%;
  width: 100%;
}
.card-rol2-content{
  width:100%;
}
.picture-container{
  height: 100%;
  background-color:burlywood;
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