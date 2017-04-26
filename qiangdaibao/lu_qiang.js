function login() {  
  setTimeout(function(){
    var username = document.getElementById('userNameLogin');//获取网站用户名对应的元素
    username.value = "why123yhw";//赋值，实现自动输入
    var password =   document.getElementById('pwd');
    password.value = "156123994216!";
    var loginSubmit = document.getElementById("loginBtn");//获取“”登陆“”按钮对应的元素
    loginSubmit.click();//实现点击登陆
  },1000);
}  

time=0,p=0,n=0,flag1=0,val=0,va=0;
function popup(){
  var url = "https://list.lu.com/list/transfer-dingqi";
  if(sessionStorage.getItem("lilv")==null){
    va = getValue();
    sessionStorage.setItem("a",va[0]);
    sessionStorage.setItem("b",va[1]);
    sessionStorage.setItem("c",va[2]);
    sessionStorage.setItem("lilv",va[3]);
    console.log(va,sessionStorage.getItem("lilv"));
    sessionStorage.setItem("interval",va[4])
  }
  console.log(va,sessionStorage.getItem("lilv"));
  
  if(document.URL==url){
    a=sessionStorage.getItem("a");
    b=sessionStorage.getItem("b");
    c=sessionStorage.getItem("c");	 
    time=document.getElementsByClassName("clearfix invest-filter")[0].getElementsByTagName('a')[a];//得到相关设置的元素
    time.click();//点击选项
    p=document.getElementsByClassName("clearfix invest-filter")[1].getElementsByTagName('a')[b];//
    p.click();
    n=document.getElementsByClassName("clearfix last-col invest-filter")[0].getElementsByTagName('a')[c];//
    n.click();
    flag3=1;
    sessionStorage.setItem("flag3",flag3);
  }
}

remainTime=0,price=0,name=0,retime=0,annualYield=0;
function getValue() {
  remainTime=prompt("请设置剩余期限：\n 0：不限 \n 1：1个月一下 \n 2：1~3个月 \n 3：3~6个月 \n 4：6~12个月 \n 5：12个月以上");
  price=prompt("请设置转让价格：\n 0：不限 \n 1：5万元以下 \n 2：5万~10万元 \n 3：10万~30万元 \n 4：30万元以上");
  name=prompt("请设置项目名称：\n 0：不限 \n 1：财富汇 \n 2：财富汇-重金所 \n 3：安鑫 \n 4：彩虹");
  annualYield=prompt("请设置年收益率阈值：");
  retime=prompt("请输入刷新间隔：");
  value=new Array(remainTime,price,name,annualYield,retime);
  return value
};

function jump(){

  var url = "https://www.lu.com/";//陆金所官网
  var url2 = 'https://list.lu.com/list/transfer-dingqi';//相关产品列表界面
  var url3 = 'https://user.lu.com/user/login?returnPostURL=https%3A%2F%2Fwww.lu.com%2F';//登录界面	
  setTimeout(function(){
  if(document.URL==url&&document.getElementsByClassName("user-name")[0].innerHTML!=""){   

    window.location.href=url2;//跳转到相关产品列表界面

  }//该判断首先验证当前页面为官网且登录账户时，跳转到产品列表界面

  else if(document.URL==url&&document.getElementsByClassName("user-name")[0].innerHTML==""){	
	window.location.href = url3; //跳转到登陆界面
  }//该判断实现首先验证当前页面为官网且未登录账户时，跳转到登陆界面

  else if(document.URL==url3){
  	login();
  }//该判断实现验证当前页面为登陆界面时，调用登陆函数

  else if(document.URL==url2){
    popup();
  }//该判断实现验证当前页面为产品列表界面时，调用设置参数下单等函数
  },2000);


  setTimeout(function() {
  var length = document.getElementsByClassName("product-info").length;
  for(i=0;i<length;i++){
    
    
    val=sessionStorage.getItem("lilv");
    if(parseFloat(document.getElementsByClassName("num-style")[2*i].innerHTML)>val&&sessionStorage.getItem("flag3")==1){
       var url = document.getElementsByClassName("product-status")[i].getElementsByTagName('a')[0].href;
       window.location.href=url;
       flag2=1;
       sessionStorage.setItem("flag2",flag2);
       break;
      
    }
        
  }
  flag2=sessionStorage.getItem("flag2");
  if(flag2==null){
    setTimeout(function(){
    window.location.reload();
  },sessionStorage.getItem("interval")*1000-3000);
    
  }
  },3000);
}


function refresh(){
  window.location.reload();//实现页面刷新
  flag3=0;
  sessionStorage.setItem("flag3",flag3);//“flag3”用于控制刷新时间
}

jump();
