"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[542],{2102:function(e,t,s){s.d(t,{Z:function(){return b}});var i=s(3396);const l={class:"block__items"},n={class:"header-container"},d={class:"header"},o={class:"header"},a={class:"item_number"},c={class:"item_numberSeats"},u={class:"numberSeats-value"},r={key:0,class:"block-btnAdd"};function m(e,t,s,m,k,p){const w=(0,i.up)("font-awesome-icon"),b=(0,i.up)("v-btn"),h=(0,i.up)("v-col");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("h3",null,[(0,i.WI)(e.$slots,"tittle_block",{},(()=>[(0,i.Uk)(" Title")]),!0)]),(0,i._)("div",l,[(0,i._)("div",n,[(0,i._)("div",d,[(0,i.WI)(e.$slots,"headerOne",{},(()=>[(0,i.Uk)("Title")]),!0)]),(0,i._)("div",o,[(0,i.WI)(e.$slots,"headerTwo",{},(()=>[(0,i.Uk)("Title")]),!0)])]),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.itemList,(t=>((0,i.wg)(),(0,i.iD)("div",{key:t.id,class:"field"},[(0,i._)("div",a,[(0,i.WI)(e.$slots,"name",{item:t},void 0,!0)]),(0,i._)("div",c,[(0,i._)("div",u,[(0,i.WI)(e.$slots,"number",{item:t},void 0,!0)]),s.isVisibleBtn?((0,i.wg)(),(0,i.j4)(h,{key:0,cols:"auto"},{default:(0,i.w5)((()=>[(0,i.Wm)(b,{density:"compact",icon:"mdi-plus",class:"edit-class",onClick:e=>p.onEdit(t)},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{icon:["fas","user-pen"]})])),_:2},1032,["onClick"])])),_:2},1024)):(0,i.kq)("",!0),(0,i.Wm)(h,{cols:"auto"},{default:(0,i.w5)((()=>[(0,i.Wm)(b,{density:"compact",icon:"mdi-plus",class:"delete-class",onClick:e=>p.deleteItemes(t.id)},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{icon:["fas","user-xmark"]})])),_:2},1032,["onClick"])])),_:2},1024)])])))),128)),s.isVisibleBtn?((0,i.wg)(),(0,i.iD)("div",r,[(0,i.Wm)(b,{class:"btnAdd",onClick:p.addItem},{default:(0,i.w5)((()=>[(0,i.Uk)(" Додати ")])),_:1},8,["onClick"])])):(0,i.kq)("",!0)])],64)}var k={name:"EditableItemList",props:{itemList:{type:Array,default:()=>[]},isVisibleBtn:{type:Boolean,default:!0}},emits:["edit-click","delete-click","add-click"],methods:{onEdit(e){this.$emit("edit-click",e)},deleteItemes(e){console.log("itemId"),console.log(e),this.$emit("delete-click",e)},addItem(){this.$emit("add-click")}}},p=s(89);const w=(0,p.Z)(k,[["render",m],["__scopeId","data-v-6651d884"]]);var b=w},9542:function(e,t,s){s.r(t),s.d(t,{default:function(){return k}});var i=s(3396),l=s(7139),n=s(9242);function d(e,t,s,d,o,a){const c=(0,i.up)("editable-item-list"),u=(0,i.up)("main-masterpage");return(0,i.wg)(),(0,i.j4)(u,null,{default:(0,i.w5)((()=>[(0,i.Wm)(c,{itemList:e.getBusesList,onEditClick:a.onEdit,onDeleteClick:a.onDelete,onAddClick:a.addBus},{tittle_block:(0,i.w5)((()=>[(0,i.Uk)("Наші автобуси:")])),headerOne:(0,i.w5)((()=>[(0,i.Uk)("Номер")])),headerTwo:(0,i.w5)((()=>[(0,i.Uk)("Автобуси")])),name:(0,i.w5)((({item:e})=>[(0,i.Uk)((0,l.zw)(e.number),1)])),number:(0,i.w5)((({item:e})=>[(0,i.Uk)((0,l.zw)(e.numberOfSeats),1)])),_:1},8,["itemList","onEditClick","onDeleteClick","onAddClick"]),(0,i.wy)((0,i._)("p",null,(0,l.zw)(o.messegeError),513),[[n.F8,o.messegeError]])])),_:1})}s(560);var o=s(6088),a=s(2102),c=s(65),u={name:"BusesView",components:{MainMasterpage:o.Z,EditableItemList:a.Z},data(){return{messegeError:null}},computed:{...(0,c.Se)("buses",["getBusesList"]),...(0,c.Se)("appointment",["getAppointmentByIdBus"])},methods:{...(0,c.nv)("buses",["loadlistBuses","deleteBuses"]),onEdit(e){this.$router.push({name:"busesEditor",params:{id:e.id}})},addBus(){this.$router.push({name:"busesEditor"})},onDelete(e){this.getAppointmentByIdBus(e)?this.messegeError="Не можна видалити автобус":this.deleteBuses(e)}},created(){this.loadlistBuses()}},r=s(89);const m=(0,r.Z)(u,[["render",d]]);var k=m}}]);
//# sourceMappingURL=542.0eb51178.js.map