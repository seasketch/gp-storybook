import{j as e}from"./jsx-runtime-DEdD30eg.js";import{O as h,a as b}from"./geographies-Dy7PGO2y.js";import{p as n}from"./number-cRyP0T_7.js";import{a as x}from"./ReportDecorator-BKqhhKaH.js";import{C as w}from"./CardDecorator-SdzzCCaW.js";import"./valueFormatter-CwWsdtmz.js";import{d as y}from"./styled-components.browser.esm-Cwi-fKCl.js";import"./WatersDiagram-CHmUhu9s.js";import"./SketchAttributesCard-Bj4JFaUi.js";import"./IucnDesignationTable-DzC2SQ99.js";import"./IucnLevelCircle-D6DFDagq.js";import"./IucnLevelPill--Wa943A1.js";import"./IucnMatrix-D67jgbAm.js";import"./Table-DU7L5fPt.js";import"./ClassTable-DKcKdr4y.js";import"./FilterSelectTable-EeI3LT1t.js";import"./SketchClassTable-Cx5ZyWDA.js";import"./ReportTableStyled-YHOh9k4c.js";import"./GroupCircleRow-CQR-r2UC.js";import"./TranslatorAsync-B_qXHhRg.js";import"./index-RYns6xqu.js";import"./Card-CM14UvZN.js";import"./Circle-C4NcHiwg.js";import"./Collapse-7iqd9XPw.js";import"./CheckboxGroup-B-zjAHDz.js";import"./DataDownload-NRMtrsbm.js";import"./DataDownloadToolbar-B7oXbgJ-.js";import"./Dropdown-BSgC6zM_.js";import"./ErrorStatus-BfiBdgir.js";import"./GeographySwitcher-x36Ufr2O.js";import"./InfoStatus-DIO3Rise.js";import"./KeySection-DH5O_gQ3.js";import"./LayerToggle-I347XAEB.js";import{O as M}from"./ObjectiveStatus-CmWKntiI.js";import"./Pill-2iL0yYbW.js";import"./ResultsCard-DzrYA0tH.js";import"./ReportError-CKDrXl1_.js";import"./SegmentControl-CZ99B3yM.js";import"./SimpleButton-CD5OHI_F.js";import"./Skeleton-u_SOmpwo.js";import"./Toolbar-Ci4_u54V.js";import"./ToolbarCard-pyGkhUKg.js";import"./Tooltip-B8XPMhwM.js";import"./VerticalSpacer-CckaP5Ks.js";import"./PointyCircle-C32lPmy-.js";import"./RbcsIcons-BmnZGO8y.js";import"./RbcsLearnMore-DYiqeu6x.js";import"./RbcsMpaClassPanel-7rr-boQ4.js";import"./RbcsZoneClassPanel-Bp4QFhux.js";import{a as f}from"./objective-Caaevdh9.js";import"./index-BAMY2Nnw.js";import"./index-BKD8Dact.js";import"./cloneDeep-DjGZ9tLP.js";import"./_getPrototype-2UMXDfW_.js";import"./useTranslation-SdK8TBCK.js";import"./context-D1gH75Th.js";import"./useSketchProperties-C7Z3ZE-x.js";import"./iucnProtectionLevel-KZvFkafK.js";import"./extends-CF3RwP-h.js";import"./index.esm-BWA7R1MX.js";import"./helpers-DgG4-pmm.js";import"./_baseIteratee-hc9hs9W5.js";import"./_baseToString-CmkGVQv0.js";import"./InfoCircleFill.esm-CjhE5QEd.js";import"./CheckCircleFill.esm-DtBQOjIm.js";import"./iframe-BJY36Cwj.js";import"../sb-preview/runtime.js";import"./index-BbP3371Q.js";import"./usePopper-ptQ-sUxU.js";import"./index-D16Yfzz8.js";import"./index-rNTiGNI1.js";import"./rbcs-BHXFcvGv.js";y.div`
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
) => JSX.Element`,signature:{arguments:[{type:{name:"RbcsObjective"},name:"objective"},{type:{name:"unknown[number]",raw:"(typeof rbcsMpaProtectionLevels)[number]"},name:"level"}],return:{name:"JSX.Element"}}},description:"optional custom objective message"}}};const Ke={component:p,title:"Components/Rbcs/RbcsMpaObjective",decorators:[w,x]},i={objectiveId:"eez",shortDesc:"30% protected",target:.3,countsToward:{"Fully Protected Area":"yes","Highly Protected Area":"yes","Moderately Protected Area":"maybe","Poorly Protected Area":"no","Unprotected Area":"no"}},s=()=>{const t=f(i.countsToward);return e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Based on the following objective ",JSON.stringify(i),":"]}),t.map((r,o)=>e.jsxs("div",{children:[e.jsx("p",{children:`If MPA has protection level: ${r}`}),e.jsx(p,{level:r,objective:i})]},o))]})},a=()=>{const t=f(i.countsToward);return e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Based on the following objective ",JSON.stringify(i),":"]}),t.map((r,o)=>e.jsxs("div",{children:[e.jsx("p",{children:`If MPA has protection level: ${r}`}),e.jsx(p,{level:r,objective:i,renderMsg:()=>R(i,r)})]},o))]})},R=(t,r)=>t.countsToward[r]===h?e.jsxs(e.Fragment,{children:["This most definitely counts towards protecting"," ",e.jsx("b",{children:n(t.target)})," of Lunar waters 🌙."]}):t.countsToward[r]===b?e.jsxs(e.Fragment,{children:["This most definitely ",e.jsx("b",{children:"does not"})," count towards protecting"," ",e.jsx("b",{children:n(t.target)})," of Lunar waters 🌙."]}):e.jsxs(e.Fragment,{children:["This most definitely ",e.jsx("b",{children:"may"})," count towards protecting"," ",e.jsx("b",{children:n(t.target)})," of Lunar waters 🌙."]});s.__docgenInfo={description:"",methods:[],displayName:"simple"};a.__docgenInfo={description:"",methods:[],displayName:"customMessageRenderProp"};var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
}`,...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const Ue=["simple","customMessageRenderProp"];export{Ue as __namedExportsOrder,a as customMessageRenderProp,Ke as default,s as simple};
