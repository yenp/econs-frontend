(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{447:function(t,e,n){"use strict";n.r(e);n(4),n(3),n(1),n(5),n(2),n(6);var o=n(0);function r(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var c={props:["project","activeRow","auction"],data:function(){return{objPayment:{}}},methods:{sendRequirePayment:function(){console.log("sendRequirePayment",this.objPayment),this.$emit("requiredPayment",this.objPayment),this.hide()},updateObjectRequired:function(t){this.objPayment=function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},t)},triggerForm:function(t){this.objPayment.status="DONE"==t?"DONE":"CANCEL",this.$refs.btnSubmit.click()},show:function(){this.$refs.createRequired.showModal()},hide:function(){this.$refs.createRequired.hideModal()}}},l=n(41),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Modal",{ref:"createRequired",attrs:{id:"modal-payment-required"},scopedSlots:t._u([{key:"content",fn:function(){return[t.auction?n("div",{staticClass:"modal-contact formCore"},[n("div",{staticClass:"content"},[n("p",{staticClass:"title f-20 fw-600"},[n("span",{staticClass:"text-main"},[t._v(t._s(t.auction.auctionBy.company))]),t._v(" GỬI YÊU CẦU THANH TOÁN ĐỢT "+t._s(t.activeRow+1)+"\n        ")]),t._v(" "),n("form",{attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.sendRequirePayment()}}},[n("div",{staticClass:"group-infor no-border pr-60px"},[n("div",{staticClass:"row mb-15px"},[n("div",{staticClass:"col-md-3"},[n("span",{staticClass:"key"},[t._v("Tên dự án")])]),t._v(" "),n("div",{staticClass:"col-md-9"},[n("span",{staticClass:"value",class:t.getClassCategory(t.mapImgFromCategory(t.project.category))},[t._v("\n                            "+t._s(t.project.name)+"\n                        ")])])]),t._v(" "),n("div",{staticClass:"row mb-15px"},[n("div",{staticClass:"col-md-3"},[n("span",{staticClass:"key"},[t._v("Nhân viên yêu cầu")]),t._v(" "),n("span",{staticClass:"text-red"},[t._v("*")])]),t._v(" "),n("div",{staticClass:"col-md-9"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.objPayment.nameStaff,expression:"objPayment.nameStaff"}],staticClass:"form-control",attrs:{readonly:"",type:"text",required:""},domProps:{value:t.objPayment.nameStaff},on:{input:function(e){e.target.composing||t.$set(t.objPayment,"nameStaff",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"row mb-15px"},[n("div",{staticClass:"col-md-3"},[n("span",{staticClass:"key"},[t._v("Giá trị thanh toán")]),n("span",{staticClass:"text-red"},[t._v("*")])]),t._v(" "),n("div",{staticClass:"col-md-9"},[n("div",{staticClass:"input-group "},[n("currency-input",{staticClass:"form-control",attrs:{type:"text",required:"",readonly:""},model:{value:t.objPayment.price,callback:function(e){t.$set(t.objPayment,"price",e)},expression:"objPayment.price"}}),t._v(" "),n("div",{staticClass:"input-group-append"},[n("span",{staticClass:"input-group-text f-12"},[t._v("VND")])])],1)])]),t._v(" "),n("div",{staticClass:"row mb-15px"},[n("div",{staticClass:"col-md-3"},[n("span",{staticClass:"key"},[t._v("Ghi chú thanh toán")]),n("span",{staticClass:"text-red"},[t._v("*")])]),t._v(" "),n("div",{staticClass:"col-md-9"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.objPayment.note,expression:"objPayment.note"}],staticClass:"form-control",attrs:{readonly:"",type:"text",required:"",rows:"5"},domProps:{value:t.objPayment.note},on:{input:function(e){e.target.composing||t.$set(t.objPayment,"note",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"row mb-15px"},[n("div",{staticClass:"col-md-3"},[n("span",{staticClass:"key"},[t._v("Tên ngân hàng")]),n("span",{staticClass:"text-red"},[t._v("*")])]),t._v(" "),n("div",{staticClass:"col-md-9"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.objPayment.nameBank,expression:"objPayment.nameBank"}],staticClass:"form-control",attrs:{readonly:"",type:"text",required:""},domProps:{value:t.objPayment.nameBank},on:{input:function(e){e.target.composing||t.$set(t.objPayment,"nameBank",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"row mb-15px"},[n("div",{staticClass:"col-md-3"},[n("span",{staticClass:"key"},[t._v("Tên chủ tài khoản")]),n("span",{staticClass:"text-red"},[t._v("*")])]),t._v(" "),n("div",{staticClass:"col-md-9"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.objPayment.nameAccountBank,expression:"objPayment.nameAccountBank"}],staticClass:"form-control",attrs:{readonly:"",type:"text",required:""},domProps:{value:t.objPayment.nameAccountBank},on:{input:function(e){e.target.composing||t.$set(t.objPayment,"nameAccountBank",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-3"},[n("span",{staticClass:"key"},[t._v("Số tài khoản")]),n("span",{staticClass:"text-red"},[t._v("*")])]),t._v(" "),n("div",{staticClass:"col-md-9"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.objPayment.accountNumber,expression:"objPayment.accountNumber"}],staticClass:"form-control",attrs:{readonly:"",type:"text",required:""},domProps:{value:t.objPayment.accountNumber},on:{keypress:function(e){return t.isNumber(e)},input:function(e){e.target.composing||t.$set(t.objPayment,"accountNumber",e.target.value)}}})])])]),t._v(" "),t.objPayment&&"DONE"!=t.objPayment.status?n("div",{staticClass:"footer d-flex"},[n("button",{ref:"btnSubmit",staticClass:"d-none",attrs:{type:"submit"}}),t._v(" "),n("div",{staticClass:"btn-confirm flex-1",on:{click:function(e){return t.triggerForm("DONE")}}},[n("span",[t._v("XÁC NHẬN THANH TOÁN")])]),t._v(" "),n("div",{staticClass:"btn-confirm cancel flex-1 ml-25px",on:{click:function(e){return t.triggerForm("CANCEL")}}},[n("span",[t._v("TỪ CHỐI THANH TOÁN")])])]):t._e()])])]):t._e()]},proxy:!0}])})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Modal:n(253).default})}}]);