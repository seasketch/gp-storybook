import{j as n}from"./jsx-runtime-DEdD30eg.js";import{R as f}from"./ReportDecorator-BLl16b_j.js";import{C as c,u as k}from"./CheckboxGroup-B-zjAHDz.js";import{a as u}from"./Card-FnwmZRZt.js";import"./index-RYns6xqu.js";import"./ReportContext-DKjA4IB1.js";import"./index-BKD8Dact.js";import"./cloneDeep-DjGZ9tLP.js";import"./_getPrototype-2UMXDfW_.js";import"./styled-components.browser.esm-Cwi-fKCl.js";import"./index-BAMY2Nnw.js";const D={component:c,title:"Components/CheckboxGroup",decorators:[f]},o=()=>{const t=k([{name:"one",checked:!1},{name:"two",checked:!1},{name:"three",checked:!1},{name:"four",checked:!1}]);return n.jsxs("div",{children:[n.jsx(c,{...t}),n.jsxs("div",{children:["Selected:"," ",t.checkboxes.map(s=>s.checked?s.name:"").join(" ")]})]})},e=()=>{const t=k([{name:"one",checked:!1},{name:"two",checked:!1},{name:"three",checked:!1},{name:"four",checked:!1}]);return n.jsx(u,{children:n.jsx("div",{style:{fontSize:10},children:n.jsx(c,{...t})})})};o.__docgenInfo={description:"",methods:[],displayName:"simple"};e.__docgenInfo={description:"Demonstrate vertical alignment is maintained",methods:[],displayName:"smallText"};var a,r,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const options = [{
    name: "one",
    checked: false
  }, {
    name: "two",
    checked: false
  }, {
    name: "three",
    checked: false
  }, {
    name: "four",
    checked: false
  }];
  const checkboxState = useCheckboxes(options);
  // The whole point of using a hook here is we can easily access the state externally and indepdendently of the checkbox UI component
  return <div>
      <CheckboxGroup {...checkboxState} />
      <div>
        Selected:{" "}
        {checkboxState.checkboxes.map(c => c.checked ? c.name : "").join(" ")}
      </div>
    </div>;
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var m,d,p,h,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const options = [{
    name: "one",
    checked: false
  }, {
    name: "two",
    checked: false
  }, {
    name: "three",
    checked: false
  }, {
    name: "four",
    checked: false
  }];
  const checkboxState = useCheckboxes(options);
  return <Card>
      <div style={{
      fontSize: 10
    }}>
        <CheckboxGroup {...checkboxState} />
      </div>
    </Card>;
}`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source},description:{story:"Demonstrate vertical alignment is maintained",...(l=(h=e.parameters)==null?void 0:h.docs)==null?void 0:l.description}}};const I=["simple","smallText"];export{I as __namedExportsOrder,D as default,o as simple,e as smallText};
