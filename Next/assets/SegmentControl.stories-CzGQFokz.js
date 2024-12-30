import{j as e}from"./jsx-runtime-DEdD30eg.js";import{r as c}from"./index-RYns6xqu.js";import{S as d,R as r}from"./SegmentControl-CZ99B3yM.js";import{c as g}from"./ReportDecorator-BKqhhKaH.js";import{T as h}from"./TranslatorAsync-B_qXHhRg.js";import{C as s}from"./Card-CM14UvZN.js";import{S as n}from"./Skeleton-u_SOmpwo.js";import"./index-BKD8Dact.js";import"./cloneDeep-DjGZ9tLP.js";import"./_getPrototype-2UMXDfW_.js";import"./iframe-BJY36Cwj.js";import"../sb-preview/runtime.js";import"./context-D1gH75Th.js";import"./styled-components.browser.esm-Cwi-fKCl.js";import"./index-BAMY2Nnw.js";const t=()=>{const[o,m]=c.useState("one");return e.jsxs(h,{children:[e.jsx(d,{value:o,onClick:p=>m(p),segments:[{id:"one",label:"One"},{id:"two",label:"Two"},{id:"three",label:"Three"}]}),e.jsx(r,{hidden:o!=="one",children:e.jsxs(s,{children:[e.jsx(n,{}),e.jsx(n,{})]})}),e.jsx(r,{hidden:o!=="two",children:e.jsxs(s,{children:[e.jsx(n,{}),e.jsx(n,{}),e.jsx(n,{})]})}),e.jsx(r,{hidden:o!=="three",children:e.jsx(s,{children:e.jsx(n,{})})})]})},v={component:d,title:"Components/SegmentControl",decorators:[g()]};t.__docgenInfo={description:"",methods:[],displayName:"segmentControl"};var a,i,l;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const [tab, setTab] = useState<string>("one");
  return <Translator>
      <SegmentControl value={tab} onClick={segment => setTab(segment)} segments={[{
      id: "one",
      label: "One"
    }, {
      id: "two",
      label: "Two"
    }, {
      id: "three",
      label: "Three"
    }]} />
      <ReportPage hidden={tab !== "one"}>
        <Card>
          <Skeleton />
          <Skeleton />
        </Card>
      </ReportPage>
      <ReportPage hidden={tab !== "two"}>
        <Card>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </Card>
      </ReportPage>
      <ReportPage hidden={tab !== "three"}>
        <Card>
          <Skeleton />
        </Card>
      </ReportPage>
    </Translator>;
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const y=["segmentControl"];export{y as __namedExportsOrder,v as default,t as segmentControl};
