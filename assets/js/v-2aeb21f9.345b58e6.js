(self.webpackChunkXray_docs_next=self.webpackChunkXray_docs_next||[]).push([[7625],{5531:(a,n,l)=>{"use strict";l.r(n),l.d(n,{data:()=>e});const e={key:"v-2aeb21f9",path:"/config/features/fallback.html",title:"Fallback 回落",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"fallbacks 配置",slug:"fallbacks-配置",children:[{level:3,title:"FallbackObject",slug:"fallbackobject",children:[]},{level:3,title:"补充说明",slug:"补充说明",children:[]}]},{level:2,title:"Fallbacks 设计理论",slug:"fallbacks-设计理论",children:[]}],filePathRelative:"config/features/fallback.md",git:{updatedTime:1616738467e3,contributors:[]}}},2281:(a,n,l)=>{"use strict";l.r(n),l.d(n,{default:()=>M});var e=l(6252);const s=(0,e.uE)('<h1 id="fallback-回落" tabindex="-1"><a class="header-anchor" href="#fallback-回落" aria-hidden="true">#</a> Fallback 回落</h1><blockquote><p><strong>Fallback 是 Xray 的最强大功能之一, 可有效防止主动探测, 自由配置常用端口多服务共享</strong></p></blockquote><p>fallback 为 Xray 提供了高强度的防主动探测性, 并且具有独创的首包回落机制.</p><p>fallback 也可以将不同类型的流量根据 path 进行分流, 从而实现一个端口, 多种服务共享.</p><p>目前您可以在使用 VLESS 或者 trojan 协议时, 通过配置 fallbacks 来使用回落这一特性, 并且创造出非常丰富的组合玩法.</p><h2 id="fallbacks-配置" tabindex="-1"><a class="header-anchor" href="#fallbacks-配置" aria-hidden="true">#</a> fallbacks 配置</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>  <span class="token property">&quot;fallbacks&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;dest&quot;</span><span class="token operator">:</span> <span class="token number">80</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p><code>fallbacks</code>: [ <a href="#fallbackobject">FallbackObject</a> ]</p></blockquote><p>一个数组，包含一系列强大的回落分流配置。</p><h3 id="fallbackobject" tabindex="-1"><a class="header-anchor" href="#fallbackobject" aria-hidden="true">#</a> FallbackObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;alpn&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;dest&quot;</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;xver&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong><code>fallbacks</code> 是一个数组，这里是其中一个子元素的配置说明。</strong></p><p><code>fallbacks</code> 项是可选的，只能用于 TCP+TLS 传输组合</p>',13),o=(0,e.Uk)("该项有子元素时，"),t=(0,e.Uk)("Inbound TLS"),c=(0,e.Uk)(" 需设置 "),p=(0,e.Wm)("code",null,'"alpn":["http/1.1"]',-1),r=(0,e.Uk)("。**"),u=(0,e.uE)("<p>通常，你需要先设置一组 <code>alpn</code> 和 <code>path</code> 均省略或为空的默认回落，然后再按需配置其它分流。</p><p>VLESS 会把 TLS 解密后首包长度 &lt; 18 或协议版本无效、身份认证失败的流量转发到 <code>dest</code> 指定的地址。</p><p>其它传输组合必须删掉 <code>fallbacks</code> 项或所有子元素，此时也不会开启 Fallback，VLESS 会等待读够所需长度，协议版本无效或身份认证失败时，将直接断开连接。</p><blockquote><p><code>name</code>: string</p></blockquote><p>尝试匹配 TLS SNI(Server Name Indication)，空为任意，默认为 &quot;&quot;</p><blockquote><p><code>alpn</code>: string</p></blockquote><p>尝试匹配 TLS ALPN 协商结果，空为任意，默认为 &quot;&quot;</p>",7),d=(0,e.Uk)("有需要时，VLESS 才会尝试读取 TLS ALPN 协商结果，若成功，输出 info "),i=(0,e.Wm)("code",null,"realAlpn =",-1),k=(0,e.Uk)(" 到日志。 用途：解决了 Nginx 的 h2c 服务不能同时兼容 http/1.1 的问题，Nginx 需要写两行 listen，分别用于 1.1 和 h2c。 注意：fallbacks alpn 存在 "),b=(0,e.Wm)("code",null,'"h2"',-1),m=(0,e.Uk)(" 时，"),h=(0,e.Uk)("Inbound TLS"),f=(0,e.Uk)(" 需设置 "),g=(0,e.Wm)("code",null,'"alpn":["h2","http/1.1"]',-1),W=(0,e.Uk)("，以支持 h2 访问。"),q=(0,e.uE)('<div class="custom-container tip"><p class="custom-container-title">提示</p><p>Fallback 内设置的 <code>alpn</code> 是匹配实际协商出的 ALPN，而 Inbound TLS 设置的 <code>alpn</code> 是握手时可选的 ALPN 列表，两者含义不同。</p></div><blockquote><p><code>path</code>: string</p></blockquote><p>尝试匹配首包 HTTP PATH，空为任意，默认为空，非空则必须以 <code>/</code> 开头，不支持 h2c。</p><p>智能：有需要时，VLESS 才会尝试看一眼 PATH（不超过 55 个字节；最快算法，并不完整解析 HTTP），若成功，输出 INFO 日志 <code>realPath =</code>。 用途：分流其它 inbound 的 WebSocket 流量或 HTTP 伪装流量，没有多余处理、纯粹转发流量，理论性能比 Nginx 更强。</p><p>注意：<strong>fallbacks 所在入站本身必须是 TCP+TLS</strong>，这是分流至其它 WS 入站用的，被分流的入站则无需配置 TLS。</p><blockquote><p><code>dest</code>: string | number</p></blockquote><p>决定 TLS 解密后 TCP 流量的去向，目前支持两类地址：（该项必填，否则无法启动）</p>',7),U=(0,e.Wm)("li",null,[(0,e.Uk)("TCP，格式为 "),(0,e.Wm)("code",null,'"addr:port"'),(0,e.Uk)("，其中 addr 支持 IPv4、域名、IPv6，若填写域名，也将直接发起 TCP 连接（而不走内置的 DNS）。")],-1),T=(0,e.Uk)("Unix domain socket，格式为绝对路径，形如 "),x=(0,e.Wm)("code",null,'"/dev/shm/domain.socket"',-1),P=(0,e.Uk)("，可在开头加 "),S=(0,e.Wm)("code",null,"@",-1),v=(0,e.Uk)(" 代表 "),L={href:"https://www.man7.org/linux/man-pages/man7/unix.7.html",target:"_blank",rel:"noopener noreferrer"},y=(0,e.Uk)("abstract"),j=(0,e.Uk)("，"),w=(0,e.Wm)("code",null,"@@",-1),F=(0,e.Uk)(" 则代表带 padding 的 abstract。"),N=(0,e.Wm)("p",null,[(0,e.Uk)("若只填 port，数字或字符串均可，形如 "),(0,e.Wm)("code",null,"80"),(0,e.Uk)("、"),(0,e.Wm)("code",null,'"80"'),(0,e.Uk)("，通常指向一个明文 http 服务（addr 会被补为 "),(0,e.Wm)("code",null,'"127.0.0.1"'),(0,e.Uk)("）。")],-1),_=(0,e.Wm)("blockquote",null,[(0,e.Wm)("p",null,[(0,e.Wm)("code",null,"xver"),(0,e.Uk)(": number")])],-1),C=(0,e.Uk)("发送 "),I={href:"https://www.haproxy.org/download/2.2/doc/proxy-protocol.txt",target:"_blank",rel:"noopener noreferrer"},A=(0,e.Uk)("PROXY protocol"),E=(0,e.Uk)("，专用于传递请求的真实来源 IP 和端口，填版本 1 或 2，默认为 0，即不发送。若有需要建议填 1。"),H=(0,e.Wm)("p",null,"目前填 1 或 2，功能完全相同，只是结构不同，且前者可打印，后者为二进制。Xray 的 TCP 和 WS 入站均已支持接收 PROXY protocol。",-1),O={class:"custom-container warning"},X=(0,e.Wm)("p",{class:"custom-container-title"},"注意",-1),R=(0,e.Uk)("若你正在 "),V={href:"https://docs.nginx.com/nginx/admin-guide/load-balancer/using-proxy-protocol/#configuring-nginx-to-accept-the-proxy-protocol",target:"_blank",rel:"noopener noreferrer"},Y=(0,e.Uk)("配置 Nginx 接收 PROXY protocol"),z=(0,e.Uk)("，除了设置 proxy_protocol 外，还需设置 set_real_ip_from，否则可能会出问题。"),B=(0,e.Wm)("h3",{id:"补充说明",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#补充说明","aria-hidden":"true"},"#"),(0,e.Uk)(" 补充说明")],-1),D=(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,"将匹配到最精确的子元素，与子元素的排列顺序无关。若配置了几个 alpn 和 path 均相同的子元素，则会以最后的为准。"),(0,e.Wm)("li",null,"回落分流均是解密后 TCP 层的转发，而不是 HTTP 层，只在必要时检查首包 PATH。"),(0,e.Wm)("li",null,[(0,e.Uk)("您可以查看更多的关于 Fallbacks 的使用技巧和心得 "),(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,[(0,e.Wm)("a",{href:"../documents/level-1/fallbacks-lv1"},"Fallbacks 功能简析")])])])],-1),G={id:"fallbacks-设计理论",tabindex:"-1"},J=(0,e.Wm)("a",{class:"header-anchor",href:"#fallbacks-设计理论","aria-hidden":"true"},"#",-1),K=(0,e.Uk)(" Fallbacks 设计理论 "),M={render:function(a,n){const l=(0,e.up)("RouterLink"),M=(0,e.up)("OutboundLink"),Q=(0,e.up)("Badge");return(0,e.wg)(),(0,e.j4)(e.HY,null,[s,(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,[o,(0,e.Wm)(l,{to:"/config/transport.html#tlsobject"},{default:(0,e.w5)((()=>[t])),_:1}),c,p,r])]),u,(0,e.Wm)("p",null,[d,i,k,b,m,(0,e.Wm)(l,{to:"/config/transport.html#tlsobject"},{default:(0,e.w5)((()=>[h])),_:1}),f,g,W]),q,(0,e.Wm)("ol",null,[U,(0,e.Wm)("li",null,[T,x,P,S,v,(0,e.Wm)("a",L,[y,(0,e.Wm)(M)]),j,w,F])]),N,_,(0,e.Wm)("p",null,[C,(0,e.Wm)("a",I,[A,(0,e.Wm)(M)]),E]),H,(0,e.Wm)("div",O,[X,(0,e.Wm)("p",null,[R,(0,e.Wm)("a",V,[Y,(0,e.Wm)(M)]),z])]),B,D,(0,e.Wm)("h2",G,[J,K,(0,e.Wm)(Q,{text:"WIP",type:"warning"})])],64)}}}}]);