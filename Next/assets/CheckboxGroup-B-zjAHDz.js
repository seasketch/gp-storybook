import{r as a}from"./index-RYns6xqu.js";import{j as r}from"./jsx-runtime-DEdD30eg.js";import{d as i}from"./styled-components.browser.esm-Cwi-fKCl.js";function b(o){const[e,c]=a.useState(o);return{setCheckbox:a.useCallback((t,p)=>{const s=[...e];s[t].checked=p,c(s)},[e]),checkboxes:e}}const l=i.input`
  margin: 3px 10px;
  cursor: pointer;
`,d=i.label`
  cursor: pointer;
  display: block;
  font-weight: normal;

  & input {
    vertical-align: middle;
  }

  & .checkbox-label-text {
    vertical-align: middle;
  }
`;function m({checkboxes:o,setCheckbox:e}){return r.jsx("div",{className:"checkbox-group",children:o.map((c,n)=>r.jsxs(d,{children:[r.jsx(l,{type:"checkbox",checked:c.checked,onChange:a.useCallback(t=>{e(n,t.target.checked)},[o])},n),r.jsx("span",{className:"checkbox-label-text",children:c.name})]},n))})}m.__docgenInfo={description:`Controlled checkbox group
@param param0
@returns`,methods:[],displayName:"CheckboxGroup",props:{checkboxes:{required:!0,tsType:{name:"Array",elements:[{name:"Checkbox"}],raw:"Checkbox[]"},description:""},setCheckbox:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number, checked: boolean) => void",signature:{arguments:[{type:{name:"number"},name:"index"},{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""}}};export{m as C,b as u};
