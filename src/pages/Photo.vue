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
           <a class="picture-title">Article</a>
              <div class ="picture-tag">
                <g-link class="tag-text" v-for="tag in $page.tags.edges" :key="tag.node.id">
                    <p class="tag-title" @click="tagupdate(tag.node.title)">{{tag.node.title}}</p>
                </g-link>
              </div>
              <div class="picture-search-box">
                <SearchBox @update='searchupdate'></SearchBox>
              </div>
        </div>
         <div class="picture-rol p-rol2" >
           <PictureCard v-for="edge in filteredData" :key="edge.node.id" :post="edge.node"/>
        </div>
      </section>

      <section class="item newest-rol">
         <a class="picture-title">Newest Card</a>
        <Photonewcard v-for="eachnew in $page.newpost.edges" :key="eachnew.node.id" :eachnewpost="eachnew.node"/>
      </section>

      <section class="item review">
        <div class ="s-text review-text">
        <a class="silder-text small-text">FINALLY!</a>
             <h1 class="silder-text large-text">Here We Are !</h1>
             <a class="silder-text small-text">This is a book digital agency crafting sophisticated </a>
             <a class="silder-text small-text">This ia a pen Unordinary digital agency </a>
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
import PictureCard from '../components/PictureCard'
import SearchBox from '@/components/SearchBox'
import Photonewcard from '@/components/Photonewcard'

export default  {
    metaInfo: {
      title: "Photo-Page",
      meta:[
          {charset : 'utf-8'},
          {name : 'viewport', content: 'width=device-width, initial-scale=1'},
          {'http-equiv':'X-UA-Compatible' , content :'ie=edge'}
        ]
    },
    data (){
      return{
        search:'',
        tag_text: ''
      }
    },
    components:{
      Navbar,
      PhotoCard,
      PictureCard,
      SearchBox,
      Photonewcard 
    },
    methods:{
        searchupdate(val) {
          this.search = val
        },
        tagupdate(title){
          //console.log(title)
          this.tag_text = title


        }
    },
    computed:{
         filteredData () {
          return this.$page.posts.edges.filter(edge => {
            if(this.tag_text!=''){
              // tag fileter
              console.log(edge.node.tags)
             
              this.tag_text=''
            }
            else
            {
              //text filter
              const lowercase_title = edge.node.title.toLowerCase()
              //console.log(lowercase_title.indexOf(this.search.toLowerCase()))
              return lowercase_title.indexOf(this.search.toLowerCase()) >= 0
            }
              
          })
        }
    }
}
</script>
<page-query>
query {
  metadata {
  siteName
  }
  posts: allPost {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        description
        cover_image (width: 770, height: 380, blur: 10)
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
  tags:allTag{
    edges{
      node
      {
        id
        title
        path
      }
    }
  }
  newpost:allPost(sortBy:"date" ,order:DESC ,limit:4){
    edges{
      node{
        id
        title
        date(format: "D. MMMM YYYY")
        cover_image (width: 770, height: 380, blur: 10)
        path
      }
    }
  }
}
</page-query>


<style>
/* background picture */

.bg-1{
  background-image: url('../../content/posts/image/picture-1.png')
}
.bg-2{
  background-image: url('../../content/posts/image/picture-2.png')
}
.bg-3{
  background-image: url('../../content/posts/image/picture-3.png')
}
.bg-4{
  background-image: url('../../content/posts/image/picture-4.png')
}




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
  background-size: cover;
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
  min-width: 100%;
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
  max-width:40%;
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
  font-size: auto;
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
  font-size: auto;
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
  height: auto;
  min-height: 1000px;
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
  padding-bottom: 3%;
}
.p-rol2{
  width:98%;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 5%;
}
.picture-title{
  display: flex;
  width:100%;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  margin-bottom: 2%;
  font-weight: 200;
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
.picture-search-box
{
  margin-top: 1%;
}
.tag-text{
  margin-right: 1%;
  font-size: 1.2rem;
  color: black;
  font-weight: 200

}

/* Newest post*/
.newest-rol{
  display: flex;
  width: 100%;
  min-height: auto;
  justify-content: center;
  align-items: center;
  background-color: rgb(245, 245, 245);
  padding: 1%;
}

.review{
  display: flex;
  width: 100%;
  min-height: 400px;
  justify-content: center;
  align-items: center;
}
.review-text{
  width:100%;
}
/* footer content*/
.footer{
  display: flex;
  flex-direction: row;
  min-height: 200px;
  justify-content:center;
  align-items: center;
  background-color: antiquewhite;
  
}
.footer-img{
  object-fit: cover;
  width:5%;
  height: 5%;
  max-width:10%;
  max-height:10%;
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