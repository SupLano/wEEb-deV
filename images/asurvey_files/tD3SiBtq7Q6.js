if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }

__d("CometTextInputWithIcon.react",["BaseTextInput.react","CometIcon.react","CometScreenReaderText.react","react","stylex","useBaseInputValidators","useCometUniqueID"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={disabledInput:{cursor:"rj84mg9z"},iconEnd:{end:"dpjh1vo5",position:"pmk7jnqg",top:"plgsh5y4"},iconStart:{position:"pmk7jnqg",start:"dnzpfbms",top:"plgsh5y4"},root:{color:"oo9gr5id",fontSize:"jq4qci2q",position:"l9j0dhe7"},textInput:{backgroundColor:"cwj9ozl2",borderTop:"l6v480f0",borderEnd:"maa8sdkg",borderBottom:"s1tcr66n",borderStart:"aypy0576",borderTopStartRadius:"ue3kfks5",borderTopEndRadius:"pw54ja7n",borderBottomEndRadius:"uo3d90p7",borderBottomStartRadius:"l82x9zwi",boxSizing:"rq0escxv",color:"oo9gr5id",fontSize:"l94mrbxd",fontWeight:"ekzkrbhg",height:"tv7at329",width:"k4urcfbm"},textInputEndIcon:{paddingTop:"jb3vyjys",paddingEnd:"bowiujrr",paddingBottom:"qt6c0cv9",paddingStart:"h4z51re5"},textInputStartIcon:{paddingTop:"jb3vyjys",paddingEnd:"rv4hoivh",paddingBottom:"qt6c0cv9",paddingStart:"jg4yhqs5"}};function a(a,b){var d,e=a["aria-describedby"],f=a.autoFocus_PLEASE_USE_FOCUS_REGION_INSTEAD,g=a.disabled;g=g===void 0?!1:g;var j=a.icon,k=a.iconColor,l=a.iconPlacement;l=l===void 0?"start":l;var m=a.label,n=a.validator,o=a.value;a=babelHelpers.objectWithoutPropertiesLoose(a,["aria-describedby","autoFocus_PLEASE_USE_FOCUS_REGION_INSTEAD","disabled","icon","iconColor","iconPlacement","label","validator","value"]);var p=c("useCometUniqueID")();n=c("useBaseInputValidators")({validator:n,value:String(o)});var q=n.topResultReason;n=n.topResultType;e=q!=null?p+" "+((d=e)!=null?d:""):(d=e)!=null?d:void 0;return h.jsxs("div",{className:c("stylex")(i.root),children:[l==="start"?h.jsx("div",{className:c("stylex")(i.iconStart),children:h.jsx(c("CometIcon.react"),{color:k,icon:j,size:16})}):null,h.jsx(c("BaseTextInput.react"),babelHelpers["extends"]({"aria-describedby":e,"aria-invalid":n==="ERROR","aria-label":m,autoFocus:f,disabled:g,value:o,xstyle:[g&&i.disabledInput,i.textInput,l==="start"&&i.textInputStartIcon,l==="end"&&i.textInputEndIcon]},a,{ref:b})),l==="end"?h.jsx("div",{className:c("stylex")(i.iconEnd),children:h.jsx(c("CometIcon.react"),{color:k,icon:j,size:16})}):null,q!=null?h.jsx(c("CometScreenReaderText.react"),{id:p,text:q}):null]})}a.displayName=a.name+" [from "+f.id+"]";b=h.forwardRef(a);g["default"]=b}),98);
__d("adjustFaceboxPosition",[],(function(a,b,c,d,e,f){"use strict";function a(a){var b=a.boxSize,c=a.imageDimension;a=a.originalPos;return a<0?0:a+b>c?c-b:a}f["default"]=a}),66);
__d("ProfilePlusPlatformTool",[],(function(a,b,c,d,e,f){a=Object.freeze({ADS_MANAGER:"ADS_MANAGER",BUSINESS_MANAGER:"BUSINESS_MANAGER",BUSINESS_SUITE:"BUSINESS_SUITE",CREATOR_STUDIO:"CREATOR_STUDIO"});f["default"]=a}),66);