(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{66:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return b}));var n=a(2),i=a(6),r=(a(0),a(91)),c={title:"Search & Files tag",sidebar_label:"Search & Files tag",slug:"search-files-tags"},s={unversionedId:"technical/search-files-tags",id:"technical/search-files-tags",isDocsHomePage:!1,title:"Search & Files tag",description:"Search",source:"@site/docs/technical/search-files-tags.md",slug:"/technical/search-files-tags",permalink:"/docs/technical/search-files-tags",version:"current",sidebar_label:"Search & Files tag",sidebar:"someSidebar",previous:{title:"Composer",permalink:"/docs/technical/composer-commands/composer"},next:{title:"Contributors",permalink:"/docs/summary/contributors"}},o=[{value:"Search",id:"search",children:[]},{value:"Files tags",id:"files-tags",children:[]}],l={rightToc:o};function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"search"},"Search"),Object(r.b)("p",null,"The search mechanism allows to quickly find existing entries in database, weather by looking for matching string or\nby tag applied to a file - that's why the file based modules contain possibility to save a tag for given document."),Object(r.b)("p",null,"The logic behind this relies on: "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The action defined in the ",Object(r.b)("inlineCode",{parentName:"li"},"SearchAction::getSearchResultsDataForTag")," (",Object(r.b)("em",{parentName:"li"},"since search relies on strings contained in provided tags"),")")),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"In order to extend the logic, all that has to be done is to extend search results by types:"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"$files_search_results = $this->app->repositories->filesSearchRepository->getSearchResultsDataForTag($tags_array, FilesSearchRepository::SEARCH_TYPE_FILES, true);\n$notes_search_results = $this->app->repositories->filesSearchRepository->getSearchResultsDataForTag($tags_array, FilesSearchRepository::SEARCH_TYPE_NOTES, true);\n\n$search_results = array_merge(\n    $files_search_results,\n    $notes_search_results\n);\n")))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Repository which fetches the data used to apply searched strings/tags ",Object(r.b)("inlineCode",{parentName:"li"},"FilesSearchRepository"))),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The most important thing is to extend the logic in method ",Object(r.b)("inlineCode",{parentName:"p"},"getSearchResultsDataForTag")," by providing new type and the ",Object(r.b)("inlineCode",{parentName:"p"},"getSql"),"\njust like it's already done:"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),'switch($search_type){\n    case self::SEARCH_TYPE_FILES:\n        $sql = $this->getSqlForFileSearch($tags_sql);\n        break;\n    case self::SEARCH_TYPE_NOTES:\n        $sql = $this->getSqlForNotesSearch($tags_sql);\n        break;\n    default:\n        throw new Exception("Undefined search type for search results: {$search_type}.");\n}\n')))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The last thing to extend is the script ",Object(r.b)("inlineCode",{parentName:"li"},"src/assets/scripts/core/ui/Search"))),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The first required thing is to extend the logic in ",Object(r.b)("inlineCode",{parentName:"p"},"buildSearchResults"),", and the second one is to create a search builder\nmethod like it's for example already done for files: ",Object(r.b)("inlineCode",{parentName:"p"},"buildFilesSearchResultsListElement")," "))),Object(r.b)("h2",{id:"files-tags"},"Files tags"),Object(r.b)("p",null,"The tagging mechanism has been designed strictly for files. This relies on:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"selectize")," - javascript plugin,"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"FilesTagsAction::apiUpdateTags")," - which receives file path and tags in form of strings from frontend,"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"FilesTagsController::updateTags")," - which passes the data further to the tagging service ",Object(r.b)("inlineCode",{parentName:"li"},"FileTagger"))),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"To extend this logic up to any other files based module, all that is needed is an action calling/providing logic similar\nto the one present in ",Object(r.b)("inlineCode",{parentName:"p"},"MyImagesAction::update"),":"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"$file_current_path = $request->request->get(DialogsAction::KEY_FILE_CURRENT_PATH);\n$tags_string       = $request->request->get(FileTagger::KEY_TAGS);\n$this->files_tags_controller->updateTags($tags_string, $file_current_path);\n")))))}b.isMDXComponent=!0},91:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),b=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=b(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=b(a),h=n,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||r;return a?i.a.createElement(m,s(s({ref:t},l),{},{components:a})):i.a.createElement(m,s({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=h;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var l=2;l<r;l++)c[l]=a[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);