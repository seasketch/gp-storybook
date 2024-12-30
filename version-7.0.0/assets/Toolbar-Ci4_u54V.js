import{j as p}from"./jsx-runtime-DEdD30eg.js";import{d as f}from"./styled-components.browser.esm-Cwi-fKCl.js";import{g as m}from"./index-RYns6xqu.js";var i={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(l){(function(){var s={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=n(e,o(r)))}return e}function o(e){if(typeof e=="string"||typeof e=="number")return e;if(typeof e!="object")return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)s.call(e,r)&&e[r]&&(t=n(t,r));return t}function n(e,t){return t?e?e+" "+t:e+t:e}l.exports?(a.default=a,l.exports=a):window.classNames=a})()})(i);var c=i.exports;const d=m(c),g=f.div`
  &.gp-toolbar {
    display: flex;
    position: relative;
    justify-content: space-between;
  }

  & h2 {
    font-family: sans-serif;
    font-size: 14px;
    color: rgb(116, 116, 116);
    margin: 0px;
    font-weight: 400;
  }

  &.gp-toolbar-gutter {
    padding: 0px 16px 0px 16px;
  }

  &.gp-toolbar-regular {
    min-height: 42px;
  }

  &.gp-toolbar-dense {
    min-height: 30px;
  }
`,u=({children:l,variant:s="regular",useGutters:a=!0,toolbarCls:o="",titleAlign:n="baseline",style:e={},...t})=>{const r=d("gp-toolbar",{"gp-toolbar-gutter":a,"gp-toolbar-regular":s==="regular","gp-toolbar-dense":s==="dense"},o);return p.jsx(g,{className:r,...t,style:{...e,alignItems:n},children:l})},y=u;u.__docgenInfo={description:"",methods:[],displayName:"Toolbar",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"regular" | "dense" | "min"',elements:[{name:"literal",value:'"regular"'},{name:"literal",value:'"dense"'},{name:"literal",value:'"min"'}]},description:"defaults to regular height, dense is smaller height, min is height of toolbar items",defaultValue:{value:'"regular"',computed:!1}},useGutters:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},toolbarCls:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},titleAlign:{required:!1,tsType:{name:"union",raw:'"flex-start" | "flex-end" | "center" | "baseline" | "stretch"',elements:[{name:"literal",value:'"flex-start"'},{name:"literal",value:'"flex-end"'},{name:"literal",value:'"center"'},{name:"literal",value:'"baseline"'},{name:"literal",value:'"stretch"'}]},description:"",defaultValue:{value:'"baseline"',computed:!1}},style:{required:!1,tsType:{name:'ReactHTMLAttributes["style"]',raw:'React.HTMLAttributes<HTMLElement>["style"]'},description:"",defaultValue:{value:"{}",computed:!1}}}};export{y as T};
