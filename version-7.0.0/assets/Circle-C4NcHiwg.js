import{j as t}from"./jsx-runtime-DEdD30eg.js";import{d as o}from"./styled-components.browser.esm-Cwi-fKCl.js";const c=o.span`
  background-color: ${e=>e.color||"#DDD"};
  padding: 3px 5px;
  border-radius: ${e=>e.size?`${e.size}px`:"17px"};
  min-width: ${e=>e.size?`${e.size}px`:"17px"};
  max-width: ${e=>e.size?`${e.size}px`:"17px"};
  height: ${e=>e.size?`${e.size+4}px`:"21px"};
  display: flex;
  justify-content: center;
  align-items: center;
`,s=({children:e,color:i,size:r,ariaLabel:n})=>t.jsx(c,{color:i,size:r,"aria-label":n||`Circle highlighted with ${i||"#DDD"} color`,children:e}),d=({children:e,group:i,groupColorMap:r})=>t.jsx(s,{color:r[i],ariaLabel:`Circle highlighted with group ${i} color ${r[i]}`,children:e});s.__docgenInfo={description:"Circle with user-defined component inside",methods:[],displayName:"Circle",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},color:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"number"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""}}};d.__docgenInfo={description:"Circle with user-defined group colors",methods:[],displayName:"GroupCircle",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"React component to put inside the circle"},group:{required:!0,tsType:{name:"string"},description:"Group to use for this circle"},groupColorMap:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},description:"Mapping of group names to color"}}};export{s as C,d as G,c as S};
