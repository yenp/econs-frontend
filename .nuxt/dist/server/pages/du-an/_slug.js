exports.ids = [70,8,9,10,11,12,13,14,16,22,23,24,25,26,27,28,29,30,32,33,34,35,36,66,67];
exports.modules = {

/***/ 101:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNSAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjkyNDMgMTAuOTRDMTIuMDE4MiAxMC4xNjQ5IDExLjA5ODYgOS42OTU0NyAxMC4yMDM1IDEwLjQ2OTNMOS42NjkxIDEwLjkzN0M5LjI3ODA4IDExLjI3NjUgOC41NTEwNSAxMi44NjI5IDUuNzQwMTMgOS42MjkzM0MyLjkyOTc5IDYuMzk5ODcgNC42MDIxOCA1Ljg5NzA0IDQuOTkzNzkgNS41NjA0NUw1LjUzMTE1IDUuMDkyMTZDNi40MjE0OSA0LjMxNjU1IDYuMDg1NDkgMy4zNDAxNiA1LjQ0MzM1IDIuMzM1MDhMNS4wNTU4NCAxLjcyNjNDNC40MTA3NiAwLjcyMzU3MyAzLjcwODMyIDAuMDY1MDM2MyAyLjgxNTY0IDAuODM5NDc1TDIuMzMzMyAxLjI2MDk0QzEuOTM4NzYgMS41NDgzNSAwLjgzNTkzMiAyLjQ4MjYgMC41Njg0MiA0LjI1NzQzQzAuMjQ2NDY5IDYuMzg2OTkgMS4yNjIwOCA4LjgyNTYyIDMuNTg4OTEgMTEuNTAxM0M1LjkxMjgxIDE0LjE3ODIgOC4xODgxMyAxNS41MjI4IDEwLjM0MzQgMTUuNDk5NEMxMi4xMzQ3IDE1LjQ4MDEgMTMuMjE2NCAxNC41MTg5IDEzLjU1NDggMTQuMTY5NEwxNC4wMzg5IDEzLjc0NzRDMTQuOTI5MiAxMi45NzM1IDE0LjM3NiAxMi4xODU2IDEzLjQ2OTMgMTEuNDA4OEwxMi45MjQzIDEwLjk0WiIgZmlsbD0iI0YyRjJGMiIvPgo8L3N2Zz4K"

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-sand-lock.d0f4865.svg";

/***/ }),

/***/ 103:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNSAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMTIuMjA3M0w0LjcwNzM2IDcuNDk5OTZMMCAyLjc5MjY4TDIuNzkyNjggMEw3LjUwMDA0IDQuNzA3MzZMMTIuMjA3MyAwTDE1IDIuNzkyNjhMMTAuMjkyNiA3LjUwMDA0TDE1IDEyLjIwNzNMMTIuMjA3MyAxNUw3LjQ5OTk2IDEwLjI5MjZMMi43OTI2IDE1TDAgMTIuMjA3M1oiIGZpbGw9IiNEODAwMDAiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FormProject.vue?vue&type=template&id=8f027a94&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<p class=\"title f-20 mb-10px\">"+_vm._ssrEscape(_vm._s(_vm.isModal ? 'Ch???nh s???a d??? ??n' : 'Th??ng tin d??? ??n'))+"</p> <p class=\"f-13 description\">Vui l??ng ??i???n v??o th??ng tin d?????i ????y. B???n s??? nh???n ???????c <span>8-10</span>  ch??o gi?? t???m t??nh t??? nh???ng c??ng ty x??y d???ng/????n v??? thi???t k??? uy t??n trong khu v???c. B???n tho?? s???c <span>\n        y??u c???u t?? v???n</span>  v?? <span>ch???n l???a</span> ????n v??? ph?? h???p nh???t cho d??? ??n</p> "),_vm._ssrNode("<form class=\"group-content mt-36px\">","</form>",[_vm._ssrNode("<div class=\"form-group row align-items-center\">","</div>",[_vm._ssrNode("<label class=\"f-13 col-md-3 col-sm-12 \">\n                D???ch v??? y??u c???u\n                <span style=\"color:red\">*</span></label> "),_c('treeselect',{staticClass:"pl-0 pr-0 col-md-9 col-sm-12",attrs:{"options":_vm.options,"disable-branch-nodes":true,"value":_vm.objProject.category,"multiple":true,"required":"","placeholder":"Ch???n d???ch v???","clearable":false},model:{value:(_vm.objProject.category),callback:function ($$v) {_vm.$set(_vm.objProject, "category", $$v)},expression:"objProject.category"}})],2),_vm._ssrNode(" <div class=\"form-group row align-items-center\"><label class=\"f-13 col-md-3 col-sm-12 \">\n                T??n D??? ??n\n                <span style=\"color:red\">*</span></label> <input type=\"text\" required=\"required\" placeholder=\"Nh???p t??n d??? ??n c???a b???n\""+(_vm._ssrAttr("value",(_vm.objProject.name)))+" class=\"form-control col-md-9 col-sm-12\"></div> <div class=\"form-group row align-items-center\"><label class=\"f-13 col-md-3 col-sm-12 \">\n                M?? t??? Y??u C???u V??? C??ng Vi???c\n\n                <span style=\"color:red\">*</span></label> <textarea required=\"required\" id=\"customPlaceholder\" rows=\"5\""+(_vm._ssrAttr("placeholder",_vm.place))+" class=\"form-control col-md-9 col-sm-12\">"+_vm._ssrEscape(_vm._s(_vm.objProject.description))+"</textarea></div> "),_vm._ssrNode("<div class=\"form-group row align-items-center mb-10px\">","</div>",[_vm._ssrNode("<label class=\"f-13  col-md-3 col-sm-12 \">\n                H??nh ???nh ????nh k??m\n            </label> "),_vm._ssrNode("<div class=\"col-md-9 pl-0\">","</div>",[_c('InputFile',{key:"file",ref:"akjklak",attrs:{"accept":_vm.acceptFile,"multiple":true,"label":'Th??m h??nh ???nh'},on:{"input":_vm.getFileImg}})],1),_vm._ssrNode(" <div class=\"col-md-3\"></div> <div class=\"col-md-9 pl-0\">"+((_vm.objProject.attachment)?((_vm._ssrList((_vm.objProject.photos),function(item,idx){return ("<p class=\"f-11 text-main \"><span class=\"mr-5px\">"+(_vm._s(_vm.returnTypeFile(item,'--')))+"</span>"+_vm._ssrEscape("\n                            "+_vm._s(_vm.spliceURLFile(item,'--'))+"\n                            ")+"<span class=\"cursor-pointer ml-5px\"><i class=\"fas fa-times text-red\"></i></span></p>")}))):"<!---->")+" "+((_vm.arrBase64.length)?((_vm._ssrList((_vm.arrBase64),function(item,idx){return ("<p class=\"f-11 text-main \"><span class=\"mr-5px\">"+(_vm._s(_vm.returnTypeFile(item.name)))+"</span>"+_vm._ssrEscape("\n                            "+_vm._s(item.name)+"\n                            ")+"<span class=\"cursor-pointer ml-5px\"><i class=\"fas fa-times text-red\"></i></span></p>")}))):"<!---->")+"</div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"form-group row align-items-center\">","</div>",[_vm._ssrNode("<label class=\"f-13  col-md-3 col-sm-12 \">\n                T??i li???u ????nh k??m\n            </label> "),_vm._ssrNode("<div class=\"col-md-9 pl-0\">","</div>",[_c('InputFile',{key:"file",ref:"akjklak",attrs:{"accept":_vm.acceptFile,"multiple":true,"label":'Th??m t??i li???u'},on:{"input":_vm.getFile}})],1),_vm._ssrNode(" <div class=\"col-md-3\"></div> <div class=\"col-md-9 pl-0\">"+((_vm.objProject.attachment)?((_vm._ssrList((_vm.objProject.attachment),function(item,idx){return ("<p class=\"f-11 text-main \"><span class=\"mr-5px\">"+(_vm._s(_vm.returnTypeFile(item)))+"</span>"+_vm._ssrEscape("\n                            "+_vm._s(_vm.spliceURLFile(item,'--'))+"\n                            ")+"<span class=\"cursor-pointer ml-5px\"><i class=\"fas fa-times text-red\"></i></span></p>")}))):"<!---->")+" "+((_vm.arrFile.length)?((_vm._ssrList((_vm.arrFile),function(item,idx){return ("<p class=\"f-11 text-main \"><span class=\"mr-5px\">"+(_vm._s(_vm.returnTypeFile(item.name)))+"</span>"+_vm._ssrEscape("\n                            "+_vm._s(item.name)+"\n                            ")+"<span class=\"cursor-pointer ml-5px\"><i class=\"fas fa-times text-red\"></i></span></p>")}))):"<!---->")+"</div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"form-group row align-items-center\">","</div>",[_vm._ssrNode("<label class=\"f-13 col-md-3 col-sm-12 \">\n                ?????a ??i???m d??? ??n\n                <span style=\"color:red\">*</span></label> "),_c('treeselect',{staticClass:"pl-0 pr-0 col-md-9 col-sm-12",attrs:{"options":_vm.optionsProvince,"value":_vm.objProject.address,"placeholder":"T???nh th??nh","required":"","clearable":false},model:{value:(_vm.objProject.address),callback:function ($$v) {_vm.$set(_vm.objProject, "address", $$v)},expression:"objProject.address"}})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"form-group row align-items-center\">","</div>",[_vm._ssrNode("<label class=\"f-13 col-md-3 col-sm-12 \">\n                Ng??n s??ch d??? tr??\n                <span style=\"color:red\">*</span></label> "),_vm._ssrNode("<div class=\"input-group col-md-9 col-sm-12 px-0\">","</div>",[_c('currency-input',{staticClass:"form-control",attrs:{"type":"text","required":"","placeholder":"200,000,000"},model:{value:(_vm.objProject.budget),callback:function ($$v) {_vm.$set(_vm.objProject, "budget", $$v)},expression:"objProject.budget"}}),_vm._ssrNode(" <div class=\"input-group-append\"><span class=\"input-group-text f-12\">VND</span></div>")],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"form-group row align-items-center\">","</div>",[_vm._ssrNode("<label class=\"f-13 col-md-3 col-sm-12 \">\n                Th???i gian k???t th??c nh???n ch??o gi??\n                <span style=\"color:red\">*</span></label> "),_c('v-date-picker',{ref:"calendar",attrs:{"masks":{input: 'DD/MM/YYYY'},"model-config":{type: 'number',}},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var inputValue = ref.inputValue;
var inputEvents = ref.inputEvents;
return [_c('div',{staticClass:"input-group mb-3"},[_c('input',_vm._g({staticClass:"form-control",attrs:{"type":"text","required":""},domProps:{"value":inputValue}},inputEvents)),_vm._v(" "),_c('div',{staticClass:"input-group-append cursor-pointer",on:{"click":function($event){return _vm.triggerCalendar()}}},[_c('span',{staticClass:"input-group-text custom-time"},[_c('i',{staticClass:"fas fa-calendar-day"})])])])]}}]),model:{value:(_vm.objProject.dueDate),callback:function ($$v) {_vm.$set(_vm.objProject, "dueDate", $$v)},expression:"objProject.dueDate"}})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"form-group mb-50px group-checkbox d-flex\">","</div>",[_c('b-form-checkbox',{attrs:{"checked":_vm.objProject.agree,"name":"checkbox-agree","required":""},model:{value:(_vm.objProject.agree),callback:function ($$v) {_vm.$set(_vm.objProject, "agree", $$v)},expression:"objProject.agree"}}),_vm._ssrNode(" <span class=\"f-12 main-black mt-2px ml-5px\">T??i ?????ng ?? v???i <span class=\"main-color\">??i???u kho???n</span> c???a Econs <span style=\"color:red\">*</span></span>")],2),_vm._ssrNode(" <div class=\"group-btn row\"><button type=\"submit\" class=\"d-none\"></button> <div class=\"col-md-6 col-sm-12\"><button type=\"button\" class=\"btn-now\">"+_vm._ssrEscape("\n                    "+_vm._s(_vm.isModal ? 'C???P NH???T TH??NG TIN' : '????NG NGAY')+"\n                ")+"</button></div> <div class=\"col-md-6 col-sm-12 pr-0 cutom-sm\">"+((_vm.isModal)?("<button type=\"button\" class=\"btn-now delete\">\n                    HU??? B???\n                </button>"):("<button type=\"button\" class=\"btn-now save\">\n                    L??U B???N NH??P\n                </button>"))+"</div></div>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/FormProject.vue?vue&type=template&id=8f027a94&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FormProject.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var FormProjectvue_type_script_lang_js_ = ({props:['objInfor','isModal'],data(){return{objProject:this.restForm(),options:this.getCategory(),optionsProvince:this.getProvince(),place:`1. M?? t??? chi ti???t v??? d??? ??n x??y d???ng ho???c y??u c???u thi???t k??? c???a b???n \n2. Vui l??ng ????nh k??m s??? ?????, b???n v???, thi???t k??? ho???c h??nh ???nh minh ho??? ????? nh???n ???????c t?? v???n/d??? to??n t???t nh???t. \n3. Y??u c???u n??ng l???c c???a ????n v??? b??o gi?? ho???c nh???ng y??u c???u kh??c`,acceptImg:["png","jpg","jpeg","tiff"],acceptFile:["png","jpg","jpeg","tiff","pdf","xls","doc","ppt","zip","rar"],arrFileImg:[],arrBase64:[],arrFile:[],currentStatus:''};},mounted(){if(!this.isModal){this.getProjectDraft();}else{if(this.objInfor){this.objProject=this.objInfor;console.log('this.objProject',this.objProject);}}},methods:{triggerCalendar(){this.$refs.calendar.showPopover();},restForm(){this.arrFileImg=[],this.arrBase64=[],this.arrFile=[];return{category:[],dueDate:new Date().getTime(),agree:false};},createJobActive(s){this.currentStatus=s;this.$refs.btnClick.click();},createJobDraft(s){this.currentStatus=s;this.$refs.btnClick.click();},async createJob(){var status=this.currentStatus;this.loader();try{// Img
var fileImgOld=this.objProject.photos||[];var fileImgNew=this.arrFileImg.length?await this.uploadFile(this.arrFileImg):[];var arrFileImg=fileImgOld.concat(fileImgNew);// File
var fileOld=this.objProject.attachment||[];var fileNew=this.arrFile.length?await this.uploadFile(this.arrFile):[];var arrFile=fileOld.concat(fileNew);let res=await this.$post('member/projects',{...this.objProject,status,photos:arrFileImg,attachment:arrFile});if(status==='ACTIVE'&&!this.isModal){this.objProject=this.restForm();this.$router.replace(`/du-an/${res.data.project.slug}`);}if(status==='DRAFT'){this.objProject._id=res.data.project._id;}if(this.isModal){this.$emit('callGetDetail');this.$emit('hideModal');}this.$notify({group:'all',text:this.isModal?'C???p nh???t d??? ??n th??nh c??ng':'T???o d??? ??n th??nh c??ng',type:'dark'});this.loader(0);}catch(err){this.loader(0);}},getProjectDraft(){this.$get('member/projects/draft').then(res=>{if(res.data.status){this.objProject=res.data.project;}}).catch(err=>{console.log('getProjectDraft',err);});},callParent(){this.$emit('hideModal');},getFile(file){this.arrFile=this.arrFile.concat(file);},clearFile(file){this.arrFile=this.arrFile.filter(item=>item.name!==file.name);},clearFileOld(file){this.objProject.attachment=this.objProject.attachment.filter(item=>item!==file);},async getFileImg(arrFile){this.arrFileImg=this.arrFileImg.concat(arrFile);var arrBase64=[];this.arrFileImg.forEach(async item=>{var base64=await this._toBase64(item);arrBase64.push({base64,name:item.name});});this.arrBase64=arrBase64;},clearFileImg(file){this.arrBase64=this.arrBase64.filter(item=>item.base64!==file.base64);this.arrFileImg=this.arrFileImg.filter(item=>item.name!==file.name);},clearFileImgOld(file){this.objProject.photos=this.objProject.photos.filter(item=>item!==file);}}});
// CONCATENATED MODULE: ./components/FormProject.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FormProjectvue_type_script_lang_js_ = (FormProjectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/FormProject.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FormProjectvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "c90d266c"
  
)

/* harmony default export */ var FormProject = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {InputFile: __webpack_require__(81).default})


/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/paymentCustomer/createRequired.vue?vue&type=template&id=7ec76629&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Modal',{ref:"createRequired",attrs:{"id":"modal-payment-required"},scopedSlots:_vm._u([{key:"content",fn:function(){return [(_vm.auction)?_c('div',{staticClass:"modal-contact formCore"},[_c('div',{staticClass:"content"},[_c('p',{staticClass:"title f-20 fw-600"},[_c('span',{staticClass:"text-main"},[_vm._v(_vm._s(_vm.auction.auctionBy.company))]),_vm._v(" G???I Y??U C???U THANH TO??N ?????T "+_vm._s(_vm.activeRow+1)+"\n        ")]),_vm._v(" "),_c('form',{attrs:{"action":""},on:{"submit":function($event){$event.preventDefault();return _vm.sendRequirePayment()}}},[_c('div',{staticClass:"group-infor no-border pr-60px"},[_c('div',{staticClass:"row mb-15px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("T??n d??? ??n")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('span',{staticClass:"value",class:_vm.getClassCategory(_vm.mapImgFromCategory(_vm.project.category))},[_vm._v("\n                            "+_vm._s(_vm.project.name)+"\n                        ")])])]),_vm._v(" "),_c('div',{staticClass:"row mb-15px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Nh??n vi??n y??u c???u")]),_vm._v(" "),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.objPayment.nameStaff),expression:"objPayment.nameStaff"}],staticClass:"form-control",attrs:{"readonly":"","type":"text","required":""},domProps:{"value":(_vm.objPayment.nameStaff)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objPayment, "nameStaff", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"row mb-15px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Gi?? tr??? thanh to??n")]),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('div',{staticClass:"input-group "},[_c('currency-input',{staticClass:"form-control",attrs:{"type":"text","required":"","readonly":""},model:{value:(_vm.objPayment.price),callback:function ($$v) {_vm.$set(_vm.objPayment, "price", $$v)},expression:"objPayment.price"}}),_vm._v(" "),_c('div',{staticClass:"input-group-append"},[_c('span',{staticClass:"input-group-text f-12"},[_vm._v("VND")])])],1)])]),_vm._v(" "),_c('div',{staticClass:"row mb-15px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Ghi ch?? thanh to??n")]),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.objPayment.note),expression:"objPayment.note"}],staticClass:"form-control",attrs:{"readonly":"","type":"text","required":"","rows":"5"},domProps:{"value":(_vm.objPayment.note)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objPayment, "note", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"row mb-15px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("T??n ng??n h??ng")]),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.objPayment.nameBank),expression:"objPayment.nameBank"}],staticClass:"form-control",attrs:{"readonly":"","type":"text","required":""},domProps:{"value":(_vm.objPayment.nameBank)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objPayment, "nameBank", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"row mb-15px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("T??n ch??? t??i kho???n")]),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.objPayment.nameAccountBank),expression:"objPayment.nameAccountBank"}],staticClass:"form-control",attrs:{"readonly":"","type":"text","required":""},domProps:{"value":(_vm.objPayment.nameAccountBank)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objPayment, "nameAccountBank", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("S??? t??i kho???n")]),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.objPayment.accountNumber),expression:"objPayment.accountNumber"}],staticClass:"form-control",attrs:{"readonly":"","type":"text","required":""},domProps:{"value":(_vm.objPayment.accountNumber)},on:{"keypress":function($event){return _vm.isNumber($event)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objPayment, "accountNumber", $event.target.value)}}})])])]),_vm._v(" "),(_vm.objPayment && _vm.objPayment.status != 'DONE' )?_c('div',{staticClass:"footer d-flex"},[_c('button',{ref:"btnSubmit",staticClass:"d-none",attrs:{"type":"submit"}}),_vm._v(" "),_c('div',{staticClass:"btn-confirm flex-1",on:{"click":function($event){return _vm.triggerForm('DONE')}}},[_c('span',[_vm._v("X??C NH???N THANH TO??N")])]),_vm._v(" "),_c('div',{staticClass:"btn-confirm cancel flex-1 ml-25px",on:{"click":function($event){return _vm.triggerForm('CANCEL')}}},[_c('span',[_vm._v("T??? CH???I THANH TO??N")])])]):_vm._e()])])]):_vm._e()]},proxy:true}])})}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/popup/paymentCustomer/createRequired.vue?vue&type=template&id=7ec76629&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/paymentCustomer/createRequired.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var createRequiredvue_type_script_lang_js_ = ({props:['project','activeRow','auction'],data(){return{objPayment:{}};},methods:{sendRequirePayment(){console.log('sendRequirePayment',this.objPayment);this.$emit('requiredPayment',this.objPayment);this.hide();},updateObjectRequired(obj){this.objPayment={...obj};},triggerForm(status){if(status=='DONE'){this.objPayment.status='DONE';}else{this.objPayment.status='CANCEL';}this.$refs.btnSubmit.click();},show(){this.$refs.createRequired.showModal();},hide(){this.$refs.createRequired.hideModal();}}});
// CONCATENATED MODULE: ./components/popup/paymentCustomer/createRequired.vue?vue&type=script&lang=js&
 /* harmony default export */ var paymentCustomer_createRequiredvue_type_script_lang_js_ = (createRequiredvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/popup/paymentCustomer/createRequired.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  paymentCustomer_createRequiredvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "eb35acf8"
  
)

/* harmony default export */ var createRequired = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Modal: __webpack_require__(33).default})


/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/paymentCustomer/createReport.vue?vue&type=template&id=678213c5&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Modal',{ref:"modalReportCustomer",attrs:{"id":"modal-payment-report"},scopedSlots:_vm._u([{key:"content",fn:function(){return [_c('div',{staticClass:"modal-contact formCore"},[_c('div',{staticClass:"content"},[_c('p',{staticClass:"title f-20 fw-600"},[_c('span',{staticClass:"text-main"},[_vm._v(_vm._s(_vm.auction.auctionBy.company))]),_vm._v(" B??O C??O TI???N ????? THI C??NG\n        ")]),_vm._v(" "),_c('form',{attrs:{"action":""},on:{"submit":function($event){$event.preventDefault();return _vm.getForm()}}},[_c('div',{staticClass:"group-infor no-border pr-60px"},[_c('div',{staticClass:"row mb-15px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("T??n d??? ??n")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('span',{staticClass:"value text-red",class:_vm.getClassCategory(_vm.mapImgFromCategory(_vm.project.category))},[_vm._v("\n                            "+_vm._s(_vm.project.name)+"\n                        ")])])]),_vm._v(" "),_c('div',{staticClass:"row mb-15px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Nh??n vi??n b??o c??o")]),_vm._v(" "),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.objReport.nameStaff),expression:"objReport.nameStaff"}],staticClass:"form-control",attrs:{"type":"text","required":""},domProps:{"value":(_vm.objReport.nameStaff)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objReport, "nameStaff", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"row mb-15px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Th???i gian")]),_vm._v(" "),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.objReport.time),expression:"objReport.time"}],staticClass:"form-control",attrs:{"type":"text","required":""},domProps:{"value":(_vm.objReport.time)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objReport, "time", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"row mb-25px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Nh???t k?? c??ng vi???c")]),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.objReport.note),expression:"objReport.note"}],staticClass:"form-control",attrs:{"type":"text","required":"","rows":"5"},domProps:{"value":(_vm.objReport.note)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objReport, "note", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("H??nh ???nh ????nh k??m")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('div',{staticClass:"row cover-img"},[(_vm.objReport.attachment && _vm.objReport.attachment.length)?[_vm._l((_vm.objReport.attachment),function(item,idx){return [_c('div',{key:idx+100,staticClass:"col-6 img"},[_c('div',{staticClass:" item-img",style:({
                                                'background-image': 'url(' + "" + item + ')',
                                            })})])]})]:_vm._e()],2)])])])])])])]},proxy:true}])})}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/popup/paymentCustomer/createReport.vue?vue&type=template&id=678213c5&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/paymentCustomer/createReport.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var createReportvue_type_script_lang_js_ = ({props:['project','activeReport','auction'],data(){return{acceptFile:['png','jpg','jpeg','tiff'],objReport:{},arrFile:[]};},watch:{activeReport(){this.objReport.time='Tu???n '+Number(this.activeReport);}},methods:{async getForm(){var fileNew=this.arrFile.length?await this.uploadFile(this.arrFile):[];var fileOld=this.objReport.attachment||[];var arrFile=fileOld.concat(fileNew);var obj={...this.objReport,reportId:this.activeReport-1,attachment:arrFile};this.$emit('createReport',obj);this.hide();},updateReport(obj){console.log('report',obj);this.objReport=obj;},triggerForm(status){this.objReport.status=status;this.$refs.btnSubmitReport.click();},getFile(file){this.arrFile=this.arrFile.concat(file);},clearFile(file){this.arrFile=this.arrFile.filter(item=>item.name!==file.name);},clearFileOld(file){this.objReport.attachment=this.objReport.attachment.filter(item=>item!==file);},show(){this.$refs.modalReportCustomer.showModal();},hide(){this.$refs.modalReportCustomer.hideModal();this.arrFile=[];}}});
