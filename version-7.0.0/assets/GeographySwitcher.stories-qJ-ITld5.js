import{j as o}from"./jsx-runtime-DEdD30eg.js";import{r as h}from"./index-RYns6xqu.js";import{G as p}from"./GeographySwitcher-x36Ufr2O.js";import{T as n}from"./TranslatorAsync-B_qXHhRg.js";import{c as i}from"./ReportDecorator-BKqhhKaH.js";import"./useTranslation-SdK8TBCK.js";import"./context-D1gH75Th.js";import"./iframe-BJY36Cwj.js";import"../sb-preview/runtime.js";import"./index-BKD8Dact.js";import"./cloneDeep-DjGZ9tLP.js";import"./_getPrototype-2UMXDfW_.js";const v={component:p,title:"Components/GeographySwitcher",decorators:[i()]},d=[{geographyId:"geography1",datasourceId:"ds1",display:"Geography 1",precalc:!0},{geographyId:"geography2",datasourceId:"ds2",display:"Geography 2",precalc:!0}],e=()=>{const[g,c]=h.useState("test2");return o.jsx(n,{children:o.jsx(p,{geographies:d,curGeographyId:g,changeGeography:r=>{console.log(`You selected ${r.target.value}`),c(r.target.value)}})})};e.__docgenInfo={description:"",methods:[],displayName:"geographySwitcher"};var t,a,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  const [curGeographyId, setCurGeographyId] = useState("test2");
  return <Translator>
      <GeographySwitcher geographies={testGeogs} curGeographyId={curGeographyId} changeGeography={e => {
      console.log(\`You selected \${e.target.value}\`);
      setCurGeographyId(e.target.value);
    }} />
    </Translator>;
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const C=["geographySwitcher"];export{C as __namedExportsOrder,v as default,e as geographySwitcher};
