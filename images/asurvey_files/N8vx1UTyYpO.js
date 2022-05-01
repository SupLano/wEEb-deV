if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }

__d("CometNotificationsDropdownMenuButton_notification.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:!1,kind:"LocalArgument",name:"isToast"},{defaultValue:!1,kind:"LocalArgument",name:"menuUseEntryPoint"}],kind:"Fragment",metadata:null,name:"CometNotificationsDropdownMenuButton_notification",selections:[{condition:"menuUseEntryPoint",kind:"Condition",passingValue:!1,selections:[{args:[{kind:"Variable",name:"isToast",variableName:"isToast"}],kind:"FragmentSpread",name:"CometNotificationsDropdownMenu_notification"}]},{alias:null,args:null,kind:"ScalarField",name:"notif_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"notif_type",storageKey:null},{condition:"menuUseEntryPoint",kind:"Condition",passingValue:!0,selections:[{kind:"ClientExtension",selections:[{alias:"id_for_entrypoint",args:null,kind:"ScalarField",name:"__id",storageKey:null}]}]}],type:"Notification",abstractKey:null};e.exports=a}),null);
__d("CometNotificationsDropdownMenuContainerQuery$Parameters",["CometNotificationsDropdownMenuContainerQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometNotificationsDropdownMenuContainerQuery_facebookRelayOperation"),metadata:{},name:"CometNotificationsDropdownMenuContainerQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometNotificationsListItemAttachment_notification.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:!1,kind:"LocalArgument",name:"isToast"}],kind:"Fragment",metadata:null,name:"CometNotificationsListItemAttachment_notification",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"notif_attachments",plural:!0,selections:[{kind:"InlineFragment",selections:[{args:null,documentName:"CometNotificationsListItemAttachment_notification",fragmentName:"CometNotificationsListItemFriendRequestAttachment_notifAttachments",fragmentPropName:"notifAttachments",kind:"ModuleImport"}],type:"FriendRequestNotifAttachment",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometNotificationsListItemAttachment_notification",fragmentName:"CometNotificationsListItemInlineCTAAttachment_notifAttachments",fragmentPropName:"notifAttachments",kind:"ModuleImport"}],type:"InlineCTACometNotifAttachment",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometNotificationsListItemAttachment_notification",fragmentName:"CometNotificationsListItemPageInviteAttachment_notifAttachments",fragmentPropName:"notifAttachments",kind:"ModuleImport"}],type:"PageInviteNotifAttachment",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometNotificationsListItemAttachment_notification",fragmentName:"CometNotificationsListItemQuickPromotionAttachment_notifAttachments",fragmentPropName:"notifAttachments",kind:"ModuleImport"}],type:"QuickPromotionNotifAttachment",abstractKey:null},{condition:"isToast",kind:"Condition",passingValue:!1,selections:[{kind:"InlineFragment",selections:[{args:null,documentName:"CometNotificationsListItemAttachment_notification",fragmentName:"CometNotificationsListItemInlineSurveyAttachment_attachment",fragmentPropName:"attachment",kind:"ModuleImport"}],type:"InlineSurveyNotifAttachment",abstractKey:null}]}],storageKey:null}],type:"Notification",abstractKey:null};e.exports=a}),null);
__d("CometNotificationsListItem_actor.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometNotificationsListItem_actor",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],type:"Actor",abstractKey:"__isActor"};e.exports=a}),null);
__d("CometNotificationsListItem_notification.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={kind:"Variable",name:"isToast",variableName:"isToast"};return{argumentDefinitions:[{defaultValue:!1,kind:"LocalArgument",name:"hideIcon"},{defaultValue:!1,kind:"LocalArgument",name:"isToast"},{defaultValue:!1,kind:"LocalArgument",name:"menuUseEntryPoint"},{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"CometNotificationsListItem_notification",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"notif_id",storageKey:null},{args:[a,{kind:"Variable",name:"menuUseEntryPoint",variableName:"menuUseEntryPoint"}],kind:"FragmentSpread",name:"CometNotificationsDropdownMenuButton_notification"},{args:[a],kind:"FragmentSpread",name:"CometNotificationsListItemAttachment_notification"},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"body",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometTextWithEntitiesRelay_textWithEntities"}],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"notif_attachments",plural:!0,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"StructuredSurveySession",kind:"LinkedField",name:"inline_survey",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}],type:"InlineSurveyNotifAttachment",abstractKey:null}],storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:56},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:56}],concreteType:"Image",kind:"LinkedField",name:"notif_image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"notif_type",storageKey:null},{args:null,kind:"FragmentSpread",name:"useCometNotificationURL_notification"},{alias:null,args:null,kind:"ScalarField",name:"seen_state",storageKey:null},{alias:"creation_time",args:null,concreteType:"CreationTimeWithRelativeText",kind:"LinkedField",name:"creation_time_with_relative_text",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"timestamp",storageKey:null}],storageKey:null},{condition:"hideIcon",kind:"Condition",passingValue:!1,selections:[{alias:null,args:null,concreteType:"GlyphIconData",kind:"LinkedField",name:"icon_data",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"reaction_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"glyph_name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"glyph_icon_url",storageKey:null}],storageKey:null}]},{alias:null,args:null,kind:"ScalarField",name:"tracking",storageKey:null},{condition:"isToast",kind:"Condition",passingValue:!1,selections:[{alias:null,args:null,concreteType:"NotificationContextInfo",kind:"LinkedField",name:"context_info",plural:!1,selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"short_text",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null}],storageKey:null}]},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_hidden",storageKey:null}]}],type:"Notification",abstractKey:null}}();e.exports=a}),null);
__d("CometNotificationsUpdateSeenStateMutation_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4323423014334765"}),null);
__d("CometNotificationsUpdateSeenStateMutation.graphql",["CometNotificationsUpdateSeenStateMutation_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"environment"},c={defaultValue:null,kind:"LocalArgument",name:"input"},d=[{kind:"Variable",name:"data",variableName:"input"}],e={alias:null,args:null,concreteType:"Notification",kind:"LinkedField",name:"notifications",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"seen_state",storageKey:null}],storageKey:null};return{fragment:{argumentDefinitions:[a,c],kind:"Fragment",metadata:null,name:"CometNotificationsUpdateSeenStateMutation",selections:[{alias:null,args:d,concreteType:"NotificationsUpdateSeenOrReadResponsePayload",kind:"LinkedField",name:"notifications_update_seen_or_read",plural:!1,selections:[e,{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometNotificationsBadgeCountFragment_viewer"}],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[c,a],kind:"Operation",name:"CometNotificationsUpdateSeenStateMutation",selections:[{alias:null,args:d,concreteType:"NotificationsUpdateSeenOrReadResponsePayload",kind:"LinkedField",name:"notifications_update_seen_or_read",plural:!1,selections:[e,{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:[{kind:"Variable",name:"environment",variableName:"environment"}],kind:"ScalarField",name:"notifications_unseen_count",storageKey:null}],storageKey:null}],storageKey:null}]},params:{id:b("CometNotificationsUpdateSeenStateMutation_facebookRelayOperation"),metadata:{},name:"CometNotificationsUpdateSeenStateMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("CometFriendNotificationsStateChangeSubscription_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="3291362027598695"}),null);
__d("CometFriendNotificationsStateChangeSubscription.graphql",["CometFriendNotificationsStateChangeSubscription_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"environment"},c={defaultValue:null,kind:"LocalArgument",name:"input"},d=[{alias:null,args:[{kind:"Variable",name:"data",variableName:"input"}],concreteType:"NotificationStateChangeSubscribeResponsePayload",kind:"LinkedField",name:"notification_state_change_subscribe",plural:!1,selections:[{alias:null,args:null,concreteType:"Notification",kind:"LinkedField",name:"notification",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"seen_state",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"notif_id",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:[{kind:"Variable",name:"environment",variableName:"environment"}],kind:"ScalarField",name:"notifications_unseen_count",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"last_update_timestamp",storageKey:null}],storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:[a,c],kind:"Fragment",metadata:null,name:"CometFriendNotificationsStateChangeSubscription",selections:d,type:"Subscription",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[c,a],kind:"Operation",name:"CometFriendNotificationsStateChangeSubscription",selections:d},params:{id:b("CometFriendNotificationsStateChangeSubscription_facebookRelayOperation"),metadata:{subscriptionName:"notification_state_change_subscribe"},name:"CometFriendNotificationsStateChangeSubscription",operationKind:"subscription",text:null}}}();e.exports=a}),null);
__d("getCometNotificationURL_notification.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"InlineDataFragment",name:"getCometNotificationURL_notification"};e.exports=a}),null);
__d("useCometNotificationURL_notification.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useCometNotificationURL_notification",selections:[{kind:"InlineDataFragmentSpread",name:"getCometNotificationURL_notification",selections:[{alias:null,args:[{kind:"Literal",name:"site",value:"comet"}],kind:"ScalarField",name:"url",storageKey:'url(site:"comet")'}]}],type:"Notification",abstractKey:null};e.exports=a}),null);
__d("CometToastCard.react",["fbt","ix","CometAccessibilityAnnouncement.react","CometCard.react","CometIcon.react","CometPressable.react","TetraTextPairing.react","fbicon","react","useCometUniqueID"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react");function a(a){var b=a.accessibilityAnnouncement,e=a.content,f=a.headline,g=a.onCloseClick;a=a.onMouseEnter;var k=c("useCometUniqueID")();return j.jsx(c("CometCard.react"),{background:"white",dropShadow:2,children:j.jsxs("div",{"aria-labelledby":k,className:"jbcpqwzg jq4qci2q cbu4d94t j83agx80 rq0escxv bi1v6m2q l82x9zwi uo3d90p7 pw54ja7n ue3kfks5",onMouseEnter:a,role:"complementary",children:[j.jsx("div",{className:"n1l5q3vz",children:j.jsxs("div",{className:"dati1w0a qt6c0cv9 hv4rvrfc jb3vyjys i1fnvgqd j83agx80 bp9cbjyn",children:[j.jsx("div",{id:k,children:j.jsx(c("TetraTextPairing.react"),{headline:f,level:4})}),j.jsx(c("CometPressable.react"),{display:"inline",label:h._(/*FBT_CALL*/"Close"/*FBT_CALL*/),onPress:g,overlayDisabled:!0,children:j.jsx("span",{className:"b73ngqbp taijpn5t rgmg9uty j83agx80 owxd89k7 n3ddgdk9 h2jyy9rg br7hx15l tdjehn4e bp9cbjyn",children:j.jsx(c("CometIcon.react"),{color:"primary",icon:d("fbicon")._(i("478231"),12),size:12})})})]})}),j.jsx("div",{className:"ecm0bbzt sj5x9vvc ezxwwwxp",children:e}),b!=null&&j.jsx(c("CometAccessibilityAnnouncement.react"),{children:b.text},b.id)]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useNotificationsImpressionLogger",["gkx","react","requireDeferred","usePartialViewImpression"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useCallback,i=c("requireDeferred")("NotifImpressionEventsFalcoEvent").__setRef("useNotificationsImpressionLogger");function a(a){var b=a.actorId,d=a.loggerContext,e=a.notifId,f=a.trackingData;a=h(function(a){a=a.visibleDuration;var c={notification_data:{duration:String(a),logger_context:d,notif_id:e,user_id:b},ref:"www_tab",tracking:JSON.stringify(f)};i.onReady(function(a){a=a.log;return a(function(){return c})})},[f,d,e,b]);a=c("usePartialViewImpression")({onImpressionEnd:a});return[a,null]}g["default"]=a}),98);
__d("CometNotificationsDropdownMenuContainer.entrypoint",["CometNotificationsDropdownMenuContainerQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var c={encoded_notif_id:a.encodedNotifId,scale:d("WebPixelRatio").get()};return{extraProps:{queryID:a.queryId},queries:{dropdownQueryRef:{parameters:b("CometNotificationsDropdownMenuContainerQuery$Parameters"),variables:c}}}},root:c("JSResourceForInteraction")("CometNotificationsDropdownMenuContainer.react").__setRef("CometNotificationsDropdownMenuContainer.entrypoint")};g["default"]=a}),98);
__d("CometNotificationsDropdownMenuButton.react",["fbt","CometListCellHoverButton.react","CometNotificationsDropdownMenuButton_notification.graphql","CometNotificationsDropdownMenuContainer.entrypoint","CometRelay","JSResourceForInteraction","react","requireDeferred"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react"),k=d("react").useCallback,l=c("requireDeferred")("OpenOptionsMenuFalcoEvent").__setRef("CometNotificationsDropdownMenuButton.react"),m=c("JSResourceForInteraction")("CometNotificationsDropdownMenu.react").__setRef("CometNotificationsDropdownMenuButton.react");function a(a){var e=d("CometRelay").useFragment(i!==void 0?i:i=b("CometNotificationsDropdownMenuButton_notification.graphql"),a.notification),f=a.queryId,g=a.userId,n=k(function(){l.onReady(function(a){a=a.log;return a(function(){return{notification_data:{alert_id:e==null?void 0:e.notif_id,logger_context:"www_tab",notif_type:e==null?void 0:e.notif_type,user_id:g},ref:"www_tab"}})})},[e,g]);return(e==null?void 0:e.id_for_entrypoint)==null?j.jsx(c("CometListCellHoverButton.react"),{hidden:a.hidden,label:h._(/*FBT_CALL*/"Options for this notification"/*FBT_CALL*/),onFocusChange:a.onFocusChange,onHoverChange:a.onHoverChange,onMenuStateChange:a.onMenuStateChange,onPress:n,popoverProps:{notification:e,queryID:f},popoverResource:m,popoverTriggerType:"lazy",popoverType:"menu"}):j.jsx(c("CometListCellHoverButton.react"),{entryPointParams:{encodedNotifId:e.id_for_entrypoint,queryId:a.queryId},hidden:a.hidden,label:h._(/*FBT_CALL*/"Options for this notification"/*FBT_CALL*/),onFocusChange:a.onFocusChange,onHoverChange:a.onHoverChange,onMenuStateChange:a.onMenuStateChange,onPress:n,popoverEntryPoint:c("CometNotificationsDropdownMenuContainer.entrypoint"),popoverProps:{},popoverTriggerType:"entryPoint",popoverType:"menu"})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometNotificationsListItemAttachment.react",["CometErrorBoundary.react","CometNotificationsListItemAttachment_notification.graphql","CometRelay","react","requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j=c("requireDeferred")("NotifCtaImpressionFalcoEvent").__setRef("CometNotificationsListItemAttachment.react");function a(a){var b=a.date,d=a.notification,e=a.notificationId;a=a.onPress;return i.jsx(c("CometErrorBoundary.react"),{children:i.jsx(k,{date:b,notification:d,notificationId:e,onPress:a})})}a.displayName=a.name+" [from "+f.id+"]";function k(a){var c=a.date,e=a.notification,f=a.notificationId,g=a.onPress;a=d("CometRelay").useFragment(h!==void 0?h:h=b("CometNotificationsListItemAttachment_notification.graphql"),e);var k=function(a){j.onReady(function(b){b=b.log;b(function(){return{cta_type:a,notif_id:f}})})};e=a.notif_attachments;if(e==null)return null;a=e.map(function(a,b){return i.jsx(d("CometRelay").MatchContainer,{match:a,props:{date:c,notifAttachments:a,notificationId:f,onImpression:k,onPress:g}},b)}).filter(Boolean);return a.length===0?null:a}g["default"]=a}),98);
__d("CometNotificationsListItemSeenContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext(function(){});g["default"]=b}),98);
__d("cometNotificationsListItemIcon",["ix","ImageIconSource","getReactionSVGSource"],(function(a,b,c,d,e,f,g,h){"use strict";var i={app_facebook:h("958818"),app_instagram:h("958820"),app_messenger:h("958823"),app_pages:h("958824"),app_rooms:h("1395467"),"app-oculus":h("20924"),arrows_up_down:h("958826"),badge_heart:h("958827"),ballot_box:h("175937"),bar_chart:h("958828"),bookmark:h("958830"),breaking_news:h("958831"),briefcase:h("958832"),cake:h("958833"),calendar:h("958835"),camcorder_live:h("958836"),card:h("1289629"),caution_triangle:h("958837"),circle_3:h("958838"),"circle-heart-ribbon":h("12810"),comment:h("958852"),comment_star:h("958851"),"default":h("958829"),"desktop-mobile":h("1964681"),direct:h("958854"),friend_add:h("958857"),friends:h("958858"),fundraiser:h("958859"),games:h("958821"),group:h("958860"),headphones:h("2007797"),heart_lock:h("1250959"),high_five_hands:h("958861"),instagram_reels:h("1951540"),marketplace:h("894424"),"messages-spotlight":h("150623"),notif_messages_question_live:h("1495236"),"notif-meta":h("184314"),"notif-star-tip":h("1970274"),pencil:h("958866"),pencil_checkmark:h("958865"),photo:h("958867"),pin:h("958868"),play_circle:h("958869"),poke:h("958870"),politics:h("958871"),polls:h("958872"),posts:h("958873"),profile_circle:h("958874"),relationship:h("958875"),safety_check:h("958876"),share:h("958877"),shield:h("958878"),shops:h("1686153"),spark_ar:h("1079479"),stories:h("1819883"),tag:h("958882"),topics:h("958883"),volunteer:h("1185872"),watch_tv:h("958885"),water:h("958886")};function j(a){return new(c("ImageIconSource"))(i[a]||i["default"],28,28)}function a(a,b,d){if(b!=null){var e=c("getReactionSVGSource")(b);if(e!=null)return new(c("ImageIconSource"))(e,28,28);else if(b===17&&d!=null)return new(c("ImageIconSource"))(d,28,28)}return a!=null?j(a):null}g["default"]=a}),98);
__d("isAccountsCenterURI",["isFacebookURI"],(function(a,b,c,d,e,f,g){"use strict";function a(a){return c("isFacebookURI")(a)&&a.getSubdomain()==="accountscenter"}g["default"]=a}),98);
__d("getCometNotificationURL",["CometRelay","ConstUriUtils","absoluteToRelative","getCometNotificationURL_notification.graphql","isAccountsCenterURI","isBulletinDotComURI","isBusinessURI","isDevelopersURI"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a){a=d("CometRelay").readInlineData(h!==void 0?h:h=b("getCometNotificationURL_notification.graphql"),a);a=a==null?void 0:a.url;if(a==null)return null;var e=d("ConstUriUtils").getUri(a);if(e==null)return a;if(window.location.hostname.startsWith("www.facebook.com")||c("isBusinessURI")(e)||c("isDevelopersURI")(e)||c("isBulletinDotComURI")(e)||c("isAccountsCenterURI")(e))return a;else return c("absoluteToRelative")(a)}g["default"]=a}),98);
__d("useCometNotificationURL",["CometRelay","getCometNotificationURL","useCometNotificationURL_notification.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a){a=d("CometRelay").useFragment(h!==void 0?h:h=b("useCometNotificationURL_notification.graphql"),a);return c("getCometNotificationURL")(a)}g["default"]=a}),98);
__d("CometNotificationsUpdateSeenStateMutation",["CometNotificationsThinClientConnectionHandler","CometNotificationsUpdateSeenStateMutation.graphql","CometRelay","relay-runtime"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h!==void 0?h:h=b("CometNotificationsUpdateSeenStateMutation.graphql"),j=function(a){return a.get(d("relay-runtime").VIEWER_ID)},k=function(a){return a.getValue("notifications_unseen_count",{environment:"MAIN_SURFACE"})},l=function(a){a=j(a);if(a==null)return;a=d("CometNotificationsThinClientConnectionHandler").getConnection(a,"CometNotificationsList_notifications_page");if(a==null)return;a=a.getLinkedRecords("edges");if(a==null||a.length===0)return;var b=[];a.forEach(function(a){if(a==null)return;a=a.getLinkedRecord("node");if(a==null)return;var c=a.getType();if(c!=="NotifPageNotificationRow"&&c!=="NotifPageCachedNotificationRow")return;c=a.getLinkedRecord("notif");if(c==null)return;b.push(c)});return b};function a(a,b){a=l(a);if(a==null||a.length===0)return;var c=a.findIndex(function(a){return a.getValue("id")===b});if(c<0)return;a[c]!=null&&a[c].setValue("SEEN_BUT_UNREAD","seen_state")}function c(a,b){a=l(a);if(a==null||a.length===0)return;var c=a.findIndex(function(a){return a.getValue("id")===b});if(c<0)return;a[c]!=null&&a[c].setValue("SEEN_AND_READ","seen_state")}var m=function(a,b){a=l(a);if(a==null||a.length===0)return;a.forEach(function(a){return b(a)})};function e(a){var b=function(a){if(a==null)return;a.getValue("seen_state")==="UNSEEN_AND_UNREAD"&&a.setValue("SEEN_BUT_UNREAD","seen_state")};m(a,b)}function f(a){var b=function(a){if(a==null)return;(a.getValue("seen_state")==="UNSEEN_AND_UNREAD"||a.getValue("seen_state")==="SEEN_BUT_UNREAD")&&a.setValue("SEEN_AND_READ","seen_state")};m(a,b)}function n(a){a=j(a);if(a==null)return;var b=k(a);if(b==null)return;b=+b-1;a.setValue(Math.max(0,b),"notifications_unseen_count",{environment:"MAIN_SURFACE"})}function o(a){a=j(a);if(a==null)return;a.setValue(0,"notifications_unseen_count",{environment:"MAIN_SURFACE"})}function p(a,b,c){var e=c.mutationLogger(),f=e.logOnError,g=e.logOnSuccess;return d("CometRelay").commitMutation(a,{mutation:i,onCompleted:function(){g(),c.onSuccess&&c.onSuccess()},onError:function(a){f(a),c.onError&&c.onError(a)},optimisticUpdater:c.updater,variables:b})}g.updateSingleNotifSeenState=a;g.updateSingleNotifReadState=c;g.updateMultiNotifSeenState=e;g.updateMultiNotifReadState=f;g.lowerBadgeCountByOne=n;g.clearBadgeCount=o;g.CometNotificationsUpdateSeenStateMutation=p;g.mutation=i}),98);
__d("useScrollToNotif",["CometRouteMatch","XCometNotificationsControllerRouteBuilder","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useRef;a=function(a){var b=d("CometRouteMatch").useCurrentRouteMatcher(d("CometRouteMatch").MatchFunctions.urlMatchFunction),e=d("CometRouteMatch").useHostedRouteMatcher(d("CometRouteMatch").MatchFunctions.urlMatchFunction);e=a!=null?e(a):!1;a=b(c("XCometNotificationsControllerRouteBuilder").buildURL({}).toString());b=h(e&&!a);return[e,b]};g.useScrollToNotif=a}),98);
__d("CometNotificationsListItem.react",["fbt","CometBadge.react","CometBoldedEntityRenderer","CometEmojiTransform","CometEmoticonTransform","CometFocusTableContext","CometNotificationsDropdownMenuButton.react","CometNotificationsListItemAttachment.react","CometNotificationsListItemSeenContext","CometNotificationsListItem_actor.graphql","CometNotificationsListItem_notification.graphql","CometNotificationsMutationLogger","CometNotificationsTimestamp.react","CometPressable.react","CometRelay","CometTextWithEntitiesRelay.react","FocusWithinHandler.react","TetraAccessoryListCell.react","TetraIcon.react","cometNotificationsListItemIcon","mergeRefs","react","requireDeferred","scrollIntoView","stylex","useCometNotificationURL","useHandleUpdateSingleNotifReadState","useMenuButtonVisibilityState","useNotificationsImpressionLogger","useScrollToNotif","useVisibilityObserver"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=d("react");e=d("react");var l=e.useCallback,m=e.useContext,n=e.useLayoutEffect,o=e.useMemo,p=e.useRef,q=c("requireDeferred")("NotifClickEventsFalcoEvent").__setRef("CometNotificationsListItem.react"),r={dot:{marginEnd:"cgat1ltu",marginStart:"kkf49tns"},hiddenLabel:{clip:"q45zohi1",clipPath:"g0aa4cga",position:"pmk7jnqg",wordBreak:"dxrwds1f"},listItemContainer:{position:"l9j0dhe7"},pressable:{alignItems:"bp9cbjyn",display:"j83agx80",height:"m7zwrmfr",justifyContent:"taijpn5t",paddingStart:"b3onmgus",width:"odw8uiq3"},spacer:{height:"cyypbtt7",width:"fwizqjfa"}},s={"*":[c("CometBoldedEntityRenderer")]},t=[c("CometEmoticonTransform")(),c("CometEmojiTransform")()],u=i!==void 0?i:i=b("CometNotificationsListItem_actor.graphql"),v=j!==void 0?j:j=b("CometNotificationsListItem_notification.graphql");function a(a){var b=a.actor,e=a.hideMenuButton,f=e===void 0?!1:e;e=a.isFromPageNotification;var g=a.isNotificationsRoute,i=g===void 0?!1:g;g=a.loggerContext;var j=g===void 0?"www_tab":g;g=a.notification;var w=a.onClick,x=a.onClose,y=a.preventLocalNavigation,z=a.queryID,A=a.replace,B=a.routeTarget,C=a.shouldOpenInBlankTarget,D=a.shouldPrefetch;D=D===void 0?!1:D;var E=a.showSelectedState,F=E===void 0?!1:E,G=a.trackingData;E=d("CometRelay").useFragment(u,b);var H=d("CometRelay").useFragment(v,g);a=c("useCometNotificationURL")(H);b=H.body;g=H.context_info;var I=H.creation_time,J=H.id,aa=H.notif_attachments,K=H.notif_id,L=H.notif_image,M=H.notif_type,N=H.seen_state,O=H.tracking,P=p(null),Q=E==null?void 0:E.id,R=(E=e)!=null?E:!1;e=babelHelpers["extends"]({navigation_source:"notifications_click"},M!=null?{notif_type:M}:null);E=o(function(){var a;return(a=G)!=null?a:{notif_tracking:O}},[O,G]);var ba={onNavigate:x,passthroughProps:{initialTracePolicy:"comet.notifications",notification_id:(x=K)!=null?x:void 0,notificationTracking:E,notificationType:M,ref:"notification"},prefetchQueriesOnHover:D,preventLocalNavigation:(x=y)!=null?x:!1,productAttribution:{tap_point:"via_notification"},replace:(D=A)!=null?D:void 0,routeTarget:R?"content":(y=B)!=null?y:void 0,target:C===!0?"_blank":void 0,traceParams:e,url:(x=a)!=null?x:void 0};A=d("useScrollToNotif").useScrollToNotif(a);var ca=A[0],S=A[1],T=S.current;D=m(c("CometFocusTableContext"));B=D.FocusCell;y=D.FocusRow;var da=(C=B)!=null?C:k.Fragment,ea=(e=y)!=null?e:k.Fragment;n(function(){P.current!=null&&T&&(c("scrollIntoView")(P.current,{behavior:"auto",verticalAlign:"center"}),S.current=!1)},[T,S]);var U=c("useHandleUpdateSingleNotifReadState")({accessibilityString:h._(/*FBT_CALL*/"Notification was marked read."/*FBT_CALL*/),mutationLogger:d("CometNotificationsMutationLogger").notificationMarkAsReadStart,notifId:J,queryID:z,seenState:N,timestamp:null,updateType:"MARK_READ"}),fa=l(function(){J!=null&&Q!=null&&(w&&w(),q.onReady(function(a){a=a.log;return a(function(){var a;return{notification_data:{alert_id:(a=K)!=null?a:"",logger_context:(a=j)!=null?a:"",to_user:Q},ref:i?"notifications_route":"www_tab",tracking:JSON.stringify(G)}})}),U())},[Q,U,i,j,K,J,w,G]),V=b;x=I==null?void 0:I.timestamp;a=L==null?void 0:L.uri;A=c("useMenuButtonVisibilityState")();var ga=A[0];D=A[1];var W=D.setListItemHovered,ha=D.setMenuBtnFocused,ia=D.setMenuBtnHovered,ja=D.setMenuOpened,ka=l(function(){W(!1)},[W]),la=l(function(){W(!0)},[W]);B=c("useNotificationsImpressionLogger")({actorId:Q,loggerContext:j,notifId:K,trackingData:E});var X=B[0],ma=B[1],na=m(c("CometNotificationsListItemSeenContext")),Y=c("useVisibilityObserver")({onVisible:function(){na(J)}}),oa=o(function(){if(j==="www_tab"||j==="beeper")return c("mergeRefs")(X,P,Y);else return P},[Y,j,X]);if(J==null||V==null||a==null||N==null||x==null)return null;C=new Date(x*1e3);var Z=N==="SEEN_AND_READ";e=(y=H.icon_data)==null?void 0:y.reaction_type;I=(b=H.icon_data)==null?void 0:b.glyph_name;A=(L=H.icon_data)==null?void 0:L.glyph_icon_url;D=c("cometNotificationsListItemIcon")(I,e,A);E=D!=null?{backgroundColor:"transparent",icon:k.jsx(c("TetraIcon.react"),{color:"white",icon:D}),size:28,type:"activityBadge"}:null;e===17&&(E.overflow="visible");B=k.jsx(c("CometNotificationsTimestamp.react"),{date:C,seenAndRead:Z});var pa={addOn:E,shape:"circle",size:56,source:{uri:a},type:"profile-photo"},qa={component:k.jsx(c("CometNotificationsListItemAttachment.react"),{date:C,notification:H,notificationId:(x=H.notif_id)!=null?x:"",onPress:U}),type:"override-column"};N=H==null?void 0:H.is_hidden;if(N===!0)return null;var $=aa.find(function(a){return a.inline_survey!=null})!=null;b=g==null?void 0:(y=g.short_text)==null?void 0:y.text;var ra=k.jsxs(k.Fragment,{children:[B,b!=null&&b!==""&&k.jsxs(k.Fragment,{children:[k.jsx("span",{"aria-hidden":"true",className:c("stylex")(r.dot),children:"\xb7"}),b]})]});return k.jsx(c("FocusWithinHandler.react"),{children:function(a,b){return k.jsx(ea,{children:k.jsxs("div",{className:c("stylex")(r.listItemContainer),onMouseEnter:la,onMouseLeave:ka,ref:oa,role:"row",children:[ma,k.jsx(c("TetraAccessoryListCell.react"),{addOnBottom:qa,addOnPrimary:pa,addOnSecondary:{addOn:Z?k.jsx("div",{className:c("stylex")(r.spacer)}):k.jsx(c("CometPressable.react"),{expanding:!0,onPress:U,overlayDisabled:!0,role:"none",testid:void 0,xstyle:r.pressable,children:k.jsx(c("CometBadge.react"),{color:"blue",isProfileBadge:!0,size:12})}),type:"body"},addOnSecondaryVerticalAlign:$?"top":"center",body:k.jsxs(k.Fragment,{children:[Z?null:k.jsx("div",{className:c("stylex")(r.hiddenLabel),children:h._(/*FBT_CALL*/"Unread"/*FBT_CALL*/)}),k.jsx(c("CometTextWithEntitiesRelay.react"),{renderers:s,textWithEntities:V,transforms:t})]}),bodyColor:Z?"secondary":"primary",bodyLineLimit:3,linkProps:ba,meta:ra,metaLineLimit:1,onPress:fa,role:"none",selected:ca&&F,testid:void 0}),M!=="friend"&&M!=="page_invite"&&!$?k.jsx(da,{children:k.jsx(c("CometNotificationsDropdownMenuButton.react"),{hidden:f||R||!(a&&b)&&!ga,notification:H,onFocusChange:ha,onHoverChange:ia,onMenuStateChange:ja,queryId:z,userId:Q})}):null]})})}})}a.displayName=a.name+" [from "+f.id+"]";e=k.memo(a);g["default"]=e}),98);
__d("FriendingCometConfirmedFriendRequestToast.react",["fbt","CometNotificationsListItem.react","CometNotificationsMutationLogger","CometNotificationsUpdateSeenStateMutation","CometRelay","CometToastCard.react","react","recoverableViolation"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");b=d("react");var j=b.useCallback,k=b.useRef,l="MARK_SEEN",m="comet_toast",n="beeper";function a(a){var b,e=a.onCloseClick;a=a.response;a=a==null?void 0:a.friend_request_confirm_subscribe;var f=a==null?void 0:a.notif,g=f==null?void 0:f.id,o=f==null?void 0:f.seen_state,p=a==null?void 0:a.new_friend;a=a==null?void 0:(a=a.viewer)==null?void 0:a.actor;b=f==null?void 0:(b=f.body)==null?void 0:b.text;var q=k(!1),r=d("CometRelay").useRelayEnvironment(),s=j(function(){if(g==null||o!=="UNSEEN_AND_UNREAD"||q.current===!0)return;d("CometNotificationsUpdateSeenStateMutation").CometNotificationsUpdateSeenStateMutation(r,{environment:"FRIENDS_TAB",input:{environment:"FRIENDS_TAB",is_comet:!0,last_notif_sync_time:0,notif_ids:[g],source:m,update_type:l}},{mutationLogger:d("CometNotificationsMutationLogger").notificationMarkAsSeenStart,onError:function(a){c("recoverableViolation")("Failed to mark friend confirmed notification as seen in the toast: ","growth_friending",{error:a})},onSuccess:function(){q.current=!0},updater:function(a){d("CometNotificationsUpdateSeenStateMutation").updateSingleNotifReadState(a,g)}})},[r,g,o]);if(p==null||f==null)return null;p=g==null||b==null?null:{id:g,text:b};return i.jsx(c("CometToastCard.react"),{accessibilityAnnouncement:p,content:i.jsx("div",{role:"grid",children:i.jsx(c("CometNotificationsListItem.react"),{actor:a,loggerContext:n,notification:f,onClick:e})}),headline:h._(/*FBT_CALL*/"New notification"/*FBT_CALL*/),onCloseClick:e,onMouseEnter:s})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("FriendingCometFriendRequestToast.react",["fbt","CometNotificationsListItem.react","CometNotificationsMutationLogger","CometNotificationsUpdateSeenStateMutation","CometRelay","CometToastCard.react","react","recoverableViolation"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");b=d("react");var j=b.useCallback,k=b.useRef,l="MARK_SEEN",m="comet_toast",n="beeper";function a(a){var b,e=a.onCloseClick;a=a.response;a=a==null?void 0:a.friend_request_receive_subscribe;var f=a==null?void 0:a.notif,g=f==null?void 0:f.id,o=f==null?void 0:f.seen_state;a=a==null?void 0:(a=a.viewer)==null?void 0:a.actor;b=f==null?void 0:(b=f.body)==null?void 0:b.text;var p=k(!1),q=d("CometRelay").useRelayEnvironment(),r=j(function(){if(g==null||o!=="UNSEEN_AND_UNREAD"||p.current===!0)return;d("CometNotificationsUpdateSeenStateMutation").CometNotificationsUpdateSeenStateMutation(q,{environment:"FRIENDS_TAB",input:{environment:"FRIENDS_TAB",is_comet:!0,last_notif_sync_time:0,notif_ids:[g],source:m,update_type:l}},{mutationLogger:d("CometNotificationsMutationLogger").notificationMarkAsSeenStart,onError:function(a){c("recoverableViolation")("Failed to mark friend notification as seen in the toast: ","growth_friending",{error:a})},onSuccess:function(){p.current=!0},updater:function(a){d("CometNotificationsUpdateSeenStateMutation").updateSingleNotifSeenState(a,g),d("CometNotificationsUpdateSeenStateMutation").lowerBadgeCountByOne(a)}})},[q,g,o]);if(f==null)return null;b=g==null||b==null?null:{id:g,text:b};return i.jsx(c("CometToastCard.react"),{accessibilityAnnouncement:b,content:i.jsx("div",{role:"grid",children:i.jsx(c("CometNotificationsListItem.react"),{actor:a,loggerContext:n,notification:f,onClick:e})}),headline:h._(/*FBT_CALL*/"New notification"/*FBT_CALL*/),onCloseClick:e,onMouseEnter:r})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("FriendingCometSubscriptionToastHelper",["react","requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=c("requireDeferred")("FriendingCometConfirmedFriendRequestToast.react").__setRef("FriendingCometSubscriptionToastHelper"),j=c("requireDeferred")("FriendingCometFriendRequestToast.react").__setRef("FriendingCometSubscriptionToastHelper"),k=new Set(),l={};function a(a,b){var c,d=a==null?void 0:a.friend_request_receive_subscribe;c=d==null?void 0:(c=d.notif)==null?void 0:c.seen_state;var e=d==null?void 0:(d=d.notif)==null?void 0:d.notif_id;c==="UNSEEN_AND_UNREAD"&&e!=null&&(k.add(e),j.onReadyImmediately(function(c){if(!k.has(e))return;k["delete"](e);var d=b.push(h.jsx(c,{onCloseClick:function(){return b.expire(d)},response:a}),5e3);l[e]=d}))}function b(a,b){var c,d=a==null?void 0:a.friend_request_confirm_subscribe;c=d==null?void 0:(c=d.notif)==null?void 0:c.seen_state;var e=d==null?void 0:(d=d.notif)==null?void 0:d.notif_id;c==="UNSEEN_AND_UNREAD"&&e!=null&&(k.add(e),i.onReadyImmediately(function(c){if(!k.has(e))return;k["delete"](e);var d=b.push(h.jsx(c,{onCloseClick:function(){return b.expire(d)},response:a}),5e3);l[e]=d}))}function e(a,b,c){var d=c.getState();a!=="UNSEEN_AND_UNREAD"&&b in l&&((a=d[l[b]])==null?void 0:a.shown)!==!0&&(c["delete"](l[b]),delete l[b],k["delete"](b))}g.pushFriendingCometToast=a;g.pushFriendingConfirmedCometToast=b;g.deleteToastIfSeen=e}),98);
__d("CometFriendNotificationsStateChangeSubscription",["CometFriendNotificationsStateChangeSubscription.graphql","CometRelay","FriendingCometSubscriptionToastHelper"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h!==void 0?h:h=b("CometFriendNotificationsStateChangeSubscription.graphql");function a(a,b){var c=function(a){a=a==null?void 0:(a=a.notification_state_change_subscribe)==null?void 0:a.notification;var c=a==null?void 0:a.seen_state;a=a==null?void 0:a.notif_id;c!=null&&a!=null&&d("FriendingCometSubscriptionToastHelper").deleteToastIfSeen(c,a,b)};return d("CometRelay").requestSubscription(a,{onNext:c,subscription:i,variables:{environment:"FRIENDS_TAB",input:{environment:"FRIENDS_TAB"}}})}g.subscription=i;g.subscribeToFriendNotifs=a}),98);