// CONCATENATED MODULE: ./components/popup/paymentCustomer/createReport.vue?vue&type=script&lang=js&
 /* harmony default export */ var paymentCustomer_createReportvue_type_script_lang_js_ = (createReportvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/popup/paymentCustomer/createReport.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  paymentCustomer_createReportvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5d2fcfd9"
  
)

/* harmony default export */ var createReport = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Modal: __webpack_require__(33).default})


/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/payment/createRequired.vue?vue&type=template&id=641adb32&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Modal',{ref:"createRequired",attrs:{"id":"modal-payment-required"},scopedSlots:_vm._u([{key:"content",fn:function(){return [_c('div',{staticClass:"modal-contact formCore"},[_c('div',{staticClass:"content"},[_c('p',{staticClass:"title f-20 fw-600"},[_vm._v("\n            T???O Y??U C???U THANH TO??N ?????T "+_vm._s(_vm.activeRow+1)+"\n        ")]),_vm._v(" "),_c('form',{attrs:{"action":""},on:{"submit":function($event){$event.preventDefault();return _vm.sendRequirePayment()}}},[_c('div',{staticClass:"group-infor no-border pr-60px"},[_c('div',{staticClass:"row mb-15px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("T??n d??? ??n")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('span',{staticClass:"value",class:_vm.getClassCategory(_vm.mapImgFromCategory(_vm.project.category))},[_vm._v("\n                            "+_vm._s(_vm.project.name)+"\n                        ")])])]),_vm._v(" "),_c('div',{staticClass:"row mb-15px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Nh??n vi??n y??u c???u")]),_vm._v(" "),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.objPayment.nameStaff),expression:"objPayment.nameStaff"}],staticClass:"form-control",attrs:{"type":"text","required":""},domProps:{"value":(_vm.objPayment.nameStaff)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objPayment, "nameStaff", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"row mb-15px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Gi?? tr??? thanh to??n")]),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('div',{staticClass:"input-group "},[_c('currency-input',{staticClass:"form-control",attrs:{"type":"text","required":""},model:{value:(_vm.objPayment.price),callback:function ($$v) {_vm.$set(_vm.objPayment, "price", $$v)},expression:"objPayment.price"}}),_vm._v(" "),_c('div',{staticClass:"input-group-append"},[_c('span',{staticClass:"input-group-text f-12"},[_vm._v("VND")])])],1)])]),_vm._v(" "),_c('div',{staticClass:"row mb-15px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Ghi ch?? thanh to??n")]),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.objPayment.note),expression:"objPayment.note"}],staticClass:"form-control",attrs:{"type":"text","required":"","rows":"5"},domProps:{"value":(_vm.objPayment.note)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objPayment, "note", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"row mb-15px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("T??n ng??n h??ng")]),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.objPayment.nameBank),expression:"objPayment.nameBank"}],staticClass:"form-control",attrs:{"type":"text","required":""},domProps:{"value":(_vm.objPayment.nameBank)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objPayment, "nameBank", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"row mb-15px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("T??n ch??? t??i kho???n")]),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.objPayment.nameAccountBank),expression:"objPayment.nameAccountBank"}],staticClass:"form-control",attrs:{"type":"text","required":""},domProps:{"value":(_vm.objPayment.nameAccountBank)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objPayment, "nameAccountBank", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("S??? t??i kho???n")]),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.objPayment.accountNumber),expression:"objPayment.accountNumber"}],staticClass:"form-control",attrs:{"type":"text","required":""},domProps:{"value":(_vm.objPayment.accountNumber)},on:{"keypress":function($event){return _vm.isNumber($event)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objPayment, "accountNumber", $event.target.value)}}})])])]),_vm._v(" "),(_vm.objPayment && _vm.objPayment.status != 'DONE' )?_c('div',{staticClass:"footer d-flex"},[_c('button',{ref:"btnSubmit",staticClass:"d-none",attrs:{"type":"submit"}}),_vm._v(" "),_c('div',{staticClass:"btn-confirm flex-1",on:{"click":function($event){return _vm.triggerForm('CREATE')}}},[_c('span',[_vm._v("T???O Y??U C???U THANH TO??N")])]),_vm._v(" "),_c('div',{staticClass:"btn-confirm update flex-1 ml-25px",on:{"click":function($event){return _vm.triggerForm('DRAFT')}}},[_c('span',[_vm._v("L??U B???N NH??P")])])]):_vm._e()])])])]},proxy:true}])})}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/popup/payment/createRequired.vue?vue&type=template&id=641adb32&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/payment/createRequired.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var createRequiredvue_type_script_lang_js_ = ({props:['project','activeRow'],data(){return{objPayment:{}};},methods:{sendRequirePayment(){console.log('sendRequirePayment',this.objPayment);this.$emit('requiredPayment',this.objPayment);this.hide();},updateObjectRequired(obj){this.objPayment={...obj};},triggerForm(status){if(status=='DRAFT'){this.objPayment.status='DRAFT';}else{this.objPayment.status='PENDING';}this.$refs.btnSubmit.click();},show(){this.$refs.createRequired.showModal();},hide(){this.$refs.createRequired.hideModal();}}});
// CONCATENATED MODULE: ./components/popup/payment/createRequired.vue?vue&type=script&lang=js&
 /* harmony default export */ var payment_createRequiredvue_type_script_lang_js_ = (createRequiredvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/popup/payment/createRequired.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  payment_createRequiredvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "8c258b7c"
  
)

/* harmony default export */ var createRequired = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Modal: __webpack_require__(33).default})


/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/payment/createReport.vue?vue&type=template&id=452ce864&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Modal',{ref:"modalCreateReport",attrs:{"id":"modal-payment-report"},scopedSlots:_vm._u([{key:"content",fn:function(){return [_c('div',{staticClass:"modal-contact formCore"},[_c('div',{staticClass:"content"},[_c('p',{staticClass:"title f-20 fw-600"},[_vm._v("\n            T???O B??O C??O TI???N ????? THI C??NG\n        ")]),_vm._v(" "),_c('form',{attrs:{"action":""},on:{"submit":function($event){$event.preventDefault();return _vm.getForm()}}},[_c('div',{staticClass:"group-infor no-border pr-60px"},[_c('div',{staticClass:"row mb-15px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("T??n d??? ??n")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('span',{staticClass:"value text-red",class:_vm.getClassCategory(_vm.mapImgFromCategory(_vm.project.category))},[_vm._v("\n                            "+_vm._s(_vm.project.name)+"\n                        ")])])]),_vm._v(" "),_c('div',{staticClass:"row mb-15px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Nh??n vi??n b??o c??o")]),_vm._v(" "),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.objReport.nameStaff),expression:"objReport.nameStaff"}],staticClass:"form-control",attrs:{"type":"text","required":""},domProps:{"value":(_vm.objReport.nameStaff)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objReport, "nameStaff", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"row mb-15px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Th???i gian")]),_vm._v(" "),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.objReport.time),expression:"objReport.time"}],staticClass:"form-control",attrs:{"type":"text","required":""},domProps:{"value":(_vm.objReport.time)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objReport, "time", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"row mb-25px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Nh???t k?? c??ng vi???c")]),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.objReport.note),expression:"objReport.note"}],staticClass:"form-control",attrs:{"type":"text","required":"","rows":"5"},domProps:{"value":(_vm.objReport.note)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objReport, "note", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("H??nh ???nh ????nh k??m")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('InputFile',{key:"file",attrs:{"accept":_vm.acceptFile,"multiple":true,"label":'Th??m h??nh ???nh'},on:{"input":_vm.getFile}}),_vm._v(" "),(_vm.arrFile.length)?_c('div',{staticClass:"col-md-3"}):_vm._e(),_vm._v(" "),(_vm.arrFile.length)?_c('div',[_c('div',{staticClass:"row cover-img"},[(_vm.arrBase64.length)?[_vm._l((_vm.arrBase64),function(item,idx){return [_c('div',{key:idx+50,staticClass:"col-6 img"},[_c('div',{staticClass:" item-img",style:({
                                                    'background-image': 'url(' + "" + (item.base64) + ')',
                                                })},[_c('span',{staticClass:"cursor-pointer ml-5px",on:{"click":function($event){return _vm.clearFile(item)}}},[_c('i',{staticClass:"fas fa-times text-red"})])])])]})]:_vm._e()],2)]):_vm._e(),_vm._v(" "),(_vm.objReport.attachment && _vm.objReport.attachment.length)?_c('div',{staticClass:"col-md-3"}):_vm._e(),_vm._v(" "),(_vm.objReport.attachment && _vm.objReport.attachment.length)?_c('div',[_c('div',{staticClass:"row cover-img"},[(_vm.objReport.attachment && _vm.objReport.attachment.length)?[_vm._l((_vm.objReport.attachment),function(item,idx){return [_c('div',{key:idx+100,staticClass:"col-6 img"},[_c('div',{staticClass:" item-img",style:({
                                                    'background-image': 'url(' + "" + item + ')',
                                                })},[_c('span',{staticClass:"cursor-pointer ml-5px",on:{"click":function($event){return _vm.clearFileOld(item)}}},[_c('i',{staticClass:"fas fa-times text-red"})])])])]})]:_vm._e()],2)]):_vm._e()],1)])]),_vm._v(" "),_c('div',{staticClass:"footer d-flex"},[_c('button',{ref:"btnSubmitReport",staticClass:"d-none",attrs:{"type":"submit"}}),_vm._v(" "),_c('div',{staticClass:"btn-confirm flex-1",on:{"click":function($event){return _vm.triggerForm('OK')}}},[_c('span',[_vm._v("T???O B??O C??O THI C??NG")])]),_vm._v(" "),_c('div',{staticClass:"btn-confirm update flex-1 ml-25px",on:{"click":function($event){return _vm.triggerForm('DRAFT')}}},[_c('span',[_vm._v("L??U B???N NH??P")])])])])])])]},proxy:true}])})}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/popup/payment/createReport.vue?vue&type=template&id=452ce864&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/payment/createReport.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var createReportvue_type_script_lang_js_ = ({props:['project','activeReport'],data(){return{acceptFile:['png','jpg','jpeg','tiff'],objReport:{},arrFile:[],arrBase64:[]};},watch:{activeReport(){this.objReport.time='Tu???n '+Number(this.activeReport);}},methods:{async getForm(){var fileNew=this.arrFile.length?await this.uploadFile(this.arrFile):[];var fileOld=this.objReport.attachment||[];var arrFile=fileOld.concat(fileNew);var obj={...this.objReport,reportId:this.activeReport-1,attachment:arrFile};this.$emit('createReport',obj);this.hide();},updaetObjectReport(obj){this.objReport=obj;},triggerForm(status){this.objReport.status=status;this.$refs.btnSubmitReport.click();},async getFile(arrFile){this.arrFile=this.arrFile.concat(arrFile);var arrBase64=[];this.arrFile.forEach(async item=>{var base64=await this._toBase64(item);arrBase64.push({base64,name:item.name});});this.arrBase64=arrBase64;},clearFile(file){this.arrBase64=this.arrBase64.filter(item=>item.base64!==file.base64);this.arrFile=this.arrFile.filter(item=>item.name!==file.name);},clearFileOld(file){this.objReport.attachment=this.objReport.attachment.filter(item=>item!==file);},show(){this.$refs.modalCreateReport.showModal();},hide(){this.$refs.modalCreateReport.hideModal();this.arrFile=[];this.arrBase64=[];}}});
// CONCATENATED MODULE: ./components/popup/payment/createReport.vue?vue&type=script&lang=js&
 /* harmony default export */ var payment_createReportvue_type_script_lang_js_ = (createReportvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/popup/payment/createReport.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  payment_createReportvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d73e0fd2"
  
)

/* harmony default export */ var createReport = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {InputFile: __webpack_require__(81).default,Modal: __webpack_require__(33).default})


/***/ }),

/***/ 134:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgOS43NjU4NkwzLjc2NTg5IDUuOTk5OTdMMCAyLjIzNDE0TDIuMjM0MTQgMEw2LjAwMDAzIDMuNzY1ODlMOS43NjU4NiAwTDEyIDIuMjM0MTRMOC4yMzQxMSA2LjAwMDAzTDEyIDkuNzY1ODZMOS43NjU4NiAxMkw1Ljk5OTk3IDguMjM0MTFMMi4yMzQwOCAxMkwwIDkuNzY1ODZaIiBmaWxsPSIjRjJGMkYyIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/detailPayment.vue?vue&type=template&id=6f8e7925&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.auction)?_c('div',{staticClass:"detail-payment-component"},[_vm._ssrNode("<div class=\"group-payment\"><p class=\"fw-600 f-16 mb-16px\">Thanh to??n</p> "+(_vm._ssrList((_vm.auction.deal[0].payments),function(item,idx){return ("<div class=\"d-flex\"><span class=\"item\" style=\"width:15%\">"+_vm._ssrEscape("Thanh to??n ?????t "+_vm._s(idx+1))+"</span> <span class=\"item text-left fw-600\" style=\"width:25%\">"+_vm._ssrEscape(_vm._s(item.value))+"</span> "+((_vm.arrRequiredPayment && item.paymentAuction)?("<span class=\"item text-left text-underline fw-600 text-main cursor-pointer\" style=\"width:20%;text-decoration:underline;\">"+_vm._ssrEscape("\n                ????? ngh??? thanh to??n_?????t "+_vm._s(idx+1)+"\n            ")+"</span>"):("<span class=\"item text-left cursor-pointer main-black\" style=\"width:20%\">\n                Ch??a c?? ????? ngh??? thanh to??n\n            </span>"))+" "+((_vm.arrRequiredPayment && item.paymentAuction)?("<span class=\"item text-center fw-600 text-main\" style=\"width:20%\">"+_vm._ssrEscape("\n                "+_vm._s(_vm.formatVnd(item.paymentAuction.price))+" VND\n            ")+"</span>"):("<span class=\"item\" style=\"width:20%\"></span>"))+" "+((_vm.arrRequiredPayment && item.paymentAuction && item.paymentAuction.status != 'DRAFT' && item.paymentAuction.status != 'CANCEL')?(((item.paymentAuction.status == 'DONE')?("<span class=\"item fw-600 text-main\" style=\"width:20%\"><img"+(_vm._ssrAttr("src",__webpack_require__(85)))+" alt> ???? thanh to??n\n                </span>"):(item.paymentAuction.status == 'PENDING' )?("<span class=\"item fw-500 text-main\" style=\"width:20%\"><img"+(_vm._ssrAttr("src",__webpack_require__(102)))+" alt class=\"mb-2px\"> Ch??? x??c nh???n\n                </span>"):"<!---->")):("<span class=\"item\" style=\"width:20%\"></span>"))+"</div>")}))+"</div> "),_vm._ssrNode("<div class=\"group-progress\">","</div>",[_vm._ssrNode("<p class=\"fw-600 f-16 mt-25px mb-16px\">B??o c??o ti???n ?????</p> "),_vm._l((_vm.auction.deal[0].payments),function(item,idx){return _vm._ssrNode("<div class=\"d-flex\">","</div>",[_vm._ssrNode("<span class=\"item\" style=\"width:15%\">"+_vm._ssrEscape(_vm._s(idx+1)+". Tu???n "+_vm._s(idx+1))+"</span> "+((_vm.arrReport.length && item.reportAuction)?("<span class=\"item text-left fw-600 text-main cursor-pointer\" style=\"width:25%;text-decoration:underline\">"+_vm._ssrEscape("\n                Ti???n ????? thi c??ng tu???n th??? "+_vm._s(idx+1)+"\n            ")+"</span>"):("<span class=\"item text-left fw-500 text-red\" style=\"width:25%\">\n               Ch??a c???p nh???t\n            </span>"))+" "),(_vm.arrReport.length && item.reportAuction)?_vm._ssrNode("<span class=\"item d-flex\" style=\"width:60%\">","</span>",[_vm._ssrNode("\n                ????nh gi??:\n                "),_c('Rating',{attrs:{"rating":item.reportAuction.rating ? item.reportAuction.rating : 0,"report":item.reportAuction},on:{"rating":_vm.getRating}})],2):_vm._e()],2)})],2),_vm._ssrNode(" "),_c('PopupPaymentCustomerCreateRequired',{ref:"customerCreateRequired",attrs:{"project":_vm.detailProject,"activeRow":_vm.activeRow,"auction":_vm.auction},on:{"requiredPayment":_vm.getObjRequiredPayment}}),_vm._ssrNode(" "),_c('PopupPaymentCustomerCreateReport',{ref:"customerCreateReport",attrs:{"project":_vm.detailProject,"auction":_vm.auction}})],2):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/detailPayment.vue?vue&type=template&id=6f8e7925&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/detailPayment.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var detailPaymentvue_type_script_lang_js_ = ({props:['auction','detailProject'],data(){return{statusPayment:1,activeRow:0,arrRequiredPayment:[],arrReport:[]};},mounted(){this.getPaymentByAuction();this.getReportByAuction();},methods:{getObjRequiredPayment(obj){var objRequired={...obj,paymentId:objRequired?objRequired.paymentId:this.activeRow,project:this.auction.deal[0].project,auction:this.auction.deal[0].auction,ownerProject:this.detailProject.createBy._id};this.loader();this.$post('member/payments',objRequired).then(res=>{var objNext={project:this.auction.deal[0].project,auction:this.auction.deal[0].auction};return this.$post('member/payments-by-auction',objNext);}).then(res2=>{this.arrRequiredPayment=res2.data;this.auction.deal[0].payments.forEach(item=>delete item.paymentAuction);this.mapAuction();this.loader(0);}).catch(err=>{this.loader(0);});},getPaymentByAuction(){var obj={project:this.auction.deal[0].project,auction:this.auction.deal[0].auction};this.$post('member/payments-by-auction',obj).then(res=>{this.arrRequiredPayment=res.data;this.mapAuction();}).catch(err=>{console.log(err);});},mapAuction(){var arrTmp1=JSON.parse(JSON.stringify(this.auction.deal[0].payments))||[];var arrTmp2=this.arrRequiredPayment;arrTmp1.forEach((item1,index)=>{arrTmp2.forEach(item2=>{if(index==item2.paymentId&&item2.status!='DRAFT'&&item2.status!='CANCEL'){item1.paymentAuction=item2;}});});this.auction.deal[0].payments=arrTmp1;},//Report
getReportByAuction(){var obj={project:this.auction.deal[0].project,auction:this.auction.deal[0].auction};this.$post('member/reports-by-auction',obj).then(res=>{console.log('getReportByAuction',res);this.arrReport=res.data;this.mapReport();}).catch(err=>{console.log(err);});},mapReport(){var arrTmp1=JSON.parse(JSON.stringify(this.auction.deal[0].payments))||[];var arrTmp2=JSON.parse(JSON.stringify(this.arrReport))||[];arrTmp1.forEach((item1,index)=>{arrTmp2.forEach(item2=>{if(index==item2.reportId&&item2.status!='DRAFT'){item1.reportAuction=item2;}});});this.auction.deal[0].payments=arrTmp1;console.log('mapReport',this.auction.deal[0].payments);},//Rating
getRating(objRating){// this.loader()
var obj={rating:objRating.rating+1,_id:objRating._id,project:objRating.project,auction:objRating.auction};this.$post('member/reports-rating',obj).then(res=>{console.log('rating api',res);this.getReportByAuction();this.loader(0);}).catch(err=>{console.log(err);this.loader(0);});},openModalRequired(activeRow){this.$refs.customerCreateRequired.show();this.$refs.customerCreateRequired.updateObjectRequired({});this.activeRow=activeRow;},openModalRequiredUpdate(objRequired,activeRow){//Update row
this.activeRow=activeRow;this.$refs.customerCreateRequired.updateObjectRequired(objRequired);this.$refs.customerCreateRequired.show();},openModalReport(report){this.$refs.customerCreateReport.updateReport(report);this.$refs.customerCreateReport.show();},hideModal(){this.$refs.customerCreateRequired.hide();}}});
// CONCATENATED MODULE: ./components/detailPayment.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_detailPaymentvue_type_script_lang_js_ = (detailPaymentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/detailPayment.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_detailPaymentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4b57972c"
  
)

/* harmony default export */ var detailPayment = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Rating: __webpack_require__(87).default,PopupPaymentCustomerCreateRequired: __webpack_require__(115).default,PopupPaymentCustomerCreateReport: __webpack_require__(116).default})


