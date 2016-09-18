//登陆状态
$(function(){
//   $.ajax({
//     type:"POST",
//     async:false,
//     url:SITEURL+"member/login/ajax_is_login",
//     dataType:'json',
//     success:function(data){
//         if(data.status){
//             $txt = '<a class="dl" style="padding:0" href="javascript:;">你好,</a>';
//             $txt+= '<a class="dl" href="{Common::get_main_host()}/member/">'+data.user.nickname+'</a>';
//             $txt+= '<a class="dl" href="{Common::get_main_host()}/member/login/loginout">退出</a>';
//             //$txt+= '<a class="dl" href="{$cmsurl}member">个人中心</a>';
//         }else{

            $txt = '<i class="iconfont icon-line"></i><a href="">登录</a>';
            $txt+= '<span class="top-login-1">|</span><i class="iconfont icon-user"></i><a href="">注册</a>';
        // }
        $("#loginstatus").html($txt);
//     }
//   })
})
