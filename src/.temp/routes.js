export default [
  {
    path: "/tag/:id/",
    component: () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/Users/maoyuchi/Documents/Project/my-project/Gridsome/my-blog/src/templates/Tag.vue")
  },
  {
    path: "/photo/",
    component: () => import(/* webpackChunkName: "page--src--pages--photo-vue" */ "/Users/maoyuchi/Documents/Project/my-project/Gridsome/my-blog/src/pages/Photo.vue")
  },
  {
    path: "/home/",
    component: () => import(/* webpackChunkName: "page--src--pages--home-vue" */ "/Users/maoyuchi/Documents/Project/my-project/Gridsome/my-blog/src/pages/Home.vue")
  },
  {
    path: "/about/",
    component: () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/maoyuchi/Documents/Project/my-project/Gridsome/my-blog/src/pages/About.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/maoyuchi/Documents/Project/my-project/Gridsome/my-blog/node_modules/gridsome/app/pages/404.vue")
  },
  {
    path: "/:title/",
    component: () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/maoyuchi/Documents/Project/my-project/Gridsome/my-blog/src/templates/Post.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/maoyuchi/Documents/Project/my-project/Gridsome/my-blog/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/maoyuchi/Documents/Project/my-project/Gridsome/my-blog/node_modules/gridsome/app/pages/404.vue")
  }
]

