import{j as l}from"./jsx-runtime-DEdD30eg.js";import{C as t}from"./Card-FnwmZRZt.js";import{P as o,W as a,G as c,a as i}from"./Pill-Cw7zGJYD.js";import{R as d}from"./ReportDecorator-BLl16b_j.js";import"./index-RYns6xqu.js";import"./styled-components.browser.esm-Cwi-fKCl.js";import"./index-BAMY2Nnw.js";import"./ReportContext-DKjA4IB1.js";import"./index-BKD8Dact.js";import"./cloneDeep-DjGZ9tLP.js";import"./_getPrototype-2UMXDfW_.js";const B={component:o,title:"Components/Pill",decorators:[d]},p={high:"#BEE4BE",med:"#FFE1A3",low:"#F7A6B4"},r=()=>l.jsxs(t,{title:"Report Title",children:[l.jsx("p",{children:"Basic"}),l.jsxs("p",{children:[l.jsx(o,{children:"Default"}),l.jsx(o,{color:"#FFE1A3",children:"Yellow"}),l.jsx(o,{color:"#BEE4BE",children:"Green"})]}),l.jsx("p",{children:"Helper Pills"}),l.jsxs("p",{children:[l.jsx(a,{children:"WarningPill"}),l.jsx(c,{children:"GreenPill"})]}),l.jsx("p",{children:"GroupPill with color map:"}),l.jsxs("p",{children:[l.jsx(i,{groupColorMap:p,group:"high",children:"High"}),l.jsx(i,{groupColorMap:p,group:"med",children:"Medium"}),l.jsx(i,{groupColorMap:p,group:"low",children:"Low"})]})]});r.__docgenInfo={description:"",methods:[],displayName:"pill"};var e,n,s;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`() => <Card title="Report Title">
    <p>Basic</p>
    <p>
      <Pill>Default</Pill>
      <Pill color="#FFE1A3">Yellow</Pill>
      <Pill color="#BEE4BE">Green</Pill>
    </p>
    <p>Helper Pills</p>
    <p>
      <WarningPill>WarningPill</WarningPill>
      <GreenPill>GreenPill</GreenPill>
    </p>
    <p>GroupPill with color map:</p>
    <p>
      <GroupPill groupColorMap={groupColorMap} group="high">
        High
      </GroupPill>
      <GroupPill groupColorMap={groupColorMap} group="med">
        Medium
      </GroupPill>
      <GroupPill groupColorMap={groupColorMap} group="low">
        Low
      </GroupPill>
    </p>
  </Card>`,...(s=(n=r.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const M=["pill"];export{M as __namedExportsOrder,B as default,r as pill};
