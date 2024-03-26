(this["webpackJsonpairbnb-clone"]=this["webpackJsonpairbnb-clone"]||[]).push([[0],{61:function(e,t,i){},72:function(e,t,i){},77:function(e,t,i){},78:function(e,t,i){},79:function(e,t,i){},80:function(e,t,i){},81:function(e,t,i){},82:function(e,t,i){},83:function(e,t,i){},84:function(e,t,i){},85:function(e,t,i){"use strict";i.r(t);var n=i(1),c=i(0),s=i.n(c),a=i(22),r=i.n(a),o=(i(61),i(21)),d=i(5),j=i(27),h=i(98),l=(i(62),i(63),i(44)),b=i(45),p=i.n(b);i(72);var m=function(){var e=Object(d.f)(),t=Object(c.useState)(new Date),i=Object(j.a)(t,2),s=i[0],a=i[1],r=Object(c.useState)(new Date),o=Object(j.a)(r,2),b=o[0],m=o[1],u={startDate:s,endDate:b,key:"selection"};return Object(n.jsxs)("div",{className:"search",children:[Object(n.jsx)(l.DateRangePicker,{ranges:[u],onChange:function(e){a(e.selection.startDate),m(e.selection.endDate)}}),Object(n.jsxs)("h2",{children:["Number of guests",Object(n.jsx)(p.a,{})]}),Object(n.jsx)("input",{min:0,defaultValue:2,type:"number"}),Object(n.jsx)(h.a,{onClick:function(){return e.push("/search")},children:"Search Airbnb"})]})};i(77);var u=function(){var e=Object(d.f)(),t=Object(c.useState)(!1),i=Object(j.a)(t,2),s=i[0],a=i[1];return Object(n.jsxs)("div",{className:"banner",children:[Object(n.jsxs)("div",{className:"banner__search",children:[s&&Object(n.jsx)(m,{}),Object(n.jsx)(h.a,{onClick:function(){return a(!s)},className:"banner__searchButton",variant:"outlined",children:s?"Hide":"Search Dates"})]}),Object(n.jsxs)("div",{className:"banner__info",children:[Object(n.jsx)("h1",{children:"Get out and stretch your imagination"}),Object(n.jsx)("h5",{children:"Plan a different kind of getaway to uncover the hidden gems near you."}),Object(n.jsx)(h.a,{onClick:function(){return e.push("/search")},variant:"outlined",children:"Explore Nearby"})]})]})};i(78);var x=function(e){var t=e.src,i=e.title,c=e.description,s=e.price;return Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("img",{src:t,alt:""}),Object(n.jsxs)("div",{className:"card__info",children:[Object(n.jsx)("h2",{children:i}),Object(n.jsx)("h4",{children:c}),Object(n.jsx)("h3",{children:s})]})]})};i(79);var O=function(){return Object(n.jsxs)("div",{className:"home",children:[Object(n.jsx)(u,{}),Object(n.jsxs)("div",{className:"home__section",children:[Object(n.jsx)(x,{src:"https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720",title:"Online Experiences",description:"Unique activities we can do together, led by a world of hosts."}),Object(n.jsx)(x,{src:"https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720",tite:"Unique stays",description:"Spaces that are more than just a place to sleep."}),Object(n.jsx)(x,{src:"https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720",title:"Entire homes",description:"Comfortable private places, with room for friends or family"})]}),Object(n.jsxs)("div",{className:"home__section",children:[Object(n.jsx)(x,{src:"https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg",title:"3 Bedroom Flat in Bournemouth",description:"Superhost with a stunning view of the beachside in Sunny Bournemouth",price:"$130/night"}),Object(n.jsx)(x,{src:"https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg",title:"Penthouse in London",description:"Enjoy the amazing sights of London with this stunning penthouse",price:"$350/night"}),Object(n.jsx)(x,{src:"https://media.nomadicmatt.com/2018/apartment.jpg",title:"1 Bedroom apartment",description:"Superhost with great amenities and a fabolous shopping complex nearby",price:"$70/night"})]})]})},g=i(49),f=i.n(g),v=i(50),_=i.n(v),w=i(51),y=i.n(w),N=i(99);i(80);var P=function(){return Object(n.jsxs)("div",{className:"header",children:[Object(n.jsx)(o.b,{to:"/",children:Object(n.jsx)("img",{className:"header__icon",src:"https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png",alt:""})}),Object(n.jsxs)("div",{className:"header__center",children:[Object(n.jsx)("input",{type:"text"}),Object(n.jsx)(f.a,{})]}),Object(n.jsxs)("div",{className:"header__right",children:[Object(n.jsx)("p",{children:"Become a host"}),Object(n.jsx)(_.a,{}),Object(n.jsx)(y.a,{}),Object(n.jsx)(N.a,{})]})]})};i(81);var F=function(){return Object(n.jsxs)("div",{className:"footer",children:[Object(n.jsx)("p",{children:"\xa9 2020 Airbnb clone! No rights reserved- Demo!"}),Object(n.jsx)("p",{children:"Privacy \xb7 Terms \xb7 Sitemap \xb7 Company Details"})]})},S=i(52),k=i.n(S),$=i(53),L=i.n($);i(82);var C=function(e){var t=e.img,i=e.location,c=e.title,s=e.description,a=e.star,r=e.price,o=e.total;return Object(n.jsxs)("div",{className:"searchResult",children:[Object(n.jsx)("img",{src:t,alt:""}),Object(n.jsx)(k.a,{className:"searchResult__heart"}),Object(n.jsxs)("div",{className:"searchResult__info",children:[Object(n.jsxs)("div",{className:"searchResult__infoTop",children:[Object(n.jsx)("p",{children:i}),Object(n.jsx)("h3",{children:c}),Object(n.jsx)("p",{children:"____"}),Object(n.jsx)("p",{children:s})]}),Object(n.jsxs)("div",{className:"searchResult__infoBottom",children:[Object(n.jsxs)("div",{className:"searchResult__stars",children:[Object(n.jsx)(L.a,{className:"searchResult__star"}),Object(n.jsx)("p",{children:Object(n.jsx)("strong",{children:a})})]}),Object(n.jsxs)("div",{className:"searchResult__price",children:[Object(n.jsx)("h2",{children:r}),Object(n.jsx)("p",{children:o})]})]})]})]})};i(83);var D=function(){return Object(n.jsxs)("div",{className:"searchPage",children:[Object(n.jsxs)("div",{className:"searchPage__info",children:[Object(n.jsx)("p",{children:"62 stays \xb7 26 august to 30 august \xb7 2 guest"}),Object(n.jsx)("h1",{children:"Stays nearby"}),Object(n.jsx)(h.a,{variant:"outlined",children:"Cancellation Flexibility"}),Object(n.jsx)(h.a,{variant:"outlined",children:"Type of place"}),Object(n.jsx)(h.a,{variant:"outlined",children:"Price"}),Object(n.jsx)(h.a,{variant:"outlined",children:"Rooms and beds"}),Object(n.jsx)(h.a,{variant:"outlined",children:"More filters"})]}),Object(n.jsx)(C,{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU",location:"Private room in center of London",title:"Stay at this spacious Edwardian House",description:"1 guest \xb7 1 bedroom \xb7 1 bed \xb7 1.5 shared bathrooms \xb7 Wifi \xb7 kitchen \xb7 Free parking \xb7 Washing Machine",star:4.73,price:"$30 / night",total:"$117 total"}),Object(n.jsx)(C,{img:"https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg",location:"Private room in center of London",title:"Independent luxury studio apartment",description:"2 guest \xb7 3 bedroom \xb7 1 bed \xb7 1.5 shared bathrooms \xb7 Wifi \xb7 kitchen",star:4.3,price:"$40 / night",total:"$157 total"}),Object(n.jsx)(C,{img:"https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg",location:"Private room in center of London",title:"London Studio Apartments",description:"4 guest \xb7 4 bedroom \xb7 4 bed \xb7 2 bathrooms \xb7 Free parking \xb7 Washing Machine",star:3.8,price:"$35 / night",total:"$207 total"}),Object(n.jsx)(C,{img:"https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI",location:"Private room in center of London",title:"30 mins to Oxford Street, Excel London",description:"1 guest \xb7 1 bedroom \xb7 1 bed \xb7 1.5 shared bathrooms \xb7 Wifi \xb7 Kitchen \xb7 Free parking \xb7 Washing Machine",star:4.1,price:"$55 / night",total:"$320 total"}),Object(n.jsx)(C,{img:"https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg",location:"Private room in center of London",title:"Spacious Peaceful Modern Bedroom",description:"3 guest \xb7 1 bedroom \xb7 1 bed \xb7 1.5 shared bathrooms \xb7 Wifi \xb7 Free parking \xb7 Dry Cleaning",star:5,price:"$60 / night",total:"$450 total"}),Object(n.jsx)(C,{img:"https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937",location:"Private room in center of London",title:"The Blue Room in London",description:"2 guest \xb7 1 bedroom \xb7 1 bed \xb7 1.5 shared bathrooms \xb7 Wifi \xb7 Washing Machine",star:4.23,price:"$65 / night",total:"$480 total"}),Object(n.jsx)(C,{img:"https://image.insider.com/585029a0dd0895bc548b4b8b?width-750&format=jpeg&autho=webp",location:"Private room in center of London",title:"5 Star Luxury Apartment",description:"3 guest \xb7 1 bedroom \xb7 1 bed \xb7 1.5 shared bathrooms \xb7 Wifi \xb7 Kitchen \xb7 Free parking \xb7 Washing Machine",star:3.85,price:"$90 / night",total:"$650 total"})]})};i(84);var A=function(){return Object(n.jsx)("div",{className:"app",children:Object(n.jsxs)(o.a,{children:[Object(n.jsx)(P,{}),Object(n.jsxs)(d.c,{children:[Object(n.jsx)(d.a,{path:"/search",children:Object(n.jsx)(D,{})}),Object(n.jsx)(d.a,{path:"/",children:Object(n.jsx)(O,{})})]}),Object(n.jsx)(F,{})]})})},B=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,100)).then((function(t){var i=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;i(e),n(e),c(e),s(e),a(e)}))};r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(A,{})}),document.getElementById("root")),B()}},[[85,1,2]]]);
//# sourceMappingURL=main.5dc9eba1.chunk.js.map