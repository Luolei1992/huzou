$(function () {
    // 左侧菜单下拉显示
    // $(".mainLeft h3").click(function(){
    //     $(this).next().slideToggle(200);
    // });
    // 右侧菜单左滑
    $(".rightSide").click(function () {
        if($(this).hasClass("slideTo")){
            $(this).removeClass("slideTo");
            $(".mainLeftWrapCopy").animate({"right":"0px"},200);
        }else{
            $(this).addClass("slideTo");
            $(".mainLeftWrapCopy").animate({"right":"-180px"},200);
        };
    });
    //新增
    //弹出一个页面层
    $('#addMsg').on('click', function(){
        var idx = layer.open({
            type: 1,
            title:["新增单位","color:#fff;background:#007DC9;"],
            skin:"demo-class",
            area: ['478px', '280px'],
            shadeClose: true, //点击遮罩关闭
            content: $("#addMsgDetail")
        });
        layer.style(idx, {
            '-webkit-border-radius': '8px',
            '-moz-border-radius': '8px',
            'border-radius': '8px',
            'overflow':"hidden"
        });
    });
    //点击取消关闭弹出层
    $(".quitNewMsg").click(function () {
        layer.closeAll();
    });
    //全选和反选
    $("#checkAll").click(function(){
        if(this.checked){
            $("#tableSec :checkbox").prop("checked", true);
        }else{
            $("#tableSec :checkbox").prop("checked", false);
        }
    });
    //判断全选复选框
    $("#tableSec :checkbox").click(function(){
        allchk();
    });
    //点击效果
    $(document).on("click",".mainLeft .mainLeftCenter h3",function () { 
        alert(1)
        $(this).css("background","rgb(45,140,206)");
     })
    $(".goLogin").click(function () { 
        $(this).css("background","url(images/submitB.png)");
     })
});
function allchk(){
    var chknum = $("#tableSec :checkbox").size();//选项总个数
    var chk = 0;
    $("#tableSec :checkbox").each(function () {
        if($(this).prop("checked")==true){
            chk++;
        }
    });
    if(chknum==chk){//全选
        $("#checkAll").prop("checked",true);
    }else{//不全选
        $("#checkAll").prop("checked",false);
    }
}

(function() {
    // 某些浏览器不支持nth-child选择器
    $("#tableSec tr").each(function (idx) {
        if(idx%2 !== 0)
            $(this).css("background","#EFEFEF")
    })
}());