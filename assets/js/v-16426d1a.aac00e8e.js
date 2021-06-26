(self.webpackChunkXray_docs_next=self.webpackChunkXray_docs_next||[]).push([[3446],{3002:(t,e,a)=>{"use strict";a.r(e),a.d(e,{data:()=>n});const n={key:"v-16426d1a",path:"/en/config/stats.html",title:"统计信息",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"StatsObject",slug:"statsobject",children:[]},{level:2,title:"获取统计信息",slug:"获取统计信息",children:[]}],filePathRelative:"en/config/stats.md",git:{updatedTime:1622027153e3,contributors:[]}}},7869:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>o});var n=a(6252);const s=(0,n.uE)('<h1 id="统计信息" tabindex="-1"><a class="header-anchor" href="#统计信息" aria-hidden="true">#</a> 统计信息</h1><p>用于配置 Xray 流量数据的统计。</p><h2 id="statsobject" tabindex="-1"><a class="header-anchor" href="#statsobject" aria-hidden="true">#</a> StatsObject</h2><p><code>StatsObject</code> 对应配置文件的 <code>stats</code> 项。</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;stats&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>目前统计信息不需要任何参数，只要 <code>StatsObject</code> 项存在，内部的统计即会开启。</p>',6),i=(0,n.Uk)("开启了统计以后, 只需在 "),l=(0,n.Uk)("Policy"),p=(0,n.Uk)(" 中开启对应的项，就可以统计对应的数据。"),c=(0,n.uE)('<h2 id="获取统计信息" tabindex="-1"><a class="header-anchor" href="#获取统计信息" aria-hidden="true">#</a> 获取统计信息</h2><p>可以用 <code>xray api</code> 的相关命令获取统计信息.</p><p>目前已有的统计信息如下：</p><ul><li><p>用户数据</p><ul><li><p><code>user&gt;&gt;&gt;[email]&gt;&gt;&gt;traffic&gt;&gt;&gt;uplink</code></p><p>特定用户的上行流量，单位字节。</p></li><li><p><code>user&gt;&gt;&gt;[email]&gt;&gt;&gt;traffic&gt;&gt;&gt;downlink</code></p><p>特定用户的下行流量，单位字节。</p></li></ul></li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>如果对应用户没有指定 Email，则不会开启统计。</p></div><ul><li><p>全局数据</p><ul><li><p><code>inbound&gt;&gt;&gt;[tag]&gt;&gt;&gt;traffic&gt;&gt;&gt;uplink</code></p><p>特定 inbound 的上行流量，单位字节。</p></li><li><p><code>inbound&gt;&gt;&gt;[tag]&gt;&gt;&gt;traffic&gt;&gt;&gt;downlink</code></p><p>特定 inbound 的下行流量，单位字节。</p></li><li><p><code>outbound&gt;&gt;&gt;[tag]&gt;&gt;&gt;traffic&gt;&gt;&gt;uplink</code></p><p>特定 outbound 的上行流量，单位字节。</p></li><li><p><code>outbound&gt;&gt;&gt;[tag]&gt;&gt;&gt;traffic&gt;&gt;&gt;downlink</code></p><p>特定 outbound 的下行流量，单位字节。</p></li></ul></li></ul>',6),o={render:function(t,e){const a=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.j4)(n.HY,null,[s,(0,n.Wm)("p",null,[i,(0,n.Wm)(a,{to:"/en/config/policy.html"},{default:(0,n.w5)((()=>[l])),_:1}),p]),c],64)}}}}]);