import{_ as y}from"./extends-CF3RwP-h.js";import{r,R}from"./index-RYns6xqu.js";import{S as g}from"./index.esm-BWA7R1MX.js";import{j as o}from"./jsx-runtime-DEdD30eg.js";import{d as l}from"./styled-components.browser.esm-Cwi-fKCl.js";import{u as D}from"./usePopper-ptQ-sUxU.js";var j=r.forwardRef(function(e,t){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return r.createElement(g,y({iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 16 16"},e,{ref:t}),r.createElement("path",{d:"M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"}))});j.displayName="ThreeDotsVertical";function k(e){const t=r.useRef(null);return r.useEffect(()=>{const n=a=>{t.current&&!t.current.contains(a.target)&&Reflect.apply(e,null,[!1])};return document.addEventListener("click",n,!0),()=>{document.removeEventListener("click",n,!0)}},[e]),{ref:t}}const E=l.div`
  visibility: ${({open:e})=>e?"visible":"hidden"};
  display: ${({open:e})=>e?"flex":"none"};
  width: 100%;
  flex-direction: column;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.14);
`,z=l.div`
  font-family: sans-serif;
  justify-content: flex-start;
  padding: 5px;
  &:hover {
    background-color: #efefef;
  }
  &:active {
    color: #777;
  }
  a[aria-disabled="true"] {
    color: currentColor;
    text-decoration: none;
    cursor: not-allowed;

    & button {
      cursor: not-allowed;
    }
  }
`,C=l.button`
  border: none;
  background: none;
  font-family: sans-serif;
  cursor: pointer;
`,f=({titleElement:e=o.jsx(o.Fragment,{}),placement:t="auto",offset:n={horizontal:0,vertical:0},children:a})=>{const[i,c]=r.useState(!1),d=r.useRef(null),u=r.useRef(null),m=()=>c(!i),{ref:v}=k(c),{horizontal:w,vertical:x}=n,{styles:p,attributes:h}=D(d.current,u.current,{placement:t,modifiers:[{name:"offset",enabled:!0,options:{offset:[w,x]}}]});function b(s){s.preventDefault(),m()}return o.jsxs("div",{ref:v,"aria-label":"Dropdown",children:[o.jsx(C,{ref:d,onClick:b,"aria-label":`${i?"Close":"Open"} dropdown menu`,"aria-expanded":i,children:e}),o.jsx("div",{ref:u,style:{zIndex:1e3,...p.popper},...h.popper,children:o.jsx(E,{style:p.offset,open:i,"aria-label":"Dropdown Menu",children:a&&R.Children.map(a,s=>o.jsx(z,{children:s}))})})]})},_=f;f.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},titleElement:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:"",defaultValue:{value:"<></>",computed:!1}},placement:{required:!1,tsType:{name:"popper.Placement"},description:"",defaultValue:{value:'"auto"',computed:!1}},offset:{required:!1,tsType:{name:"signature",type:"object",raw:"{ horizontal: number; vertical: number }",signature:{properties:[{key:"horizontal",value:{name:"number",required:!0}},{key:"vertical",value:{name:"number",required:!0}}]}},description:"",defaultValue:{value:"{ horizontal: 0, vertical: 0 }",computed:!1}}}};export{_ as D,j as T};
