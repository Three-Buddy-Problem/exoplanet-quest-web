import{g as t,t as _,v as m,x as u,z as e,A as d,N as a,q as f}from"./DOpDZbIg.js";const g={class:"w-[100vw] h-[100vh] flex gap-5 flex-col justify-center items-center"},h={class:"w-full h-full bg-slate-400 text-7xl text-white"},v={__name:"game",setup(b){const o=f();return(y,x)=>{const c=t("a-sky"),i=t("a-camera"),r=t("a-plane"),s=t("a-entity"),l=t("a-image"),n=t("a-sphere"),p=t("a-scene");return _(),m("main",g,[u("section",h,[e(p,{embedded:""},{default:d(()=>[e(c,{src:`${a(o).public.baseURL}stars.jpg`,radius:"1200"},null,8,["src"]),e(i,{id:"camera",position:"0 3 0"}),e(r,{position:"0 0 -4",rotation:"-90 0 0",width:"4",height:"4",color:"#7BC8A4"}),e(s,{shadow:"receive: true; cast: false",rotation:"0 -270 0",position:"-5.69 0 0.926",scale:"1 1 1","gltf-model":`${a(o).public.baseURL}spaceshipclear4.glb`},null,8,["gltf-model"]),e(l,{src:`${a(o).public.baseURL}glow.png`,animation__first:"property: scale; to: 675 675 675; dur: 2000; startEvents: loaded, animationcomplete__second",animation__second:"property: scale; to: 600 600 600; dur: 2000; startEvents: animationcomplete__first",position:"0 0 -600",scale:"600 600 600 "},null,8,["src"]),e(n,{src:`${a(o).public.baseURL}sun.jpg`,animation:"property: rotation; to: 0 1024 0; dur: 600000; loop: true; easing: linear;",position:"0 0 -600",scale:"150 150 150"},null,8,["src"]),e(n,{color:"black",position:"50 0 -400",scale:"10 10 10"}),e(s,{position:"11.4 12 -250",rotation:"-90 0 -11",light:"type: hemisphere; color: #fff; groundColor: #a3a3a3; intensity: 2"})]),_:1})])])}}};export{v as _};
