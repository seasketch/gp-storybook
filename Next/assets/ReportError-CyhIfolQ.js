var l=Object.defineProperty;var c=(r,t,e)=>t in r?l(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var o=(r,t,e)=>c(r,typeof t!="symbol"?t+"":t,e);import{j as s}from"./jsx-runtime-DEdD30eg.js";import{R as d}from"./index-RYns6xqu.js";import{C as m}from"./Card-FnwmZRZt.js";import{d as h}from"./styled-components.browser.esm-Cwi-fKCl.js";import{P as f}from"./index-rNTiGNI1.js";import{u}from"./useTranslation-SdK8TBCK.js";const g=h.div`
  display: inline-block;
  font-weight: bold;
  font-size: 18px;
  line-height: 1em;
  background-color: #ea4848;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  color: white;
  text-align: center;
  margin-right: 8px;
  ::before {
    position: relative;
    bottom: -1px;
    content: "!";
  }
`,x=()=>{const{t:r}=u();return s.jsxs(m,{children:[s.jsxs("div",{role:"alert",children:[s.jsx(g,{}),r("ReportError - message part 1","Something went wrong. Please close this report and try again.")]}),s.jsx("p",{children:r("ReportError - message part 2","If the error persists, please report it.")})]})};class n extends d.Component{constructor(){super(...arguments);o(this,"state",{hasError:!1,error:{message:"",stack:""},info:{componentStack:""}});o(this,"componentDidCatch",(e,a)=>{this.setState({error:e,info:a})})}render(){const{hasError:e,error:a,info:i}=this.state;e&&console.info(a.message,i);const{children:p}=this.props;return e?s.jsx(x,{}):p}}o(n,"getDerivedStateFromError",()=>({hasError:!0})),o(n,"propTypes");n.propTypes={children:f.node};n.__docgenInfo={description:"",methods:[{name:"getDerivedStateFromError",docblock:null,modifiers:["static"],params:[],returns:null},{name:"componentDidCatch",docblock:null,modifiers:[],params:[{name:"error",optional:!1,type:null},{name:"info",optional:!1,type:null}],returns:null}],displayName:"ReportError",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",type:{name:"node"}}}};export{n as R};
