(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{369:function(s,e,a){"use strict";a.r(e);var r=a(9),t=Object(r.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"十三-服务发现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#十三-服务发现"}},[s._v("#")]),s._v(" 十三.服务发现")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("前言")]),s._v(" "),a("p",[s._v("服务发现应用是很多服务化系统的组成部分，所以在开发、测试环境中也就有必要配备一套服务发现体系来配合我们的开发、测试工作。")])]),s._v(" "),a("h2",{attrs:{id:"_1-模拟-zookeeper-集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-模拟-zookeeper-集群"}},[s._v("#")]),s._v(" 1.模拟 Zookeeper 集群")]),s._v(" "),a("p",[s._v("实现服务发现的方法有很多种，其中较为常见的一种是利用分布式注册中心，解决服务之间协调的问题。")]),s._v(" "),a("p",[s._v("在众多注册中心应用中，Zookeeper 是较为常见和常用的一款程序，这里我们就以 Zookeeper 为例，介绍如何使用 Docker 搭建 Zookeeper 的运行环境。")]),s._v(" "),a("h3",{attrs:{id:"_1-1-设计目录结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-设计目录结构"}},[s._v("#")]),s._v(" 1.1 设计目录结构")]),s._v(" "),a("p",[s._v("由于 Zookeeper 的运行并不需要太多的关注配置和调整，这里我们就以最基础的形式来设计 Docker Compose 项目的结构。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("└─ project\n   ├─ bin\n   │  └─ compose.sh\n   └─ compose\n      └─ docker-compose.yml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("为了方便日常操作，我们依然编写了 "),a("a",{attrs:{href:"http://compose.sh",target:"_blank",rel:"noopener noreferrer"}},[s._v("compose.sh"),a("OutboundLink")],1),s._v(" 这个脚本来辅助我们控制 Docker Compose 项目。")]),s._v(" "),a("h3",{attrs:{id:"_1-2-编写-docker-compose-yml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-编写-docker-compose-yml"}},[s._v("#")]),s._v(" 1.2 编写 docker-compose.yml")]),s._v(" "),a("p",[s._v("很多读者会问到一个问题，怎么样才能通过 Docker 的虚拟化技术实现在一个机器上模拟出多台机器的效果。或者说一个我们这里会涉及的具体问题，如何只用一个 Docker 来模拟一个高可用的 Zookeeper 集群。")]),s._v(" "),a("p",[s._v("我们知道，要实现 Zookeeper 的高可用，至少需要三个 Zookeeper 节点进行协作，所以这里我们用三个单独的 Docker Compose 服务定义来分别定义这三个节点。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("version: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3'")]),s._v("\n\nservices:\n\n  zk1:\n    image: zookeeper:3.4\n    restart: always\n    hostname: zk1\n    environment:\n      ZOO_MY_ID: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n      ZOO_SERVERS: server.1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:2888:3888 server.2"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("zk2:2888:3888 server.3"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("zk3:2888:3888\n    ports:\n      - "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2181")]),s._v(":2181\n\n  zk2:\n    image: zookeeper:3.4\n    restart: always\n    hostname: zk2\n    environment:\n      ZOO_MY_ID: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n      ZOO_SERVERS: server.1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("zk1:2888:3888 server.2"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:2888:3888 server.3"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("zk3:2888:3888\n    ports:\n      - "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2182")]),s._v(":2181\n\n  zk3:\n    image: zookeeper:3.4\n    restart: always\n    hostname: zk3\n    environment:\n      ZOO_MY_ID: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n      ZOO_SERVERS: server.1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("zk1:2888:3888 server.2"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("zk2:2888:3888 server.3"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:2888:3888\n    ports:\n      - "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2183")]),s._v(":2181\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br")])]),a("p",[s._v("在这个 Docker Compose 项目中，我们定义的三个 Zookeeper 服务都直接使用了官方制作的 zookeeper 镜像。")]),s._v(" "),a("p",[s._v("在这个镜像里，我们可以留意定制 ZOO_MY_ID 和 ZOO_SERVERS 这两个环境变量。这两个变量主要是用来识别 Zookeeper 集群中不同 Zookeeper 程序的。")]),s._v(" "),a("p",[s._v("其中 ZOO_MY_ID 是 Zookeeper 在集群中的编号，而 ZOO_SERVERS 用来定义集群中的所有 Zookeeper 及它们的连接方式。")]),s._v(" "),a("p",[s._v("我们以 zk1 这个服务为例来解释一下 ZOO_SERVERS 的定义方法。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("server.1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:2888:3888 server.2"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("zk2:2888:3888 server.3"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("zk3:2888:3888\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("我们可以在 ZOO_SERVERS 中定义所有处于 Zookeeper 集群中的程序，通过空格来间隔它们。而每个服务的的定义形式为 "),a("code",[s._v("server.[id]=[host]:[port]:[port]")]),s._v("，所以就有了上面例子中我们看到的样子。")]),s._v(" "),a("p",[s._v("在这个例子里，我们描述了三个 Zookeeper 程序的连接地址。")]),s._v(" "),a("p",[s._v("由于每个容器都有独立的端口表，所以即使这些程序都运行在一个主机里，我们依然不需要担心，它们会造成端口的冲突。所以这里我们直接使用默认的 2888 和 3888 来进行服务间的相互通信即可。")]),s._v(" "),a("p",[s._v("而在进行容器互联的过程中，我们可以通过 Docker 的解析机制，直接填入对应服务的名称替代它们的 IP 地址，也就是这个例子里的 zk2 和 zk3。")]),s._v(" "),a("h3",{attrs:{id:"_1-3-重启机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-重启机制"}},[s._v("#")]),s._v(" 1.3 重启机制")]),s._v(" "),a("p",[s._v("在项目定义中，我们还注意到了 "),a("code",[s._v("restart: always")]),s._v(" 这个配置，这个配置主要是用来控制容器的重启策略的。")]),s._v(" "),a("p",[s._v("这里的 always 指的是不论任何情况，容器出现问题后都会自动重启，也包括 Docker 服务本身在启动后容器也会自动启动。")]),s._v(" "),a("p",[s._v("另外，restart 还支持几种配置：")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("配置值")]),s._v(" "),a("th",[s._v("说明")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("no")]),s._v(" "),a("td",[s._v("不设重启机制")])]),s._v(" "),a("tr",[a("td",[s._v("always")]),s._v(" "),a("td",[s._v("总是重启")])]),s._v(" "),a("tr",[a("td",[s._v("on-failure")]),s._v(" "),a("td",[s._v("在异常退出时重启")])]),s._v(" "),a("tr",[a("td",[s._v("unless-stopped")]),s._v(" "),a("td",[s._v("除非由停止命令结束，其他情况都重启")])])])]),s._v(" "),a("p",[s._v("在实际使用中，我们可以根据需要选择不同的重启策略。")]),s._v(" "),a("p",[s._v("而这个项目里，我们希望 Zookeeper 能够一直健壮的运行，所以使用了 always 这个重启策略。")]),s._v(" "),a("h2",{attrs:{id:"_2-启动项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-启动项目"}},[s._v("#")]),s._v(" 2.启动项目")]),s._v(" "),a("p",[s._v("一切就绪，我们就可以直接通过 Docker Compose 的命令来启动开发环境了。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ./bin/compose.sh up -d")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);e.default=t.exports}}]);