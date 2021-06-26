(self.webpackChunkXray_docs_next=self.webpackChunkXray_docs_next||[]).push([[9218],{4696:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-31b7756a",path:"/config/reverse.html",title:"反向代理",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"ReverseObject",slug:"reverseobject",children:[{level:3,title:"BridgeObject",slug:"bridgeobject",children:[]},{level:3,title:"PortalObject",slug:"portalobject",children:[]}]},{level:2,title:"完整配置样例",slug:"完整配置样例",children:[{level:3,title:"bridge 配置",slug:"bridge-配置",children:[]},{level:3,title:"portal 配置",slug:"portal-配置",children:[]}]}],filePathRelative:"config/reverse.md",git:{updatedTime:1617707135e3,contributors:[]}}},8154:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>w});var p=a(6252);const e=(0,p.uE)('<h1 id="反向代理" tabindex="-1"><a class="header-anchor" href="#反向代理" aria-hidden="true">#</a> 反向代理</h1><p>反向代理可以把服务器端的流量向客户端转发，即逆向流量转发。</p><p>反向代理的大致工作原理如下:</p><ul><li>假设在主机 A 中有一个网页服务器，这台主机没有公网 IP，无法在公网上直接访问。另有一台主机 B，它可以由公网访问。现在我们需要把 B 作为入口，把流量从 B 转发到 A。</li><li>在主机 A 中配置 Xray，称为<code>bridge</code>，在 B 中也配置 Xray，称为 <code>portal</code>。</li><li><code>bridge</code> 会向 <code>portal</code> 主动建立连接，此连接的目标地址可以自行设定。<code>portal</code> 会收到两种连接，一是由 <code>bridge</code> 发来的连接，二是公网用户发来的连接。<code>portal</code> 会自动将两类连接合并。于是 <code>bridge</code> 就可以收到公网流量了。</li><li><code>bridge</code> 在收到公网流量之后，会将其原封不动地发给主机 A 中的网页服务器。当然，这一步需要路由的协作。</li><li><code>bridge</code> 会根据流量的大小进行动态的负载均衡。</li></ul>',4),t={class:"custom-container tip"},o=(0,p.Wm)("p",{class:"custom-container-title"},"提示",-1),c=(0,p.Uk)("反向代理默认已开启 "),r=(0,p.Uk)("Mux"),l=(0,p.Uk)("，请不要在其用到的 outbound 上再次开启 Mux。"),u=(0,p.uE)('<div class="custom-container warning"><p class="custom-container-title">注意</p><p>反向代理功能尚处于测试阶段，可能会有一些问题。</p></div><h2 id="reverseobject" tabindex="-1"><a class="header-anchor" href="#reverseobject" aria-hidden="true">#</a> ReverseObject</h2><p><code>ReverseObject</code> 对应配置文件的 <code>reverse</code> 项。</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;reverse&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;bridges&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bridge&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;domain&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test.xray.com&quot;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;portals&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;portal&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;domain&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test.xray.com&quot;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><blockquote><p><code>bridges</code>: [<a href="#bridgeobject">BridgeObject</a>]</p></blockquote><p>数组，每一项表示一个 <code>bridge</code>。每个 <code>bridge</code> 的配置是一个 <a href="#bridgeobject">BridgeObject</a>。</p><blockquote><p><code>portals</code>: [<a href="#portalobject">PortalObject</a>]</p></blockquote><p>数组，每一项表示一个 <code>portal</code>。每个 <code>portal</code> 的配置是一个 <a href="#bridgeobject">PortalObject</a>。</p><h3 id="bridgeobject" tabindex="-1"><a class="header-anchor" href="#bridgeobject" aria-hidden="true">#</a> BridgeObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bridge&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;domain&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test.xray.com&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote><p><code>tag</code>: string</p></blockquote>',11),i=(0,p.Uk)("所有由 "),b=(0,p.Wm)("code",null,"bridge",-1),k=(0,p.Uk)(" 发出的连接，都会带有这个标识。可以在 "),d=(0,p.Uk)("路由配置"),m=(0,p.Uk)(" 中使用 "),q=(0,p.Wm)("code",null,"inboundTag",-1),g=(0,p.Uk)(" 进行识别。"),v=(0,p.uE)('<blockquote><p><code>domain</code>: string</p></blockquote><p>指定一个域名，<code>bridge</code> 向 <code>portal</code> 建立的连接，都会使用这个域名进行发送。 这个域名只作为 <code>bridge</code> 和 <code>portal</code> 的通信用途，不必真实存在。</p><h3 id="portalobject" tabindex="-1"><a class="header-anchor" href="#portalobject" aria-hidden="true">#</a> PortalObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;portal&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;domain&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test.xray.com&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote><p><code>tag</code>: string</p></blockquote>',5),y=(0,p.Wm)("code",null,"portal",-1),h=(0,p.Uk)(" 的标识。在 "),j=(0,p.Uk)("路由配置"),x=(0,p.Uk)(" 中使用 "),f=(0,p.Wm)("code",null,"outboundTag",-1),U=(0,p.Uk)(" 将流量转发到这个 "),W=(0,p.Wm)("code",null,"portal",-1),O=(0,p.Uk)("。"),T=(0,p.uE)('<blockquote><p><code>domain</code>: string</p></blockquote><p>一个域名。当 <code>portal</code> 接收到流量时，如果流量的目标域名是此域名，则 <code>portal</code> 认为当前连接上 <code>bridge</code> 发来的通信连接。而其它流量则会被当成需要转发的流量。<code>portal</code> 所做的工作就是把这两类连接进行识别并拼接。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>一个 Xray 既可以作为 <code>bridge</code>，也可以作为 <code>portal</code>，也可以同时两者，以适用于不同的场景需要。</p></div><h2 id="完整配置样例" tabindex="-1"><a class="header-anchor" href="#完整配置样例" aria-hidden="true">#</a> 完整配置样例</h2><div class="custom-container tip"><p class="custom-container-title">提示</p><p>在运行过程中，建议先启用 <code>bridge</code>，再启用 <code>portal</code>。</p></div><h3 id="bridge-配置" tabindex="-1"><a class="header-anchor" href="#bridge-配置" aria-hidden="true">#</a> bridge 配置</h3><p><code>bridge</code> 通常需要两个 outbound，一个用于连接 <code>portal</code>，另一个用于发送实际的流量。也就是说，你需要用路由区分两种流量。</p><p>反向代理配置:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;bridges&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bridge&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;domain&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test.xray.com&quot;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>outbound:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;out&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;freedom&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;redirect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1:80&quot;</span> <span class="token comment">// 将所有流量转发到网页服务器</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vmess&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;vnext&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;portal 的 IP 地址&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">1024</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;users&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5783a3e7-e373-51cd-8642-c83782b807c5&quot;</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">]</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;interconn&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>路由配置:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;inboundTag&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;bridge&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;domain&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;full:test.xray.com&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;interconn&quot;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;inboundTag&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;bridge&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;out&quot;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="portal-配置" tabindex="-1"><a class="header-anchor" href="#portal-配置" aria-hidden="true">#</a> portal 配置</h3><p><code>portal</code> 通常需要两个 inbound，一个用于接收 <code>bridge</code> 的连接，另一个用于接收实际的流量。同时你也需要用路由区分两种流量。</p><p>反向代理配置:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;portals&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;portal&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;domain&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test.xray.com&quot;</span> <span class="token comment">// 必须和 bridge 的配置一样</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>inbound:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;external&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dokodemo-door&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;network&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tcp&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">1024</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;interconn&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vmess&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;clients&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5783a3e7-e373-51cd-8642-c83782b807c5&quot;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>路由配置:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;inboundTag&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;external&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;portal&quot;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;inboundTag&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;interconn&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;portal&quot;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>',23),w={render:function(n,s){const a=(0,p.up)("RouterLink");return(0,p.wg)(),(0,p.j4)(p.HY,null,[e,(0,p.Wm)("div",t,[o,(0,p.Wm)("p",null,[c,(0,p.Wm)(a,{to:"/development/protocols/muxcool/"},{default:(0,p.w5)((()=>[r])),_:1}),l])]),u,(0,p.Wm)("p",null,[i,b,k,(0,p.Wm)(a,{to:"/config/routing.html"},{default:(0,p.w5)((()=>[d])),_:1}),m,q,g]),v,(0,p.Wm)("p",null,[y,h,(0,p.Wm)(a,{to:"/config/routing.html"},{default:(0,p.w5)((()=>[j])),_:1}),x,f,U,W,O]),T],64)}}}}]);