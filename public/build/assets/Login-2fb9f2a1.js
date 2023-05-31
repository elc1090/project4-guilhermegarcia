import{T as d,o as u,f as c,a,u as e,b as o,e as p,w as f,n as _,F as w,Z as g,d as b}from"./app-6ac25857.js";import{_ as r}from"./InputError-88f516c3.js";import{a as m,_ as i}from"./TextInput-016a11be.js";import{P as x}from"./PrimaryButton-8b70f51f.js";import"./_plugin-vue_export-helper-c27b6911.js";const h={class:"min-h-screen flex flex-col sm:justify-center items-center bg-gray-100"},y=o("h1",{class:"text-xl"},"Log-in",-1),V=["onSubmit"],v={class:"mt-4"},B={class:"flex items-center justify-end mt-4"},j={__name:"Login",props:{canResetPassword:{type:Boolean},status:{type:String}},setup(k){const s=d({email:"",password:"",remember:!1}),n=()=>{s.post(route("login"),{onFinish:()=>s.reset("password")})};return(L,t)=>(u(),c(w,null,[a(e(g),{title:"Log in"}),o("div",h,[y,o("form",{class:"w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg",onSubmit:p(n,["prevent"])},[o("div",null,[a(i,{for:"email",value:"Email"}),a(m,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(s).email,"onUpdate:modelValue":t[0]||(t[0]=l=>e(s).email=l),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),a(r,{class:"mt-2",message:e(s).errors.email},null,8,["message"])]),o("div",v,[a(i,{for:"password",value:"Password"}),a(m,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:e(s).password,"onUpdate:modelValue":t[1]||(t[1]=l=>e(s).password=l),required:"",autocomplete:"current-password"},null,8,["modelValue"]),a(r,{class:"mt-2",message:e(s).errors.password},null,8,["message"])]),o("div",B,[a(x,{class:_(["ml-4",{"opacity-25":e(s).processing}]),disabled:e(s).processing},{default:f(()=>[b(" Log in ")]),_:1},8,["class","disabled"])])],40,V)])],64))}};export{j as default};