/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/survey.vue?vue&type=template&id=13313e87&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Modal',{ref:"popupSurvey",attrs:{"id":"modal-survey"},scopedSlots:_vm._u([{key:"content",fn:function(){return [(_vm.objInfor)?_c('div',{staticClass:"modal-contact formCore"},[_c('div',{staticClass:"content"},[(_vm.isCancel)?_c('p',{staticClass:"title f-19 isCancel"},[_vm._v("\n            Hu??? y??u c???u "),_c('span',{staticClass:"text-main"},[_vm._v(_vm._s(_vm.objInfor.auctionBy.company || _vm.objInfor.auctionBy.name))]),_vm._v(" kh???o s??t hi???n tr???ng v?? g???i b??o gi?? cu???i c??ng\n        ")]):_c('p',{staticClass:"title f-20 main-black"},[_vm._v("\n            CH???N "),_c('span',{staticClass:"text-main"},[_vm._v(_vm._s(_vm.objInfor.auctionBy.company || _vm.objInfor.auctionBy.name))]),_vm._v(" KH???O S??T V?? C???P NH???T GI?? C???\n        ")]),_vm._v(" "),_c('form',{staticClass:"group-content mt-20px",on:{"submit":function($event){$event.preventDefault();return _vm.sendMessage()}}},[_c('div',{staticClass:"form-group row"},[_c('label',{staticClass:"f-13 col-md-3 col-sm-12 "},[_vm._v("\n                    T??n d??? ??n\n                ")]),_vm._v(" "),_c('span',{staticClass:"col-md-9 col-sm-12 pl-0 name-project",class:_vm.getClassCategory(_vm.mapImgFromCategory(_vm.rawCategory))},[_vm._v("\n                    "+_vm._s(_vm.detailProject.name)+"\n                ")])]),_vm._v(" "),_c('div',{staticClass:"form-group row"},[_c('label',{staticClass:"f-13 col-md-3 col-sm-12 "},[_vm._v("\n                    So???n tin nh???n\n                    "),_c('span',{staticStyle:{"color":"red"}},[_vm._v("*")])]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.objResearch.message),expression:"objResearch.message"}],staticClass:"form-control col-md-9 col-sm-12",attrs:{"required":"","id":"customPlaceholder","rows":"5","placeholder":_vm.placeholder,"readonly":_vm.isCancel},domProps:{"value":(_vm.objResearch.message)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objResearch, "message", $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"form-group row"},[_c('label',{staticClass:"f-13 col-md-3 col-sm-12 "},[_vm._v("\n                        ?????a ??i???m kh???o s??t\n                        "),_c('span',{staticStyle:{"color":"red"}},[_vm._v("*")])]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.objResearch.address),expression:"objResearch.address"}],staticClass:"form-control col-md-9 col-sm-12",attrs:{"type":"text","placeholder":"Nh???p ?????a ch??? c??ng tr??nh","required":"","readonly":_vm.isCancel},domProps:{"value":(_vm.objResearch.address)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objResearch, "address", $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"form-group row"},[_c('label',{staticClass:"f-13 col-md-3 col-sm-12 "},[_vm._v("\n                        Th???i gian kh???o s??t\n                        "),_c('span',{staticStyle:{"color":"red"}},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"d-flex"},[(_vm.isCancel)?[_c('div',{staticClass:"input-group custom-input-calendar",staticStyle:{"min-width":"170px"}},[_c('input',{staticClass:"form-control",attrs:{"type":"text","readonly":"","required":""},domProps:{"value":_vm.$moment(_vm.objResearch.date).format('DD/MM/YYYY')}}),_vm._v(" "),_c('div',{staticClass:"input-group-append"},[_c('span',{staticClass:"input-group-text custom-time",class:_vm.isCancel ? 'disabled' : ''},[_c('i',{staticClass:"fas fa-calendar-day"})])])])]:[_c('v-date-picker',{ref:"calendar",attrs:{"masks":{input: 'DD/MM/YYYY'},"model-config":{type: 'number',}},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var inputValue = ref.inputValue;
var inputEvents = ref.inputEvents;
return [_c('div',{staticClass:"input-group custom-input-calendar"},[_c('input',_vm._g({staticClass:"form-control",attrs:{"type":"text","readonly":_vm.isCancel,"required":""},domProps:{"value":inputValue}},inputEvents)),_vm._v(" "),_c('div',{staticClass:"input-group-append",on:{"click":function($event){return _vm.triggerCalendar()}}},[_c('span',{staticClass:"input-group-text custom-time",class:_vm.isCancel ? 'disabled' : ''},[_c('i',{staticClass:"fas fa-calendar-day"})])])])]}}],null,false,3653150464),model:{value:(_vm.objResearch.date),callback:function ($$v) {_vm.$set(_vm.objResearch, "date", $$v)},expression:"objResearch.date"}})],_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.objResearch.time),expression:"objResearch.time"}],staticClass:"ml-20px form-control",attrs:{"type":"time","readonly":_vm.isCancel},domProps:{"value":(_vm.objResearch.time)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objResearch, "time", $event.target.value)}}})],2)]),_vm._v(" "),_c('div',{staticClass:"form-group row"},[_c('label',{staticClass:"f-13  col-md-3 col-sm-12 mt-1"},[_vm._v("\n                    T??i li???u ????nh k??m\n                ")]),_vm._v(" "),_c('div',{staticClass:"col-md-9 col-sm-12 pl-0"},[(!_vm.isCancel)?_c('InputFile',{attrs:{"accept":_vm.accepFile,"multiple":true,"label":'Th??m t??i li???u'},on:{"input":_vm.getFile}}):_vm._e(),_vm._v(" "),(_vm.arrFile.length)?_c('div',{staticClass:"col-md-3"}):_vm._e(),_vm._v(" "),(_vm.arrFile.length)?_c('div',{staticClass:"col-md-9 pl-0"},[_vm._l((_vm.arrFile),function(item,idx){return [_c('p',{key:idx,staticClass:"f-11 text-main "},[_c('span',{staticClass:"mr-5px",domProps:{"innerHTML":_vm._s(_vm.returnTypeFile(item.name))}}),_vm._v("\n                                    "+_vm._s(item.name)+"\n                                    "),_c('span',{staticClass:"cursor-pointer ml-5px",on:{"click":function($event){return _vm.clearFile(item)}}},[_c('i',{staticClass:"fas fa-times text-red"})])])]})],2):_vm._e(),_vm._v(" "),(_vm.isCancel && _vm.objInfor.survey[0].attachments)?_c('div',{staticClass:"col-md-3"}):_vm._e(),_vm._v(" "),(_vm.isCancel && _vm.objInfor.survey[0].attachments)?_c('div',{staticClass:"col-md-9 pl-0"},[_vm._l((_vm.objInfor.survey[0].attachments),function(item,idx){return [_c('p',{key:idx,staticClass:"f-11 text-main "},[_c('span',{staticClass:"mr-5px",domProps:{"innerHTML":_vm._s(_vm.returnTypeFile(item))}}),_vm._v("\n                                     "+_vm._s(_vm.spliceURLFile(item,'--'))+"\n                                ")])]})],2):_vm._e()],1)]),_vm._v(" "),_c('div',{staticClass:"form-group mb-50px group-checkbox d-flex"},[_c('b-form-checkbox',{attrs:{"name":"checkbox-agree","required":""},model:{value:(_vm.objResearch.agree),callback:function ($$v) {_vm.$set(_vm.objResearch, "agree", $$v)},expression:"objResearch.agree"}}),_vm._v(" "),_c('span',{staticClass:"f-12 main-black mt-2px ml-5px"},[_vm._v("T??i ?????ng ?? v???i "),_c('span',{staticClass:"main-color"},[_vm._v("??i???u kho???n")]),_vm._v(" c???a Econs "),_c('span',{staticStyle:{"color":"red"}},[_vm._v("*")])])],1),_vm._v(" "),_c('div',{staticClass:"group-btn row"},[(!_vm.$auth.loggedIn)?_c('div',{staticClass:"col-md-12"},[_c('button',{staticClass:"btn-now",attrs:{"type":"button"},on:{"click":function($event){return _vm.hide()}}},[_vm._v("\n                        VUI L??NG ????NG NH???P\n                    ")])]):_c('div',{staticClass:"col-md-12"},[_c('button',{staticClass:"btn-now",class:_vm.isCancel ? 'delete' : '',attrs:{"type":"submit"}},[_vm._v("\n                        "+_vm._s(_vm.isCancel ? "HU??? Y??U C???U KH???O S??T" :"CH???N V?? G???I Y??U C???U KH???O S??T")+"\n                    ")])])])])])]):_vm._e()]},proxy:true}])})}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/popup/survey.vue?vue&type=template&id=13313e87&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/survey.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var surveyvue_type_script_lang_js_ = ({props:['isService','detailProject','rawCategory'],data(){return{objResearch:{agree:false,date:new Date().getTime()},objInfor:null,arrFile:[],accepFile:["png","jpg","jpeg","tiff","pdf","xls","doc","ppt","zip","rar"],options:this.getCategory(),date:new Date(),placeholder:'Xin ch??o, m??nh c?? xem qua h??? s?? n??ng l???c v?? t?? v???n c???a c??ng ty. M??nh quy???t ?????nh ch???n c??ng ty kh???o s??t hi???n tr???ng c??ng tr??nh v?? l??m vi???c k??? h??n v??? gi???i ph??p thi c??ng ????? nh???n ???????c b??o gi?? cu???i c??ng v?? gi???i ph??p ch??nh x??c nh???t cho c??ng tr??nh',isCancel:false};},mounted(){},methods:{triggerCalendar(){this.$refs.calendar.showPopover();},async sendMessage(){try{this.loader();var arrFile=this.arrFile.length?await this.uploadFile(this.arrFile):[];var obj={...this.objResearch,attachments:arrFile,project:this.detailProject._id,auction:this.objInfor._id};if(this.isCancel){let res=await this.$post(`member/survey/cancel`,obj);this.$notify({group:'all',text:`B???n ???? hu??? y??u c???u kh???o s??t v???i ${this.objInfor.auctionBy.company||this.objInfor.auctionBy.name}`,type:'dark'});}else{let res=await this.$post('member/survey',obj);}this.$emit('activeCompany',true);this.resetForm();this.loader(0);this.hide();}catch(err){console.log(err);this.loader(0);}},resetForm(){this.objResearch={};this.arrFile=[];this.objInfor=null;},getInforPerchant(infor){this.objInfor=infor;},setCancelPopup(status){this.isCancel=status;if(status){this.objResearch=this.objInfor.survey[0];}},getFile(file){this.arrFile=this.arrFile.concat(file);},clearFile(file){this.arrFile=this.arrFile.filter(item=>item.name!==file.name);},show(){this.$refs.popupSurvey.showModal();},hide(){this.$refs.popupSurvey.hideModal();}}});
// CONCATENATED MODULE: ./components/popup/survey.vue?vue&type=script&lang=js&
 /* harmony default export */ var popup_surveyvue_type_script_lang_js_ = (surveyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/popup/survey.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  popup_surveyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5b466a90"
  
)

/* harmony default export */ var survey = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {InputFile: __webpack_require__(81).default,Modal: __webpack_require__(33).default})


/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/dealUpdate.vue?vue&type=template&id=ce3bf7d2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Modal',{ref:"popupSurveyUpdate",attrs:{"id":"modal-deal-update"},scopedSlots:_vm._u([{key:"content",fn:function(){return [(_vm.objCompany && _vm.objCompany.deal[0])?_c('div',{staticClass:"modal-contact formCore"},[_c('div',{staticClass:"content"},[_c('p',{staticClass:"title f-14 fw-600"},[_c('span',{staticClass:"text-main"},[_vm._v(_vm._s(_vm.objCompany.auctionBy.company))]),_vm._v(" ???? t??? ch???i y??u c???u th????ng l?????ng c???a b???n\n        ")]),_vm._v(" "),_c('form',{on:{"submit":function($event){$event.preventDefault();return _vm.submitForm()}}},[_c('div',{staticClass:"group-infor"},[_c('div',{staticClass:"row mb-15px mr-60px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("T??n d??? ??n:")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('span',{staticClass:"f-16 fw-600",class:_vm.getClassCategory(_vm.mapImgFromCategory(_vm.rawCategory))},[_vm._v("\n                            "+_vm._s(_vm.detailProject.name)+"\n                        ")])])]),_vm._v(" "),_c('div',{staticClass:"row mb-15px mr-60px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Tin nh???n c???a b???n "),_c('span',{staticClass:"text-red"},[_vm._v("*")])])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.objCompany.deal[0].message),expression:"objCompany.deal[0].message"}],staticClass:"form-control fw-600",attrs:{"required":"","id":"customPlaceholder","rows":"5"},domProps:{"value":(_vm.objCompany.deal[0].message)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objCompany.deal[0], "message", $event.target.value)}}})]],2)]),_vm._v(" "),_c('div',{staticClass:"row mb-15px mr-60px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("????n gi?? d??? th???u")])]),_vm._v(" "),_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"f-13 text-main fw-600"},[_vm._v(_vm._s(_vm.formatNamePrice(_vm.objCompany.price)))])]),_vm._v(" "),_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("????n gi?? th????ng l?????ng")]),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-md-3 "},[_c('div',{staticClass:"input-group"},[_c('currency-input',{staticClass:"form-control fw-600",attrs:{"type":"text","required":"","placeholder":"200,000,000"},model:{value:(_vm.objCompany.deal[0].price),callback:function ($$v) {_vm.$set(_vm.objCompany.deal[0], "price", $$v)},expression:"objCompany.deal[0].price"}}),_vm._v(" "),_c('div',{staticClass:"input-group-append"},[_c('span',{staticClass:"input-group-text f-12"},[_vm._v("VND")])])],1)])]),_vm._v(" "),_c('div',{staticClass:"row mb-15px mr-60px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Ti???n ????? thi c??ng")])]),_vm._v(" "),_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"f-13 text-main fw-600"},[_vm._v(_vm._s(_vm.objCompany.day)+" ng??y")])]),_vm._v(" "),_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Ti???n ????? mong mu???n")]),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-md-3 "},[_c('div',{staticClass:"input-group"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.objCompany.deal[0].day),expression:"objCompany.deal[0].day"}],staticClass:"form-control",attrs:{"type":"text","required":""},domProps:{"value":(_vm.objCompany.deal[0].day)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objCompany.deal[0], "day", $event.target.value)}}}),_vm._v(" "),_c('div',{staticClass:"input-group-append"},[_c('span',{staticClass:"input-group-text f-12"},[_vm._v("Ng??y")])])])])]),_vm._v(" "),(_vm.objCompany.payments.length)?[_vm._l((_vm.objCompany.payments),function(item,idx){return [_c('div',{key:idx+100,staticClass:"row mb-15px mr-60px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Thanh to??n ?????t "+_vm._s(idx+1))])]),_vm._v(" "),_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"f-13 text-main fw-600"},[_vm._v(_vm._s(item.value))])]),_vm._v(" "),_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Thanh to??n ?????t "+_vm._s(idx+1))]),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-md-3"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(item.valueDeal),expression:"item.valueDeal"}],staticClass:"form-control",attrs:{"type":"text","required":""},domProps:{"value":(item.valueDeal)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(item, "valueDeal", $event.target.value)}}})])])]})]:_vm._e(),_vm._v(" "),_c('div',{staticClass:"row mb-15px mr-60px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Y??u c???u b??o c??o")]),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('treeselect',{staticClass:"option-search",attrs:{"options":_vm.optionSearch,"value":_vm.objCompany.deal[0].report,"placeholder":"","clearable":false},model:{value:(_vm.objCompany.deal[0].report),callback:function ($$v) {_vm.$set(_vm.objCompany.deal[0], "report", $$v)},expression:"objCompany.deal[0].report"}})],1)]),_vm._v(" "),_c('div',{staticClass:"row mb-15px mr-60px"},[_c('div',{staticClass:"f-13  col-md-3 col-sm-12 "},[_c('span',{staticClass:"key"},[_vm._v("T??i li??u ????nh k??m:")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9 "},[_c('InputFile',{key:"file",ref:"akjklak",attrs:{"accept":_vm.acceptFile,"multiple":true,"label":'Th??m t??i li???u'},on:{"input":_vm.getFile}})],1),_vm._v(" "),_c('div',{staticClass:"col-md-3"}),_vm._v(" "),_c('div',{staticClass:"col-md-9 "},[(_vm.objCompany && _vm.objCompany.deal[0].attachments)?[_vm._l((_vm.objCompany.deal[0].attachments),function(item,idx){return [_c('p',{key:idx,staticClass:"f-11 text-main "},[_c('span',{staticClass:"mr-5px",domProps:{"innerHTML":_vm._s(_vm.returnTypeFile(item))}}),_vm._v("\n                                     "+_vm._s(_vm.spliceURLFile(item,'--'))+"\n                                ")])]})]:_vm._e(),_vm._v(" "),(_vm.arrFile.length)?[_vm._l((_vm.arrFile),function(item,idx){return [_c('p',{key:idx + 30,staticClass:"f-11 text-main "},[_c('span',{staticClass:"mr-5px",domProps:{"innerHTML":_vm._s(_vm.returnTypeFile(item.name))}}),_vm._v("\n                                    "+_vm._s(item.name)+"\n                                    "),_c('span',{staticClass:"cursor-pointer ml-5px",on:{"click":function($event){return _vm.clearFile(item)}}},[_c('i',{staticClass:"fas fa-times text-red"})])])]})]:_vm._e()],2)]),_vm._v(" "),_c('div',{staticClass:"row mb-15px mr-60px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Ph???n h???i c???a nh?? th???u"),_c('span',{staticClass:"text-red"},[_vm._v("*")])])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.objCompany.deal[0].feedback),expression:"objCompany.deal[0].feedback"}],staticClass:"form-control fw-600",attrs:{"required":"","id":"customPlaceholder","rows":"5"},domProps:{"value":(_vm.objCompany.deal[0].feedback)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objCompany.deal[0], "feedback", $event.target.value)}}})]],2)]),_vm._v(" "),_c('div',{staticClass:"form-group group-checkbox mb-0 d-flex"},[_c('b-form-checkbox',{staticClass:"f-13",attrs:{"checked":_vm.objSurvey.agree,"name":"checkbox-agree","required":""},model:{value:(_vm.objSurvey.agree),callback:function ($$v) {_vm.$set(_vm.objSurvey, "agree", $$v)},expression:"objSurvey.agree"}}),_vm._v(" "),_c('span',{staticClass:"f-12 main-black mt-2px ml-5px"},[_vm._v("T??i ?????ng ?? v???i "),_c('span',{staticClass:"main-color"},[_vm._v("??i???u kho???n")]),_vm._v(" c???a Econs "),_c('span',{staticStyle:{"color":"red"}},[_vm._v("*")])])],1)],2),_vm._v(" "),_c('div',{staticClass:"footer"},[_c('div',{staticClass:"d-flex"},[_c('button',{ref:"btnConfirm",staticClass:"d-none",attrs:{"type":"submit"}}),_vm._v(" "),_c('button',{staticClass:"btn-confirm mr-15px",attrs:{"type":"button"},on:{"click":function($event){return _vm.confirmSurvey('ACCEPT')}}},[_c('span',[_vm._v("?????NG ?? V?? B???T ?????U D??? ??N")])]),_vm._v(" "),_c('button',{staticClass:"btn-confirm update",attrs:{"type":"button"},on:{"click":function($event){return _vm.confirmSurvey('UPDATE')}}},[_c('span',[_vm._v("G???I TH????NG L?????NG C???P NH???T")])])])])])])]):_vm._e()]},proxy:true}])})}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/popup/dealUpdate.vue?vue&type=template&id=ce3bf7d2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/dealUpdate.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var dealUpdatevue_type_script_lang_js_ = ({props:['objCompany','detailProject','rawCategory','isCompany'],data(){return{optionSearch:[{id:1,label:'1 tu???n 1 l???n'},{id:2,label:'2 tu???n 1 l???n'},{id:4,label:'1 th??ng 1 l???n'}],acceptFile:["png","jpg","jpeg","tiff","pdf","xls","doc","ppt","zip","rar"],arrFile:[],objSurvey:{message:'',report:1,agree:false},statusCallAPI:''};},mounted(){if(this.objCompany&&this.objCompany.deal[0]&&this.objCompany.deal[0].payments.length){this.objCompany.deal[0].payments.forEach(item1=>{this.objCompany.payments.forEach(item2=>{item2.valueDeal=item1.value;});});}},methods:{async submitForm(){try{// this.loader()
var arrFile=this.arrFile.length?await this.uploadFile(this.arrFile):[];var arrPayment=[];this.objCompany.payments.forEach(item=>{var obj={key:item.key,value:item.valueDeal};arrPayment.push(obj);});let url='';if(this.statusCallAPI=='ACCEPT'){url='member/auction/deal/destroy';var obj={project:this.objCompany.survey[0].project,auction:this.objCompany.survey[0].auction};}else{var obj={...this.objCompany.deal[0],project:this.objCompany.survey[0].project,auction:this.objCompany.survey[0].auction,payments:arrPayment,attachments:arrFile};url='member/auction/deal/update';}console.log('obj',obj);let res=await this.$post(url,obj);console.log(res);this.hide();if(this.statusCallAPI=='ACCEPT'||this.statusCallAPI=='CANCEL'){this.$emit('getListParent');}else{this.$emit('activeCompany');}}catch(err){this.loader(0);console.log(err);}},confirmSurvey(status){this.statusCallAPI=status;this.$refs.btnConfirm.click();},show(){this.$refs.popupSurveyUpdate.showModal();},hide(){this.$refs.popupSurveyUpdate.hideModal();},clearFile(file){this.arrFile=this.arrFile.filter(item=>item.name!==file.name);},getFile(file){this.arrFile=this.arrFile.concat(file);}}});
// CONCATENATED MODULE: ./components/popup/dealUpdate.vue?vue&type=script&lang=js&
 /* harmony default export */ var popup_dealUpdatevue_type_script_lang_js_ = (dealUpdatevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/popup/dealUpdate.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  popup_dealUpdatevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0b1dfb33"
  
)

/* harmony default export */ var dealUpdate = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {InputFile: __webpack_require__(81).default,Modal: __webpack_require__(33).default})


/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/surveyCustomerContact.vue?vue&type=template&id=afb81fa2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Modal',{ref:"popupSurveyContact",attrs:{"id":"modal-survey-customer-contact"},scopedSlots:_vm._u([{key:"content",fn:function(){return [(_vm.objConfirm)?_c('div',{staticClass:"modal-contact formCore"},[_c('div',{staticClass:"content"},[_c('p',{staticClass:"title f-14"},[_vm._v("\n            Th??ng tin li??n h??? "),_c('span',{staticClass:"text-main"},[_vm._v(_vm._s(_vm.objConfirm.auctionBy.company))])]),_vm._v(" "),_c('div',{staticClass:"group-infor"},[_c('div',{staticClass:"row mb-15px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("H??? T??n:")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('span',{staticClass:"value text-red"},[_vm._v(_vm._s(_vm.objConfirm.auctionBy.name))])])]),_vm._v(" "),_c('div',{staticClass:"row mb-15px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("S??? ??i???n tho???i:")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('span',{staticClass:"value"},[_vm._v(_vm._s(_vm.objConfirm.phone || '090 465 9518'))])])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("?????a ch??? Email:")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('span',{staticClass:"value"},[_vm._v(_vm._s(_vm.objConfirm.email || 'LONGB@EPOINT.VN'))])])])]),_vm._v(" "),_c('div',{staticClass:"footer"},[_c('div',{staticClass:"btn-confirm",on:{"click":function($event){return _vm.hide()}}},[_c('span',[_vm._v("HO??N T???T")])])])])]):_vm._e()]},proxy:true}])})}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/popup/surveyCustomerContact.vue?vue&type=template&id=afb81fa2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/surveyCustomerContact.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var surveyCustomerContactvue_type_script_lang_js_ = ({props:['objConfirm'],methods:{show(){console.log('objProject',this.objConfirm);this.$refs.popupSurveyContact.showModal();},hide(){this.$refs.popupSurveyContact.hideModal();}}});
// CONCATENATED MODULE: ./components/popup/surveyCustomerContact.vue?vue&type=script&lang=js&
 /* harmony default export */ var popup_surveyCustomerContactvue_type_script_lang_js_ = (surveyCustomerContactvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/popup/surveyCustomerContact.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  popup_surveyCustomerContactvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "ba55388c"
  
)

/* harmony default export */ var surveyCustomerContact = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Modal: __webpack_require__(33).default})


/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/paymentCustomer/endProject.vue?vue&type=template&id=40a425a0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Modal',{ref:"modalReportCustomer",attrs:{"id":"modal-payment-report"},scopedSlots:_vm._u([{key:"content",fn:function(){return [_c('div',{staticClass:"modal-contact formCore"},[_c('div',{staticClass:"content"},[_c('p',{staticClass:"title f-20 fw-600"},[_vm._v("\n            Y??U C???U K???T TH??C D??? ??N V???I "),_c('span',{staticClass:"text-main"},[_vm._v(_vm._s(_vm.auction.auctionBy.company))])]),_vm._v(" "),_c('form',{attrs:{"action":""},on:{"submit":function($event){$event.preventDefault();return _vm.endProject()}}},[_c('div',{staticClass:"group-infor no-border pr-60px"},[_c('div',{staticClass:"row mb-15px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("T??n d??? ??n")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('span',{staticClass:"value text-red",class:_vm.getClassCategory(_vm.mapImgFromCategory(_vm.project.category))},[_vm._v("\n                            "+_vm._s(_vm.project.name)+"\n                        ")])])]),_vm._v(" "),_c('div',{staticClass:"row mb-15px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("????nh gi?? ch???t l?????ng")]),_vm._v(" "),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('Rating',{attrs:{"rating":_vm.numberRate},on:{"rating":_vm.getRating}})],1)]),_vm._v(" "),_c('div',{staticClass:"row mb-25px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("????nh gi?? c???a b???n")]),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.objProject.review),expression:"objProject.review"}],staticClass:"form-control",attrs:{"type":"text","required":"","rows":"5"},domProps:{"value":(_vm.objProject.review)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objProject, "review", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"footer d-flex px-0"},[_c('button',{ref:"btnSubmit",staticClass:"d-none",attrs:{"type":"submit"}}),_vm._v(" "),_c('div',{staticClass:"btn-confirm   w-100",on:{"click":function($event){return _vm.triggerForm('CANCEL')}}},[_c('span',[_vm._v("K???T TH??C D??? ??N")])])])])])])])]},proxy:true}])})}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/popup/paymentCustomer/endProject.vue?vue&type=template&id=40a425a0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/paymentCustomer/endProject.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var endProjectvue_type_script_lang_js_ = ({props:['project','auction'],data(){return{numberRate:0,objProject:{}};},methods:{endProject(){this.loader();var obj={...this.objProject,auction:this.auction.deal[0].auction,project:this.auction.deal[0].project,auctionBy:this.auction.auctionBy._id,rating:this.numberRate};this.$post('member/auction/deal/finish',obj).then(res=>{this.$emit('getDetailAgain');this.hide();this.loader(0);}).catch(err=>{this.loader(0);});},getRating(rate){this.numberRate=Number(rate.rating+1);},triggerForm(){this.$refs.btnSubmit.click();},show(){this.$refs.modalReportCustomer.showModal();},hide(){this.$refs.modalReportCustomer.hideModal();this.numberRate=0;}}});
// CONCATENATED MODULE: ./components/popup/paymentCustomer/endProject.vue?vue&type=script&lang=js&
 /* harmony default export */ var paymentCustomer_endProjectvue_type_script_lang_js_ = (endProjectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/popup/paymentCustomer/endProject.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  paymentCustomer_endProjectvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "b8e48cf2"
  
)

/* harmony default export */ var endProject = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Rating: __webpack_require__(87).default,Modal: __webpack_require__(33).default})


