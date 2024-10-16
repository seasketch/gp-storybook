import{j as r}from"./jsx-runtime-DEdD30eg.js";import{R as h}from"./index-RYns6xqu.js";import{T as b}from"./Table-Db9VXgo_.js";import{u as d,C as k}from"./CheckboxGroup-B-zjAHDz.js";import{d as S}from"./styled-components.browser.esm-Cwi-fKCl.js";const F=S.div`
  input {
    margin: 0px 10px 0px 0px;
  }

  table {
    margin-bottom: 10px;
  }
  .checkbox-group {
    margin: 10px 0px 10px 0px;
  }
`;function T(n){const{filterSelect:p,data:s,...m}=n,{type:f="some",filterPosition:i="bottom",filters:c}=p,u=c.map(e=>({name:e.name,checked:e.defaultValue})),t=d(u),x=h.useMemo(()=>{const e=c.filter((a,o)=>t.checkboxes[o].checked);return s.filter(a=>e.length===0?!0:e[f](o=>o.filterFn(a)))},[s,t.checkboxes]),l=r.jsx(k,{...t});return r.jsxs(F,{className:"filter-select-table",children:[i==="top"&&l,r.jsx(b,{data:x,...m}),i==="bottom"&&l]})}T.__docgenInfo={description:`Table with customizable filter functions as CheckboxGroup that when selected
filter the rows if the function return true.  By default only 'some' filter function
has to match for it to filter the row`,methods:[],displayName:"FilterSelectTable",props:{filterSelect:{required:!0,tsType:{name:"FilterSelect",elements:[{name:"D"}],raw:"FilterSelect<D>"},description:""}},composes:["TableOptions"]};export{T as F};
