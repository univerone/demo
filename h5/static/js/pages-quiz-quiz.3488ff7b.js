(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-quiz-quiz"],{"0412":function(t,a,i){"use strict";var e=i("98ef"),n=i.n(e);n.a},"6b26":function(t,a,i){"use strict";var e=i("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,i("55dd");var n=e(i("1c89")),s={components:{uniPopup:n.default},data:function(){return{showWelcome:!0,subjectIndex:0,swiperHeight:"1600upx",title:"新冠病毒专项答题",quizList:[],fullQuizList:[],optionList:[],modalCard:null,height:""}},onReady:function(){var t=this,a=800,i=this;uni.getSystemInfo({success:function(e){a=e.windowHeight,console.log("屏幕可用高度 "+a),uni.createSelectorQuery().select("#top-box").fields({size:!0,scrollOffset:!0},(function(e){a-=e.height,console.log("减掉顶部后的高度 "+a),console.log("减掉底部后的高度 "+a),i.swiperHeight=a+"px",console.log("滑屏最后高度 "+i.swiperHeight),t.height=i.swiperHeight,console.log("hello world"),console.log(t.height),t.welcomeHeight=a-100})).exec()}})},onLoad:function(){var t=this;uni.showLoading({title:"加载中...."}),uni.request({url:"http://120.79.197.140:1337/quizzes",method:"GET",data:{},success:function(a){function i(t,a){return Math.random()>.5?-1:1}t.fullQuizList=a.data,t.fullQuizList.sort(i),t.quizList=t.fullQuizList.slice(1,11),uni.hideLoading()},fail:function(){},complete:function(){}}),uni.setNavigationBarTitle({title:this.title})},methods:{showContent:function(t){this.showWelcome=!1},showCardModal:function(t){this.modalCard=t.currentTarget.dataset.target},hideCardModal:function(t){this.modalCard=null},showErrorModal:function(t){this.modalError=t.currentTarget.dataset.target},hideErrorModal:function(t){this.modalError=null},SwiperChange:function(t){var a=t.target.current;void 0!=a&&(this.subjectIndex=a)},RadioboxChange:function(t){var a=this.quizList[this.subjectIndex],i=t.detail.value;this.optionList=[a.item__001,a.item__002,a.item__003,a.item__004],this.quizList[this.subjectIndex].flag=i,this.$refs.popup.open()},MoveSubject:function(t){-1===t&&0!=this.subjectIndex&&(this.subjectIndex-=1),1===t&&this.subjectIndex<this.quizList.length-1&&(this.subjectIndex+=1)},AppointedSubject:function(t){this.modalCard=null,this.subjectIndex=t},GetRandomQuiz:function(t){function a(t,a){return Math.random()>.5?-1:1}this.fullQuizList.sort(a),this.quizList=this.fullQuizList.slice(1,11);for(var i=0;i<this.quizList.length;i++)this.$set(this.quizList[i],"flag","");this.showWelcome=!0,this.subjectIndex=0},closeAns:function(t){this.$refs.popup.close()}}};a.default=s},9612:function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,"/* \n  Animation 微动画  \n  基于ColorUI组建库的动画模块 by 文晓港 2019年3月26日19:52:28\n */\n\n/* css 滤镜 控制黑白底色gif的 */.gif-black[data-v-c154799a]{mix-blend-mode:screen}.gif-white[data-v-c154799a]{mix-blend-mode:multiply}\n\n/* Animation css */[class*=animation-][data-v-c154799a]{-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-animation-fill-mode:both;animation-fill-mode:both}.animation-fade[data-v-c154799a]{-webkit-animation-name:fade-data-v-c154799a;animation-name:fade-data-v-c154799a;-webkit-animation-duration:.8s;animation-duration:.8s;-webkit-animation-timing-function:linear;animation-timing-function:linear}.animation-scale-up[data-v-c154799a]{-webkit-animation-name:scale-up-data-v-c154799a;animation-name:scale-up-data-v-c154799a}.animation-scale-down[data-v-c154799a]{-webkit-animation-name:scale-down-data-v-c154799a;animation-name:scale-down-data-v-c154799a}.animation-slide-top[data-v-c154799a]{-webkit-animation-name:slide-top-data-v-c154799a;animation-name:slide-top-data-v-c154799a}.animation-slide-bottom[data-v-c154799a]{-webkit-animation-name:slide-bottom-data-v-c154799a;animation-name:slide-bottom-data-v-c154799a}.animation-slide-left[data-v-c154799a]{-webkit-animation-name:slide-left-data-v-c154799a;animation-name:slide-left-data-v-c154799a}.animation-slide-right[data-v-c154799a]{-webkit-animation-name:slide-right-data-v-c154799a;animation-name:slide-right-data-v-c154799a}.animation-shake[data-v-c154799a]{-webkit-animation-name:shake-data-v-c154799a;animation-name:shake-data-v-c154799a}.animation-reverse[data-v-c154799a]{animation-direction:reverse}@-webkit-keyframes fade-data-v-c154799a{0%{opacity:0}to{opacity:1}}@keyframes fade-data-v-c154799a{0%{opacity:0}to{opacity:1}}@-webkit-keyframes scale-up-data-v-c154799a{0%{opacity:0;-webkit-transform:scale(.2);transform:scale(.2)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes scale-up-data-v-c154799a{0%{opacity:0;-webkit-transform:scale(.2);transform:scale(.2)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes scale-down-data-v-c154799a{0%{opacity:0;-webkit-transform:scale(1.8);transform:scale(1.8)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes scale-down-data-v-c154799a{0%{opacity:0;-webkit-transform:scale(1.8);transform:scale(1.8)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes slide-top-data-v-c154799a{0%{opacity:0;-webkit-transform:translateY(-100%);transform:translateY(-100%)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes slide-top-data-v-c154799a{0%{opacity:0;-webkit-transform:translateY(-100%);transform:translateY(-100%)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes slide-bottom-data-v-c154799a{0%{opacity:0;-webkit-transform:translateY(100%);transform:translateY(100%)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes slide-bottom-data-v-c154799a{0%{opacity:0;-webkit-transform:translateY(100%);transform:translateY(100%)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes shake-data-v-c154799a{0%,to{-webkit-transform:translateX(0);transform:translateX(0)}10%{-webkit-transform:translateX(-9px);transform:translateX(-9px)}20%{-webkit-transform:translateX(8px);transform:translateX(8px)}30%{-webkit-transform:translateX(-7px);transform:translateX(-7px)}40%{-webkit-transform:translateX(6px);transform:translateX(6px)}50%{-webkit-transform:translateX(-5px);transform:translateX(-5px)}60%{-webkit-transform:translateX(4px);transform:translateX(4px)}70%{-webkit-transform:translateX(-3px);transform:translateX(-3px)}80%{-webkit-transform:translateX(2px);transform:translateX(2px)}90%{-webkit-transform:translateX(-1px);transform:translateX(-1px)}}@keyframes shake-data-v-c154799a{0%,to{-webkit-transform:translateX(0);transform:translateX(0)}10%{-webkit-transform:translateX(-9px);transform:translateX(-9px)}20%{-webkit-transform:translateX(8px);transform:translateX(8px)}30%{-webkit-transform:translateX(-7px);transform:translateX(-7px)}40%{-webkit-transform:translateX(6px);transform:translateX(6px)}50%{-webkit-transform:translateX(-5px);transform:translateX(-5px)}60%{-webkit-transform:translateX(4px);transform:translateX(4px)}70%{-webkit-transform:translateX(-3px);transform:translateX(-3px)}80%{-webkit-transform:translateX(2px);transform:translateX(2px)}90%{-webkit-transform:translateX(-1px);transform:translateX(-1px)}}@-webkit-keyframes slide-left-data-v-c154799a{0%{opacity:0;-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes slide-left-data-v-c154799a{0%{opacity:0;-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes slide-right-data-v-c154799a{0%{opacity:0;-webkit-transform:translateX(100%);transform:translateX(100%)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes slide-right-data-v-c154799a{0%{opacity:0;-webkit-transform:translateX(100%);transform:translateX(100%)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}uni-page-body[data-v-c154799a]{background-color:#fff}.cu-form-group[data-v-c154799a]{-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.cu-form-group .title[data-v-c154799a]{padding-left:%?30?%;padding-right:%?0?%}.cu-form-group+.cu-form-group[data-v-c154799a]{border-top:none}.cu-bar-title[data-v-c154799a]{min-height:%?50?%}.cu-list.menu>.cu-item-error[data-v-c154799a]{-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.button[data-v-c154799a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;margin:10px 0}.popup-content[data-v-c154799a]{\n\t\tdisplay:block;\n\t\tbackground-color:#fff;padding:15px;font-size:14px}\n\n/* 提示窗口 */.uni-tip[data-v-c154799a]{\n\t\tdisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;\n\t\tpadding:15px;width:300px;background-color:#fff;border-radius:10px}.uni-tip-title[data-v-c154799a]{margin-bottom:10px;text-align:center;font-weight:700;color:#333}.uni-tip-content[data-v-c154799a]{\n\t\t/* padding: 15px;\n */color:#666}.uni-tip-group-button[data-v-c154799a]{\n\t\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t\t-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;margin-top:20px}.uni-tip-button[data-v-c154799a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center;color:#3b4144}body.?%PAGE?%[data-v-c154799a]{background-color:#fff}",""]),t.exports=a},"98ef":function(t,a,i){var e=i("9612");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("574915ef",e,!0,{sourceMap:!1,shadowMode:!1})},a85c:function(t,a,i){"use strict";i.r(a);var e=i("6b26"),n=i.n(e);for(var s in e)"default"!==s&&function(t){i.d(a,t,(function(){return e[t]}))}(s);a["default"]=n.a},d6d8:function(t,a,i){"use strict";i.r(a);var e=i("dbdc"),n=i("a85c");for(var s in n)"default"!==s&&function(t){i.d(a,t,(function(){return n[t]}))}(s);i("0412");var o,r=i("f0c5"),l=Object(r["a"])(n["default"],e["b"],e["c"],!1,null,"c154799a",null,!1,e["a"],o);a["default"]=l.exports},dbdc:function(t,a,i){"use strict";var e,n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[i("cu-custom",{staticStyle:{background:"#500200"},attrs:{id:"top-box"}},[i("template",{attrs:{slot:"content"},slot:"content"},[i("v-uni-text",{staticClass:"text-white text-bold ",staticStyle:{"font-size":"28rpx"}},[t._v("中老年养生信息辟谣平台")])],1)],2),1==t.showWelcome?i("v-uni-view",{staticClass:"welcome padding-bottom-xl margin-bottom-xl",style:{height:t.height}},[i("v-uni-view",{staticClass:"flex align-center",staticStyle:{background:"url('/h5/static/text-quiz.png') no-repeat center","background-size":"cover"},style:{height:t.height}},[i("v-uni-image",{staticStyle:{width:"70%",height:"8%",position:"absolute",left:"calc(110rpx)",top:"calc(1000rpx)",border:"#000 solid 0px"},style:[{animation:"show 1s 1"}],attrs:{src:"/static/text-button.png",mode:"aspectFit"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.showContent.apply(void 0,arguments)}}})],1)],1):t._e(),0==t.showWelcome?i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom",attrs:{id:"top-box"}},[i("v-uni-view",{staticClass:"action"},[i("v-uni-button",{staticClass:"cu-btn bg-green shadow",attrs:{"data-target":"modalCard"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.showCardModal.apply(void 0,arguments)}}},[t._v("答题卡")])],1)],1),i("v-uni-view",{staticClass:"cu-modal",class:"modalCard"==t.modalCard?"show":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.hideCardModal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-dialog",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a)}}},[i("v-uni-scroll-view",{staticClass:"page padding",style:{height:t.height},attrs:{"scroll-y":!0}},[i("v-uni-view",{staticClass:"cu-bar solid-bottom"},[i("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.hideCardModal.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-close text-red"})],1),i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-title text-red"}),t._v("答题卡")],1)],1),i("v-uni-view",{staticClass:"grid col-5 "},t._l(t.quizList,(function(a,e){return i("v-uni-view",{key:e,staticClass:"margin-tb-sm text-center"},[i("v-uni-button",{staticClass:"cu-btn round",class:[0===a.flag.length?"line-grey":"bg-red"],on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.AppointedSubject(e)}}},[t._v(t._s(e+1))])],1)})),1)],1)],1)],1),i("v-uni-form",[i("v-uni-swiper",{staticClass:"swiper-box",style:{height:t.swiperHeight},attrs:{current:t.subjectIndex},on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.SwiperChange.apply(void 0,arguments)}}},t._l(t.quizList,(function(a,e){return i("v-uni-swiper-item",{key:e},[i("v-uni-scroll-view",{style:{height:t.swiperHeight},attrs:{"scroll-y":"true","scroll-top":"0"}},[e-t.subjectIndex>=-1&&e-t.subjectIndex<=1?i("v-uni-view",[i("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom"},[i("v-uni-view",{staticClass:"solid-bottom text-xxl padding"},[i("v-uni-text",{staticClass:"text-black text-bold"},[t._v(t._s(a.ques))]),a.img?i("v-uni-image",{staticClass:"padding-top",staticStyle:{width:"100%"},attrs:{src:a.img,mode:"aspectFit"}}):t._e()],1)],1),i("v-uni-view",[i("v-uni-radio-group",{staticClass:"block",on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.RadioboxChange.apply(void 0,arguments)}}},t._l([a.item__001,a.item__002,a.item__003,a.item__004],(function(e,n){return i("v-uni-view",{key:n,staticClass:"cu-form-group"},[e.length>0?i("v-uni-radio",{attrs:{value:e,checked:a.flag==e}}):t._e(),e.length>0?i("v-uni-view",{staticClass:"title text-black",staticStyle:{"font-size":"40upx"}},[t._v(t._s(e))]):t._e()],1)})),1)],1)],1):t._e(),i("v-uni-view",{staticClass:"padding flex flex-wrap justify-between align-center bg-white padding-bottom-xl margin-bottom-lg"},[i("v-uni-button",{staticClass:"cu-btn round lg",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.MoveSubject(-1)}}},[i("v-uni-text",{staticClass:"lg cuIcon-back"}),t._v("上一题")],1),9!=t.subjectIndex?i("v-uni-button",{staticClass:"cu-btn round lg",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.MoveSubject(1)}}},[t._v("下一题"),i("v-uni-text",{staticClass:"lg cuIcon-right"})],1):t._e(),9!=t.subjectIndex?i("v-uni-button",{staticClass:"cu-btn round lg",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.GetRandomQuiz.apply(void 0,arguments)}}},[t._v("退出答题"),i("v-uni-text",{staticClass:"lg cuIcon-refresh"})],1):t._e(),9==t.subjectIndex?i("v-uni-button",{staticClass:"cu-btn round lg",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.GetRandomQuiz.apply(void 0,arguments)}}},[t._v("再测一次"),i("v-uni-text",{staticClass:"lg cuIcon-refresh"})],1):t._e()],1)],1)],1)})),1)],1)],1):t._e(),i("uni-popup",{ref:"popup",attrs:{type:"center","mask-click":!1,animation:!0}},[i("v-uni-view",{staticClass:"uni-tip"},[t.quizList.length>0&&t.optionList[t.quizList[t.subjectIndex].ans]==t.quizList[t.subjectIndex].flag?i("v-uni-view",{staticClass:"uni-tip-title text-xl"},[i("v-uni-text",{staticClass:" cuIcon-roundcheckfill text-green"}),t._v("恭喜您，您答对了！")],1):t._e(),t.quizList.length>0&&t.optionList[t.quizList[t.subjectIndex].ans]!=t.quizList[t.subjectIndex].flag?i("v-uni-view",{staticClass:"uni-tip-title text-xl"},[i("v-uni-text",{staticClass:"text-red cuIcon-roundclosefill"}),t._v("不好意思，您答错了！")],1):t._e(),i("v-uni-view",{staticClass:"uni-tip-content"},[i("v-uni-rich-text",{staticClass:"richText text-xl",attrs:{nodes:t.quizList.length>0&&t.quizList[t.subjectIndex].tip}})],1),i("v-uni-view",{staticClass:"uni-tip-group-button"},[i("v-uni-text",{staticClass:"uni-tip-button text-xl",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.closeAns.apply(void 0,arguments)}}},[t._v("取消")]),i("v-uni-text",{staticClass:"uni-tip-button text-xl",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.closeAns.apply(void 0,arguments)}}},[t._v("确定")])],1)],1)],1)],1)},s=[];i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return s})),i.d(a,"a",(function(){return e}))}}]);