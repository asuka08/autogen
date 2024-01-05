"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7418],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),p=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),h=o,d=m["".concat(c,".").concat(h)]||m[h]||u[h]||a;return n?i.createElement(d,r(r({ref:t},l),{},{components:n})):i.createElement(d,r({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<a;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6811:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var i=n(3117),o=(n(7294),n(3905));const a={title:"AgentOptimizer - An Agentic Way to Train Your LLM Agent",authors:["skzhang1","jieyuz2"],tags:["LLM","research"]},r=void 0,s={permalink:"/autogen/blog/2023/12/23/AgentOptimizer",source:"@site/blog/2023-12-23-AgentOptimizer/index.mdx",title:"AgentOptimizer - An Agentic Way to Train Your LLM Agent",description:"Overall structure of AgentOptimizer",date:"2023-12-23T00:00:00.000Z",formattedDate:"December 23, 2023",tags:[{label:"LLM",permalink:"/autogen/blog/tags/llm"},{label:"research",permalink:"/autogen/blog/tags/research"}],readingTime:6.23,truncated:!1,authors:[{name:"Shaokun Zhang",title:"PhD student at the Pennsylvania State University",url:"https://github.com/skzhang1",imageURL:"https://github.com/skzhang1.png",key:"skzhang1"},{name:"Jieyu Zhang",title:"PhD student at University of Washington",url:"https://jieyuz2.github.io/",imageURL:"https://github.com/jieyuz2.png",key:"jieyuz2"}],prevItem:{title:"All About Agent Descriptions",permalink:"/autogen/blog/2023/12/29/AgentDescriptions"},nextItem:{title:"AutoGen Studio: Interactively Explore Multi-Agent Workflows",permalink:"/autogen/blog/2023/12/01/AutoGenStudio"}},c={authorsImageUrls:[void 0,void 0]},p=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"AgentOptimizer",id:"agentoptimizer",children:[],level:2},{value:"Pseudocode for the optimization process",id:"pseudocode-for-the-optimization-process",children:[],level:2},{value:"The implementation technology behind the AgentOptimizer",id:"the-implementation-technology-behind-the-agentoptimizer",children:[],level:2},{value:"Limitation &amp; Future work",id:"limitation--future-work",children:[],level:2}],l={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Overall structure of AgentOptimizer",src:n(5069).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"TL;DR:"),"\nIntroducing ",(0,o.kt)("strong",{parentName:"p"},"AgentOptimizer"),", a new class for training LLM agents in the era of LLMs as a service.\n",(0,o.kt)("strong",{parentName:"p"},"AgentOptimizer")," is able to prompt autogen agents to iteratively optimize its function/skills according to the historical conversation and performance.\nCheckout one implementation for ",(0,o.kt)("strong",{parentName:"p"},"AgentOptimizer")," on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/hendrycks/math"},"MATH")," dataset\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_agentoptimizer.ipynb"},"here"),"."),(0,o.kt)("p",null,"Paper is coming soon!"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"In traditional ML pipeline, we train a model by updating its weights according to the loss on the training set, while in the era of LLM agents, how should we train an agent?\nHere, we take an initial step towards the agent training.\nInspired by the ",(0,o.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/guides/function-calling"},"function calling")," capabilities provided by OpenAI,\nwe draw an analogy between model weights and agent functions/skills, and update an agent\u2019s functions/skills based on its historical performance on a training set.\nSpecifically, we propose to use the function calling capabilities to formulate the actions that optimize the agents\u2019 functions as a set of function calls,\nto support iteratively ",(0,o.kt)("strong",{parentName:"p"},"adding, revising, and removing")," existing functions.\nAs an agentic way of training an agent, our approach helps enhance the agents\u2019 abilities without requiring access to the LLMs weights."),(0,o.kt)("h2",{id:"agentoptimizer"},"AgentOptimizer"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"AgentOptimizer")," is a class designed to optimize the agents by improving their function calls.\nIt contains two core methods:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"step()"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"step()")," takes three inputs, including the previous conversation history (history), the statistical information of solving previous problems (statistic), and the current functions (current_functions).")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"actions, updated_functions = AgentOptimizer.step(history, statistic, current_functions)\n")),(0,o.kt)("p",null,"It has two outputs ",(0,o.kt)("inlineCode",{parentName:"p"},"actions")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"updated_functions"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"actions")," is a series of actions to manipulate the current functions. And ",(0,o.kt)("inlineCode",{parentName:"p"},"updated_functions")," is the updated functions after the actions are applied (including code implementation)."),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"update_function_call()"),":\nThis method takes the agents and actions as input. It updates the functions registered in these agents according to the actions from ",(0,o.kt)("inlineCode",{parentName:"li"},"step()"),".\nFor AssistantAgent, it first uses ",(0,o.kt)("a",{parentName:"li",href:"https://microsoft.github.io/autogen/docs/reference/agentchat/conversable_agent/#update_function_signature"},"update_function_signature")," to update the function signatures.\nThen, it updates the functions in the MathUserproxyAgent with the corresponding code implementation gained from ",(0,o.kt)("inlineCode",{parentName:"li"},"step()"),".")),(0,o.kt)("p",null,"Sometimes, the function signatures (JSON schema) returned by the ",(0,o.kt)("inlineCode",{parentName:"p"},"step()")," may not be valid, and the generated code may also face syntax errors.\n",(0,o.kt)("strong",{parentName:"p"},"AgentOptimizer")," includes mechanisms to check the (1) validity of the function signatures and (2) code implementation before updating the functions.\nMoreover, it also includes mechanisms to check whether each action is feasible, such as avoiding the removal of a function that is not in the current functions due to hallucination."),(0,o.kt)("h2",{id:"pseudocode-for-the-optimization-process"},"Pseudocode for the optimization process"),(0,o.kt)("p",null,"The optimization process is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"for - in range(EPOCH):\n    history, statistic, current_functions = solve_problems(train_problems)\n    actions, updated_functions = AgentOptimizer.step(history, statistic, current_functions)\n    AgentOptimizer.update_function_call(actions)\n")),(0,o.kt)("p",null,"Given a prepared training dataset, the agents iteratively solve problems from the training set to obtain conversation history and statistical information.\nThe functions are then improved using AgentOptimizer.\nEach iteration can be regarded as one training step analogous to traditional machine learning, with the optimization elements being the functions that agents have.\nAfter EPOCH iterations, the agents are expected to obtain better functions that may be used in future tasks"),(0,o.kt)("h2",{id:"the-implementation-technology-behind-the-agentoptimizer"},"The implementation technology behind the AgentOptimizer"),(0,o.kt)("p",null,"To obtain stable and structured function signatures and code implementations from AgentOptimizer,\nwe leverage the function calling capabilities provided by OpenAI to formulate the actions that manipulate the functions as a set of function calls.\nSpecifically, we introduce three function calls to manipulate the current functions at each step: ",(0,o.kt)("inlineCode",{parentName:"p"},"add_function"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"remove_function"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"revise_function"),".\nThese calls add, remove, and revise functions in the existing function list, respectively.\nThis practice could fully leverages the function calling capabilities of GPT-4 and outputs structured functions with more stable signatures and code implementation.\nBelow is the JSON schema of these function calls:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"add_function"),": Add one new function that may be used in the future tasks.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'ADD_FUNC = {\n    "type": "function",\n    "function": {\n        "name": "add_function",\n        "description": "Add a function in the context of the conversation. Necessary Python packages must be declared. The name of the function MUST be the same with the function name in the code you generated.",\n        "parameters": {\n            "type": "object",\n            "properties": {\n                "name": {\n                    "type": "string",\n                    "description": "The name of the function in the code implementation."\n                },\n                "description": {\n                    "type": "string",\n                    "description": "A short description of the function."\n                },\n                "arguments": {\n                    "type": "string",\n                    "description": "JSON schema of arguments encoded as a string. Please note that the JSON schema only supports specific types including string, integer, object, array, boolean. (do not have float type) For example: { \\"url\\": { \\"type\\": \\"string\\", \\"description\\": \\"The URL\\", }}. Please avoid the error \'array schema missing items\' when using array type."\n                },\n                "packages": {\n                    "type": "string",\n                    "description": "A list of package names imported by the function, and that need to be installed with pip prior to invoking the function. This solves ModuleNotFoundError. It should be string, not list."\n                },\n                "code": {\n                    "type": "string",\n                    "description": "The implementation in Python. Do not include the function declaration."\n                }\n            },\n            "required": ["name", "description", "arguments", "packages", "code"]\n        }\n    }\n}\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"revise_function"),": Revise one existing function (code implementation, function signature) in the current function list according to the conversation history and performance.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'REVISE_FUNC = {\n    "type": "function",\n    "function": {\n        "name": "revise_function",\n        "description": "Revise a function in the context of the conversation. Necessary Python packages must be declared. The name of the function MUST be the same with the function name in the code you generated.",\n        "parameters": {\n            "type": "object",\n            "properties": {\n                "name": {\n                    "type": "string",\n                    "description": "The name of the function in the code implementation."\n                },\n                "description": {\n                    "type": "string",\n                    "description": "A short description of the function."\n                },\n                "arguments": {\n                    "type": "string",\n                    "description": "JSON schema of arguments encoded as a string. Please note that the JSON schema only supports specific types including string, integer, object, array, boolean. (do not have float type) For example: { \\"url\\": { \\"type\\": \\"string\\", \\"description\\": \\"The URL\\", }}. Please avoid the error \'array schema missing items\' when using array type."\n                },\n                "packages": {\n                    "type": "string",\n                    "description": "A list of package names imported by the function, and that need to be installed with pip prior to invoking the function. This solves ModuleNotFoundError. It should be string, not list."\n                },\n                "code": {\n                    "type": "string",\n                    "description": "The implementation in Python. Do not include the function declaration."\n                }\n            },\n            "required": ["name", "description", "arguments", "packages", "code"]\n        }\n    }\n}\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"remove_function"),": Remove one existing function in the current function list. It is used to remove the functions that are not useful (redundant) in the future tasks.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'REMOVE_FUNC = {\n    "type": "function",\n    "function": {\n        "name": "remove_function",\n        "description": "Remove one function in the context of the conversation. Once remove one function, the assistant will not use this function in future conversation.",\n        "parameters": {\n            "type": "object",\n            "properties": {\n                "name": {\n                    "type": "string",\n                    "description": "The name of the function in the code implementation."\n                }\n            },\n            "required": ["name"]\n        }\n    }\n}\n')),(0,o.kt)("h2",{id:"limitation--future-work"},"Limitation & Future work"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Unlike gradient descent in traditional machine learning training processes, each optimization step does not necessarily lead to better performance on the training set.\nWhen the training epoch is small, the agent\u2019s performance may even decrease. One urgent task is to design a better mechanism to guide the optimization process."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_agentoptimizer.ipynb"},"Current implementation")," of AgentOptimizer is mainly for illustration purpose and is just a proof of concept.\nIt is not formally integrated into the autogen with a general interface like optimizing any kinds of agents in any tasks.\nCurrently, it only supports optimizing the multi-agent system in solving problems from ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/hendrycks/math"},"MATH")," dataset. We will integrate it into autogen with more general interface in the future.")))}u.isMDXComponent=!0},5069:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/agentoptimizer-33b265dcca6cff56bbf0c9d63ff389f9.png"}}]);