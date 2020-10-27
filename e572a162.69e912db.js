(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{84:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(2),i=a(6),o=(a(0),a(91)),s={title:"JS actions handling",sidebar_label:"JS actions handling",slug:"js-actions-handling"},r={unversionedId:"technical/actions/js-actions-handling",id:"technical/actions/js-actions-handling",isDocsHomePage:!1,title:"JS actions handling",description:"Update",source:"@site/docs/technical/actions/js-actions-handling.md",slug:"/technical/actions/js-actions-handling",permalink:"/docs/technical/actions/js-actions-handling",version:"current",sidebar_label:"JS actions handling",sidebar:"someSidebar",previous:{title:"Binding in templates",permalink:"/docs/technical/actions/binding-in-templates"},next:{title:"Content re/loading",permalink:"/docs/technical/content-re-loading"}},c=[{value:"Update",id:"update",children:[]},{value:"Create",id:"create",children:[]},{value:"Remove",id:"remove",children:[]},{value:"Copy",id:"copy",children:[]},{value:"Edit with prefilled modal",id:"edit-with-prefilled-modal",children:[]},{value:"Calling dialog",id:"calling-dialog",children:[]}],l={rightToc:c};function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"update"},"Update"),Object(o.b)("p",null,"Update is handled via ",Object(o.b)("inlineCode",{parentName:"p"},"DataProcessor")," definition of ",Object(o.b)("inlineCode",{parentName:"p"},"makeUpdateData"),"."),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"makeUpdateData: function ($baseElement) {\n    let name            = $($baseElement).find('.name').html();\n    let symbol          = $($baseElement).find('.symbol').html();\n    let multiplier      = $($baseElement).find('.multiplier').val();\n    let isDefaultInput  = $($baseElement).find('.is-default').find('input');\n    let isDefault       = DomAttributes.isChecked(isDefaultInput);\n    let beforeUpdateState = $($baseElement).find('.before-update-state').val();\n    let successMessage = AbstractDataProcessor.messages.entityUpdateSuccess(SpecialAction.settingsFinancesCurrencyTable.processorName);\n    let failMessage    = AbstractDataProcessor.messages.entityUpdateFail(SpecialAction.settingsFinancesCurrencyTable.processorName);\n    let url = '/api/settings-finances/update-currencies';\n    let ajaxData = {\n        'name'                : name,\n        'symbol'              : symbol,\n        'multiplier'          : multiplier,\n        'is_default'          : isDefault,\n        'before_update_state' : beforeUpdateState,\n        'group'       : {\n            \"type\"        : \"entity\",\n            'namespace'   : EntityStructure.MyPasswordsGroups.getNamespace(),\n            'id'          : trimmedGroupId,\n        },\n    };\n    let dataProcessorsDto            = new DataProcessorDto();\n    dataProcessorsDto.successMessage = successMessage;\n    dataProcessorsDto.failMessage    = failMessage;\n    dataProcessorsDto.url            = url;\n    dataProcessorsDto.ajaxData       = ajaxData;\n    return dataProcessorsDto;\n},\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"$baseElement")," - is the element having given classes ",Object(o.b)("inlineCode",{parentName:"li"},"editable-parent save-parent")," and is also a parent element of ",Object(o.b)("inlineCode",{parentName:"li"},"edit")," and ",Object(o.b)("inlineCode",{parentName:"li"},"save")," action,"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"url")," - that's the backend action called to perform the update logic,"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"ajaxData")," - is the standard ajax data object containing values of fields that are to be updated (",Object(o.b)("em",{parentName:"li"},"or eventually can transfer some additional data as well"),")",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"grup")," is a special type of data sent to backend, contains information about the entity so with this it's also possible to update the relational field via ajaxCall"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"success/fail message")," - are the messages that are going to be shown by default if no message is going to be returned in the backend,")),Object(o.b)("h2",{id:"create"},"Create"),Object(o.b)("p",null,"Create is handled via ",Object(o.b)("inlineCode",{parentName:"p"},"DataProcessor")," definition of ",Object(o.b)("inlineCode",{parentName:"p"},"makeCreateData"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"makeCreateData($baseElement?: JQuery<HTMLElement>): DataProcessorDto | null {\n    let url            = '/my-schedules-settings';\n    let successMessage = AbstractDataProcessor.messages.entityCreatedRecordSuccess(Entity.MySchedulesTypes.processorName);\n    let failMessage    = AbstractDataProcessor.messages.entityCreatedRecordFail(Entity.MySchedulesTypes.processorName);\n    let callbackAfter  = () => {\n        BootboxWrapper.hideAll();\n    };\n    let dataProcessorsDto            = new DataProcessorDto();\n    dataProcessorsDto.successMessage = successMessage;\n    dataProcessorsDto.failMessage    = failMessage;\n    dataProcessorsDto.callback       = callback;\n    dataProcessorsDto.url            = url;\n    dataProcessorsDto.processorName  = this.processorName;\n    return dataProcessorsDto;\n},\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"The structure is the same as in the ",Object(o.b)("strong",{parentName:"em"},"makeUpdateData"),", however additional thing actually in this method is a callback (available remove/update as well)")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"callback")," allows to add additional logic which should be called after the response from the backend is initially processed(which is after the template is being reloaded/rebuilt)")),Object(o.b)("h2",{id:"remove"},"Remove"),Object(o.b)("p",null,"Create is handled via ",Object(o.b)("inlineCode",{parentName:"p"},"DataProcessor")," definition of ",Object(o.b)("inlineCode",{parentName:"p"},"makeRemoveData"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"This action structure is the same as both one above - nothing new to describe here additionally")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"makeRemoveData($baseElement?: JQuery<HTMLElement>): DataProcessorDto | null {\n    let id              = $($baseElement).find('.id').html();\n    let url             = '/my-passwords/remove/';\n    let successMessage  = AbstractDataProcessor.messages.entityRemoveSuccess(Entity.MyPasswords.processorName);\n    let failMessage     = AbstractDataProcessor.messages.entityRemoveFail(Entity.MyPasswords.processorName);\n    let ajaxData       = {\n        id: id\n    };\n    let dataProcessorsDto            = new DataProcessorDto();\n    dataProcessorsDto.url            = url;\n    dataProcessorsDto.successMessage = successMessage;\n    dataProcessorsDto.failMessage    = failMessage;\n    dataProcessorsDto.ajaxData       = ajaxData;\n    dataProcessorsDto.isDataTable    = false;\n    dataProcessorsDto.processorName  = this.processorName;\n    return dataProcessorsDto;\n},\n")),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This 3 methods (",Object(o.b)("inlineCode",{parentName:"p"},"makeRemoveData"),", ",Object(o.b)("inlineCode",{parentName:"p"},"makeCreateData"),", ",Object(o.b)("inlineCode",{parentName:"p"},"makeUpdateData"),") are required for actions called by using the logic present in: ",Object(o.b)("inlineCode",{parentName:"p"},"templates/modules/common/components/actions.twig")))),Object(o.b)("h2",{id:"copy"},"Copy"),Object(o.b)("p",null,"Copy is a special action that was prepared explicitly for ",Object(o.b)("inlineCode",{parentName:"p"},"passwords")," module, is handled via ",Object(o.b)("inlineCode",{parentName:"p"},"DataProcessor")," definition of ",Object(o.b)("inlineCode",{parentName:"p"},"makeCopyData"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"This action structure is the same as both one above - nothing new to describe here additionally")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"makeCopyData($baseElement): DataProcessorDto | null  {\n    let url     = '/my-passwords/get-password/';\n    let id      = $($baseElement).find('.id').html();\n    let ajaxUrl = url + id;\n    let dataProcessorsDto            = new DataProcessorDto();\n    dataProcessorsDto.url            = ajaxUrl;\n    dataProcessorsDto.successMessage = AbstractDataProcessor.messages.password_copy_confirmation_message;\n    dataProcessorsDto.failMessage    = AbstractDataProcessor.messages.default_copy_data_fail_message;\n    dataProcessorsDto.processorName  = this.processorName;\n    return dataProcessorsDto;\n},\n")),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Like mentioned, the ",Object(o.b)("inlineCode",{parentName:"p"},"copy")," logic was explicitly created for ",Object(o.b)("inlineCode",{parentName:"p"},"passwords")," module, like always the best intent was to create an flexible logic\nreusable in other cases, however since this had only one particular usage and might've never been used afterwards means that it might\nrequire additional adaptation."))),Object(o.b)("h2",{id:"edit-with-prefilled-modal"},"Edit with prefilled modal"),Object(o.b)("p",null,"This action can be used to edit the entity via dialog/modal. Each of the called repositiories names need to be defined in:\n",Object(o.b)("inlineCode",{parentName:"p"},"src/assets/scripts/core/ui/Actions/EditViaModalPrefilledWithEntityDataAction.ts")),Object(o.b)("p",null,"Like for example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'protected apiMethods = {\n    buildEditEntityModalByRepositoryName: {\n        MyContactRepository: {\n            url     : "/dialog/body/edit-contact-card",\n            method  : "POST",\n            callback: () => {\n                this.formAppendAction.attachFormViewAppendEvent();\n                this.formAppendAction.attachRemoveParentEvent();\n                JsColor.init();\n                this.updateAction.attachContentSaveEventOnSaveIcon();\n                BootstrapSelect.init();\n            }\n        },\n        /**\n         * Each dialog method should have target repository\n         * @param entityId\n         */\n        callModal: function(entityId){}\n    },\n};\n')),Object(o.b)("h2",{id:"calling-dialog"},"Calling dialog"),Object(o.b)("p",null,"With this action it's possible to call dialog with rendered template.\nDefinition of dialog logic must be added to: ",Object(o.b)("inlineCode",{parentName:"p"},"src/assets/scripts/core/ui/Dialogs/LogicLoader/DialogLogic.ts"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"/**\n * @description contains definition of logic for add/modify todo\n */\npublic static addOrModifyTodo()\n{\n    let callback = (dialogWrapper?: JQuery<HTMLElement>) => {\n        let todoChecklist = new TodoChecklist();\n        let createAction  = new CreateAction();\n        let removeAction  = new RemoveAction();\n        let updateAction  = new UpdateAction();\n        createAction.init();\n        todoChecklist.init();\n        removeAction.init();\n        updateAction.init();\n        Popover.init();\n    };\n    let dialogDataDto = new DialogDataDto();\n    dialogDataDto.callback = callback;\n    return dialogDataDto;\n}\n")),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("ol",{parentName:"div"},Object(o.b)("li",{parentName:"ol"},"This logic ",Object(o.b)("strong",{parentName:"li"},"MUST")," be defined and should contain the js initializers. This is required\ndue to the fact that backend returns only a template and thus no logic is bound to it's element. The callback is\ncalled directly after the dialog is filled with template."),Object(o.b)("li",{parentName:"ol"},"The name of the method must be equal to the method name provided in template via ",Object(o.b)("inlineCode",{parentName:"li"},'data-dialog-name="myIssueCardAddRecords"'))))))}d.isMDXComponent=!0},91:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),d=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},b=function(e){var t=d(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=d(a),m=n,u=b["".concat(s,".").concat(m)]||b[m]||p[m]||o;return a?i.a.createElement(u,r(r({ref:t},l),{},{components:a})):i.a.createElement(u,r({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:n,s[1]=r;for(var l=2;l<o;l++)s[l]=a[l];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);