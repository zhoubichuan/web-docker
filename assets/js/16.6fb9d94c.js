(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{348:function(o,e,r){"use strict";r.r(e);var t=r(9),a=Object(t.a)({},(function(){var o=this,e=o._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[e("h1",{attrs:{id:"桌面版实践"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#桌面版实践"}},[o._v("#")]),o._v(" 桌面版实践")]),o._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[o._v("前言")]),o._v(" "),e("p",[o._v("Docker 作为后续安装相关应用的基石，这里先安装好 Docker，配置好相关环境，为后续顺利展开相关案例提供基础")])]),o._v(" "),e("h2",{attrs:{id:"_1-安装-docker-desktop"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装-docker-desktop"}},[o._v("#")]),o._v(" 1.安装 Docker Desktop")]),o._v(" "),e("p",[o._v("安装条件要求：")]),o._v(" "),e("table",[e("thead",[e("tr",[e("th",[o._v("windows")]),o._v(" "),e("th",[o._v("mac")])])]),o._v(" "),e("tbody",[e("tr",[e("td",[o._v("必须使用 Windows 10 Pro ( 专业版 )")]),o._v(" "),e("td",[o._v("Mac 硬件必须为 2010 年以后的型号")])]),o._v(" "),e("tr",[e("td",[o._v("必须使用 64 bit 版本的 Windows")]),o._v(" "),e("td",[o._v("必须使用 macOS El Capitan 10.11 及以后的版本")])])])]),o._v(" "),e("p",[o._v("⚠️⚠️⚠️ 虚拟机软件 VirtualBox 与 Docker Desktop 兼容性不佳，建议在安装 Docker for Windows 和 Docker for Mac 之前先卸载 VirtualBox")]),o._v(" "),e("h2",{attrs:{id:"_2-启动-docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-启动-docker"}},[o._v("#")]),o._v(" 2.启动 Docker")]),o._v(" "),e("p",[o._v("命令窗口中输入 docker 命令启动 docker")]),o._v(" "),e("table",[e("thead",[e("tr",[e("th",[o._v("windows")]),o._v(" "),e("th",[o._v("mac")]),o._v(" "),e("th",[o._v("其他")])])]),o._v(" "),e("tbody",[e("tr",[e("td",[o._v("PowerShell")]),o._v(" "),e("td",[o._v("Terminal")]),o._v(" "),e("td",[o._v("Git Bash")])])])]),o._v(" "),e("h2",{attrs:{id:"_3-实现原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-实现原理"}},[o._v("#")]),o._v(" 3.实现原理")]),o._v(" "),e("table",[e("thead",[e("tr",[e("th",[o._v("windows 虚拟化")]),o._v(" "),e("th",[o._v("mac 虚拟化")])])]),o._v(" "),e("tbody",[e("tr",[e("td",[o._v("Hyper-V")]),o._v(" "),e("td",[o._v("HyperKit")])])])]),o._v(" "),e("p",[o._v("利用操作系统提供的虚拟化功能来搭建一个虚拟 Linux 系统，并在其之上安装和运行 docker daemon。")]),o._v(" "),e("p",[o._v("Docker Desktop 能够直接通过 PowerShell、Terminal 这类的控制台软件在 Windows 和 macOS 中直接操作虚拟 Linux 系统中运行的 docker daemon。")]),o._v(" "),e("p",[o._v("实现这个功能得益于 docker daemon 对外提供的操作过程并不是复杂且领域性强的 IPC 等方式，而是通用的 RESTful Api 的形式。也就是说，Docker Desktop 只要实现 Windows 和 macOS 中的客户端，就能够直接利用 Hypervisor 的网络支持与虚拟 Linux 系统中的 docker daemon 进行通讯，并对它进行控制。")]),o._v(" "),e("h2",{attrs:{id:"_4-主机文件挂载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-主机文件挂载"}},[o._v("#")]),o._v(" 4.主机文件挂载")]),o._v(" "),e("p",[o._v("控制能够直接在主机操作系统中进行，给我们使用 Docker Desktop 系列软件提供了极大的方便。除此之外，文件的挂载也是 Docker Desktop 所提供的大幅简化我们工作效率且简化使用的功能之一。")]),o._v(" "),e("p",[o._v("之前我们谈到了，Docker 容器中能够通过数据卷的方式挂载宿主操作系统中的文件或目录，宿主操作系统在 Windows 和 macOS 环境下的 Docker Desktop 中，指的是虚拟的 Linux 系统。")]),o._v(" "),e("p",[o._v("当然，如果只能从虚拟的 Linux 系统中进行挂载，显然不足以达到我们的期望，因为最方便的方式必然是直接从 Windows 和 macOS 里挂载文件了。")]),o._v(" "),e("p",[o._v("要实现我们所期望的效果，也就是 Docker 容器直接挂载主机系统的目录，我们可以先将目录挂载到虚拟 Linux 系统上，再利用 Docker 挂载到容器之中。这个过程被集成在了 Docker Desktop 系列软件中，我们不需要人工进行任何操作，整个过程已经实现了自动化。")]),o._v(" "),e("p",[o._v("Docker Desktop 对 Windows 和 macOS 到虚拟 Linux 系统，再到 Docker 容器中的挂载进行了实现，我们只需要直接选择能够被挂载的主机目录 ( 这个过程更多也是为了安全所考虑 )，剩下的过程全部由 Docker Desktop 代替我们完成。这相比于普通虚拟机软件进行挂载的过程来说，完全不能用百倍效率来比较了。")]),o._v(" "),e("h2",{attrs:{id:"_5-配置-docker-desktop"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-配置-docker-desktop"}},[o._v("#")]),o._v(" 5.配置 Docker Desktop")]),o._v(" "),e("p",[o._v("在大鲸鱼弹出的菜单中选择 Settings ( Windows ) 或 Preferences ( macOS )。")]),o._v(" "),e("ul",[e("li",[o._v("文件系统挂载配置")])]),o._v(" "),e("p",[o._v("在 Docker for Windows 的 Shared Drivers 面板，以及在 Docker for Mac 中的 File Sharing 面板中，包含了我们之前提到的将本机目录挂载到 Hypervisor 里 Linux 系统中的配置。")]),o._v(" "),e("ul",[e("li",[o._v("资源控制配置")])]),o._v(" "),e("p",[o._v("在 Advanced 面板中，我们可以调整 Docker 最大占用的本机资源。当然，更准确的说我们是在调整虚拟 Linux 环境所能占用的资源，是通过这个方式影响 Docker 所能占用的最大资源。")]),o._v(" "),e("ul",[e("li",[o._v("网络配置")])]),o._v(" "),e("p",[o._v("在 Docker for Windows 的 Network 面板，以及在 Docker for Mac 中的 Advanced 面板中，我们可以配置 Docker 内部默认网络的子网等内容。这个网络的作用以及更详细的内容，我们会在之第 9 节中进行讲解。")]),o._v(" "),e("ul",[e("li",[o._v("docker daemon 配置")])]),o._v(" "),e("p",[o._v("在 Daemon 面板里，我们可以直接配置对 docker daemon 的运行配置进行调整。默认情况下，在 Daemon 面板里只有 Insecure registries 和 Registry mirrors 两个配置，分别用来定义未认证镜像仓库地址和镜像源地址。")]),o._v(" "),e("p",[o._v("我们可以点击切换按钮切换到 Advanced 模式，在这个模式下，我们可以直接编辑 docker daemon 的 daemon.json 配置文件，实现更具体、完整的配置 docker daemon 的目的。")]),o._v(" "),e("h2",{attrs:{id:"_6-docker-toolbox"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-docker-toolbox"}},[o._v("#")]),o._v(" 6.Docker Toolbox")]),o._v(" "),e("p",[o._v("Docker 官方为我们找到了用于搭建虚拟 Linux 系统的软件，即 Oracle 的 VirtualBox，并以此封装了另一个集成的 Docker 运行环境软件：Docker Toolbox。")]),o._v(" "),e("p",[o._v("安装 Docker Toolbox 的过程也十分简单，下载安装包并按常规软件一样安装即可。这里直接我直接提供给大家 Docker Toolbox 安装包的连接，方便大家下载。")]),o._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://download.docker.com/win/stable/DockerToolbox.exe",target:"_blank",rel:"noopener noreferrer"}},[o._v("Docker Toolbox for Windows"),e("OutboundLink")],1),o._v(" ( "),e("a",{attrs:{href:"https://download.docker.com/win/stable/DockerToolbox.exe",target:"_blank",rel:"noopener noreferrer"}},[o._v("https://download.docker.com/win/stable/DockerToolbox.exe"),e("OutboundLink")],1),o._v(" )")]),o._v(" "),e("li",[e("a",{attrs:{href:"https://download.docker.com/mac/stable/DockerToolbox.pkg",target:"_blank",rel:"noopener noreferrer"}},[o._v("Docker Toolbox for Mac"),e("OutboundLink")],1),o._v(" ( "),e("a",{attrs:{href:"https://download.docker.com/mac/stable/DockerToolbox.pkg",target:"_blank",rel:"noopener noreferrer"}},[o._v("https://download.docker.com/mac/stable/DockerToolbox.pkg"),e("OutboundLink")],1),o._v(" )")])]),o._v(" "),e("p",[o._v("安装完 Docker Toolbox 后，我们有几项与 Docker for Windows 和 Docker for Mac 不同的使用方法需要注意。")]),o._v(" "),e("p",[o._v("由于不能很好的与系统以及 VirtualBox 互通结合，我们启动、关闭、重启 Docker 服务不能完全实现自动化，所以这里 Docker 为我们提供了 Docker QuickStart Terminal 这个工具来处理这些过程。换个方式说，我们必须通过它来启动和操作 Docker，而不能再直接使用 PowerShell、Terminal 这类软件了。")]),o._v(" "),e("p",[o._v("另外一个不便之处就是文件系统的挂载，由于 Docker Toolbox 无法直接操作 VirtualBox 实现挂载，所以这个过程需要我们人工来进行。整个挂载的方式与我们之前谈到的一样，区别只是需要我们手动操作。将本机目录挂载到虚拟 Linux 系统中的配置在 VirtualBox 的 Settings 中，我们将本机需要挂载的目录配置进去并保存即可。")])])}),[],!1,null,null,null);e.default=a.exports}}]);