/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/detailPaymentCompany.vue?vue&type=template&id=ba4e0852&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.auction)?_c('div',{staticClass:"detail-payment-component"},[_vm._ssrNode("<div class=\"group-payment\"><p class=\"fw-600 f-16 mb-16px\">Thanh to??n</p> "+(_vm._ssrList((_vm.auction.deal[0].payments),function(item,idx){return ("<div class=\"d-flex\"><span class=\"item\" style=\"width:15%\">"+_vm._ssrEscape("Thanh to??n ?????t "+_vm._s(idx+1))+"</span> <span class=\"item text-left fw-600\" style=\"width:25%\">"+_vm._ssrEscape(_vm._s(item.value))+"</span> "+((_vm.arrRequiredPayment && item.paymentAuction)?("<span class=\"item text-left  fw-600 text-main cursor-pointer\" style=\"width:20%;text-decoration:underline;\">"+_vm._ssrEscape("\n                ????? ngh??? thanh to??n_?????t "+_vm._s(idx+1)+"\n            ")+"</span>"):("<span class=\"item text-left cursor-pointer  text-main\" style=\"width:20%\">\n                T???o y??u c???u thanh to??n\n            </span>"))+" "+((_vm.arrRequiredPayment && item.paymentAuction)?("<span class=\"item text-center fw-600 text-main\" style=\"width:20%\">"+_vm._ssrEscape("\n                "+_vm._s(_vm.formatVnd(item.paymentAuction.price))+" VND\n            ")+"</span>"):("<span class=\"item\" style=\"width:40%\"></span>"))+" "+((_vm.arrRequiredPayment && item.paymentAuction && item.paymentAuction.status != 'DRAFT' )?(((item.paymentAuction.status == 'DONE')?("<span class=\"item fw-600 text-main\" style=\"width:20%\"><img"+(_vm._ssrAttr("src",__webpack_require__(85)))+" alt> ???? thanh to??n\n                </span>"):(item.paymentAuction.status == 'PENDING' )?("<span class=\"item fw-600 text-red\" style=\"width:20%\"><img"+(_vm._ssrAttr("src",__webpack_require__(103)))+" alt class=\"mb-2px\"> Ch??a thanh to??n\n                </span>"):(item.paymentAuction.status == 'CANCEL' )?("<span class=\"item fw-600 text-red\" style=\"width:20%\"><img"+(_vm._ssrAttr("src",__webpack_require__(103)))+" alt class=\"mb-2px\"> T??? ch???i thanh to??n\n                </span>"):"<!---->")):("<span class=\"item\" style=\"width:20%\"></span>"))+"</div>")}))+"</div> "),_vm._ssrNode("<div class=\"group-progress\">","</div>",[_vm._ssrNode("<p class=\"fw-600 f-16 mt-25px mb-16px\">B??o c??o ti???n ?????</p> "),_vm._l((_vm.auction.deal[0].payments),function(item,idx){return _vm._ssrNode("<div class=\"d-flex\">","</div>",[_vm._ssrNode("<span class=\"item\" style=\"width:15%\">"+_vm._ssrEscape(_vm._s(idx+1)+". Tu???n "+_vm._s(idx+1))+"</span> "+((_vm.arrReport.length && item.reportAuction)?("<span class=\"item text-left fw-600 cursor-pointer text-main  \" style=\"width:25%;text-decoration:underline\">"+_vm._ssrEscape("\n                Ti???n ????? thi c??ng tu???n th??? "+_vm._s(idx+1)+"\n            ")+"</span>"):("<span class=\"item text-left fw-500 cursor-pointer text-main\" style=\"width:25%\">\n                B??o c??o ti???n ?????\n            </span>"))+" "),(_vm.arrReport.length && item.reportAuction && item.reportAuction.status !== 'DRAFT' )?_vm._ssrNode("<span class=\"item d-flex\" style=\"width:60%\">","</span>",[_vm._ssrNode("\n                Kh??ch h??ng ????nh gi??:\n                "),_c('Rating',{attrs:{"rating":item.reportAuction.rating ? item.reportAuction.rating : 0,"noClick":true}})],2):_vm._e()],2)})],2),_vm._ssrNode(" "),_c('PopupPaymentCreateRequired',{ref:"createRequired",attrs:{"project":_vm.detailProject,"activeRow":_vm.activeRow},on:{"requiredPayment":_vm.getObjRequiredPayment}}),_vm._ssrNode(" "),_c('PopupPaymentCreateReport',{ref:"createReport",attrs:{"project":_vm.detailProject,"activeReport":_vm.activeReport},on:{"createReport":_vm.getCreateReport}})],2):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/detailPaymentCompany.vue?vue&type=template&id=ba4e0852&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/detailPaymentCompany.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var detailPaymentCompanyvue_type_script_lang_js_ = ({props:['auction','detailProject'],data(){return{statusPayment:1,activeRow:0,activeReport:0,arrRequiredPayment:[],arrReport:[]};},mounted(){this.getPaymentByAuction();this.getReportByAuction();},methods:{getObjRequiredPayment(obj){var objRequired={...obj,paymentId:objRequired?objRequired.paymentId:this.activeRow,project:this.auction.deal[0].project,auction:this.auction.deal[0].auction,ownerProject:this.detailProject.createBy._id};this.loader();this.$post('member/payments',objRequired).then(res=>{var objNext={project:this.auction.deal[0].project,auction:this.auction.deal[0].auction};return this.$post('member/payments-by-auction',objNext);}).then(res2=>{this.arrRequiredPayment=res2.data;this.auction.deal[0].payments.forEach(item=>delete item.paymentAuction);this.mapAuction();this.loader(0);}).catch(err=>{this.loader(0);});},getPaymentByAuction(){var obj={project:this.auction.deal[0].project,auction:this.auction.deal[0].auction};this.$post('member/payments-by-auction',obj).then(res=>{this.arrRequiredPayment=res.data;this.mapAuction();}).catch(err=>{console.log(err);});},mapAuction(){var arrTmp1=JSON.parse(JSON.stringify(this.auction.deal[0].payments))||[];var arrTmp2=JSON.parse(JSON.stringify(this.arrRequiredPayment))||[];arrTmp1.forEach((item1,index)=>{arrTmp2.forEach(item2=>{if(index==item2.paymentId){item1.paymentAuction=item2;}});});this.auction.deal[0].payments=arrTmp1;},// Report
getCreateReport(obj){this.loader();var objReport={...obj,project:this.auction.deal[0].project,auction:this.auction.deal[0].auction,ownerProject:this.detailProject.createBy._id};this.$post('member/reports',objReport).then(res=>{console.log('reports',res);var objNext={project:this.auction.deal[0].project,auction:this.auction.deal[0].auction};return this.$post('member/reports-by-auction',objNext);}).then(res2=>{this.arrReport=res2.data;this.auction.deal[0].payments.forEach(item=>delete item.reportAuction);this.mapReport();this.loader(0);}).catch(err=>{console.log(err);this.loader(0);});},getReportByAuction(){var obj={project:this.auction.deal[0].project,auction:this.auction.deal[0].auction};this.$post('member/reports-by-auction',obj).then(res=>{console.log('getReportByAuction',res);this.arrReport=res.data;this.mapReport();}).catch(err=>{console.log(err);});},mapReport(){var arrTmp1=JSON.parse(JSON.stringify(this.auction.deal[0].payments))||[];var arrTmp2=JSON.parse(JSON.stringify(this.arrReport))||[];arrTmp1.forEach((item1,index)=>{arrTmp2.forEach(item2=>{if(index==item2.reportId){item1.reportAuction=item2;}});});this.auction.deal[0].payments=arrTmp1;console.log('mapReport',this.auction.deal[0].payments);},openModalReport(idxRow){this.activeReport=idxRow+1;this.$refs.createReport.updaetObjectReport({});this.$refs.createReport.show();},openModalUpdateReport(objReport,index){this.activeReport=index+1;this.$refs.createReport.updaetObjectReport(objReport);this.$refs.createReport.show();},openModalRequired(activeRow){this.$refs.createRequired.show();this.$refs.createRequired.updateObjectRequired({});this.activeRow=activeRow;},openModalRequiredUpdate(objRequired,activeRow){//Update row
this.activeRow=activeRow;this.$refs.createRequired.updateObjectRequired(objRequired);this.$refs.createRequired.show();},hideModal(){this.$refs.createRequired.hide();}}});
// CONCATENATED MODULE: ./components/detailPaymentCompany.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_detailPaymentCompanyvue_type_script_lang_js_ = (detailPaymentCompanyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/detailPaymentCompany.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_detailPaymentCompanyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "eafd833a"
  
)

/* harmony default export */ var detailPaymentCompany = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Rating: __webpack_require__(87).default,PopupPaymentCreateRequired: __webpack_require__(117).default,PopupPaymentCreateReport: __webpack_require__(118).default})


/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/area.3f2a7d8.svg";

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxMyAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjkyNjkgMTMuOTA4OEMxMi40Nzg3IDEwLjgyMTMgMTEuMzA5NiA3Ljc3ODc0IDguNTUxNTkgNi44MDMwNkM5LjYyMzQ3IDYuMTE5NDUgMTAuMzM0OSA0LjkwMzA2IDEwLjMzNDkgMy41MTMzNkMxMC4zMzQ5IDEuMzc1ODUgOC42NDI0OCAtMC4zNjA0NzQgNi41NTIwMSAtMC4zNjA0NzRDNC40NjE1NCAtMC4zNjA0NzQgMi43NjkxIDEuMzcyNjQgMi43NjkxIDMuNTEzMzZDMi43NjkxIDQuODk5ODUgMy40ODM2OSA2LjExOTQ1IDQuNTUyNDMgNi44MDMwNkMxLjc5NDM4IDcuNzc4NzQgMC42MjIyMTQgMTAuODIxMyAwLjE3NzE2NiAxMy45MDg4QzAuMDkyNTQ0NSAxNC40ODMzIDAuNTM0NDU4IDE1LjAwMDEgMS4xMDE3NCAxNS4wMDAxSDExLjk5NkMxMi41Njk2IDE1LjAwMDEgMTMuMDExNSAxNC40ODMzIDEyLjkyNjkgMTMuOTA4OFpNNC4xOTUxNCAzLjUxMzM2QzQuMTk1MTQgMi4xODE0MyA1LjI1NDQ3IDEuMDk2NjMgNi41NTUxNCAxLjA5NjYzQzYuODY1NDIgMS4wOTY2MyA3LjExOTI5IDEuMzU2NTkgNy4xMTkyOSAxLjY3NDMzQzcuMTE5MjkgMS45OTIwNyA2Ljg2NTQyIDIuMjUyMDQgNi41NTUxNCAyLjI1MjA0QzUuODc1MDMgMi4yNTIwNCA1LjMyMzQzIDIuODE2OSA1LjMyMzQzIDMuNTEzMzZDNS4zMjM0MyAzLjgzMTA5IDUuMDY5NTYgNC4wOTEwNiA0Ljc1OTI4IDQuMDkxMDZDNC40NDU4NyA0LjA5MTA2IDQuMTk1MTQgMy44MzQzIDQuMTk1MTQgMy41MTMzNloiIGZpbGw9IiM2NTY1NjUiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/CheckboxBig.bda5924.svg";

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxOSAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2LjAxNTIgMTMuOTM0NEMxNS40NTI3IDEwLjkxOTMgMTMuOTg1NSA3Ljk0ODE4IDEwLjUyMzggNi45OTU0QzExLjg2OTEgNi4zMjc4MyAxMi43NjIxIDUuMTM5OTkgMTIuNzYyMSAzLjc4MjkxQzEyLjc2MjEgMS42OTU1NyAxMC42Mzc5IDAgOC4wMTQxNiAwQzUuMzkwNCAwIDMuMjY2MjIgMS42OTI0NCAzLjI2NjIyIDMuNzgyOTFDMy4yNjYyMiA1LjEzNjg2IDQuMTYzMDkgNi4zMjc4MyA1LjUwNDQ4IDYuOTk1NEMyLjA0Mjg1IDcuOTQ4MTggMC41NzE2NTcgMTAuOTE5MyAwLjAxMzA3NiAxMy45MzQ0Qy0wLjA5MzEzMyAxNC40OTU0IDAuNDYxNTE0IDE1IDEuMTczNTEgMTVIMTQuODQ2OUMxNS41NjY4IDE1IDE2LjEyMTQgMTQuNDk1NCAxNi4wMTUyIDEzLjkzNDRaTTUuMDU2MDQgMy43ODI5MUM1LjA1NjA0IDIuNDgyMjQgNi4zODU2MiAxLjQyMjkgOC4wMTgwOSAxLjQyMjlDOC40MDc1MiAxLjQyMjkgOC43MjYxNSAxLjY3Njc3IDguNzI2MTUgMS45ODcwNUM4LjcyNjE1IDIuMjk3MzMgOC40MDc1MiAyLjU1MTE5IDguMDE4MDkgMi41NTExOUM3LjE2NDQ4IDIuNTUxMTkgNi40NzIxNiAzLjEwMjggNi40NzIxNiAzLjc4MjkxQzYuNDcyMTYgNC4wOTMxOSA2LjE1MzUzIDQuMzQ3MDUgNS43NjQxIDQuMzQ3MDVDNS4zNzA3MyA0LjM0NzA1IDUuMDU2MDQgNC4wOTYzMiA1LjA1NjA0IDMuNzgyOTFaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxNiAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik0xNS4xOTcxIDAuNUgxMy44MTI1QzEzLjQzMTcgMC41IDEzLjEyMDEgMC43MTc3NDIgMTMuMTIwMSAwLjk4Mzg3MVYxMC4wMTYxQzEzLjEyMDEgMTAuMjgyMyAxMy40MzE3IDEwLjUgMTMuODEyNSAxMC41SDE1LjE5NzFDMTUuNTc3OSAxMC41IDE1Ljg4OTUgMTAuMjgyMyAxNS44ODk1IDEwLjAxNjFWMC45ODM4NzFDMTUuODg5NSAwLjcxNzc0MiAxNS41Nzc5IDAuNSAxNS4xOTcxIDAuNVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yLjQ5MzA2IDYuNjg1NDVINS4zNzc4M0M1Ljc3MDE2IDYuNjg1NDUgNi4wOTMyNSA2LjkxMTI2IDYuMDkzMjUgNy4xODU0NVY4LjA0ODM1QzYuMDkzMjUgOC40Njc3OSA2Ljc4NTU5IDguNzAxNjYgNy4yNTg2OSA4LjQ0MzUxTDExLjg3NDMgNS45MzU0NUMxMi4yNDM2IDUuNzMzODQgMTIuMjQzNiA1LjMzODY4IDExLjg3NDMgNS4xMzcwNkw3LjI1ODY5IDIuNTU2NDJDNi43ODU1OSAyLjI5ODM1IDYuMDkzMjUgMi41MzIyMiA2LjA5MzI1IDIuOTU5NjRWMy44MjI1NUM2LjA5MzI1IDQuMDk2NzQgNS43NzAxNiA0LjMyMjU1IDUuMzc3ODMgNC4zMjI1NUgyLjQ5MzA2QzIuMTAwNzQgNC4zMjI1NSAxLjc3NzY0IDQuNTQ4MzUgMS43Nzc2NCA0LjgyMjU1VjYuMTc3MzlDMS43NjYxIDYuNDU5NjQgMi4wODkyIDYuNjg1NDUgMi40OTMwNiA2LjY4NTQ1WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjxyZWN0IHdpZHRoPSIxNiIgaGVpZ2h0PSIxMCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMC41KSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-survey.4ed5e72.svg";

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/quote/form.vue?vue&type=template&id=4a356c88&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.isShowForm)?_c('div',[_vm._ssrNode("<h3 class=\"h5 main-black f-14 fw-700\">"+((_vm.isUpdateQuote)?("\n            C???p nh???t ch??o gi?? cho d??? ??n\n        "):("\n            G???i ch??o gi?? cho d??? ??n - B???n s??? t???n\n            <span class=\"main-color\"><span class=\"f-20\">3</span> Tokens</span> khi tham gia ch??o gi??\n        "))+"</h3> <hr class=\"hr\"> "),_vm._ssrNode("<form class=\"group-content\">","</form>",[_vm._ssrNode("<div class=\"form-group row mb-25px align-items-center\">","</div>",[_vm._ssrNode("<label class=\"f-13 col-md-3 col-sm-12 fw-600\">\n                Chi ph?? ?????c t??nh\n                <span style=\"color:red\">*</span></label> "),_vm._ssrNode("<div class=\" col-md-9 col-sm-12\">","</div>",[_vm._ssrNode("<div class=\"input-group\">","</div>",[_c('currency-input',{staticClass:"form-control",attrs:{"type":"text","required":"","placeholder":"200,000,000"},model:{value:(_vm.objForm.price),callback:function ($$v) {_vm.$set(_vm.objForm, "price", $$v)},expression:"objForm.price"}}),_vm._ssrNode(" <div class=\"input-group-append\"><span class=\"input-group-text f-12\">VND</span></div>")],2),_vm._ssrNode(" <p class=\"mb-0 mt-5px f-12 main-black\">\n                    Ph?? hoa h???ng n???u tr??ng th???u -\n                    <span class=\"main-color fw-600\">500</span> <span class=\"fw-600\">Tokens</span></p>")],2)],2),_vm._ssrNode(" <div class=\"form-group row mb-25px align-items-center\"><label class=\"f-13 col-md-3 col-sm-12 fw-600\">"+_vm._ssrEscape("\n                "+_vm._s(_vm.isUpdateQuote ? 'Gi???i ph??p ????? xu???t v?? l?? do t???i sao b??o gi?? l???i cao/th???p h??n gi?? ?????c l?????ng ban ?????u' : 'Kinh nghi???m, N??ng l???c v?? gi???i ph??p ????? xu???t')+"\n\n                ")+"<span style=\"color:red\">*</span></label> <div class=\"col-md-9 col-sm-12\"><textarea required=\"required\" id=\"customPlaceholder\" rows=\"5\""+(_vm._ssrAttr("placeholder",_vm.place))+" class=\"form-control main-black \">"+_vm._ssrEscape(_vm._s(_vm.objForm.description))+"</textarea></div></div> <div class=\"form-group row mb-25px align-items-center\"><label class=\"f-13 col-md-3 col-sm-12 fw-600 mb-0\">\n                Th???i gian thi c??ng d??? tr??\n                <span style=\"color:red\">*</span></label> <div class=\"col-md-3 col-sm-12 \"><div class=\"input-group\"><input type=\"text\""+(_vm._ssrAttr("value",(_vm.objForm.day)))+" class=\"form-control \"> <div class=\"input-group-append\"><span class=\"input-group-text py-0 px-10px f-12\">Ng??y</span></div></div></div></div> "+((_vm.isUpdateQuote)?((_vm._ssrList((_vm.objForm.payments),function(item,idx){return ("<div class=\"form-group row mb-25px align-items-center\"><label class=\"f-13 col-md-3 col-sm-12 fw-600\">"+_vm._ssrEscape("\n                        Thanh to??n ?????t "+_vm._s(idx+1)+"\n                        ")+"<span style=\"color:red\">*</span></label> <div class=\" col-md-9 col-sm-12 d-flex\"><div style=\"width:200px\"><input type=\"text\" required=\"required\" placeholder=\"200,000,000\""+(_vm._ssrAttr("value",(item.value)))+" class=\"form-control\"></div> "+((_vm.objForm.payments.length == 1)?("<span class=\"ml-10px mt-7px text-main f-12 cursor-pointer\">Th??m ????? ngh??? thanh to??n</span>"):(((idx+1 == _vm.objForm.payments.length)?("<span class=\"ml-10px mt-7px text-main f-12 cursor-pointer\">Th??m ????? ngh??? thanh to??n</span>"):("<span class=\"text-red mt-3px ml-5px cursor-pointer\"><i class=\"fas fa-times\"></i></span>"))))+"</div></div>")}))):"<!---->")+" "),_vm._ssrNode("<div class=\"form-group row mb-25px align-items-center\">","</div>",[_vm._ssrNode("<label class=\"f-13 col-md-3 col-sm-12 fw-600\">\n                T??i li???u ????nh k??m\n            </label> "),_vm._ssrNode("<div class=\"col-md-9 col-sm-12\">","</div>",[_c('InputFile',{attrs:{"accept":_vm.accepFile,"multiple":true,"label":'Th??m t??i li???u'},on:{"input":_vm.getFile}}),_vm._ssrNode(" "+((_vm.arrFile.length)?("<div class=\"col-md-3\"></div>"):"<!---->")+" "+((_vm.arrFile.length)?("<div class=\"col-md-9 pl-0\">"+(_vm._ssrList((_vm.arrFile),function(item,idx){return ("<p class=\"f-11 text-main \"><span class=\"mr-5px\">"+(_vm._s(_vm.returnTypeFile(item.name)))+"</span>"+_vm._ssrEscape("\n                            "+_vm._s(item.name)+"\n                            ")+"<span class=\"cursor-pointer ml-5px\"><i class=\"fas fa-times text-red\"></i></span></p>")}))+"</div>"):"<!---->"))],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"form-group mb-50px group-checkbox d-flex\">","</div>",[_c('b-form-checkbox',{attrs:{"name":"checkbox-agree","required":""},model:{value:(_vm.objForm.agree),callback:function ($$v) {_vm.$set(_vm.objForm, "agree", $$v)},expression:"objForm.agree"}}),_vm._ssrNode(" <span class=\"f-12 main-black mt-2px ml-5px\">T??i ?????ng ?? v???i <span class=\"main-color\">??i???u kho???n</span> c???a Econs <span style=\"color:red\">*</span></span>")],2),_vm._ssrNode(" <div class=\"group-btn\"><div class=\"d-flex mt-25px justify-content-xl-around row\"><div class=\"col-md-6 col-sm-12\"><button type=\"submit\" class=\" btn btn-primary main-bg-color radius-5 w-100  text-16 fw-700\">"+_vm._ssrEscape("\n                    "+_vm._s(_vm.isUpdateQuote ? 'C???P NH???T B??O GI??' :'G???I CH??O GI?? NGAY')+"\n                ")+"</button></div> <div class=\"col-md-6 col-sm-12\"><button type=\"button\" class=\" btn btn-primary main-bg-color radius-5 w-100  btn-brown text-16 pr-0 fw-700\">\n                    L??U B???N NH??P\n                </button></div></div></div>")],2)],2):_c('div',[_vm._ssrNode("<div class=\"text-center\"><img"+(_vm._ssrAttr("src",__webpack_require__(179)))+"> "+((_vm.$auth.loggedIn && _vm.$auth.user.canAuction)?("<p class=\"f-19 main-black fw-600\">B???n ???? g???i ch??o gi?? cho\n            <span class=\"text-main\">"+_vm._ssrEscape(_vm._s(_vm.quoteName))+"</span></p>"):"<!---->")+" "+((!_vm.$auth.loggedIn)?("<p class=\"f-19 main-black fw-600\">\n            Vui l??ng ????ng nh???p ????? ch??o gi??\n        </p>"):"<!---->")+" "+((_vm.$auth.loggedIn && !_vm.$auth.user.canAuction)?("<p class=\"f-19 main-black fw-600\">\n            Vui l??ng ho??n th??nh h??? s?? v?? x??c th???c t??i kho???n\n        </p>"):"<!---->")+"</div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/quote/form.vue?vue&type=template&id=4a356c88&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/quote/form.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var formvue_type_script_lang_js_ = ({props:['id','quoteName',"detailProject"],data(){return{place:`1. M?? t??? chi ti???t v??? d??? ??n x??y d???ng ho???c y??u c???u thi???t k??? c???a b???n \n2. Vui l??ng ????nh k??m s??? ?????, b???n v???, thi???t k??? ho???c h??nh ???nh minh ho??? ????? nh???n ???????c t?? v???n/d??? to??n t???t nh???t. \n3. Y??u c???u n??ng l???c c???a ????n v??? b??o gi?? ho???c nh???ng y??u c???u kh??c`,objForm:{agree:false},accepFile:["png","jpg","tiff","pdf","xls","doc","ppt","zip","rar"],arrFile:[],isShowForm:false,isUpdateQuote:false};},mounted(){this.getQuote();},methods:{getQuote(){if(this.$auth&&this.$auth.user&&this.$auth.user.canAuction){this.$get(`member/auction/project/${this.id}`).then(res=>{if(res.data.status){if(res.data.auction){if(res.data.auction.status=='DRAFT'){this.objForm={...res.data.auction};this.isShowForm=true;}else{if(res.data.auction.step===1&&res.data.auction.survey.length&&res.data.auction.statusUpdate=='DRAFT'){this.objForm={...res.data.auction,payments:res.data.auction.payments.length?res.data.auction.payments:[{key:1,value:0}]};this.isShowForm=true;this.isUpdateQuote=true;}else{this.isShowForm=false;}}}else{this.isShowForm=true;}}}).catch(err=>{console.log(err);});}else{this.isShowForm=false;}},async createQuote(status){this.loader();try{var arrFile=this.arrFile.length?await this.uploadFile(this.arrFile):[];var obj={...this.objForm,day:Number(this.objForm.day),attachments:arrFile,projectOwner:this.detailProject.createBy._id};console.log(obj);var url=`member/auction/project/${this.id}`;if(this.isUpdateQuote){obj.statusUpdate=status;obj.step=2;}else{obj.status=status;}let res=await this.$post(url,obj);console.log('res',res);this.resetForm();this.getQuote();this.loader(0);this.$emit('callGetList');this.$auth.fetchUser();}catch(err){console.log(err);this.loader(0);}},resetForm(){this.objForm={};this.arrFile=[];},getFile(file){this.arrFile=this.arrFile.concat(file);},clearFile(file){this.arrFile=this.arrFile.filter(item=>item.name!==file.name);},addPayment(){var length=this.objForm.payments.length;var obj={key:length,value:0};this.objForm.payments.push(obj);},clearPayment(item){if(this.objForm.payments.length==1)return;this.objForm.payments=this.objForm.payments.filter(pay=>pay.key!=item.key);}}});
// CONCATENATED MODULE: ./components/quote/form.vue?vue&type=script&lang=js&
 /* harmony default export */ var quote_formvue_type_script_lang_js_ = (formvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/quote/form.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  quote_formvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "801a3e5c"
  
)

/* harmony default export */ var quote_form = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {InputFile: __webpack_require__(81).default})


/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CompanyQuote.vue?vue&type=template&id=5d64064e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"d-flex flex-wrap company-quote\"><div class=\"infor-company col-12 d-flex pb-20px  px-0 justify-content-between\"><div class=\"col-9 d-flex align-items-center\"><div>"+((_vm.company.auctionBy && _vm.company.auctionBy.photo)?("<img"+(_vm._ssrAttr("src",_vm.company.auctionBy.photo))+" width=\"70\" height=\"75\">"):("<div class=\"cover-img\"><span>"+_vm._ssrEscape(_vm._s(_vm.company.auctionBy.company.slice(0,1).toUpperCase() || _vm.company.auctionBy.name.slice(0,1).toUpperCase()))+"</span></div>"))+"</div> <div class=\"ml-1 ml-16px\"><p class=\"mb-0 f-14 fw-600 main-black\">"+_vm._ssrEscape(_vm._s(_vm.company.auctionBy.company))+"</p> <div class=\"d-inline-flex main-black pt-10px pb-10px\"><div class=\"star-rate mr-1\">\n                    5.0\n                </div> "+(_vm._ssrList((4),function(item,idx){return ("<div class=\"group-star\"><i class=\"fas fa-star mr-1px f-13 main-yellow\"></i></div>")}))+" <span class=\"evaluate f-12 mb-0  ml-4px\">\n                    (<span class=\"main-yellow\">4</span> ????nh gi??)\n                </span></div> <div class=\"text-11 color-grey\"><span>Chi ph?? ?????c t??nh -\n                    <span class=\"fw-600 main-color text-13\">"+_vm._ssrEscape("\n                        "+_vm._s(_vm.formatNamePrice(_vm.company.price))+"\n                    ")+"</span></span> <span class=\"px-11px\"> | </span> <span>Th???i gian thi c??ng -\n                    <span class=\"fw-600 main-color text-13\">"+_vm._ssrEscape("\n                        "+_vm._s(_vm.company.day)+" ng??y\n                    ")+"</span></span></div></div></div> <div class=\"col-auto\"><img"+(_vm._ssrAttr("src",__webpack_require__(86)))+"> <span class=\"main-color text-11\">"+_vm._ssrEscape(_vm._s(_vm.company.auctionBy.province))+"</span></div></div> <div class=\"col-12\"><div class=\"main-black text-13 break-line\">"+_vm._ssrEscape(_vm._s(_vm.company.description))+"</div></div> "+((_vm.$auth && _vm.$auth.user  && _vm.$auth.user._id == _vm.company.auctionBy._id && _vm.company.step == 0 && _vm.company.survey.length)?("<div class=\"cover-btn\"><div class=\"btn-send cup mr-10px ml-0\"><img"+(_vm._ssrAttr("src",__webpack_require__(84)))+" alt> <span>Xem y??u c???u kh???o s??t</span></div></div>"):"<!---->")+" "+((_vm.$auth && _vm.$auth.user  && _vm.$auth.user._id == _vm.company.auctionBy._id && _vm.company.statusUpdate == 'ACTIVE' && _vm.company.step == 3 && _vm.company.deal.length && _vm.company.deal[0].status != 'CANCEL'
    )?("<div class=\"cover-btn\"><div class=\"btn-send cup mr-10px ml-0\"><img"+(_vm._ssrAttr("src",__webpack_require__(84)))+" alt> <span>Xem y??u c???u th????ng l?????ng</span></div></div>"):"<!---->")+"</div> <hr class=\"hr\"> "),(_vm.company)?_c('PopupViewSurvey',{ref:"popupViewSurvey",attrs:{"objProject":_vm.company,"detailProject":_vm.detailProject,"rawCategory":_vm.rawCategory},on:{"getListParent":_vm.getListQuote}}):_vm._e(),_vm._ssrNode(" "),(_vm.company)?_c('PopupSurveyUpdate',{ref:"surveyUpdate",attrs:{"objCompany":_vm.company,"detailProject":_vm.detailProject,"rawCategory":_vm.rawCategory,"isCompany":true},on:{"getListParent":_vm.getListQuote}}):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/CompanyQuote.vue?vue&type=template&id=5d64064e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CompanyQuote.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CompanyQuotevue_type_script_lang_js_ = ({props:['company','rawCategory','detailProject'],mounted(){},methods:{viewSurvey(){this.$refs.popupViewSurvey.show();this.$refs.popupViewSurvey.getInforPerchant(this.detailProject.createBy);},viewSurveyUpdate(){this.$refs.surveyUpdate.show();},getListQuote(){this.$emit('getDetailAgain');}}});
// CONCATENATED MODULE: ./components/CompanyQuote.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CompanyQuotevue_type_script_lang_js_ = (CompanyQuotevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/CompanyQuote.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CompanyQuotevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6741308c"
  
)

/* harmony default export */ var CompanyQuote = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {PopupViewSurvey: __webpack_require__(96).default,PopupSurveyUpdate: __webpack_require__(92).default})


/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Customer.vue?vue&type=template&id=54e4d892&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"title \"><h3 class=\"text-16 fw-600 main-black mb-0 pl-24px\">\n            Th??ng tin kh??ch h??ng\n        </h3> <hr class=\"hr my-15px\"></div> <section id=\"infor-component\" class=\"custom-customer\"><div class=\"cover-img mt-20px \""+(_vm._ssrStyle(null,{
                    'background-image': 'url(' + "" + (_vm.detailAccount.photo) + ')',
                }, null))+"><div class=\"stt custom fw-500 text-center\"><p class=\"f-12 w-100\"><img"+(_vm._ssrAttr("src",__webpack_require__(180)))+" class=\"mb-2px\">"+_vm._ssrEscape("\n                    "+_vm._s(_vm.detailAccount.name)+"\n                ")+"</p></div></div> <div class=\"group-star d-flex mt-20px mb-20px\"><div class=\"star-number mr-4px\"><p class=\"f-10\">5.0</p></div> "+(_vm._ssrList((5),function(item,idx){return ("<div><i class=\"fas fa-star mr-1px f-13\"></i></div>")}))+" <p class=\"evaluate f-12 mb-0 mt-5px ml-4px\">(<span>5</span>  ????nh gi??)</p></div> "+((_vm.$auth.loggedIn)?("<p class=\"mb-0 f-13 mb-15px\">B???n s??? t???n <span class=\"text-main fw-600\">3 Tokens</span> khi li??n h??? tr???c ti???p v???i kh??ch ????ng tin</p> <div class=\"btn-contact d-block mb-0 cursor-pointer\"><span><img"+(_vm._ssrAttr("src",__webpack_require__(101)))+" class=\"mb-3px\">\n                    Li??n h??? tr???c ti???p\n                </span></div>"):"<!---->")+"</section> "),_c('PopupLienhe',{ref:"refLienHe"})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Customer.vue?vue&type=template&id=54e4d892&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Customer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Customervue_type_script_lang_js_ = ({props:["user"],data(){return{detailAccount:{}};},mounted(){this.getDetailCustomer();},methods:{getDetailCustomer(){this.$get(`public/customer/${this.user._id}`).then(res=>{console.log(res);this.detailAccount=res.data;}).catch(err=>{console.log(err);});},openLienHe(){this.$refs.refLienHe.show();this.$refs.refLienHe.passIDInfor(this.user);}}});
