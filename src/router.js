import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

// This callback runs before every route change, including on page load.



let router= new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Home - Example App',
        metaTags: [
          {
            name: 'description',
            content: 'The Home page of our example app.'
          },
          {
            property: 'og:description',
            content: 'The Home page of our example app.'
          }
        ]
      },
      
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      meta: {
        title: 'About Page - Example App',
        metaTags: [
          {
            name: 'description',
            content: 'The about page of our example app.'
          },
          {
            property: 'og:description',
            content: 'The about page of our example app.'
          }
        ]
      },
    },
    {
      path: '/auth/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "login" */ './views/auth/Login.vue'),
      meta: {
        title: 'लॉग इन करें • Instagram',
        metaTags: [
          {
            name: 'description',
            content: 'लॉग इन करें • Instagram'
          },
          {
            property: 'og:description',
            content: 'लॉग इन करें • Instagram'
          }
        ]
      },
    },
    {
      path: '/auth/signup',
      name: 'signup',
      // route level code-splitting
      // this generates a separate chunk (login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "login" */ './views/auth/Signup.vue'),
      meta: {
        title: 'साइन अप करें • Instagram',
        metaTags: [
          {
            name: 'description',
            content: 'Instagram में शामिल हों! अपने मित्रों, परिवार और दुनिया भर की रुचियों से फ़ोटो, वीडियो, कहानियाँ और संदेश देखने के लिए साइन अप करें.'
          },
          {
            property: 'og:description',
            content: 'Instagram में शामिल हों! अपने मित्रों, परिवार और दुनिया भर की रुचियों से फ़ोटो, वीडियो, कहानियाँ और संदेश देखने के लिए साइन अप करें.'
          }
        ]
      },
    },
    {
      path: '/auth/forgot',
      name: 'forgot',
      // route level code-splitting
      // this generates a separate chunk (forgot.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "forgot" */ './views/auth/Forgot.vue'),
      meta: {
        title: 'पासवर्ड रीसेट करें • Instagram',
        metaTags: [
          {
            name: 'description',
            content: 'The about page of our example app.'
          },
          {
            property: 'og:description',
            content: 'The about page of our example app.'
          }
        ]
      },
    },
    { 
      path: '/404',
      component: () => import(/* webpackChunkName: "404" */ './views/404.vue'),
      meta:{
        title:'पेज नहीं मिला • Instagram',
        metaTags:[
          {
            name: 'description',
            content: 'पेज नहीं मिला • Instagram'
          },{
            property: 'og:description',
            content: 'पेज नहीं मिला • Instagram'
          }
        ]
      }
    },
    {
      path: '/gopal_indians',
      name: 'profile',
      // route level code-splitting
      // this generates a separate chunk (profile.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "profile" */ './views/profile/page.vue'),
      meta: {
        title: 'पासवर्ड रीसेट करें • Instagram',
        metaTags: [
          {
            name: 'description',
            content: 'The about page of our example app.'
          },
          {
            property: 'og:description',
            content: 'The about page of our example app.'
          }
        ]
      },
    },
  ]
});


router.beforeEach((to, from, next) => {

  if (!to.matched.length) {
    next('/404');
  } else {
    next();
  }

  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.

  console.log(to);
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
  

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));


  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create, so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');
    
    return tag;
  })
  // Add the meta tags to the document head.
  .forEach(tag => document.head.appendChild(tag));

  next();
});

export default router;