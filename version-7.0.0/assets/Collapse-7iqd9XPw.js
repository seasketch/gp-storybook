import{j as a}from"./jsx-runtime-DEdD30eg.js";import{r as t,R as m}from"./index-RYns6xqu.js";import{d as n}from"./styled-components.browser.esm-Cwi-fKCl.js";import{_ as s}from"./extends-CF3RwP-h.js";import{S as i}from"./index.esm-BWA7R1MX.js";var p=t.forwardRef(function(r,l){var e={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return t.createElement(i,s({iconAttrs:e,iconVerticalAlign:"middle",iconViewBox:"0 0 16 16"},r,{ref:l}),t.createElement("path",{d:"M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"}))});p.displayName="CaretDownFill";var d=t.forwardRef(function(r,l){var e={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return t.createElement(i,s({iconAttrs:e,iconVerticalAlign:"middle",iconViewBox:"0 0 16 16"},r,{ref:l}),t.createElement("path",{d:"m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"}))});d.displayName="CaretRightFill";const x=n.div`
  .collapse-header {
    margin-top: 15px;
    display: flex;
    height: 20px;
  }

  .collapse-button {
    display: flex;
    align-items: center;
    border: 0;
    background-color: transparent;
    font-size: 15px;
    font-weight: bold;
    color: #767676;
    cursor: pointer;
    padding: 0;
    margin-bottom: 10px;
  }

  .collapse-content {
    margin-left: 15px;
    background-color: transparent;
    & p {
      margin: 10px 0px;
    }
  }

  .collapse-content.collapsed {
    display: none;
  }

  .collapse-content.expanded {
    display: block;
  }
`,u=({collapsed:r=!0,children:l,title:e})=>{const[o,c]=m.useState(r);return a.jsxs(x,{"aria-label":o?`Expand ${e}`:`Collapse ${e}`,"aria-expanded":!o,role:"button",children:[a.jsx("div",{className:"collapse-header",children:a.jsxs("button",{className:"collapse-button",onClick:()=>c(!o),children:[o?a.jsx(d,{size:15,style:{marginRight:"5px"},"aria-hidden":"true"}):a.jsx(p,{size:15,style:{marginRight:"5px"},"aria-hidden":"true"})," ",e]})}),a.jsx("div",{className:`collapse-content ${o?"collapsed":"expanded"}`,children:l})]})};n.div`
  margin-top: 15px;
  & .collapse-header {
    margin-top: 0px;
  }
`;u.__docgenInfo={description:"",methods:[],displayName:"Collapse",props:{title:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},collapsed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};export{u as C};
