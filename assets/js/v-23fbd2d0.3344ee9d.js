(self.webpackChunkXray_docs_next=self.webpackChunkXray_docs_next||[]).push([[6907],{4426:(n,l,s)=>{"use strict";s.r(l),s.d(l,{data:()=>e});const e={key:"v-23fbd2d0",path:"/en/config/dns.html",title:"内置 DNS 服务器",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"DNS 服务器",slug:"dns-服务器",children:[]},{level:2,title:"DNS 处理流程",slug:"dns-处理流程",children:[]},{level:2,title:"DnsObject",slug:"dnsobject",children:[{level:3,title:"ServerObject",slug:"serverobject",children:[]}]}],filePathRelative:"en/config/dns.md",git:{updatedTime:1622027153e3,contributors:[]}}},526:(n,l,s)=>{"use strict";s.r(l),s.d(l,{default:()=>Sn});var e=s(6252);const a=s.p+"assets/img/dns_flow.d7096573.png",o=(0,e.Wm)("h1",{id:"内置-dns-服务器",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#内置-dns-服务器","aria-hidden":"true"},"#"),(0,e.Uk)(" 内置 DNS 服务器")],-1),t=(0,e.Wm)("h2",{id:"dns-服务器",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#dns-服务器","aria-hidden":"true"},"#"),(0,e.Uk)(" DNS 服务器")],-1),m=(0,e.Wm)("p",null,"Xray 内置的 DNS 模块，主要有两大用途：",-1),c=(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Uk)("在路由阶段, 解析域名为 IP, 并且根据域名解析得到的 IP 进行规则匹配以分流. 是否解析域名及分流和路由配置模块中 "),(0,e.Wm)("code",null,"domainStrategy"),(0,e.Uk)(" 的值有关, 只有在设置以下两种值时,才会使用内置 DNS 服务器进行 DNS 查询:")]),(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,'"IPIfNonMatch", 请求一个域名时，进行路由里面的 domain 进行匹配，若无法匹配到结果，则对这个域名使用内置 DNS 服务器进行 DNS 查询，并且使用查询返回的 IP 地址再重新进行 IP 路由匹配。'),(0,e.Wm)("li",null,'"IPOnDemand", 当匹配时碰到任何基于 IP 的规则，将域名立即解析为 IP 进行匹配。')])]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,"解析目标地址进行连接。"),(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,[(0,e.Uk)("如 在 "),(0,e.Wm)("code",null,"freedom"),(0,e.Uk)(" 出站中，将 "),(0,e.Wm)("code",null,"domainStrategy"),(0,e.Uk)(" 设置为 "),(0,e.Wm)("code",null,"UseIP"),(0,e.Uk)(", 由此出站发出的请求, 会先将域名通过内置服务器解析成 IP, 然后进行连接。")]),(0,e.Wm)("li",null,[(0,e.Uk)("如 在 "),(0,e.Wm)("code",null,"sockopt"),(0,e.Uk)(" 中，将 "),(0,e.Wm)("code",null,"domainStrategy"),(0,e.Uk)(" 设置为 "),(0,e.Wm)("code",null,"UseIP"),(0,e.Uk)(", 此出站发起的系统连接，将先由内置服务器解析为 IP, 然后进行连接。")])])])],-1),u=(0,e.Wm)("div",{class:"custom-container tip"},[(0,e.Wm)("p",{class:"custom-container-title"},"TIP 1"),(0,e.Wm)("p",null,"内置 DNS 服务器所发出的 DNS 查询请求，会自动根据路由配置进行转发。")],-1),W=(0,e.Wm)("div",{class:"custom-container tip"},[(0,e.Wm)("p",{class:"custom-container-title"},"TIP 2"),(0,e.Wm)("p",null,"只支持最基本的 IP 查询（A 和 AAAA 记录）。其他查询不会进入内置 DNS 服务器。")],-1),r=(0,e.Wm)("h2",{id:"dns-处理流程",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#dns-处理流程","aria-hidden":"true"},"#"),(0,e.Uk)(" DNS 处理流程")],-1),p=(0,e.Wm)("p",null,"DNS 服务器配置模块可以配置多个 DNS 服务器, 并且指定优先匹配列表.",-1),k=(0,e.Wm)("ol",null,[(0,e.Wm)("li",null,"查询的域名与某个 DNS 服务器指定的域名列表匹配时，Xray 会优先使用这个 DNS 服务器进行查询。"),(0,e.Wm)("li",null,"无匹配时, 按从上往下的顺序进行查询，并且会跳过 1 步骤中使用的最后一个服务器。"),(0,e.Wm)("li",null,"只返回匹配 expectIPs 的 IP 列表。")],-1),i=(0,e.Wm)("p",null,"DNS 服务器的处理流程示意图如下：",-1),d=(0,e.Wm)("p",null,[(0,e.Wm)("img",{src:a,alt:""})],-1),U=(0,e.Wm)("h2",{id:"dnsobject",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#dnsobject","aria-hidden":"true"},"#"),(0,e.Uk)(" DnsObject")],-1),b=(0,e.Wm)("p",null,[(0,e.Wm)("code",null,"DnsObject"),(0,e.Uk)(" 对应配置文件的 "),(0,e.Wm)("code",null,"dns"),(0,e.Uk)(" 项。")],-1),g=(0,e.Wm)("div",{class:"language-json ext-json line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-json"},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n  "),(0,e.Wm)("span",{class:"token property"},'"dns"'),(0,e.Wm)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n    "),(0,e.Wm)("span",{class:"token property"},'"hosts"'),(0,e.Wm)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n      "),(0,e.Wm)("span",{class:"token property"},'"baidu.com"'),(0,e.Wm)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token string"},'"127.0.0.1"'),(0,e.Uk)("\n    "),(0,e.Wm)("span",{class:"token punctuation"},"}"),(0,e.Wm)("span",{class:"token punctuation"},","),(0,e.Uk)("\n    "),(0,e.Wm)("span",{class:"token property"},'"servers"'),(0,e.Wm)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"["),(0,e.Uk)("\n      "),(0,e.Wm)("span",{class:"token string"},'"8.8.8.8"'),(0,e.Wm)("span",{class:"token punctuation"},","),(0,e.Uk)("\n      "),(0,e.Wm)("span",{class:"token string"},'"8.8.4.4"'),(0,e.Wm)("span",{class:"token punctuation"},","),(0,e.Uk)("\n      "),(0,e.Wm)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n        "),(0,e.Wm)("span",{class:"token property"},'"address"'),(0,e.Wm)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token string"},'"1.2.3.4"'),(0,e.Wm)("span",{class:"token punctuation"},","),(0,e.Uk)("\n        "),(0,e.Wm)("span",{class:"token property"},'"port"'),(0,e.Wm)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token number"},"5353"),(0,e.Wm)("span",{class:"token punctuation"},","),(0,e.Uk)("\n        "),(0,e.Wm)("span",{class:"token property"},'"domains"'),(0,e.Wm)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"["),(0,e.Wm)("span",{class:"token string"},'"domain:xray.com"'),(0,e.Wm)("span",{class:"token punctuation"},"]"),(0,e.Wm)("span",{class:"token punctuation"},","),(0,e.Uk)("\n        "),(0,e.Wm)("span",{class:"token property"},'"expectIPs"'),(0,e.Wm)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"["),(0,e.Wm)("span",{class:"token string"},'"geoip:cn"'),(0,e.Wm)("span",{class:"token punctuation"},"]"),(0,e.Uk)("\n      "),(0,e.Wm)("span",{class:"token punctuation"},"}"),(0,e.Wm)("span",{class:"token punctuation"},","),(0,e.Uk)("\n      "),(0,e.Wm)("span",{class:"token string"},'"localhost"'),(0,e.Uk)("\n    "),(0,e.Wm)("span",{class:"token punctuation"},"]"),(0,e.Wm)("span",{class:"token punctuation"},","),(0,e.Uk)("\n    "),(0,e.Wm)("span",{class:"token property"},'"clientIp"'),(0,e.Wm)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token string"},'"1.2.3.4"'),(0,e.Wm)("span",{class:"token punctuation"},","),(0,e.Uk)("\n    "),(0,e.Wm)("span",{class:"token property"},'"tag"'),(0,e.Wm)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token string"},'"dns_inbound"'),(0,e.Uk)("\n  "),(0,e.Wm)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n"),(0,e.Wm)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"2"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"3"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"4"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"5"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"6"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"7"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"8"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"9"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"10"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"11"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"12"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"13"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"14"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"15"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"16"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"17"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"18"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"19"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"20"),(0,e.Wm)("br")])],-1),h=(0,e.Wm)("blockquote",null,[(0,e.Wm)("p",null,[(0,e.Wm)("code",null,"hosts"),(0,e.Uk)(": map{string: address}")])],-1),y=(0,e.Wm)("p",null,'静态 IP 列表，其值为一系列的 "域名": "地址"。其中地址可以是 IP 或者域名。在解析域名时，如果域名匹配这个列表中的某一项:',-1),D=(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,"当该项的地址为 IP 时，则解析结果为该项的 IP"),(0,e.Wm)("li",null,"当该项的地址为域名时，会使用此域名进行 IP 解析，而不使用原始域名。")],-1),S=(0,e.Wm)("p",null,"域名的格式有以下几种形式：",-1),I=(0,e.Wm)("li",null,'纯字符串：当此字符串完整匹配目标域名时，该规则生效。例如 "xray.com" 匹配 "xray.com"，但不匹配 "www.xray.com"。',-1),N=(0,e.Wm)("li",null,[(0,e.Uk)("正则表达式：由 "),(0,e.Wm)("code",null,'"regexp:"'),(0,e.Uk)(' 开始，余下部分是一个正则表达式。当此正则表达式匹配目标域名时，该规则生效。例如 "regexp:\\\\.goo.*\\\\.com$" 匹配 "www.google.com"、"fonts.googleapis.com"，但不匹配 "google.com"。')],-1),P=(0,e.Wm)("li",null,[(0,e.Uk)("子域名 (推荐)：由 "),(0,e.Wm)("code",null,'"domain:"'),(0,e.Uk)(' 开始，余下部分是一个域名。当此域名是目标域名或其子域名时，该规则生效。例如 "domain:xray.com" 匹配 "www.xray.com" 与 "xray.com"，但不匹配 "wxray.com"。')],-1),f=(0,e.Wm)("li",null,[(0,e.Uk)("子串：由 "),(0,e.Wm)("code",null,'"keyword:"'),(0,e.Uk)(' 开始，余下部分是一个字符串。当此字符串匹配目标域名中任意部分，该规则生效。比如 "keyword:sina.com" 可以匹配 "sina.com"、"sina.com.cn" 和 "www.sina.com"，但不匹配 "sina.cn"。')],-1),v=(0,e.Uk)("预定义域名列表：由 "),x=(0,e.Wm)("code",null,'"geosite:"',-1),j=(0,e.Uk)(" 开头，余下部分是一个名称，如 "),w=(0,e.Wm)("code",null,"geosite:google",-1),O=(0,e.Uk)(" 或者 "),q=(0,e.Wm)("code",null,"geosite:cn",-1),X=(0,e.Uk)("。名称及域名列表参考 "),H=(0,e.Uk)("预定义域名列表"),T=(0,e.Uk)("。"),_=(0,e.Wm)("blockquote",null,[(0,e.Wm)("p",null,[(0,e.Wm)("code",null,"servers"),(0,e.Uk)(": [string | "),(0,e.Wm)("a",{href:"#serverobject"},"ServerObject"),(0,e.Uk)(" ]")])],-1),A=(0,e.Wm)("p",null,[(0,e.Uk)("一个 DNS 服务器列表，支持的类型有两种：DNS 地址（字符串形式）和 "),(0,e.Wm)("a",{href:"#serverobject"},"ServerObject"),(0,e.Uk)(" 。")],-1),E=(0,e.Wm)("p",null,[(0,e.Uk)("当它的值是一个 DNS IP 地址时，如 "),(0,e.Wm)("code",null,'"8.8.8.8"'),(0,e.Uk)("，Xray 会使用此地址的 53 端口进行 DNS 查询。")],-1),R=(0,e.Wm)("p",null,[(0,e.Uk)("当值为 "),(0,e.Wm)("code",null,'"localhost"'),(0,e.Uk)(" 时，表示使用本机预设的 DNS 配置。")],-1),F=(0,e.Wm)("p",null,[(0,e.Uk)("当值是 "),(0,e.Wm)("code",null,'"https://host:port/dns-query"'),(0,e.Uk)(" 的形式，如 "),(0,e.Wm)("code",null,'"https://dns.google/dns-query"'),(0,e.Uk)("，Xray 会使用 "),(0,e.Wm)("code",null,"DNS over HTTPS"),(0,e.Uk)(" (RFC8484, 简称 DOH) 进行查询。有些服务商拥有 IP 别名的证书，可以直接写 IP 形式，比如 "),(0,e.Wm)("code",null,"https://1.1.1.1/dns-query"),(0,e.Uk)("。也可使用非标准端口和路径，如 "),(0,e.Wm)("code",null,'"https://a.b.c.d:8443/my-dns-query"')],-1),C=(0,e.Wm)("p",null,[(0,e.Uk)("当值是 "),(0,e.Wm)("code",null,'"https+local://host:port/dns-query"'),(0,e.Uk)(" 的形式，如 "),(0,e.Wm)("code",null,'"https+local://dns.google/dns-query"'),(0,e.Uk)("，Xray 会使用 "),(0,e.Wm)("code",null,"DOH本地模式"),(0,e.Uk)(" 进行查询，即 DOH 请求不会经过 Routing/Outbound 等组件，直接对外请求，以降低耗时。一般适合在服务端使用。也可使用非标端口和路径。")],-1),L=(0,e.Wm)("p",null,[(0,e.Uk)("当值是 "),(0,e.Wm)("code",null,"fakedns"),(0,e.Uk)(" 时，将使用 FakeDNS 功能进行查询。")],-1),B=(0,e.Wm)("div",{class:"custom-container tip"},[(0,e.Wm)("p",{class:"custom-container-title"},"TIP 1"),(0,e.Wm)("p",null,[(0,e.Uk)("当使用 "),(0,e.Wm)("code",null,"localhost"),(0,e.Uk)(" 时，本机的 DNS 请求不受 Xray 控制，需要额外的配置才可以使 DNS 请求由 Xray 转发。")])],-1),M=(0,e.Wm)("div",{class:"custom-container tip"},[(0,e.Wm)("p",{class:"custom-container-title"},"TIP 2"),(0,e.Wm)("p",null,[(0,e.Uk)("不同规则初始化得到的 DNS 客户端会在 Xray 启动日志中以 "),(0,e.Wm)("code",null,"info"),(0,e.Uk)(" 级别体现，比如 "),(0,e.Wm)("code",null,"local DOH"),(0,e.Uk)("、"),(0,e.Wm)("code",null,"remote DOH"),(0,e.Uk)(" 和 "),(0,e.Wm)("code",null,"udp"),(0,e.Uk)(" 等模式。")])],-1),Y={class:"custom-container tip"},$=(0,e.Wm)("p",{class:"custom-container-title"},"TIP 3",-1),z=(0,e.Uk)("(v1.4.0+) 可以在 "),G=(0,e.Uk)("日志"),J=(0,e.Uk)(" 中打开 DNS 查询日志。"),K=(0,e.Wm)("blockquote",null,[(0,e.Wm)("p",null,[(0,e.Wm)("code",null,"clientIp"),(0,e.Uk)(": string")])],-1),Q=(0,e.Wm)("p",null,"用于 DNS 查询时通知服务器以指定 IP 位置。不能是私有地址。",-1),V=(0,e.Wm)("blockquote",null,[(0,e.Wm)("p",null,[(0,e.Wm)("code",null,"tag"),(0,e.Uk)(": string")])],-1),Z=(0,e.Wm)("p",null,[(0,e.Uk)("由内置 DNS 发出的查询流量，除 "),(0,e.Wm)("code",null,"localhost"),(0,e.Uk)(" 和 "),(0,e.Wm)("code",null,"DOHL_"),(0,e.Uk)(" 模式外，都可以用此标识在路由使用 "),(0,e.Wm)("code",null,"inboundTag"),(0,e.Uk)(" 进行匹配。")],-1),nn=(0,e.Wm)("h3",{id:"serverobject",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#serverobject","aria-hidden":"true"},"#"),(0,e.Uk)(" ServerObject")],-1),ln=(0,e.Wm)("div",{class:"language-json ext-json line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-json"},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n  "),(0,e.Wm)("span",{class:"token property"},'"address"'),(0,e.Wm)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token string"},'"1.2.3.4"'),(0,e.Wm)("span",{class:"token punctuation"},","),(0,e.Uk)("\n  "),(0,e.Wm)("span",{class:"token property"},'"port"'),(0,e.Wm)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token number"},"5353"),(0,e.Wm)("span",{class:"token punctuation"},","),(0,e.Uk)("\n  "),(0,e.Wm)("span",{class:"token property"},'"domains"'),(0,e.Wm)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"["),(0,e.Wm)("span",{class:"token string"},'"domain:xray.com"'),(0,e.Wm)("span",{class:"token punctuation"},"]"),(0,e.Wm)("span",{class:"token punctuation"},","),(0,e.Uk)("\n  "),(0,e.Wm)("span",{class:"token property"},'"expectIPs"'),(0,e.Wm)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"["),(0,e.Wm)("span",{class:"token string"},'"geoip:cn"'),(0,e.Wm)("span",{class:"token punctuation"},"]"),(0,e.Uk)("\n"),(0,e.Wm)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"2"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"3"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"4"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"5"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"6"),(0,e.Wm)("br")])],-1),sn=(0,e.Wm)("blockquote",null,[(0,e.Wm)("p",null,[(0,e.Wm)("code",null,"address"),(0,e.Uk)(": address")])],-1),en=(0,e.Wm)("p",null,"一个 DNS 服务器列表，支持的类型有两种：DNS 地址（字符串形式）和 ServerObject 。",-1),an=(0,e.Wm)("p",null,'当它的值是一个 DNS IP 地址时，如 "8.8.8.8"，Xray 会使用此地址的 53 端口进行 DNS 查询。',-1),on=(0,e.Wm)("p",null,'当值为 "localhost" 时，表示使用本机预设的 DNS 配置。',-1),tn=(0,e.Wm)("p",null,[(0,e.Uk)("当值是 "),(0,e.Wm)("code",null,'"https://host:port/dns-query"'),(0,e.Uk)(" 的形式，如 "),(0,e.Wm)("code",null,'"https://dns.google/dns-query"'),(0,e.Uk)("，Xray 会使用 "),(0,e.Wm)("code",null,"DNS over HTTPS"),(0,e.Uk)(" (RFC8484, 简称 DOH) 进行查询。有些服务商拥有 IP 别名的证书，可以直接写 IP 形式，比如 "),(0,e.Wm)("code",null,"https://1.1.1.1/dns-query"),(0,e.Uk)("。也可使用非标准端口和路径，如 "),(0,e.Wm)("code",null,'"https://a.b.c.d:8443/my-dns-query"')],-1),mn=(0,e.Wm)("p",null,[(0,e.Uk)("当值是 "),(0,e.Wm)("code",null,'"https+local://host:port/dns-query"'),(0,e.Uk)(" 的形式，如 "),(0,e.Wm)("code",null,'"https+local://dns.google/dns-query"'),(0,e.Uk)("，Xray 会使用 DOH 本地模式 进行查询，即 DOH 请求不会经过 Routing/Outbound 等组件，直接对外请求，以降低耗时。一般适合在服务端使用。也可使用非标端口和路径。")],-1),cn=(0,e.Wm)("p",null,[(0,e.Uk)("当值是 "),(0,e.Wm)("code",null,"fakedns"),(0,e.Uk)(" 时，将使用 FakeDNS 功能进行查询。")],-1),un=(0,e.Wm)("blockquote",null,[(0,e.Wm)("p",null,[(0,e.Wm)("code",null,"port"),(0,e.Uk)(": number")])],-1),Wn=(0,e.Wm)("p",null,[(0,e.Uk)("DNS 服务器端口，如 "),(0,e.Wm)("code",null,"53"),(0,e.Uk)("。此项缺省时默认为 "),(0,e.Wm)("code",null,"53"),(0,e.Uk)("。当使用 DOH 模式该项无效，非标端口应在 URL 中指定。")],-1),rn=(0,e.Wm)("blockquote",null,[(0,e.Wm)("p",null,[(0,e.Wm)("code",null,"domains"),(0,e.Uk)(": [string]")])],-1),pn=(0,e.Uk)("一个域名列表，此列表包含的域名，将优先使用此服务器进行查询。域名格式和 "),kn=(0,e.Uk)("路由配置"),dn=(0,e.Uk)(" 中相同。"),Un=(0,e.Wm)("blockquote",null,[(0,e.Wm)("p",null,[(0,e.Wm)("code",null,"expectIPs"),(0,e.Uk)(":[string]")])],-1),bn=(0,e.Uk)("一个 IP 范围列表，格式和 "),gn=(0,e.Uk)("路由配置"),hn=(0,e.Uk)(" 中相同。"),yn=(0,e.Wm)("p",null,"当配置此项时，Xray DNS 会对返回的 IP 的进行校验，只返回包含 expectIPs 列表中的地址。",-1),Dn=(0,e.Wm)("p",null,"如果未配置此项，会原样返回 IP 地址。",-1),Sn={render:function(n,l){const s=(0,e.up)("RouterLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[o,t,m,c,u,W,r,p,k,i,d,U,b,g,h,y,D,S,(0,e.Wm)("ul",null,[I,N,P,f,(0,e.Wm)("li",null,[v,x,j,w,O,q,X,(0,e.Wm)(s,{to:"/en/config/routing.html#%E9%A2%84%E5%AE%9A%E4%B9%89%E5%9F%9F%E5%90%8D%E5%88%97%E8%A1%A8"},{default:(0,e.w5)((()=>[H])),_:1}),T])]),_,A,E,R,F,C,L,B,M,(0,e.Wm)("div",Y,[$,(0,e.Wm)("p",null,[z,(0,e.Wm)(s,{to:"/en/config/log.html"},{default:(0,e.w5)((()=>[G])),_:1}),J])]),K,Q,V,Z,nn,ln,sn,en,an,on,tn,mn,cn,un,Wn,rn,(0,e.Wm)("p",null,[pn,(0,e.Wm)(s,{to:"/en/config/routing.html#ruleobject"},{default:(0,e.w5)((()=>[kn])),_:1}),dn]),Un,(0,e.Wm)("p",null,[bn,(0,e.Wm)(s,{to:"/en/config/routing.html#ruleobject"},{default:(0,e.w5)((()=>[gn])),_:1}),hn]),yn,Dn],64)}}}}]);