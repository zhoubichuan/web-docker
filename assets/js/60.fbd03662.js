(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{469:function(a,s,e){"use strict";e.r(s);var t=e(9),r=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"九-docker-hub"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#九-docker-hub"}},[a._v("#")]),a._v(" 九.Docker Hub")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("前言")]),a._v(" "),s("p",[a._v("在开发过程中我们用到的镜像大部分还是直接采用 Docker Hub 中已经存在的镜像的，即使自己编写 Dockerfile，也只是对已有镜像进行简单的改动，很少会从零开始搭建镜像。")])]),a._v(" "),s("h2",{attrs:{id:"_1-选择镜像与程序版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-选择镜像与程序版本"}},[a._v("#")]),a._v(" 1.选择镜像与程序版本")]),a._v(" "),s("p",[s("strong",[a._v("Alpine 镜像")])]),a._v(" "),s("p",[a._v("镜像标签中的 Alpine 其实指的是这个镜像内的文件系统内容，是基于 Alpine Linux 这个操作系统的。Alpine Linux 是一个相当精简的操作系统，而基于它的 Docker 镜像可以仅有数 MB 的尺寸。如果软件基于这样的系统镜像之上构建而得，可以想象新的镜像也是十分小巧的。")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("操作系统镜像")]),a._v(" "),s("th",[a._v("占用空间")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("alpine:latest")]),a._v(" "),s("td",[a._v("4.4 MB")])]),a._v(" "),s("tr",[s("td",[a._v("ubuntu:latest")]),a._v(" "),s("td",[a._v("84.1 MB")])]),a._v(" "),s("tr",[s("td",[a._v("debian:latest")]),a._v(" "),s("td",[a._v("101 MB")])]),a._v(" "),s("tr",[s("td",[a._v("centos:latest")]),a._v(" "),s("td",[a._v("200 MB")])])])]),a._v(" "),s("p",[a._v("可以看到，Alpine 系统镜像的尺寸要远小于其他常见的系统镜像。让我们再来比较同一个软件在基于普通系统的镜像和基于 Alpine 系统的镜像后尺寸上的区别。")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("镜像标签")]),a._v(" "),s("th",[a._v("占用空间")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("python:3.6-alpine")]),a._v(" "),s("td",[a._v("74.2 MB")])]),a._v(" "),s("tr",[s("td",[a._v("python:3.6-jessie")]),a._v(" "),s("td",[a._v("697 MB")])])])]),a._v(" "),s("p",[a._v("由于基于 Alpine 系统建立的软件镜像远远小于基于其他系统的软件镜像，它在网络传输上的优势尤为明显。如果我们选择这类的镜像，不但可以节约网络传输的时间，也能减少镜像对硬盘空间的占用。")]),a._v(" "),s("p",[a._v("当然，有优点也会有缺点，Alpine 镜像的缺点就在于它实在过于精简，以至于麻雀虽小，也无法做到五脏俱全了。在 Alpine 中缺少很多常见的工具和类库，以至于如果我们想基于软件 Alpine 标签的镜像进行二次构建，那搭建的过程会相当烦琐。所以如果你想要对软件镜像进行改造，并基于其构建新的镜像，那么 Alpine 镜像不是一个很好的选择 (这时候我们更提倡基于 Ubuntu、Debian、CentOS 这类相对完整的系统镜像来构建)。")]),a._v(" "),s("h2",{attrs:{id:"_2-对容器进行配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-对容器进行配置"}},[a._v("#")]),a._v(" 2.对容器进行配置")]),a._v(" "),s("p",[a._v("自己安装过 MySQL 的朋友一定知道，搭建 MySQL 最麻烦的地方并不是安装的过程，而是安装后进行初始化配置的过程。就拿更改 root 账号的密码来说，在初始的 MySQL 里就要耗费不少工作量。")]),a._v(" "),s("p",[a._v("如果我们拿到一个 MySQL 镜像，运行起来的 MySQL 也就约等于一个刚刚安装好的程序，面临的正好是复杂的初始化过程。")]),a._v(" "),s("p",[a._v("好在 MySQL 镜像的维护者们为我们打造了一些自动化脚本，通过它们，我们只需要简单的传入几个参数，就能够快速实现对 MySQL 数据库的初始化。")]),a._v(" "),s("p",[a._v("在 MySQL 镜像的详情里，描述了我们要如何传入这些参数来启动 MySQL 容器。")]),a._v(" "),s("p",[a._v("对于 MySQL 镜像来说，进行软件配置的方法是通过环境变量的方式来实现的 ( 在其他的镜像里，还有通过启动命令、挂载等方式来实现的 )。我们只需要通过这些给出的环境变量，就可以初始化 MySQL 的配置了。")]),a._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("例如：我们可以通过下面的命令来直接建立 MySQL 中的用户和数据库。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" mysql "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MYSQL_DATABASE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("webapp "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MYSQL_USER")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("www "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MYSQL_PASSWORD")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("my-secret-pw "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" mysql:5.7\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("通过这条命令启动的 MySQL 容器，在内部就已经完成了用户的创建和数据库的创建，我们通过 MySQL 客户端就能够直接登录这个用户和访问对应的数据库了。")])]),a._v(" "),s("p",[a._v("如果深究 MySQL 是如何实现这样复杂的功能的，大家可以到 MySQL 镜像的 Dockerfile 源码库里，找到 "),s("a",{attrs:{href:"https://github.com/docker-library/mysql/blob/master/5.7/docker-entrypoint.sh",target:"_blank",rel:"noopener noreferrer"}},[a._v("docker-entrypoint.sh"),s("OutboundLink")],1),a._v(" 这个脚本。")]),a._v(" "),s("h2",{attrs:{id:"_3-共享自己的镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-共享自己的镜像"}},[a._v("#")]),a._v(" 3.共享自己的镜像")]),a._v(" "),s("p",[a._v("要在 Docker Hub 上共享镜像，我们必须有一个 Docker Hub 的账号，这自不必说了。在登录到我们账号的控制面板后，我们能够找到创建的按钮，在这里选择 "),s("code",[a._v("Create Automated Build")]),a._v(" ( 创建自动构建 )。")]),a._v(" "),s("p",[a._v("自动构建镜像是 Docker Hub 为我们提供的一套镜像构建服务，我们只需要提供 Dockerfile 和相关的基本文件，Docker Hub 就能够在云端自动将它们构建成镜像，之后便可以让其他开发者通过 "),s("code",[a._v("docker pull")]),a._v(" 命令拉取到这一镜像。")]),a._v(" "),s("p",[a._v("自动构建让不需要我们再用本机进行镜像的构建，既能节约时间，又能享受高速的云端机器构建。")]),a._v(" "),s("p",[a._v("在 Docker Hub 中并不直接存放我们用于构建的 Dockerfile 和相关文件，我们必须将 Docker Hub 账号授权到 GitHub 或是 Bitbucket 来从这些代码库中获取 Dockerfile 和相关文件。")]),a._v(" "),s("p",[a._v("在连接到 GitHub 或 Bitbucket 后，我们就可以选择我们存放 Dockerfile 和相关文件的代码仓库用来创建自动构建了。")]),a._v(" "),s("p",[a._v("在基本信息填写完成，点击创建按钮后，Docker Hub 就会开始根据我们 Dockerfile 的内容构建镜像了。而此时，我们也能够访问我们镜像专有的详情页面了。")]),a._v(" "),s("p",[a._v("在 Build Details 页面里，我们可以看到镜像构建的进度和详细的构建情况。")]),a._v(" "),s("h3",{attrs:{id:"_3-1-tar-包共享"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-tar-包共享"}},[a._v("#")]),a._v(" 3.1 tar 包共享")]),a._v(" "),s("ul",[s("li",[a._v("将一个镜像保存为 tar 包")])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" save imagename:version  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" xxxx.tar\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ul",[s("li",[a._v("将多个镜像保存为 tar 包")])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" save imagename1:version1  imagename2:version2  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" xxxx.tar\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"_4-获取镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-获取镜像"}},[a._v("#")]),a._v(" 4.获取镜像")]),a._v(" "),s("p",[a._v("要拉取镜像，我们可以使用 "),s("code",[a._v("docker pull")]),a._v(" 命令，命令的参数就是我们之前所提到的镜像仓库名。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" pull ubuntu\nUsing default tag: latest\nlatest: Pulling from library/ubuntu\n124c757242f8: Downloading "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("30")]),a._v(".19MB/31.76MB\n9d866f8bde2a: Download complete\nfa3f2f277e67: Download complete\n398d32b153e8: Download complete\nafde35469481: Download complete\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("p",[a._v("当我们运行这个命令后，Docker 就会开始从镜像仓库中拉取我们所指定的镜像了，在控制台中，我们可以看到镜像拉取的进度。下载进度会分为几行，其实每一行代表的就是一个镜像层。Docker 首先会拉取镜像所基于的所有镜像层，之后再单独拉取每一个镜像层并组合成这个镜像。当然，如果在本地已经存在相同的镜像层 ( 共享于其他的镜像 )，那么 Docker 就直接略过这个镜像层的拉取而直接采用本地的内容。")]),a._v(" "),s("p",[a._v("上面是一个拉取官方镜像并且没有给出镜像标签的例子，大家注意到，当我们没有提供镜像标签时，Docker 会默认使用 latest 这个标签，这个我们在之前的小节中提到过，就不在赘述了。")]),a._v(" "),s("p",[a._v("当然，我们也能够使用完整的镜像命名来拉取镜像。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" pull openresty/openresty:1.13.6.2-alpine\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.13")]),a._v(".6.2-alpine: Pulling from openresty/openresty\nff3a5c916c92: Pull complete\nede0a2a1012b: Pull complete\n0e0a11843023: Pull complete\n246b2c6f4992: Pull complete\nDigest: sha256:23ff32a1e7d5a10824ab44b24a0daf86c2df1426defe8b162d8376079a548bf2\nStatus: Downloaded newer image "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" openresty/openresty:1.13.6.2-alpine\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("p",[a._v("镜像在被拉取之后，就存放到了本地，接受当前这个 Docker 实例管理了，我们可以通过 "),s("code",[a._v("docker images")]),a._v(" 命令看到它们。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" images\nREPOSITORY            TAG                 IMAGE ID            CREATED             SIZE\nubuntu                latest              cd6d8154f1e1        "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("12")]),a._v(" days ago         "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("84")]),a._v(".1MB\nopenresty/openresty   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.13")]),a._v(".6.2-alpine     08d5c926e4b6        "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" months ago        "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("49")]),a._v(".3MB\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);