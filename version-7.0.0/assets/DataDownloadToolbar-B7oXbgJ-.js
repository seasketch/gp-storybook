import{j as o}from"./jsx-runtime-DEdD30eg.js";import{d as i}from"./styled-components.browser.esm-Cwi-fKCl.js";import{T as p}from"./Toolbar-Ci4_u54V.js";import{D as c}from"./DataDownload-NRMtrsbm.js";const m=i.div`
  & .gp-data-download-toolbar h2 {
    flex-grow: 1;
  }
`,u=({title:a,variant:e="dense",useGutters:r=!1,filename:t,formats:s,data:d})=>{const l={title:a,variant:e,useGutters:r},n={filename:t,formats:s,data:d};return o.jsx(m,{children:o.jsxs(p,{toolbarCls:"gp-data-download-toolbar",...l,children:[typeof a=="string"?o.jsx("h2",{children:a}):a,o.jsx("div",{children:o.jsx(c,{...n})})]})})};u.__docgenInfo={description:"Convenience component that creates a Toolbar with Header and DataDownload",methods:[],displayName:"DataDownloadToolbar",props:{title:{required:!0,tsType:{name:"string"},description:""},variant:{defaultValue:{value:'"dense"',computed:!1},required:!1},useGutters:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["DataDownloadProps","Omit"]};export{u as D};
