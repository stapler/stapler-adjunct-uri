/*! URI.js v1.8.1 http://medialize.github.com/URI.js/ */
/* build contains: jquery.URI.js */
(function(c,e){"object"===typeof exports?module.exports=e(require("jquery","./URI")):"function"===typeof define&&define.amd?define(["jquery","./URI"],e):e(c.jQuery,c.URI)})(this,function(c,e){function h(a){return a.replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")}function i(a){var b;c.each(["src","href","action"],function(d,c){return c in a?(b=c,!1):!0});return"input"===a.nodeName.toLowerCase()&&"image"!==a.type?void 0:b}function j(a,b){var d,f,e;if(!i(a)||!b)return!1;d=b.match(m);if(!d||!d[5]&&":"!==
d[2]&&!g[d[2]])return!1;e=c(a).uri();if(d[5])return e.is(d[5]);if(":"===d[2])return f=d[1].toLowerCase()+":",!g[f]?!1:g[f](e,d[4]);f=d[1].toLowerCase();return!k[f]?!1:g[d[2]](e[f](),d[4],f)}var k={},g={"=":function(a,b){return a===b},"^=":function(a,b){return!!(a+"").match(RegExp("^"+h(b),"i"))},"$=":function(a,b){return!!(a+"").match(RegExp(h(b)+"$","i"))},"*=":function(a,b,d){"directory"==d&&(a+="/");return!!(a+"").match(RegExp(h(b),"i"))},"equals:":function(a,b){return a.equals(b)},"is:":function(a,
b){return a.is(b)}};c.each("authority directory domain filename fragment hash host hostname href password path pathname port protocol query resource scheme search subdomain suffix tld username".split(" "),function(a,b){k[b]=!0;c.attrHooks["uri:"+b]={get:function(a){return c(a).uri()[b]()},set:function(a,e){c(a).uri()[b](e);return e}}});var n=function(a,b){return c(a).uri().href(b).toString()};c.each(["src","href","action","uri"],function(a,b){c.attrHooks[b]={set:n}});c.attrHooks.uri.get=function(a){return c(a).uri()};
c.fn.uri=function(a){var b=this.first(),d=b.get(0),c=i(d);if(!c)throw Error('Element "'+d.nodeName+'" does not have either property: href, src, action');if(void 0!==a){var g=b.data("uri");if(g)return g.href(a);a instanceof e||(a=e(a))}else{if(a=b.data("uri"))return a;a=e(b.attr(c))}a._dom_element=d;a._dom_attribute=c;a.normalize();b.data("uri",a);return a};e.prototype.build=function(a){if(this._dom_element)this._string=e.build(this._parts),this._deferred_build=!1,this._dom_element.setAttribute(this._dom_attribute,
this._string),this._dom_element[this._dom_attribute]=this._string;else if(!0===a)this._deferred_build=!0;else if(void 0===a||this._deferred_build)this._string=e.build(this._parts),this._deferred_build=!1;return this};var l,m=/^([a-zA-Z]+)\s*([\^\$*]?=|:)\s*(['"]?)(.+)\3|^\s*([a-zA-Z0-9]+)\s*$/;l=c.expr.createPseudo?c.expr.createPseudo(function(a){return function(b){return j(b,a)}}):function(a,b,c){return j(a,c[3])};c.expr[":"].uri=l;return{}});