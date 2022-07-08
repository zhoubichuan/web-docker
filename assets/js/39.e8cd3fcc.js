(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{378:function(s,a,n){"use strict";n.r(a);var t=n(9),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"四-网络"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四-网络"}},[s._v("#")]),s._v(" 四.网络")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("前言")]),s._v(" "),a("p",[s._v("在互联网时代，网络已经成为绝大多数应用进行数据交换的主要通道，Docker 作为集群部署的利器，在网络支持上也下了许多功夫。功能丰富和强大，并不代表使用复杂，在 Docker 的封装下，我们依然可以通过命令和参数轻松的为容器制定不同的网络方案。")])]),s._v(" "),a("h2",{attrs:{id:"_1-容器网络"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-容器网络"}},[s._v("#")]),s._v(" 1.容器网络")]),s._v(" "),a("p",[s._v("容器网络实质上也是由 Docker 为应用程序所创造的虚拟环境的一部分，它能让应用从宿主机操作系统的网络环境中独立出来，形成容器自有的网络设备、IP 协议栈、端口套接字、IP 路由表、防火墙等等与网络相关的模块。")]),s._v(" "),a("p",[s._v("在 Docker 网络中，有三个比较核心的概念，也就是："),a("strong",[s._v("沙盒 ( Sandbox )")]),s._v("、"),a("strong",[s._v("网络 ( Network )")]),s._v("、"),a("strong",[s._v("端点 ( Endpoint )")]),s._v("。")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("沙盒")]),s._v("提供了容器的虚拟网络栈，也就是之前所提到的端口套接字、IP 路由表、防火墙等的内容。其实现隔离了容器网络与宿主机网络，形成了完全独立的容器网络环境。")]),s._v(" "),a("li",[a("strong",[s._v("网络")]),s._v("可以理解为 Docker 内部的虚拟子网，网络内的参与者相互可见并能够进行通讯。Docker 的这种虚拟网络也是于宿主机网络存在隔离关系的，其目的主要是形成容器间的安全通讯环境。")]),s._v(" "),a("li",[a("strong",[s._v("端点")]),s._v("是位于容器或网络隔离墙之上的洞，其主要目的是形成一个可以控制的突破封闭的网络环境的出入口。当容器的端点与网络的端点形成配对后，就如同在这两者之间搭建了桥梁，便能够进行数据传输了。")])]),s._v(" "),a("p",[s._v("这三者形成了 Docker 网络的核心模型，也就是容器网络模型 ( Container Network Model )。")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("提示：浅析 Docker 的网络实现")]),s._v(" "),a("p",[s._v("容器网络模型为容器引擎提供了一套标准的网络对接范式，而在 Docker 中，实现这套范式的是 Docker 所封装的 libnetwork 模块。")]),s._v(" "),a("p",[s._v("而对于网络的具体实现，在 Docker 的发展过程中也逐渐抽象，形成了统一的抽象定义。进而通过这些抽象定义，便可以对 Docker 网络的实现方式进行不同的变化。")]),s._v(" "),a("p",[s._v("目前 Docker 官方为我们提供了五种 Docker 网络驱动，分别是："),a("strong",[s._v("Bridge Driver")]),s._v("、"),a("strong",[s._v("Host Driver")]),s._v("、"),a("strong",[s._v("Overlay Driver")]),s._v("、"),a("strong",[s._v("MacLan Driver")]),s._v("、"),a("strong",[s._v("None Driver")]),s._v("。")]),s._v(" "),a("p",[s._v("其中，Bridge 网络是 Docker 容器的默认网络驱动，简而言之其就是通过网桥来实现网络通讯 ( 网桥网络的实现可以基于硬件，也可以基于软件 )。而 Overlay 网络是借助 Docker 集群模块 Docker Swarm 来搭建的跨 Docker Daemon 网络，我们可以通过它搭建跨物理主机的虚拟网络，进而让不同物理机中运行的容器感知不到多个物理机的存在。")])]),s._v(" "),a("h2",{attrs:{id:"_2-容器互联"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-容器互联"}},[s._v("#")]),s._v(" 2.容器互联")]),s._v(" "),a("p",[s._v("由于 Docker 提倡容器与应用共生的轻量级容器理念，所以容器中通常只包含一种应用程序，但我们知道，如今纷繁的系统服务，没有几个是可以通过单一的应用程序支撑的。拿最简单的 Web 应用为例，也至少需要业务应用、数据库应用、缓存应用等组成。也就是说，在 Docker 里我们需要通过多个容器来组成这样的系统。")]),s._v(" "),a("p",[s._v("而这些互联网时代的应用，其间的通讯方式主要以网络为主，所以打通容器间的网络，是使它们能够互相通讯的关键所在。")]),s._v(" "),a("p",[s._v("要让一个容器连接到另外一个容器，我们可以在容器通过 "),a("code",[s._v("docker create")]),s._v(" 或 "),a("code",[s._v("docker run")]),s._v(" 创建时通过 "),a("code",[s._v("--link")]),s._v(" 选项进行配置。")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("例如：这里我们创建一个 MySQL 容器，将运行我们 Web 应用的容器连接到这个 MySQL 容器上，打通两个容器间的网络，实现它们之间的网络互通。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d --name mysql -e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_RANDOM_ROOT_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yes mysql\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d --name webapp --link mysql webapp:latest\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])]),s._v(" "),a("p",[s._v("容器间的网络已经打通，那么我们要如何在 Web 应用中连接到 MySQL 数据库呢？Docker 为容器间连接提供了一种非常友好的方式，我们只需要将容器的网络命名填入到连接地址中，就可以访问需要连接的容器了。")]),s._v(" "),a("p",[s._v("假设我们在 Web 应用中使用的是 JDBC 进行数据库连接的，我们可以这么填写连接。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("String url "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"jdbc:mysql://mysql:3306/webapp"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("在这里，连接地址中的 mysql 就好似我们常见的域名解析，Docker 会将其指向 MySQL 容器的 IP 地址。")]),s._v(" "),a("p",[s._v("看到这里，读者们有没有发现 Docker 在容器互通中为我们带来的一项便利，也就是我们不再需要真实的知道另外一个容器的 IP 地址就能进行连接。再具体来对比，在以往的开发中，我们每切换一个环境 ( 例如将程序从开发环境提交到测试环境 )，都需要重新配置程序中的各项连接地址等参数，而在 Docker 里，我们并不需要关心这个，只需要程序中配置被连接容器的别名，映射 IP 的工作就交给 Docker 完成了。")]),s._v(" "),a("h3",{attrs:{id:"_2-1-暴露端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-暴露端口"}},[s._v("#")]),s._v(" 2.1 暴露端口")]),s._v(" "),a("p",[s._v("需要注意的是，虽然容器间的网络打通了，但并不意味着我们可以任意访问被连接容器中的任何服务。Docker 为容器网络增加了一套安全机制，只有容器自身允许的端口，才能被其他容器所访问。")]),s._v(" "),a("p",[s._v("这个容器自我标记端口可被访问的过程，我们通常称为暴露端口。我们在 "),a("code",[s._v("docker ps")]),s._v(" 的结果中可以看到容器暴露给其他容器访问的端口。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\nCONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                 NAMES\n95507bc88082        mysql:5.7           "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker-entrypoint.s…"')]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(" seconds ago      Up "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(" seconds       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v("/tcp, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("33060")]),s._v("/tcp   mysql\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("这里我们看到，MySQL 这个容器暴露的端口是 3306 和 33060。所以我们连接到 MySQL 容器后，只能对这两个端口进行访问。")]),s._v(" "),a("p",[s._v("端口的暴露可以通过 Docker 镜像进行定义，也可以在容器创建时进行定义。在容器创建时进行定义的方法是借助 "),a("code",[s._v("--expose")]),s._v(" 这个选项。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d --name mysql -e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_RANDOM_ROOT_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yes --expose "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13306")]),s._v(" --expose "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("23306")]),s._v(" mysql:5.7\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这里我们为 MySQL 暴露了 13306 和 23306 这两个端口，暴露后我们可以在 "),a("code",[s._v("docker ps")]),s._v(" 中看到这两个端口已经成功的打开。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\nCONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                                       NAMES\n3c4e645f21d7        mysql:5.7           "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker-entrypoint.s…"')]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" seconds ago       Up "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" seconds        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v("/tcp, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13306")]),s._v("/tcp, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("23306")]),s._v("/tcp, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("33060")]),s._v("/tcp   mysql\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("容器暴露了端口只是类似我们打开了容器的防火墙，具体能不能通过这个端口访问容器中的服务，还需要容器中的应用监听并处理来自这个端口的请求。")]),s._v(" "),a("h3",{attrs:{id:"_2-2-通过别名连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-通过别名连接"}},[s._v("#")]),s._v(" 2.2 通过别名连接")]),s._v(" "),a("p",[s._v("纯粹的通过容器名来打开容器间的网络通道缺乏一定的灵活性，在 Docker 里还支持连接时使用别名来使我们摆脱容器名的限制。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d --name webapp --link mysql:database webapp:latest\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("在这里，我们使用 "),a("code",[s._v("--link <name>:<alias>")]),s._v(" 的形式，连接到 MySQL 容器，并设置它的别名为 database。当我们要在 Web 应用中使用 MySQL 连接时，我们就可以使用 database 来代替连接地址了。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("String url "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"jdbc:mysql://database:3306/webapp"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_3-管理网络"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-管理网络"}},[s._v("#")]),s._v(" 3.管理网络")]),s._v(" "),a("p",[s._v("容器能够互相连接的前提是两者同处于一个网络中 ( 这里的网络是指容器网络模型中的网络 )。这个限制很好理解，刚才我们说了，网络这个概念我们可以理解为 Docker 所虚拟的子网，而容器网络沙盒可以看做是虚拟的主机，只有当多个主机在同一子网里时，才能互相看到并进行网络数据交换。")]),s._v(" "),a("p",[s._v("当我们启动 Docker 服务时，它会为我们创建一个默认的 bridge 网络，而我们创建的容器在不专门指定网络的情况下都会连接到这个网络上。所以我们刚才之所以能够把 webapp 容器连接到 mysql 容器上，其原因是两者都处于 bridge 这个网络上。")]),s._v(" "),a("p",[s._v("我们通过 "),a("code",[s._v("docker inspect")]),s._v(" 命令查看容器，可以在 Network 部分看到容器网络相关的信息。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" inspect mysql\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## ......")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"NetworkSettings"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## ......")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Networks"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bridge"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"IPAMConfig"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" null,\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Links"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" null,\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Aliases"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" null,\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"NetworkID"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bc14eb1da66b67c7d155d6c78cb5389d4ffa6c719c8be3280628b7b54617441b"')]),s._v(",\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"EndpointID"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1e201db6858341d326be4510971b2f81f0f85ebd09b9b168e1df61bab18a6f22"')]),s._v(",\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Gateway"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"172.17.0.1"')]),s._v(",\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"IPAddress"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"172.17.0.2"')]),s._v(",\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"IPPrefixLen"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(",\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"IPv6Gateway"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(",\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"GlobalIPv6Address"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(",\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"GlobalIPv6PrefixLen"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(",\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MacAddress"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"02:42:ac:11:00:02"')]),s._v(",\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"DriverOpts"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" null\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## ......")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## ......")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br")])]),a("p",[s._v("这里我们能够看到 mysql 容器在 bridge 网络中所分配的 IP 地址，其自身的端点、Mac 地址，bridge 网络的网关地址等信息。")]),s._v(" "),a("p",[s._v("Docker 默认创建的这个 bridge 网络是非常重要的，理由自然是在没有明确指定容器网络时，容器都会连接到这个网络中。在之前讲解 Docker for Win 和 Docker for Mac 安装的时候，我们提到过这两个软件的配置中都有一块配置 Docker 中默认网络的内容，这块所指的默认网络就是这个 bridge 网络。")]),s._v(" "),a("h3",{attrs:{id:"_3-1-创建网络"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-创建网络"}},[s._v("#")]),s._v(" 3.1 创建网络")]),s._v(" "),a("p",[s._v("在 Docker 里，我们也能够创建网络，形成自己定义虚拟子网的目的。")]),s._v(" "),a("p",[s._v("docker CLI 里与网络相关的命令都以 "),a("code",[s._v("docker network")]),s._v(" 开头，其中创建网络的命令是 "),a("code",[s._v("docker network create")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" network create -d bridge individual\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("通过 "),a("code",[s._v("-d")]),s._v(" 选项我们可以为新的网络指定驱动的类型，其值可以是刚才我们所提及的 bridge、host、overlay、maclan、none，也可以是其他网络驱动插件所定义的类型。这里我们使用的是 Bridge Driver ( 当我们不指定网络驱动时，Docker 也会默认采用 Bridge Driver 作为网络驱动 )。")]),s._v(" "),a("p",[s._v("通过 "),a("code",[s._v("docker network ls")]),s._v(" 或是 "),a("code",[s._v("docker network list")]),s._v(" 可以查看 Docker 中已经存在的网络。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" network "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\nNETWORK ID          NAME                DRIVER              SCOPE\nbc14eb1da66b        bridge              bridge              "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v("\n35c3ef1cc27d        individual          bridge              "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("之后在我们创建容器时，可以通过 "),a("code",[s._v("--network")]),s._v(" 来指定容器所加入的网络，一旦这个参数被指定，容器便不会默认加入到 bridge 这个网络中了 ( 但是仍然可以通过 "),a("code",[s._v("--network bridge")]),s._v(" 让其加入 )。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d --name mysql -e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_RANDOM_ROOT_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yes --network individual mysql:5.7\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("我们通过 "),a("code",[s._v("docker inspect")]),s._v(" 观察一下此时的容器网络。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" inspect mysql\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## ......")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"NetworkSettings"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## ......")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Networks"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"individual"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"IPAMConfig"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" null,\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Links"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" null,\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Aliases"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2ad678e6d110"')]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"NetworkID"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"35c3ef1cc27d24e15a2b22bdd606dc28e58f0593ead6a57da34a8ed989b1b15d"')]),s._v(",\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"EndpointID"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"41a2345b913a45c3c5aae258776fcd1be03b812403e249f96b161e50d66595ab"')]),s._v(",\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Gateway"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"172.18.0.1"')]),s._v(",\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"IPAddress"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"172.18.0.2"')]),s._v(",\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"IPPrefixLen"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(",\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"IPv6Gateway"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(",\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"GlobalIPv6Address"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(",\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"GlobalIPv6PrefixLen"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(",\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MacAddress"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"02:42:ac:12:00:02"')]),s._v(",\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"DriverOpts"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" null\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## ......")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## ......")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br")])]),a("p",[s._v("可以看到，容器所加入网络已经变成了 individual 这个网络了。")]),s._v(" "),a("p",[s._v("这时候我们通过 "),a("code",[s._v("--link")]),s._v(" 让处于另外一个网络的容器连接到这个容器上，看看会发生什么样的效果。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d --name webapp --link mysql --network bridge webapp:latest\ndocker: Error response from daemon: Cannot "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" to /mysql, as it does not belong to the default network.\nERRO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("0000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" error waiting "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" container: context canceled\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("可以看到容器并不能正常的启动，而 Docker 提醒我们两个容器处于不同的网络，之间是不能相互连接引用的。")]),s._v(" "),a("p",[s._v("我们来改变一下，让运行 Web 应用的容器加入到 individual 这个网络，就可以成功建立容器间的网络连接了。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d --name webapp --link mysql --network individual webapp:latest\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_4-端口映射"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-端口映射"}},[s._v("#")]),s._v(" 4.端口映射")]),s._v(" "),a("p",[s._v("刚才我们提及的都是容器直接通过 Docker 网络进行的互相访问，在实际使用中，还有一个非常常见的需求，就是我们需要在容器外通过网络访问容器中的应用。最简单的一个例子，我们提供了 Web 服务，那么我们就需要提供一种方式访问运行在容器中的 Web 应用。")]),s._v(" "),a("p",[s._v("在 Docker 中，提供了一个端口映射的功能实现这样的需求。")]),s._v(" "),a("p",[s._v("通过 Docker 端口映射功能，我们可以把容器的端口映射到宿主操作系统的端口上，当我们从外部访问宿主操作系统的端口时，数据请求就会自动发送给与之关联的容器端口。")]),s._v(" "),a("p",[s._v("要映射端口，我们可以在创建容器时使用 "),a("code",[s._v("-p")]),s._v(" 或者是 "),a("code",[s._v("--publish")]),s._v(" 选项。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d --name nginx -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(":80 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v(":443 nginx:1.12\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("使用端口映射选项的格式是 "),a("code",[s._v("-p <ip>:<host-port>:<container-port>")]),s._v("，其中 ip 是宿主操作系统的监听 ip，可以用来控制监听的网卡，默认为 0.0.0.0，也就是监听所有网卡。host-port 和 container-port 分别表示映射到宿主操作系统的端口和容器的端口，这两者是可以不一样的，我们可以将容器的 80 端口映射到宿主操作系统的 8080 端口，传入 "),a("code",[s._v("-p 8080:80")]),s._v(" 即可。")]),s._v(" "),a("p",[s._v("我们可以在容器列表里看到端口映射的配置。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\nCONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                                      NAMES\nbc79fc5d42a6        nginx:1.12          "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx -g \'daemon of…"')]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" seconds ago       Up "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" seconds        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:80-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("/tcp, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:443-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v("/tcp   nginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("打印的结果里用 "),a("code",[s._v("->")]),s._v(" 标记了端口的映射关系。")]),s._v(" "),a("h3",{attrs:{id:"_4-1-在非-linux-中使用映射"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-在非-linux-中使用映射"}},[s._v("#")]),s._v(" 4.1 在非 Linux 中使用映射")]),s._v(" "),a("p",[s._v("Docker 的端口映射功能是将容器端口映射到宿主操作系统的端口上，实际来说就是映射到了 Linux 系统的端口上。而我们知道，在 Windows 和 macOS 中运行的 Docker，其 Linux 环境是被虚拟出来的，如果我们仅仅是将端口映射到 Linux 上，由于虚拟环境还有一层隔离，我们依然不能通过 Windows 或 macOS 的端口来访问容器。")]),s._v(" "),a("p",[s._v("解决这种问题的方法很简单，只需要再加一次映射，将虚拟 Linux 系统中的端口映射到 Windows 或 macOS 的端口即可。")]),s._v(" "),a("p",[s._v("如果我们使用 Docker for Windows 或 Docker for Mac，这个端口映射的操作程序会自动帮助我们完成，所以我们不需要做任何额外的事情，就能够直接使用 Windows 或 macOS 的端口访问容器端口了。")]),s._v(" "),a("p",[s._v("而当我们使用 Docker Toolbox 时，由于其自动化能力比较差，所以需要我们在 VirtualBox 里单独配置这个操作系统端口到 Linux 端口的映射关系。")]),s._v(" "),a("p",[s._v("在 VirtualBox 配置中的端口转发一栏里，进行相关的配置即可。")])])}),[],!1,null,null,null);a.default=e.exports}}]);