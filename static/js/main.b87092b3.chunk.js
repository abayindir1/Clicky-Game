(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],{1:function(e,t,a){},10:function(e,t,a){e.exports=a(15)},15:function(e,t,a){"use strict";a.r(t);var o=a(0),c=a.n(o),n=a(3),r=a.n(n);a(1);var s=function(){return c.a.createElement("div",{id:"header"},c.a.createElement("h1",null,"Clicky Game"))},i=a(4),l=a(5),m=a(8),d=a(6),p=a(9);var u=function(e){return c.a.createElement("img",{src:e.src,id:e.id,alt:e.alt,onClick:function(){return e.shuffleImages(e.id)}})},g=a(7),h=function(e){function t(){var e,a;Object(i.a)(this,t);for(var o=arguments.length,c=new Array(o),n=0;n<o;n++)c[n]=arguments[n];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={boxers:g,clicked:[],score:0,topScore:0,message:"Click on an image to earn points, but don't click on any more than once!"},a.handleClick=function(e){console.log("clicked"),a.randomizeImages(a.state.boxers),a.state.clicked.includes(e)?a.endGame():(a.state.clicked.push(e),a.correctClick(),console.log(a.state.score),console.log(a.state.topScore))},a.correctClick=function(){a.setState({score:a.state.score+1,message:"Good punch champ!"}),a.randomizeImages(a.state.boxers)},a.endGame=function(){document.body.scrollTop=document.documentElement.scrollTop=0,a.setState({clicked:[],topScore:a.state.score,score:0,message:"You already clicked that one, try again champ!"}),a.state.topScore>a.state.score&&a.setState({topScore:a.state.topScore})},a.randomizeImages=function(e){for(var t=1;t<e.length;t++){var a=Math.floor(Math.random()*(t+1)),o=e[t];e[t]=e[a],e[a]=o}return e},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{id:"main"},c.a.createElement("div",{id:"instructor"},c.a.createElement("div",{id:"click-header"},c.a.createElement("h3",null,this.state.message),c.a.createElement("h1",null,"Score:",this.state.score," | Top Score:",this.state.topScore))),c.a.createElement("div",{id:"image-content"},this.randomizeImages(this.state.boxers).map((function(t){return c.a.createElement(u,{key:t.id,id:t.id,alt:t.alt,src:t.src,shuffleImages:e.handleClick})}))))}}]),t}(o.Component);var y=function(){return c.a.createElement("div",{id:"footer"})};var f=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(s,null),c.a.createElement(h,null),c.a.createElement(y,null))};r.a.render(c.a.createElement(f,null),document.getElementById("root"))},7:function(e){e.exports=JSON.parse('[{"id":1,"alt":"Muhammed Ali","src":"https://www.biography.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_620/MTE5NDg0MDU0ODc2NTU0NzY3/muhammad-ali-1-raw.jpg"},{"id":2,"alt":"Sugar Ray Robinson","src":"https://upload.wikimedia.org/wikipedia/commons/c/cb/Sugar_Ray_Robinson_1947.jpg"},{"id":3,"alt":"Rocky Marciano","src":"https://www.massmoments.org/files/assets/moments/09-23-1952/09_23.1_1952.jpg"},{"id":4,"alt":"Mike Tyson","src":"https://brobible.files.wordpress.com/2019/10/gettyimages-51763505.jpg?quality=90&w=650&h=444"},{"id":5,"alt":"Floyd Mayweather","src":"https://s.abcnews.com/images/Sports/GTY_Floyd_Mayweather_Jr_ml_150430_4x3_992.jpg"},{"id":6,"alt":"Manny Pacquiao","src":"https://images.complex.com/complex/image/upload/c_limit,dpr_auto,q_90,w_720/fl_lossy,pg_1/Pacquiao_xq7rgj.jpg"},{"id":7,"alt":"Tyson Fury","src":"https://photo.boxingscene.com/uploads/tyson-fury_6.jpg"},{"id":8,"alt":"Deontay Wilder","src":"https://2upyml2xgast2pwf71r0ycaj-wpengine.netdna-ssl.com/wp-content/uploads/Deontay_Wilder_Joshua-e1505764182689.jpg"},{"id":9,"alt":"Roy Jones","src":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQyxMe-oAaHiDLb7Lp11_y0tnH-OsQngybUMwDzUk0h8rPSP47"},{"id":10,"alt":"Joe Frazier","src":"https://boxrec.com/media/images//thumb/3/31/Joe_Frazier-1600.jpg/300px-Joe_Frazier-1600.jpg"},{"id":11,"alt":"Canelo Alvarez","src":"http://cdn.24.co.za/files/Cms/General/d/7838/e9f9bb0ede33407397730b30b62156c6.png"},{"id":12,"alt":"Lennox Lewis","src":"http://static9.bornrichimages.com/cdn2/500/500/91/c/wp-content/uploads/s3/2013/06/274311_ezfsn_300x300.jpg"}]')}},[[10,1,2]]]);
//# sourceMappingURL=main.b87092b3.chunk.js.map