// CONCATENATED MODULE: ./components/Customer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Customervue_type_script_lang_js_ = (Customervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Customer.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Customervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5bc55199"
  
)

/* harmony default export */ var Customer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {PopupLienhe: __webpack_require__(95).default})


/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CompanyQuoteOwner.vue?vue&type=template&id=0594bba0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"company-quote-owner",class:[_vm.company && (_vm.company.survey.length) ? 'active' : 'border-0', _vm.bgWhite ? 'bg-white': '' ]},[_vm._ssrNode("<div class=\"row cover\"><div class=\"col-md-6 col-sm-12   pr-0 \"><div class=\"d-flex content-left\"><div>"+((_vm.company.auctionBy && _vm.company.auctionBy.photo)?("<img"+(_vm._ssrAttr("src",_vm.company.auctionBy.photo))+" width=\"70\">"):("<div class=\"cover-img\"><span>"+_vm._ssrEscape(" "+_vm._s(_vm.company.auctionBy.company.slice(0,1).toUpperCase() || _vm.company.auctionBy.name.slice(0,1).toUpperCase()))+"</span></div>"))+"</div> <div class=\"ml-1 ml-16px\" style=\"width:100%\"><div class=\"mb-0 f-14 fw-600 main-black d-flex justify-content-between\"><p class=\"mb-0\">"+_vm._ssrEscape(_vm._s(_vm.company.auctionBy.company || _vm.company.auctionBy.name))+"</p> <div><img"+(_vm._ssrAttr("src",__webpack_require__(86)))+"> <span class=\"main-color text-11\">"+_vm._ssrEscape(_vm._s(_vm.company.auctionBy.province))+"</span></div></div> <div class=\"d-inline-flex main-black pt-10px pb-10px\"><div class=\"star-rate mr-1\">\n                            5.0\n                        </div> "+(_vm._ssrList((4),function(item,idx){return ("<div class=\"group-star\"><i class=\"fas fa-star mr-1px f-13 main-yellow\"></i></div>")}))+" <span class=\"evaluate f-12 mb-0  ml-4px\">\n                            (<span class=\"main-yellow\">4</span> ????nh gi??)\n                        </span></div> <div class=\"text-11 color-grey\"><span>Chi ph?? ?????c t??nh -\n                            <span class=\"fw-600 main-color text-13\">"+_vm._ssrEscape("\n                                "+_vm._s(_vm.formatNamePrice(_vm.company.step=== 3 ? _vm.company.deal[0].price: _vm.company.price))+"\n                            ")+"</span></span> <span class=\"px-11px\"> | </span> <span>Th???i gian thi c??ng -\n                            <span class=\"fw-600 main-color text-13\">"+_vm._ssrEscape("\n                                "+_vm._s(_vm.company.step=== 3 ? _vm.company.deal[0].day : _vm.company.day)+" ng??y\n                            ")+"</span></span></div></div></div></div> <div class=\"col-md-6 col-sm-12 content-right\">"+((_vm.company && _vm.company.survey.length)?(((_vm.company.step == 0)?("<div class=\"describe  d-flex\"><img"+(_vm._ssrAttr("src",__webpack_require__(102)))+" alt> <span>Ch??a x??c nh???n</span></div> <div class=\"date-time \"><div class=\"date\"><span>Ng??y kh???o s??t - </span><span class=\"text-red\">"+_vm._ssrEscape(_vm._s(_vm.$moment(_vm.company.survey[0].date).format('DD/MM/YYYY'))+" ")+"</span></div> <div class=\"time\"><span>Gi??? - </span><span class=\"text-red\">"+_vm._ssrEscape(_vm._s(_vm.company.survey[0].time)+" ")+"</span></div></div> <div class=\"group-btn\"><div class=\"btn-send cancel\"><img"+(_vm._ssrAttr("src",__webpack_require__(134)))+" alt> <span>Hu??? kh???o s??t</span></div> <div class=\"btn-send cup\"><img"+(_vm._ssrAttr("src",__webpack_require__(90)))+" alt> <span>Th??ng tin li??n h???</span></div></div>"):(_vm.company.step == 1)?("<div class=\"describe d-flex\"><img"+(_vm._ssrAttr("src",__webpack_require__(85)))+" alt class=\"icon-check\"> <span>???? x??c nh???n</span></div> <div class=\"date-time \"><div class=\"date\"><span>Ng??y kh???o s??t - </span><span class=\"text-red\">"+_vm._ssrEscape(_vm._s(_vm.$moment(_vm.company.survey[0].date).format('DD/MM/YYYY'))+" ")+"</span></div> <div class=\"time\"><span>Gi??? - </span><span class=\"text-red\">"+_vm._ssrEscape(_vm._s(_vm.company.survey[0].time)+" ")+"</span></div></div> <div class=\"group-btn\"><div class=\"btn-send\"><img"+(_vm._ssrAttr("src",__webpack_require__(84)))+" alt> <span>G???i tin nh???n</span></div> <div class=\"btn-send cup\"><img"+(_vm._ssrAttr("src",__webpack_require__(90)))+" alt> <span>Th??ng tin li??n h???</span></div></div>"):(_vm.company.step===3)?(((_vm.company.deal.length && _vm.company.deal[0].status == 'CANCEL' )?("<div class=\"describe  d-flex\"><i class=\"fas fa-times text-red f-16 mt-5px mr-5px\"></i> <span class=\"text-red\">Nh?? th???u t??? ch???i th????ng l?????ng</span></div>"):(_vm.company.deal.length && _vm.company.deal[0].status == 'OK' )?("<div class=\"describe d-none\"></div>"):("<div class=\"describe  d-flex\"><img"+(_vm._ssrAttr("src",__webpack_require__(102)))+" alt> <span>??ang th????ng l?????ng</span></div>"))+" "+((_vm.company.deal.length)?("<div class=\"d-flex\"><span class=\"description\">"+_vm._ssrEscape("\n                            "+_vm._s(_vm.company.deal[0].message)+"\n                        ")+"</span></div>"):"<!---->")+" "+((_vm.company.deal.length &&  _vm.company.deal[0].attachments)?("<div>"+(_vm._ssrList((_vm.company.deal[0].attachments),function(item,idx){return ("<p class=\"f-11 text-main \"><span class=\"mr-5px\">"+(_vm._s(_vm.returnTypeFile(item)))+"</span>"+_vm._ssrEscape("\n                                "+_vm._s(_vm.spliceURLFile(item,'--'))+"\n                            ")+"</p>")}))+"</div>"):"<!---->")+" <div class=\"list-payment\">"+((_vm.company.deal.length)?("<ul>"+(_vm._ssrList((_vm.company.deal[0].payments),function(pay,idx){return ("<li><span>"+_vm._ssrEscape("Thanh to??n ?????t "+_vm._s(idx+1))+"</span> - <span class=\"text-main\">"+_vm._ssrEscape(_vm._s(pay.value))+"</span></li>")}))+"</ul>"):"<!---->")+"</div> <div class=\"group-btn\">"+(( _vm.company.step == 3 && _vm.company.deal.length && _vm.company.deal[0].status == 'CANCEL' )?("<div class=\"btn-send cup mr-10px ml-0\"><img"+(_vm._ssrAttr("src",__webpack_require__(84)))+" alt> <span>Xem tin nh???n</span></div>"):( _vm.company.step == 3 && _vm.company.deal.length && _vm.company.deal[0].status == 'OK' )?("<div class=\"btn-send  mr-10px ml-0\"><img"+(_vm._ssrAttr("src",__webpack_require__(84)))+" alt> <span>G???i tin nh???n</span></div>"):("<div class=\"btn-send cup mr-10px ml-0\"><img"+(_vm._ssrAttr("src",__webpack_require__(90)))+" alt class=\"mb-2px\"> <span>C???p nh???t</span></div>"))+" "+((!_vm.company.isFinish)?(((_vm.company.step == 3 && _vm.company.deal.length && _vm.company.deal[0].status == 'OK'  )?("<div class=\"btn-send cancel  mr-10px ml-0\"><img"+(_vm._ssrAttr("src",__webpack_require__(181)))+" alt> <span>K???t th??c d??? ??n </span></div>"):("<div class=\"btn-send cancel \"><img"+(_vm._ssrAttr("src",__webpack_require__(134)))+" alt> <span>Hu??? th????ng l?????ng</span></div>"))):"<!---->")+"</div>"):(_vm.company.step===2)?(((_vm.company.statusUpdate == 'ACTIVE')?("<div class=\"describe  d-flex\"><img"+(_vm._ssrAttr("src",__webpack_require__(85)))+" class=\"icon-check\"> <span>B??o gi?? c???p nh???t</span></div> <div class=\"d-flex\"><span class=\"description\">"+_vm._ssrEscape("\n                                "+_vm._s(_vm.company.description)+"\n                            ")+"</span></div> "+((_vm.company.attachments)?("<div>"+(_vm._ssrList((_vm.company.attachments),function(item,idx){return ("<p class=\"f-11 text-main \"><span class=\"mr-5px\">"+(_vm._s(_vm.returnTypeFile(item)))+"</span>"+_vm._ssrEscape("\n                                    "+_vm._s(_vm.spliceURLFile(item,'--'))+"\n                                ")+"</p>")}))+"</div>"):"<!---->")+" "+((_vm.company.payments)?("<div class=\"list-payment\"><ul>"+(_vm._ssrList((_vm.company.payments),function(pay,idx){return ("<li><span>"+_vm._ssrEscape("Thanh to??n ?????t "+_vm._s(idx+1))+"</span> - <span class=\"text-main\">"+_vm._ssrEscape(_vm._s(pay.value))+"</span></li>")}))+"</ul></div>"):"<!---->")+" <div class=\"group-btn\"><div class=\"btn-send  mr-10px ml-0\"><img"+(_vm._ssrAttr("src",__webpack_require__(84)))+" alt> <span>G???i tin nh???n</span></div> <div class=\"btn-send cup mr-10px ml-0\"><img"+(_vm._ssrAttr("src",__webpack_require__(90)))+" alt> <span>Th????ng l?????ng</span></div></div>"):("<div class=\"d-flex\"><span class=\"description\">"+_vm._ssrEscape("\n                                "+_vm._s(_vm.company.description)+"\n                            ")+"</span></div> "+((_vm.company.attachments)?("<div>"+(_vm._ssrList((_vm.company.attachments),function(item,idx){return ("<p class=\"f-11 text-main \"><span class=\"mr-5px\">"+(_vm._s(_vm.returnTypeFile(item)))+"</span>"+_vm._ssrEscape("\n                                    "+_vm._s(_vm.spliceURLFile(item,'--'))+"\n                                ")+"</p>")}))+"</div>"):"<!---->")))):"<!---->")):("<div class=\"describe \">"+_vm._ssrEscape(_vm._s(_vm.company.description))+"</div> <div class=\"group-btn\"><div class=\"btn-send\"><img"+(_vm._ssrAttr("src",__webpack_require__(84)))+" alt> <span>G???i tin nh???n</span></div> "+((!_vm.company.isDestroy)?("<div class=\"btn-send cup\"><img"+(_vm._ssrAttr("src",__webpack_require__(182)))+" alt style=\"margin-top:-2px\"> <span>H???n kh???o s??t</span></div>"):"<!---->")+"</div>"))+"</div></div> "),(_vm.company.step == 3 && _vm.company.deal.length && _vm.company.deal[0].status == 'OK' )?[_c('DetailPayment',{attrs:{"auction":_vm.company,"detailProject":_vm.detailProject}})]:_vm._e(),_vm._ssrNode(" "),_c('PopupLienheform',{ref:"LienHeFormPop",attrs:{"isService":true,"title":_vm.detailProject.name,"rawCategory":_vm.rawCategory}}),_vm._ssrNode(" "),_c('PopupSurvey',{ref:"surveyPopup",attrs:{"detailProject":_vm.detailProject,"rawCategory":_vm.rawCategory},on:{"activeCompany":_vm.getActiveCompany}}),_vm._ssrNode(" "),(_vm.company)?_c('PopupSurveyUpdate',{ref:"surveyUpdate",attrs:{"surveryUpdate":_vm.surveryUpdate,"objCompany":_vm.company,"detailProject":_vm.detailProject,"rawCategory":_vm.rawCategory},on:{"activeCompany":_vm.getActiveCompany}}):_vm._e(),_vm._ssrNode(" "),(_vm.company)?_c('PopupDealUpdate',{ref:"dealUpdate",attrs:{"objCompany":_vm.company,"detailProject":_vm.detailProject,"rawCategory":_vm.rawCategory},on:{"activeCompany":_vm.getActiveCompany}}):_vm._e(),_vm._ssrNode(" "),(_vm.company)?_c('PopupSurveyCustomerContact',{ref:"customerContact",attrs:{"objConfirm":_vm.company}}):_vm._e(),_vm._ssrNode(" "),(_vm.company)?_c('PopupPaymentCustomerEndProject',{ref:"endProject",attrs:{"project":_vm.detailProject,"auction":_vm.company},on:{"getDetailAgain":_vm.getActiveCompany}}):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/CompanyQuoteOwner.vue?vue&type=template&id=0594bba0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CompanyQuoteOwner.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CompanyQuoteOwnervue_type_script_lang_js_ = ({props:['company','detailProject','rawCategory','bgWhite'],data(){return{isActive:false,surveryUpdate:false};},mounted(){},methods:{openLienHeMail(){this.$refs.LienHeFormPop.show();this.$refs.LienHeFormPop.getInforPerchant(this.company);},openPopupSurvey(status){this.$refs.surveyPopup.show();this.$refs.surveyPopup.getInforPerchant(this.company);if(status=='CANCEL'){this.$refs.surveyPopup.setCancelPopup(true);}else{this.$refs.surveyPopup.setCancelPopup(false);}},destroyDeal(item){this.loader();var obj={project:item.deal[0].project,auction:item.deal[0].auction};this.$post('member/auction/deal/destroy',obj).then(res=>{this.getActiveCompany();this.loader(0);}).catch(err=>{this.loader(0);});},getActiveCompany(){this.$emit('getDetailAgain');},checkShowTypeTime(time){var hour=time.toString().split(':');if(Number(hour[0])<=12){return`${time} AM`;}else{return`${time} PM`;}},openSurveyUpdate(status){if(status=='UPDATE'){this.surveryUpdate=true;}this.$refs.surveyUpdate.show();},openEndProject(){console.log('endProject');this.$refs.endProject.show();},openDeal(){this.$refs.dealUpdate.show();},openCustomerContact(){this.$refs.customerContact.show();}}});
// CONCATENATED MODULE: ./components/CompanyQuoteOwner.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CompanyQuoteOwnervue_type_script_lang_js_ = (CompanyQuoteOwnervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/CompanyQuoteOwner.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CompanyQuoteOwnervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "305363c9"
  
)

/* harmony default export */ var CompanyQuoteOwner = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {DetailPayment: __webpack_require__(154).default,PopupLienheform: __webpack_require__(91).default,PopupSurvey: __webpack_require__(155).default,PopupSurveyUpdate: __webpack_require__(92).default,PopupDealUpdate: __webpack_require__(156).default,PopupSurveyCustomerContact: __webpack_require__(157).default,PopupPaymentCustomerEndProject: __webpack_require__(158).default})


