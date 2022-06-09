"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[405],{5700:function(A,n,e){e.d(n,{W:function(){return c}});var t="Container_container__VVOCq",r=e(184),c=function(A){var n=A.children;return(0,r.jsx)("div",{className:t,children:n})}},8405:function(A,n,e){e.r(n),e.d(n,{default:function(){return w}});var t=e(885),r=e(2791),c=e(6871),a=e(3509),i=e(5700),s=e(2639),o=e(501),l="Button_button__NWQIA",d=e(184);function u(){var A=(0,c.TH)().state;return(null===A||void 0===A?void 0:A.from)&&(0,d.jsx)(o.rU,{to:A.from,children:(0,d.jsx)("button",{type:"button",className:l,children:(0,d.jsx)("span",{children:"Back"})})})}var g={},v=e(2541),h="https://image.tmdb.org/t/p/",p="w500";function D(A){var n,e=A.movie,t=e.id,r=e.backdrop_path,a=e.title,i=e.release_date,s=e.popularity,l=e.overview,u=e.genres,D=p,m="".concat(h).concat(D).concat(r),w=(0,c.TH)();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:g["card__info--general"],children:[(0,d.jsx)("div",{className:g.img__wrapper,children:r?(0,d.jsx)("img",{src:"".concat(m),alt:a}):(0,d.jsx)("img",{src:v,alt:a})}),(0,d.jsxs)("div",{className:g.details__wrapper,children:[(0,d.jsxs)("h2",{children:[(0,d.jsx)("span",{children:a}),(0,d.jsxs)("span",{children:["(",R(i),")"]})]}),(0,d.jsxs)("p",{children:[" User score: ",(n=s,Math.round(n))," %"]}),(0,d.jsx)("h3",{children:"Overview"}),(0,d.jsx)("p",{children:l}),(0,d.jsx)("h4",{children:"Genres"}),(0,d.jsx)("p",{children:Y(u)})]})]}),(0,d.jsxs)("div",{className:g["card__info--additional"],children:[(0,d.jsx)("h5",{children:"Additional information"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(o.rU,{to:"/movies/".concat(t,"/cast"),state:w.state,children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(o.rU,{to:"/movies/".concat(t,"/reviews"),state:w.state,children:"Reviews"})})]})]})]})}function R(A){return new Date(A).getFullYear()}function Y(A){return A.map((function(A){return A.name})).join(", ")}var m=e(8898);function w(){var A=(0,c.UO)().movieId,n=(0,r.useState)(),e=(0,t.Z)(n,2),o=e[0],l=e[1],g=(0,r.useState)(!1),v=(0,t.Z)(g,2),h=v[0],p=v[1],R=(0,r.useState)(null),Y=(0,t.Z)(R,2),w=Y[0],B=Y[1];return(0,r.useEffect)((function(){p(!0);try{(0,m.BG)(A).then((function(A){var n=A.data,e=n.id,t=n.backdrop_path,r=n.title,c=n.release_date,a=n.popularity,i=n.overview,s=n.genres;l({id:e,backdrop_path:t,title:r,release_date:c,popularity:a,overview:i,genres:s})}))}catch(w){B(w)}finally{p(!1)}}),[A]),(0,d.jsxs)(d.Fragment,{children:[w&&a.Am.error("Whoops, something went wrong: ".concat(w.message)),(0,d.jsxs)(d.Fragment,{children:[h&&(0,d.jsx)(s.Z,{color:"#3f51b5",size:32}),(0,d.jsx)(u,{}),(0,d.jsx)(i.W,{children:o&&(0,d.jsx)(D,{movie:o})}),(0,d.jsx)(c.j3,{})]})]})}},8898:function(A,n,e){e.d(n,{y:function(){return u},vw:function(){return o},BG:function(){return d},oi:function(){return l},Bt:function(){return g}});var t=e(4569),r=e.n(t),c=function(A){return r().get(A)},a={BASE_URL:"https://api.themoviedb.org/3",API_KEY:"c2a3e67f469a4984c82975dd15f4f53a",DEFAULT_LANGUAGE:"en-US"},i=a.BASE_URL,s=a.API_KEY,o=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return c("".concat(i,"/trending/movie/day?api_key=").concat(s,"&page=").concat(A))},l=function(A){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return c("".concat(i,"/search/movie?api_key=").concat(s,"&page=").concat(n,"&query=").concat(A))},d=function(A){return c("".concat(i,"/movie/").concat(A,"?api_key=").concat(s))},u=function(A){return c("".concat(i,"/movie/").concat(A,"/credits?api_key=").concat(s))},g=function(A){return c("".concat(i,"/movie/").concat(A,"/reviews?api_key=").concat(s))}},2541:function(A){A.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=405.33952ab4.chunk.js.map