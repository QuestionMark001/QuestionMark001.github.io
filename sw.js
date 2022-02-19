/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/30/HappyNewYear/index.html","4f72a65387f4f7684b14f0b1380acc9f"],["/about/index.html","b5812933d661c5f1ea697e67b570de6b"],["/android-chrome-192x192.png","aacfe7d84699dba8af2720099486c5e4"],["/android-chrome-512x512.png","728da64249bca95507955306d781ccd9"],["/apple-touch-icon.png","155e17339036547eb67e1a4392ba43ea"],["/archives/2022/01/index.html","a5805e9069b7a4601af7faf1deac47cc"],["/archives/2022/index.html","1d39c82beae331222cc887f9c03d7a9f"],["/archives/index.html","a7eeeb0bc6b778101c1bace013be507d"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/index.html","e3520825f409f230adb0440fc172288c"],["/categories/拜年/index.html","ed427186078f08d0d52795ebeaf8d517"],["/css/index.css","6dd51ee2a4cebcf8abc6d461ac56312a"],["/favicon-16x16.png","9b451029623f6821cb728629d4255216"],["/favicon-32x32.png","ac95c69342b91f4922590e8bb163f36e"],["/friends/index.html","ef2132f8156ea981162f5ca1216839a8"],["/googled243331b87554f4e.html","d0f09db0e2ebfcec386dc3d7e9aebbc4"],["/images/algolia.svg","7f55a5eff525feb4fa927e617395323a"],["/images/alipayreward.jpg","e3594718d300d91b4f4cd0a4a4c3447b"],["/images/avatar.jpg","30d8b12ad792deb0fb9e802bbc45113e"],["/images/background.jpg","ada8fcccb0152cbfb2452be8d9fb8ce1"],["/images/cc-by-nc-nd.svg","5fcd1a5c962391d092c995d457fb3040"],["/images/cc-by-nc-sa.svg","2ec8ab6280fa7ada792bebed6f636d8b"],["/images/cc-by-nc.svg","cb04a42b5be6f93f0d2051bcbe1a828a"],["/images/cc-by-nd.svg","c8941a39e22284084c2ec0d2e09c7759"],["/images/cc-by-sa.svg","61380e86b4cec4af627e7228bb302a2b"],["/images/cc-by.svg","f614962aac0740852c7fb67225856be7"],["/images/icons/android-chrome-192x192.png","aacfe7d84699dba8af2720099486c5e4"],["/images/icons/android-chrome-512x512.png","728da64249bca95507955306d781ccd9"],["/images/icons/apple-touch-icon.png","155e17339036547eb67e1a4392ba43ea"],["/images/icons/favicon-16x16.png","9b451029623f6821cb728629d4255216"],["/images/icons/favicon-32x32.png","ac95c69342b91f4922590e8bb163f36e"],["/images/icons/mstile-150x150.png","9596b7baf910b4b9dada0939490fa7da"],["/images/icons/safari-pinned-tab.svg","f17d3431e866162bfe7a3943f1cc4ed6"],["/images/icons/圆形个人头像.png","412ad5dc1e63b8fed63dedfe9ae47da3"],["/images/loading.svg","626a1afa3e60e3fbf6af9535e476434a"],["/images/wechatreward.jpg","382d730e22ce868697866cd39a1c71af"],["/index.html","e9e869c42084f4787daefd156f768622"],["/js/header.js","1f38556fb6b6f1071c636e9478c44d7c"],["/js/scroll.js","5c7b389ea1003645b2e2132379a6aa2c"],["/js/sidebar.js","80945c0975fc9cbe619b0f82ce5f31cf"],["/js/stun-boot.js","0bf548eda18a96d5ee7bb68bea9f330f"],["/js/utils.js","6c01990edb6a03f853fe9e9c3d379615"],["/maskable_icon.png","b3872858aadf3822bb30ce24a855558c"],["/maskable_icon_x192.png","3cabf83bfda4cb148a1e55037a64a06d"],["/maskable_icon_x512.png","3b78c55e15673f87409b716e659c5a0f"],["/mstile-150x150.png","9596b7baf910b4b9dada0939490fa7da"],["/playlist/index.html","301a4c080c975d06c8d09530ae58518b"],["/safari-pinned-tab.svg","f17d3431e866162bfe7a3943f1cc4ed6"],["/sw-register.js","f369508c2a6efb24760179ef687eddfc"],["/tags/News/index.html","b3c454ee47f1c8f0ebc3607f41746275"],["/tags/index.html","e78402d8d0af8db02e920902ef586848"],["/wechat/No.1.jpg","54f3761e59fe7966bd69efc88ab832dd"],["/wechat/wechat.html","38f36c89b1722f1e49cd630a7c35a77f"],["/wechat/微信二维码.png","e6a87cb49868c7a9248da7493ab0af74"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
