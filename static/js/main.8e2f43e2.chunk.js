(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t){},110:function(e,t){},120:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(62),r=a.n(s),c=(a(69),a(8)),i=a(9),l=a(11),u=a(10),m=a(12),d=(a(45),a(17)),h=a(121),p=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={value:""},a.book=o.a.createRef(),a.handleChange=a.handleChange.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){this.book=e.target.value,this.setState({value:this.book})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("div",{className:"searchBox"},"Welcome to BetterReads !!  ",o.a.createElement("br",null)," ",o.a.createElement("br",null),o.a.createElement("input",{type:"text",ref:function(t){return e.book=t},placeholder:"search books",onChange:this.handleChange}),o.a.createElement("button",null,o.a.createElement(h.a,{to:"/listBooks/"+this.state.value,params:{info:this.book}},"Search")))))}}]),t}(n.Component),b=a(34),g=a.n(b),f=a(35),v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={bookName:"",data:"",info:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this;console.log(this.props.match.params.info),g.a.get("https://www.goodreads.com/search/index.xml?key=LsvXe6tyOcFzGePEMDiw&q="+this.props.match.params.info).then(function(t){e.setState({data:t.data}),Object(f.parseString)(e.state.data,function(t,a){e.setState({data:a}),e.setState({info:e.state.data.GoodreadsResponse.search[0].results[0].work}),console.log(e.state.info)})})}},{key:"render",value:function(){var e=this.state.info.map(function(e){return o.a.createElement("div",{className:"col-sm-3"},o.a.createElement("div",{class:"card"},o.a.createElement(h.a,{to:"/bookDetails/"+parseInt(e.id[0]._),params:{info:parseInt(e.id[0]._)}},o.a.createElement("img",{class:"card-img-top",src:e.best_book[0].image_url,alt:"no"}),o.a.createElement("h6",{class:"card-title"},e.best_book[0].title))))});return o.a.createElement("div",{className:"row"},e)}}]),t}(o.a.Component),k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={data:"",authors:[],description:"",avg_rating:"",book_img:""},a.getBookDescription(),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"getBookDescription",value:function(){var e=this;console.log("Loading Data"),g.a.get("https://www.goodreads.com/book/show/"+this.props.match.params.info+".xml?key=LsvXe6tyOcFzGePEMDiw").then(function(t){console.log(t),e.setState({data:t.data}),Object(f.parseString)(e.state.data,function(t,a){console.log(a),e.setState({data:a}),e.setState({authors:e.state.data.GoodreadsResponse.book[0].authors,description:e.state.data.GoodreadsResponse.book[0].description,avg_rating:e.state.data.GoodreadsResponse.book[0].average_rating}),console.log(e.state.authors),console.log(e.state.description),console.log(e.state.avg_rating)})})}},{key:"render",value:function(){var e=this.state.authors.map(function(e){return o.a.createElement("div",{className:"authorName"},e.author[0].name)});return console.log("getting the information for book id : "+parseInt(this.props.match.params.info)),o.a.createElement("div",{className:"BookInformation"},o.a.createElement("div",{className:"Description"},"Description : ",o.a.createElement("td",null),this.state.description),o.a.createElement("div",{className:"Authors"},"Authors : ",o.a.createElement("td",null),e),o.a.createElement("div",{className:"AvgRating"},"Rating : ",o.a.createElement("td",null),this.state.avg_rating))}}]),t}(o.a.Component),E=a(122),O=a(123),j=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(E.a,null,o.a.createElement("div",null,o.a.createElement("div",{className:"rowspan 12"},o.a.createElement(p,null)),o.a.createElement(O.a,{path:"/listBooks/:info",component:v}),o.a.createElement(O.a,{path:"/bookDetails/:info",component:k})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},45:function(e,t,a){},64:function(e,t,a){e.exports=a(120)},69:function(e,t,a){}},[[64,2,1]]]);
//# sourceMappingURL=main.8e2f43e2.chunk.js.map