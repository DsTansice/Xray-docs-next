(self.webpackChunkXray_docs_next=self.webpackChunkXray_docs_next||[]).push([[1327],{2102:(t,e,l)=>{"use strict";l.r(e),l.d(e,{data:()=>i});const i={key:"v-1ee591a8",path:"/development/protocols/vmess.html",title:"VMess 协议",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"版本",slug:"版本",children:[]},{level:2,title:"依赖",slug:"依赖",children:[{level:3,title:"底层协议",slug:"底层协议",children:[]},{level:3,title:"用户 ID",slug:"用户-id",children:[]},{level:3,title:"函数",slug:"函数",children:[]}]},{level:2,title:"通讯过程",slug:"通讯过程",children:[]},{level:2,title:"客户端请求",slug:"客户端请求",children:[{level:3,title:"认证信息",slug:"认证信息",children:[]},{level:3,title:"指令部分",slug:"指令部分",children:[]},{level:3,title:"数据部分",slug:"数据部分",children:[]}]},{level:2,title:"服务器应答",slug:"服务器应答",children:[{level:3,title:"动态端口指令",slug:"动态端口指令",children:[]}]},{level:2,title:"注释",slug:"注释",children:[]}],filePathRelative:"development/protocols/vmess.md",git:{updatedTime:1618115805e3,contributors:[]}}},4195:(t,e,l)=>{"use strict";l.r(e),l.d(e,{default:()=>D});var i=l(6252);const a=(0,i.uE)('<h1 id="vmess-协议" tabindex="-1"><a class="header-anchor" href="#vmess-协议" aria-hidden="true">#</a> VMess 协议</h1><p>VMess 是一个加密传输协议，可以作为 Xray 客户端和服务器之间的桥梁。</p><h2 id="版本" tabindex="-1"><a class="header-anchor" href="#版本" aria-hidden="true">#</a> 版本</h2><p>当前版本号为 1。</p><h2 id="依赖" tabindex="-1"><a class="header-anchor" href="#依赖" aria-hidden="true">#</a> 依赖</h2><h3 id="底层协议" tabindex="-1"><a class="header-anchor" href="#底层协议" aria-hidden="true">#</a> 底层协议</h3><p>VMess 是一个基于 TCP 的协议，所有数据使用 TCP 传输。</p><h3 id="用户-id" tabindex="-1"><a class="header-anchor" href="#用户-id" aria-hidden="true">#</a> 用户 ID</h3>',8),n=(0,i.Uk)("ID 等价于 "),r={href:"https://en.wikipedia.org/wiki/Universally_unique_identifier",target:"_blank",rel:"noopener noreferrer"},d=(0,i.Uk)("UUID"),h=(0,i.Uk)("，是一个 16 字节长的随机数，它的作用相当于一个令牌（Token）。 一个 ID 形如：de305d54-75b4-431b-adb2-eb6b9e546014，几乎完全随机，可以使用任何的 UUID 生成器来生成，比如"),s={href:"https://www.uuidgenerator.net/",target:"_blank",rel:"noopener noreferrer"},u=(0,i.Uk)("这个"),c=(0,i.Uk)("。"),y=(0,i.Wm)("p",null,[(0,i.Uk)("用户 ID 可在"),(0,i.Wm)("a",{href:"../../config"},"配置文件"),(0,i.Uk)("中指定。")],-1),x=(0,i.Wm)("h3",{id:"函数",tabindex:"-1"},[(0,i.Wm)("a",{class:"header-anchor",href:"#函数","aria-hidden":"true"},"#"),(0,i.Uk)(" 函数")],-1),o=(0,i.Uk)("MD5: "),g={href:"https://en.wikipedia.org/wiki/MD5",target:"_blank",rel:"noopener noreferrer"},p=(0,i.Uk)("MD5 函数"),b=(0,i.Wm)("ul",null,[(0,i.Wm)("li",null,"输入参数为任意长度的 byte 数组"),(0,i.Wm)("li",null,"输出为一个 16 byte 的数组")],-1),k=(0,i.Uk)("HMAC: "),m={href:"https://en.wikipedia.org/wiki/Hash-based_message_authentication_code",target:"_blank",rel:"noopener noreferrer"},M=(0,i.Uk)("HMAC 函数"),f=(0,i.Wm)("ul",null,[(0,i.Wm)("li",null,[(0,i.Uk)("输入参数为： "),(0,i.Wm)("ul",null,[(0,i.Wm)("li",null,"H：散列函数"),(0,i.Wm)("li",null,"K：密钥，任意长度的 byte 数组"),(0,i.Wm)("li",null,"M：消息，任意长度的 byte 数组")])])],-1),V=(0,i.Uk)("Shake: "),W={href:"https://en.wikipedia.org/wiki/SHA-3",target:"_blank",rel:"noopener noreferrer"},I=(0,i.Uk)("SHA3-Shake128 函数"),C=(0,i.Wm)("ul",null,[(0,i.Wm)("li",null,"输入参数为任意长度的字符串"),(0,i.Wm)("li",null,"输出为任意长度的字符串")],-1),v=(0,i.uE)('<h2 id="通讯过程" tabindex="-1"><a class="header-anchor" href="#通讯过程" aria-hidden="true">#</a> 通讯过程</h2><p>VMess 是一个无状态协议，即客户端和服务器之间不需要握手即可直接传输数据，每一次数据传输对之前和之后的其它数据传输没有影响。</p><p>VMess 的客户端发起一次请求，服务器判断该请求是否来自一个合法的客户端。如验证通过，则转发该请求，并把获得的响应发回给客户端。</p><p>VMess 使用非对称格式，即客户端发出的请求和服务器端的响应使用了不同的格式。</p><h2 id="客户端请求" tabindex="-1"><a class="header-anchor" href="#客户端请求" aria-hidden="true">#</a> 客户端请求</h2><table><thead><tr><th>16 字节</th><th>X 字节</th><th>余下部分</th></tr></thead><tbody><tr><td>认证信息</td><td>指令部分</td><td>数据部分</td></tr></tbody></table><h3 id="认证信息" tabindex="-1"><a class="header-anchor" href="#认证信息" aria-hidden="true">#</a> 认证信息</h3><p>认证信息是一个 16 字节的哈希（hash）值，它的计算方式如下：</p><ul><li>H = MD5</li><li>K = 用户 ID (16 字节)</li><li>M = UTC 时间，精确到秒，取值为当前时间的前后 30 秒随机值(8 字节, Big Endian)</li><li>Hash = HMAC(H, K, M)</li></ul><h3 id="指令部分" tabindex="-1"><a class="header-anchor" href="#指令部分" aria-hidden="true">#</a> 指令部分</h3><p>指令部分经过 AES-128-CFB 加密：</p><ul><li>Key：MD5(用户 ID + []byte(&#39;c48619fe-8f02-49e0-b9e9-edf763e17e21&#39;))</li><li>IV：MD5(X + X + X + X)，X = []byte(认证信息生成的时间) (8 字节, Big Endian)</li></ul><table><thead><tr><th style="text-align:center;">1 字节</th><th style="text-align:center;">16 字节</th><th style="text-align:center;">16 字节</th><th style="text-align:center;">1 字节</th><th style="text-align:center;">1 字节</th><th style="text-align:center;">4 位</th><th style="text-align:center;">4 位</th><th style="text-align:center;">1 字节</th><th style="text-align:center;">1 字节</th><th style="text-align:center;">2 字节</th><th style="text-align:center;">1 字节</th><th style="text-align:center;">N 字节</th><th style="text-align:center;">P 字节</th><th style="text-align:center;">4 字节</th></tr></thead><tbody><tr><td style="text-align:center;">版本号 Ver</td><td style="text-align:center;">数据加密 IV</td><td style="text-align:center;">数据加密 Key</td><td style="text-align:center;">响应认证 V</td><td style="text-align:center;">选项 Opt</td><td style="text-align:center;">余量 P</td><td style="text-align:center;">加密方式 Sec</td><td style="text-align:center;">保留</td><td style="text-align:center;">指令 Cmd</td><td style="text-align:center;">端口 Port</td><td style="text-align:center;">地址类型 T</td><td style="text-align:center;">地址 A</td><td style="text-align:center;">随机值</td><td style="text-align:center;">校验 F</td></tr></tbody></table><p>选项 Opt 细节：（当某一位为 1 时，表示该选项启用）</p><table><thead><tr><th style="text-align:center;">0</th><th style="text-align:center;">1</th><th style="text-align:center;">2</th><th style="text-align:center;">3</th><th style="text-align:center;">4</th><th style="text-align:center;">5</th><th style="text-align:center;">6</th><th style="text-align:center;">7</th></tr></thead><tbody><tr><td style="text-align:center;">X</td><td style="text-align:center;">X</td><td style="text-align:center;">X</td><td style="text-align:center;">X</td><td style="text-align:center;">X</td><td style="text-align:center;">M</td><td style="text-align:center;">R</td><td style="text-align:center;">S</td></tr></tbody></table><p>其中：</p><ul><li>版本号 Ver：始终为 1；</li><li>数据加密 IV：随机值；</li><li>数据加密 Key：随机值；</li><li>响应认证 V：随机值；</li><li>选项 Opt： <ul><li>S (0x01)：标准格式的数据流（建议开启）；</li><li>R (0x02)：客户端期待重用 TCP 连接（Xray 2.23+ 弃用）； <ul><li>只有当 S 开启时，这一项才有效；</li></ul></li><li>M (0x04)：开启元数据混淆（建议开启）； <ul><li>只有当 S 开启时，这一项才有效；</li><li>当其项开启时，客户端和服务器端需要分别构造两个 Shake 实例，分别为 RequestMask = Shake(请求数据 IV), ResponseMask = Shake(响应数据 IV)。</li></ul></li><li>X：保留</li></ul></li><li>余量 P：在校验值之前加入 P 字节的随机值；</li><li>加密方式：指定数据部分的加密方式，可选的值有： <ul><li>0x00：AES-128-CFB；</li><li>0x01：不加密；</li><li>0x02：AES-128-GCM；</li><li>0x03：ChaCha20-Poly1305；</li></ul></li><li>指令 Cmd： <ul><li>0x01：TCP 数据；</li><li>0x02：UDP 数据；</li></ul></li><li>端口 Port：Big Endian 格式的整型端口号；</li><li>地址类型 T： <ul><li>0x01：IPv4</li><li>0x02：域名</li><li>0x03：IPv6</li></ul></li><li>地址 A： <ul><li>当 T = 0x01 时，A 为 4 字节 IPv4 地址；</li><li>当 T = 0x02 时，A 为 1 字节长度（L） + L 字节域名；</li><li>当 T = 0x03 时，A 为 16 字节 IPv6 地址；</li></ul></li><li>校验 F：指令部分除 F 外所有内容的 FNV1a hash；</li></ul><h3 id="数据部分" tabindex="-1"><a class="header-anchor" href="#数据部分" aria-hidden="true">#</a> 数据部分</h3><p>当 Opt(S) 开启时，数据部分使用此格式。实际的请求数据被分割为若干个小块，每个小块的格式如下。服务器校验完所有的小块之后，再按基本格式的方式进行转发。</p><table><thead><tr><th style="text-align:center;">2 字节</th><th style="text-align:center;">L 字节</th></tr></thead><tbody><tr><td style="text-align:center;">长度 L</td><td style="text-align:center;">数据包</td></tr></tbody></table><p>其中：</p><ul><li>长度 L：Big Endian 格式的整型，最大值为 2^14； <ul><li>当 Opt(M) 开启时，L 的值 = 真实值 xor Mask。Mask = (RequestMask.NextByte() &lt;&lt; 8) + RequestMask.NextByte()；</li></ul></li><li>数据包：由指定的加密方式加密过的数据包；</li></ul><p>在传输结束之前，数据包中必须有实际数据，即除了长度和认证数据之外的数据。当传输结束时，客户端必须发送一个空的数据包，即 L = 0（不加密） 或认证数据长度（有加密），来表示传输结束。</p><p>按加密方式不同，数据包的格式如下：</p><ul><li>不加密： <ul><li>L 字节：实际数据；</li></ul></li><li>AES-128-CFB：整个数据部分使用 AES-128-CFB 加密 <ul><li>4 字节：实际数据的 FNV1a hash；</li><li>L - 4 字节：实际数据；</li></ul></li><li>AES-128-GCM：Key 为指令部分的 Key，IV = count (2 字节) + IV (10 字节)。count 从 0 开始递增，每个数据包加 1；IV 为 指令部分 IV 的第 3 至第 12 字节。 <ul><li>L - 16 字节：实际数据；</li><li>16 字节：GCM 认证信息</li></ul></li><li>ChaCha20-Poly1305：Key = MD5(指令部分 Key) + MD5(MD5(指令部分 Key))，IV = count (2 字节) + IV (10 字节)。count 从 0 开始递增，每个数据包加 1；IV 为 指令部分 IV 的第 3 至第 12 字节。 <ul><li>L - 16 字节：实际数据；</li><li>16 字节：Poly1305 认证信息</li></ul></li></ul><h2 id="服务器应答" tabindex="-1"><a class="header-anchor" href="#服务器应答" aria-hidden="true">#</a> 服务器应答</h2><p>应答头部数据使用 AES-128-CFB 加密，IV 为 MD5(数据加密 IV)，Key 为 MD5(数据加密 Key)。实际应答数据视加密设置不同而不同。</p><table><thead><tr><th>1 字节</th><th>1 字节</th><th>1 字节</th><th>1 字节</th><th>M 字节</th><th>余下部分</th></tr></thead><tbody><tr><td>响应认证 V</td><td>选项 Opt</td><td>指令 Cmd</td><td>指令长度 M</td><td>指令内容</td><td>实际应答数据</td></tr></tbody></table><p>其中：</p><ul><li>响应认证 V：必须和客户端请求中的响应认证 V 一致；</li><li>选项 Opt： <ul><li>0x01：服务器端准备重用 TCP 连接（Xray 2.23+ 弃用）；</li></ul></li><li>指令 Cmd： <ul><li>0x01：动态端口指令</li></ul></li><li>实际应答数据： <ul><li>如果请求中的 Opt(S) 开启，则使用标准格式，否则使用基本格式。</li><li>格式均和请求数据相同。 <ul><li>当 Opt(M) 开启时，长度 L 的值 = 真实值 xor Mask。Mask = (ResponseMask.NextByte() &lt;&lt; 8) + ResponseMask.NextByte()；</li></ul></li></ul></li></ul><h3 id="动态端口指令" tabindex="-1"><a class="header-anchor" href="#动态端口指令" aria-hidden="true">#</a> 动态端口指令</h3><table><thead><tr><th>1 字节</th><th>2 字节</th><th>16 字节</th><th>2 字节</th><th>1 字节</th><th>1 字节</th></tr></thead><tbody><tr><td>保留</td><td>端口 Port</td><td>用户 ID</td><td>AlterID</td><td>用户等级</td><td>有效时间 T</td></tr></tbody></table><p>其中：</p><ul><li>端口 Port：Big Endian 格式的整型端口号；</li><li>有效时间 T：分钟数；</li></ul><p>客户端在收到动态端口指令时，服务器已开放新的端口用于通信，这时客户端可以将数据发往新的端口。在 T 分钟之后，这个端口将失效，客户端必须重新使用主端口进行通信。</p><h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h2><ul><li>为确保向前兼容性，所有保留字段的值必须为 0。</li></ul>',37),D={render:function(t,e){const l=(0,i.up)("OutboundLink");return(0,i.wg)(),(0,i.j4)(i.HY,null,[a,(0,i.Wm)("p",null,[n,(0,i.Wm)("a",r,[d,(0,i.Wm)(l)]),h,(0,i.Wm)("a",s,[u,(0,i.Wm)(l)]),c]),y,x,(0,i.Wm)("ul",null,[(0,i.Wm)("li",null,[o,(0,i.Wm)("a",g,[p,(0,i.Wm)(l)]),b]),(0,i.Wm)("li",null,[k,(0,i.Wm)("a",m,[M,(0,i.Wm)(l)]),f]),(0,i.Wm)("li",null,[V,(0,i.Wm)("a",W,[I,(0,i.Wm)(l)]),C])]),v],64)}}}}]);