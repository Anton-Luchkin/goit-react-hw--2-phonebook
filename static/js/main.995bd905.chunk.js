(this["webpackJsonpgoit-react-hw--2-phonebook"]=this["webpackJsonpgoit-react-hw--2-phonebook"]||[]).push([[0],{1:function(t,e,n){t.exports={contact_form:"ContactForm_contact_form__2YFcm",lable:"ContactForm_lable__1waod",input:"ContactForm_input__2x74A",btn:"ContactForm_btn__Phk0J"}},10:function(t,e,n){t.exports={filter:"Filter_filter__B2Vba",input:"Filter_input__1QmXa"}},14:function(t,e,n){t.exports={wrapper:"wrapper_wrapper__1uZIR"}},16:function(t,e,n){t.exports={delContactBtn:"Contact_delContactBtn__3IOE2"}},19:function(t,e,n){t.exports=n(33)},33:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(12),o=n.n(r),l=n(18),i=n(13),u=n(5),s=n(6),m=n(8),f=n(7),p=n(14),b=n.n(p),h=function(t){var e=t.children;return c.a.createElement("div",{className:b.a.wrapper},e)},d=n(15),v=n(1),_=n.n(v),C=function(t){Object(m.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(d.a)({},a,c))},t.hendleSubmit=function(e){e.preventDefault(),t.props.onSubmitForm(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return c.a.createElement("form",{onSubmit:this.hendleSubmit,className:_.a.contact_form},c.a.createElement("label",{className:_.a.lable},"Name",c.a.createElement("input",{type:"text",value:e,onChange:this.handleChange,name:"name",className:_.a.input})),c.a.createElement("label",{className:_.a.lable},"Number",c.a.createElement("input",{type:"phone",value:n,onChange:this.handleChange,name:"number",className:_.a.input})),c.a.createElement("button",{type:"submit",className:_.a.btn},"Add contact"))}}]),n}(a.Component),E=n(16),g=n.n(E),y=function(t){var e=t.contact,n=t.onDeleteContact;return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,e.name,": ",e.number),c.a.createElement("button",{className:g.a.delContactBtn,type:"button",onClick:function(){return n(e.id)}},"Delete"))},S=n(9),N=n.n(S),O=function(t){var e=t.contacts,n=t.onDeleteContact;return c.a.createElement("ul",{className:N.a.contact_list},e.map((function(t){return c.a.createElement("li",{key:t.id,className:N.a.contact},c.a.createElement(y,{onDeleteContact:n,contact:t}))})))},w=n(10),F=n.n(w),k=function(t){var e=t.value,n=t.onChange;return c.a.createElement("label",{className:F.a.filter},"Find contact by name",c.a.createElement("input",{type:"text",value:e,onChange:n,className:F.a.input}))},j=n(17),x=n.n(j),D=function(t){Object(m.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.addContact=function(e){var n,a=e.name,c=e.number,r=t.state.contacts,o="".concat(a," is already in contacts"),u=Object(i.a)(r);try{for(u.s();!(n=u.n()).done;){if(a===n.value.name)return void alert(o)}}catch(m){u.e(m)}finally{u.f()}var s={id:x.a.generate(),name:a,number:c};t.setState((function(t){var e=t.contacts;return{contacts:[s].concat(Object(l.a)(e))}}))},t.changeFilter=function(e){var n=e.target;t.setState({filter:n.value})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t){var e=this.state.contacts;e!==t.contacts&&localStorage.setItem("contacts",JSON.stringify(e))}},{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return c.a.createElement(h,null,c.a.createElement("div",null,c.a.createElement("h2",null,"Phonebook"),c.a.createElement(C,{onSubmitForm:this.addContact}),c.a.createElement(k,{value:t,onChange:this.changeFilter}),c.a.createElement("h2",null,"Contacts"),c.a.createElement(O,{contacts:e,onDeleteContact:this.deleteContact})))}}]),n}(a.Component);n(32);o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(D,null)),document.getElementById("root"))},9:function(t,e,n){t.exports={contact_list:"ContactList_contact_list__2tS2p",contact:"ContactList_contact__3fUuG"}}},[[19,1,2]]]);
//# sourceMappingURL=main.995bd905.chunk.js.map