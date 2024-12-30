import{j as t}from"./jsx-runtime-DEdD30eg.js";import{r as o}from"./index-RYns6xqu.js";import{d as n}from"./styled-components.browser.esm-Cwi-fKCl.js";import{u as v}from"./usePopper-ptQ-sUxU.js";const y=n.div`
  visibility: ${({$visible:r})=>r?"visible":"hidden"};
  max-width: 200px;
  flex-direction: column;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  font-size: 12px;
  font-weight: normal;
`,g=n.button`
  border: none;
  background: none;
  font-weight: inherit;
  font-size: inherit;
  color: inherit;
`,T=n.div`
  text-align: center;
  padding: 5px;
`,z=({children:r,placement:c="auto",offset:d={horizontal:0,vertical:0},text:i,width:f=200})=>{const[m,s]=o.useState(!1),a=o.useRef(null),e=o.useRef(null),{horizontal:b,vertical:h}=d,{styles:l,attributes:x}=v(a.current,e.current,{placement:c,modifiers:[{name:"offset",enabled:!0,options:{offset:[b,h]}}]}),u=()=>{s(!0),e.current&&(e.current.style.zIndex="100")},p=()=>{s(!1),e.current&&(e.current.style.zIndex="-100")};return t.jsxs(t.Fragment,{children:[t.jsx(g,{ref:a,style:r.props.style,onMouseOver:u,onMouseLeave:p,onFocus:u,onBlur:p,"aria-label":`Tooltip: ${i}`,children:r}),t.jsx("div",{ref:e,style:{zIndex:-100,...l.popper},...x.popper,children:t.jsx(y,{style:{...l.offset,width:f},$visible:m,children:t.jsx(T,{children:i})})})]})};z.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{text:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},placement:{required:!1,tsType:{name:"popper.Placement"},description:"",defaultValue:{value:'"auto"',computed:!1}},offset:{required:!1,tsType:{name:"signature",type:"object",raw:"{ horizontal: number; vertical: number }",signature:{properties:[{key:"horizontal",value:{name:"number",required:!0}},{key:"vertical",value:{name:"number",required:!0}}]}},description:"",defaultValue:{value:"{ horizontal: 0, vertical: 0 }",computed:!1}},width:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"200",computed:!1}}}};export{z as T};
