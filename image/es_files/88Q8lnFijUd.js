if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("LSResult.bs",[],(function(a,b,c,d,e,f){"use strict";function a(a){return[a]}f.make=a}),null);
__d("PolarisPostCommentInputForm.react",["cx","fbt","PolarisEmojiButton.react","PolarisIGCoreButton","PolarisIGCoreSpinner","PolarisIGCoreText","PolarisTypeaheadContainer.react","PolarisTypeaheadInput.react","PolarisUA","react","stylex"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react"),k=i._("\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e04\u0e27\u0e32\u0e21\u0e04\u0e34\u0e14\u0e40\u0e2b\u0e47\u0e19"),l={textArea:{backgroundColor:"xvbhtw8",borderTop:"x76ihet",borderEnd:"xwmqs3e",borderBottom:"x112ta8",borderStart:"xxxdfa6",color:"x5n08af",display:"x78zum5",flexGrow:"x1iyjqo2",fontSize:"x1qlqyl8",height:"x1d6elog",maxHeight:"xlk1fp6",outline:"x1a2a7pz",paddingTop:"xexx8yu",paddingEnd:"x4uap5",paddingBottom:"x18d9i69",paddingStart:"xkhd6sd",resize:"xtt52l0",width:"xnalus7",":disabled":{opacity:"x1bq4at4",pointerEvents:"xaqnwrm"},"::placeholder":{color:"xs3hnx8"}},emojiButton:{paddingTop:"x1y1aw1k",paddingEnd:"x1pi30zi",paddingBottom:"xwib8y2",paddingStart:"x1swvt13"},emojiButtonV2:{paddingTop:"x1y1aw1k",paddingEnd:"xn6708d",paddingBottom:"xwib8y2",paddingStart:"xkhd6sd"},emojiButtonOnRevampFeed:{marginEnd:"x1w0mnb"},familiarFeedEmojiButton:{order:"xo1ph6p",paddingTop:"xexx8yu",paddingEnd:"x4uap5",paddingBottom:"x18d9i69",paddingStart:"xkhd6sd"},typeahead:{borderTop:"x6umtig",borderEnd:"x1b1mbwd",borderBottom:"xaqea5y",borderStart:"xav7gou",boxShadow:"x1jumc70",marginTop:"xdj266r",marginEnd:"x11i5rnm",marginBottom:"xat24cr",marginStart:"x1mh8g0r"},typeaheadMobile:{borderTop:"xtuw4uo",marginTop:"x1sy10c2",marginEnd:"x1v89cbv",marginBottom:"xat24cr",marginStart:"x1r67fr0"},typeaheadDesktop:{backgroundColor:"xvbhtw8",boxShadow:"x122emky",minWidth:"x92112o",position:"x10l6tqk",top:"xdsb8wn"},typeaheadDesktopShowAboveInput:{bottom:"x10w3d4m",top:"x80663w"}};function a(a){var b=a.autosize,e=a.isTypeaheadInputDisabled,f=a.cursorIndex,g=a.hasPostButton,h=a.isOnDesktopFeed,m=a.familiarFeed,n=a.inputRef,o=a.isEmojiTrayOpen,p=a.isRevampVersion,q=a.isSubmitDisabled,r=a.openTypeaheadAbove,s=a.onBlur,t=a.onChange,u=a.onEmojiClick,v=a.onEmojiTrayOpen,w=a.onFocus,x=a.onKeyPress,y=a.onKeyUp,z=a.onPostButtonClicked,A=a.onSubmit,B=a.onTypeaheadResultSelect,C=a.pendingComment;a=a.showTypeahead;var D=p&&h===!0;return j.jsxs(j.Fragment,{children:[j.jsxs("form",{className:"_aidk"+(p?" _aidl":"")+(D?" _aie4":""),"data-testid":void 0,method:"POST",onSubmit:A,children:[e&&j.jsx(c("PolarisIGCoreSpinner"),{position:"absolute"}),d("PolarisUA").isDesktop()&&j.jsx("div",{className:c("stylex")([h===!0?l.emojiButtonV2:l.emojiButton,m?l.familiarFeedEmojiButton:null,D&&l.emojiButtonOnRevampFeed]),children:j.jsx(c("PolarisEmojiButton.react"),{color:m?"ig-secondary-text":void 0,isEmojiTrayOpen:o,onEmojiClick:u,setEmojiTrayOpen:v,size:m&&(!p||D)?"small":void 0})}),j.jsx(c("PolarisTypeaheadInput.react"),{"aria-label":k,autosize:b,cursorIndex:f,"data-testid":void 0,disabled:e,inputRef:n,onBlur:s,onChange:t,onFocus:w,onKeyPress:x,onKeyUp:y,onTypeaheadResultSelect:B,placeholder:k,value:C,xstyle:l.textArea}),g&&(m?!q:!0)&&j.jsx("div",{className:m?"_aidp":"",children:j.jsx(c("PolarisIGCoreButton"),{borderless:!0,"data-testid":void 0,disabled:q,onClick:z,type:"submit",children:j.jsx(c("PolarisIGCoreText").BodyEmphasized,{color:"ig-primary-button",zeroMargin:!0,children:i._("\u0e42\u0e1e\u0e2a\u0e15\u0e4c")})})})]}),a?j.jsx(c("PolarisTypeaheadContainer.react"),{className:c("stylex")([l.typeahead,d("PolarisUA").isMobile()?l.typeaheadMobile:l.typeaheadDesktop,!d("PolarisUA").isMobile()&&r?l.typeaheadDesktopShowAboveInput:null]),cursorIndex:f,inputString:C,onResultSelect:B,showResultsCondensed:!0,useSearchTriggers:!0}):null]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);