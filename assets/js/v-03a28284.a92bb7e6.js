(self.webpackChunkXray_docs_next=self.webpackChunkXray_docs_next||[]).push([[7021],{9615:(t,n,s)=>{"use strict";s.r(n),s.d(n,{data:()=>a});const a={key:"v-03a28284",path:"/config/transports/h2.html",title:"HTTP/2",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"HttpObject",slug:"httpobject",children:[]}],filePathRelative:"config/transports/h2.md",git:{updatedTime:1616738467e3,contributors:[]}}},942:(t,n,s)=>{"use strict";s.r(n),s.d(n,{default:()=>e});const a=(0,s(6252).uE)('<h1 id="http-2" tabindex="-1"><a class="header-anchor" href="#http-2" aria-hidden="true">#</a> HTTP/2</h1><p>基于 HTTP/2 的传输方式。</p><p>它完整按照 HTTP/2 标准实现，可以通过其它的 HTTP 服务器（如 Nginx）进行中转。</p><p>由 HTTP/2 的建议，客户端和服务器必须同时开启 TLS 才可以正常使用这个传输方式。</p><p>HTTP/2 内置多路复用，不建议使用 HTTP/2 时启用 mux.cool。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>当前版本的 HTTP/2 的传输方式并不强制要求服务器端有 TLS 配置. 这使得可以在特殊用途的分流部署环境中，由外部网关组件完成 TLS 层对话，Xray 作为后端应用，网关和 Xray 间使用称为 <code>h2c</code> 的明文 http/2 进行通讯。</p></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>⚠️ 如果你正在使用回落，请注意下列事项：</p><ul><li>请确认 (x)tlsSettings.alpn 中包含 h2，否则 HTTP/2 无法完成 TLS 握手。</li><li>HTTP/2 无法通过进行 Path 分流，建议使用 SNI 分流。</li></ul></div><h2 id="httpobject" tabindex="-1"><a class="header-anchor" href="#httpobject" aria-hidden="true">#</a> HttpObject</h2><p><code>HttpObject</code> 对应传输配置的 <code>httpSettings</code> 项。</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;host&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;xray.com&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/random/path&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote><p><code>host</code>: [string]</p></blockquote><p>一个字符串数组，每一个元素是一个域名。</p><p>客户端会随机从列表中选出一个域名进行通信，服务器会验证域名是否在列表中。</p><blockquote><p><code>path</code> string</p></blockquote><p>HTTP 路径，由 <code>/</code> 开头, 客户端和服务器必须一致。</p><p>默认值为 <code>&quot;/&quot;</code>。</p>',16),e={render:function(t,n){return a}}}}]);