/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CompanyQuoteCompanyDeal.vue?vue&type=template&id=379e640a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"company-quote-owner",class:[_vm.company && (_vm.company.survey.length) ? 'active' : 'border-0', _vm.bgWhite ? 'bg-white' : '' ]},[_vm._ssrNode("<div class=\"row cover\"><div class=\"col-md-6 col-sm-12   pr-0 \"><div class=\"d-flex content-left\"><div>"+((_vm.company.auctionBy && _vm.company.auctionBy.photo)?("<img"+(_vm._ssrAttr("src",_vm.company.auctionBy.photo))+" width=\"70\">"):("<div class=\"cover-img\"><span>"+_vm._ssrEscape(" "+_vm._s(_vm.company.auctionBy.company.slice(0,1).toUpperCase() || _vm.company.auctionBy.name.slice(0,1).toUpperCase()))+"</span></div>"))+"</div> <div class=\"ml-1 ml-16px\" style=\"width:100%\"><div class=\"mb-0 f-14 fw-600 main-black d-flex justify-content-between\"><p class=\"mb-0\">"+_vm._ssrEscape(_vm._s(_vm.company.auctionBy.company || _vm.company.auctionBy.name))+"</p> <div><img"+(_vm._ssrAttr("src",__webpack_require__(86)))+"> <span class=\"main-color text-11\">"+_vm._ssrEscape(_vm._s(_vm.company.auctionBy.province))+"</span></div></div> <div class=\"d-inline-flex main-black pt-10px pb-10px\"><div class=\"star-rate mr-1\">\n                            5.0\n                        </div> "+(_vm._ssrList((4),function(item,idx){return ("<div class=\"group-star\"><i class=\"fas fa-star mr-1px f-13 main-yellow\"></i></div>")}))+" <span class=\"evaluate f-12 mb-0  ml-4px\">\n                            (<span class=\"main-yellow\">4</span> ????nh gi??)\n                        </span></div> <div class=\"text-11 color-grey\"><span>Chi ph?? ?????c t??nh -\n                            <span class=\"fw-600 main-color text-13\">"+_vm._ssrEscape("\n                                "+_vm._s(_vm.formatNamePrice(_vm.company.step=== 3 ? _vm.company.deal[0].price: _vm.company.price))+"\n                            ")+"</span></span> <span class=\"px-11px\"> | </span> <span>Th???i gian thi c??ng -\n                            <span class=\"fw-600 main-color text-13\">"+_vm._ssrEscape("\n                                "+_vm._s(_vm.company.step=== 3 ? _vm.company.deal[0].day : _vm.company.day)+" ng??y\n                            ")+"</span></span></div></div></div></div> <div class=\"col-md-6 col-sm-12 content-right\">"+((_vm.company.deal.length)?("<div class=\"d-flex\"><span class=\"description\">"+_vm._ssrEscape("\n                    "+_vm._s(_vm.company.deal[0].message)+"\n                ")+"</span></div>"):"<!---->")+" "+((_vm.company.deal.length &&  _vm.company.deal[0].attachments)?("<div>"+(_vm._ssrList((_vm.company.deal[0].attachments),function(item,idx){return ("<p class=\"f-11 text-main \"><span class=\"mr-5px\">"+(_vm._s(_vm.returnTypeFile(item)))+"</span>"+_vm._ssrEscape("\n                        "+_vm._s(_vm.spliceURLFile(item,'--'))+"\n                    ")+"</p>")}))+"</div>"):"<!---->")+" <div class=\"list-payment\">"+((_vm.company.deal.length)?("<ul>"+(_vm._ssrList((_vm.company.deal[0].payments),function(pay,idx){return ("<li><span>"+_vm._ssrEscape("Thanh to??n ?????t "+_vm._s(idx+1))+"</span> - <span class=\"text-main\">"+_vm._ssrEscape(_vm._s(pay.value))+"</span></li>")}))+"</ul>"):"<!---->")+"</div> <div class=\"group-btn\"><div class=\"btn-send  mr-10px ml-0\"><img"+(_vm._ssrAttr("src",__webpack_require__(84)))+" alt> <span>G???i tin nh???n1 </span></div></div></div></div> "),_c('DetailPaymentCompany',{attrs:{"auction":_vm.company,"detailProject":_vm.detailProject},on:{"getPageAgain":_vm.getPageAgain}}),_vm._ssrNode(" "),_c('PopupLienheform',{ref:"LienHeFormPop",attrs:{"isService":true,"title":_vm.detailProject.name,"rawCategory":_vm.rawCategory}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/CompanyQuoteCompanyDeal.vue?vue&type=template&id=379e640a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CompanyQuoteCompanyDeal.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CompanyQuoteCompanyDealvue_type_script_lang_js_ = ({props:['company','detailProject','rawCategory','bgWhite'],data(){return{};},mounted(){},methods:{getPageAgain(){this.$emit('getDetailAgain');},openLienHeMail(){this.$refs.LienHeFormPop.show();this.$refs.LienHeFormPop.getInforPerchant(this.company);}}});
// CONCATENATED MODULE: ./components/CompanyQuoteCompanyDeal.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CompanyQuoteCompanyDealvue_type_script_lang_js_ = (CompanyQuoteCompanyDealvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/CompanyQuoteCompanyDeal.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CompanyQuoteCompanyDealvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "63cf73c2"
  
)

/* harmony default export */ var CompanyQuoteCompanyDeal = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {DetailPaymentCompany: __webpack_require__(159).default,PopupLienheform: __webpack_require__(91).default})


/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/inforProject.vue?vue&type=template&id=7b89d4a4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Modal',{ref:"inforProject",attrs:{"id":"modal-infor-project"},scopedSlots:_vm._u([{key:"content",fn:function(){return [_c('div',{staticClass:"formCore"},[_c('div',{staticClass:"content"},[_c('FormProject',{attrs:{"objInfor":_vm.objInfor,"isModal":true},on:{"hideModal":_vm.hide,"callGetDetail":_vm.getDetailProject}})],1)])]},proxy:true}])})}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/popup/inforProject.vue?vue&type=template&id=7b89d4a4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/inforProject.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var inforProjectvue_type_script_lang_js_ = ({data(){return{objInfor:null};},mounted(){},methods:{getInfor(infor){this.objInfor=infor;},show(){this.$refs.inforProject.showModal();},hide(){this.$refs.inforProject.hideModal();},getDetailProject(){this.$emit('callGetDetail');}}});
// CONCATENATED MODULE: ./components/popup/inforProject.vue?vue&type=script&lang=js&
 /* harmony default export */ var popup_inforProjectvue_type_script_lang_js_ = (inforProjectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/popup/inforProject.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  popup_inforProjectvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "f2a2b35a"
  
)

/* harmony default export */ var inforProject = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {FormProject: __webpack_require__(112).default,Modal: __webpack_require__(33).default})


/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/du-an/_slug.vue?vue&type=template&id=044ca763&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Header'),_vm._ssrNode(" "),_vm._ssrNode("<section id=\"chiTietDuAn\" class=\"wrapSection pt-30px pb-80px\">","</section>",[_vm._ssrNode("<div class=\"wrapBanner hosoWrap\"></div> "),_vm._ssrNode("<div class=\"container-fluid\">","</div>",[_vm._ssrNode("<div class=\"row noidungWrap\">","</div>",[_vm._ssrNode("<div class=\"leftCol\">","</div>",[_vm._ssrNode("<div class=\"left inner-content-section px-36px pt-25px pb-50px mb-20px\"><h2"+(_vm._ssrClass("main-color f-20 fw-600 mb-15px",_vm.getClassCategory(_vm.mapImgFromCategory(_vm.rawCategory))))+">"+_vm._ssrEscape("\n              "+_vm._s(_vm.detailProject.name)+"\n            ")+"</h2> <div class=\"d-flex cover-bage-edit\"><div>"+(_vm._ssrList((_vm.arrNameCategory),function(item){return ("<span"+(_vm._ssrClass("px-8px badge py-2px f-11 custom-bage mr-8px mb-8px",_vm.getClassBageCategory(_vm.mapValueFromCategory(item.id))))+">"+_vm._ssrEscape("\n                    "+_vm._s(item.label)+"\n                  ")+"</span>")}))+"</div> "+((_vm.detailProject && _vm.detailProject.createBy && (_vm.detailProject.createBy._id === _vm.currentUser._id))?("<div class=\"d-flex group-edit\"><img"+(_vm._ssrAttr("src",__webpack_require__(88)))+"> <span>Ch???nh s???a</span></div>"):"<!---->")+"</div> <hr class=\"hr my-10px\"> <div class=\"main-black text-13\"><p class=\"text-16 fw-600\">Y??u c???u c??ng vi???c</p> <div class=\"f-13 mb-0 break-line\">"+_vm._ssrEscape(_vm._s(_vm.detailProject.description)+" ")+"</div></div> "+((_vm.detailProject.attachment && _vm.detailProject.attachment.length)?("<hr class=\"hr\"> <h3 class=\"font-bold text-16 mb-0\">T??i li???u ????nh k??m</h3> <div class=\"d-flex main-color mt-20px text-11\">"+(_vm._ssrList((_vm.detailProject.attachment),function(item,idx){return ("<p class=\"f-11 mb-0 text-main cursor-pointer mr-15px\"><span class=\"mr-5px\">"+(_vm._s(_vm.returnTypeFile(_vm.spliceURLFile(item,'--'))))+"</span>"+_vm._ssrEscape("\n                          "+_vm._s(_vm.spliceURLFile(item,'--'))+"\n                      ")+"</p>")}))+"</div>"):"<!---->")+"</div> "),(_vm.detailProject && _vm.detailProject.createBy &&  (_vm.detailProject.createBy._id !== _vm.currentUser._id )
          )?[(!_vm.quoteCompleteDeal)?[(!_vm.checkStatusDueDate(_vm.detailProject.dueDate))?_vm._ssrNode("<div class=\"left inner-content-section px-36px pt-25px pb-50px mb-20px\">","</div>",[(_vm.detailProject && _vm.detailProject._id)?[_c('QuoteForm',{attrs:{"quoteName":_vm.detailProject.name,"id":_vm.detailProject._id,"detailProject":_vm.detailProject},on:{"callGetList":_vm.getDetailProject}})]:_vm._e()],2):_vm._e()]:_vm._e(),_vm._ssrNode(" "),(!_vm.quoteCompleteDeal || (_vm.quoteCompleteDeal && _vm.quoteCompleteDeal.deal[0].status !=='OK') || (_vm.quoteCompleteDeal && _vm.quoteCompleteDeal.auctionBy._id !== _vm.$auth.user._id))?_vm._ssrNode("<div class=\"left inner-content-section px-36px pt-25px pb-50px mb-20px\">","</div>",[_vm._ssrNode("<h3 class=\"h5 main-black f-16 fw-600\">\n              Danh s??ch ch??o gi?? (<span class=\"main-color\">"+_vm._ssrEscape(_vm._s(_vm.arrQuoteCompany && _vm.arrQuoteCompany.length))+"</span> ch??o gi??)\n            </h3> <hr class=\"hr\"> "),(_vm.arrQuoteCompany && _vm.arrQuoteCompany.length)?[_vm._l((_vm.arrQuoteCompany),function(item){return [_c('CompanyQuote',{key:item._id,attrs:{"company":item,"detailProject":_vm.detailProject,"rawCategory":_vm.rawCategory},on:{"getDetailAgain":_vm.getDetailProject}})]})]:_vm._ssrNode(("<div><p class=\"text-danger\"><b>Ch??a c?? ch??o gi??</b></p></div>"))],2):_vm._e()]:_vm._e()],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"rightCol\">","</div>",[_vm._ssrNode("<div class=\"left inner-content-section py-25px  mb-20px thongTinDuAnWrapper main-black\"><h3 class=\"text-16 fw-600 main-black mb-2 pl-25px\">\n              Th??ng tin d??? ??n\n            </h3> <hr class=\"hr my-15px\"> <div class=\"box d-flex pb-12px\"><div class=\"text-12 col-6 px-0 color-grey\">\n                ID d??? ??n\n              </div> <div class=\"text-13 main-color col-6 px-0 pl-30px fw-600\">"+_vm._ssrEscape("\n                "+_vm._s(_vm.detailProject.number)+"\n              ")+"</div></div> <div class=\"box d-flex py-12px\"><div class=\"text-12 col-6 px-0 color-grey\">\n                Ng??n s??ch\n              </div> "+((_vm.detailProject.budget)?("<div class=\"text-13 col-6 px-0 pl-30px main-black\">"+_vm._ssrEscape("\n                "+_vm._s(_vm.formatNamePrice(_vm.detailProject.budget))+"\n              ")+"</div>"):"<!---->")+"</div> <div class=\"box d-flex py-12px\"><div class=\"text-12 col-6 px-0 color-grey\">\n                Ng??y ????ng\n              </div> "+((_vm.detailProject.createdDate)?("<div class=\"text-13 col-6 px-0 pl-30px main-black\">"+_vm._ssrEscape("\n                "+_vm._s(_vm.checkIsToday(_vm.detailProject.createdDate))+"\n              ")+"</div>"):"<!---->")+"</div> <div class=\"box d-flex py-12px\"><div class=\"text-12 col-6 px-0 color-grey\">\n                H???n ch??t ch??o gi??\n              </div> "+((_vm.detailProject.dueDate)?("<div"+(_vm._ssrClass("text-13 main-color px-0 pl-30px fw-600",_vm.checkStatusDueDate(_vm.detailProject.dueDate) ? 'text-red' :''))+">"+_vm._ssrEscape("\n                "+_vm._s(_vm.checkDueDate(_vm.detailProject.dueDate))+"\n              ")+"</div>"):"<!---->")+"</div> <div class=\"box d-flex py-12px\"><div class=\"text-12 col-6 px-0 color-grey\">\n                ?????a ??i???m\n              </div> <div class=\"text-13 px-0 pl-30px main-black\">"+_vm._ssrEscape("\n                "+_vm._s(_vm.detailProject.address)+"\n              ")+"</div></div> <div class=\"box d-flex py-12px border-0\"><div class=\"text-12 col-6 px-0 color-grey\">\n                Ph?? ch??o gi??\n              </div> <div class=\"text-13 main-color px-0 pl-30px fw-600\">\n                3 Tokens\n              </div></div></div> "),(!_vm.quoteCompleteDeal || (_vm.quoteCompleteDeal && _vm.quoteCompleteDeal.deal[0].status !=='OK') || (_vm.$auth.user && _vm.quoteCompleteDeal && _vm.quoteCompleteDeal.auctionBy._id !==_vm.$auth.user._id) )?[(_vm.detailProject && _vm.detailProject.createBy && (_vm.detailProject.createBy._id !== _vm.currentUser._id))?[_vm._ssrNode("<div class=\"left inner-content-section  pt-20px pb-20px  thongTinDuAnWrapper main-black\">","</div>",[(_vm.detailProject.createBy)?_c('Customer',{staticClass:"profile",attrs:{"user":_vm.detailProject.createBy}}):_vm._e()],1)]:_vm._e(),_vm._ssrNode(" "+((_vm.detailProject && _vm.detailProject._id && _vm.detailProject.createBy && (_vm.detailProject.createBy._id !== _vm.currentUser._id))?("<div class=\"text-center\"><h3 class=\" fw-600 f-16 main-color mb-5px pt-20px\">D??? ??N T????NG T???</h3> <div class=\"line mb-15px\"></div> "+(_vm._ssrList((3),function(item,idx){return ("<div class=\"d-flex flex-column w-100 item-related mb-20px\"><div class=\"position-relative group-item\"><span class=\"mt-20px type-product end-0 position-absolute bg-yellow-8 text-light text-12    line-height-15 fw-600\">N???I TH???T</span> <div class=\"area\"><span><img"+(_vm._ssrAttr("src",__webpack_require__(177)))+">\n                        Qu???n 7, TP. H??? Ch?? Minh\n                      </span></div></div> <div class=\"bg-white px-15px py-15px\"><h3 class=\"title text-14 main-color fw-600 mb-25px \">\n                      T??m ????n v??? thi c??ng n???i th???t chung c?? H?? ???? Centrosa\n                      (60m2/2pn)\n                    </h3> <div class=\"d-flex justify-content-between\"><div class=\"left\"><span class=\"text-12\"><img"+(_vm._ssrAttr("src",__webpack_require__(178)))+" class=\"mb-3px\">\n                          B??i Kim Long\n                        </span></div> <div class=\"right\"><span class=\"f-12\">\n                          Ng??n s??ch -\n                          <span class=\"main-color fw-600 f-14\">300 Tri???u</span></span></div></div></div> <div class=\"d-flex date-time blue-bg-color justify-content-between text-white border-5 px-15px text-12\"><div class=\"left\"><span class=\"f-12\">01/04/2021</span></div> <div class=\"right\"><span class=\"main-yellow f-14\">4</span><span class=\"f-12\"> Ch??o Gi??</span></div></div></div>")}))+" <p class=\"f-12 main-color mb-0 text-right\">Xem th??m d??? ??n <i class=\"fas fa-caret-down ml-5px f-14\"></i></p></div>"):"<!---->"))]:_vm._e()],2),_vm._ssrNode(" "),(_vm.detailProject && _vm.detailProject.createBy && (_vm.detailProject.createBy._id === _vm.currentUser._id))?[(_vm.quoteCompleteDeal)?_vm._ssrNode("<div class=\"col-12\">","</div>",[_vm._ssrNode("<div class=\"inner-content-section  pt-25px pb-50px mb-20px\">","</div>",[_vm._ssrNode("<h3 class=\"h5 main-black  px-36px\"><span class=\"fw-600 f-16\">????n v??? thi c??ng</span></h3> <hr class=\"hr mb-0\"> "),_c('CompanyQuoteOwner',{key:_vm.quoteCompleteDeal._id,attrs:{"company":_vm.quoteCompleteDeal,"detailProject":_vm.detailProject,"rawCategory":_vm.rawCategory,"bgWhite":true},on:{"getDetailAgain":_vm.getDetailProject}})],2)]):_vm._ssrNode("<div class=\"col-12\">","</div>",[_vm._ssrNode("<div class=\"inner-content-section  pt-25px pb-50px mb-20px\">","</div>",[_vm._ssrNode("<h3 class=\"h5 main-black  px-36px\"><span class=\"fw-600 f-16\">Danh s??ch ch??o gi?? (<span class=\"main-color\">"+_vm._ssrEscape(_vm._s(_vm.arrQuoteCompany && _vm.arrQuoteCompany.length))+"</span> ch??o gi??)</span>  - <span class=\"f-14\">Ch???n t???i ??a <span class=\"text-main\">3</span> c??ng ty ????? kh???o s??t/g???p m???t tr???c ti???p v?? nh???n b??o gi?? ch??nh x??c nh???t cho c??ng tr??nh c???a b???n</span></h3> <hr class=\"hr mb-0\"> "),(_vm.arrQuoteCompany && _vm.arrQuoteCompany.length)?[_vm._l((_vm.arrQuoteCompany),function(item){return [_c('CompanyQuoteOwner',{key:item._id,attrs:{"company":item,"detailProject":_vm.detailProject,"rawCategory":_vm.rawCategory},on:{"getDetailAgain":_vm.getDetailProject}})]})]:_vm._ssrNode(("<div><p class=\"text-danger pl-36px\"><b>Ch??a c?? ch??o gi??</b></p></div>"))],2)])]:[(_vm.quoteCompleteDeal && _vm.quoteCompleteDeal.auctionBy._id == _vm.$auth.user._id && _vm.quoteCompleteDeal.deal[0].status ==='OK')?_vm._ssrNode("<div class=\"col-12\">","</div>",[_vm._ssrNode("<div class=\"inner-content-section  pt-25px pb-50px mb-20px\">","</div>",[_vm._ssrNode("<h3 class=\"h5 main-black  px-36px\"><span class=\"fw-600 f-16\">????n v??? thi c??ng</span></h3> <hr class=\"hr mb-0\"> "),_c('CompanyQuoteCompanyDeal',{key:_vm.quoteCompleteDeal._id,attrs:{"company":_vm.quoteCompleteDeal,"detailProject":_vm.detailProject,"rawCategory":_vm.rawCategory,"bgWhite":true},on:{"getDetailAgain":_vm.getDetailProject}})],2)]):_vm._e()]],2)])],2),_vm._ssrNode(" "),_c('Footer'),_vm._ssrNode(" "),_c('PopupInforProject',{ref:"popupInfor",on:{"callGetDetail":_vm.getDetailProject}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/du-an/_slug.vue?vue&type=template&id=044ca763&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/du-an/_slug.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var _slugvue_type_script_lang_js_ = ({data(){return{slug:this.$nuxt.$route.params.slug,detailProject:{},arrNameCategory:[],rawCategory:[],arrQuoteCompany:null,activeCompany:null,currentUser:this.$auth.user||{},quoteCompleteDeal:null};},mounted(){this.$nextTick(()=>{this.getDetailProject();});},methods:{getDetailProject(){this.loader();this.$get(`public/projects/${this.slug}`).then(res=>{console.log('auth user',this.$auth.user);this.detailProject=res.data;this.rawCategory=JSON.parse(JSON.stringify(res.data.category));this.arrNameCategory=this.mapCategory(this.detailProject.category);if(this.detailProject._id){return this.$get(`public/auction/project/${this.detailProject._id}`);}this.loader(0);}).then(res2=>{this.arrQuoteCompany=res2.data.auctions;this.quoteCompleteDeal=res2.data.auctionDeal;this.loader(0);}).catch(err=>{console.log(err);this.loader(0);});},openModalInfor(){this.$refs.popupInfor.getInfor(this.detailProject);this.$refs.popupInfor.show();}}});
// CONCATENATED MODULE: ./pages/du-an/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var du_an_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/du-an/_slug.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  du_an_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "09a3d14a"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(11).default,QuoteForm: __webpack_require__(202).default,CompanyQuote: __webpack_require__(203).default,Customer: __webpack_require__(204).default,CompanyQuoteOwner: __webpack_require__(205).default,CompanyQuoteCompanyDeal: __webpack_require__(206).default,Footer: __webpack_require__(7).default,PopupInforProject: __webpack_require__(207).default})


/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/InputFile.vue?vue&type=template&id=15adf062&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<input type=\"file\""+(_vm._ssrAttr("multiple",_vm.multiple))+(_vm._ssrClass("inputfile",_vm.isChat ? 'w-40' : ''))+"> <label"+(_vm._ssrClass(null,_vm.isChat ? 'bg-white mb-0' : ''))+">"+((_vm.isChat)?("<img"+(_vm._ssrAttr("src",__webpack_require__(82)))+" alt>"):("<img"+(_vm._ssrAttr("src",__webpack_require__(83)))+" alt class=\"mr-4px h-13px mb-2px\">"+_vm._ssrEscape("\n            "+_vm._s(_vm.label)+"\n        ")))+"</label> "+((!_vm.isChat)?("<span class=\"text-main f-11 font-italic\">"+(_vm._ssrList((_vm.accept),function(item,idx){return (_vm._ssrEscape("\n           "+_vm._s(item)+" ")+(((idx+1) < _vm.accept.length)?("<span>,</span>"):"<!---->"))}))+"</span>"):"<!---->")+" "+((_vm.showAlert)?("<small class=\"text-danger d-block\">Sai ?????nh d???ng</small>"):"<!---->"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/InputFile.vue?vue&type=template&id=15adf062&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/InputFile.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var InputFilevue_type_script_lang_js_ = ({props:['accept','multiple','label','isChat'],created(){},mounted(){},data(){return{showAlert:false};},methods:{onFileChange(){var arrFile=[];let files=this.$refs.file.files;let accept=this.accept;if(files&&files.length){var typeFile=files[0].name.split('.').pop();}if(accept){if(!accept.includes(typeFile)){this.showAlert=true;return;}else{this.showAlert=false;files.forEach(e=>{arrFile.push(e);});this.$emit("input",this.multiple?arrFile:arrFile[0]);this.$refs.file.value=null;}}}}});
// CONCATENATED MODULE: ./components/InputFile.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_InputFilevue_type_script_lang_js_ = (InputFilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/InputFile.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_InputFilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "dbfd3b8a"
  
)

/* harmony default export */ var InputFile = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/file.0c843c8.svg";

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-upload.762d37f.svg";

/***/ }),

