if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,d)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let r={};const n=e=>a(e,s),b={module:{uri:s},exports:r,require:n};i[s]=Promise.all(c.map((e=>b[e]||n(e)))).then((e=>(d(...e),r)))}}define(["./workbox-7d6a3f4d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/01/30/HappyNewYear/index.html",revision:"8a8ba31744d8faab22fca28876d3be3d"},{url:"2022/03/12/mysql80setup/index.html",revision:"3d5dd7e7f243418dbbad6e7961bf903b"},{url:"404.html",revision:"22b20b015c65cc191b5b5ecf4898f4db"},{url:"about/index.html",revision:"342e3427390dbc7913c5d0ac1d99b60d"},{url:"android-chrome-192x192.png",revision:"aacfe7d84699dba8af2720099486c5e4"},{url:"android-chrome-512x512.png",revision:"728da64249bca95507955306d781ccd9"},{url:"apple-touch-icon.png",revision:"155e17339036547eb67e1a4392ba43ea"},{url:"archives/2022/01/index.html",revision:"d3c5bd8f34c0313d04fdfef08c12e2bb"},{url:"archives/2022/03/index.html",revision:"3331c0169d4b8ebf06c33440c6d6a3da"},{url:"archives/2022/index.html",revision:"16df4d945927132222bc4416600b4f7e"},{url:"archives/index.html",revision:"fc63f13b3a3f63f1e22fa3bce0c276e6"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"avatar.png",revision:"412ad5dc1e63b8fed63dedfe9ae47da3"},{url:"background0.jpg",revision:"ada8fcccb0152cbfb2452be8d9fb8ce1"},{url:"background1.jpg",revision:"30d8b12ad792deb0fb9e802bbc45113e"},{url:"categories/index.html",revision:"98aa9a23502a5d24b3957eae13e5931b"},{url:"categories/拜年/index.html",revision:"ac99391e14b359e81cc1767a48d64a99"},{url:"categories/教程/index.html",revision:"10c59a3e3d590a1d99da554fbbd7e404"},{url:"categories/教程/安装/index.html",revision:"e65525d9adbb0b40b3c877da83c69d51"},{url:"css/index.css",revision:"f73778a04c69aeb84f622d5cc4485ca7"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"favicon-16x16.png",revision:"9b451029623f6821cb728629d4255216"},{url:"favicon-32x32.png",revision:"ac95c69342b91f4922590e8bb163f36e"},{url:"googled243331b87554f4e.html",revision:"d0f09db0e2ebfcec386dc3d7e9aebbc4"},{url:"images/algolia.svg",revision:"7f55a5eff525feb4fa927e617395323a"},{url:"images/alipayreward.jpg",revision:"e3594718d300d91b4f4cd0a4a4c3447b"},{url:"images/cc-by-nc-nd.svg",revision:"5fcd1a5c962391d092c995d457fb3040"},{url:"images/cc-by-nc-sa.svg",revision:"2ec8ab6280fa7ada792bebed6f636d8b"},{url:"images/cc-by-nc.svg",revision:"cb04a42b5be6f93f0d2051bcbe1a828a"},{url:"images/cc-by-nd.svg",revision:"c8941a39e22284084c2ec0d2e09c7759"},{url:"images/cc-by-sa.svg",revision:"61380e86b4cec4af627e7228bb302a2b"},{url:"images/cc-by.svg",revision:"f614962aac0740852c7fb67225856be7"},{url:"images/icons/android-chrome-192x192.png",revision:"aacfe7d84699dba8af2720099486c5e4"},{url:"images/icons/android-chrome-512x512.png",revision:"728da64249bca95507955306d781ccd9"},{url:"images/icons/apple-touch-icon.png",revision:"155e17339036547eb67e1a4392ba43ea"},{url:"images/icons/favicon-16x16.png",revision:"9b451029623f6821cb728629d4255216"},{url:"images/icons/favicon-32x32.png",revision:"ac95c69342b91f4922590e8bb163f36e"},{url:"images/icons/mstile-150x150.png",revision:"9596b7baf910b4b9dada0939490fa7da"},{url:"images/icons/safari-pinned-tab.svg",revision:"f17d3431e866162bfe7a3943f1cc4ed6"},{url:"images/loading.svg",revision:"626a1afa3e60e3fbf6af9535e476434a"},{url:"images/wechatreward.jpg",revision:"382d730e22ce868697866cd39a1c71af"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"5672ed6461f19c43872d0e0d1b6c2173"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/search/algolia.js",revision:"af567f93a5504310fe16fe368a4ee89e"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"be88d937cf518245cb822d890bee3a98"},{url:"maskable_icon_x192.png",revision:"3cabf83bfda4cb148a1e55037a64a06d"},{url:"maskable_icon_x512.png",revision:"3b78c55e15673f87409b716e659c5a0f"},{url:"maskable_icon.png",revision:"b3872858aadf3822bb30ce24a855558c"},{url:"mstile-150x150.png",revision:"9596b7baf910b4b9dada0939490fa7da"},{url:"playlist/index.html",revision:"ceaf0d7e1ad61d75294d3b67bc53de9c"},{url:"safari-pinned-tab.svg",revision:"f17d3431e866162bfe7a3943f1cc4ed6"},{url:"tags/index.html",revision:"6c91c3abffbe53289383a6d20bf91a3b"},{url:"tags/MySQL-8-0/index.html",revision:"05a1153d1738c25878caaf77858f87bf"},{url:"tags/News/index.html",revision:"ceac6bdf758ee2fdfe794d04ca577d8e"},{url:"wechat/No.1.jpg",revision:"54f3761e59fe7966bd69efc88ab832dd"},{url:"wechat/wechat.html",revision:"38f36c89b1722f1e49cd630a7c35a77f"},{url:"wechat/微信二维码.png",revision:"e6a87cb49868c7a9248da7493ab0af74"}],{})}));
//# sourceMappingURL=service-worker.js.map
