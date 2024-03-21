"use strict";(self.webpackChunkpathlit_docs=self.webpackChunkpathlit_docs||[]).push([[3233],{9210:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>a});var t=i(4848),r=i(8453),s=i(7293);const l={},o=void 0,c={id:"Getting Started/Starting The App",title:"Starting The App",description:"Starting the LLM App",source:"@site/docs/Getting Started/Starting The App.md",sourceDirName:"Getting Started",slug:"/Getting Started/Starting The App",permalink:"/Pathlit-Docs/docs/Getting Started/Starting The App",draft:!1,unlisted:!1,editUrl:"https://github.com/Pathlit-Inc/Pathlit-Docs/docs/Getting Started/Starting The App.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LLM App Installation Guide",permalink:"/Pathlit-Docs/docs/Getting Started/Installation"},next:{title:"Chat UI",permalink:"/Pathlit-Docs/docs/category/chat-ui"}},d={},a=[{value:"Starting the LLM App",id:"starting-the-llm-app",level:2},{value:"Start the LLM Server",id:"start-the-llm-server",level:3},{value:"Start MongoDB Server",id:"start-mongodb-server",level:3},{value:"Start the LLM UI",id:"start-the-llm-ui",level:3},{value:"Additional Configuration",id:"additional-configuration",level:2},{value:"Additional Configuration",id:"additional-configuration-1",level:2},{value:"Start LLM App",id:"start-llm-app",level:2},{value:"Run with TLS",id:"run-with-tls",level:2},{value:"GPU Support",id:"gpu-support",level:2},{value:"Docker",id:"docker",level:2},{value:"Environment Variables",id:"environment-variables",level:2},{value:"Running Docker Containers",id:"running-docker-containers",level:3},{value:"Chat Persistence Feature",id:"chat-persistence-feature",level:3},{value:"Accessing the Application",id:"accessing-the-application",level:3},{value:"Docker Compose Usage",id:"docker-compose-usage",level:2},{value:"Kubernetes",id:"kubernetes",level:2},{value:"HELM",id:"helm",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"starting-the-llm-app",children:"Starting the LLM App"}),"\n",(0,t.jsx)(n.h3,{id:"start-the-llm-server",children:"Start the LLM Server"}),"\n",(0,t.jsx)(n.p,{children:"Windows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cmd",children:"llm_server\n"})}),"\n",(0,t.jsx)(n.p,{children:"Mac/Ubuntu:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"chmod +x llm_server.sh && ./llm_server.sh\n"})}),"\n",(0,t.jsx)(s.A,{type:"info",children:(0,t.jsxs)(n.p,{children:["The server starts on port 8000 by default. Set the ",(0,t.jsx)(n.code,{children:"LLM_SERVER"})," environment variable to use a different port."]})}),"\n",(0,t.jsx)(n.h3,{id:"start-mongodb-server",children:"Start MongoDB Server"}),"\n",(0,t.jsx)(n.p,{children:"If MongoDB is installed, start it by specifying the data folder path:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'"mongodb_executable_path" --dbpath="data_folder_path" --bind_ip 127.0.0.1\n'})}),"\n",(0,t.jsx)(n.h3,{id:"start-the-llm-ui",children:"Start the LLM UI"}),"\n",(0,t.jsx)(n.p,{children:"Open a new command prompt or shell and start the LLM UI:"}),"\n",(0,t.jsx)(n.p,{children:"Windows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cmd",children:"llm_ui\n"})}),"\n",(0,t.jsx)(n.p,{children:"Mac/Ubuntu:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"chmod +x llm_ui.sh && ./llm_ui.sh\n"})}),"\n",(0,t.jsx)(n.h2,{id:"additional-configuration",children:"Additional Configuration"}),"\n",(0,t.jsx)(n.h2,{id:"additional-configuration-1",children:"Additional Configuration"}),"\n",(0,t.jsx)(n.p,{children:"This section includes additional instructions for running the app with TLS, enabling GPU support, Docker and Kubernetes deployment, and other configurations."}),"\n",(0,t.jsx)(n.h2,{id:"start-llm-app",children:"Start LLM App"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Start the LLM server"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Windows: Execute ",(0,t.jsx)(n.code,{children:"llm_server"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Mac/Ubuntu: Execute ",(0,t.jsx)(n.code,{children:"chmod +x llm_server.sh"})," followed by ",(0,t.jsx)(n.code,{children:"./llm_server.sh"}),"."]}),"\n"]}),"\n",(0,t.jsx)(s.A,{type:"info",children:(0,t.jsx)(n.p,{children:"The above commands will start the server on the default port 8000. If you wish the server to listen on some other port, set the environment variable LLM_SERVER to the desired port number before executing the above steps."})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Start MongoDB server"})," if you selected to install or if you already have it:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Open a command prompt or a shell based on your OS."}),"\n",(0,t.jsxs)(n.li,{children:["Execute ",(0,t.jsx)(n.code,{children:'"mongodb_executable_path" --dbpath="data_folder_path" --bind_ip 127.0.0.1'}),".\nFor example, in Windows: ",(0,t.jsx)(n.code,{children:'"C:\\Program Files\\MongoDB\\Server\\7.0\\bin\\mongod.exe" --dbpath="d:\\mongodb\\data" --bind_ip 127.0.0.1'}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Start the LLM UI"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Open another command prompt or shell depending on your OS."}),"\n",(0,t.jsxs)(n.li,{children:["Windows: Execute ",(0,t.jsx)(n.code,{children:"llm_ui"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Mac/Ubuntu: Execute ",(0,t.jsx)(n.code,{children:"chmod +x llm_ui.sh"})," followed by ",(0,t.jsx)(n.code,{children:"./llm_ui.sh"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"run-with-tls",children:"Run with TLS"}),"\n",(0,t.jsxs)(n.p,{children:["To start the server and the UI with self-signed certificates, execute ",(0,t.jsx)(n.code,{children:"tlsconfig.ps1"})," (Windows) or ",(0,t.jsx)(n.code,{children:"tlsconfig.sh"})," (Mac/Ubuntu). Then, start the server with the parameters ",(0,t.jsx)(n.code,{children:"--key [path to the key file] --cert [path to the cert file]"})," and the UI with the parameter ",(0,t.jsx)(n.code,{children:"--https"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"gpu-support",children:"GPU Support"}),"\n",(0,t.jsxs)(n.p,{children:["For CUDA GPU support, install PyTorch using the link: ",(0,t.jsx)(n.code,{children:"pip3 install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118"}),". If a GPU is not available, uncomment the corresponding lines in ",(0,t.jsx)(n.code,{children:"requirements.txt"})," before executing it. Also, install AutoGPTQ with: ",(0,t.jsx)(n.code,{children:"pip install auto-gptq --extra-index-url https://huggingface.github.io/autogptq-index/whl/cu118/"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"docker",children:"Docker"}),"\n",(0,t.jsxs)(n.p,{children:["Dockerfiles for building the LLM server and UI are available under the ",(0,t.jsx)(n.code,{children:"docker"})," folder. Use the following commands to build the docker images:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"docker build -t llm_server -f docker/llm_server.dockerfile ."})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"docker build -t llm_ui -f docker/llm_ui.dockerfile ."})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"For a Kubernetes environment, build the UI with a different server DNS and port:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"docker build -t llm_ui --build-arg SERVER_DNS=llm-server-svc --build-arg SERVER_PORT=[port] -f docker/llm_ui.dockerfile ."})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Create a ",(0,t.jsx)(n.code,{children:".env"})," file with necessary variables and run the docker containers as instructed, adjusting paths and ports as needed."]}),"\n",(0,t.jsx)(n.h1,{id:"docker-configuration",children:"Docker Configuration"}),"\n",(0,t.jsx)(n.h2,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,t.jsxs)(n.p,{children:["For configuring your Docker instance, specify the following variables in your ",(0,t.jsx)(n.code,{children:".env"})," file. This setup is crucial for ensuring your Docker environment is tailored to your specific needs."]}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{width:"222",children:"Variable"}),(0,t.jsx)("th",{children:"Description"}),(0,t.jsx)("th",{width:"151",children:"Type"}),(0,t.jsx)("th",{children:"Default"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"LLM_GW_API_KEY"}),(0,t.jsx)("td",{children:"API key for LLM Gateway"}),(0,t.jsx)("td",{children:"String"}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"LLM_GW_WS"}),(0,t.jsx)("td",{children:"WebSocket endpoint for LLM Gateway"}),(0,t.jsx)("td",{children:"String"}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"ELASTIC_DB_INDEX"}),(0,t.jsx)("td",{children:"Index for ElasticSearch database"}),(0,t.jsx)("td",{children:"String"}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"ELASTIC_OPEN_API_URL"}),(0,t.jsx)("td",{children:"OpenAPI URL for ElasticSearch"}),(0,t.jsx)("td",{children:"String"}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"ELASTIC_PUBLIC_API_URL"}),(0,t.jsx)("td",{children:"Public API URL for ElasticSearch"}),(0,t.jsx)("td",{children:"String"}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"ELASTIC_SECRET"}),(0,t.jsx)("td",{children:"Secret key for ElasticSearch"}),(0,t.jsx)("td",{children:"String"}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"ELASTIC_SECRET_ID"}),(0,t.jsx)("td",{children:"Secret ID for ElasticSearch"}),(0,t.jsx)("td",{children:"String"}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"ELASTIC_USER"}),(0,t.jsx)("td",{children:"Username for ElasticSearch"}),(0,t.jsx)("td",{children:"String"}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"OPENAI_API_KEY"}),(0,t.jsx)("td",{children:"API key for OpenAI services"}),(0,t.jsx)("td",{children:"String"}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"EMAIL_USER"}),(0,t.jsx)("td",{children:"Email account username for sending emails"}),(0,t.jsx)("td",{children:"String"}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"EMAIL_PASS"}),(0,t.jsx)("td",{children:"Email account password for sending emails"}),(0,t.jsx)("td",{children:"String"}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"HF_KEY"}),(0,t.jsx)("td",{children:"API key for Hugging Face models"}),(0,t.jsx)("td",{children:"String"}),(0,t.jsx)("td",{})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"These variables play a crucial role in the functionality and security of your Dockerized application, allowing for a highly customizable and scalable environment."}),"\n",(0,t.jsx)(n.h3,{id:"running-docker-containers",children:"Running Docker Containers"}),"\n",(0,t.jsxs)(n.p,{children:["Run the docker containers using the commands below. Make sure to replace ",(0,t.jsx)(n.code,{children:"/path/to/env/file"})," and ",(0,t.jsx)(n.code,{children:"[host port]"})," with your actual file path and port number."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker run --env-file /path/to/env/file -p [host port]:8000 llm_server\ndocker run -p 3000:3000 llm_ui\n"})}),"\n",(0,t.jsx)(n.h3,{id:"chat-persistence-feature",children:"Chat Persistence Feature"}),"\n",(0,t.jsx)(n.p,{children:"To enable the chat persistence feature, first download a MongoDB docker image, then run it using the command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker run -p 27017:27017 [mongodb image]\n"})}),"\n",(0,t.jsx)(n.h3,{id:"accessing-the-application",children:"Accessing the Application"}),"\n",(0,t.jsxs)(n.p,{children:["After starting the docker containers, open a browser and navigate to ",(0,t.jsx)(n.code,{children:"localhost:3000"})," to start using the application."]}),"\n",(0,t.jsx)(n.h2,{id:"docker-compose-usage",children:"Docker Compose Usage"}),"\n",(0,t.jsx)(n.p,{children:"Docker Compose simplifies the process of managing multi-container Docker applications. Here's how to use it effectively:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Building and Starting Containers"}),":\nBegin by building the images with Docker Compose, then start the containers."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker-compose build\n# Wait approximately 15 minutes, then\ndocker-compose up\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Shutting Down"}),":\nTo stop and remove all the containers defined in the ",(0,t.jsx)(n.code,{children:"docker-compose.yml"})," file:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker-compose down\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Troubleshooting on Windows"}),":\nIf you encounter issues running Docker Compose on Windows, follow these steps:"]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Try forcing a rebuild and re-creation of your Docker containers:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker-compose up --force-recreate --build --always-recreate-deps --remove-orphans\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If the issue persists, completely clean up Docker volumes and containers:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker-compose down\ndocker system prune --volumes\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Locate Docker's file storage:"}),"\n",(0,t.jsxs)(n.p,{children:["Typically found in ",(0,t.jsx)(n.code,{children:"C:\\Users\\user\\AppData\\Local\\Docker\\wsl"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Shutdown Docker and the WSL (Windows Subsystem for Linux) environment:"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Turn off Docker\n# Open a terminal and run:\nwsl --shutdown\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Use Diskpart to compact the VHD file:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"diskpart\n# In Diskpart, run:\nselect vdisk file=C:\\Users\\user\\AppData\\Local\\Docker\\wsl\\data\\ext4.vhdx\ncompact vdisk\n# Exit Diskpart\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Restart Docker and rerun Docker Compose:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Start Docker again\ndocker-compose up --force-recreate --build --always-recreate-deps --remove-orphans\n"})}),"\n",(0,t.jsx)(n.p,{children:"Remember, these steps are particularly relevant for troubleshooting on Windows systems. Adjust paths and commands as necessary for your setup."}),"\n",(0,t.jsx)(n.h2,{id:"kubernetes",children:"Kubernetes"}),"\n",(0,t.jsx)(n.p,{children:"For Kubernetes deployment, follow these steps to ensure proper configuration. This approach is experimental and may need adjustments based on your environment."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Build the UI Docker Image"}),":\nEnsure that the Docker container image for the UI is built with specific server DNS and port arguments. Replace ",(0,t.jsx)(n.code,{children:"[port exposed by LLM server service]"})," with the actual port number."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker build -t llm_ui --build-arg SERVER_DNS=llm-server-svc --build-arg SERVER_PORT=[port exposed by LLM server service] -f docker/llm_ui.dockerfile .\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Create a Secret from the .env File"}),":\nConvert your ",(0,t.jsx)(n.code,{children:".env"})," file containing environment variables into a Kubernetes secret. Replace ",(0,t.jsx)(n.code,{children:"/path/to/env/file"})," with the actual path to your ",(0,t.jsx)(n.code,{children:".env"})," file."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl create secret generic llm-server-secret --from-env-file=/path/to/env/file\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Deploy the LLM Application"}),":\nApply the Kubernetes configuration files to deploy the application."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f k8s\n"})}),"\n",(0,t.jsx)(s.A,{type:"warning",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note"}),": Kubernetes deployment and functionality are not yet fully tested. Use at your own risk. If you encounter any issues, please contribute fixes back to the project."]})}),"\n",(0,t.jsx)(n.h2,{id:"helm",children:"HELM"}),"\n",(0,t.jsxs)(n.p,{children:["The HELM chart in the ",(0,t.jsx)(n.code,{children:"helm"})," folder can be used for installation, but it is also experimental. Contributions are welcome to improve these configurations."]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},7293:(e,n,i)=>{i.d(n,{A:()=>E});var t=i(6540),r=i(4848);function s(e){const{mdxAdmonitionTitle:n,rest:i}=function(e){const n=t.Children.toArray(e),i=n.find((e=>t.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),s=n.filter((e=>e!==i)),l=i?.props.children;return{mdxAdmonitionTitle:l,rest:s.length>0?(0,r.jsx)(r.Fragment,{children:s}):null}}(e.children),s=e.title??n;return{...e,...s&&{title:s},children:i}}var l=i(4164),o=i(1312),c=i(7559);const d={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function a(e){let{type:n,className:i,children:t}=e;return(0,r.jsx)("div",{className:(0,l.A)(c.G.common.admonition,c.G.common.admonitionType(n),d.admonition,i),children:t})}function h(e){let{icon:n,title:i}=e;return(0,r.jsxs)("div",{className:d.admonitionHeading,children:[(0,r.jsx)("span",{className:d.admonitionIcon,children:n}),i]})}function u(e){let{children:n}=e;return n?(0,r.jsx)("div",{className:d.admonitionContent,children:n}):null}function x(e){const{type:n,icon:i,title:t,children:s,className:l}=e;return(0,r.jsxs)(a,{type:n,className:l,children:[(0,r.jsx)(h,{title:t,icon:i}),(0,r.jsx)(u,{children:s})]})}function p(e){return(0,r.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const j={icon:(0,r.jsx)(p,{}),title:(0,r.jsx)(o.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function m(e){return(0,r.jsx)(x,{...j,...e,className:(0,l.A)("alert alert--secondary",e.className),children:e.children})}function g(e){return(0,r.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const f={icon:(0,r.jsx)(g,{}),title:(0,r.jsx)(o.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function v(e){return(0,r.jsx)(x,{...f,...e,className:(0,l.A)("alert alert--success",e.className),children:e.children})}function b(e){return(0,r.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const k={icon:(0,r.jsx)(b,{}),title:(0,r.jsx)(o.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function S(e){return(0,r.jsx)(x,{...k,...e,className:(0,l.A)("alert alert--info",e.className),children:e.children})}function y(e){return(0,r.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const w={icon:(0,r.jsx)(y,{}),title:(0,r.jsx)(o.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function L(e){return(0,r.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const A={icon:(0,r.jsx)(L,{}),title:(0,r.jsx)(o.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const _={icon:(0,r.jsx)(y,{}),title:(0,r.jsx)(o.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const D={...{note:m,tip:v,info:S,warning:function(e){return(0,r.jsx)(x,{...w,...e,className:(0,l.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,r.jsx)(x,{...A,...e,className:(0,l.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,r.jsx)(m,{title:"secondary",...e}),important:e=>(0,r.jsx)(S,{title:"important",...e}),success:e=>(0,r.jsx)(v,{title:"success",...e}),caution:function(e){return(0,r.jsx)(x,{..._,...e,className:(0,l.A)("alert alert--warning",e.className),children:e.children})}}};function E(e){const n=s(e),i=(t=n.type,D[t]||(console.warn(`No admonition component found for admonition type "${t}". Using Info as fallback.`),D.info));var t;return(0,r.jsx)(i,{...n})}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var t=i(6540);const r={},s=t.createContext(r);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);