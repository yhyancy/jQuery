$(function () {
    //1. 全选  全不选模块
    //就是把全选按钮(checkall)的状态赋值给 三个小的按钮(j-checkbox)就可以了
    //事件使用change
    $(".checkall").change(function () {
        console.log($(this).prop("checked"))  //true false
        $(".j-checkbox .checkall").prop("checked", $(this).prop("checked")) // 设置三个小按钮的值
    })
    //2. 如果小复选框被选中的个数等于3 就应该把全选按钮选上， 否则全选按钮不选
    $(".j-checkbox").change(function () {
        console.log($(".j-checkbox:checked").length)
        if ($(".j-checkbox:checked").length === $(".j-checkbox").length) {
            $(".checkall").prop("checked", true)
        }
        else {
            $(".checkall").prop("checked", false)
        }
    })

})