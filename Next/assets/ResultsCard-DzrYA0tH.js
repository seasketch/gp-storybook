import{j as e}from"./jsx-runtime-DEdD30eg.js";import{C as o}from"./Card-CM14UvZN.js";import{u as R}from"./ReportDecorator-BKqhhKaH.js";import{m as S,d as l}from"./styled-components.browser.esm-Cwi-fKCl.js";import{S as s}from"./Skeleton-u_SOmpwo.js";import{R as N}from"./ReportError-CKDrXl1_.js";import{E as v}from"./ErrorStatus-BfiBdgir.js";import{u as C}from"./useTranslation-SdK8TBCK.js";const k=S`
  0% {
      background-position: 100% 0%;
    }
  100% {
    background-position: 0% 0%;
  }
`,T=l.div.attrs(()=>({$duration:1}))`
  background: #ddd;
  height: 4px;
  background: linear-gradient(90deg, #ddd 50%, white 50%);
  background-size: 200% 200%;
  background-position: 0%;
  animation: ${k} linear;
  animation-iteration-count: once;
  /* animation-timing-function: ease-in-out; */
  animation-duration: ${a=>a.$duration+"s"};
  position: relative;
`,V=l.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  overflow: hidden;
  border-radius: 0px 0px 4px 4px;
`,q=()=>e.jsxs("div",{children:[e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{style:{width:"25%"}})]});l.div`
  height: 20px;
  margin-top: 5px;
  padding-bottom: 15px;
  margin-left: auto;
  margin-right: auto;
  font-style: italic;
  width: 100%;
  text-align: center;
  display: none;
`;function E({functionName:a,skeleton:c,children:p,title:f,titleStyle:g={},style:h={},useChildCard:x=!1,extraParams:b={}}){if(!a)throw new Error("No function specified for ResultsCard");const{t:j}=C(),w=j("ResultsCard - no result message","Report run completed, but no results returned"),i={style:h,title:f,titleStyle:g},{task:r,loading:d,error:y}=R(a,b);let n=y,u=5;r&&r.estimate&&(u=Math.round(r.estimate/1e3)),r&&!r.data&&!d&&(r.error?n=r.error:n=w);let t;if(n)t=e.jsx(o,{...i,children:e.jsx("div",{role:"alert","aria-label":"Error alert",children:e.jsx(v,{msg:e.jsx(e.Fragment,{children:n})})})});else if(d)t=e.jsx(o,{...i,children:e.jsxs("div",{role:"progressbar","aria-label":"Awaiting results",children:[c||e.jsx(q,{}),e.jsx(V,{children:e.jsx(T,{$duration:u})})]})});else if(r&&r.data){const m=p(r.data);x?t=e.jsx(e.Fragment,{children:m}):t=e.jsx(o,{...i,children:m})}else throw new Error("ResultsCard error");return e.jsx(N,{children:t})}E.__docgenInfo={description:"",methods:[],displayName:"ResultsCard",props:{functionName:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"signature",type:"function",raw:"(results: T) => ReactNode",signature:{arguments:[{type:{name:"T"},name:"results"}],return:{name:"ReactNode"}}},description:""},skeleton:{required:!1,tsType:{name:"ReactNode"},description:""},title:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},titleStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"",defaultValue:{value:"{}",computed:!1}},style:{required:!1,tsType:{name:"object"},description:"",defaultValue:{value:"{}",computed:!1}},useChildCard:{required:!1,tsType:{name:"boolean"},description:"Assumes caller will provide card in children to use results (e.g. ToolbarCard with DataDownload). Shows a simple card until loading complete",defaultValue:{value:"false",computed:!1}},extraParams:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"union",raw:`| string
| number
| boolean
| null
| { [x: string]: JSONValue }
| Array<JSONValue>`,elements:[{name:"string"},{name:"number"},{name:"boolean"},{name:"null"},{name:"signature",type:"object",raw:"{ [x: string]: JSONValue }",signature:{properties:[{key:{name:"string"},value:{name:"JSONValue",required:!0}}]}},{name:"Array",elements:[{name:"JSONValue"}],raw:"Array<JSONValue>"}]}],raw:"Record<string, JSONValue>"},description:"Additional runtime parameters from report client for geoprocessing function.",defaultValue:{value:"{}",computed:!1}}}};export{E as R};
