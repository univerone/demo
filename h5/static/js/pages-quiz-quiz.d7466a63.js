(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-quiz-quiz"],{2200:function(t,a,e){var i=e("a934");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("4d5d0630",i,!0,{sourceMap:!1,shadowMode:!1})},"68c3":function(t,a,e){"use strict";var i,n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("hxNavbar",{attrs:{fixed:!0,color:"#ffffff",backgroundColor:[80,2,0],title:"中老年养生信息辟谣平台"}}),1==t.showWelcome?e("v-uni-view",{staticClass:"welcome padding-bottom-xl margin-bottom-xl",style:{height:t.height}},[e("v-uni-view",{staticClass:"flex align-center",staticStyle:{background:"url('/h5/static/text-quiz.png') no-repeat center","background-size":"cover"},style:{height:t.height}},[e("v-uni-image",{staticStyle:{width:"70%",height:"8%",position:"absolute",left:"calc(110rpx)",top:"calc(1000rpx)",border:"#000 solid 0px"},style:[{animation:"show 1s 1"}],attrs:{src:"/static/text-button.png",mode:"aspectFit"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.showContent.apply(void 0,arguments)}}})],1)],1):t._e(),0==t.showWelcome?e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom",attrs:{id:"top-box"}},[e("v-uni-view",{staticClass:"action"},[e("v-uni-button",{staticClass:"cu-btn bg-green shadow",attrs:{"data-target":"modalCard"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.showCardModal.apply(void 0,arguments)}}},[t._v("答题卡")])],1)],1),e("v-uni-view",{staticClass:"cu-modal",class:"modalCard"==t.modalCard?"show":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.hideCardModal.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cu-dialog",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a)}}},[e("v-uni-scroll-view",{staticClass:"page padding",style:{height:t.height},attrs:{"scroll-y":!0}},[e("v-uni-view",{staticClass:"cu-bar solid-bottom"},[e("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.hideCardModal.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"cuIcon-close text-red"})],1),e("v-uni-view",{staticClass:"action"},[e("v-uni-text",{staticClass:"cuIcon-title text-red"}),t._v("答题卡")],1)],1),e("v-uni-view",{staticClass:"grid col-5 "},t._l(t.quizList,(function(a,i){return e("v-uni-view",{key:i,staticClass:"margin-tb-sm text-center"},[e("v-uni-button",{staticClass:"cu-btn round",class:[0===a.flag.length?"line-grey":"bg-red"],on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.AppointedSubject(i)}}},[t._v(t._s(i+1))])],1)})),1)],1)],1)],1),e("v-uni-form",[e("v-uni-swiper",{staticClass:"swiper-box",style:{height:t.swiperHeight},attrs:{current:t.subjectIndex},on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.SwiperChange.apply(void 0,arguments)}}},t._l(t.quizList,(function(a,i){return e("v-uni-swiper-item",{key:i},[e("v-uni-scroll-view",{style:{height:t.swiperHeight},attrs:{"scroll-y":"true","scroll-top":"0"}},[i-t.subjectIndex>=-1&&i-t.subjectIndex<=1?e("v-uni-view",[e("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom"},[e("v-uni-view",{staticClass:"solid-bottom text-xxl padding"},[e("v-uni-text",{staticClass:"text-black text-bold"},[t._v(t._s(a.ques))]),a.img?e("v-uni-image",{staticClass:"padding-top",staticStyle:{width:"100%"},attrs:{src:a.img,mode:"aspectFit"}}):t._e()],1)],1),e("v-uni-view",[e("v-uni-radio-group",{staticClass:"block",on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.RadioboxChange.apply(void 0,arguments)}}},t._l([a.item__001,a.item__002,a.item__003,a.item__004],(function(i,n){return e("v-uni-view",{key:n,staticClass:"cu-form-group"},[i.length>0?e("v-uni-radio",{attrs:{value:i,checked:a.flag==i}}):t._e(),i.length>0?e("v-uni-view",{staticClass:"title text-black",staticStyle:{"font-size":"40upx"}},[t._v(t._s(i))]):t._e()],1)})),1)],1)],1):t._e(),e("v-uni-view",{staticClass:"padding flex flex-wrap justify-between align-center bg-white padding-bottom-xl margin-bottom-lg"},[e("v-uni-button",{staticClass:"cu-btn round lg",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.MoveSubject(-1)}}},[e("v-uni-text",{staticClass:"lg cuIcon-back"}),t._v("上一题")],1),9!=t.subjectIndex?e("v-uni-button",{staticClass:"cu-btn round lg",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.MoveSubject(1)}}},[t._v("下一题"),e("v-uni-text",{staticClass:"lg cuIcon-right"})],1):t._e(),9!=t.subjectIndex?e("v-uni-button",{staticClass:"cu-btn round lg",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.GetRandomQuiz.apply(void 0,arguments)}}},[t._v("退出答题"),e("v-uni-text",{staticClass:"lg cuIcon-refresh"})],1):t._e(),9==t.subjectIndex?e("v-uni-button",{staticClass:"cu-btn round lg",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.GetRandomQuiz.apply(void 0,arguments)}}},[t._v("再测一次"),e("v-uni-text",{staticClass:"lg cuIcon-refresh"})],1):t._e()],1)],1)],1)})),1)],1)],1):t._e(),e("uni-popup",{ref:"popup",attrs:{type:"center","mask-click":!1,animation:!0}},[e("v-uni-view",{staticClass:"uni-tip"},[t.quizList.length>0&&t.optionList[t.quizList[t.subjectIndex].ans]==t.quizList[t.subjectIndex].flag?e("v-uni-view",{staticClass:"uni-tip-title text-xl"},[e("v-uni-text",{staticClass:" cuIcon-roundcheckfill text-green"}),t._v("恭喜您，您答对了！")],1):t._e(),t.quizList.length>0&&t.optionList[t.quizList[t.subjectIndex].ans]!=t.quizList[t.subjectIndex].flag?e("v-uni-view",{staticClass:"uni-tip-title text-xl"},[e("v-uni-text",{staticClass:"text-red cuIcon-roundclosefill"}),t._v("不好意思，您答错了！")],1):t._e(),e("v-uni-view",{staticClass:"uni-tip-content"},[e("v-uni-rich-text",{staticClass:"richText text-xl",attrs:{nodes:t.quizList.length>0&&t.quizList[t.subjectIndex].tip}})],1),e("v-uni-view",{staticClass:"uni-tip-group-button"},[e("v-uni-text",{staticClass:"uni-tip-button text-xl",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.closeAns.apply(void 0,arguments)}}},[t._v("取消")]),e("v-uni-text",{staticClass:"uni-tip-button text-xl",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.closeAns.apply(void 0,arguments)}}},[t._v("确定")])],1)],1)],1)],1)},s=[];e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return s})),e.d(a,"a",(function(){return i}))},"6b26":function(t,a,e){"use strict";var i=e("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("55dd");var n=i(e("1c89")),s={components:{uniPopup:n.default},data:function(){return{showWelcome:!0,subjectIndex:0,swiperHeight:"1600upx",title:"新冠病毒专项答题",quizList:[],fullQuizList:[],optionList:[],modalCard:null,height:""}},onReady:function(){var t=this,a=800,e=this;uni.getSystemInfo({success:function(i){a=i.windowHeight,console.log("屏幕可用高度 "+a),e.swiperHeight=a+"px",console.log("滑屏最后高度 "+e.swiperHeight),t.height=e.swiperHeight,console.log("hello world"),console.log(t.height),t.welcomeHeight=a-100}})},onLoad:function(){var t=this;uni.showLoading({title:"加载中...."}),uni.request({url:"http://120.79.197.140:1337/quizzes",method:"GET",data:{},success:function(a){function e(t,a){return Math.random()>.5?-1:1}t.fullQuizList=a.data,t.fullQuizList.sort(e),t.quizList=t.fullQuizList.slice(1,11),uni.hideLoading()},fail:function(){},complete:function(){}}),uni.setNavigationBarTitle({title:this.title})},methods:{showContent:function(t){this.showWelcome=!1},showCardModal:function(t){this.modalCard=t.currentTarget.dataset.target},hideCardModal:function(t){this.modalCard=null},showErrorModal:function(t){this.modalError=t.currentTarget.dataset.target},hideErrorModal:function(t){this.modalError=null},SwiperChange:function(t){var a=t.target.current;void 0!=a&&(this.subjectIndex=a)},RadioboxChange:function(t){var a=this.quizList[this.subjectIndex],e=t.detail.value;this.optionList=[a.item__001,a.item__002,a.item__003,a.item__004],this.quizList[this.subjectIndex].flag=e,this.$refs.popup.open()},MoveSubject:function(t){-1===t&&0!=this.subjectIndex&&(this.subjectIndex-=1),1===t&&this.subjectIndex<this.quizList.length-1&&(this.subjectIndex+=1)},AppointedSubject:function(t){this.modalCard=null,this.subjectIndex=t},GetRandomQuiz:function(t){function a(t,a){return Math.random()>.5?-1:1}this.fullQuizList.sort(a),this.quizList=this.fullQuizList.slice(1,11);for(var e=0;e<this.quizList.length;e++)this.$set(this.quizList[e],"flag","");this.showWelcome=!0,this.subjectIndex=0},closeAns:function(t){this.$refs.popup.close()}}};a.default=s},"6d7f":function(t,a,e){"use strict";var i=e("2200"),n=e.n(i);n.a},a85c:function(t,a,e){"use strict";e.r(a);var i=e("6b26"),n=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(a,t,(function(){return i[t]}))}(s);a["default"]=n.a},a934:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,"/* \n  Animation 微动画  \n  基于ColorUI组建库的动画模块 by 文晓港 2019年3月26日19:52:28\n */\n\n/* css 滤镜 控制黑白底色gif的 */.gif-black[data-v-3ee9a779]{mix-blend-mode:screen}.gif-white[data-v-3ee9a779]{mix-blend-mode:multiply}\n\n/* Animation css */[class*=animation-][data-v-3ee9a779]{-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-animation-fill-mode:both;animation-fill-mode:both}.animation-fade[data-v-3ee9a779]{-webkit-animation-name:fade-data-v-3ee9a779;animation-name:fade-data-v-3ee9a779;-webkit-animation-duration:.8s;animation-duration:.8s;-webkit-animation-timing-function:linear;animation-timing-function:linear}.animation-scale-up[data-v-3ee9a779]{-webkit-animation-name:scale-up-data-v-3ee9a779;animation-name:scale-up-data-v-3ee9a779}.animation-scale-down[data-v-3ee9a779]{-webkit-animation-name:scale-down-data-v-3ee9a779;animation-name:scale-down-data-v-3ee9a779}.animation-slide-top[data-v-3ee9a779]{-webkit-animation-name:slide-top-data-v-3ee9a779;animation-name:slide-top-data-v-3ee9a779}.animation-slide-bottom[data-v-3ee9a779]{-webkit-animation-name:slide-bottom-data-v-3ee9a779;animation-name:slide-bottom-data-v-3ee9a779}.animation-slide-left[data-v-3ee9a779]{-webkit-animation-name:slide-left-data-v-3ee9a779;animation-name:slide-left-data-v-3ee9a779}.animation-slide-right[data-v-3ee9a779]{-webkit-animation-name:slide-right-data-v-3ee9a779;animation-name:slide-right-data-v-3ee9a779}.animation-shake[data-v-3ee9a779]{-webkit-animation-name:shake-data-v-3ee9a779;animation-name:shake-data-v-3ee9a779}.animation-reverse[data-v-3ee9a779]{animation-direction:reverse}@-webkit-keyframes fade-data-v-3ee9a779{0%{opacity:0}to{opacity:1}}@keyframes fade-data-v-3ee9a779{0%{opacity:0}to{opacity:1}}@-webkit-keyframes scale-up-data-v-3ee9a779{0%{opacity:0;-webkit-transform:scale(.2);transform:scale(.2)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes scale-up-data-v-3ee9a779{0%{opacity:0;-webkit-transform:scale(.2);transform:scale(.2)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes scale-down-data-v-3ee9a779{0%{opacity:0;-webkit-transform:scale(1.8);transform:scale(1.8)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes scale-down-data-v-3ee9a779{0%{opacity:0;-webkit-transform:scale(1.8);transform:scale(1.8)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes slide-top-data-v-3ee9a779{0%{opacity:0;-webkit-transform:translateY(-100%);transform:translateY(-100%)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes slide-top-data-v-3ee9a779{0%{opacity:0;-webkit-transform:translateY(-100%);transform:translateY(-100%)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes slide-bottom-data-v-3ee9a779{0%{opacity:0;-webkit-transform:translateY(100%);transform:translateY(100%)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes slide-bottom-data-v-3ee9a779{0%{opacity:0;-webkit-transform:translateY(100%);transform:translateY(100%)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes shake-data-v-3ee9a779{0%,to{-webkit-transform:translateX(0);transform:translateX(0)}10%{-webkit-transform:translateX(-9px);transform:translateX(-9px)}20%{-webkit-transform:translateX(8px);transform:translateX(8px)}30%{-webkit-transform:translateX(-7px);transform:translateX(-7px)}40%{-webkit-transform:translateX(6px);transform:translateX(6px)}50%{-webkit-transform:translateX(-5px);transform:translateX(-5px)}60%{-webkit-transform:translateX(4px);transform:translateX(4px)}70%{-webkit-transform:translateX(-3px);transform:translateX(-3px)}80%{-webkit-transform:translateX(2px);transform:translateX(2px)}90%{-webkit-transform:translateX(-1px);transform:translateX(-1px)}}@keyframes shake-data-v-3ee9a779{0%,to{-webkit-transform:translateX(0);transform:translateX(0)}10%{-webkit-transform:translateX(-9px);transform:translateX(-9px)}20%{-webkit-transform:translateX(8px);transform:translateX(8px)}30%{-webkit-transform:translateX(-7px);transform:translateX(-7px)}40%{-webkit-transform:translateX(6px);transform:translateX(6px)}50%{-webkit-transform:translateX(-5px);transform:translateX(-5px)}60%{-webkit-transform:translateX(4px);transform:translateX(4px)}70%{-webkit-transform:translateX(-3px);transform:translateX(-3px)}80%{-webkit-transform:translateX(2px);transform:translateX(2px)}90%{-webkit-transform:translateX(-1px);transform:translateX(-1px)}}@-webkit-keyframes slide-left-data-v-3ee9a779{0%{opacity:0;-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes slide-left-data-v-3ee9a779{0%{opacity:0;-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes slide-right-data-v-3ee9a779{0%{opacity:0;-webkit-transform:translateX(100%);transform:translateX(100%)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes slide-right-data-v-3ee9a779{0%{opacity:0;-webkit-transform:translateX(100%);transform:translateX(100%)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}uni-page-body[data-v-3ee9a779]{background-color:#fff}.cu-form-group[data-v-3ee9a779]{-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.cu-form-group .title[data-v-3ee9a779]{padding-left:%?30?%;padding-right:%?0?%}.cu-form-group+.cu-form-group[data-v-3ee9a779]{border-top:none}.cu-bar-title[data-v-3ee9a779]{min-height:%?50?%}.cu-list.menu>.cu-item-error[data-v-3ee9a779]{-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.button[data-v-3ee9a779]{-webkit-box-flex:1;-webkit-flex:1;flex:1;margin:10px 0}.popup-content[data-v-3ee9a779]{\n\t\tdisplay:block;\n\t\tbackground-color:#fff;padding:15px;font-size:14px}\n\n/* 提示窗口 */.uni-tip[data-v-3ee9a779]{\n\t\tdisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;\n\t\tpadding:15px;width:300px;background-color:#fff;border-radius:10px}.uni-tip-title[data-v-3ee9a779]{margin-bottom:10px;text-align:center;font-weight:700;color:#333}.uni-tip-content[data-v-3ee9a779]{\n\t\t/* padding: 15px;\n */color:#666}.uni-tip-group-button[data-v-3ee9a779]{\n\t\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t\t-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;margin-top:20px}.uni-tip-button[data-v-3ee9a779]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center;color:#3b4144}body.?%PAGE?%[data-v-3ee9a779]{background-color:#fff}",""]),t.exports=a},d6d8:function(t,a,e){"use strict";e.r(a);var i=e("68c3"),n=e("a85c");for(var s in n)"default"!==s&&function(t){e.d(a,t,(function(){return n[t]}))}(s);e("6d7f");var o,r=e("f0c5"),l=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"3ee9a779",null,!1,i["a"],o);a["default"]=l.exports}}]);