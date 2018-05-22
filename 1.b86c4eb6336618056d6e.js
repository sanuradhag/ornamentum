(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{TFx7:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=function(){},o=u("3EMb"),a=u("gIcY"),r=u("b0Pa"),i=u("K9Ia"),d=function(){function l(){var l=this;this.DropdownSelectMode=r.j,this.install_code="\n   npm install ornamentum",this.import_code="\n   import { NgModule } from '@angular/core';\n   import { BrowserModule } from '@angular/platform-browser';\n\n   import { DropdownModule } from 'ornamentum';\n\n   import { AppComponent } from './app.component';\n\n   @NgModule({\n     bootstrap: [AppComponent],\n     declarations: [AppComponent],\n     imports: [BrowserModule, DropdownModule.forRoot()]\n    })\n    export class AppModule {\n    }",this.items=new i.a,setTimeout(function(){l.items.next([{key:1,value:"test",group:"A",disabled:!1},{key:2,group:"A",value:"test1",disabled:!1},{key:3,group:"A",value:"test2",disabled:!0},{key:4,group:"A",value:"test3",disabled:!1},{key:5,group:"B",value:"test34",disabled:!1},{key:6,group:"B",value:"test3",disabled:!1},{key:7,group:"B",value:"test3",disabled:!1},{key:8,group:"C",value:"test3",disabled:!1},{key:9,group:"D",value:"test3",disabled:!1},{key:10,group:"A",value:"test3",disabled:!1},{key:11,group:"L",value:"test3",disabled:!1},{key:12,group:"D",value:"test3",disabled:!1},{key:13,group:"C",value:"test3",disabled:!1},{key:14,group:"A",value:"test3",disabled:!1}])},5e3),this.singleSelected={key:13,group:"C",value:"test3",disabled:!1},this.selected=[{key:13,group:"C",value:"test3",disabled:!1},{key:14,group:"A",value:"test4",disabled:!1}],setTimeout(function(){},5e3)}return l.prototype.onSelectChange=function(l){console.log(l)},l.prototype.onDataBind=function(l){var n=new i.a,u={items:[{key:1,value:"test",group:"A",disabled:!1},{key:2,group:"A",value:"test1",disabled:!1},{key:3,group:"A",value:"test2",disabled:!0},{key:4,group:"A",value:"test3",disabled:!1},{key:5,group:"B",value:"test34",disabled:!1},{key:6,group:"B",value:"test3",disabled:!1},{key:7,group:"B",value:"test3",disabled:!1},{key:8,group:"C",value:"test3",disabled:!1},{key:9,group:"D",value:"test3",disabled:!1},{key:10,group:"A",value:"test3",disabled:!1},{key:11,group:"L",value:"test3",disabled:!1},{key:12,group:"D",value:"test3",disabled:!1},{key:13,group:"C",value:"test3",disabled:!1},{key:14,group:"A",value:"test3",disabled:!1}],count:100};return setInterval(function(){n.next(u)},2e3),n},l}(),s=e.Ja({encapsulation:0,styles:[[""]],data:{}});function p(l){return e.eb(0,[(l()(),e.La(0,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),e.cb(-1,null,["Dropdown Overview"])),(l()(),e.La(2,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.La(3,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e.cb(-1,null,["Basic Usage"])),(l()(),e.La(5,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.cb(-1,null,["The following example demonstrates the Dropdown in action."])),(l()(),e.La(7,0,[["parentElement",1]],null,11,"div",[["style","position: relative;"]],null,null,null,null,null)),(l()(),e.La(8,0,null,null,10,"label",[],null,null,null,null,null)),(l()(),e.La(9,0,null,null,9,"ng-dropdown",[],null,null,null,o.f,o.c)),e.Za(5120,null,a.f,function(l){return[l]},[r.g]),e.Za(512,null,r.D,r.D,[]),e.Za(512,null,r.E,r.E,[]),e.Za(512,null,r.C,r.C,[]),e.Za(512,null,r.B,r.B,[r.A]),e.Ka(15,245760,null,3,r.g,[r.l,e.p,r.D,r.E,r.C,r.B],{onDataBind:[0,"onDataBind"],items:[1,"items"],relativeParentElement:[2,"relativeParentElement"],selectTrackBy:[3,"selectTrackBy"],limit:[4,"limit"],loadOnScroll:[5,"loadOnScroll"],selectMode:[6,"selectMode"],filterable:[7,"filterable"],showSelectedOptionRemoveButton:[8,"showSelectedOptionRemoveButton"],showClearSelectionButton:[9,"showClearSelectionButton"],closeMenuOnSelect:[10,"closeMenuOnSelect"]},null),e.ab(335544320,1,{loadingSpinnerTemplate:0}),e.ab(335544320,2,{dropdownOptionTemplate:0}),e.ab(335544320,3,{dropdownOptionGroupHeaderTemplate:0}),(l()(),e.La(19,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.La(20,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e.cb(-1,null,["Installation"])),(l()(),e.La(22,0,null,null,10,"ol",[],null,null,null,null,null)),(l()(),e.La(23,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),e.cb(-1,null,["Install the package "])),(l()(),e.La(25,0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),e.La(26,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.cb(27,null,["",""])),(l()(),e.La(28,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),e.cb(-1,null,["As the second step, import DropdownModule into your application root module "])),(l()(),e.La(30,0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),e.La(31,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.cb(32,null,["",""])),(l()(),e.La(33,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.La(34,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e.cb(-1,null,["Dependencies"])),(l()(),e.La(36,0,null,null,10,"ul",[],null,null,null,null,null)),(l()(),e.La(37,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.cb(-1,null,["@angular/common"])),(l()(),e.La(39,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.cb(-1,null,["@angular/core"])),(l()(),e.La(41,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.cb(-1,null,["@angular/forms"])),(l()(),e.La(43,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.cb(-1,null,["lodash-es"])),(l()(),e.La(45,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.cb(-1,null,["rxjs"])),(l()(),e.La(47,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e.cb(-1,null,["Suggested Links"])),(l()(),e.La(49,0,null,null,1,"a",[["target","_blank"]],[[8,"href",4]],null,null,null,null)),(l()(),e.cb(-1,null,["API Doc for DropdownModule"]))],function(l,n){var u=n.component;l(n,15,1,[u.onDataBind,u.selected,e.Ua(n,7),"key",50,!0,u.DropdownSelectMode.MULTI,!0,!0,!0,!1])},function(l,n){var u=n.component;l(n,27,0,u.install_code),l(n,32,0,u.import_code),l(n,49,0,"src/docs/api-docs/modules/DropdownModule.html")})}var c=e.Ha("app-dropdown-overview-component",d,function(l){return e.eb(0,[(l()(),e.La(0,0,null,null,1,"app-dropdown-overview-component",[],null,null,null,p,s)),e.Ka(1,49152,null,0,d,[],null,null)],null,null)},{},{},[]),b=u("Ip0R"),g=u("ZYCi"),m=function(){};u.d(n,"DropdownFeatureModuleNgFactory",function(){return v});var v=e.Ia(t,[],function(l){return e.Sa([e.Ta(512,e.j,e.X,[[8,[o.g,c]],[3,e.j],e.v]),e.Ta(4608,b.l,b.k,[e.s,[2,b.q]]),e.Ta(4608,a.m,a.m,[]),e.Ta(4608,r.f,r.f,[]),e.Ta(4608,r.k,r.k,[]),e.Ta(4608,r.l,r.l,[e.j,e.g,r.k]),e.Ta(4608,r.m,r.m,[]),e.Ta(1073742336,b.b,b.b,[]),e.Ta(1073742336,a.k,a.k,[]),e.Ta(1073742336,a.d,a.d,[]),e.Ta(1073742336,r.n,r.n,[]),e.Ta(1073742336,r.i,r.i,[]),e.Ta(1073742336,g.n,g.n,[[2,g.s],[2,g.l]]),e.Ta(1073742336,m,m,[]),e.Ta(1073742336,t,t,[]),e.Ta(1024,g.j,function(){return[[{path:"",pathMatch:"full",redirectTo:"overview"},{component:d,path:"overview"},{component:d,path:"data-binding"},{component:d,path:"editing"},{component:d,path:"filtering"},{component:d,path:"grouping"},{component:d,path:"paging"},{component:d,path:"sorting"}]]},[]),e.Ta(256,r.A,void 0,[])])})}}]);