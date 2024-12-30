import{j as e}from"./jsx-runtime-DEdD30eg.js";import{r as K}from"./index-RYns6xqu.js";import{R as r}from"./ResultsCard-DzrYA0tH.js";import{c as Q,s as W,b as o}from"./ReportDecorator-BKqhhKaH.js";import{S as g}from"./Skeleton-u_SOmpwo.js";import{L as X}from"./LayerToggle-I347XAEB.js";import{C as x}from"./Collapse-7iqd9XPw.js";import{f as Y}from"./index-CJGZSqXF.js";import{D as $}from"./DataDownload-NRMtrsbm.js";import{T as G}from"./ToolbarCard-pyGkhUKg.js";import"./Card-CM14UvZN.js";import"./styled-components.browser.esm-Cwi-fKCl.js";import"./index-BAMY2Nnw.js";import"./ReportError-CKDrXl1_.js";import"./index-rNTiGNI1.js";import"./ErrorStatus-BfiBdgir.js";import"./extends-CF3RwP-h.js";import"./index.esm-BWA7R1MX.js";import"./useTranslation-SdK8TBCK.js";import"./context-D1gH75Th.js";import"./index-BKD8Dact.js";import"./cloneDeep-DjGZ9tLP.js";import"./_getPrototype-2UMXDfW_.js";import"./Dropdown-BSgC6zM_.js";import"./usePopper-ptQ-sUxU.js";import"./index-D16Yfzz8.js";import"./SimpleButton-CD5OHI_F.js";import"./index-BbP3371Q.js";import"./useSketchProperties-C7Z3ZE-x.js";import"./Toolbar-Ci4_u54V.js";const a=W({visibleLayers:[],exampleOutputs:[{functionName:"area",sketchName:"My Sketch",results:{area:704}}]}),i=()=>e.jsx(r,{title:"Card Title",functionName:"area",children:t=>e.jsxs("p",{children:["This zone is ",t.area," sq km. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nisi beatae, officiis perferendis quis inventore quisquam? Provident doloremque inventore, natus beatae quam nisi eius quidem deserunt, aperiam aliquid corrupti eveniet."]})}),ee=["nearshore","offshore"],n=()=>{const[t,H]=K.useState("nearshore"),J=s=>{console.log("changing geography to",s.target.value),H(s.target.value)};return e.jsxs(e.Fragment,{children:[e.jsx("select",{onChange:J,children:ee.map(s=>e.jsx("option",{value:s,children:s},s))})," ",e.jsx(r,{title:"Card Title",functionName:"area",extraParams:{geography:t},children:()=>e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Cur geography: ",t]}),e.jsx("p",{children:"Note that smoke tests are not setup to generate output for more than one extraParams value. In fact, by default the extraParams value is not set for a story. Storybook is also not setup to load more than one output. So This story demonstrates how to use a UI switcher to control passing different values to extraParams, but it won't change the output. The approach to seeing what the output would be for different values of extraParams is to run the smoke tests is to create multiple independent smoke tests, each with different values."})]})})]})},l=()=>e.jsx(o.Provider,{value:{...a,simulateLoading:!0},children:e.jsx(r,{title:"Card Title",functionName:"area",children:t=>e.jsxs("p",{children:["This zone is ",t.area," sq km. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque illo ipsum odit rerum delectus consequuntur corrupti, magnam quas? Ipsam quis soluta labore. Laudantium tenetur illo voluptatem temporibus totam et incidunt."]})})}),u=()=>e.jsx(o.Provider,{value:{...a,simulateLoading:!0},children:e.jsx(r,{title:"Card Title",functionName:"area",skeleton:e.jsx(te,{}),children:t=>e.jsxs("p",{children:["This zone is ",t.area," sq km. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque illo ipsum odit rerum delectus consequuntur corrupti, magnam quas? Ipsam quis soluta labore. Laudantium tenetur illo voluptatem temporibus totam et incidunt."]})})}),te=()=>e.jsxs("div",{children:[e.jsx(g,{style:{width:"100%",height:"130px"}}),e.jsx(g,{}),e.jsx(g,{}),e.jsx(g,{style:{width:"50%"}})]}),d=()=>e.jsx(o.Provider,{value:{...a,simulateError:"Internal server error"},children:e.jsx(r,{title:"Card Title",functionName:"area",children:t=>e.jsxs("p",{children:["This zone is ",t.area," sq km."]})})}),m=()=>e.jsx(o.Provider,{value:{...a,exampleOutputs:[{functionName:"area",sketchName:"My Sketch",results:null}]},children:e.jsx(r,{title:"Card Title",functionName:"area",children:t=>e.jsxs("p",{children:["This zone is ",t.area," sq km."]})})}),re=()=>{throw new Error("error!")},c=()=>e.jsx(o.Provider,{value:{...a},children:e.jsx(r,{title:"Card Title",functionName:"area",children:()=>e.jsx(re,{})})}),Z=e.jsxs(e.Fragment,{children:[e.jsx(X,{label:"Show EEZ Boundary",layerId:"5e80c8a8cd44abca6e5268af",simple:!0}),e.jsx($,{filename:"sample",data:Y.ranked,formats:["csv","json"],placement:"left-end"})]}),p=()=>e.jsx(o.Provider,{value:{...a},children:e.jsx(r,{title:"Card Title",functionName:"area",useChildCard:!0,children:t=>e.jsxs(G,{title:"Card Title",items:Z,children:[e.jsxs("p",{children:["This zone is ",t.area," sq km. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nisi beatae, officiis perferendis quis inventore quisquam? Provident doloremque inventore, natus beatae quam nisi eius quidem deserunt, aperiam aliquid corrupti eveniet."]}),e.jsx(x,{title:"Learn More",children:e.jsx("p",{children:"Additional elements in here"})}),e.jsx(x,{title:"Show by MPA",children:e.jsx("p",{children:"Additional elements in here"})})]})})}),h=()=>e.jsx(o.Provider,{value:{...a,visibleLayers:["5e80c8a8cd44abca6e5268af"]},children:e.jsx(r,{title:"Card Title",functionName:"area",useChildCard:!0,children:t=>e.jsxs(G,{title:"Card Title",items:Z,children:[e.jsxs("p",{children:["This zone is ",t.area," sq km. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nisi beatae, officiis perferendis quis inventore quisquam? Provident doloremque inventore, natus beatae quam nisi eius quidem deserunt, aperiam aliquid corrupti eveniet."]}),e.jsx(x,{title:"Learn More",children:e.jsx("p",{children:"Additional elements in here"})}),e.jsx(x,{title:"Show by MPA",children:e.jsx("p",{children:"Additional elements in here"})})]})})}),_e={component:r,title:"Components/Card/ResultsCard",decorators:[Q(a)]};i.__docgenInfo={description:"",methods:[],displayName:"basic"};n.__docgenInfo={description:"",methods:[],displayName:"extraParams"};l.__docgenInfo={description:"",methods:[],displayName:"loadingState"};u.__docgenInfo={description:"",methods:[],displayName:"customSkeleton"};d.__docgenInfo={description:"",methods:[],displayName:"errorState"};m.__docgenInfo={description:"",methods:[],displayName:"noDataState"};c.__docgenInfo={description:"",methods:[],displayName:"errorBoundary"};p.__docgenInfo={description:"",methods:[],displayName:"customCard"};h.__docgenInfo={description:"",methods:[],displayName:"customCardToggled"};var C,f,v;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`() => <ResultsCard title="Card Title" functionName="area">
    {(data: any) => <p>
        This zone is {data.area} sq km. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ut nisi beatae, officiis perferendis quis inventore
        quisquam? Provident doloremque inventore, natus beatae quam nisi eius
        quidem deserunt, aperiam aliquid corrupti eveniet.
      </p>}
  </ResultsCard>`,...(v=(f=i.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var q,y,j;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  const [geography, setGeography] = useState("nearshore");
  const geographySwitcher = (e: any) => {
    console.log("changing geography to", e.target.value);
    setGeography(e.target.value);
  };
  return <>
      <select onChange={geographySwitcher}>
        {geographyIds.map(geographyId => {
        return <option key={geographyId} value={geographyId}>
              {geographyId}
            </option>;
      })}
      </select>{" "}
      <ResultsCard title="Card Title" functionName="area" extraParams={{
      geography
    }}>
        {() => <>
            <p>Cur geography: {geography}</p>
            <p>
              Note that smoke tests are not setup to generate output for more
              than one extraParams value. In fact, by default the extraParams
              value is not set for a story. Storybook is also not setup to load
              more than one output. So This story demonstrates how to use a UI
              switcher to control passing different values to extraParams, but
              it won't change the output. The approach to seeing what the output
              would be for different values of extraParams is to run the smoke
              tests is to create multiple independent smoke tests, each with
              different values.
            </p>
          </>}
      </ResultsCard>
    </>;
}`,...(j=(y=n.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var T,b,P;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`() => <ReportContext.Provider value={{
  ...contextValue,
  simulateLoading: true
}}>
    <ResultsCard title="Card Title" functionName="area">
      {(data: any) => <p>
          This zone is {data.area} sq km. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Neque illo ipsum odit rerum delectus consequuntur
          corrupti, magnam quas? Ipsam quis soluta labore. Laudantium tenetur
          illo voluptatem temporibus totam et incidunt.
        </p>}
    </ResultsCard>
  </ReportContext.Provider>`,...(P=(b=l.parameters)==null?void 0:b.docs)==null?void 0:P.source}}};var R,S,k;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`() => <ReportContext.Provider value={{
  ...contextValue,
  simulateLoading: true
}}>
    <ResultsCard title="Card Title" functionName="area" skeleton={<DefaultSkeleton />}>
      {(data: any) => <p>
          This zone is {data.area} sq km. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Neque illo ipsum odit rerum delectus consequuntur
          corrupti, magnam quas? Ipsam quis soluta labore. Laudantium tenetur
          illo voluptatem temporibus totam et incidunt.
        </p>}
    </ResultsCard>
  </ReportContext.Provider>`,...(k=(S=u.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var N,w,I;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`() => <ReportContext.Provider value={{
  ...contextValue,
  simulateError: "Internal server error"
}}>
    <ResultsCard title="Card Title" functionName="area">
      {(data: any) => <p>This zone is {data.area} sq km.</p>}
    </ResultsCard>
  </ReportContext.Provider>`,...(I=(w=d.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var L,_,z;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`() => <ReportContext.Provider value={{
  ...contextValue,
  exampleOutputs: [{
    functionName: "area",
    sketchName: "My Sketch",
    results: null
  }]
}}>
    <ResultsCard title="Card Title" functionName="area">
      {(data: any) => <p>This zone is {data.area} sq km.</p>}
    </ResultsCard>
  </ReportContext.Provider>`,...(z=(_=m.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var A,M,D;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`() => <ReportContext.Provider value={{
  ...contextValue
}}>
    <ResultsCard title="Card Title" functionName="area">
      {() => {
      return <ThrowComponent />;
    }}
    </ResultsCard>
  </ReportContext.Provider>`,...(D=(M=c.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var V,E,U;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`() => <ReportContext.Provider value={{
  ...contextValue
}}>
    <ResultsCard title="Card Title" functionName="area" useChildCard>
      {(data: any) => <ToolbarCard title="Card Title" items={loadedRightItems}>
          <p>
            This zone is {data.area} sq km. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ut nisi beatae, officiis perferendis
            quis inventore quisquam? Provident doloremque inventore, natus
            beatae quam nisi eius quidem deserunt, aperiam aliquid corrupti
            eveniet.
          </p>
          <Collapse title="Learn More">
            <p>Additional elements in here</p>
          </Collapse>
          <Collapse title="Show by MPA">
            <p>Additional elements in here</p>
          </Collapse>
        </ToolbarCard>}
    </ResultsCard>
  </ReportContext.Provider>`,...(U=(E=p.parameters)==null?void 0:E.docs)==null?void 0:U.source}}};var B,O,F;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`() => <ReportContext.Provider value={{
  ...contextValue,
  visibleLayers: ["5e80c8a8cd44abca6e5268af"]
}}>
    <ResultsCard title="Card Title" functionName="area" useChildCard>
      {(data: any) => <ToolbarCard title="Card Title" items={loadedRightItems}>
          <p>
            This zone is {data.area} sq km. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ut nisi beatae, officiis perferendis
            quis inventore quisquam? Provident doloremque inventore, natus
            beatae quam nisi eius quidem deserunt, aperiam aliquid corrupti
            eveniet.
          </p>
          <Collapse title="Learn More">
            <p>Additional elements in here</p>
          </Collapse>
          <Collapse title="Show by MPA">
            <p>Additional elements in here</p>
          </Collapse>
        </ToolbarCard>}
    </ResultsCard>
  </ReportContext.Provider>`,...(F=(O=h.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};const ze=["basic","extraParams","loadingState","customSkeleton","errorState","noDataState","errorBoundary","customCard","customCardToggled"];export{ze as __namedExportsOrder,i as basic,p as customCard,h as customCardToggled,u as customSkeleton,_e as default,c as errorBoundary,d as errorState,n as extraParams,l as loadingState,m as noDataState};
