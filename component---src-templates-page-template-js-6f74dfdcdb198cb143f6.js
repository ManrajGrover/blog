webpackJsonp([0xd5d9d741ef0b],{530:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=o(1),a=n(r),i=o(2),u=n(i),f=o(202),l=n(f),s=o(303),d=n(s),c=o(302),p=n(c),v=function(e){var t=e.page,o=(t||{}).html;return a.default.createElement(l.default,null,a.default.createElement(d.default,t.frontmatter),a.default.createElement(p.default,{html:o}))};v.propTypes={page:u.default.object.isRequired},t.default=v,e.exports=t.default},531:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=o(530);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n(r).default}}),e.exports=t.default},551:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var u=o(1),f=n(u),l=o(2),s=n(l),d=o(37),c=o(33),p=o(56),v=o(203),g=n(v),h=o(531),m=n(h),y=o(301),b=n(y),_=o(204),E=n(_),P=function(e){function t(){var o,n,i;r(this,t);for(var u=arguments.length,f=Array(u),l=0;l<u;l++)f[l]=arguments[l];return o=n=a(this,e.call.apply(e,[this].concat(f))),n.moveNavigatorAside=p.moveNavigatorAside.bind(n),i=o,a(n,i)}return i(t,e),t.prototype.componentDidMount=function(){"is-featured"===this.props.navigatorPosition&&this.moveNavigatorAside()},t.prototype.render=function(){var e=this.props.data;return f.default.createElement(g.default,null,f.default.createElement(m.default,{page:e.page}),f.default.createElement(b.default,{footnote:e.footnote}),f.default.createElement(E.default,{data:e.post}))},t}(f.default.Component);P.propTypes={data:s.default.object.isRequired,navigatorPosition:s.default.string.isRequired,setNavigatorPosition:s.default.func.isRequired,isWideScreen:s.default.bool.isRequired};var w=function(e,t){return{navigatorPosition:e.navigatorPosition,isWideScreen:e.isWideScreen}},N={setNavigatorPosition:c.setNavigatorPosition,setNavigatorShape:c.setNavigatorShape};t.default=(0,d.connect)(w,N)(P);t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-page-template-js-6f74dfdcdb198cb143f6.js.map