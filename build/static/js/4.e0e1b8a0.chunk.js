(window.webpackJsonpapp=window.webpackJsonpapp||[]).push([[4],{61:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(56);t.a=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"movie"},n.a.createElement(o.a,{to:"/movie/"+e.id},n.a.createElement("div",{className:"movie-body"},n.a.createElement("img",{src:""+e.img,alt:""})))))}},67:function(e,t,a){},68:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var r=a(7),n=a(8),o=a(11),c=a(9),s=a(10),i=a(0),l=a.n(i),u=a(1),h=a.n(u),p=a(5),m=a.n(p),f=a(6),d=a.n(f),v=a(16),y=a(24),E=a.n(y),b={},g=0,O=function(e){var t=e,a=b[t]||(b[t]={});if(a[e])return a[e];var r=E.a.compile(e);return g<1e4&&(a[e]=r,g++),r},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("/"===e)return e;var a=O(e);return a(t,{pretty:!0})},S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e};var w=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.isStatic=function(){return this.context.router&&this.context.router.staticContext},t.prototype.componentWillMount=function(){d()(this.context.router,"You should not use <Redirect> outside a <Router>"),this.isStatic()&&this.perform()},t.prototype.componentDidMount=function(){this.isStatic()||this.perform()},t.prototype.componentDidUpdate=function(e){var t=Object(v.b)(e.to),a=Object(v.b)(this.props.to);Object(v.c)(t,a)?m()(!1,"You tried to redirect to the same route you're currently on: \""+a.pathname+a.search+'"'):this.perform()},t.prototype.computeTo=function(e){var t=e.computedMatch,a=e.to;return t?"string"===typeof a?j(a,t.params):S({},a,{pathname:j(a.pathname,t.params)}):a},t.prototype.perform=function(){var e=this.context.router.history,t=this.props.push,a=this.computeTo(this.props);t?e.push(a):e.replace(a)},t.prototype.render=function(){return null},t}(l.a.Component);w.propTypes={computedMatch:h.a.object,push:h.a.bool,from:h.a.string,to:h.a.oneOfType([h.a.string,h.a.object]).isRequired},w.defaultProps={push:!1},w.contextTypes={router:h.a.shape({history:h.a.shape({push:h.a.func.isRequired,replace:h.a.func.isRequired}).isRequired,staticContext:h.a.object}).isRequired};var R=w,N=a(61);a(67);function T(){return l.a.createElement("aside",{className:"search-icon"},l.a.createElement("img",{src:"/search.svg",alt:""}))}function x(e){var t=l.a.createRef();return l.a.createElement("div",{className:"search-field"},l.a.createElement("input",{className:"",type:"text",onFocus:e.handlerFocus,onBlur:e.handlerBlur,onKeyUp:function(){var a=t.current;console.log(a.value),fetch("https://".concat(window.location.hostname,":443/api/movies/name"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:a.value})}).then(function(t){return t.json().then(function(t){e.returnSearchResultsToParent(t)})}).catch(function(e){return console.log(e)})},ref:t}))}a(68);var P=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(c.a)(t).call(this,e))).state={searchResults:[]},a.SearchBar=l.a.createRef(),a.handleSearchOnFocus=function(){a.SearchBar.current.classList.toggle("searchBar-active"),console.log(a.SearchBar.current.classList)},a.searchResults=function(e){a.setState({searchResults:e})},a.makeResults=function(e){if(e.length<1)return[];var t=[],a=!0,r=!1,n=void 0;try{for(var o,c=e[Symbol.iterator]();!(a=(o=c.next()).done);a=!0){var s=o.value;t.push(l.a.createElement("div",{className:"search-results-item"},l.a.createElement("img",{src:s.Poster,alt:""}),l.a.createElement("div",{className:"search-result-description"},l.a.createElement("h1",{className:"title"},s.Title),l.a.createElement("p",{className:"released"},s.Released),l.a.createElement("p",{className:"genre"},s.Genre),l.a.createElement("p",{className:"rating"},s.Ratings[0].Value))))}}catch(i){r=!0,n=i}finally{try{a||null==c.return||c.return()}finally{if(r)throw n}}return t},a}return Object(s.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this.state.searchResults;return l.a.createElement("section",{className:"searchBar"},l.a.createElement("main",{ref:this.SearchBar},l.a.createElement(T,null),l.a.createElement(x,{handlerFocus:this.handleSearchOnFocus,handlerBlur:this.handleSearchOnFocus,returnSearchResultsToParent:this.searchResults})),l.a.createElement("aside",{className:"search-results"},this.makeResults(e)))}}]),t}(i.Component);a.d(t,"default",function(){return B});var B=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(c.a)(t).call(this,e))).createMoviesList=function(e,t){var a=[],r=!0,n=!1,o=void 0;try{for(var c,s=t[Symbol.iterator]();!(r=(c=s.next()).done);r=!0){var i=c.value;a.push(l.a.createElement(e,{key:i.imdbID,id:i.imdbID,img:i.Poster,name:i.Title,year:i.Released,country:i.Country}))}}catch(u){n=!0,o=u}finally{try{r||null==s.return||s.return()}finally{if(n)throw o}}return a},a.state={isError:!1,movies:localStorage.getItem("movies")?a.createMoviesList(N.a,JSON.parse(localStorage.getItem("movies"))):[]},a}return Object(s.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this;try{fetch("https://".concat(window.location.hostname,":443/api/movies"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(t){return t.json().then(function(t){var a=t;e.state.movies!==a&&(e.setState({movies:e.createMoviesList(N.a,a)})||localStorage.setItem("movies",JSON.stringify(a)))}).catch(function(t){e.setState({isError:t})})})}catch(t){throw new Error("Error: "+t)}}},{key:"render",value:function(){var e=this.state,t=e.movies;return e.isError?l.a.createElement(R,{to:"/404"}):t?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"content-wrapper"},l.a.createElement("main",{className:"content-sections"},l.a.createElement("header",null,l.a.createElement(P,null)),l.a.createElement("section",{className:"section"},l.a.createElement("header",null,l.a.createElement("h1",null,"Movies")),l.a.createElement("div",{className:"section-body"},this.state.movies))))):l.a.createElement(l.a.Fragment,null,"Loading...")}}]),t}(i.Component)}}]);
//# sourceMappingURL=4.e0e1b8a0.chunk.js.map