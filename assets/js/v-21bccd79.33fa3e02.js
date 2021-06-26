(self.webpackChunkXray_docs_next=self.webpackChunkXray_docs_next||[]).push([[8444],{2726:(t,e,l)=>{"use strict";l.r(e),l.d(e,{data:()=>d});const d={key:"v-21bccd79",path:"/en/development/protocols/mkcp.html",title:"mKCP 协议",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"版本",slug:"版本",children:[]},{level:2,title:"依赖",slug:"依赖",children:[{level:3,title:"底层协议",slug:"底层协议",children:[]},{level:3,title:"函数",slug:"函数",children:[]}]},{level:2,title:"通讯过程",slug:"通讯过程",children:[]},{level:2,title:"数据格式",slug:"数据格式",children:[{level:3,title:"数据包",slug:"数据包",children:[]},{level:3,title:"数据片段",slug:"数据片段",children:[]},{level:3,title:"确认片段",slug:"确认片段",children:[]},{level:3,title:"心跳片段",slug:"心跳片段",children:[]}]}],filePathRelative:"en/development/protocols/mkcp.md",git:{updatedTime:1622027153e3,contributors:[]}}},1416:(t,e,l)=>{"use strict";l.r(e),l.d(e,{default:()=>C});var d=l(6252);const i=(0,d.Wm)("h1",{id:"mkcp-协议",tabindex:"-1"},[(0,d.Wm)("a",{class:"header-anchor",href:"#mkcp-协议","aria-hidden":"true"},"#"),(0,d.Uk)(" mKCP 协议")],-1),h=(0,d.Uk)("mKCP 是流式传输协议，由 "),a={href:"https://github.com/skywind3000/kcp",target:"_blank",rel:"noopener noreferrer"},n=(0,d.Uk)("KCP 协议"),r=(0,d.Uk)(" 修改而来，可以按顺序传输任意的数据流。"),u=(0,d.uE)('<h2 id="版本" tabindex="-1"><a class="header-anchor" href="#版本" aria-hidden="true">#</a> 版本</h2><p>mKCP 没有版本号，不保证版本之间兼容性。</p><h2 id="依赖" tabindex="-1"><a class="header-anchor" href="#依赖" aria-hidden="true">#</a> 依赖</h2><h3 id="底层协议" tabindex="-1"><a class="header-anchor" href="#底层协议" aria-hidden="true">#</a> 底层协议</h3><p>mKCP 是一个基于 UDP 的协议，所有通讯使用 UDP 传输。</p><h3 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h3>',6),o=(0,d.Uk)("fnv: "),s={href:"https://en.wikipedia.org/wiki/Fowler%E2%80%93Noll%E2%80%93Vo_hash_function",target:"_blank",rel:"noopener noreferrer"},c=(0,d.Uk)("FNV-1a"),p=(0,d.Uk)(" 哈希函数 "),m=(0,d.Wm)("ul",null,[(0,d.Wm)("li",null,"输入参数为任意长度的字符串；"),(0,d.Wm)("li",null,"输入出一个 32 位无符号整数；")],-1),b=(0,d.uE)('<h2 id="通讯过程" tabindex="-1"><a class="header-anchor" href="#通讯过程" aria-hidden="true">#</a> 通讯过程</h2><ol><li>mKCP 将数据流拆成若干个数据包进行发送。一个数据流有一个唯一标识，用以区分不同的数据流。数据流中的每一个数据包都携带了同样的标识。</li><li>mKCP 没有握手过程，当收到一个数据包时，根据其携带的数据流的标识来判断是否为新的通话，或是正在进行中的通话。</li><li>每一个数据包中包含若干个片段（Segment），片段分为三类：数据（Data）、确认（ACK）、心跳（Ping）。每个片段需要单独处理。</li></ol><h2 id="数据格式" tabindex="-1"><a class="header-anchor" href="#数据格式" aria-hidden="true">#</a> 数据格式</h2><h3 id="数据包" tabindex="-1"><a class="header-anchor" href="#数据包" aria-hidden="true">#</a> 数据包</h3><table><thead><tr><th>4 字节</th><th>2 字节</th><th>L 字节</th></tr></thead><tbody><tr><td>认证信息 A</td><td>数据长度 L</td><td>片段部分</td></tr></tbody></table><p>其中：</p><ul><li>认证信息 A = fnv(片段部分），big endian；</li><li>片段部分可能包含多个片段；</li></ul><h3 id="数据片段" tabindex="-1"><a class="header-anchor" href="#数据片段" aria-hidden="true">#</a> 数据片段</h3><table><thead><tr><th>2 字节</th><th>1 字节</th><th>1 字节</th><th>4 字节</th><th>4 字节</th><th>4 字节</th><th>2 字节</th><th>Len 字节</th></tr></thead><tbody><tr><td>标识 Conv</td><td>指令 Cmd</td><td>选项 Opt</td><td>时间戳 Ts</td><td>序列号 Sn</td><td>未确认序列号 Una</td><td>长度 Len</td><td>数据</td></tr></tbody></table><p>其中：</p><ul><li>标识 Conv: mKCP 数据流的标识</li><li>指令 Cmd: 常量 0x01</li><li>选项 Opt: 可选的值有： <ul><li>0x00: 空选项</li><li>0x01: 对方已发出所有数据</li></ul></li><li>时间戳 Ts: 当前片段从远端发送出来时的时间，big endian</li><li>序列号 Sn: 该数据片段时数据流中的位置，起始片段的序列号为 0，之后每个新片段按顺序加 1</li><li>未确认序列号 Una: 远端主机正在发送的，且尚未收到确认的最小的 Sn</li></ul><h3 id="确认片段" tabindex="-1"><a class="header-anchor" href="#确认片段" aria-hidden="true">#</a> 确认片段</h3><table><thead><tr><th>2 字节</th><th>1 字节</th><th>1 字节</th><th>4 字节</th><th>4 字节</th><th>4 字节</th><th>2 字节</th><th>Len * 4 字节</th></tr></thead><tbody><tr><td>标识 Conv</td><td>指令 Cmd</td><td>选项 Opt</td><td>窗口 Wnd</td><td>下一接收序列号 Sn</td><td>时间戳 Ts</td><td>长度 Len</td><td>已收到的序列号</td></tr></tbody></table><p>其中：</p><ul><li>标识 Conv: mKCP 数据流的标识</li><li>指令 Cmd: 常量 0x00</li><li>选项 Opt: 同上</li><li>窗口 Wnd: 远端主机可以接收的最大序列号</li><li>下一接收序列号 Sn: 远端主机未收到的数据片段中的最小序列号</li><li>时间戳 Ts: 远端主机最新收到的数据片段的时间戳，可用于计算延迟</li><li>已收到的序列号: 每个 4 字节，表示此序列号的数据已经确认收到</li></ul><p>注释：</p><ul><li>远程主机期待收到序列号 [Sn, Wnd) 范围内的数据</li></ul><h3 id="心跳片段" tabindex="-1"><a class="header-anchor" href="#心跳片段" aria-hidden="true">#</a> 心跳片段</h3><table><thead><tr><th>2 字节</th><th>1 字节</th><th>1 字节</th><th>4 字节</th><th>4 字节</th><th>4 字节</th></tr></thead><tbody><tr><td>标识 Conv</td><td>指令 Cmd</td><td>选项 Opt</td><td>未确认序列号 Una</td><td>下一接收序列号 Sn</td><td>延迟 Rto</td></tr></tbody></table><p>其中：</p><ul><li>标识 Conv: mKCP 数据流的标识</li><li>指令 Cmd: 可选的值有 <ul><li>0x02: 远端主机强行终止会话</li><li>0x03: 正常心跳</li></ul></li><li>选项 Opt: 同上</li><li>未确认序列号 Una: 同数据片段的 Una</li><li>下一接收序列号 Sn: 同确认片段的 Sn</li><li>延迟 Rto: 远端主机自己计算出的延迟</li></ul>',21),C={render:function(t,e){const l=(0,d.up)("OutboundLink");return(0,d.wg)(),(0,d.j4)(d.HY,null,[i,(0,d.Wm)("p",null,[h,(0,d.Wm)("a",a,[n,(0,d.Wm)(l)]),r]),u,(0,d.Wm)("ul",null,[(0,d.Wm)("li",null,[o,(0,d.Wm)("a",s,[c,(0,d.Wm)(l)]),p,m])]),b],64)}}}}]);