(this["webpackJsonpgoit-react-hw-02-bank-account"]=this["webpackJsonpgoit-react-hw-02-bank-account"]||[]).push([[0],{11:function(e,t,a){e.exports={history:"TransactionHistory_history__1hOO5",tableRow:"TransactionHistory_tableRow__XZ_MH",tableHeading:"TransactionHistory_tableHeading__1HSBq TransactionHistory_tableRow__XZ_MH"}},16:function(e,t,a){e.exports={dashboard:"Dashboard_dashboard__3MBKc"}},20:function(e,t,a){e.exports=a(32)},3:function(e,t,a){e.exports={controls:"Controls_controls__1TR4c",input:"Controls_input___19jc",button:"Controls_button__1wve1"}},32:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(2),o=a.n(r),s=a(19),l=a(6),i=a(7),u=a(9),m=a(8),b=a(10),h=a(15),_=a.n(h),p=a(12),d=(a(27),a(16)),E=a.n(d),v=a(3),f=a.n(v),w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={value:""},a.saveInputValue=function(e){a.setState({value:e.currentTarget.value})},a.sendTransaction=function(e){var t=a.state.value;t>0&&a.setState({value:""}),e(t)},a}return Object(b.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.onDeposit,n=t.onWithdraw,r=this.state.value;return c.a.createElement("section",{className:f.a.controls},c.a.createElement("input",{className:f.a.input,type:"number",name:"amount",value:r,onChange:this.saveInputValue}),c.a.createElement("button",{className:f.a.button,type:"button",onClick:function(){return e.sendTransaction(a)}},"Deposit"),c.a.createElement("button",{className:f.a.button,type:"button",onClick:function(){return e.sendTransaction(n)}},"Withdraw"))}}]),t}(n.Component),y=a(4),x=a.n(y),g=function(e){var t=e.balance,a=e.income,n=e.expenses;return c.a.createElement("section",{className:x.a.balance},c.a.createElement("span",{className:x.a.income},c.a.createElement("span",{role:"img","aria-label":"jsx-a11y/accessible-emoji"},"\u2b06\ufe0f"),a,"$"),c.a.createElement("span",{className:x.a.expenses},c.a.createElement("span",{role:"img","aria-label":"jsx-a11y/accessible-emoji"},"\u2b07\ufe0f"),n,"$"),c.a.createElement("span",{className:x.a.balance__text},"Balance: ",t,"$"))},j=a(11),T=a.n(j),O=function(e){var t=e.items;return c.a.createElement("table",{className:T.a.history},c.a.createElement("thead",null,c.a.createElement("tr",{className:T.a.tableHeading},c.a.createElement("th",null,"Transaction"),c.a.createElement("th",null,"Amount"),c.a.createElement("th",null,"Date"))),c.a.createElement("tbody",null,t.map((function(e){var t=e.id,a=e.type,n=e.amount,r=e.date;return c.a.createElement("tr",{className:T.a.tableRow,key:t},c.a.createElement("td",null,a),c.a.createElement("td",null,n),c.a.createElement("td",null,r))}))))},k={deposit:"deposit",withdraw:"withdraw"},N={zero:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!",noEnough:"\u041d\u0430 \u0441\u0447\u0435\u0442\u0443 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!"},B=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={transactions:[],balance:0},a.handleDeposit=function(e){a.checkTransaction(+e,k.deposit)},a.handleWithdraw=function(e){a.checkTransaction(+e,k.withdraw)},a.checkTransaction=function(e,t){var n=a.state.balance;e?t===k.withdraw&&e>n?Object(p.b)(N.noEnough):a.saveTransaction(e,t):Object(p.b)(N.zero)},a.saveTransaction=function(e,t){var n=a.setTransaction(e,t);a.setState((function(a){return{transactions:[].concat(Object(s.a)(a.transactions),[n]),balance:t===k.deposit?a.balance+e:a.balance-e}}))},a.setTransaction=function(e,t){return{id:_()(),type:t,amount:e,date:(new Date).toLocaleString()}},a.incomeExpenses=function(e,t){var a=0;return e.length&&(a=e.filter((function(e){return e.type===k[t]})).reduce((function(e,t){return e+t.amount}),0)),a},a}return Object(b.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.transactions,a=e.balance,n=this.incomeExpenses(t,k.deposit),r=this.incomeExpenses(t,k.withdraw);return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:E.a.dashboard},c.a.createElement(w,{onDeposit:this.handleDeposit,onWithdraw:this.handleWithdraw}),c.a.createElement(g,{balance:a,income:n,expenses:r}),t.length>0&&c.a.createElement(O,{items:t}),c.a.createElement(p.a,null)))}}]),t}(n.Component);o.a.render(c.a.createElement(B,null),document.getElementById("root"))},4:function(e,t,a){e.exports={balance:"Balance_balance__1_uC-",balance__text:"Balance_balance__text__8vcSR",income:"Balance_income__38hJe Balance_balance__text__8vcSR",expenses:"Balance_expenses__3F0gU Balance_balance__text__8vcSR"}}},[[20,1,2]]]);
//# sourceMappingURL=main.dfdb710d.chunk.js.map