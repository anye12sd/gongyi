webpackJsonp([1],{MnSs:function(t,e,i){t.exports=i.p+"static/img/top_img.51a95e7.png"},N9Kn:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("7+uW"),n=i("mtWM"),s=i.n(n),o=i("fxnj"),r=i.n(o),c={data:function(){return{jssdk_params:{appid:"wx2b6321fb56b56c6f",url:window.location.href},appId:"wx2b6321fb56b56c6f",jssdk:{appId:"",nonceStr:"",timestamp:"",signature:""}}},mounted:function(){this.get_jssdk()},methods:{get_jssdk:function(){var t=this;s.a.get("https://api.jihui88.net/dfwjapi/oauth_rest/jssdk",{params:this.jssdk_params}).then(function(e){t.jssdk=e.data,r.a.config({debug:!1,appId:t.jssdk.appId,timestamp:t.jssdk.timestamp,nonceStr:t.jssdk.nonceStr,signature:t.jssdk.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","hideAllNonBaseMenuItem","showAllNonBaseMenuItem"]})}).catch(function(t){})}}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var d=i("VU/8")(c,l,!1,function(t){i("uAsH")},null,null).exports,p=i("/ocq"),u={data:function(){return{}},methods:{get_jssdk:function(){r.a.ready(function(){r.a.showAllNonBaseMenuItem(),r.a.onMenuShareTimeline({title:"拾贝行动·阳光“筑”学",link:"http://cdn.jihuinet.com/wechat/gongyijie/",imgUrl:"http://aicardimg.jihui88.net/20200902103922.jpg"}),r.a.onMenuShareAppMessage({title:"拾贝行动·阳光“筑”学",link:"http://cdn.jihuinet.com/wechat/gongyijie/",desc:"99公益日，邀您一起做好事",imgUrl:"http://aicardimg.jihui88.net/20200902103922.jpg"})})}},mounted:function(){this.get_jssdk()}},h={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"home"}},[t._m(0),t._v(" "),i("div",{staticClass:"title_content"}),t._v(" "),i("div",{staticClass:"line line_1"}),t._v(" "),i("div",{staticClass:"line line_2"}),t._v(" "),i("div",{staticClass:"line line_3"}),t._v(" "),i("div",{staticClass:"line line_4"}),t._v(" "),i("div",{staticClass:"sound_btn"},[i("div",{staticClass:"btn_wrap"},[i("router-link",{staticClass:"btn r_btn finish_btn",attrs:{to:{name:"Add"}}},[t._v("\n        我要代言\n      ")]),t._v(" "),i("router-link",{staticClass:"btn r_btn finish_btn jmd",attrs:{to:{name:"Jmd"}}},[t._v("活动介绍")])],1)]),t._v(" "),i("p",{staticClass:"link"},[i("router-link",{attrs:{to:{name:"List"}}},[t._v("看看这些爱心大使怎么说")])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("img",{attrs:{src:i("MnSs"),alt:""}})])}]};var m=i("VU/8")(u,h,!1,function(t){i("gV/F")},"data-v-ae404f12",null).exports,g={data:function(){return{formdata:{realname:"",desc:"",info:"邀您一起，为孩子的梦想加油！",pic_url:""},isDisable:!1,ready:!1,loading:!1,pic:!1}},methods:{add_pic:function(t){var e=this;this.loading=!0;var i=new FormData;i.append("file",t.target.files[0]),s.a.post("https://api.jihui88.net/gyr99/index.php/gongyijie/image",i).then(function(t){e.pic=!0,e.loading=!1}).catch(function(t){e.loading=!1,console.log(t)})},change:function(t){var e=document.getElementById("img");this.clip(t,{resultObj:e,aspectRatio:1/1.06})},submit:function(){var t=this;if(this.formdata.pic_url=window.sessionStorage.getItem("pic_url"),""===this.formdata.realname||""===this.formdata.desc||""===this.formdata.info||null===this.formdata.pic_url)return this.ready=!0,this.isDisable=!1,!1;this.isDisable=!0,s.a.post("https://api.jihui88.net/gyr99/index.php/gongyijie/user",this.formdata).then(function(e){t.$router.push({path:"/user/"+e.data})}).catch(function(e){t.isDisable=!1,console.log(e)})},get_jssdk:function(){r.a.ready(function(){r.a.showAllNonBaseMenuItem(),r.a.onMenuShareTimeline({title:"拾贝行动·阳光“筑”学",link:"http://cdn.jihuinet.com/wechat/gongyijie/",imgUrl:"http://aicardimg.jihui88.net/20200902103922.jpg"}),r.a.onMenuShareAppMessage({title:"拾贝行动·阳光“筑”学",link:"http://cdn.jihuinet.com/wechat/gongyijie/",desc:"99公益日，邀您一起做好事",imgUrl:"http://aicardimg.jihui88.net/20200902103922.jpg"})})}},mounted:function(){this.get_jssdk()}},v={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page"},[i("div",[i("div",{staticClass:"photo_connect"},[i("img",{staticClass:"myImage center-bg-img ",attrs:{src:t.formdata.pic_url,id:"img"}})]),t._v(" "),i("div",{staticClass:"people_mess"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.formdata.realname,expression:"formdata.realname"}],staticClass:"people_name",attrs:{type:"text",placeholder:"点击添加名字"},domProps:{value:t.formdata.realname},on:{input:function(e){e.target.composing||t.$set(t.formdata,"realname",e.target.value)}}}),t._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formdata.desc,expression:"formdata.desc"}],staticClass:"people_label",attrs:{maxlength:"15",rows:"2",placeholder:"点击添加称谓"},domProps:{value:t.formdata.desc},on:{input:function(e){e.target.composing||t.$set(t.formdata,"desc",e.target.value)}}})]),t._v(" "),i("div",{staticClass:"bottom_wrap"},[i("div",{staticClass:"bottom_bg"}),t._v(" "),i("div",{staticClass:"bottom_text"},[i("div",{staticClass:"text_mess"},[i("p",{staticClass:"slogan_text"}),t._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formdata.info,expression:"formdata.info"}],staticClass:"diy_slogan_t",attrs:{rows:"2",cols:"10",placeholder:"自定口号"},domProps:{value:t.formdata.info},on:{input:function(e){e.target.composing||t.$set(t.formdata,"info",e.target.value)}}})]),t._v(" "),i("div",{staticClass:"btn_wrap"},[i("div",{staticClass:"btn upload_btn"},[i("input",{staticClass:"file_upload",attrs:{type:"file",accept:"image/png,image/jpg,image/jpeg"},on:{change:function(e){t.change(e)}}}),t._v(" "),i("div",{staticClass:"btn_style"},[t._v("上传照片")])]),t._v(" "),i("button",{staticClass:"btn r_btn finish_btn",attrs:{disabled:t.isDisable},on:{click:t.submit}},[t._v("完成")])])])])]),t._v(" "),t.loading?i("div",{attrs:{id:"loadingToast"}},[i("div",{staticClass:"weui-mask_transparent"}),t._v(" "),t._m(0)]):t._e(),t._v(" "),t.ready?i("div",{staticClass:"js_dialog",attrs:{id:"iosDialog2"}},[i("div",{staticClass:"weui-mask"}),t._v(" "),i("div",{staticClass:"weui-dialog"},[i("div",{staticClass:"weui-dialog__bd"},[t._v("请先填写完整")]),t._v(" "),i("div",{staticClass:"weui-dialog__ft"},[i("a",{staticClass:"weui-dialog__btn weui-dialog__btn_primary",attrs:{href:"javascript:;"},on:{click:function(e){t.ready=!1}}},[t._v("知道了")])])])]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"weui-toast"},[e("i",{staticClass:"weui-loading weui-icon_toast"}),this._v(" "),e("p",{staticClass:"weui-toast__content"},[this._v("上传中")])])}]};var _=i("VU/8")(g,v,!1,function(t){i("hdmD")},"data-v-3ff9485a",null).exports,f=i("eMjc"),b=i.n(f),w={components:{html2canvas:b.a},data:function(){return{formdata:{realname:"",desc:"",info:"",pic_url:""},posterImg:"",dialogPosterVisible:!1,dialogBtnVisible:!0,id:this.$route.params.id}},methods:{get_data:function(){var t=this;s.a.get("https://api.jihui88.net/gyr99/index.php/gongyijie/user/"+this.id).then(function(e){t.formdata=e.data,console.log(t.formdata)}).catch(function(t){console.log(t)})},get_jssdk:function(){r.a.ready(function(){r.a.showAllNonBaseMenuItem(),r.a.onMenuShareTimeline({title:"拾贝行动·阳光“筑”学",imgUrl:"http://aicardimg.jihui88.net/20200902103922.jpg"}),r.a.onMenuShareAppMessage({title:"拾贝行动·阳光“筑”学",desc:"99公益日，邀您一起做好事",imgUrl:"http://aicardimg.jihui88.net/20200902103922.jpg"})})},createPoster:function(){this.dialogBtnVisible=!1;var t=this,e=document.getElementById("posterHtml");b()(e,{useCORS:!0,allowTaint:!1,logging:!1,letterRendering:!0,onclone:function(t){t.querySelector("#posterHtml").style.display="block"}}).then(function(e){t.dialogPosterVisible=!0,t.posterImg=e.toDataURL("image/jpg")})}},mounted:function(){this.get_data(),this.get_jssdk()}},j={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page"},[i("div",{attrs:{id:"posterHtml"}},[i("div",{staticClass:"photo_connect"},[i("img",{staticClass:"myImage center-bg-img ",attrs:{src:t.formdata.pic_url,id:"myImage1"}})]),t._v(" "),i("div",{staticClass:"people_mess"},[i("p",{staticClass:"people_name"},[t._v(t._s(t.formdata.realname))]),t._v(" "),i("p",{staticClass:"people_label",domProps:{innerHTML:t._s(t.formdata.desc.replace(/\r?\n/g,"<br />"))}})]),t._v(" "),i("div",{staticClass:"bottom_wrap"},[i("div",{staticClass:"bottom_bg"}),t._v(" "),i("div",{staticClass:"bottom_text"},[i("div",{staticClass:"text_mess"},[i("p",{staticClass:"slogan_text"},[t._v("\n            "+t._s(t.formdata.info)+"\n          ")])]),t._v(" "),t._m(0)])]),t._v(" "),t._m(1)]),t._v(" "),i("div",[i("router-link",{staticClass:"btn r_btn finish_btn",staticStyle:{left:"1rem"},attrs:{to:{name:"Add"}}},[t._v("\n    我也要发声\n    ")]),t._v(" "),i("div",{staticClass:"btn r_btn finish_btn",staticStyle:{right:"1rem"},on:{click:function(e){t.createPoster()}}},[t._v("\n      生成海报\n    ")])],1),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.dialogPosterVisible,expression:"dialogPosterVisible"}],staticClass:"mask"},[i("div",{staticClass:"center"},[i("img",{staticClass:"poster",attrs:{src:t.posterImg}}),t._v(" "),i("div",{staticClass:"poster_info"},[t._v("\n        长按图片即可保存到相册，分享朋友圈~\n      ")]),t._v(" "),i("div",{staticClass:"poster_btn",on:{click:function(e){t.dialogPosterVisible=!1}}},[t._v("点此关闭")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"code"},[e("div",{staticClass:"code_img",attrs:{id:"img_qrcode"}},[e("img",{attrs:{src:"static/image/qrcode.png",alt:"img"}})]),this._v(" "),e("div",{staticClass:"code_text"},[this._v("扫码助力")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo_bar"},[e("img",{attrs:{src:"static/image/logo.png",alt:""}})])}]};var C=i("VU/8")(w,j,!1,function(t){i("rht3")},"data-v-d1082a00",null).exports,y={data:function(){return{page:1,tableData:[],more:!0}},methods:{get_data:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;s.a.get("https://api.jihui88.net/gyr99/index.php/gongyijie/user_list/"+this.page).then(function(i){i.data.list.length<18&&(t.more=!1),t.tableData=1!==e?t.tableData.concat(i.data.list):i.data.list}).catch(function(t){console.log(t)})},read_more:function(){this.page++,this.get_data(this.page)},get_jssdk:function(){r.a.ready(function(){r.a.showAllNonBaseMenuItem(),r.a.onMenuShareTimeline({title:"拾贝行动·阳光“筑”学",link:"http://cdn.jihuinet.com/wechat/gongyijie/",imgUrl:"http://aicardimg.jihui88.net/20200902103922.jpg"}),r.a.onMenuShareAppMessage({title:"拾贝行动·阳光“筑”学",link:"http://cdn.jihuinet.com/wechat/gongyijie/",desc:"99公益日，邀您一起做好事",imgUrl:"http://aicardimg.jihui88.net/20200902103922.jpg"})})}},mounted:function(){this.get_data(),this.get_jssdk()}},k={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page"},[i("ul",{staticClass:"list_warp"},[t._l(t.tableData,function(e){return i("li",{key:e.id},[i("router-link",{attrs:{to:{name:"User",params:{id:e.id}}}},[i("div",{staticClass:"ceo_pic"},[i("img",{attrs:{src:e.pic_url,alt:"img"}})]),t._v(" "),i("div",{staticClass:"people_mess"},[i("p",{staticClass:"people_name"},[t._v(t._s(e.realname))]),t._v(" "),i("p",{staticClass:"people_label",domProps:{innerHTML:t._s(e.desc.replace(/\r?\n/g,"<br />"))}})])])],1)}),t._v(" "),i("div",{staticClass:"clr"})],2),t._v(" "),i("div",{staticClass:"clr"}),t._v(" "),t.more?i("div",{staticClass:"more",on:{click:t.read_more}},[t._v("\n    查看更多\n  ")]):t._e(),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"jis"},[this._v("技术支持："),e("a",{staticStyle:{color:"#fff"},attrs:{href:"http://m.ykit.net/"}},[this._v("东方五金网")])])}]};var I=i("VU/8")(y,k,!1,function(t){i("N9Kn")},"data-v-eb1edcb8",null).exports,x={data:function(){return{}},methods:{get_jssdk:function(){r.a.ready(function(){r.a.showAllNonBaseMenuItem(),r.a.onMenuShareTimeline({title:"拾贝行动·阳光“筑”学",link:"http://cdn.jihuinet.com/wechat/gongyijie/",imgUrl:"http://aicardimg.jihui88.net/20200902103922.jpg"}),r.a.onMenuShareAppMessage({title:"拾贝行动·阳光“筑”学",link:"http://cdn.jihuinet.com/wechat/gongyijie/",desc:"99公益日，邀您一起做好事",imgUrl:"http://aicardimg.jihui88.net/20200902103922.jpg"})})}},mounted:function(){this.get_jssdk()}},E={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"page"})},staticRenderFns:[]};var M=i("VU/8")(x,E,!1,function(t){i("sBvs")},"data-v-10ba23e2",null).exports;a.a.use(p.a);var U=new p.a({routes:[{path:"/",name:"Home",component:m},{path:"/add",name:"Add",component:_},{path:"/user/:id",name:"User",component:C},{path:"/list",name:"List",component:I},{path:"/jmd",name:"Jmd",component:M}]}),R=i("4RJ8"),B=i.n(R),S=(i("sbrb"),{install(t){t.prototype.initilize=function(t){let e=this;this.options=t,this.createElement(),this.resultObj=t.resultObj,this.cropper=new B.a(this.preview,{aspectRatio:t.aspectRatio||1,autoCropArea:t.autoCropArea||.8,viewMode:1,guides:"Free"!=t.aspectRatio,cropBoxResizable:"Free"!=t.aspectRatio,cropBoxMovable:"Free"!=t.aspectRatio,dragCrop:"Free"!=t.aspectRatio,background:!1,checkOrientation:!0,checkCrossOrigin:!0,zoomable:!1,zoomOnWheel:!1,center:!1,toggleDragModeOnDblclick:!1,ready:function(){if("Free"==t.aspectRatio){e.cropper.cropBox.querySelector("span.cropper-view-box").style.outline="none",e.cropper.disable()}}})},t.prototype.createElement=function(){this.preview=null;let t='<div><img id="clip_image" src="originUrl"></div><button type="button" id="cancel_clip">取消</button><button type="button" id="clip_button">确定</button>';t+='<div class="crop_loading"><div class="crop_content"><img src="http://zbbcdn.jihui88.net/loading.gif"><div class="crop_text">图片上传中</div></div></div>',t+='<div class="crop_success"><div class="crop_success_text">上传成功</div></div></div>';let e=document.getElementsByTagName("body")[0];this.reagion=document.createElement("div"),this.reagion.id="clip_container",this.reagion.className="container",this.reagion.innerHTML=t,e.appendChild(this.reagion),this.preview=document.getElementById("clip_image"),this.initFunction()},t.prototype.initFunction=function(){let t=this;this.clickBtn=document.getElementById("clip_button"),this.cancelBtn=document.getElementById("cancel_clip"),this.addEvent(this.clickBtn,"click",function(){t.crop()}),this.addEvent(this.cancelBtn,"click",function(){t.destoried()}),this.addEvent(this.fileObj,"click",function(){this.value=""})},t.prototype.clip=function(t,e){this.fileObj=t.srcElement;let i=t.target.files||t.dataTransfer.files;if(!i.length)return!1;this.initilize(e),this.picValue=i[0],this.originUrl=this.getObjectURL(this.picValue),this.cropper&&this.cropper.replace(this.originUrl)},t.prototype.getObjectURL=function(t){let e=null;return void 0!=window.createObjectURL?e=window.createObjectURL(t):void 0!=window.URL?e=window.URL.createObjectURL(t):void 0!=window.webkitURL&&(e=window.webkitURL.createObjectURL(t)),e},t.prototype.crop=function(){let t,e,i=this,a=new Image;document.querySelector(".crop_loading").style.display="block",setTimeout(function(){t=i.cropper.getCroppedCanvas();let n=(e=i.getRoundedCanvas(t)).toDataURL();a.src=n,n.length<102400?(i.resultObj.src=n,i.postImg(n)):a.onload=function(){let t=i.compress(a,i.Orientation);i.resultObj.src=t,i.postImg(t)}},20)},t.prototype.getRoundedCanvas=function(t){let e=document.createElement("canvas"),i=e.getContext("2d"),a=t.width,n=t.height;return e.width=a,e.height=n,i.imageSmoothingEnabled=!0,i.drawImage(t,0,0,a,n),i.globalCompositeOperation="destination-in",i.beginPath(),i.rect(0,0,a,n),i.fill(),e},t.prototype.destoried=function(){this.removeEvent(this.clickBtn,"click",null),this.removeEvent(this.cancelBtn,"click",null),this.removeEvent(this.fileObj,"click",null),this.reagion.parentNode.removeChild(this.reagion),this.cropper.destroy(),this.cropper=null},t.prototype.postImg=function(t){const e=new FormData;let i=this.base64ToBlob(t);e.append("file",i,"img.jpg"),s.a.post("https://api.jihui88.net/gyr99/index.php/gongyijie/image",e).then(t=>{window.sessionStorage.setItem("pic_url",t.data.url)});let a=this;a.destoried(),window.setTimeout(function(){document.querySelector(".crop_loading").style.display="none",document.querySelector(".crop_success").style.display="block",a.destoried()},3e3)},t.prototype.rotateImg=function(t,e,i){if(null==t)return;let a=t.height,n=t.width,s=2;null==s&&(s=0),"right"==e?++s>3&&(s=0):--s<0&&(s=3);let o=90*s*Math.PI/180,r=i.getContext("2d");switch(s){case 0:i.width=n,i.height=a,r.drawImage(t,0,0);break;case 1:i.width=a,i.height=n,r.rotate(o),r.drawImage(t,0,-a);break;case 2:i.width=n,i.height=a,r.rotate(o),r.drawImage(t,-n,-a);break;case 3:i.width=a,i.height=n,r.rotate(o),r.drawImage(t,-n,0)}},t.prototype.compress=function(t,e){let i,a,n=document.createElement("canvas"),s=n.getContext("2d"),o=document.createElement("canvas"),r=o.getContext("2d"),c=t.src.length,l=t.width,d=t.height;if((i=l*d/4e6)>1?(console.log("大于400万像素"),l/=i=Math.sqrt(i),d/=i):i=1,n.width=l,n.height=d,s.fillStyle="#fff",s.fillRect(0,0,n.width,n.height),(a=l*d/1e6)>1){let e=~~(l/(a=~~(Math.sqrt(a)+1))),n=~~(d/a);o.width=e,o.height=n;for(let c=0;c<a;c++)for(let l=0;l<a;l++)r.drawImage(t,c*e*i,l*n*i,e*i,n*i,0,0,e,n),s.drawImage(o,c*e,l*n,e,n)}else s.drawImage(t,0,0,l,d);if(""!=e&&1!=e)switch(e){case 6:this.rotateImg(t,"left",n);break;case 8:this.rotateImg(t,"right",n);break;case 3:this.rotateImg(t,"right",n),this.rotateImg(t,"right",n)}let p=n.toDataURL("image/jpeg",.5);return console.log("压缩前："+c),console.log("压缩后："+p.length),console.log("压缩率："+~~(100*(c-p.length)/c)+"%"),o.width=o.height=n.width=n.height=0,p},t.prototype.addEvent=function(t,e,i){t.addEventListener?t.addEventListener(e,i,!1):t.attachEvent("on"+e,i)},t.prototype.removeEvent=function(t,e,i){t.removeEventListener?t.removeEventListener(e,i,!1):t.detachEvent("on"+e,i)},t.prototype.base64ToBlob=function(t){for(var e=t.split(","),i=e[0].match(/:(.*?);/)[1]||"image/png",a=window.atob(e[1]),n=new ArrayBuffer(a.length),s=new Uint8Array(n),o=0;o<a.length;o++)s[o]=a.charCodeAt(o);return new Blob([n],{type:i})}}});a.a.use(S),a.a.config.productionTip=!1,new a.a({el:"#app",router:U,template:"<App/>",components:{App:d}})},"gV/F":function(t,e){},hdmD:function(t,e){},rht3:function(t,e){},sBvs:function(t,e){},uAsH:function(t,e){}},["NHnr"]);