/***/ 84:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNSAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1IDEwLjY1NTNWMS4zNDQ3M0w5LjgyODEyIDZMMTUgMTAuNjU1M1oiIGZpbGw9IiNGMkYyRjIiLz4KPHBhdGggZD0iTTcuNTAwMTMgOC4wOTU0N0w2LjAyMzUyIDYuNzY2MzZMMC44NTE1NjIgMTEuNDIxNkgxNC4xNDg3TDguOTc2NzQgNi43NjYzNkw3LjUwMDEzIDguMDk1NDdaIiBmaWxsPSIjRjJGMkYyIi8+CjxwYXRoIGQ9Ik0xNC4xNDg3IDAuNTc4MzY5SDAuODUxNTYyTDcuNTAwMTMgNi41NjI3NkwxNC4xNDg3IDAuNTc4MzY5WiIgZmlsbD0iI0YyRjJGMiIvPgo8cGF0aCBkPSJNMCAxLjM0NDczVjEwLjY1NTNMNS4xNzE5MiA2TDAgMS4zNDQ3M1oiIGZpbGw9IiNGMkYyRjIiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ 85:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNyAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuMzQzNjYgMTUuMzQwN0wwIDguOTk2NTZMMy4wMjU0NyA1Ljk3MTA5TDYuMzQzNjYgOS4yODkyOEwxMy45NzQ1IDEuNjU4OTRMMTcgNC42ODQ0TDYuMzQzNjYgMTUuMzQwN1oiIGZpbGw9IiMxOThBQzYiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-location.ebc9fcd.svg";

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Rating.vue?vue&type=template&id=60629e83&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"group-star d-flex",attrs:{"id":"rating-component"}},[_vm._ssrNode(((_vm.rating)?((_vm._ssrList((_vm.rating),function(item,index){return ("<i class=\"fas fa-star mr-1px f-13 main-yellow\"></i>")}))+" "+(_vm._ssrList(((5-_vm.rating)),function(tmp,idx){return ("<i class=\"fas fa-star mr-1px f-13 \"></i>")}))):((_vm._ssrList((5),function(item,index){return ("<i class=\"fas fa-star mr-1px f-13 \"></i>")})))))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Rating.vue?vue&type=template&id=60629e83&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Rating.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Ratingvue_type_script_lang_js_ = ({props:['rating','report','noClick'],name:'Rating',data(){return{};},methods:{emitRating(rating){if(this.noClick){return;}var obj={...this.report,rating};this.$emit('rating',obj);}}});
// CONCATENATED MODULE: ./components/Rating.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Ratingvue_type_script_lang_js_ = (Ratingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Rating.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Ratingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0bebb898"
  
)

/* harmony default export */ var Rating = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 88:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNSAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTg3ODIgMTMuODM0N0w2LjAwODU0IDExLjg1NTVMMTAuMzgxMSA3LjQ4MjkxTDEyLjM2MDQgOS40NjIxOUw3Ljk4NzgyIDEzLjgzNDdaIiBmaWxsPSIjMjA5Y2Q3Ii8+CjxwYXRoIGQ9Ik03Ljc2NDY1IDAuNDg3MzA1VjIuODE1NzVIMTAuMDkzMUw3Ljc2NDY1IDAuNDg3MzA1WiIgZmlsbD0iIzIwOWNkNyIvPgo8cGF0aCBkPSJNNS4wMDY4MyAxMS40NTk5SDIuMzMxMVYxMC40NzJINS45OTQ3NUw3LjMxMTk5IDkuMTU0NzdIMi4zMzExVjguMTY2ODVIOC4yOTk5MUwxMC41ODAzIDUuODg2NDlWMy44MDM1MUg2Ljc3Njc2VjBIMC42NjgwOTFWMTMuNjk5Mkg0LjE5MzczTDQuNzEwODEgMTEuOTI3OUw0Ljc4MTcxIDExLjY4NUw1LjAwNjgzIDExLjQ1OTlaTTIuMzMxMSA1Ljg2MTY5SDguOTE3MjdWNi44NDk2MkgyLjMzMTFWNS44NjE2OVoiIGZpbGw9IiMyMDljZDciLz4KPHBhdGggZD0iTTExLjA3OTYgNi43ODQzN0wxMi4zNTI3IDUuNTExMjNMMTQuMzMyIDcuNDkwNTFMMTMuMDU4OSA4Ljc2MzY1TDExLjA3OTYgNi43ODQzN1oiIGZpbGw9IiMyMDljZDciLz4KPHBhdGggZD0iTTUuMjIyODcgMTMuNjk4OUw0Ljg0MzE0IDE0Ljk5OTdMNy4wOTc2OCAxNC4zNDE1TDUuNTAxMyAxMi43NDUxTDUuMjIyODcgMTMuNjk4OVoiIGZpbGw9IiMyMDljZDciLz4KPC9zdmc+Cg=="

/***/ }),

/***/ 90:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNSAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjc2MDEgMTMuOTM0NEMxMi4zMTE5IDEwLjkxOTMgMTEuMTQyOSA3Ljk0ODE4IDguMzg0ODQgNi45OTU0QzkuNDU2NzIgNi4zMjc4MyAxMC4xNjgyIDUuMTM5OTkgMTAuMTY4MiAzLjc4MjkxQzEwLjE2ODIgMS42OTU1NyA4LjQ3NTczIDAgNi4zODUyNiAwQzQuMjk0NzkgMCAyLjYwMjM1IDEuNjkyNDQgMi42MDIzNSAzLjc4MjkxQzIuNjAyMzUgNS4xMzY4NiAzLjMxNjk0IDYuMzI3ODMgNC4zODU2OCA2Ljk5NTRDMS42Mjc2NCA3Ljk0ODE4IDAuNDU1NDY2IDEwLjkxOTMgMC4wMTA0MTgzIDEzLjkzNDRDLTAuMDc0MjAzNSAxNC40OTU0IDAuMzY3NzEgMTUgMC45MzQ5OSAxNUgxMS44MjkzQzEyLjQwMjggMTUgMTIuODQ0NyAxNC40OTU0IDEyLjc2MDEgMTMuOTM0NFpNNC4wMjgzOSAzLjc4MjkxQzQuMDI4MzkgMi40ODIyNCA1LjA4NzczIDEuNDIyOSA2LjM4ODQgMS40MjI5QzYuNjk4NjggMS40MjI5IDYuOTUyNTQgMS42NzY3NyA2Ljk1MjU0IDEuOTg3MDVDNi45NTI1NCAyLjI5NzMzIDYuNjk4NjggMi41NTExOSA2LjM4ODQgMi41NTExOUM1LjcwODI5IDIuNTUxMTkgNS4xNTY2OCAzLjEwMjggNS4xNTY2OCAzLjc4MjkxQzUuMTU2NjggNC4wOTMxOSA0LjkwMjgxIDQuMzQ3MDUgNC41OTI1MyA0LjM0NzA1QzQuMjc5MTIgNC4zNDcwNSA0LjAyODM5IDQuMDk2MzIgNC4wMjgzOSAzLjc4MjkxWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/lienheform.vue?vue&type=template&id=7a40a608&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Modal',{ref:"modalLienForm",attrs:{"id":"modal-cotact-form-submit"},scopedSlots:_vm._u([{key:"content",fn:function(){return [(_vm.objInfor)?_c('div',{staticClass:"modal-contact formCore"},[_c('div',{staticClass:"content"},[_c('p',{staticClass:"title f-20",class:_vm.isService ? '' : 'hide-border'},[_vm._v("\n            G???i tin nh???n cho\n            "),(_vm.isService)?_c('span',[_vm._v(_vm._s(_vm.objInfor.auctionBy.company || _vm.objInfor.auctionBy.name))]):_c('span',[_vm._v("C??ng ty c??? ph???n Epoint")])]),_vm._v(" "),(!_vm.isService)?_c('p',{staticClass:"f-13 description pl-60px"},[_vm._v("Vui l??ng ??i???n v??o th??ng tin d?????i ????y. B???n s??? t???n\n            "),_c('span',[_vm._v("3 Tokens")]),_vm._v(" khi g???i tin nh???n cho\n            "),(_vm.isService)?_c('span',[_vm._v(_vm._s(_vm.objInfor.auctionBy.company || _vm.objInfor.auctionBy.name))]):_c('span',[_vm._v("C??ng ty c??? ph???n Epoint")])]):_vm._e(),_vm._v(" "),_c('form',{staticClass:"group-content mt-20px",on:{"submit":function($event){$event.preventDefault();return _vm.sendMessage()}}},[(_vm.isService)?_c('div',{staticClass:"form-group row"},[_c('label',{staticClass:"f-13 col-md-3 col-sm-12 "},[_vm._v("\n                    T??n d??? ??n\n                ")]),_vm._v(" "),_c('span',{staticClass:"col-md-9 col-sm-12 pl-0 name-project",class:_vm.getClassCategory(_vm.mapImgFromCategory(_vm.rawCategory))},[_vm._v("\n                    "+_vm._s(_vm.title)+"\n                ")])]):_c('div',{staticClass:"form-group row"},[_c('label',{staticClass:"f-13 col-md-3 col-sm-12 "},[_vm._v("\n                    D???ch v??? y??u c???u\n                    "),_c('span',{staticStyle:{"color":"red"}},[_vm._v("*")])]),_vm._v(" "),_c('treeselect',{staticClass:"pl-0 pr-0 col-md-9 col-sm-12",attrs:{"options":_vm.options,"disable-branch-nodes":true,"clearable":false,"value":_vm.objResearch.category,"multiple":true,"required":"","placeholder":"Ch???n d???ch v???"},model:{value:(_vm.objResearch.category),callback:function ($$v) {_vm.$set(_vm.objResearch, "category", $$v)},expression:"objResearch.category"}})],1),_vm._v(" "),_c('div',{staticClass:"form-group row"},[_c('label',{staticClass:"f-13 col-md-3 col-sm-12 "},[_vm._v("\n                    So???n tin nh???n\n                    "),_c('span',{staticStyle:{"color":"red"}},[_vm._v("*")])]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.objResearch.message),expression:"objResearch.message"}],staticClass:"form-control col-md-9 col-sm-12",attrs:{"required":"","id":"customPlaceholder","rows":"5","placeholder":_vm.placeholder},domProps:{"value":(_vm.objResearch.message)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objResearch, "message", $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"form-group row"},[_c('label',{staticClass:"f-13  col-md-3 col-sm-12 mt-1"},[_vm._v("\n                    T??i li???u ????nh k??m\n                ")]),_vm._v(" "),_c('div',{staticClass:"col-md-9 col-sm-12 pl-0"},[_c('InputFile',{attrs:{"accept":_vm.accepFile,"multiple":true,"label":'Th??m t??i li???u'},on:{"input":_vm.getFile}}),_vm._v(" "),(_vm.arrFile.length)?_c('div',{staticClass:"col-md-3"}):_vm._e(),_vm._v(" "),(_vm.arrFile.length)?_c('div',{staticClass:"col-md-9 pl-0"},[_vm._l((_vm.arrFile),function(item,idx){return [_c('p',{key:idx,staticClass:"f-11 text-main "},[_c('span',{staticClass:"mr-5px",domProps:{"innerHTML":_vm._s(_vm.returnTypeFile(item.name))}}),_vm._v("\n                                    "+_vm._s(item.name)+"\n                                    "),_c('span',{staticClass:"cursor-pointer ml-5px",on:{"click":function($event){return _vm.clearFile(item)}}},[_c('i',{staticClass:"fas fa-times text-red"})])])]})],2):_vm._e()],1)]),_vm._v(" "),_c('div',{staticClass:"form-group mb-50px group-checkbox d-flex"},[_c('b-form-checkbox',{attrs:{"name":"checkbox-agree","required":""},model:{value:(_vm.objResearch.agree),callback:function ($$v) {_vm.$set(_vm.objResearch, "agree", $$v)},expression:"objResearch.agree"}}),_vm._v(" "),_c('span',{staticClass:"f-12 main-black mt-2px ml-5px"},[_vm._v("T??i ?????ng ?? v???i "),_c('span',{staticClass:"main-color"},[_vm._v("??i???u kho???n")]),_vm._v(" c???a Econs "),_c('span',{staticStyle:{"color":"red"}},[_vm._v("*")])])],1),_vm._v(" "),_c('div',{staticClass:"group-btn row"},[(!_vm.$auth.loggedIn)?_c('div',{staticClass:"col-md-12"},[_c('button',{staticClass:"btn-now",attrs:{"type":"button"},on:{"click":function($event){return _vm.hide()}}},[_vm._v("\n                        VUI L??NG ????NG NH???P\n                    ")])]):_c('div',{staticClass:"col-md-12"},[_c('button',{staticClass:"btn-now",attrs:{"type":"submit"}},[_vm._v("\n                        G???I TIN NH???N\n                    ")])])])])])]):_vm._e()]},proxy:true}])})}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/popup/lienheform.vue?vue&type=template&id=7a40a608&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/lienheform.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var lienheformvue_type_script_lang_js_ = ({props:['isService','title','rawCategory'],data(){return{objResearch:{agree:false},objInfor:null,arrFile:[],accepFile:["png","jpg","jpeg","tiff","pdf","xls","doc","ppt","zip","rar"],options:this.getCategory(),date:new Date(),placeholder:'Xin ch??o, m??nh c?? xem qua h??? s?? n??ng l???c c???a c??ng ty. M??nh c???n c??ng ty t?? v???n h??? tr??? x??y d???ng nh?? ph??? 1 tr???t 4 l???u t???i G?? V???p Di???n t??ch ?????t: 5x20 Ng??n s??ch d??? tr??: 3 t??? Mong nh???n ???????c ph???n h???i s???m t??? c??ng ty'};},mounted(){},methods:{async sendMessage(){try{this.loader();var arrFile=this.arrFile.length?await this.uploadFile(this.arrFile):[];var obj={...this.objResearch,attachments:arrFile,to:this.isService?this.objInfor.auctionBy._id:this.objInfor._id,title:this.isService?this.objInfor.auctionBy.company?this.objInfor.auctionBy.company:this.objInfor.auctionBy.name:this.objInfor.company?this.objInfor.company:this.objInfor.name};let res=await this.$post(`/member/rooms`,obj);this.loader(0);this.resetForm();this.hide();}catch(err){console.log(err);this.loader(0);}},resetForm(){this.objResearch={};this.arrFile=[];this.objInfor=null;},getInforPerchant(infor){this.objInfor=infor;console.log('ingo',infor);},getFile(file){this.arrFile=this.arrFile.concat(file);},clearFile(file){this.arrFile=this.arrFile.filter(item=>item.name!==file.name);},show(){this.$refs.modalLienForm.showModal();},hide(){this.$refs.modalLienForm.hideModal();}}});
// CONCATENATED MODULE: ./components/popup/lienheform.vue?vue&type=script&lang=js&
 /* harmony default export */ var popup_lienheformvue_type_script_lang_js_ = (lienheformvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/popup/lienheform.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  popup_lienheformvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "dee8c0f6"
  
)

/* harmony default export */ var lienheform = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {InputFile: __webpack_require__(81).default,Modal: __webpack_require__(33).default})


/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/surveyUpdate.vue?vue&type=template&id=1e5246a0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Modal',{ref:"popupSurveyUpdate",attrs:{"id":"modal-survey-update"},scopedSlots:_vm._u([{key:"content",fn:function(){return [(_vm.objCompany)?_c('div',{staticClass:"modal-contact formCore"},[_c('div',{staticClass:"content"},[(_vm.isCompany)?_c('p',{staticClass:"title f-14 fw-600"},[_vm._v("\n            Kh??ch h??ng "),_c('span',{staticClass:"text-main"},[_vm._v(_vm._s(_vm.objCompany.projectOwner.name))]),_vm._v(" ???? g???i y??u c???u th????ng l?????ng gi??/ti???n ????? v???i b???n. B???n s??? t???n "),_c('span',{staticClass:"text-main"},[_vm._v("500 Tokens")]),_vm._v("  khi x??c nh???n ?????ng ?? v?? b???t ?????u c??ng tr??nh\n        ")]):_c('p',{staticClass:"title f-14 fw-600"},[_vm._v("\n            Ch???n "),_c('span',{staticClass:"text-main"},[_vm._v(_vm._s(_vm.objCompany.auctionBy.company))]),_vm._v(" l??m ????n v??? thi c??ng v?? y??u c???u th????ng l?????ng\n        ")]),_vm._v(" "),_c('form',{on:{"submit":function($event){$event.preventDefault();return _vm.submitForm()}}},[_c('div',{staticClass:"group-infor"},[_c('div',{staticClass:"row mb-15px mr-60px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("T??n d??? ??n:")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('span',{staticClass:"f-16 fw-600",class:_vm.getClassCategory(_vm.mapImgFromCategory(_vm.rawCategory))},[_vm._v("\n                            "+_vm._s(_vm.detailProject.name)+"\n                        ")])])]),_vm._v(" "),_c('div',{staticClass:"row mb-15px mr-60px"},[_c('div',{staticClass:"col-md-3"},[(_vm.isCompany)?_c('span',{staticClass:"key"},[_vm._v("Tin nh???n c???a kh??ch "),_c('span',{staticClass:"text-red"},[_vm._v("*")])]):_c('span',{staticClass:"key"},[_vm._v("So???n tin nh???n "),_c('span',{staticClass:"text-red"},[_vm._v("*")])])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[((_vm.isCompany && _vm.objCompany.deal[0]) || _vm.surveryUpdate)?[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.objCompany.deal[0].message),expression:"objCompany.deal[0].message"}],staticClass:"form-control fw-600",attrs:{"required":"","id":"customPlaceholder","rows":"5","readonly":!_vm.surveryUpdate},domProps:{"value":(_vm.objCompany.deal[0].message)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objCompany.deal[0], "message", $event.target.value)}}})]:[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.objSurvey.message),expression:"objSurvey.message"}],staticClass:"form-control fw-600",attrs:{"required":"","id":"customPlaceholder","rows":"5"},domProps:{"value":(_vm.objSurvey.message)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objSurvey, "message", $event.target.value)}}})]],2)]),_vm._v(" "),_c('div',{staticClass:"row mb-15px mr-60px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("????n gi?? d??? th???u")])]),_vm._v(" "),_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"f-13 text-main fw-600"},[_vm._v(_vm._s(_vm.formatNamePrice(_vm.objCompany.price)))])]),_vm._v(" "),_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("????n gi?? th????ng l?????ng")]),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-md-3 "},[((_vm.isCompany && _vm.objCompany.deal[0]) || _vm.surveryUpdate)?_c('div',{staticClass:"input-group"},[_c('currency-input',{staticClass:"form-control fw-600",attrs:{"type":"text","required":"","placeholder":"200,000,000","readonly":!_vm.surveryUpdate},model:{value:(_vm.objCompany.deal[0].price),callback:function ($$v) {_vm.$set(_vm.objCompany.deal[0], "price", $$v)},expression:"objCompany.deal[0].price"}}),_vm._v(" "),_c('div',{staticClass:"input-group-append"},[_c('span',{staticClass:"input-group-text f-12"},[_vm._v("VND")])])],1):_c('div',{staticClass:"input-group"},[_c('currency-input',{staticClass:"form-control fw-600",attrs:{"type":"text","required":"","placeholder":"200,000,000"},model:{value:(_vm.objSurvey.price),callback:function ($$v) {_vm.$set(_vm.objSurvey, "price", $$v)},expression:"objSurvey.price"}}),_vm._v(" "),_c('div',{staticClass:"input-group-append"},[_c('span',{staticClass:"input-group-text f-12"},[_vm._v("VND")])])],1)])]),_vm._v(" "),_c('div',{staticClass:"row mb-15px mr-60px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Ti???n ????? thi c??ng")])]),_vm._v(" "),_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"f-13 text-main fw-600"},[_vm._v(_vm._s(_vm.objCompany.day)+" ng??y")])]),_vm._v(" "),_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Ti???n ????? mong mu???n")]),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-md-3 "},[((_vm.isCompany && _vm.objCompany.deal[0]) || _vm.surveryUpdate)?_c('div',{staticClass:"input-group"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.objCompany.deal[0].day),expression:"objCompany.deal[0].day"}],staticClass:"form-control",attrs:{"type":"text","required":"","readonly":!_vm.surveryUpdate},domProps:{"value":(_vm.objCompany.deal[0].day)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objCompany.deal[0], "day", $event.target.value)}}}),_vm._v(" "),_c('div',{staticClass:"input-group-append"},[_c('span',{staticClass:"input-group-text f-12"},[_vm._v("Ng??y")])])]):_c('div',{staticClass:"input-group"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.objSurvey.day),expression:"objSurvey.day"}],staticClass:"form-control",attrs:{"type":"text","required":""},domProps:{"value":(_vm.objSurvey.day)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objSurvey, "day", $event.target.value)}}}),_vm._v(" "),_c('div',{staticClass:"input-group-append"},[_c('span',{staticClass:"input-group-text f-12"},[_vm._v("Ng??y")])])])])]),_vm._v(" "),((_vm.isCompany && _vm.objCompany.deal[0]) || (_vm.surveryUpdate && _vm.objCompany.deal[0]))?[_c('div',{staticClass:"row mb-15px mr-60px"},[(_vm.objCompany.payments)?_c('div',{staticClass:"col-6"},[_vm._l((_vm.objCompany.payments),function(item,idx){return [_c('div',{key:idx,staticClass:"row mb-15px"},[_c('div',{staticClass:"col-6"},[_c('span',{staticClass:"key"},[_vm._v("Thanh to??n ?????t "+_vm._s(idx+1))])]),_vm._v(" "),_c('div',{staticClass:"col-6"},[_c('span',{staticClass:"f-13 text-main fw-600"},[_vm._v(_vm._s(item.value))])])])]})],2):_vm._e(),_vm._v(" "),(_vm.objCompany.deal[0] &&  _vm.objCompany.deal[0].payments)?_c('div',{staticClass:"col-6"},[_vm._l((_vm.objCompany.deal[0].payments),function(item,idx){return [_c('div',{key:idx+10,staticClass:"row mb-15px"},[_c('div',{staticClass:"col-6"},[_c('span',{staticClass:"key"},[_vm._v("Thanh to??n ?????t "+_vm._s(idx+1))]),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-6"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(item.value),expression:"item.value"}],staticClass:"form-control",attrs:{"type":"text","required":"","readonly":!_vm.surveryUpdate},domProps:{"value":(item.value)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(item, "value", $event.target.value)}}})])])]})],2):_vm._e()])]:[_c('div',{staticClass:"row mb-15px mr-60px"},[(_vm.objCompany.payments)?_c('div',{staticClass:"col-6"},[_vm._l((_vm.objCompany.payments),function(item,idx){return [_c('div',{key:idx,staticClass:"row mb-15px"},[_c('div',{staticClass:"col-6"},[_c('span',{staticClass:"key"},[_vm._v("Thanh to??n ?????t "+_vm._s(idx+1))])]),_vm._v(" "),_c('div',{staticClass:"col-6"},[_c('span',{staticClass:"f-13 text-main fw-600"},[_vm._v(_vm._s(item.value))])])])]})],2):_vm._e(),_vm._v(" "),_c('div',{staticClass:"col-6"},[_vm._l((_vm.objCompany.payments),function(item,idx){return [_c('div',{key:idx+10,staticClass:"row mb-15px"},[_c('div',{staticClass:"col-6"},[_c('span',{staticClass:"key"},[_vm._v("Thanh to??n ?????t "+_vm._s(idx+1))]),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-6"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(item.newValue),expression:"item.newValue"}],staticClass:"form-control",attrs:{"type":"text","required":""},domProps:{"value":(item.newValue)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(item, "newValue", $event.target.value)}}})])])]})],2)])],_vm._v(" "),_c('div',{staticClass:"row mb-15px mr-60px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Y??u c???u b??o c??o")]),_c('span',{staticClass:"text-red"},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[(_vm.isCompany && _vm.objCompany.deal[0])?_c('treeselect',{staticClass:"option-search",attrs:{"options":_vm.optionSearch,"value":_vm.objCompany.deal[0].report,"placeholder":"","clearable":false,"disabled":""},model:{value:(_vm.objCompany.deal[0].report),callback:function ($$v) {_vm.$set(_vm.objCompany.deal[0], "report", $$v)},expression:"objCompany.deal[0].report"}}):_c('treeselect',{staticClass:"option-search",attrs:{"options":_vm.optionSearch,"value":_vm.objSurvey.report,"placeholder":"","clearable":false},model:{value:(_vm.objSurvey.report),callback:function ($$v) {_vm.$set(_vm.objSurvey, "report", $$v)},expression:"objSurvey.report"}})],1)]),_vm._v(" "),_c('div',{staticClass:"row mb-15px mr-60px"},[_c('div',{staticClass:"f-13  col-md-3 col-sm-12 "},[_c('span',{staticClass:"key"},[_vm._v("T??i li??u ????nh k??m:")])]),_vm._v(" "),(!_vm.isCompany)?_c('div',{staticClass:"col-md-9 "},[_c('InputFile',{key:"file",ref:"akjklak",attrs:{"accept":_vm.acceptFile,"multiple":true,"label":'Th??m t??i li???u'},on:{"input":_vm.getFile}})],1):_vm._e(),_vm._v(" "),(!_vm.isCompany)?_c('div',{staticClass:"col-md-3"}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"col-md-9 "},[((_vm.isCompany &&  _vm.objCompany.deal[0] && _vm.objCompany.deal[0].attachments) || _vm.surveryUpdate)?[_vm._l((_vm.objCompany.deal[0].attachments),function(item,idx){return [_c('p',{key:idx,staticClass:"f-11 text-main "},[_c('span',{staticClass:"mr-5px",domProps:{"innerHTML":_vm._s(_vm.returnTypeFile(item))}}),_vm._v("\n                                     "+_vm._s(_vm.spliceURLFile(item,'--'))+"\n                                    "),(_vm.surveryUpdate)?_c('span',{staticClass:"cursor-pointer ml-5px",on:{"click":function($event){return _vm.clearFileOld(item)}}},[_c('i',{staticClass:"fas fa-times text-red"})]):_vm._e()])]})]:_vm._e(),_vm._v(" "),(_vm.arrFile.length)?[_vm._l((_vm.arrFile),function(item,idx){return [_c('p',{key:idx + 30,staticClass:"f-11 text-main "},[_c('span',{staticClass:"mr-5px",domProps:{"innerHTML":_vm._s(_vm.returnTypeFile(item.name))}}),_vm._v("\n                                    "+_vm._s(item.name)+"\n                                    "),_c('span',{staticClass:"cursor-pointer ml-5px",on:{"click":function($event){return _vm.clearFile(item)}}},[_c('i',{staticClass:"fas fa-times text-red"})])])]})]:_vm._e()],2)]),_vm._v(" "),(_vm.isCompany)?_c('div',{staticClass:"row mb-15px mr-60px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("Ph???n h???i c???a b???n"),_c('span',{staticClass:"text-red"},[_vm._v("*")])])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.objSurvey.feedback),expression:"objSurvey.feedback"}],staticClass:"form-control fw-600",attrs:{"required":"","id":"customPlaceholder","rows":"5"},domProps:{"value":(_vm.objSurvey.feedback)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objSurvey, "feedback", $event.target.value)}}})]],2)]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"form-group group-checkbox mb-0 d-flex"},[_c('b-form-checkbox',{staticClass:"f-13",attrs:{"checked":_vm.objSurvey.agree,"name":"checkbox-agree","required":""},model:{value:(_vm.objSurvey.agree),callback:function ($$v) {_vm.$set(_vm.objSurvey, "agree", $$v)},expression:"objSurvey.agree"}}),_vm._v(" "),_c('span',{staticClass:"f-12 main-black mt-2px ml-5px"},[_vm._v("T??i ?????ng ?? v???i "),_c('span',{staticClass:"main-color"},[_vm._v("??i???u kho???n")]),_vm._v(" c???a Econs "),_c('span',{staticStyle:{"color":"red"}},[_vm._v("*")])])],1)],2),_vm._v(" "),_c('div',{staticClass:"footer"},[(_vm.isCompany)?[_c('div',{staticClass:"d-flex"},[_c('button',{ref:"btnConfirm",staticClass:"d-none",attrs:{"type":"submit"}}),_vm._v(" "),_c('button',{staticClass:"btn-confirm mr-15px",attrs:{"type":"button"},on:{"click":function($event){return _vm.confirmSurvey('ACCEPT')}}},[_c('span',[_vm._v("?????NG ?? V?? B???T ?????U D??? ??N")])]),_vm._v(" "),_c('button',{staticClass:"btn-confirm cancel",attrs:{"type":"button"},on:{"click":function($event){return _vm.confirmSurvey('CANCEL')}}},[_c('span',[_vm._v("T??? CH???I Y??U C???U TH????NG L?????NG")])])])]:[_c('button',{staticClass:"btn-confirm",attrs:{"type":"submit"}},[_c('span',[_vm._v("G???I Y??U C???U TH????NG L?????NG")])])]],2)])])]):_vm._e()]},proxy:true}])})}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/popup/surveyUpdate.vue?vue&type=template&id=1e5246a0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/surveyUpdate.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var surveyUpdatevue_type_script_lang_js_ = ({props:['objCompany','detailProject','rawCategory','isCompany','surveryUpdate'],data(){return{optionSearch:[{id:1,label:'1 tu???n 1 l???n'},{id:2,label:'2 tu???n 1 l???n'},{id:4,label:'1 th??ng 1 l???n'}],acceptFile:["png","jpg","jpeg","tiff","pdf","xls","doc","ppt","zip","rar"],arrFile:[],objSurvey:{message:'',report:1,agree:false},statusCallAPI:''};},mounted(){},methods:{async submitForm(){try{// this.loader()
var arrPayment=[];if(this.surveryUpdate){var fileNew=this.arrFile.length?await this.uploadFile(this.arrFile):[];var fileOld=this.objCompany.deal[0].attachments||[];var arrFile=fileOld.concat(fileNew);this.objCompany.deal[0].payments.forEach(item=>{var obj={key:item.key,value:item.value};arrPayment.push(obj);});var obj={...this.objCompany.deal[0],project:this.objCompany.survey[0].project,auction:this.objCompany.survey[0].auction,payments:arrPayment,attachments:arrFile};}else{this.objCompany.payments.forEach(item=>{var obj={key:item.key,value:item.newValue};arrPayment.push(obj);});var arrFile=this.arrFile.length?await this.uploadFile(this.arrFile):[];var obj={...this.objSurvey,project:this.objCompany.survey[0].project,auction:this.objCompany.survey[0].auction,payments:arrPayment,attachments:arrFile};}let url='';if(this.statusCallAPI=='ACCEPT'){url='member/auction/deal/confirmed';}else if(this.statusCallAPI=='CANCEL'){url='member/auction/deal/cancel';}else{url='member/auction/deal';}let res=await this.$post(url,obj);console.log(res);this.hide();this.arrFile=[];if(this.statusCallAPI=='ACCEPT'||this.statusCallAPI=='CANCEL'){this.$emit('getListParent');}else{this.$emit('activeCompany');}}catch(err){this.loader(0);console.log(err);}},confirmSurvey(status){this.statusCallAPI=status;this.$refs.btnConfirm.click();},show(){console.log('objProject',this.objCompany);console.log('objProject',this.detailProject);console.log('objProject',this.rawCategory);this.$refs.popupSurveyUpdate.showModal();},hide(){this.$refs.popupSurveyUpdate.hideModal();},clearFile(file){this.arrFile=this.arrFile.filter(item=>item.name!==file.name);},clearFileOld(file){this.objCompany.deal[0].attachments=this.objCompany.deal[0].attachments.filter(item=>item!==file);},getFile(file){this.arrFile=this.arrFile.concat(file);}}});
// CONCATENATED MODULE: ./components/popup/surveyUpdate.vue?vue&type=script&lang=js&
 /* harmony default export */ var popup_surveyUpdatevue_type_script_lang_js_ = (surveyUpdatevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/popup/surveyUpdate.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  popup_surveyUpdatevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1d38bb21"
  
)

