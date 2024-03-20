"use strict";(self.webpackChunkpathlit_docs=self.webpackChunkpathlit_docs||[]).push([[2323],{4782:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var t=i(4848),s=i(8453),o=i(7293);const l={},a="LLM App Installation Guide",r={id:"Getting Started/Installation",title:"LLM App Installation Guide",description:"The LLM App provides a plug-and-play solution for utilizing various HuggingFace models for a wide range of tasks such as summarizing documents, sentiment analysis, code generation, and more. This guide outlines the steps required to install and run the LLM App on different operating systems.",source:"@site/docs/Getting Started/Installation.md",sourceDirName:"Getting Started",slug:"/Getting Started/Installation",permalink:"/docs/Getting Started/Installation",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Getting Started/Installation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/category/getting-started"},next:{title:"Starting The App",permalink:"/docs/Getting Started/Starting The App"}},d={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation Instructions",id:"installation-instructions",level:2},{value:"Windows",id:"windows",level:3},{value:"Mac",id:"mac",level:3},{value:"Ubuntu Linux",id:"ubuntu-linux",level:3},{value:"Common Instructions for All OS",id:"common-instructions-for-all-os",level:3},{value:"Set Environment Variables",id:"set-environment-variables",level:4},{value:"Manual Instructions After Installation",id:"manual-instructions-after-installation",level:3},{value:"For Windows, also install <code>bitsandbytes-windows</code>:",id:"for-windows-also-install-bitsandbytes-windows",level:4},{value:"For all other os",id:"for-all-other-os",level:4}];function h(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"llm-app-installation-guide",children:"LLM App Installation Guide"}),"\n",(0,t.jsx)(e.p,{children:"The LLM App provides a plug-and-play solution for utilizing various HuggingFace models for a wide range of tasks such as summarizing documents, sentiment analysis, code generation, and more. This guide outlines the steps required to install and run the LLM App on different operating systems."}),"\n",(0,t.jsx)(e.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(e.p,{children:"Before you begin the installation, ensure you have Python 3.11 installed."}),"\n",(0,t.jsx)(o.A,{type:"warning",children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Note:"})," If you have Python 3.12 or later, please uninstall it before proceeding, else the installation will fail."]})}),"\n",(0,t.jsx)(e.h2,{id:"installation-instructions",children:"Installation Instructions"}),"\n",(0,t.jsx)(e.h3,{id:"windows",children:"Windows"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"Install Chocolatey with PowerShell:"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-powershell",children:"Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))\n"})}),"\n",(0,t.jsxs)(e.ol,{start:"2",children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Install Node.js from ",(0,t.jsx)(e.a,{href:"https://nodejs.org/en/download",children:"https://nodejs.org/en/download"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Install Git."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Check if Anaconda or Miniconda is in your system path by executing ",(0,t.jsx)(e.code,{children:"conda"})," in the shell. If no error occurs, download ",(0,t.jsx)(e.code,{children:"Install_LLM_conda_win.ps1"}),"; otherwise, download ",(0,t.jsx)(e.code,{children:"Install_LLM_pyenv.ps1"}),". Open Windows PowerShell and execute the downloaded script. Follow the prompts during the installation."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Activate the Python environment where the installation took place and install ",(0,t.jsx)(e.code,{children:"bitsandbytes-windows"}),":"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-powershell",children:"pip install git+https://github.com/Keith-Hon/bitsandbytes-windows.git\n"})}),"\n",(0,t.jsx)(e.h3,{id:"mac",children:"Mac"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"Install Node.js and Portaudio with Python, and Git using Homebrew:"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"brew install nodejs portaudio python git\n"})}),"\n",(0,t.jsxs)(e.ol,{start:"2",children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Follow a similar process as Windows for Anaconda/Miniconda and script execution, using the macOS scripts (",(0,t.jsx)(e.code,{children:"Install_LLM_conda_mac.sh"})," or ",(0,t.jsx)(e.code,{children:"Install_LLM_pyenv.sh"}),")."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Activate the Python environment and install ",(0,t.jsx)(e.code,{children:"bitsandbytes"}),":"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"pip install bitsandbytes\n"})}),"\n",(0,t.jsx)(e.h3,{id:"ubuntu-linux",children:"Ubuntu Linux"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"Update packages and install Node.js and Git:"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"sudo apt-get update\nsudo apt-get install nodejs git\n"})}),"\n",(0,t.jsxs)(e.ol,{start:"2",children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Follow similar steps as for Mac/Windows for checking Anaconda/Miniconda and executing the script, using the Ubuntu scripts (",(0,t.jsx)(e.code,{children:"Install_LLM_conda_ubuntu.sh"})," or ",(0,t.jsx)(e.code,{children:"Install_LLM_pyenv.sh"}),")."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Activate the Python environment and install ",(0,t.jsx)(e.code,{children:"bitsandbytes"}),":"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"pip install bitsandbytes\n"})}),"\n",(0,t.jsx)(e.h3,{id:"common-instructions-for-all-os",children:"Common Instructions for All OS"}),"\n",(0,t.jsx)(e.p,{children:"After completing the OS-specific instructions, you are prompted to decide if you wish to install MongoDB for chat history persistence."}),"\n",(0,t.jsx)(e.h4,{id:"set-environment-variables",children:"Set Environment Variables"}),"\n",(0,t.jsx)(e.p,{children:"Set the following environment variables according to your usage:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["For OpenAI hosted LLMs: ",(0,t.jsx)(e.code,{children:"OPENAI_API_KEY"})]}),"\n",(0,t.jsxs)(e.li,{children:["For LLM G/W hosted LLMs: ",(0,t.jsx)(e.code,{children:"LLM_GW_API_KEY"}),", ",(0,t.jsx)(e.code,{children:"LLM_GW_WS"})]}),"\n",(0,t.jsx)(e.li,{children:"For ATG hosted LLMs: ATG_SERVER_TOKEN"}),"\n",(0,t.jsx)(e.li,{children:"For Elastic DB: ELASTIC_USER, ELASTIC_SECRET_ID, ELASTIC_SECRET, ELASTIC_OPEN_API_URL, ELASTIC_PUBLIC_API_URL"}),"\n",(0,t.jsx)(e.li,{children:"For MongoDB: MONGO_USER and MONGO_PASS"}),"\n",(0,t.jsxs)(e.li,{children:['For using the email agent: EMAIL_USER, EMAIL_PASS (your app key provided by the email service provider), email address of the desired default recipients should be configured under "recipients:" in ',(0,t.jsx)("code",{children:"backend/config/LLMs.yml"}),". All email will be sent to these recipients along with those entered in the UI."]}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"manual-instructions-after-installation",children:"Manual Instructions After Installation"}),"\n",(0,t.jsx)(e.p,{children:"Activate the Python environment and install additional packages:"}),"\n",(0,t.jsxs)(e.h4,{id:"for-windows-also-install-bitsandbytes-windows",children:["For Windows, also install ",(0,t.jsx)(e.code,{children:"bitsandbytes-windows"}),":"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"pip install git+https://github.com/Keith-Hon/bitsandbytes-windows.git\n"})}),"\n",(0,t.jsx)(e.h4,{id:"for-all-other-os",children:"For all other os"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"pip install angle_emb\n"})})]})}function u(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(h,{...n})}):h(n)}},7293:(n,e,i)=>{i.d(e,{A:()=>N});var t=i(6540),s=i(4848);function o(n){const{mdxAdmonitionTitle:e,rest:i}=function(n){const e=t.Children.toArray(n),i=e.find((n=>t.isValidElement(n)&&"mdxAdmonitionTitle"===n.type)),o=e.filter((n=>n!==i)),l=i?.props.children;return{mdxAdmonitionTitle:l,rest:o.length>0?(0,s.jsx)(s.Fragment,{children:o}):null}}(n.children),o=n.title??e;return{...n,...o&&{title:o},children:i}}var l=i(4164),a=i(1312),r=i(7559);const d={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function c(n){let{type:e,className:i,children:t}=n;return(0,s.jsx)("div",{className:(0,l.A)(r.G.common.admonition,r.G.common.admonitionType(e),d.admonition,i),children:t})}function h(n){let{icon:e,title:i}=n;return(0,s.jsxs)("div",{className:d.admonitionHeading,children:[(0,s.jsx)("span",{className:d.admonitionIcon,children:e}),i]})}function u(n){let{children:e}=n;return e?(0,s.jsx)("div",{className:d.admonitionContent,children:e}):null}function p(n){const{type:e,icon:i,title:t,children:o,className:l}=n;return(0,s.jsxs)(c,{type:e,className:l,children:[(0,s.jsx)(h,{title:t,icon:i}),(0,s.jsx)(u,{children:o})]})}function m(n){return(0,s.jsx)("svg",{viewBox:"0 0 14 16",...n,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const x={icon:(0,s.jsx)(m,{}),title:(0,s.jsx)(a.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function j(n){return(0,s.jsx)(p,{...x,...n,className:(0,l.A)("alert alert--secondary",n.className),children:n.children})}function g(n){return(0,s.jsx)("svg",{viewBox:"0 0 12 16",...n,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const f={icon:(0,s.jsx)(g,{}),title:(0,s.jsx)(a.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function v(n){return(0,s.jsx)(p,{...f,...n,className:(0,l.A)("alert alert--success",n.className),children:n.children})}function w(n){return(0,s.jsx)("svg",{viewBox:"0 0 14 16",...n,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const b={icon:(0,s.jsx)(w,{}),title:(0,s.jsx)(a.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function y(n){return(0,s.jsx)(p,{...b,...n,className:(0,l.A)("alert alert--info",n.className),children:n.children})}function A(n){return(0,s.jsx)("svg",{viewBox:"0 0 16 16",...n,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const L={icon:(0,s.jsx)(A,{}),title:(0,s.jsx)(a.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function I(n){return(0,s.jsx)("svg",{viewBox:"0 0 12 16",...n,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const M={icon:(0,s.jsx)(I,{}),title:(0,s.jsx)(a.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const S={icon:(0,s.jsx)(A,{}),title:(0,s.jsx)(a.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const _={...{note:j,tip:v,info:y,warning:function(n){return(0,s.jsx)(p,{...L,...n,className:(0,l.A)("alert alert--warning",n.className),children:n.children})},danger:function(n){return(0,s.jsx)(p,{...M,...n,className:(0,l.A)("alert alert--danger",n.className),children:n.children})}},...{secondary:n=>(0,s.jsx)(j,{title:"secondary",...n}),important:n=>(0,s.jsx)(y,{title:"important",...n}),success:n=>(0,s.jsx)(v,{title:"success",...n}),caution:function(n){return(0,s.jsx)(p,{...S,...n,className:(0,l.A)("alert alert--warning",n.className),children:n.children})}}};function N(n){const e=o(n),i=(t=e.type,_[t]||(console.warn(`No admonition component found for admonition type "${t}". Using Info as fallback.`),_.info));var t;return(0,s.jsx)(i,{...e})}},8453:(n,e,i)=>{i.d(e,{R:()=>l,x:()=>a});var t=i(6540);const s={},o=t.createContext(s);function l(n){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);