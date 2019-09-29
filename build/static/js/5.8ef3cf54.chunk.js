(window.webpackJsonpapp=window.webpackJsonpapp||[]).push([[5],{61:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(56);t.a=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"movie"},r.a.createElement(o.a,{to:"/movie/"+e.id},r.a.createElement("div",{className:"movie-body"},r.a.createElement("img",{src:""+e.img,alt:""})))))}},64:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n(8),o=n(11),i=n(9),c=n(10),s=n(0),l=n.n(s),m=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(i.a)(t).call(this,e))).state={movies:null,movie:null,isError:!1},n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){try{this.getMovieForPoster()}catch(e){throw new Error("Error: ",e)}}},{key:"render",value:function(){var e=this.state.movie;return e?l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:"home-banner"},l.a.createElement("img",{src:this.setPoster(),alt:""}),l.a.createElement("h1",null,e.Title),l.a.createElement("h2",null,e.Year),l.a.createElement("p",null,e.imdbRating))):l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:"home-banner"},"Loading..."))}},{key:"getMovieForPoster",value:function(){var e=this;fetch("https://".concat(window.location.hostname,":443/api/movies"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({sortBy:"ReleasedUnix",order:"desc",limit:1,skip:Math.floor(50*Math.random())+1})}).then(function(t){return t.json().then(function(t){e.setState({movies:t}),e.getPostersList()}).catch(function(t){e.setState({isError:!0})})})}},{key:"getPostersList",value:function(){var e=this,t=this.state.movies[0];fetch("https://".concat(window.location.hostname,":443/api/poster"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({id:t.imdbID})}).then(function(n){return n.json().then(function(n){n.length<1?e.getMovieForPoster():(t.Posters=n,e.setState({movie:t}))})})}},{key:"setPoster",value:function(){var e=this.state.movie;return e.hasOwnProperty("Posters")?e.Posters[Math.floor(Math.random()*e.Posters.length)+1]:e.Poster}}]),t}(s.Component),u=n(61),h=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(i.a)(t).call(this,e))).state={movies:[]},n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;try{fetch("https://".concat(window.location.hostname,":443/api/movies"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({sortBy:"ReleasedUnix",limit:12})}).then(function(t){return t.json().then(function(t){e.setState({movies:e.props.createMoviesList(u.a,t)})}).catch(function(t){e.setState({isError:!0})})})}catch(t){throw new Error("Error: ",t)}}},{key:"render",value:function(){return this.state.movies?l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"section just-added"},l.a.createElement("header",null,l.a.createElement("h1",null,"Just Added")),l.a.createElement("div",{className:"section-body"},this.state.movies))):l.a.createElement("section",{className:"section just-added"},l.a.createElement("header",null,l.a.createElement("h1",null,"Just Added")),l.a.createElement("div",{className:"section-body"},"Loading..."))}}]),t}(s.Component),d=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(i.a)(t).call(this,e))).state={movies:[]},n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;try{fetch("https://".concat(window.location.hostname,":443/api/movies"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({sortBy:"imdbRating",limit:12})}).then(function(t){return t.json().then(function(t){e.setState({movies:e.props.createMoviesList(u.a,t)})}).catch(function(t){e.setState({isError:!0})})})}catch(t){throw new Error("Error: ",t)}}},{key:"render",value:function(){return this.state.movies?l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"section recommended"},l.a.createElement("header",null,l.a.createElement("h1",null,"Recommended")),l.a.createElement("div",{className:"section-body"},this.state.movies))):l.a.createElement("section",{className:"section recommended"},l.a.createElement("header",null,l.a.createElement("h1",null,"Recommended")),l.a.createElement("div",{className:"section-body"},"Loading..."))}}]),t}(s.Component);function v(){var e=function(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var i,c=t[Symbol.iterator]();!(a=(i=c.next()).done);a=!0){var s=i.value;n.push(l.a.createElement(e,{key:s.imdbID,id:s.imdbID,img:s.Poster,name:s.Title,year:s.Released,country:s.Country}))}}catch(m){r=!0,o=m}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}return n};return l.a.createElement(l.a.Fragment,null,l.a.createElement("main",{className:"home-sections"},l.a.createElement(h,{createMoviesList:e}),l.a.createElement(d,{createMoviesList:e})))}n(64);n.d(t,"default",function(){return p});var p=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(i.a)(t).call(this,e))).state={email:"",password:""},n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Home"),l.a.createElement("div",{className:"home-wrapper"},l.a.createElement(m,null),l.a.createElement(v,null)))}}]),t}(s.Component)}}]);
//# sourceMappingURL=5.8ef3cf54.chunk.js.map