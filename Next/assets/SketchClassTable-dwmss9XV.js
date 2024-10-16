import{j as s}from"./jsx-runtime-DEdD30eg.js";import"./index-B2Cm0kwl.js";import{p as d}from"./number-BAURMb9d.js";import"./ReportDecorator-BLl16b_j.js";import{T as p}from"./Table-Db9VXgo_.js";import{d as r}from"./styled-components.browser.esm-Cwi-fKCl.js";import{R as f}from"./ReportTableStyled-YHOh9k4c.js";import{u as h}from"./useTranslation-SdK8TBCK.js";const u=r(f)`
  .styled {
    font-size: 13px;

    td:last-child,
    th:last-child {
      text-align: right;
    }
  }
`,b=r(u)`
  & {
    width: 100%;
    overflow-x: scroll;
  }

  & th:first-child,
  & td:first-child {
    position: sticky;
    left: 0;
    background: #efefef;
  }

  & th,
  & td {
  }

  .styled {
    font-size: 12px;
`,y=({rows:a,metricGroup:o,formatPerc:n=!1})=>{const{t:l}=h(),i=l("MPA"),c=o.classes.map(e=>({Header:e.display,accessor:t=>n?d(Number.isNaN(t[e.classId])?0:t[e.classId]):t[e.classId]})),m=[{Header:i,accessor:e=>s.jsx("div",{style:{width:120},children:e.sketchName})},...c];return s.jsx(b,{children:s.jsx(p,{className:"styled",columns:m,data:a.sort((e,t)=>e.sketchName.localeCompare(t.sketchName))})})};y.__docgenInfo={description:`Table displaying sketch class metrics, one table row per sketch
@param SketchClassTableProps
@returns`,methods:[],displayName:"SketchClassTable",props:{rows:{required:!0,tsType:{name:"Array",elements:[{name:"Record",elements:[{name:"string"},{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}],raw:"Record<string, string | number>"}],raw:"Record<string, string | number>[]"},description:"Table rows, expected to have sketchName property and one property for each classId in classes"},metricGroup:{required:!0,tsType:{name:"z.infer",elements:[{name:"metricGroupSchema"}],raw:"z.infer<typeof metricGroupSchema>"},description:"Data class definitions"},formatPerc:{required:!1,tsType:{name:"boolean"},description:"Whether to format values as percentages, defaults to false",defaultValue:{value:"false",computed:!1}}}};export{y as S};
