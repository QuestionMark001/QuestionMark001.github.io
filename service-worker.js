if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let d={};const n=e=>a(e,r),f={module:{uri:r},exports:d,require:n};i[r]=Promise.all(c.map((e=>f[e]||n(e)))).then((e=>(s(...e),d)))}}define(["./workbox-7d6a3f4d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/01/30/HappyNewYear/index.html",revision:"fb81af4cc7e6e3e382fc3d0e64e35964"},{url:"2022/03/12/mysql80setup/index.html",revision:"df1db0226a1b74696fc1423bf6efd7f0"},{url:"404.html",revision:"3af241368612672171a76ba02baa7dcf"},{url:"about/index.html",revision:"818a41ac5541d56e864028546d7fd380"},{url:"android-chrome-192x192.png",revision:"aacfe7d84699dba8af2720099486c5e4"},{url:"android-chrome-512x512.png",revision:"728da64249bca95507955306d781ccd9"},{url:"apple-touch-icon.png",revision:"155e17339036547eb67e1a4392ba43ea"},{url:"archives/2022/01/index.html",revision:"8b98c8d06ee137c7e7d1bcd185a94824"},{url:"archives/2022/03/index.html",revision:"117cf6a46e60deb46db162ed7ca468f5"},{url:"archives/2022/index.html",revision:"c094914ace7652f4a720c3ccef89cee2"},{url:"archives/index.html",revision:"7e6b3ffd717e481666a7231c5da686c3"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"avatar.png",revision:"412ad5dc1e63b8fed63dedfe9ae47da3"},{url:"background0.jpg",revision:"ada8fcccb0152cbfb2452be8d9fb8ce1"},{url:"background1.jpg",revision:"30d8b12ad792deb0fb9e802bbc45113e"},{url:"categories/index.html",revision:"3476999e0b3153508fdafd70196222e0"},{url:"categories/拜年/index.html",revision:"fe66b36cab647aae66665cfbfb0e57cd"},{url:"categories/教程/index.html",revision:"8bf8407106a30910cde9539be672e35c"},{url:"categories/教程/安装/index.html",revision:"3f9807fd7237e23286b9a236ce1bfa67"},{url:"css/index.css",revision:"0c832695afe0a2b698b0d2d831ef0711"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"favicon-16x16.png",revision:"9b451029623f6821cb728629d4255216"},{url:"favicon-32x32.png",revision:"ac95c69342b91f4922590e8bb163f36e"},{url:"googled243331b87554f4e.html",revision:"d0f09db0e2ebfcec386dc3d7e9aebbc4"},{url:"images/algolia.svg",revision:"7f55a5eff525feb4fa927e617395323a"},{url:"images/alipayreward.jpg",revision:"e3594718d300d91b4f4cd0a4a4c3447b"},{url:"images/cc-by-nc-nd.svg",revision:"5fcd1a5c962391d092c995d457fb3040"},{url:"images/cc-by-nc-sa.svg",revision:"2ec8ab6280fa7ada792bebed6f636d8b"},{url:"images/cc-by-nc.svg",revision:"cb04a42b5be6f93f0d2051bcbe1a828a"},{url:"images/cc-by-nd.svg",revision:"c8941a39e22284084c2ec0d2e09c7759"},{url:"images/cc-by-sa.svg",revision:"61380e86b4cec4af627e7228bb302a2b"},{url:"images/cc-by.svg",revision:"f614962aac0740852c7fb67225856be7"},{url:"images/icons/android-chrome-192x192.png",revision:"aacfe7d84699dba8af2720099486c5e4"},{url:"images/icons/android-chrome-512x512.png",revision:"728da64249bca95507955306d781ccd9"},{url:"images/icons/apple-touch-icon.png",revision:"155e17339036547eb67e1a4392ba43ea"},{url:"images/icons/favicon-16x16.png",revision:"9b451029623f6821cb728629d4255216"},{url:"images/icons/favicon-32x32.png",revision:"ac95c69342b91f4922590e8bb163f36e"},{url:"images/icons/mstile-150x150.png",revision:"9596b7baf910b4b9dada0939490fa7da"},{url:"images/icons/safari-pinned-tab.svg",revision:"f17d3431e866162bfe7a3943f1cc4ed6"},{url:"images/loading.svg",revision:"626a1afa3e60e3fbf6af9535e476434a"},{url:"images/wechatreward.jpg",revision:"382d730e22ce868697866cd39a1c71af"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"71ec24f49de7475df2efab10684605e8"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/search/algolia.js",revision:"af567f93a5504310fe16fe368a4ee89e"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"597f3cf9eb4546c66d10f3f2aed94db0"},{url:"maskable_icon_x192.png",revision:"3cabf83bfda4cb148a1e55037a64a06d"},{url:"maskable_icon_x512.png",revision:"3b78c55e15673f87409b716e659c5a0f"},{url:"maskable_icon.png",revision:"b3872858aadf3822bb30ce24a855558c"},{url:"mstile-150x150.png",revision:"9596b7baf910b4b9dada0939490fa7da"},{url:"playlist/index.html",revision:"5766b850220b1d017404ef2185161e0f"},{url:"safari-pinned-tab.svg",revision:"f17d3431e866162bfe7a3943f1cc4ed6"},{url:"tags/index.html",revision:"3e9f8489867f3f0720c6615e33d7ca4d"},{url:"tags/MySQL-8-0/index.html",revision:"d8d61dc0b7067c2b26f8d43bea2b23d7"},{url:"tags/News/index.html",revision:"b7daeea9201cbb2d0279aa6512234df6"},{url:"wechat/No.1.jpg",revision:"54f3761e59fe7966bd69efc88ab832dd"},{url:"wechat/wechat.html",revision:"38f36c89b1722f1e49cd630a7c35a77f"},{url:"wechat/微信二维码.png",revision:"e6a87cb49868c7a9248da7493ab0af74"}],{})}));
//# sourceMappingURL=service-worker.js.map
