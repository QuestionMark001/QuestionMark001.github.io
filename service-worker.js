if(!self.define){let e,a={};const i=(i,c)=>(i=new URL(i+".js",c).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(a[r])return;let d={};const n=e=>i(e,r),f={module:{uri:r},exports:d,require:n};a[r]=Promise.all(c.map((e=>f[e]||n(e)))).then((e=>(s(...e),d)))}}define(["./workbox-7d6a3f4d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/01/30/HappyNewYear/index.html",revision:"8a8ba31744d8faab22fca28876d3be3d"},{url:"2022/03/12/mysql80setup/index.html",revision:"f7c261019751faa7ecf9010ba9e72699"},{url:"404.html",revision:"ca4234ea0f92b39adcdb43502197b28d"},{url:"about/index.html",revision:"26a3041b1a9044af0823d666fe43dc74"},{url:"android-chrome-192x192.png",revision:"aacfe7d84699dba8af2720099486c5e4"},{url:"android-chrome-512x512.png",revision:"728da64249bca95507955306d781ccd9"},{url:"apple-touch-icon.png",revision:"155e17339036547eb67e1a4392ba43ea"},{url:"archives/2022/01/index.html",revision:"ea3f8b0d2f7cc9f15f87377d6a6945e5"},{url:"archives/2022/03/index.html",revision:"9857f45945d63a3e2577dd158212acd4"},{url:"archives/2022/index.html",revision:"710eb73388ead900705e584a3b5ac827"},{url:"archives/index.html",revision:"92c05e93a12e004e7508a6ce984c5ebf"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"avatar.png",revision:"412ad5dc1e63b8fed63dedfe9ae47da3"},{url:"background0.jpg",revision:"ada8fcccb0152cbfb2452be8d9fb8ce1"},{url:"background1.jpg",revision:"30d8b12ad792deb0fb9e802bbc45113e"},{url:"categories/index.html",revision:"a04cef6ea9e4ba37030cee5e1a057f73"},{url:"categories/拜年/index.html",revision:"b79422fb1cd46cc825c32eafb64a6ddf"},{url:"categories/教程/index.html",revision:"2a2ddd2a55cf9f62d7955592f524e9d1"},{url:"categories/教程/安装/index.html",revision:"d33b8b390ee05fa784089f43f2518bc9"},{url:"css/index.css",revision:"f73778a04c69aeb84f622d5cc4485ca7"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"favicon-16x16.png",revision:"9b451029623f6821cb728629d4255216"},{url:"favicon-32x32.png",revision:"ac95c69342b91f4922590e8bb163f36e"},{url:"googled243331b87554f4e.html",revision:"d0f09db0e2ebfcec386dc3d7e9aebbc4"},{url:"images/algolia.svg",revision:"7f55a5eff525feb4fa927e617395323a"},{url:"images/alipayreward.jpg",revision:"e3594718d300d91b4f4cd0a4a4c3447b"},{url:"images/cc-by-nc-nd.svg",revision:"5fcd1a5c962391d092c995d457fb3040"},{url:"images/cc-by-nc-sa.svg",revision:"2ec8ab6280fa7ada792bebed6f636d8b"},{url:"images/cc-by-nc.svg",revision:"cb04a42b5be6f93f0d2051bcbe1a828a"},{url:"images/cc-by-nd.svg",revision:"c8941a39e22284084c2ec0d2e09c7759"},{url:"images/cc-by-sa.svg",revision:"61380e86b4cec4af627e7228bb302a2b"},{url:"images/cc-by.svg",revision:"f614962aac0740852c7fb67225856be7"},{url:"images/icons/android-chrome-192x192.png",revision:"aacfe7d84699dba8af2720099486c5e4"},{url:"images/icons/android-chrome-512x512.png",revision:"728da64249bca95507955306d781ccd9"},{url:"images/icons/apple-touch-icon.png",revision:"155e17339036547eb67e1a4392ba43ea"},{url:"images/icons/favicon-16x16.png",revision:"9b451029623f6821cb728629d4255216"},{url:"images/icons/favicon-32x32.png",revision:"ac95c69342b91f4922590e8bb163f36e"},{url:"images/icons/mstile-150x150.png",revision:"9596b7baf910b4b9dada0939490fa7da"},{url:"images/icons/safari-pinned-tab.svg",revision:"f17d3431e866162bfe7a3943f1cc4ed6"},{url:"images/loading.svg",revision:"626a1afa3e60e3fbf6af9535e476434a"},{url:"images/wechatreward.jpg",revision:"382d730e22ce868697866cd39a1c71af"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"7ddfcc3f183e20fcd79e2aa5a6b41590"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/search/algolia.js",revision:"af567f93a5504310fe16fe368a4ee89e"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"c023971f6105778f003e91c3f567aceb"},{url:"maskable_icon_x192.png",revision:"3cabf83bfda4cb148a1e55037a64a06d"},{url:"maskable_icon_x512.png",revision:"3b78c55e15673f87409b716e659c5a0f"},{url:"maskable_icon.png",revision:"b3872858aadf3822bb30ce24a855558c"},{url:"mstile-150x150.png",revision:"9596b7baf910b4b9dada0939490fa7da"},{url:"playlist/index.html",revision:"029a836742aa012537a694acc9260e50"},{url:"safari-pinned-tab.svg",revision:"f17d3431e866162bfe7a3943f1cc4ed6"},{url:"tags/index.html",revision:"0cca5d9b24770938555165d3cb02f709"},{url:"tags/MySQL-8-0/index.html",revision:"5b33a22d6d1c1027675da467b825a115"},{url:"tags/News/index.html",revision:"44c36b8dda0522a142a864c93aa1ea12"},{url:"wechat/No.1.jpg",revision:"54f3761e59fe7966bd69efc88ab832dd"},{url:"wechat/wechat.html",revision:"38f36c89b1722f1e49cd630a7c35a77f"},{url:"wechat/微信二维码.png",revision:"e6a87cb49868c7a9248da7493ab0af74"}],{})}));
//# sourceMappingURL=service-worker.js.map
