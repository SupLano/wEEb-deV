if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }

__d("SearchCometInterestsDeepDivePostsQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4863440627068717"}),null);
__d("SearchCometInterestsDeepDivePostsQuery$Parameters",["SearchCometInterestsDeepDivePostsQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("SearchCometInterestsDeepDivePostsQuery_facebookRelayOperation"),metadata:{},name:"SearchCometInterestsDeepDivePostsQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("SearchCometInterestsDeepDiveRootContentQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5110694715641479"}),null);
__d("SearchCometInterestsDeepDiveRootContentQuery$Parameters",["SearchCometInterestsDeepDiveRootContentQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("SearchCometInterestsDeepDiveRootContentQuery_facebookRelayOperation"),metadata:{},name:"SearchCometInterestsDeepDiveRootContentQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("SearchCometInterestsDeepDiveFeedEntryPointVariables",["WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={UFI2CommentsProvider_commentsKey:"SearchCometInterestsDeepDiveRootQuery",displayCommentsContextEnableComment:!1,displayCommentsContextIsAdPreview:!1,displayCommentsContextIsAggregatedShare:!1,displayCommentsContextIsStorySet:!0,displayCommentsFeedbackContext:null,feedbackSource:40,feedLocation:"SEARCH",focusCommentID:null,privacySelectorRenderLocation:"COMET_STREAM",renderLocation:"search_results_page",scale:d("WebPixelRatio").get(),useDefaultActor:!1};g["default"]=a}),98);
__d("SearchCometInterestsDeepDiveRoot.entrypoint",["JSResourceForInteraction","SearchCometInterestsDeepDiveFeedEntryPointVariables","SearchCometInterestsDeepDivePostsQuery$Parameters","SearchCometInterestsDeepDiveRootContentQuery$Parameters","WebPixelRatio","uuid"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var b=a.routeParams,e=a.routeProps.topic_id;a=a.timeSpentMetaData;var f=b.__eep__,g;b.__gid__!=null&&(g=b.__gid__);var h;b.hashtag!=null&&(h=b.hashtag);var i;b.explore_tab!=null&&(i=b.explore_tab);b=(a=a==null?void 0:(b=a.session_ids)==null?void 0:b.search_sid)!=null?a:c("uuid")();a=i==="latest"?"RECENT":"TOP";var j=g!=null?{container_scope_fbid:g}:null;f={extra_data:f!=null?JSON.stringify({entry_point:f}):null,scope_information:j,session_id:b,topic_id:h!=null?"#"+h:e};return{queries:{postsQuery:{parameters:c("SearchCometInterestsDeepDivePostsQuery$Parameters"),variables:babelHelpers["extends"]({input:babelHelpers["extends"]({},f,{explore_tab:a})},c("SearchCometInterestsDeepDiveFeedEntryPointVariables"))},rootContentQuery:{parameters:c("SearchCometInterestsDeepDiveRootContentQuery$Parameters"),variables:{input:babelHelpers["extends"]({},f),scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("SearchCometInterestsDeepDiveRoot.react").__setRef("SearchCometInterestsDeepDiveRoot.entrypoint")};g["default"]=a}),98);