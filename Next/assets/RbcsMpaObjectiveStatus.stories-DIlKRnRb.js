import{j as e}from"./jsx-runtime-DEdD30eg.js";import{O as h,a as b}from"./index-B2Cm0kwl.js";import{p as n}from"./number-BAURMb9d.js";import{a as x}from"./ReportDecorator-BLl16b_j.js";import{C as w}from"./CardDecorator-BYpn6BZ1.js";import"./SimpleButton-BKT7qdfB.js";import"./valueFormatter-DK9vM_WF.js";import{d as y}from"./styled-components.browser.esm-Cwi-fKCl.js";import"./WatersDiagram-CHmUhu9s.js";import"./SketchAttributesCard-Dgb94_gL.js";import"./IucnDesignationTable-DHBG5X6J.js";import"./IucnLevelCircle-9mogdVAY.js";import"./IucnLevelPill-BRLj3pUh.js";import"./IucnMatrix-CioaLlfF.js";import"./Table-Db9VXgo_.js";import"./ClassTable-B5fG0h2I.js";import"./FilterSelectTable-CUTaXfFp.js";import"./SketchClassTable-dwmss9XV.js";import"./ReportTableStyled-YHOh9k4c.js";import"./GroupCircleRow-BwvCSp1c.js";import"./TranslatorAsync-BjkwzyXE.js";import"./index-RYns6xqu.js";import"./ReportContext-DKjA4IB1.js";import"./Card-FnwmZRZt.js";import"./Circle-CH6Tn2Z1.js";import"./Collapse-ByIHf8L-.js";import"./CheckboxGroup-B-zjAHDz.js";import"./DataDownload-BPSbt6Wj.js";import"./DataDownloadToolbar-DFDUfOQJ.js";import"./Dropdown-CSdFVIjX.js";import"./InfoStatus-B5RZF2lR.js";import"./KeySection-Btzf7BUy.js";import"./LayerToggle-CutCh_0U.js";import{O as M}from"./ObjectiveStatus-J9EsCTcM.js";import"./Pill-Cw7zGJYD.js";import"./ResultsCard-DZu0ql2C.js";import"./ReportError-CyhIfolQ.js";import"./ReportPage-C7o7YIVs.js";import"./SegmentControl-DuWDC16t.js";import"./Skeleton-u_SOmpwo.js";import"./Toolbar-Ci4_u54V.js";import"./ToolbarCard-Cl8xrJl3.js";import"./VerticalSpacer-CckaP5Ks.js";import"./Tooltip-D2Zg19lv.js";import"./GeographySwitcher-B7Ga5RuA.js";import"./PointyCircle-DSJ1ZYVh.js";import"./RbcsIcons-DbMjepiQ.js";import"./RbcsLearnMore-y-CvmRko.js";import"./RbcsMpaClassPanel-C4R93ya0.js";import"./RbcsZoneClassPanel-FY207Oge.js";import{a as f}from"./objective-CIkv88AO.js";import"./index-BAMY2Nnw.js";import"./index-BKD8Dact.js";import"./cloneDeep-DjGZ9tLP.js";import"./_getPrototype-2UMXDfW_.js";import"./useTranslation-SdK8TBCK.js";import"./context-D1gH75Th.js";import"./useSketchProperties-CHjaomRQ.js";import"./iucnProtectionLevel-KZvFkafK.js";import"./extends-CF3RwP-h.js";import"./index.esm-BWA7R1MX.js";import"./helpers-CEsPW1hT.js";import"./_baseIteratee-hc9hs9W5.js";import"./_baseToString-CmkGVQv0.js";import"./InfoCircleFill.esm-CjhE5QEd.js";import"./CheckCircleFill.esm-DtBQOjIm.js";import"./iframe-DRF2073L.js";import"../sb-preview/runtime.js";import"./index-BbP3371Q.js";import"./usePopper-ptQ-sUxU.js";import"./index-D16Yfzz8.js";import"./index-rNTiGNI1.js";import"./rbcs-BHXFcvGv.js";y.div`
  h3,
  h6 {
    margin: 0;
    line-height: 1em;
  }
  h3 {
    margin-bottom: 1em;
  }
  h6 {
    font-size: 0.8em;
    padding: 0 0.5em 0.5em 0;
    width: 5em;
    text-align: right;
    color: #666;
  }
  figure {
    margin: 1em auto;
    max-width: 1100px;
    position: relative;
  }
  .graphic {
    padding-left: 10px;
  }

  .chart {
    position: relative;
    overflow: visible;
    width: 0%;
    animation: expand 1.5s ease forwards;
  }

  .x-axis {
    text-align: center;
    padding: 0em 0 0.5em;
  }

  .legend {
    margin: 0 auto;
    padding: 0;
    font-size: 0.9em;
  }
  .legend li {
    display: inline-block;
    padding: 0.25em 1em;
    line-height: 1em;
  }
  .legend li:before {
    content: "";
    margin-right: 0.5em;
    display: inline-block;
    width: 8px;
    height: 8px;
    background-color: #334d5c;
  }

  ${t=>t.blockGroupColors.map((r,o)=>`
      .legend li:nth-of-type(${o+1}):before {
        background-color: ${r};
      }
    `)}

  @media screen and (min-width: 768px) {
    h6 {
      padding: 0 0.5em 0.5em 0;
      width: 5em;
      float: left;
    }
    .legend {
      width: 80%;
    }
  }
`;const v=new URLSearchParams(window.location.search);v.get("service");v.get("frameId")||window.name;const p=({level:t,objective:r,renderMsg:o})=>{const j=o?o(r,t):P(r,t);return e.jsx(M,{status:r.countsToward[t],msg:j})},P=(t,r)=>t.countsToward[r]===h?e.jsxs(e.Fragment,{children:["This MPA counts towards protecting"," ",e.jsx("b",{children:n(t.target)})," of planning area."]}):t.countsToward[r]===b?e.jsxs(e.Fragment,{children:["This MPA ",e.jsx("b",{children:"does not"})," count towards protecting"," ",e.jsx("b",{children:n(t.target)})," of planning area."]}):e.jsxs(e.Fragment,{children:["This MPA ",e.jsx("b",{children:"may"})," count towards protecting"," ",e.jsx("b",{children:n(t.target)})," of planning area."]});p.__docgenInfo={description:"",methods:[],displayName:"RbcsMpaObjectiveStatus",props:{level:{required:!0,tsType:{name:"unknown[number]",raw:"(typeof rbcsMpaProtectionLevels)[number]"},description:"RBCS protection level for MPA to give status for"},objective:{required:!0,tsType:{name:"RbcsObjective"},description:"RBCS objective to weigh protection level against"},renderMsg:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  objective: RbcsObjective,
  level: RbcsMpaProtectionLevel,
) => JSX.Element`,signature:{arguments:[{type:{name:"RbcsObjective"},name:"objective"},{type:{name:"unknown[number]",raw:"(typeof rbcsMpaProtectionLevels)[number]"},name:"level"}],return:{name:"JSX.Element"}}},description:"optional custom objective message"}}};const Ue={component:p,title:"Components/Rbcs/RbcsMpaObjective",decorators:[w,x]},i={objectiveId:"eez",shortDesc:"30% protected",target:.3,countsToward:{"Fully Protected Area":"yes","Highly Protected Area":"yes","Moderately Protected Area":"maybe","Poorly Protected Area":"no","Unprotected Area":"no"}},s=()=>{const t=f(i.countsToward);return e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Based on the following objective ",JSON.stringify(i),":"]}),t.map((r,o)=>e.jsxs("div",{children:[e.jsx("p",{children:`If MPA has protection level: ${r}`}),e.jsx(p,{level:r,objective:i})]},o))]})},a=()=>{const t=f(i.countsToward);return e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Based on the following objective ",JSON.stringify(i),":"]}),t.map((r,o)=>e.jsxs("div",{children:[e.jsx("p",{children:`If MPA has protection level: ${r}`}),e.jsx(p,{level:r,objective:i,renderMsg:()=>R(i,r)})]},o))]})},R=(t,r)=>t.countsToward[r]===h?e.jsxs(e.Fragment,{children:["This most definitely counts towards protecting"," ",e.jsx("b",{children:n(t.target)})," of Lunar waters 🌙."]}):t.countsToward[r]===b?e.jsxs(e.Fragment,{children:["This most definitely ",e.jsx("b",{children:"does not"})," count towards protecting"," ",e.jsx("b",{children:n(t.target)})," of Lunar waters 🌙."]}):e.jsxs(e.Fragment,{children:["This most definitely ",e.jsx("b",{children:"may"})," count towards protecting"," ",e.jsx("b",{children:n(t.target)})," of Lunar waters 🌙."]});s.__docgenInfo={description:"",methods:[],displayName:"simple"};a.__docgenInfo={description:"",methods:[],displayName:"customMessageRenderProp"};var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const levels = getKeys(objective.countsToward);
  return <>
      <p>Based on the following objective {JSON.stringify(objective)}:</p>
      {levels.map((level, index) => <div key={index}>
          <p>{\`If MPA has protection level: \${level}\`}</p>
          <RbcsMpaObjectiveStatus level={level} objective={objective} />
        </div>)}
    </>;
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,g,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const levels = getKeys(objective.countsToward);
  return <>
      <p>Based on the following objective {JSON.stringify(objective)}:</p>
      {levels.map((level, index) => <div key={index}>
          <p>{\`If MPA has protection level: \${level}\`}</p>
          <RbcsMpaObjectiveStatus level={level} objective={objective} renderMsg={() => customRenderMsg(objective, level)} />
        </div>)}
    </>;
}`,...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const Ve=["simple","customMessageRenderProp"];export{Ve as __namedExportsOrder,a as customMessageRenderProp,Ue as default,s as simple};
