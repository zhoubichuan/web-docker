(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{442:function(s,a,t){s.exports=t.p+"assets/img/2.fe4f278c.png"},511:function(s,a,t){"use strict";t.r(a);var e=t(28),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"七-使用-node-项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#七-使用-node-项目"}},[s._v("#")]),s._v(" 七.使用 NODE 项目")]),s._v(" "),e("h2",{attrs:{id:"_1-安装-node-js"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装-node-js"}},[s._v("#")]),s._v(" 1.安装 node.js")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("docker pull node\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"_2-修改后端项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-修改后端项目"}},[s._v("#")]),s._v(" 2.修改后端项目")]),s._v(" "),e("p",[s._v("进入项目根目录创建"),e("code",[s._v("Dockerfile")]),s._v("文件")]),s._v(" "),e("div",{staticClass:"language-Dockerfile line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[e("code",[e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" node:8.0.0")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("MAINTAINER")]),s._v(" EOT")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" . /app/")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" /app")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" npm install")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENV")]),s._v(" HOST O.0.0.0")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENV")]),s._v(" PORT 8000")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXPOSE")]),s._v(" 8000")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" ["),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm"')]),s._v(","),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"start"')]),s._v("]")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("h2",{attrs:{id:"_3-创建-image"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-创建-image"}},[s._v("#")]),s._v(" 3.创建 image")]),s._v(" "),e("p",[s._v("在"),e("code",[s._v("Dockerfile")]),s._v("文件同目录中执行")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build -t myproject "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"_4-启动镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-启动镜像"}},[s._v("#")]),s._v(" 4.启动镜像")]),s._v(" "),e("p",[e("img",{attrs:{src:t(442),alt:""}})]),s._v(" "),e("ul",[e("li",[s._v("查看"),e("a",{attrs:{href:"localhost:8000"}},[s._v("localhost:8000")])])]),s._v(" "),e("h2",{attrs:{id:"_5-查看运行的镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-查看运行的镜像"}},[s._v("#")]),s._v(" 5.查看运行的镜像")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);