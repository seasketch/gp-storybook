import{j as r}from"./jsx-runtime-DEdD30eg.js";import{u as i}from"./useTranslation-SdK8TBCK.js";const g=n=>{const{geographies:a,curGeographyId:t,changeGeography:o}=n,{t:s}=i();return r.jsx("select",{onChange:o,value:t,children:a.map(e=>{const p=s(e.display||"");return r.jsx("option",{value:e.geographyId,children:p},e.geographyId)})})};g.__docgenInfo={description:"",methods:[],displayName:"GeographySwitcher",props:{curGeographyId:{required:!0,tsType:{name:"string"},description:""},geographies:{required:!0,tsType:{name:"Array",elements:[{name:"z.infer",elements:[{name:"geographySchema"}],raw:"z.infer<typeof geographySchema>"}],raw:"Geography[]"},description:""},changeGeography:{required:!0,tsType:{name:"ChangeEventHandler",elements:[{name:"HTMLSelectElement"}],raw:"ChangeEventHandler<HTMLSelectElement>"},description:""}}};export{g as G};