/* harmony default export */ var surveyUpdate = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {InputFile: __webpack_require__(81).default,Modal: __webpack_require__(33).default})


/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/surveyContact.vue?vue&type=template&id=0fd9722d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Modal',{ref:"popupSurveyContact",attrs:{"id":"modal-survey-contact"},scopedSlots:_vm._u([{key:"content",fn:function(){return [(_vm.objConfirm)?_c('div',{staticClass:"modal-contact formCore"},[_c('div',{staticClass:"content"},[_c('p',{staticClass:"title f-14"},[_vm._v("\n            B???n ???? x??c nh???n y??u c???u kh???o s??t c???a kh??ch h??ng "),_c('span',{staticClass:"text-main"},[_vm._v(_vm._s(_vm.objConfirm.name))]),_vm._v(". N???u c?? thay ?????i v??? th???i gian v?? ?????a ??i???m, vui l??ng li??n h??? tr???c ti???p v???i kh??ch.\n        ")]),_vm._v(" "),_c('div',{staticClass:"group-infor"},[_c('div',{staticClass:"row mb-15px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("H??? T??n:")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('span',{staticClass:"value text-red"},[_vm._v(_vm._s(_vm.objConfirm.name))])])]),_vm._v(" "),_c('div',{staticClass:"row mb-15px"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("S??? ??i???n tho???i:")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('span',{staticClass:"value"},[_vm._v(_vm._s(_vm.objConfirm.phone))])])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-3"},[_c('span',{staticClass:"key"},[_vm._v("?????a ch??? Email:")])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('span',{staticClass:"value"},[_vm._v(_vm._s(_vm.objConfirm.email))])])])]),_vm._v(" "),_c('div',{staticClass:"footer"},[_c('div',{staticClass:"btn-confirm",on:{"click":function($event){return _vm.hide()}}},[_c('span',[_vm._v("HO??N T???T")])])])])]):_vm._e()]},proxy:true}])})}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/popup/surveyContact.vue?vue&type=template&id=0fd9722d&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/surveyContact.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var surveyContactvue_type_script_lang_js_ = ({props:['objConfirm'],methods:{show(){console.log('objProject',this.objConfirm);this.$refs.popupSurveyContact.showModal();},hide(){this.$refs.popupSurveyContact.hideModal();}}});
// CONCATENATED MODULE: ./components/popup/surveyContact.vue?vue&type=script&lang=js&
 /* harmony default export */ var popup_surveyContactvue_type_script_lang_js_ = (surveyContactvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/popup/surveyContact.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  popup_surveyContactvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "9dc61b10"
  
)

/* harmony default export */ var surveyContact = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Modal: __webpack_require__(33).default})


/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/lienhe.vue?vue&type=template&id=0a604676&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Modal',{ref:"modalLien",attrs:{"id":"modal-custom-form-contact"},scopedSlots:_vm._u([{key:"content",fn:function(){return [(_vm.userInfor)?_c('div',{staticClass:"modal-contact"},[_c('div',{staticClass:"top"},[_c('div',{staticClass:"title f-20"},[_vm._v("\n                Li??n h??? tr???c ti???p v???i "),_c('span',[_vm._v(_vm._s(_vm.userInfor.company ? _vm.userInfor.company : _vm.userInfor.name))])]),_vm._v(" "),_c('div',{staticClass:"sub f-13"},[_vm._v("\n                B???n s??? t???n "),_c('span',[_vm._v("3 Tokens")]),_vm._v(" khi li??n h??? tr???c ti???p v???i "),_c('span',[_vm._v(_vm._s(_vm.userInfor.company ? _vm.userInfor.company : _vm.userInfor.name))])])]),_vm._v(" "),_c('div',{staticClass:"center"},[_c('div',{staticClass:"name-line"},[_c('div',{staticClass:"label"},[_vm._v("H??? T??n:")]),_vm._v(" "),_c('div',{staticClass:"name"},[_vm._v(_vm._s(_vm.userInfor.name))])]),_vm._v(" "),_c('div',{staticClass:"phone-line"},[_c('div',{staticClass:"label"},[_vm._v("S??? ??i???n tho???i:")]),_vm._v(" "),(_vm.privateInfor && _vm.privateInfor._id)?_c('div',{staticClass:"phone"},[_vm._v("\n                   "+_vm._s(_vm.privateInfor.phone)+"\n               ")]):_c('div',{staticClass:"phone"},[_vm._v("XXX XXX XXX")])]),_vm._v(" "),_c('div',{staticClass:"email-line"},[_c('div',{staticClass:"label"},[_vm._v("?????a ch??? Email:")]),_vm._v(" "),(_vm.privateInfor && _vm.privateInfor._id)?_c('div',{staticClass:"email"},[_vm._v("\n                   "+_vm._s(_vm.privateInfor.email)+"\n               ")]):_c('div',{staticClass:"email"},[_vm._v("XXX XXX XXX")])])]),_vm._v(" "),(!_vm.$auth.loggedIn)?_c('div',{staticClass:"bottom btn-now"},[_c('div',{staticClass:"submit f-15 cursor-pointer",on:{"click":function($event){return _vm.hide()}}},[_vm._v("VUI L??NG ????NG NH???P")])]):_c('div',{staticClass:"bottom btn-now"},[(_vm.privateInfor && _vm.privateInfor._id)?_c('div',{staticClass:"submit f-16 cursor-pointer",on:{"click":function($event){return _vm.hide()}}},[_vm._v("HO??N T???T")]):_c('div',{staticClass:"submit f-15 cursor-pointer",on:{"click":function($event){return _vm.getUserInfor()}}},[_vm._v("HI???N TH??? TH??NG TIN")])])]):_vm._e()]},proxy:true}])})}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/popup/lienhe.vue?vue&type=template&id=0a604676&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/lienhe.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var lienhevue_type_script_lang_js_ = ({data(){return{userInfor:null,privateInfor:null};},mounted(){},methods:{getUserInfor(){this.$get(`private/user/${this.userInfor._id}`).then(res=>{this.privateInfor=res.data;this.$auth.fetchUser();}).catch(err=>{console.log(err);});},passIDInfor(item){this.userInfor=item;this.privateInfor=null;},show(){this.$refs.modalLien.showModal();},hide(){this.$refs.modalLien.hideModal();}}});
// CONCATENATED MODULE: ./components/popup/lienhe.vue?vue&type=script&lang=js&
 /* harmony default export */ var popup_lienhevue_type_script_lang_js_ = (lienhevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/popup/lienhe.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  popup_lienhevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "47891141"
  
)

/* harmony default export */ var lienhe = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Modal: __webpack_require__(33).default})


/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/viewSurvey.vue?vue&type=template&id=7b2c6074&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Modal',{ref:"popupSurvey",attrs:{"id":"modal-survey"},scopedSlots:_vm._u([{key:"content",fn:function(){return [(_vm.objInfor)?_c('div',{staticClass:"modal-contact formCore"},[_c('div',{staticClass:"content"},[_c('p',{staticClass:"title f-16 isCancel pr-60px"},[_vm._v("\n                        Kh??ch h??ng "),_c('span',{staticClass:"text-main"},[_vm._v(_vm._s(_vm.objInfor.name))]),_vm._v(" ???? ch???n b???n kh???o s??t hi???n tr???ng v?? g???i b??o gi?? cu???i c??ng. B???n s??? t???n "),_c('span',{staticClass:"text-main"},[_vm._v("12 Tokens")]),_vm._v(" khi x??c nh???n tham gia kh???o s??t v?? b??o gi??\n                    ")]),_vm._v(" "),_c('form',{staticClass:"group-content mt-20px",on:{"submit":function($event){$event.preventDefault();return _vm.sendMessage()}}},[_c('div',{staticClass:"form-group row"},[_c('label',{staticClass:"f-13 col-md-3 col-sm-12 "},[_vm._v("\n                                T??n d??? ??n\n                            ")]),_vm._v(" "),_c('span',{staticClass:"col-md-9 col-sm-12 pl-0 name-project",class:_vm.getClassCategory(_vm.mapImgFromCategory(_vm.rawCategory))},[_vm._v("\n                                "+_vm._s(_vm.detailProject.name)+"\n                            ")])]),_vm._v(" "),_c('div',{staticClass:"form-group row"},[_c('label',{staticClass:"f-13 col-md-3 col-sm-12 "},[_vm._v("\n                                So???n tin nh???n\n                                "),_c('span',{staticStyle:{"color":"red"}},[_vm._v("*")])]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.objResearch.message),expression:"objResearch.message"}],staticClass:"form-control col-md-9 col-sm-12",attrs:{"required":"","id":"customPlaceholder","rows":"5","placeholder":_vm.placeholder,"readonly":true},domProps:{"value":(_vm.objResearch.message)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objResearch, "message", $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"form-group row"},[_c('label',{staticClass:"f-13 col-md-3 col-sm-12 "},[_vm._v("\n                                    ?????a ??i???m kh???o s??t\n                                    "),_c('span',{staticStyle:{"color":"red"}},[_vm._v("*")])]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.objResearch.address),expression:"objResearch.address"}],staticClass:"form-control col-md-9 col-sm-12",attrs:{"type":"text","placeholder":"Nh???p ?????a ch??? c??ng tr??nh","required":"","readonly":true},domProps:{"value":(_vm.objResearch.address)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objResearch, "address", $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"form-group row"},[_c('label',{staticClass:"f-13 col-md-3 col-sm-12 "},[_vm._v("\n                                    Th???i gian kh???o s??t\n                                    "),_c('span',{staticStyle:{"color":"red"}},[_vm._v("*")])]),_vm._v(" "),_c('div',{staticClass:"d-flex"},[[_c('div',{staticClass:"input-group custom-input-calendar",staticStyle:{"min-width":"170px"}},[_c('input',{staticClass:"form-control",attrs:{"type":"text","readonly":"","required":""},domProps:{"value":_vm.$moment(_vm.objResearch.date).format('DD/MM/YYYY')}}),_vm._v(" "),_c('div',{staticClass:"input-group-append"},[_c('span',{staticClass:"input-group-text custom-time disabled"},[_c('i',{staticClass:"fas fa-calendar-day"})])])])],_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.objResearch.time),expression:"objResearch.time"}],staticClass:"ml-20px form-control",attrs:{"type":"time","readonly":true},domProps:{"value":(_vm.objResearch.time)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.objResearch, "time", $event.target.value)}}})],2)]),_vm._v(" "),_c('div',{staticClass:"form-group row"},[_c('label',{staticClass:"f-13  col-md-3 col-sm-12 mt-1"},[_vm._v("\n                                T??i li???u ????nh k??m\n                            ")]),_vm._v(" "),_c('div',{staticClass:"col-md-9 col-sm-12 pl-0"},[(_vm.arrFile.length)?_c('div',{staticClass:"col-md-3"}):_vm._e(),_vm._v(" "),(_vm.arrFile.length)?_c('div',{staticClass:"col-md-9 pl-0"},[_vm._l((_vm.arrFile),function(item,idx){return [_c('p',{key:idx,staticClass:"f-11 text-main "},[_c('span',{staticClass:"mr-5px",domProps:{"innerHTML":_vm._s(_vm.returnTypeFile(item.name))}}),_vm._v("\n                                                "+_vm._s(item.name)+"\n                                            ")])]})],2):_vm._e(),_vm._v(" "),(_vm.objProject.survey[0] && _vm.objProject.survey[0].attachments)?_c('div',{staticClass:"col-md-3"}):_vm._e(),_vm._v(" "),(_vm.objProject.survey[0] && _vm.objProject.survey[0].attachments)?_c('div',{staticClass:"col-md-9 pl-0"},[_vm._l((_vm.objProject.survey[0].attachments),function(item,idx){return [_c('p',{key:idx,staticClass:"f-11 text-main "},[_c('span',{staticClass:"mr-5px",domProps:{"innerHTML":_vm._s(_vm.returnTypeFile(item))}}),_vm._v("\n                                                "+_vm._s(_vm.spliceURLFile(item,'--'))+"\n                                            ")])]})],2):_vm._e()])]),_vm._v(" "),_c('div',{staticClass:"form-group  group-checkbox d-flex"},[_c('b-form-checkbox',{attrs:{"name":"checkbox-agree-survey","required":""},model:{value:(_vm.objResearch.agree),callback:function ($$v) {_vm.$set(_vm.objResearch, "agree", $$v)},expression:"objResearch.agree"}}),_vm._v(" "),_c('span',{staticClass:"f-12 main-black mt-2px ml-5px"},[_vm._v("T??i ?????ng ?? v???i "),_c('span',{staticClass:"main-color"},[_vm._v("??i???u kho???n")]),_vm._v(" c???a Econs "),_c('span',{staticStyle:{"color":"red"}},[_vm._v("*")])])],1),_vm._v(" "),_c('div',{staticClass:"form-group  group-checkbox d-flex"},[_c('b-form-checkbox',{attrs:{"name":"checkbox-agree","required":""},model:{value:(_vm.objResearch.agreeSurvey),callback:function ($$v) {_vm.$set(_vm.objResearch, "agreeSurvey", $$v)},expression:"objResearch.agreeSurvey"}}),_vm._v(" "),_c('span',{staticClass:"f-12 main-black mt-2px ml-5px"},[_vm._v("T??i ?????ng ?? kh???o s??t hi???n tr???ng v?? s???  "),_c('span',{staticClass:"text-red"},[_vm._v(" c???p nh???t b??o gi?? trong v??ng 24 gi??? ")]),_vm._v(" sau khi kh???o s??t "),_c('span',{staticStyle:{"color":"red"}},[_vm._v("*")])])],1),_vm._v(" "),_c('div',{staticClass:"group-btn row"},[(!_vm.$auth.loggedIn)?_c('div',{staticClass:"col-md-12"},[_c('button',{staticClass:"btn-now",attrs:{"type":"button"},on:{"click":function($event){return _vm.hide()}}},[_vm._v("\n                                    VUI L??NG ????NG NH???P\n                                ")])]):_c('div',{staticClass:"col-md-12 d-flex"},[_c('button',{ref:"btnClick",staticClass:"d-none",attrs:{"type":"submit"}}),_vm._v(" "),_c('button',{staticClass:"btn-now mr-15px",attrs:{"type":"button"},on:{"click":function($event){return _vm.sendSurvey('CONFIRM')}}},[_vm._v("\n                                X??C NH???N KH???O S??T\n                                ")]),_vm._v(" "),_c('button',{staticClass:"btn-now delete",attrs:{"type":"button"},on:{"click":function($event){return _vm.sendSurvey('CANCEL')}}},[_vm._v("\n                                    T??? CH???I Y??U C???U KH???O S??T\n                                ")])])])])])]):_vm._e()]},proxy:true}])}),_vm._ssrNode(" "),_c('PopupSurveyContact',{ref:"surveyContact",attrs:{"objConfirm":_vm.objConfirm}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/popup/viewSurvey.vue?vue&type=template&id=7b2c6074&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/popup/viewSurvey.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var viewSurveyvue_type_script_lang_js_ = ({props:['detailProject','rawCategory','objProject'],data(){return{objResearch:{agree:false,agreeSurvey:false,date:new Date().getTime()},objInfor:null,arrFile:[],accepFile:["png","jpg","jpeg","tiff","pdf","xls","doc","ppt","zip","rar"],options:this.getCategory(),date:new Date(),statusConfirm:'',objConfirm:null,placeholder:'1. M?? t??? chi ti???t v??? d??? ??n x??y d???ng ho???c y??u c???u thi???t k??? c???a b???n\n2. Vui l??ng ????nh k??m s??? ?????, b???n v???, thi???t k??? ho???c h??nh ???nh minh ho??? ????? nh???n ???????c t?? v???n/d??? to??n t???t nh???t.\n3. Y??u c???u n??ng l???c c???a ????n v??? b??o gi?? ho???c nh???ng y??u c???u kh??c'};},mounted(){if(this.objProject){this.objResearch=this.objProject.survey[0];}},methods:{async sendMessage(){try{this.loader();var arrFile=this.arrFile.length?await this.uploadFile(this.arrFile):[];var obj={...this.objResearch,attachments:arrFile,project:this.detailProject._id,auction:this.objProject._id};if(this.statusConfirm=='CONFIRM'){let res=await this.$post('member/survey/confirmed',obj);this.$emit('getListParent');this.objConfirm=res.data.auction.projectOwner;this.showSurveyContact();}else{let res=await this.$post('member/survey/destroy',obj);this.$emit('getListParent');}this.loader(0);this.hide();window.location.reload();}catch(err){console.log(err);this.loader(0);}},sendSurvey(status){this.statusConfirm=status;this.$refs.btnClick.click();},getInforPerchant(infor){this.objInfor=infor;},show(){this.$refs.popupSurvey.showModal();console.log('this.company',this.company);},hide(){this.$refs.popupSurvey.hideModal();},showSurveyContact(){this.$refs.surveyContact.show();},hideSurveyContact(){this.$refs.surveyContact.hide();}}});
// CONCATENATED MODULE: ./components/popup/viewSurvey.vue?vue&type=script&lang=js&
 /* harmony default export */ var popup_viewSurveyvue_type_script_lang_js_ = (viewSurveyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/popup/viewSurvey.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  popup_viewSurveyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "14d4443d"
  
)

/* harmony default export */ var viewSurvey = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Modal: __webpack_require__(33).default,PopupSurveyContact: __webpack_require__(93).default})


/***/ })

};;
//# sourceMappingURL=_slug.js.map