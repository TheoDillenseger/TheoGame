(this.webpackJsonptheo_game=this.webpackJsonptheo_game||[]).push([[0],{101:function(e,t){},120:function(e,t,n){"use strict";n.r(t);var a,l,r=n(0),s=n.n(r),o=n(57),u=n.n(o),c=(n(65),n(12)),i=n(1),m=(n(66),n(3)),b=function(){var e=Object(r.useState)(""),t=Object(m.a)(e,2),n=t[0],a=t[1];return s.a.createElement("div",{className:"container"},s.a.createElement("h1",{className:"titre"},"JDP"),s.a.createElement("h2",null,"menu"),s.a.createElement("div",{className:"form__group field"},s.a.createElement("input",{placeholder:"Pseudo",className:"joinInput",type:"text",onChange:function(e){return a(e.target.value)}}),s.a.createElement("label",{for:"pseudo",class:"form__label"},"Pseudo")),s.a.createElement("p",null),s.a.createElement(c.b,{onClick:function(e){return n?null:e.preventDefault()},to:"/joinGame?name=".concat(n)},s.a.createElement("button",{className:"btn_Rejoindre",type:"submit"},"Rejoindre")),s.a.createElement(c.b,{onClick:function(e){return n?null:e.preventDefault()},to:"/gameMenu?name=".concat(n)},s.a.createElement("button",{className:"btn_Creer",type:"submit"},"Creer")))},h=n(10),E=n.n(h),p=n(11),g=n.n(p),d=n(59),v=n.n(d),f=function(e){var t=e.location,n=Object(r.useState)(""),a=Object(m.a)(n,2),l=a[0],o=a[1],u=Object(r.useState)(""),i=Object(m.a)(u,2),b=i[0],h=i[1],p=Object(r.useState)([]),d=Object(m.a)(p,2),f=d[0],Q=d[1],N=Object(r.useState)(""),y=Object(m.a)(N,2),C=y[0],R=y[1];Object(r.useEffect)((function(){g()("213.32.88.158:5000");var e=E.a.parse(t.search).name;console.log(e),h(e);var n=[];v.a.get("http://213.32.88.158:5000/users/getRooms").then((function(e){n=e.data,console.log("copyRoom :"),console.log(n),Q(n)})).then((function(){}))}),[l]);return s.a.createElement("div",{className:"container"},s.a.createElement("h2",null,"Rejoindre une partie"),s.a.createElement("div",{className:"form__group field"},s.a.createElement("input",{placeholder:"Code",className:"joinInputCode",type:"text",onChange:function(e){return o(e.target.value)}}),s.a.createElement("label",{for:"pseudo",class:"form__labelCode"},"Code")),s.a.createElement(c.b,{onClick:function(e){return function(e){console.log("CureentRoom :: "+l),console.log("Rooms : "),console.log(f),console.log("Index : ");var t=[];return f.map((function(e){return t.push(e)})),console.log("Index"),console.log(t),-1===t.indexOf(e)?(console.log("index == -1"),R("la room n'existe pas"),!1):(console.log("index == okkkkkkkkk"),!0)}(l)?null:e.preventDefault()},to:"/gameMenu?name=".concat(b,"&room=").concat(l)},s.a.createElement("button",{type:"submit",className:"btn_Rejoindre"},"go")),s.a.createElement("p",null,C),s.a.createElement("button",{onClick:function(){window.location="http://213.32.88.158:3000/"},className:"btn_Creer",type:"submit"},"retour au menu"))};var Q,N,y=function(e){var t=e.location,n=Object(r.useState)(""),o=Object(m.a)(n,2),u=(o[0],o[1]),c=Object(r.useState)("test"),i=Object(m.a)(c,2),b=i[0],h=i[1],p=Object(r.useState)([]),d=Object(m.a)(p,2),v=d[0],f=d[1],Q=Object(r.useState)([]),N=Object(m.a)(Q,2),y=(N[0],N[1],Object(r.useState)({})),C=Object(m.a)(y,2),R=C[0],k=C[1],S=Object(r.useState)(""),O=Object(m.a)(S,2),j=O[0],q=O[1],V=Object(r.useState)(""),T=Object(m.a)(V,2),G=(T[0],T[1],Object(r.useState)("")),P=Object(m.a)(G,2),w=P[0],x=P[1],U=Object(r.useState)("game"),M=Object(m.a)(U,2),D=M[0],_=M[1],A=Object(r.useState)(10),B=Object(m.a)(A,2),I=B[0],J=B[1],L=Object(r.useState)(0),z=Object(m.a)(L,2),F=z[0],H=z[1];Object(r.useEffect)((function(){if(a=g()("213.32.88.158:5000"),console.log("id :::::::: ",s),0==F){var e=E.a.parse(t.search),n=e.name,r=e.room,s=e.id;console.log("Room requette = "),console.log("entrer dans compteur"),console.log("room = "+r),a.emit("requetteGetRoom",r),u(n),x(s),H(1),console.log("compteur == "+F)}a.on("getroom",(function(e){var t=e.roomId;console.log("ROOOM CLIENT"),console.log(t),h(t),l=t,console.log("room state = "+l),a.emit("joinRoom",{name:n,roomi:l,id:s})})),a.on("UsersRoom",(function(e){e.room;var t=e.users;console.log(t),f(t),console.log(t);var n=t.find((function(e){return e.id==a.id}));k(n)})),a.on("resetid",(function(){x(s=void 0),console.log("Socket User :: "+a.id),console.log("id ::::: "+s)})),a.on("gameStarted",(function(e){var t=e.choixJeux;console.log("Game STTTTTTTTTTARRRRTTTTED IDD ::::::>>>>  : "+s),window.location="game"==t?void 0==s?"http://213.32.88.158:3000/game?name=".concat(n,"&pinGamme=").concat(l,"&id=").concat(a.id):"http://213.32.88.158:3000/game?name=".concat(n,"&pinGamme=").concat(l,"&id=").concat(s):void 0==s?"http://213.32.88.158:3000/game2?name=".concat(n,"&pinGamme=").concat(l,"&id=").concat(a.id):"http://213.32.88.158:3000/game2?name=".concat(n,"&pinGamme=").concat(l,"&id=").concat(s)}))}),["213.32.88.158:5000",t.search]);var K=function(){window.location="http://213.32.88.158:3000/"};return"admin"===R.role?s.a.createElement("div",{className:"container"},s.a.createElement("h1",null,"Game menu "),s.a.createElement("h1",null,"room : ",b),s.a.createElement("br",null),s.a.createElement("h4",null,"Utilisateurs connect\xe9s :"),s.a.createElement("ul",null,v.map((function(e){return s.a.createElement("li",null,s.a.createElement("h6",null,e.username," "))}))),s.a.createElement("br",null),s.a.createElement("h4",null,"Nombre de question :"),s.a.createElement("select",{name:"nbQuestion",id:"question-select",onChange:function(e){return J(e.target.value)}},s.a.createElement("option",{value:"10"},"10"),s.a.createElement("option",{value:"20"},"20"),s.a.createElement("option",{value:"30"},"30"),s.a.createElement("option",{value:"40"},"40"),s.a.createElement("option",{value:"50"},"50")),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("h4",null,"Choix du jeu :"),s.a.createElement("select",{name:"Choix du jeu :",id:"question-select2",onChange:function(e){return _(e.target.value)}},s.a.createElement("option",{value:"game"},"game"),s.a.createElement("option",{value:"game2"},"game2")),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("button",{onClick:function(){v.length<3?q("il faut etre 3 joueur minimum"):a.emit("startGame",{id:w,nbQuestion:I,choixJeux:D})},className:"btn btn-primary",type:"submit"},"Commencer le jeu"),s.a.createElement("br",null),s.a.createElement("p",null,j),s.a.createElement("button",{onClick:function(){return K()},className:"btn btn-danger",type:"submit"},"retour au menu")):s.a.createElement("div",{className:"container"},s.a.createElement("h1",null,"Game menu "),s.a.createElement("h1",null,"room : ",b),s.a.createElement("br",null),s.a.createElement("h4",null,"Utilisateurs connect\xe9s :"),s.a.createElement("ul",{className:"listeUtilisateur"},v.map((function(e){return s.a.createElement("li",null,s.a.createElement("h6",{className:"liUtilisateur"},e.username))}))),s.a.createElement("br",null),s.a.createElement("button",{onClick:function(){return K()},className:"btn_Creer",type:"submit"},"retour au menu"))},C=n(18),R=n(19),k=n(4),S=n(21),O=n(20),j=function(e){Object(S.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(C.a)(this,n),(a=t.call(this,e)).setUsers=a.setUsers.bind(Object(k.a)(a)),a.setUsersView=a.setUsersView.bind(Object(k.a)(a)),a.changeQuestion=a.changeQuestion.bind(Object(k.a)(a)),a.setQuestion=a.setQuestion.bind(Object(k.a)(a)),a.attenteTest=a.attenteTest.bind(Object(k.a)(a)),a.functionBoolAttenteResultat=a.functionBoolAttenteResultat.bind(Object(k.a)(a)),a.state={users:[],usersView:[],usersTrier:[],name:"",pinGamme:"",id:"",location:e.location,question:"",reponse:"",aRepondu:!1,bonus:!0,compteurVote:0,compteurQuestion:1,compteurQuestionMax:null,afficheResultat:!1,user:{},boolAttenteResultat:!1,messageAttenteResultat:null,resultatBonus:"..."},a}return Object(R.a)(n,[{key:"setUsers",value:function(e){this.setState({users:e}),console.log("voici les users :"),console.log(this.state.users)}},{key:"setUsersView",value:function(e){for(var t=[],n=0;n<e.length;n++)t[n]=e[n];var a=t.findIndex((function(e){return e.id===Q.id}));-1!==a&&(t.splice(a,1),this.setState({usersView:t}))}},{key:"setQuestion",value:function(e){this.setState({question:e})}},{key:"functionBoolAttenteResultat",value:function(){this.setState({boolAttenteResultat:!1,resultatBonus:"..."})}},{key:"formatVoterPar",value:function(e){var t="";if(1==e.length)t=e[0];else if(e.length>1){for(var n=0;n<e.length-1;n++)t=t+e[n]+", ";t+=e[e.length-1]}return t}},{key:"attenteTest",value:function(){setTimeout(this.functionBoolAttenteResultat,3e3),!0===this.state.afficheResultat?this.setState({resultatBonus:"bonus activ\xe9"}):this.setState({resultatBonus:"bonus echou\xe9"})}},{key:"activateBonus",value:function(e){console.log("bonusActiver"),Q.emit("activateBonus",this.state.pinGamme,this.state.name),this.setState({bonus:!1})}},{key:"vote",value:function(e){console.log("id : ",e.target.value),Q.emit("aVoter",{pinGamme:this.state.pinGamme,reponse:e.target.value});var t=this.state.users.find((function(t){return t.id===e.target.value}));this.setState({reponse:t.username,aRepondu:!0})}},{key:"goToRoom",value:function(e){console.log("IDDDDDD   GO   TO    ROOM  :: "+this.state.id),Q.emit("requetteGoToRoom",this.state.pinGamme)}},{key:"changeQuestion",value:function(e){Q.emit("nextQuestion",this.state.pinGamme)}},{key:"boutonQuitter",value:function(e){window.location="http://localhost:3000/gameMenu?name=".concat(this.state.name,"&room=").concat(this.state.pinGamme)}},{key:"componentDidMount",value:function(){var e=this,t=E.a.parse(this.state.location.search),n=t.name,a=t.pinGamme,l=t.id;Q=g()("213.32.88.158:5000"),this.setState({name:n,pinGamme:a,id:l}),Q.on("ResetUserLeave",(function(t){var n=t.users,a=t.compteurQuestion,l=t.compteurQuestionMax;console.log("Test User"),console.log("User Trierrr Client ::::: "),console.log(n);var r=n.find((function(e){return e.id==Q.id}));e.setState({users:n,compteurQuestion:a,compteurQuestionMax:l,user:r}),e.setUsersView(e.state.users)})),Q.on("getUserChange",(function(t){var n=t.users;e.setState({users:n});var a=n.find((function(e){return e.id==Q.id}));e.setState({user:a})})),Q.on("changeAdmin",(function(t){var n=t.socket;console.log("entrer dans change admin"),"admin"==e.state.user.role&&(console.log("nouvelle admin trouver"),e.setState({id:n}),console.log("nouvelle id : "+e.state.id))})),Q.on("goToRoom",(function(){window.location="http://localhost:3000/gameMenu?name=".concat(e.state.name,"&room=").concat(e.state.pinGamme,"&id=").concat(e.state.id)})),Q.on("attenteResultat",(function(t){var n=t.message,a=t.afficheResultat;setTimeout(e.attenteTest,3e3),e.setState({messageAttenteResultat:n,boolAttenteResultat:!0,afficheResultat:a})})),Q.on("envoieResultat",(function(t){var n=t.resultatBonus;e.setState({resultatBonus:n})})),Q.on("bonnusActiver",(function(t){e.setState({afficheResultat:t})})),Q.on("getUserTrier",(function(t){var n=t.userTrier;console.log("USERRRR  TRIERRRRRRRR:"),console.log(n),e.setState({usersTrier:n})})),Q.on("getCurentQuestion",(function(t){var n=t.CurrentQuestion;console.log("QUESSSSSTION : "+n),e.setQuestion(n.text),e.setState({aRepondu:!1,afficheResultat:!1})})),Q.on("compteurVote",(function(t){var n=t.compteur,a=t.users,l=t.compteurQuestion;e.setState({compteurVote:n,users:a,compteurQuestion:l});var r=e.state.users.find((function(e){return e.id==Q.id}));e.setState({user:r}),e.setUsersView(e.state.users),console.log("LES USERS PRESNT"),console.log(e.state.users)})),Q.emit("joinGame",{name:n,pinGamme:a,id:l}),Q.on("GamePlayer",(function(t){t.pinGamme;var n=t.usersNew,a=t.compteurQuestion,l=t.compteurQuestionMax,r=t.bonus;console.log("User GamePlayer2 ::::: "),console.log(n);var s=n.find((function(e){return e.id===Q.id}));e.setUsers(n),e.setUsersView(n),e.setState({compteurQuestion:a,compteurQuestionMax:l,bonus:r,user:s})}))}},{key:"render",value:function(){var e=this;return!0===this.state.boolAttenteResultat?s.a.createElement("div",{className:"container"},s.a.createElement("h1",null,this.state.messageAttenteResultat," "),s.a.createElement("br",null),s.a.createElement("h3",null,"le resultat est : ",this.state.resultatBonus),s.a.createElement("br",null)):!1===this.state.aRepondu?s.a.createElement("div",{className:"container"},s.a.createElement("h3",null,this.state.question),s.a.createElement("br",null),s.a.createElement("ul",{className:"list-group"},this.state.usersView.map((function(t){return s.a.createElement("li",{className:"list-group-item"},s.a.createElement("button",{type:"button",className:"btn_Creer",value:t.id,onClick:function(t){return e.vote(t)}},"  ",t.username))}))),s.a.createElement("h3",null,"Question ",this.state.compteurQuestion,"/",this.state.compteurQuestionMax)):this.state.compteurVote===this.state.users.length&&!1===this.state.bonus?!1===this.state.afficheResultat?"admin"===this.state.user.role?this.state.compteurQuestion===this.state.compteurQuestionMax?s.a.createElement("div",{className:"container"},s.a.createElement("h1",null,"voici les r\xe9sultat : "),s.a.createElement("br",null),s.a.createElement("h3",null,this.state.question),s.a.createElement("br",null),s.a.createElement("ul",{className:"list-group"},this.state.usersTrier.map((function(e){return s.a.createElement("li",{className:"list-group-item"},s.a.createElement("button",{type:"button",className:"btn_Creer",value:e.username},"  ",e.username),s.a.createElement("h4",null,"nb de vote : ",e.nbDeVote))}))),s.a.createElement("btn",{type:"button",className:"btn btn-danger",onClick:function(t){return e.goToRoom(t)}},"Retour a la room")):s.a.createElement("div",{className:"container"},s.a.createElement("h1",null,"voici les r\xe9sultat : "),s.a.createElement("br",null),s.a.createElement("h3",null,this.state.question),s.a.createElement("br",null),s.a.createElement("ul",{className:"list-group"},this.state.usersTrier.map((function(e){return s.a.createElement("li",{className:"list-group-item"},s.a.createElement("button",{type:"button",className:"btn_Creer",value:e.username},"  ",e.username),s.a.createElement("h4",null,"nb de vote : ",e.nbDeVote))}))),s.a.createElement("btn",{type:"button",className:"btn btn-warning",onClick:function(t){return e.changeQuestion(t)}},"Question Suivante"),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("btn",{type:"button",className:"btn btn-danger",onClick:function(t){return e.boutonQuitter(t)}},"Quitter")):s.a.createElement("div",{className:"container"},s.a.createElement("h1",null,"voici les r\xe9sultat : "),s.a.createElement("br",null),s.a.createElement("h3",null,this.state.question),s.a.createElement("br",null),s.a.createElement("ul",{className:"list-group"},this.state.usersTrier.map((function(e){return s.a.createElement("li",{className:"list-group-item"},s.a.createElement("button",{type:"button",className:"btn_Creer",value:e.username},"  ",e.username),s.a.createElement("h4",null,"nb de vote : ",e.nbDeVote))}))),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("btn",{type:"button",className:"btn btn-danger",onClick:function(t){return e.boutonQuitter(t)}},"Quitter")):"admin"===this.state.user.role?this.state.compteurQuestion===this.state.compteurQuestionMax?s.a.createElement("div",{className:"container"},s.a.createElement("h1",null,"voici les r\xe9sultat : "),s.a.createElement("br",null),s.a.createElement("h3",null,this.state.question),s.a.createElement("br",null),s.a.createElement("ul",{className:"list-group"},this.state.usersTrier.map((function(t){return s.a.createElement("li",{className:"list-group-item"},s.a.createElement("button",{type:"button",className:"btn btn-dark",value:t.username},"  ",t.username),s.a.createElement("h4",null,"a \xe9t\xe9 vot\xe9 par : ",e.formatVoterPar(t.voterPar)))}))),s.a.createElement("btn",{type:"button",className:"btn btn-danger",onClick:function(t){return e.goToRoom(t)}},"Retour a la room")):s.a.createElement("div",{className:"container"},s.a.createElement("h1",null,"voici les r\xe9sultat : "),s.a.createElement("br",null),s.a.createElement("h3",null,this.state.question),s.a.createElement("br",null),s.a.createElement("ul",{className:"list-group"},this.state.usersTrier.map((function(t){return s.a.createElement("li",{className:"list-group-item"},s.a.createElement("button",{type:"button",className:"btn_Creer",value:t.username},"  ",t.username),s.a.createElement("h4",null,"a \xe9t\xe9 vot\xe9 par : ",e.formatVoterPar(t.voterPar)))}))),s.a.createElement("btn",{type:"button",className:"btn btn-warning",onClick:function(t){return e.changeQuestion(t)}},"Question Suivante"),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("btn",{type:"button",className:"btn btn-danger",onClick:function(t){return e.boutonQuitter(t)}},"Quitter")):s.a.createElement("div",{className:"container"},s.a.createElement("h1",null,"voici les r\xe9sultat : "),s.a.createElement("br",null),s.a.createElement("h3",null,this.state.question),s.a.createElement("br",null),s.a.createElement("ul",{className:"list-group"},this.state.usersTrier.map((function(t){return s.a.createElement("li",{className:"list-group-item"},s.a.createElement("button",{type:"button",className:"btn_Creer",value:t.username},"  ",t.username),s.a.createElement("h4",null,"a \xe9t\xe9 vot\xe9 par : ",e.formatVoterPar(t.voterPar)))}))),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("btn",{type:"button",className:"btn btn-danger",onClick:function(t){return e.boutonQuitter(t)}},"Quitter")):this.state.compteurVote===this.state.users.length&&!0===this.state.bonus?!1===this.state.afficheResultat?"admin"===this.state.user.role?this.state.compteurQuestion===this.state.compteurQuestionMax?s.a.createElement("div",{className:"container"},s.a.createElement("h1",null,"voici les r\xe9sultat : "),s.a.createElement("br",null),s.a.createElement("h3",null,this.state.question),s.a.createElement("br",null),s.a.createElement("ul",{className:"list-group"},this.state.usersTrier.map((function(e){return s.a.createElement("li",{className:"list-group-item"},s.a.createElement("button",{type:"button",className:"btn_Creer",value:e.username},"  ",e.username),s.a.createElement("h4",null,"nb de vote : ",e.nbDeVote))}))),s.a.createElement("btn",{type:"button",className:"btn btn-danger",onClick:function(t){return e.goToRoom(t)}},"Retour a la room"),s.a.createElement("btn",{type:"button",className:"btn btn-success",onClick:function(t){return e.activateBonus(t)}},"Activer le bonus")):s.a.createElement("div",{className:"container"},s.a.createElement("h1",null,"voici les r\xe9sultat : "),s.a.createElement("br",null),s.a.createElement("h3",null,this.state.question),s.a.createElement("br",null),s.a.createElement("ul",{className:"list-group"},this.state.usersTrier.map((function(e){return s.a.createElement("li",{className:"list-group-item"},s.a.createElement("button",{type:"button",className:"btn_Creer",value:e.username},"  ",e.username),s.a.createElement("h4",null,"nb de vote : ",e.nbDeVote))}))),s.a.createElement("btn",{type:"button",className:"btn btn-warning",onClick:function(t){return e.changeQuestion(t)}},"Question Suivante"),s.a.createElement("btn",{type:"button",className:"btn btn-success",onClick:function(t){return e.activateBonus(t)}},"Activer le bonus"),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("btn",{type:"button",className:"btn btn-danger",onClick:function(t){return e.boutonQuitter(t)}},"Quitter")):s.a.createElement("div",{className:"container"},s.a.createElement("h1",null,"voici les r\xe9sultat : "),s.a.createElement("br",null),s.a.createElement("h3",null,this.state.question),s.a.createElement("br",null),s.a.createElement("ul",{className:"list-group"},this.state.usersTrier.map((function(e){return s.a.createElement("li",{className:"list-group-item"},s.a.createElement("button",{type:"button",className:"btn_Creer",value:e.username},"  ",e.username),s.a.createElement("h4",null,"nb de vote : ",e.nbDeVote))}))),s.a.createElement("btn",{type:"button",className:"btn btn-success",onClick:function(t){return e.activateBonus(t)}},"Activer le bonus"),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("btn",{type:"button",className:"btn btn-danger",onClick:function(t){return e.boutonQuitter(t)}},"Quitter")):"admin"===this.state.user.role?this.state.compteurQuestion===this.state.compteurQuestionMax?s.a.createElement("div",{className:"container"},s.a.createElement("h1",null,"voici les r\xe9sultat : "),s.a.createElement("br",null),s.a.createElement("h3",null,this.state.question),s.a.createElement("br",null),s.a.createElement("ul",{className:"list-group"},this.state.usersTrier.map((function(t){return s.a.createElement("li",{className:"list-group-item"},s.a.createElement("button",{type:"button",className:"btn_Creer",value:t.username},"  ",t.username),s.a.createElement("h4",null,"a \xe9t\xe9 vot\xe9 par : ",e.formatVoterPar(t.voterPar)))}))),s.a.createElement("btn",{type:"button",className:"btn btn-danger",onClick:function(t){return e.goToRoom(t)}},"Retour a la room")):s.a.createElement("div",{className:"container"},s.a.createElement("h1",null,"voici les r\xe9sultat : "),s.a.createElement("br",null),s.a.createElement("h3",null,this.state.question),s.a.createElement("br",null),s.a.createElement("ul",{className:"list-group"},this.state.usersTrier.map((function(t){return s.a.createElement("li",{className:"list-group-item"},s.a.createElement("button",{type:"button",className:"btn_Creer",value:t.username},"  ",t.username),s.a.createElement("h4",null,"a \xe9t\xe9 vot\xe9 par : ",e.formatVoterPar(t.voterPar)))}))),s.a.createElement("btn",{type:"button",className:"btn btn-warning",onClick:function(t){return e.changeQuestion(t)}},"Question Suivante"),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("btn",{type:"button",className:"btn btn-danger",onClick:function(t){return e.boutonQuitter(t)}},"Quitter")):s.a.createElement("div",{className:"container"},s.a.createElement("h1",null,"voici les r\xe9sultat : "),s.a.createElement("br",null),s.a.createElement("h3",null,this.state.question),s.a.createElement("br",null),s.a.createElement("ul",{className:"list-group"},this.state.usersTrier.map((function(t){return s.a.createElement("li",{className:"list-group-item"},s.a.createElement("button",{type:"button",className:"btn_Creer",value:t.username},"  ",t.username),s.a.createElement("h4",null,"a \xe9t\xe9 vot\xe9 par : ",e.formatVoterPar(t.voterPar)))}))),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("btn",{type:"button",className:"btn btn-danger",onClick:function(t){return e.boutonQuitter(t)}},"Quitter")):s.a.createElement("div",{className:"container"},s.a.createElement("h1",null,"vous avez r\xe9pondu : ",this.state.reponse),s.a.createElement("br",null),s.a.createElement("h3",null,"personne qui on vot\xe9 : ",this.state.compteurVote,"/",this.state.users.length," "))}}]),n}(r.Component),q=function(e){Object(S.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(C.a)(this,n),(a=t.call(this,e)).setUsers=a.setUsers.bind(Object(k.a)(a)),a.changeQuestion=a.changeQuestion.bind(Object(k.a)(a)),a.setQuestion=a.setQuestion.bind(Object(k.a)(a)),a.setResultat=a.setResultat.bind(Object(k.a)(a)),a.formatVoterPar=a.formatVoterPar.bind(Object(k.a)(a)),a.state={users:[],name:"",pinGamme:"",id:"",location:e.location,question:"",aRepondu:!1,compteurVote:0,compteurQuestion:1,compteurQuestionMax:null,user:{},userQ1:[],userQ2:[],boolResultat:!1},a}return Object(R.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=E.a.parse(this.state.location.search),n=t.name,a=t.pinGamme,l=t.id;N=g()("213.32.88.158:5000"),this.setState({name:n,pinGamme:a,id:l}),N.on("ResetUserLeave",(function(t){var n=t.users,a=t.compteurQuestion,l=t.compteurQuestionMax;console.log("Test User"),console.log("User Trierrr Client ::::: "),console.log(n);var r=n.find((function(e){return e.id==N.id}));e.setState({users:n,compteurQuestion:a,compteurQuestionMax:l,user:r}),e.setUsersView(e.state.users)})),N.on("getUserChange",(function(t){var n=t.users;e.setState({users:n});var a=n.find((function(e){return e.id==N.id}));e.setState({user:a})})),N.on("changeAdmin",(function(t){var n=t.socket;console.log("entrer dans change admin"),"admin"==e.state.user.role&&(console.log("nouvelle admin trouver"),e.setState({id:n}),console.log("nouvelle id : "+e.state.id))})),N.on("goToRoom",(function(){window.location="http://localhost:3000/gameMenu?name=".concat(e.state.name,"&room=").concat(e.state.pinGamme,"&id=").concat(e.state.id)})),N.on("getCurentQuestion",(function(t){var n=t.CurrentQuestion;console.log("QUESSSSSTION : "+n),e.setQuestion(n),e.setState({boolResultat:!1,aRepondu:!1})})),N.on("compteurVote",(function(t){var n=t.compteur,a=t.users,l=t.compteurQuestion;e.setState({compteurVote:n,users:a,compteurQuestion:l});var r=e.state.users.find((function(e){return e.id==N.id}));return e.setState({user:r}),console.log("LES USERS PRESNT"),console.log(e.state.users),null})),N.emit("joinGame",{name:n,pinGamme:a,id:l}),N.on("GamePlayer",(function(t){t.pinGamme;var n=t.usersNew,a=t.compteurQuestion,l=t.compteurQuestionMax;t.bonus;console.log("User GamePlayer2 ::::: "),console.log(n);var r=n.find((function(e){return e.id===N.id}));e.setUsers(n),e.setState({compteurQuestion:a,compteurQuestionMax:l,user:r})}))}},{key:"setResultat",value:function(){console.log("entrer dans la fonction");for(var e=[],t=[],n=0;n<this.state.users.length;n++)1==this.state.users[n].voteFor?e.push(this.state.users[n].username):t.push(this.state.users[n].username);console.log("usersQ1 :: "),console.log(e),console.log("usersQ2 :: "),console.log(t),this.setState({userQ1:e,userQ2:t,boolResultat:!0})}},{key:"setUsers",value:function(e){this.setState({users:e}),console.log("voici les users :"),console.log(this.state.users)}},{key:"setQuestion",value:function(e){this.setState({question:e})}},{key:"formatVoterPar",value:function(e){var t="";if(1==e.length)t=e[0];else if(e.length>1){for(var n=0;n<e.length-1;n++)t=t+e[n]+", ";t+=e[e.length-1]}return t}},{key:"vote",value:function(e){console.log("Question choisis : ",e.target.value),N.emit("aVoter",{pinGamme:this.state.pinGamme,reponse:e.target.value}),this.setState({aRepondu:!0})}},{key:"goToRoom",value:function(e){console.log("IDDDDDD   GO   TO    ROOM  :: "+this.state.id),N.emit("requetteGoToRoom",this.state.pinGamme)}},{key:"changeQuestion",value:function(e){N.emit("nextQuestion",this.state.pinGamme)}},{key:"boutonQuitter",value:function(e){window.location="http://localhost:3000/gameMenu?name=".concat(this.state.name,"&room=").concat(this.state.pinGamme)}},{key:"render",value:function(){var e=this;return!1===this.state.aRepondu?s.a.createElement("div",{className:"container"},s.a.createElement("h3",null,"Tu Prefere : "),s.a.createElement("br",null),s.a.createElement("button",{type:"button",className:"btn btn-dark",value:1,onClick:function(t){return e.vote(t)}},"  ",this.state.question.q1),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("h4",null,"Ou"),s.a.createElement("br",null),s.a.createElement("button",{type:"button",className:"btn btn-dark",value:2,onClick:function(t){return e.vote(t)}},"  ",this.state.question.q2),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("h3",null,"Question ",this.state.compteurQuestion,"/",this.state.compteurQuestionMax)):this.state.compteurVote===this.state.users.length&&0==this.state.boolResultat?(this.setResultat(),null):1==this.state.boolResultat?"admin"==this.state.user.role?this.state.compteurQuestion===this.state.compteurQuestionMax?this.state.userQ1.length>this.state.userQ2.length?s.a.createElement("div",{className:"container"},s.a.createElement("h3",null,"Voici les resultat : "),s.a.createElement("br",null),s.a.createElement("div",{class:"container"},s.a.createElement("div",{class:"row"},s.a.createElement("div",{class:"col-sm-6"},s.a.createElement("button",{type:"button",className:"btn btn-success"},"  ",this.state.question.q1)),s.a.createElement("div",{class:"col-sm-6"},s.a.createElement("h5",null,"  Nombre de vote : ",this.state.userQ1.length)))),s.a.createElement("h6",null,"Choisie par : ",this.formatVoterPar(this.state.userQ1)),s.a.createElement("br",null),s.a.createElement("h4",null,"Ou"),s.a.createElement("br",null),s.a.createElement("button",{type:"button",className:"btn btn-danger"},"  ",this.state.question.q2),s.a.createElement("h6",null,"Nombre de vote : ",this.state.userQ2.length),s.a.createElement("h6",null,"Choisie par : ",this.formatVoterPar(this.state.userQ2)),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("btn",{type:"button",className:"btn btn-danger",onClick:function(t){return e.goToRoom(t)}},"Retour a la room")):this.state.userQ1.length<this.state.userQ2.length?s.a.createElement("div",{className:"container"},s.a.createElement("h3",null,"Voici les resultat : "),s.a.createElement("br",null),s.a.createElement("button",{type:"button",className:"btn btn-danger"},"  ",this.state.question.q1),s.a.createElement("h6",null,"Nombre de vote : ",this.state.userQ1.length),s.a.createElement("h6",null,"Choisie par : ",this.formatVoterPar(this.state.userQ1)),s.a.createElement("br",null),s.a.createElement("h4",null,"Ou"),s.a.createElement("br",null),s.a.createElement("button",{type:"button",className:"btn btn-success"},"  ",this.state.question.q2),s.a.createElement("h6",null,"Nombre de vote : ",this.state.userQ2.length),s.a.createElement("h6",null,"Choisie par : ",this.formatVoterPar(this.state.userQ2)),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("btn",{type:"button",className:"btn btn-danger",onClick:function(t){return e.goToRoom(t)}},"Retour a la room")):s.a.createElement("div",{className:"container"},s.a.createElement("h3",null,"Voici les resultat : "),s.a.createElement("br",null),s.a.createElement("button",{type:"button",className:"btn btn-warning"},"  ",this.state.question.q1),s.a.createElement("h6",null,"Nombre de vote : ",this.state.userQ1.length),s.a.createElement("h6",null,"Choisie par : ",this.formatVoterPar(this.state.userQ1)),s.a.createElement("br",null),s.a.createElement("h4",null,"Ou"),s.a.createElement("br",null),s.a.createElement("button",{type:"button",className:"btn btn-warning"},"  ",this.state.question.q2),s.a.createElement("h6",null,"Nombre de vote : ",this.state.userQ2.length),s.a.createElement("h6",null,"Choisie par : ",this.formatVoterPar(this.state.userQ2)),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("btn",{type:"button",className:"btn btn-danger",onClick:function(t){return e.goToRoom(t)}},"Retour a la room")):this.state.userQ1.length>this.state.userQ2.length?s.a.createElement("div",{className:"container"},s.a.createElement("h3",null,"Voici les resultat : "),s.a.createElement("br",null),s.a.createElement("button",{type:"button",className:"btn btn-success"},"  ",this.state.question.q1),s.a.createElement("h5",null,"  Nombre de vote : ",this.state.userQ1.length),s.a.createElement("h6",null,"Choisie par : ",this.formatVoterPar(this.state.userQ1)),s.a.createElement("br",null),s.a.createElement("h4",null,"Ou"),s.a.createElement("br",null),s.a.createElement("button",{type:"button",className:"btn btn-danger"},"  ",this.state.question.q2),s.a.createElement("h6",null,"Nombre de vote : ",this.state.userQ2.length),s.a.createElement("h6",null,"Choisie par : ",this.formatVoterPar(this.state.userQ2)),s.a.createElement("br",null),s.a.createElement("btn",{type:"button",className:"btn btn-warning",onClick:function(t){return e.changeQuestion(t)}},"Question Suivante"),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("btn",{type:"button",className:"btn btn-danger",onClick:function(t){return e.boutonQuitter(t)}},"Quitter")):this.state.userQ1.length<this.state.userQ2.length?s.a.createElement("div",{className:"container"},s.a.createElement("h3",null,"Voici les resultat : "),s.a.createElement("br",null),s.a.createElement("button",{type:"button",className:"btn btn-danger"},"  ",this.state.question.q1),s.a.createElement("h6",null,"Nombre de vote : ",this.state.userQ1.length),s.a.createElement("h6",null,"Choisie par : ",this.formatVoterPar(this.state.userQ1)),s.a.createElement("br",null),s.a.createElement("h4",null,"Ou"),s.a.createElement("br",null),s.a.createElement("button",{type:"button",className:"btn btn-success"},"  ",this.state.question.q2),s.a.createElement("h6",null,"Nombre de vote : ",this.state.userQ2.length),s.a.createElement("h6",null,"Choisie par : ",this.formatVoterPar(this.state.userQ2)),s.a.createElement("br",null),s.a.createElement("btn",{type:"button",className:"btn btn-warning",onClick:function(t){return e.changeQuestion(t)}},"Question Suivante"),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("btn",{type:"button",className:"btn btn-danger",onClick:function(t){return e.boutonQuitter(t)}},"Quitter")):s.a.createElement("div",{className:"container"},s.a.createElement("h3",null,"Voici les resultat : "),s.a.createElement("br",null),s.a.createElement("button",{type:"button",className:"btn btn-warning"},"  ",this.state.question.q1),s.a.createElement("h6",null,"Nombre de vote : ",this.state.userQ1.length),s.a.createElement("h6",null,"Choisie par : ",this.formatVoterPar(this.state.userQ1)),s.a.createElement("br",null),s.a.createElement("h4",null,"Ou"),s.a.createElement("br",null),s.a.createElement("button",{type:"button",className:"btn btn-warning"},"  ",this.state.question.q2),s.a.createElement("h6",null,"Nombre de vote : ",this.state.userQ2.length),s.a.createElement("h6",null,"Choisie par : ",this.formatVoterPar(this.state.userQ2)),s.a.createElement("br",null),s.a.createElement("btn",{type:"button",className:"btn btn-warning",onClick:function(t){return e.changeQuestion(t)}},"Question Suivante"),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("btn",{type:"button",className:"btn btn-danger",onClick:function(t){return e.boutonQuitter(t)}},"Quitter")):this.state.userQ1.length>this.state.userQ2.length?s.a.createElement("div",{className:"container"},s.a.createElement("h3",null,"Voici les resultat : "),s.a.createElement("br",null),s.a.createElement("button",{type:"button",className:"btn btn-success"},"  ",this.state.question.q1),s.a.createElement("h6",null,"Nombre de vote : ",this.state.userQ1.length),s.a.createElement("h6",null,"Choisie par : ",this.formatVoterPar(this.state.userQ1)),s.a.createElement("br",null),s.a.createElement("h4",null,"Ou"),s.a.createElement("br",null),s.a.createElement("button",{type:"button",className:"btn btn-danger"},"  ",this.state.question.q2),s.a.createElement("h6",null,"Nombre de vote : ",this.state.userQ2.length),s.a.createElement("h6",null,"Choisie par : ",this.formatVoterPar(this.state.userQ2)),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("btn",{type:"button",className:"btn btn-danger",onClick:function(t){return e.boutonQuitter(t)}},"Quitter")):this.state.userQ1.length<this.state.userQ2.length?s.a.createElement("div",{className:"container"},s.a.createElement("h3",null,"Voici les resultat : "),s.a.createElement("br",null),s.a.createElement("button",{type:"button",className:"btn btn-danger"},"  ",this.state.question.q1),s.a.createElement("h6",null,"Nombre de vote : ",this.state.userQ1.length),s.a.createElement("h6",null,"Choisie par : ",this.formatVoterPar(this.state.userQ1)),s.a.createElement("br",null),s.a.createElement("h4",null,"Ou"),s.a.createElement("br",null),s.a.createElement("button",{type:"button",className:"btn btn-success"},"  ",this.state.question.q2),s.a.createElement("h6",null,"Nombre de vote : ",this.state.userQ2.length),s.a.createElement("h6",null,"Choisie par : ",this.formatVoterPar(this.state.userQ2)),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("btn",{type:"button",className:"btn btn-danger",onClick:function(t){return e.boutonQuitter(t)}},"Quitter")):s.a.createElement("div",{className:"container"},s.a.createElement("h3",null,"Voici les resultat : "),s.a.createElement("br",null),s.a.createElement("button",{type:"button",className:"btn btn-warning"},"  ",this.state.question.q1),s.a.createElement("h6",null,"Nombre de vote : ",this.state.userQ1.length),s.a.createElement("h6",null,"Choisie par : ",this.formatVoterPar(this.state.userQ1)),s.a.createElement("br",null),s.a.createElement("h4",null,"Ou"),s.a.createElement("br",null),s.a.createElement("button",{type:"button",className:"btn btn-warning"},"  ",this.state.question.q2),s.a.createElement("h6",null,"Nombre de vote : ",this.state.userQ2.length),s.a.createElement("h6",null,"Choisie par : ",this.formatVoterPar(this.state.userQ2)),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("btn",{type:"button",className:"btn btn-danger",onClick:function(t){return e.boutonQuitter(t)}},"Quitter")):s.a.createElement("div",{className:"container"},s.a.createElement("h3",null,"personne qui on vot\xe9 : ",this.state.compteurVote,"/",this.state.users.length," "))}}]),n}(r.Component),V=function(){return s.a.createElement(c.a,null,s.a.createElement(i.a,{path:"/",exact:!0,component:b}),s.a.createElement(i.a,{path:"/joinGame",component:f}),s.a.createElement(i.a,{path:"/gameMenu",component:y}),s.a.createElement(i.a,{path:"/game",component:j}),s.a.createElement(i.a,{path:"/game2",component:q}))};u.a.render(s.a.createElement(V,null),document.getElementById("root"))},60:function(e,t,n){e.exports=n(120)},65:function(e,t,n){},66:function(e,t,n){}},[[60,1,2]]]);
//# sourceMappingURL=main.58c04c3f.chunk.js.map