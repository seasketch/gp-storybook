import{j as e}from"./jsx-runtime-DEdD30eg.js";import{C as l}from"./Card-FnwmZRZt.js";import{u as j}from"./ReportDecorator-BLl16b_j.js";import{m as S,d as o}from"./styled-components.browser.esm-Cwi-fKCl.js";import{S as i}from"./Skeleton-u_SOmpwo.js";import{R as v}from"./ReportError-CyhIfolQ.js";import{u as N}from"./useTranslation-SdK8TBCK.js";const k=S`
  0% {
      background-position: 100% 0%;
    }
  100% {
    background-position: 0% 0%;
  }
`,C=o.div.attrs(()=>({$duration:1}))`
  background: #ddd;
  height: 4px;
  background: linear-gradient(90deg, #ddd 50%, white 50%);
  background-size: 200% 200%;
  background-position: 0%;
  animation: ${k} linear;
  animation-iteration-count: once;
  /* animation-timing-function: ease-in-out; */
  animation-duration: ${n=>n.$duration+"s"};
  position: relative;
`,T=o.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  overflow: hidden;
  border-radius: 0px 0px 4px 4px;
`,V=()=>e.jsxs("div",{children:[e.jsx(i,{}),e.jsx(i,{}),e.jsx(i,{}),e.jsx(i,{style:{width:"25%"}})]}),q=o.div`
  display: inline-block;
  font-weight: bold;
  font-size: 18px;
  line-height: 1em;
  background-color: #ea4848;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  color: white;
  text-align: center;
  margin-right: 8px;
  ::before {
    position: relative;
    bottom: -1px;
    content: "!";
  }
`;o.div`
  height: 20px;
  margin-top: 5px;
  padding-bottom: 15px;
  margin-left: auto;
  margin-right: auto;
  font-style: italic;
  width: 100%;
  text-align: center;
  display: none;
`;function E({functionName:n,skeleton:c,children:p,title:g,titleStyle:f={},style:h={},useChildCard:x=!1,extraParams:b={}}){if(!n)throw new Error("No function specified for ResultsCard");const{t:w}=N(),y=w("ResultsCard - no result message","Report run completed, but no results returned"),s={style:h,title:g,titleStyle:f},{task:t,loading:d,error:R}=j(n,b);let a=R,u=5;t&&t.estimate&&(u=Math.round(t.estimate/1e3)),t&&!t.data&&!d&&(t.error?a=t.error:a=y);let r;if(a)r=e.jsx(l,{...s,children:e.jsxs("div",{role:"alert",children:[e.jsx(q,{}),a]})});else if(d)r=e.jsxs(l,{...s,children:[c||e.jsx(V,{}),e.jsx(T,{children:e.jsx(C,{$duration:u})})]});else if(t&&t.data){const m=p(t.data);x?r=e.jsx(e.Fragment,{children:m}):r=e.jsx(l,{...s,children:m})}else throw new Error("ResultsCard error");return e.jsx(v,{children:r})}E.__docgenInfo={description:"",methods:[],displayName:"ResultsCard",props:{functionName:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"signature",type:"function",raw:"(results: T) => ReactNode",signature:{arguments:[{type:{name:"T"},name:"results"}],return:{name:"ReactNode"}}},description:""},skeleton:{required:!1,tsType:{name:"ReactNode"},description:""},title:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},titleStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"",defaultValue:{value:"{}",computed:!1}},style:{required:!1,tsType:{name:"object"},description:"",defaultValue:{value:"{}",computed:!1}},useChildCard:{required:!1,tsType:{name:"boolean"},description:"Assumes caller will provide card in children to use results (e.g. ToolbarCard with DataDownload). Shows a simple card until loading complete",defaultValue:{value:"false",computed:!1}},extraParams:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"union",raw:`| string
| number
| boolean
| null
| { [x: string]: JSONValue }
| Array<JSONValue>`,elements:[{name:"string"},{name:"number"},{name:"boolean"},{name:"null"},{name:"signature",type:"object",raw:"{ [x: string]: JSONValue }",signature:{properties:[{key:{name:"string"},value:{name:"JSONValue",required:!0}}]}},{name:"Array",elements:[{name:"JSONValue"}],raw:"Array<JSONValue>"}]}],raw:"Record<string, JSONValue>"},description:"Additional runtime parameters from report client for geoprocessing function.",defaultValue:{value:"{}",computed:!1}}}};export{E as R};
