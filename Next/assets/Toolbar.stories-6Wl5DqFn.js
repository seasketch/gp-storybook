import{j as o}from"./jsx-runtime-DEdD30eg.js";import{T as l}from"./Toolbar-Ci4_u54V.js";import{C as s}from"./Card-CM14UvZN.js";import{S as r}from"./SimpleButton-CD5OHI_F.js";import{R as y}from"./ReportDecorator-BKqhhKaH.js";import{D as g}from"./DataDownloadToolbar-B7oXbgJ-.js";import{f as B}from"./index-CJGZSqXF.js";import"./index-RYns6xqu.js";import"./styled-components.browser.esm-Cwi-fKCl.js";import"./index-BAMY2Nnw.js";import"./index-BKD8Dact.js";import"./cloneDeep-DjGZ9tLP.js";import"./_getPrototype-2UMXDfW_.js";import"./DataDownload-NRMtrsbm.js";import"./Dropdown-BSgC6zM_.js";import"./extends-CF3RwP-h.js";import"./index.esm-BWA7R1MX.js";import"./usePopper-ptQ-sUxU.js";import"./index-D16Yfzz8.js";import"./index-BbP3371Q.js";import"./useSketchProperties-C7Z3ZE-x.js";import"./useTranslation-SdK8TBCK.js";import"./context-D1gH75Th.js";const Q={component:l,title:"Components/Toolbar",decorators:[y]},e=()=>o.jsxs(s,{children:[o.jsxs(l,{variant:"dense",useGutters:!1,children:[o.jsx("h2",{style:{flexGrow:1},children:"Toolbar Title"}),o.jsxs("div",{children:[o.jsx(r,{children:"⬇"}),o.jsx(r,{children:"➥"})]})]}),o.jsx("p",{children:"Body"})]}),t=()=>o.jsxs(s,{children:[o.jsxs(l,{titleAlign:"center",style:{backgroundColor:"#eee"},children:[o.jsx("h2",{style:{flexGrow:1},children:"Header Toolbar"}),o.jsxs("div",{children:[o.jsx(r,{children:"⬇"}),o.jsx(r,{children:"➥"})]})]}),o.jsx("p",{children:"Body"})]}),a=()=>o.jsxs(s,{title:"Card Title",children:[o.jsx("p",{children:"Body"}),o.jsxs(l,{variant:"dense",titleAlign:"center",style:{backgroundColor:"#eee"},children:[o.jsx("h2",{style:{flexGrow:1},children:"Footer Toolbar"}),o.jsxs("div",{children:[o.jsx(r,{children:"⬇"}),o.jsx(r,{children:"➥"})]})]})]}),n=()=>o.jsx(s,{children:o.jsx(g,{title:"Data Download Toolbar",filename:"ranked",data:B.ranked})});e.__docgenInfo={description:"",methods:[],displayName:"headerToolbar"};t.__docgenInfo={description:"",methods:[],displayName:"regularGutterToolbar"};a.__docgenInfo={description:"",methods:[],displayName:"denseGutterToolbar"};n.__docgenInfo={description:"",methods:[],displayName:"dataDownloadToolbar"};var i,d,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`() => <Card>
    <Toolbar variant="dense" useGutters={false}>
      <h2 style={{
      flexGrow: 1
    }}>Toolbar Title</h2>
      <div>
        <SimpleButton>⬇</SimpleButton>
        <SimpleButton>➥</SimpleButton>
      </div>
    </Toolbar>
    <p>Body</p>
  </Card>`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,c,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`() => <Card>
    <Toolbar titleAlign="center" style={{
    backgroundColor: "#eee"
  }}>
      <h2 style={{
      flexGrow: 1
    }}>Header Toolbar</h2>
      <div>
        <SimpleButton>⬇</SimpleButton>
        <SimpleButton>➥</SimpleButton>
      </div>
    </Toolbar>
    <p>Body</p>
  </Card>`,...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var h,T,b;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`() => <Card title="Card Title">
    <p>Body</p>
    <Toolbar variant="dense" titleAlign="center" style={{
    backgroundColor: "#eee"
  }}>
      <h2 style={{
      flexGrow: 1
    }}>Footer Toolbar</h2>
      <div>
        <SimpleButton>⬇</SimpleButton>
        <SimpleButton>➥</SimpleButton>
      </div>
    </Toolbar>
  </Card>`,...(b=(T=a.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var x,f,j;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  return <Card>
      <DataDownloadToolbar title="Data Download Toolbar" filename="ranked" data={fixtures.ranked} />
    </Card>;
}`,...(j=(f=n.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};const U=["headerToolbar","regularGutterToolbar","denseGutterToolbar","dataDownloadToolbar"];export{U as __namedExportsOrder,n as dataDownloadToolbar,Q as default,a as denseGutterToolbar,e as headerToolbar,t as regularGutterToolbar};
