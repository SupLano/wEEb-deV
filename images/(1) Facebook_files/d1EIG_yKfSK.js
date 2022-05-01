if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }

__d("useCometPageInviteFromAdminsMutation_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="3937456862959128"}),null);
__d("useCometPageInviteFromAdminsMutation.graphql",["useCometPageInviteFromAdminsMutation_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"feedbackID"},c={defaultValue:null,kind:"LocalArgument",name:"input"},d=[{alias:null,args:[{kind:"Variable",name:"data",variableName:"input"}],concreteType:"InvitePostLikerToLikePageResponsePayload",kind:"LinkedField",name:"invite_post_liker_to_like_page",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"reactor",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:[{kind:"Variable",name:"feedback_id",variableName:"feedbackID"}],kind:"ScalarField",name:"invite_status_in_feedback",storageKey:null}],storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:[a,c],kind:"Fragment",metadata:null,name:"useCometPageInviteFromAdminsMutation",selections:d,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[c,a],kind:"Operation",name:"useCometPageInviteFromAdminsMutation",selections:d},params:{id:b("useCometPageInviteFromAdminsMutation_facebookRelayOperation"),metadata:{},name:"useCometPageInviteFromAdminsMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("useCometProfileListFollowerInviteButton_user.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"feedbackTargetID"}],kind:"Fragment",metadata:null,name:"useCometProfileListFollowerInviteButton_user",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:[{kind:"Variable",name:"feedback_id",variableName:"feedbackTargetID"}],kind:"ScalarField",name:"follower_invite_status_in_feedback",storageKey:null}],type:"User",abstractKey:null};e.exports=a}),null);
__d("useCometProfileListPageInviteButton_user.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"feedbackTargetID"}],kind:"Fragment",metadata:null,name:"useCometProfileListPageInviteButton_user",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:[{kind:"Variable",name:"feedback_id",variableName:"feedbackTargetID"}],kind:"ScalarField",name:"invite_status_in_feedback",storageKey:null}],type:"User",abstractKey:null};e.exports=a}),null);
__d("useCometProfilePlusSendPostLikerFollowerInviteMutation_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4467801059901294"}),null);
__d("useCometProfilePlusSendPostLikerFollowerInviteMutation.graphql",["useCometProfilePlusSendPostLikerFollowerInviteMutation_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"feedbackID"},c={defaultValue:null,kind:"LocalArgument",name:"input"},d=[{alias:null,args:[{kind:"Variable",name:"data",variableName:"input"}],concreteType:"ProfilePlusSendPostLikerFollowerInviteResponsePayload",kind:"LinkedField",name:"profile_plus_send_post_liker_follower_invite",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"reactor",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:[{kind:"Variable",name:"feedback_id",variableName:"feedbackID"}],kind:"ScalarField",name:"follower_invite_status_in_feedback",storageKey:null}],storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:[a,c],kind:"Fragment",metadata:null,name:"useCometProfilePlusSendPostLikerFollowerInviteMutation",selections:d,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[c,a],kind:"Operation",name:"useCometProfilePlusSendPostLikerFollowerInviteMutation",selections:d},params:{id:b("useCometProfilePlusSendPostLikerFollowerInviteMutation_facebookRelayOperation"),metadata:{},name:"useCometProfilePlusSendPostLikerFollowerInviteMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("CometUFIReactionsDialogQuery.graphql",["CometUFIReactionsDialogQuery_facebookRelayOperation","relay-runtime"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"feedbackTargetID"},c={defaultValue:null,kind:"LocalArgument",name:"reactionID"},d={defaultValue:null,kind:"LocalArgument",name:"reactionType"},e={defaultValue:null,kind:"LocalArgument",name:"scale"},f={defaultValue:null,kind:"LocalArgument",name:"stagesSessionID"},g=[{kind:"Variable",name:"id",variableName:"feedbackTargetID"}],h={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},i={alias:null,args:null,concreteType:"Group",kind:"LinkedField",name:"associated_group",plural:!1,selections:[h],storageKey:null},j={alias:null,args:null,concreteType:"ReactionDisplayConfig",kind:"LinkedField",name:"reaction_display_config",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"reaction_display_strategy",storageKey:null},{args:null,documentName:"CometUFIReactionsDialogQuery",fragmentName:"CometUFIReactionDialogExplanationString_reactionDisplayConfig",fragmentPropName:"reactionDisplayConfig",kind:"ModuleImport"}],storageKey:null},k={alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null},l={kind:"Variable",name:"scale",variableName:"scale"},m={alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},n=[m],o={alias:null,args:null,concreteType:"TopReactionsConnection",kind:"LinkedField",name:"top_reactions",plural:!1,selections:[k,{alias:null,args:null,concreteType:"TopReactionSummaryPerReaction",kind:"LinkedField",name:"summary",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"reaction_count",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"reaction_count_reduced",storageKey:null},{alias:null,args:null,concreteType:"FeedbackReactionInfo",kind:"LinkedField",name:"reaction",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"reaction_type",storageKey:null},h,{alias:null,args:null,kind:"ScalarField",name:"localized_name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"color",storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:20},l,{kind:"Literal",name:"width",value:20}],concreteType:"Image",kind:"LinkedField",name:"face_image",plural:!1,selections:n,storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null},p={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},q=[{kind:"Literal",name:"first",value:10},{kind:"Literal",name:"orderby",value:["is_viewer","is_viewer_followed_creator","is_viewer_friend","importance"]},{kind:"Variable",name:"reaction_id",variableName:"reactionID"},{kind:"Variable",name:"reaction_type",variableName:"reactionType"}],r=[{kind:"Variable",name:"feedback_id",variableName:"feedbackTargetID"}],s={alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"first_story_to_show",plural:!1,selections:[h,{alias:null,args:null,concreteType:"StoryCardSeenState",kind:"LinkedField",name:"story_card_seen_state",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_seen_by_viewer",storageKey:null}],storageKey:null}],storageKey:null};m={kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:40},l,{kind:"Literal",name:"width",value:40}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[m,{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null}],storageKey:null},{kind:"InlineFragment",selections:[{alias:"profile_url",args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],type:"Entity",abstractKey:"__isEntity"},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"pages_story_bucket_v2",plural:!1,selections:[p,h,s],storageKey:null}],type:"Page",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Literal",name:"first",value:1}],concreteType:"DirectInboxBroadcastBucketConnection",kind:"LinkedField",name:"story_bucket",plural:!1,selections:[{alias:null,args:null,concreteType:"DirectMessageThreadBucket",kind:"LinkedField",name:"nodes",plural:!0,selections:[h,s],storageKey:null}],storageKey:"story_bucket(first:1)"},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"availability",storageKey:null}]}],type:"User",abstractKey:null}],type:"Actor",abstractKey:"__isActor"};return{fragment:{argumentDefinitions:[a,c,d,e,f],kind:"Fragment",metadata:null,name:"CometUFIReactionsDialogQuery",selections:[{alias:null,args:g,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{kind:"InlineFragment",selections:[{args:null,kind:"FragmentSpread",name:"CometUFIReactionsDialogTabContent_reactors"},i,j,o],type:"Feedback",abstractKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[a,e,d,c,f],kind:"Operation",name:"CometUFIReactionsDialogQuery",selections:[{alias:null,args:g,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[p,h,{kind:"InlineFragment",selections:[{alias:null,args:q,concreteType:"ReactorsOfContentConnection",kind:"LinkedField",name:"reactors",plural:!1,selections:[{alias:null,args:null,concreteType:"ReactorsOfContentEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"FeedbackReaction",kind:"LinkedField",name:"feedback_reaction",plural:!1,selections:[{alias:null,args:[l],concreteType:"Image",kind:"LinkedField",name:"face_image",plural:!1,selections:n,storageKey:null},h],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[h,p,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"MutualFriendsConnection",kind:"LinkedField",name:"mutual_friends",plural:!1,selections:[k],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"subscribe_status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"secondary_subscribe_status",storageKey:null},{alias:null,args:r,kind:"ScalarField",name:"invite_status_in_feedback",storageKey:null},{alias:null,args:r,kind:"ScalarField",name:"follower_invite_status_in_feedback",storageKey:null},{alias:null,args:[{kind:"Variable",name:"session_id",variableName:"stagesSessionID"}],concreteType:"XFBStagesProfileInfoData",kind:"LinkedField",name:"stages_profile_info_data",plural:!1,selections:[{args:null,documentName:"CometUFIReactionsDialogTabContent_reactors_stagesProfileInfoData",fragmentName:"CometProfileListStagesUserRow_stagesProfileInfoData",fragmentPropName:"stagesProfileInfoData",kind:"ModuleImport"}],storageKey:null},{kind:"InlineFragment",selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"can_viewer_message",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"friendship_status",storageKey:null}],type:"User",abstractKey:null}],type:"Profile",abstractKey:"__isProfile"},m],type:"User",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_viewer_fan",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"can_viewer_like",storageKey:null},m],type:"Page",abstractKey:null},{kind:"InlineFragment",selections:[m],type:"ContextualProfile",abstractKey:"__isContextualProfile"}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"page_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"has_next_page",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"end_cursor",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:q,filters:["reaction_type","reaction_id","orderby"],handle:"connection",key:"CometUFIReactionsDialogTabContent_reactors",kind:"LinkedHandle",name:"reactors"},i,j,o],type:"Feedback",abstractKey:null}],storageKey:null}]},params:{id:b("CometUFIReactionsDialogQuery_facebookRelayOperation"),metadata:{},name:"CometUFIReactionsDialogQuery",operationKind:"query",text:null}}}();b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("CometUFIReactionsDialogTabContentRefetchQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="8013121342046989"}),null);
__d("CometUFIReactionsDialogTabContentRefetchQuery.graphql",["CometUFIReactionsDialogTabContentRefetchQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:10,kind:"LocalArgument",name:"count"},c={defaultValue:null,kind:"LocalArgument",name:"cursor"},d={defaultValue:null,kind:"LocalArgument",name:"feedbackTargetID"},e={defaultValue:null,kind:"LocalArgument",name:"id"},f={defaultValue:null,kind:"LocalArgument",name:"reactionID"},g={defaultValue:null,kind:"LocalArgument",name:"reactionType"},h={defaultValue:null,kind:"LocalArgument",name:"scale"},i={defaultValue:null,kind:"LocalArgument",name:"stagesSessionID"},j=[{kind:"Variable",name:"id",variableName:"id"}],k={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},l={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},m=[{kind:"Variable",name:"after",variableName:"cursor"},{kind:"Variable",name:"first",variableName:"count"},{kind:"Literal",name:"orderby",value:["is_viewer","is_viewer_followed_creator","is_viewer_friend","importance"]},{kind:"Variable",name:"reaction_id",variableName:"reactionID"},{kind:"Variable",name:"reaction_type",variableName:"reactionType"}],n={kind:"Variable",name:"scale",variableName:"scale"},o={alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},p=[{kind:"Variable",name:"feedback_id",variableName:"feedbackTargetID"}],q={alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"first_story_to_show",plural:!1,selections:[l,{alias:null,args:null,concreteType:"StoryCardSeenState",kind:"LinkedField",name:"story_card_seen_state",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_seen_by_viewer",storageKey:null}],storageKey:null}],storageKey:null};q={kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:40},n,{kind:"Literal",name:"width",value:40}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[o,{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null}],storageKey:null},{kind:"InlineFragment",selections:[{alias:"profile_url",args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],type:"Entity",abstractKey:"__isEntity"},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"pages_story_bucket_v2",plural:!1,selections:[k,l,q],storageKey:null}],type:"Page",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Literal",name:"first",value:1}],concreteType:"DirectInboxBroadcastBucketConnection",kind:"LinkedField",name:"story_bucket",plural:!1,selections:[{alias:null,args:null,concreteType:"DirectMessageThreadBucket",kind:"LinkedField",name:"nodes",plural:!0,selections:[l,q],storageKey:null}],storageKey:"story_bucket(first:1)"},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"availability",storageKey:null}]}],type:"User",abstractKey:null}],type:"Actor",abstractKey:"__isActor"};return{fragment:{argumentDefinitions:[a,c,d,e,f,g,h,i],kind:"Fragment",metadata:null,name:"CometUFIReactionsDialogTabContentRefetchQuery",selections:[{alias:null,args:j,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{args:[{kind:"Variable",name:"count",variableName:"count"},{kind:"Variable",name:"cursor",variableName:"cursor"}],kind:"FragmentSpread",name:"CometUFIReactionsDialogTabContent_reactors"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[a,c,d,f,g,h,i,e],kind:"Operation",name:"CometUFIReactionsDialogTabContentRefetchQuery",selections:[{alias:null,args:j,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[k,l,{kind:"InlineFragment",selections:[{alias:null,args:m,concreteType:"ReactorsOfContentConnection",kind:"LinkedField",name:"reactors",plural:!1,selections:[{alias:null,args:null,concreteType:"ReactorsOfContentEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"FeedbackReaction",kind:"LinkedField",name:"feedback_reaction",plural:!1,selections:[{alias:null,args:[n],concreteType:"Image",kind:"LinkedField",name:"face_image",plural:!1,selections:[o],storageKey:null},l],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[l,k,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"MutualFriendsConnection",kind:"LinkedField",name:"mutual_friends",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"subscribe_status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"secondary_subscribe_status",storageKey:null},{alias:null,args:p,kind:"ScalarField",name:"invite_status_in_feedback",storageKey:null},{alias:null,args:p,kind:"ScalarField",name:"follower_invite_status_in_feedback",storageKey:null},{alias:null,args:[{kind:"Variable",name:"session_id",variableName:"stagesSessionID"}],concreteType:"XFBStagesProfileInfoData",kind:"LinkedField",name:"stages_profile_info_data",plural:!1,selections:[{args:null,documentName:"CometUFIReactionsDialogTabContent_reactors_stagesProfileInfoData",fragmentName:"CometProfileListStagesUserRow_stagesProfileInfoData",fragmentPropName:"stagesProfileInfoData",kind:"ModuleImport"}],storageKey:null},{kind:"InlineFragment",selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"can_viewer_message",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"friendship_status",storageKey:null}],type:"User",abstractKey:null}],type:"Profile",abstractKey:"__isProfile"},q],type:"User",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_viewer_fan",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"can_viewer_like",storageKey:null},q],type:"Page",abstractKey:null},{kind:"InlineFragment",selections:[q],type:"ContextualProfile",abstractKey:"__isContextualProfile"}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"page_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"has_next_page",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"end_cursor",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:m,filters:["reaction_type","reaction_id","orderby"],handle:"connection",key:"CometUFIReactionsDialogTabContent_reactors",kind:"LinkedHandle",name:"reactors"}],type:"Feedback",abstractKey:null}],storageKey:null}]},params:{id:b("CometUFIReactionsDialogTabContentRefetchQuery_facebookRelayOperation"),metadata:{},name:"CometUFIReactionsDialogTabContentRefetchQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("CometUFIReactionsDialogTabContent_reactors.graphql",["CometUFIReactionsDialogTabContentRefetchQuery.graphql"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=["reactors"],c={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[{defaultValue:10,kind:"LocalArgument",name:"count"},{defaultValue:null,kind:"LocalArgument",name:"cursor"},{kind:"RootArgument",name:"feedbackTargetID"},{kind:"RootArgument",name:"reactionID"},{kind:"RootArgument",name:"reactionType"},{kind:"RootArgument",name:"scale"},{kind:"RootArgument",name:"stagesSessionID"}],kind:"Fragment",metadata:{connection:[{count:"count",cursor:"cursor",direction:"forward",path:a}],refetch:{connection:{forward:{count:"count",cursor:"cursor"},backward:null,path:a},fragmentPathInResult:["node"],operation:b("CometUFIReactionsDialogTabContentRefetchQuery.graphql"),identifierField:"id"}},name:"CometUFIReactionsDialogTabContent_reactors",selections:[{alias:"reactors",args:[{kind:"Literal",name:"orderby",value:["is_viewer","is_viewer_followed_creator","is_viewer_friend","importance"]},{kind:"Variable",name:"reaction_id",variableName:"reactionID"},{kind:"Variable",name:"reaction_type",variableName:"reactionType"}],concreteType:"ReactorsOfContentConnection",kind:"LinkedField",name:"__CometUFIReactionsDialogTabContent_reactors_connection",plural:!1,selections:[{alias:null,args:null,concreteType:"ReactorsOfContentEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"FeedbackReaction",kind:"LinkedField",name:"feedback_reaction",plural:!1,selections:[{alias:null,args:[{kind:"Variable",name:"scale",variableName:"scale"}],concreteType:"Image",kind:"LinkedField",name:"face_image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[c,{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{args:[{kind:"Variable",name:"feedbackTargetID",variableName:"feedbackTargetID"}],kind:"FragmentSpread",name:"CometProfileListUserRow_user"},{args:null,kind:"FragmentSpread",name:"CometProfileListPageRow_page"},{args:null,kind:"FragmentSpread",name:"CometProfileListGroupContextualProfileRow_groupContextualProfile"},{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Variable",name:"session_id",variableName:"stagesSessionID"}],concreteType:"XFBStagesProfileInfoData",kind:"LinkedField",name:"stages_profile_info_data",plural:!1,selections:[{args:null,documentName:"CometUFIReactionsDialogTabContent_reactors_stagesProfileInfoData",fragmentName:"CometProfileListStagesUserRow_stagesProfileInfoData",fragmentPropName:"stagesProfileInfoData",kind:"ModuleImport"}],storageKey:null}],type:"User",abstractKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"page_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"has_next_page",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"end_cursor",storageKey:null}],storageKey:null}],storageKey:null},c],type:"Feedback",abstractKey:null}}();e.exports=a}),null);
__d("useCometPageInviteFromAdminsMutation",["createUseMutation_DEPRECATED","useCometPageInviteFromAdminsMutation.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h!==void 0?h:h=b("useCometPageInviteFromAdminsMutation.graphql");d=c("createUseMutation_DEPRECATED")(a,void 0,function(a){return function(b){b=b.get(a.reactor_id);b&&b.setValue("INVITED","invite_status_in_feedback",{feedback_id:a.feedback_id})}});g["default"]=d}),98);
__d("useCometProfilePlusSendPostLikerFollowerInviteMutation",["CometRelay","useCometProfilePlusSendPostLikerFollowerInviteMutation.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h!==void 0?h:h=b("useCometProfilePlusSendPostLikerFollowerInviteMutation.graphql");function a(){var a=d("CometRelay").useMutation(i),b=a[0];return function(a){var c=a.feedbackID;a=a.reactorID;b({optimisticResponse:{profile_plus_send_post_liker_follower_invite:{reactor:{follower_invite_status_in_feedback:"INVITED",id:a}}},variables:{feedbackID:c,input:{feedback_id:c,reactor_id:a}}})}}g["default"]=a}),98);
__d("useCometProfileListFollowerInviteButton",["fbt","ix","CometRelay","fbicon","useCometProfileListFollowerInviteButton_user.graphql","useCometProfilePlusSendPostLikerFollowerInviteMutation"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j;function a(a,e){a=d("CometRelay").useFragment(j!==void 0?j:j=b("useCometProfileListFollowerInviteButton_user.graphql"),a);var f=a==null?void 0:a.follower_invite_status_in_feedback,g=c("useCometProfilePlusSendPostLikerFollowerInviteMutation")(),k=a==null?void 0:a.id;if(k==null)return null;a=function(){g({feedbackID:e.feedbackTargetID,reactorID:k})};switch(f){case"INVITABLE":return{label:h._(/*FBT_CALL*/"Invite"/*FBT_CALL*/),onPress:a,type:"secondary-button"};case"INVITED":return{disabled:!0,label:h._(/*FBT_CALL*/"Invited"/*FBT_CALL*/),type:"secondary-button"};case"FOLLOWING":return{disabled:!0,icon:d("fbicon")._(i("618352"),16),label:h._(/*FBT_CALL*/"Following"/*FBT_CALL*/),type:"secondary-button"};default:return null}}g["default"]=a}),98);
__d("useCometProfileListPageInviteButton",["fbt","ix","CometRelay","fbicon","useCometPageInviteFromAdminsMutation","useCometProfileListPageInviteButton_user.graphql"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j;function a(a,e){a=d("CometRelay").useFragment(j!==void 0?j:j=b("useCometProfileListPageInviteButton_user.graphql"),a);var f=a==null?void 0:a.invite_status_in_feedback,g=c("useCometPageInviteFromAdminsMutation")(),k=a==null?void 0:a.id;if(k==null)return null;switch(f){case"INVITABLE":return{label:h._(/*FBT_CALL*/"Invite"/*FBT_CALL*/),onPress:function(){return g({feedback_id:e.feedbackTargetID,reactor_id:k},{feedbackID:e.feedbackTargetID})},type:"secondary-button"};case"INVITED":return{disabled:!0,label:h._(/*FBT_CALL*/"Invited"/*FBT_CALL*/),type:"secondary-button"};case"LIKED":return{disabled:!0,icon:d("fbicon")._(i("509921"),16),label:h._(/*FBT_CALL*/"Liked"/*FBT_CALL*/),type:"secondary-button"};default:return null}}g["default"]=a}),98);
__d("CometUFIReactionsDialogTabContent.react",["CometInfiniteScrollTrigger.react","CometProfileListGroupContextualProfileRow.react","CometProfileListPageRow.react","CometProfileListRowLoadingState.react","CometProfileListScrollableList.react","CometProfileListUserRow.react","CometRelay","CometUFIReactionsDialogTabContent_reactors.graphql","ImageIconSource","TetraIcon.react","UFIODSLogger","memoizeStringOnly","react","useCometProfileListFollowStatusButton","useCometProfileListFollowerInviteButton","useCometProfileListFriendshipStatusButton","useCometProfileListPageInviteButton","useCometProfileListPageLikeButton"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");e=d("react");var j=e.useCallback,k=e.useEffect,l=e.useLayoutEffect,m=e.useRef,n=10;function a(a){var e=m(!0),f=d("CometRelay").usePaginationFragment(h!==void 0?h:h=b("CometUFIReactionsDialogTabContent_reactors.graphql"),a.reactorsKey),g=f.data,p=f.hasNext,q=f.isLoadingNext,r=f.loadNext,s=f.refetch;l(function(){if(e.current)return;s({reactionID:a.reactionID,reactionType:a.reactionType})},[a.reactionType,a.reactionID,s,e]);k(function(){e.current=!1},[]);f=j(function(){r(n)},[r]);g=(g=(g=g.reactors)==null?void 0:g.edges)!=null?g:[];g=g.map(function(b){var e=b.feedback_reaction;b=b.node;e=e==null?void 0:(e=e.face_image)==null?void 0:e.uri;if(b==null||b.id==null||e==null)return null;switch(b.__typename){case"User":return i.jsx(d("CometRelay").MatchContainer,{fallback:i.jsx(c("CometProfileListUserRow.react"),{actionsByPriority:[{hook:c("useCometProfileListFriendshipStatusButton"),hookConfig:{cancelSource:"profile_browser",makeSource:"profile_browser",messengerWebEntryPoint:"reactorList",responseSource:"profile_browser"},type:"connect"},{hook:c("useCometProfileListFollowerInviteButton"),hookConfig:{feedbackTargetID:a.feedbackTargetID},type:"followerInvite"},{hook:c("useCometProfileListFollowStatusButton"),hookConfig:{followLocation:"LIST_PROFILE_BROWSER"},type:"follow"},{hook:c("useCometProfileListPageInviteButton"),hookConfig:{feedbackTargetID:a.feedbackTargetID},type:"invite"}],profilePhotoAddOn:o(e),user:b}),match:b==null?void 0:b.stages_profile_info_data,props:{profilePhotoAddOn:o(e),userID:b.id}},b.id);case"Page":return i.jsx(c("CometProfileListPageRow.react"),{actionsByPriority:[{hook:c("useCometProfileListPageLikeButton"),hookConfig:{likeLocation:"ufi_reactions_dialog"},type:"like"}],page:b,profilePhotoAddOn:o(e)},b.id);case"HealthGroupContextualProfile":case"GeneralGroupContextualProfile":return i.jsx(c("CometProfileListGroupContextualProfileRow.react"),{groupContextualProfile:b,profilePhotoAddOn:o(e)},b.id);case"GroupAnonAuthorProfile":return i.jsx(c("CometProfileListUserRow.react"),{profilePhotoAddOn:o(e),user:b},b.id);default:d("UFIODSLogger").bump("reactions_dialog.unknown_reactor_type."+b.__typename,"comet");return null}}).filter(Boolean);return i.jsx(c("CometProfileListScrollableList.react"),{scrollTrigger:i.jsx(c("CometInfiniteScrollTrigger.react"),{hasMore:p,isLoading:q,onLoadMore:f,children:i.jsx(c("CometProfileListRowLoadingState.react"),{})}),children:g},(p=a.reactionID)!=null?p:a.reactionType)}a.displayName=a.name+" [from "+f.id+"]";var o=c("memoizeStringOnly")(function(a){return{backgroundColor:"none",icon:i.jsx(c("TetraIcon.react"),{icon:new(c("ImageIconSource"))(a,16,16)}),size:16,type:"activityBadge"}});g["default"]=a}),98);
__d("CometUFIReactionsDialog.react",["fbt","ColorUtils","CometCardedDialog.react","CometDialogCloseCallbackContext.react","CometErrorBoundary.react","CometHovercardStagesEventContext","CometPlaceholder.react","CometProfileListRowLoadingState.react","CometRelay","CometTabs.react","CometTrackingNodeProvider.react","CometTransientDialogProvider.react","CometUFIReactionsDialogQuery.graphql","CometUFIReactionsDialogTabContent.react","ImageIconSource","NullStateLists","ProfileCometLinkContext","TetraNullState.react","formatNumber","react","recoverableViolation","stylex","unrecoverableViolation"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react");e=d("react");var k=e.useMemo,l=e.useState,m={loadingStateRoot:{height:"otl40fxz",overflowY:"emxnvquj",paddingTop:"cxgpxx05",paddingEnd:"rz4wbd8a",paddingBottom:"sj5x9vvc",paddingStart:"a8nywdso"},tab:{minHeight:"cehpxlet",paddingTop:"aodizinl",paddingEnd:"hv4rvrfc",paddingBottom:"ofv0k9yr",paddingStart:"dati1w0a"},tabs:{boxSizing:"rq0escxv",paddingStart:"dati1w0a",width:"k4urcfbm"}};function n(a){var e,f,g=a.props,n=a.queries;a=d("CometRelay").usePreloadedQuery(i!==void 0?i:i=b("CometUFIReactionsDialogQuery.graphql"),n.cometUFIReactionsQueryReference);var o=a.node;if(o==null)throw c("unrecoverableViolation")("No feedback for ID","ufi2");a=((a=o==null?void 0:(a=o.top_reactions)==null?void 0:a.count)!=null?a:0)>1;e=(e=o==null?void 0:(e=o.top_reactions)==null?void 0:e.summary)!=null?e:[];f=o==null?void 0:(f=o.reaction_display_config)==null?void 0:f.reaction_display_strategy;var p=f==="HIDE_COUNTS";f=p||f==="USE_REACTION_SHEET_STRING_ONLY";var q=k(function(){var a;return{groupID:(a=o.associated_group)==null?void 0:a.id}},[o.associated_group]);e=e.map(function(a){var b,d,e,f=a.reaction_count_reduced,g=a.reaction_count;b=(b=a.reaction)==null?void 0:b.localized_name;d=(d=a.reaction)==null?void 0:d.reaction_type;e=(e=a.reaction)==null?void 0:e.id;if(f==null||g==null||b==null||d==null){var h;return c("recoverableViolation")("Essential fields missing for reaction data\n           countLabel: "+((h=f)!=null?h:"null")+",\n           count: "+((h=g)!=null?h:"null")+",\n           label: "+((h=b)!=null?h:"null")+",\n           reactionType: "+((h=d)!=null?h:"null"),"ufi2")}return{color:(h=a.reaction)==null?void 0:h.color,count:g,countLabel:f,imageUri:(h=a.reaction)==null?void 0:(g=h.face_image)==null?void 0:g.uri,label:b,reactionID:e,reactionType:d}}).filter(Boolean);var r=e.reduce(function(a,b){return a+b.count},0);a=a||r===0?[{color:"FF2078f4",count:r,countLabel:c("formatNumber")(r),imageUri:null,label:h._(/*FBT_CALL*/"All"/*FBT_CALL*/),reactionID:null,reactionType:"NONE"}].concat(e):e;var s=n.cometUFIReactionsQueryReference.variables.reactionType;r=g.reactionID;if(r==null){r=(e=e.find(function(a){return a.reactionType===s}))==null?void 0:e.reactionID}e=k(function(){var a=n.cometUFIReactionsQueryReference.variables.stagesSessionID;return{stagesSessionID:a!=null?a:void 0}},[n.cometUFIReactionsQueryReference.variables]);r=l(s!=="NONE"&&s!=null?{reactionID:r,reactionKey:s}:{reactionID:a[0].reactionID,reactionKey:a[0].reactionType});var t=r[0],u=r[1];return j.jsx(c("ProfileCometLinkContext").Provider,{value:q,children:j.jsx(c("CometHovercardStagesEventContext").Provider,{value:e,children:j.jsx(c("CometTrackingNodeProvider.react"),{trackingNode:316,children:j.jsx(c("CometCardedDialog.react"),{header:j.jsx("div",{className:c("stylex")(m.tabs),children:j.jsx(c("CometTrackingNodeProvider.react"),{trackingNode:163,children:j.jsx(c("CometTabs.react"),{menuSize:"full",moreTabXStyle:m.tab,tabs:a.map(function(a){var b=t.reactionKey===a.reactionType&&(a.reactionType!=="DYNAMIC"||t.reactionID===a.reactionID),e=b&&a.color!=null?d("ColorUtils").hexARGBToCSSRGBA(a.color):null,f=a.imageUri;return{highlightColor:e!=null?e:void 0,icon:f!=null?new(c("ImageIconSource"))(f,20,20):void 0,iconLocation:"left",label:p||a.imageUri==null?a.label:a.countLabel,onPress:function(){return u({reactionID:a.reactionID,reactionKey:a.reactionType})},selected:b,underlineColor:e!=null?e:void 0,xstyle:m.tab}})})})}),onClose:g.onClose,size:"small",title:h._(/*FBT_CALL*/"Reactions"/*FBT_CALL*/),titleHorizontalAlignment:"start",withCloseButton:!0,children:j.jsx(d("CometDialogCloseCallbackContext.react").CometDialogCloseCallbackContextProvider,{onClose:g.onClose,children:j.jsx(c("CometTransientDialogProvider.react"),{children:j.jsxs(c("CometPlaceholder.react"),{fallback:j.jsx("div",{className:c("stylex")(m.loadingStateRoot),children:Array(Math.min((q=(r=a.find(function(a){return a.reactionType===t.reactionKey&&(t.reactionKey!=="DYNAMIC"||a.reactionID===t.reactionID)}))==null?void 0:r.count)!=null?q:7,7)).fill(null).map(function(a,b){return j.jsx(c("CometProfileListRowLoadingState.react"),{},b)})}),children:[f&&j.jsx(d("CometRelay").MatchContainer,{match:o==null?void 0:o.reaction_display_config}),j.jsx(c("CometUFIReactionsDialogTabContent.react"),{feedbackTargetID:n.cometUFIReactionsQueryReference.variables.feedbackTargetID,reactionID:t.reactionID,reactionType:t.reactionKey,reactorsKey:o})]})})})})})})})}n.displayName=n.name+" [from "+f.id+"]";function a(a){return j.jsx(c("CometErrorBoundary.react"),{fallback:function(){return j.jsx(c("CometCardedDialog.react"),{title:h._(/*FBT_CALL*/"Error"/*FBT_CALL*/),withCloseButton:!0,children:j.jsx(c("TetraNullState.react"),{body:h._(/*FBT_CALL*/"This may be because of a technical error that we're working to get fixed. Try refreshing the page."/*FBT_CALL*/),headline:h._(/*FBT_CALL*/"This information isn't available right now."/*FBT_CALL*/),icon:c("NullStateLists")})})},children:j.jsx(n,babelHelpers["extends"]({},a))})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);