(function($){$.fn.jkey=function(keyCombo,options,callback){var $this=this;if(this[0]&&!this[0].parentNode){$this=document;}
var keyCodes={'a':65,'b':66,'c':67,'d':68,'e':69,'f':70,'g':71,'h':72,'i':73,'j':74,'k':75,'l':76,'m':77,'n':78,'o':79,'p':80,'q':81,'r':82,'s':83,'t':84,'u':85,'v':86,'w':87,'x':88,'y':89,'z':90,'0':48,'1':49,'2':50,'3':51,'4':52,'5':53,'6':54,'7':55,'8':56,'9':57,'f1':112,'f2':113,'f3':114,'f4':115,'f5':116,'f6':117,'f7':118,'f8':119,'f9':120,'f10':121,'f11':122,'f12':123,'shift':16,'ctrl':17,'control':17,'alt':18,'option':18,'opt':18,'cmd':224,'command':224,'fn':255,'function':255,'backspace':8,'osxdelete':8,'enter':13,'return':13,'space':32,'spacebar':32,'esc':27,'escape':27,'tab':9,'capslock':20,'capslk':20,'super':91,'windows':91,'insert':45,'delete':46,'home':36,'end':35,'pgup':33,'pageup':33,'pgdn':34,'pagedown':34,'left':37,'up':38,'right':39,'down':40,'!':49,'@':50,'#':51,'$':52,'%':53,'^':54,'&':55,'*':56,'(':57,')':48,'`':96,'~':96,'-':45,'_':45,'=':187,'+':187,'[':219,'{':219,']':221,'}':221,'\\':220,'|':220,';':59,':':59,"'":222,'"':222,',':188,'<':188,'.':190,'>':190,'/':191,'?':191};var x='';var y='';if(typeof options=='function'&&typeof callback=='undefined'){callback=options;options=false;}
if(keyCombo.toString().indexOf(',')>-1){var keySplit=keyCombo.match(/[a-zA-Z0-9]+/gi);}
else{var keySplit=[keyCombo];}
for(x in keySplit){if(!keySplit.hasOwnProperty(x)){continue;}
if(keySplit[x].toString().indexOf('+')>-1){var combo=[];var comboSplit=keySplit[x].split('+');for(y in comboSplit){combo[y]=keyCodes[comboSplit[y]];}
keySplit[x]=combo;}
else{keySplit[x]=keyCodes[keySplit[x]];}}
function swapJsonKeyValues(input){var one,output={};for(one in input){if(input.hasOwnProperty(one)){output[input[one]]=one;}}
return output;}
var keyCodesSwitch=swapJsonKeyValues(keyCodes);return this.each(function(){$this=$(this);var activeKeys=[];$this.bind('keydown.jkey',function(e){activeKeys[e.keyCode]=e.keyCode;if($.inArray(e.keyCode,keySplit)>-1){if(typeof callback=='function'){callback.call(this,keyCodesSwitch[e.keyCode]);if(options===false){e.preventDefault();}}}
else{for(x in keySplit){if($.inArray(e.keyCode,keySplit[x])>-1){var active='unchecked';for(y in keySplit[x]){if(active!=false){if($.inArray(keySplit[x][y],activeKeys)>-1){active=true;}
else{active=false;}}}
if(active===true){if(typeof callback=='function'){var activeString='';for(var z in activeKeys){if(activeKeys[z]!=''){activeString+=keyCodesSwitch[activeKeys[z]]+'+';}}
activeString=activeString.substring(0,activeString.length-1);callback.call(this,activeString);if(options===false){e.preventDefault();}}}}}}}).bind('keyup.jkey',function(e){activeKeys[e.keyCode]='';});});}})(jQuery);