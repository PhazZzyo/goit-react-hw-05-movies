"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[538],{6741:function(e,t,n){var r=n(501),c=n(184);t.Z=function(e){var t=e.movies,n=e.prevLocation;return(0,c.jsx)("div",{children:(0,c.jsx)("ul",{children:t?t.map((function(e){var t=e.id,o=e.title;return(0,c.jsx)("li",{children:(0,c.jsx)(r.rU,{to:"/movies/".concat(t),state:{from:n},children:o})},t)})):null})})}},538:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(2982),c=n(885),o=n(2791),a=n(501),i=n(6871),u=n(3509),s=n(2639),l={},f=n(184),h=function(e){var t=e.onSearch,n=(0,o.useState)(""),r=(0,c.Z)(n,2),a=r[0],i=r[1];return(0,f.jsx)("header",{className:l.Searchbar,children:(0,f.jsxs)("form",{className:l.SearchForm,onSubmit:function(e){e.preventDefault();if(""===a.trim())return u.Am.warning("Search field is empty!");t(a),i("")},children:[(0,f.jsx)("button",{type:"submit",className:l.SearchForm_button,children:(0,f.jsx)("span",{className:l.SearchForm_button_label,children:"Search"})}),(0,f.jsx)("input",{className:l.SearchForm_input,type:"text",name:"searchRequest",value:a,onChange:function(e){i(e.currentTarget.value.toLowerCase())},autoComplete:"off",autoFocus:!0,placeholder:"Enter your search request"})]})})},m=n(6741),v=n(8898);function d(){var e=(0,a.lr)(),t=(0,c.Z)(e,2),n=t[0],l=t[1],d=(0,o.useState)([]),p=(0,c.Z)(d,2),_=p[0],g=p[1],S=(0,o.useState)(null),y=(0,c.Z)(S,2),x=y[0],j=y[1],b=(0,o.useState)(!1),w=(0,c.Z)(b,2),A=w[0],k=w[1],Z=n.get("query");console.log(Z);var E=(0,i.TH)();console.log(E),(0,o.useEffect)((function(){if(Z){""!==Z&&function(e){k(!0),setTimeout((function(){try{(0,v.oi)(e).then((function(e){if(!e.data.results.length)return u.Am.error("There is no movies found with that search request");var t=e.data.results.map((function(e){return{id:e.id,title:e.title}}));g((0,r.Z)(t))}))}catch(x){j(x)}finally{k(!1)}}),1e3)}(Z)}}),[Z]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(h,{onSearch:function(e){l({query:"".concat(e)})}}),x&&u.Am.error("Whoops, something went wrong: ".concat(x.message)),A&&(0,f.jsx)(s.Z,{color:"#3f51b5",size:32}),_.length>0&&(0,f.jsx)(m.Z,{movies:_,prevLocation:E})]})}},8898:function(e,t,n){n.d(t,{y:function(){return h},vw:function(){return s},BG:function(){return f},oi:function(){return l},Bt:function(){return m}});var r=n(4569),c=n.n(r),o=function(e){return c().get(e)},a={BASE_URL:"https://api.themoviedb.org/3",API_KEY:"c2a3e67f469a4984c82975dd15f4f53a",DEFAULT_LANGUAGE:"en-US"},i=a.BASE_URL,u=a.API_KEY,s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return o("".concat(i,"/trending/movie/day?api_key=").concat(u,"&page=").concat(e))},l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return o("".concat(i,"/search/movie?api_key=").concat(u,"&page=").concat(t,"&query=").concat(e))},f=function(e){return o("".concat(i,"/movie/").concat(e,"?api_key=").concat(u))},h=function(e){return o("".concat(i,"/movie/").concat(e,"/credits?api_key=").concat(u))},m=function(e){return o("".concat(i,"/movie/").concat(e,"/reviews?api_key=").concat(u))}}}]);
//# sourceMappingURL=538.d7b52ca2.chunk.js.map