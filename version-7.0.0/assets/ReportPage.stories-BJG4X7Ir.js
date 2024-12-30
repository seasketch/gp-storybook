import{j as e}from"./jsx-runtime-DEdD30eg.js";import{r as d}from"./index-RYns6xqu.js";import{R as t,S as l}from"./SegmentControl-CZ99B3yM.js";import{R as m}from"./ReportDecorator-BKqhhKaH.js";import{C as n}from"./Card-CM14UvZN.js";import"./index-BKD8Dact.js";import"./cloneDeep-DjGZ9tLP.js";import"./_getPrototype-2UMXDfW_.js";const j={component:t,title:"Components/ReportPage",decorators:[m]},a=()=>{const[r,g]=d.useState("page1");return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{marginTop:5},children:e.jsx(l,{value:r,onClick:i=>g(i),segments:[{id:"page1",label:"Page 1"},{id:"page2",label:"Page 2"}]})}),e.jsx(t,{hidden:r!=="page1",children:e.jsx(n,{children:"Report page 1"})}),e.jsx(t,{hidden:r!=="page2",children:e.jsx(n,{children:"Report page 2"})})]})};a.__docgenInfo={description:"",methods:[],displayName:"reportPage"};var o,s,p;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  const [tab, setTab] = useState<string>("page1");
  const enableAllTabs = false;
  return <>
      <div style={{
      marginTop: 5
    }}>
        <SegmentControl value={tab} onClick={segment => setTab(segment)} segments={[{
        id: "page1",
        label: "Page 1"
      }, {
        id: "page2",
        label: "Page 2"
      }]} />
      </div>
      <ReportPage hidden={!enableAllTabs && tab !== "page1"}>
        <Card>Report page 1</Card>
      </ReportPage>
      <ReportPage hidden={!enableAllTabs && tab !== "page2"}>
        <Card>Report page 2</Card>
      </ReportPage>
    </>;
}`,...(p=(s=a.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const f=["reportPage"];export{f as __namedExportsOrder,j as default,a as reportPage};
