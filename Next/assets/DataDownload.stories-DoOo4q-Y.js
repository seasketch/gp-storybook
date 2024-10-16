import{j as e}from"./jsx-runtime-DEdD30eg.js";import{D as a}from"./DataDownload-BPSbt6Wj.js";import{f as s}from"./index-CJGZSqXF.js";import{S as x}from"./SimpleButton-BKT7qdfB.js";import"./index-RYns6xqu.js";import"./Dropdown-CSdFVIjX.js";import"./styled-components.browser.esm-Cwi-fKCl.js";import"./index-BAMY2Nnw.js";import"./usePopper-ptQ-sUxU.js";import"./index-D16Yfzz8.js";import"./index-BbP3371Q.js";import"./index-BKD8Dact.js";import"./useSketchProperties-CHjaomRQ.js";import"./ReportContext-DKjA4IB1.js";import"./extends-CF3RwP-h.js";import"./index.esm-BWA7R1MX.js";import"./useTranslation-SdK8TBCK.js";import"./context-D1gH75Th.js";const R={component:a,title:"Components/DataDownload",decorators:[]},t=()=>e.jsx(e.Fragment,{children:e.jsx(a,{filename:"sample",data:s.ranked,formats:["csv","json"]})}),r=()=>e.jsx(e.Fragment,{children:e.jsx(a,{filename:"sample",data:s.nested})}),o=()=>e.jsx(e.Fragment,{children:e.jsx(a,{filename:"sample",data:s.ranked,formats:["csv","json"],titleElement:e.jsx(x,{children:"➥ Export"})})});t.__docgenInfo={description:"",methods:[],displayName:"simple"};r.__docgenInfo={description:"",methods:[],displayName:"flattenNested"};o.__docgenInfo={description:"",methods:[],displayName:"button"};var n,m,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  return <>
      <DataDownload filename="sample" data={fixtures.ranked} formats={["csv", "json"]} />
    </>;
}`,...(i=(m=t.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var p,d,l;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  return <>
      <DataDownload filename="sample" data={fixtures.nested} />
    </>;
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var c,u,f;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  return <>
      <DataDownload filename="sample" data={fixtures.ranked} formats={["csv", "json"]} titleElement={<SimpleButton>➥ Export</SimpleButton>} />
    </>;
}`,...(f=(u=o.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const q=["simple","flattenNested","button"];export{q as __namedExportsOrder,o as button,R as default,r as flattenNested,t as simple};
