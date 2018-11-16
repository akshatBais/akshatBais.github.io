(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,t){},111:function(e,t){},127:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),s=a(65),i=a.n(s),r=a(8),c=a(9),l=a(11),m=a(10),u=a(12),h=(a(45),a(13)),p=a(128),d=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={value:""},a.book=n.a.createRef(),a.handleChange=a.handleChange.bind(Object(h.a)(Object(h.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.book=e.target.value,this.setState({value:this.book})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("div",{className:"searchBox"},n.a.createElement("input",{className:"textBox",type:"text",ref:function(t){return e.book=t},placeholder:"search books",onChange:this.handleChange}),n.a.createElement("button",null,n.a.createElement(p.a,{to:"/listBooks/"+this.state.value,params:{info:this.state.value}}," Search")))))}}]),t}(o.Component),b=a(41),k=a.n(b),f=(a(51),a(120),a(42)),g=a.n(f),v=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).data={bookName:"",info:[]},a.count=0,a.state={info:[]},a.getRequiredData=a.getRequiredData.bind(Object(h.a)(Object(h.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){this.data.bookName===this.props.match.params.info&&""!==this.data.bookName||this.getRequiredData(),this.data.bookName=this.props.match.params.info}},{key:"componentWillUpdate",value:function(){console.log("Book keyword searched is : "+this.props.match.params.info),this.data.bookName===this.props.match.params.info&&""!==this.data.bookName||this.getRequiredData(),this.data.bookName!==this.props.match.params&&(this.data.bookName=this.props.match.params.info)}},{key:"getRequiredData",value:function(){console.log("Getting the required details");var e=g()("GET","https://searchbookapp.herokuapp.com/getBooks?q="+this.props.match.params.info);console.log(JSON.parse(e.getBody())),this.setState({info:JSON.parse(e.getBody())}),console.log(this.state.info)}},{key:"render",value:function(){console.log(this.state.info);var e=this.state.info.map(function(e){return n.a.createElement("div",{className:"col-sm-3",key:e.id[0]._},n.a.createElement("div",{className:"card"},n.a.createElement(p.a,{to:"/bookDetails/"+parseInt(e.best_book[0].id[0]._),params:{info:parseInt(e.best_book[0].id[0]._)}},n.a.createElement("img",{className:"card-img-top",src:e.best_book[0].image_url,alt:"no"}),n.a.createElement("h6",{className:"card-title"},e.best_book[0].title))))});return n.a.createElement("div",{className:"row"},e)}}]),t}(n.a.Component),E=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={data:"",authors:[],description:"",avg_rating:"",book_img:"",bookName:""},a.data={info:[]},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=this;console.log("component will mount"),console.log("Loading Data in getBookDescription"),console.log(this.props.match.params.info),k()("https://searchbookapp.herokuapp.com/getDetails?q="+parseInt(this.props.match.params.info)).then(function(t){e.data.info=t.data,console.log(t.data),e.setState({authors:e.data.info.GoodreadsResponse.book[0].authors,description:e.data.info.GoodreadsResponse.book[0].description[0],avg_rating:e.data.info.GoodreadsResponse.book[0].average_rating,book_img:e.data.info.GoodreadsResponse.book[0].image_url[0],bookName:e.data.info.GoodreadsResponse.book[0].title})})}},{key:"componentDidMount",value:function(){this._isMount=!0,console.log("Component is mounted")}},{key:"componentWillUnmount",value:function(){this._isMount=!1,console.log("component will unmount")}},{key:"render",value:function(){var e=this.state.authors.map(function(e){return n.a.createElement("div",{className:"authorName"},e.author[0].name)});return console.log("getting the information for book id : "+parseInt(this.props.match.params.info)),n.a.createElement("div",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-4"},n.a.createElement("img",{className:"book_img",src:this.state.book_img,alt:"book"})),n.a.createElement("div",{className:"col-sm-6"},n.a.createElement("strong",null,n.a.createElement("h3",null,this.state.bookName)),n.a.createElement("br",null),"by ",n.a.createElement("b",null,"  ",e," ")," ",n.a.createElement("strong",null,"Average Rating : ")," ",this.state.avg_rating,n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{className:"bookDescription",dangerouslySetInnerHTML:{__html:this.state.description}}))))}}]),t}(n.a.Component),N=a(129),O=a(130),j=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement(N.a,null,n.a.createElement("div",{className:"Home"},n.a.createElement("div",{className:"welcome"},n.a.createElement("h1",null,n.a.createElement("strong",null,"Welcome to ",n.a.createElement(p.a,{to:"/home"},"BetterReads !!")))),n.a.createElement("div",null,n.a.createElement(O.a,{path:"/",component:d})),n.a.createElement(O.a,{path:"/listBooks/:info",component:v}),n.a.createElement(O.a,{path:"/bookDetails/:info",component:E})))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},45:function(e,t,a){},67:function(e,t,a){e.exports=a(127)}},[[67,2,1]]]);
//# sourceMappingURL=main.051048be.chunk.js.map