/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/30/HappyNewYear/index.html","518a8b6e7b2039ac453225e5390dcfc3"],["/2022/03/12/mysql80setup/index.html","052a10a71d6df2c22ca1d4fa3740fa1d"],["/404.html","a78268ad453e4a71784bffa9c985c1c1"],["/about/index.html","75e2eea86e42ab4537222eee0f3c720d"],["/android-chrome-192x192.png","aacfe7d84699dba8af2720099486c5e4"],["/android-chrome-512x512.png","728da64249bca95507955306d781ccd9"],["/apple-touch-icon.png","155e17339036547eb67e1a4392ba43ea"],["/archives/2022/01/index.html","45be0ec34afb0ef4b14292110500e30e"],["/archives/2022/03/index.html","b107af708f8148a9c6cae88e00b46937"],["/archives/2022/index.html","a2d212a09f1fcb578950a02dabb78631"],["/archives/index.html","fdcd37da8eea5bbd03412b143826fc1f"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/avatar.png","412ad5dc1e63b8fed63dedfe9ae47da3"],["/background0.jpg","ada8fcccb0152cbfb2452be8d9fb8ce1"],["/background1.jpg","30d8b12ad792deb0fb9e802bbc45113e"],["/categories/index.html","e99bbbb19e1be367a99fdc33d656d6a4"],["/categories/拜年/index.html","d74e585b64ad8e50631bc043400d1e26"],["/categories/教程/index.html","9ad37ad6679374fd9197d428309444de"],["/categories/教程/安装/index.html","1cd96899aca8061cc082a7c30dc0987a"],["/css/index.css","3fdc11bdd3614de7687190e663f45e2e"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/favicon-16x16.png","9b451029623f6821cb728629d4255216"],["/favicon-32x32.png","ac95c69342b91f4922590e8bb163f36e"],["/googled243331b87554f4e.html","d0f09db0e2ebfcec386dc3d7e9aebbc4"],["/images/algolia.svg","7f55a5eff525feb4fa927e617395323a"],["/images/alipayreward.jpg","e3594718d300d91b4f4cd0a4a4c3447b"],["/images/cc-by-nc-nd.svg","5fcd1a5c962391d092c995d457fb3040"],["/images/cc-by-nc-sa.svg","2ec8ab6280fa7ada792bebed6f636d8b"],["/images/cc-by-nc.svg","cb04a42b5be6f93f0d2051bcbe1a828a"],["/images/cc-by-nd.svg","c8941a39e22284084c2ec0d2e09c7759"],["/images/cc-by-sa.svg","61380e86b4cec4af627e7228bb302a2b"],["/images/cc-by.svg","f614962aac0740852c7fb67225856be7"],["/images/icons/android-chrome-192x192.png","aacfe7d84699dba8af2720099486c5e4"],["/images/icons/android-chrome-512x512.png","728da64249bca95507955306d781ccd9"],["/images/icons/apple-touch-icon.png","155e17339036547eb67e1a4392ba43ea"],["/images/icons/favicon-16x16.png","9b451029623f6821cb728629d4255216"],["/images/icons/favicon-32x32.png","ac95c69342b91f4922590e8bb163f36e"],["/images/icons/mstile-150x150.png","9596b7baf910b4b9dada0939490fa7da"],["/images/icons/safari-pinned-tab.svg","f17d3431e866162bfe7a3943f1cc4ed6"],["/images/loading.svg","626a1afa3e60e3fbf6af9535e476434a"],["/images/wechatreward.jpg","382d730e22ce868697866cd39a1c71af"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","3ce426f6a78f57b6f14a237baee77a6b"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","37bf6a951dfc61246c65a68b994ee84f"],["/maskable_icon.png","b3872858aadf3822bb30ce24a855558c"],["/maskable_icon_x192.png","3cabf83bfda4cb148a1e55037a64a06d"],["/maskable_icon_x512.png","3b78c55e15673f87409b716e659c5a0f"],["/mstile-150x150.png","9596b7baf910b4b9dada0939490fa7da"],["/playlist/index.html","f9688d2d317007bf39c0d770dc53261e"],["/safari-pinned-tab.svg","f17d3431e866162bfe7a3943f1cc4ed6"],["/sw-register.js","5b5ad0814cb7136d7c63264e05834917"],["/tags/MySQL-8-0/index.html","2b99176c1e0e4256b11bf205b4e5f968"],["/tags/News/index.html","6e53092b1e14bd06080c17817da5f1b9"],["/tags/index.html","5a70d17539bfc0f46b7858e73ff675ac"],["/wechat/No.1.jpg","54f3761e59fe7966bd69efc88ab832dd"],["/wechat/wechat.html","38f36c89b1722f1e49cd630a7c35a77f"],["/wechat/微信二维码.png","e6a87cb49868c7a9248da7493ab0af74"]];
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
