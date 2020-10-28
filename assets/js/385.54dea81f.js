(window.webpackJsonp=window.webpackJsonp||[]).push([[385],{198:function(t,a,e){"use strict";e.r(a);var _=e(0),v=Object(_.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("h2",{attrs:{id:"支持忽略自定义的trace"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#支持忽略自定义的trace"}},[t._v("#")]),t._v(" 支持忽略自定义的trace")]),t._v(" "),e("p",[e("code",[t._v("apm-trace-ignore-plugin")]),t._v(" 是可选插件。")]),t._v(" "),e("h2",{attrs:{id:"介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),e("ul",[e("li",[t._v("这个插件的目的是过滤掉你希望被忽略的endpoint。")]),t._v(" "),e("li",[t._v("你可以设置多个URL路径模式。匹配到的endpoint将会不会被追踪。")]),t._v(" "),e("li",[t._v("当前的匹配规则遵循"),e("code",[t._v("Ant Path")]),t._v("匹配样式，比如"),e("code",[t._v("/path/*")]),t._v("，"),e("code",[t._v("/path/**")]),t._v("，"),e("code",[t._v("/path/?")]),t._v("。")]),t._v(" "),e("li",[t._v("将"),e("code",[t._v("apm-trace-ignore-plugin-x.jar")]),t._v("复制到"),e("code",[t._v("agent/plugins")]),t._v("，重启"),e("code",[t._v("agent")]),t._v("，插件将会生效。")])]),t._v(" "),e("h2",{attrs:{id:"如何配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何配置"}},[t._v("#")]),t._v(" 如何配置")]),t._v(" "),e("p",[t._v("有两种方式配置要忽略的endpoint的模式。通过系统环境变量配置有更高的优先级。")]),t._v(" "),e("ol",[e("li",[t._v("通过设置系统环境变量配置。增加 "),e("code",[t._v("skywalking.trace.ignore_path")]),t._v(" 到系统环境变量中，值是要忽略的路径。多个路径之间用"),e("code",[t._v(",")]),t._v("分隔。")]),t._v(" "),e("li",[t._v("将"),e("code",[t._v("/agent/optional-plugins/apm-trace-ignore-plugin/apm-trace-ignore-plugin.config")]),t._v(" 复制到 "),e("code",[t._v("/agent/config/")]),t._v(" 目录下, 增加过滤规则。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("trace.ignore_path=/your/path/1/**,/your/path/2/**\n")])])])])}],!1,null,null,null);a.default=v.exports}}]);