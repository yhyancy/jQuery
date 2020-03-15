$(function () {
    //1. 全选  全不选模块
    //就是把全选按钮(checkall)的状态赋值给 三个小的按钮(j-checkbox)就可以了
    //事件使用change
    $(".checkall").change(function () {
        console.log($(this).prop("checked"))  //true false
        $(".j-checkbox, .checkall").prop("checked", $(this).prop("checked")) // 设置三个小按钮的值
        //如果全选添加背景颜色
        if ($(this).prop("checked")) { $(".cart-item").addClass("check-cart-item") }
        else {
            $(".cart-item").removeClass("check-cart-item")
        }

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
        //如果点击复选框，添加背景颜色
        if ($(this).prop("checked")) { $(this).parents(".cart-item").addClass("check-cart-item") }
        else {
            $(this).parents(".cart-item").removeClass("check-cart-item")
        }
    })

    //3. 增加商品数量模块，首先声明一个变量，当我们点击+号(increment),就让这个值++, 然后赋值给文本框
    $(".increment").click(function () {
        var n = $(this).siblings(".itxt").val()
        console.log(n)
        n++
        $(this).siblings(".itxt").val(n)
        //计算小计模块，根据文本框的值乘以当前商品的价格，就是商品的小计
        // var p = $(this).parent().parent().siblings(".p-price").html()
        // console.log($(this).parents('.p-num'))
        var p = $(this).parents('.p-num').siblings(".p-price").html()
        console.log(p)
        console.log(p.substr(1))
        var sum = (p.substr(1) * n).toFixed(2) //sustr 从1开始截取到最后 toFixed(2) 保留两位小数
        // $(this).parent().parent().siblings(".p-sum").html("￥" + sum)
        $(this).parents('.p-num').siblings(".p-sum").html("￥" + sum)
        getsum()
    })
    // 减少商品数量
    $(".decrement").click(function () {
        var n = $(this).siblings(".itxt").val()
        // if (n > 1) {
        //     n--
        //     $(this).siblings(".itxt").val(n)
        // }
        if (n == 1) {
            return false
        }
        n--
        $(this).siblings(".itxt").val(n)
        //计算小计模块，根据文本框的值乘以当前商品的价格，就是商品的小计
        // var p = $(this).parent().parent().siblings(".p-price").html()
        // console.log($(this).parents('.p-num'))
        var p = $(this).parents('.p-num').siblings(".p-price").html()
        console.log(p)
        console.log(p.substr(1))
        var sum = (p.substr(1) * n).toFixed(2) //sustr 从1开始截取到最后 toFixed(2) 保留两位小数
        // $(this).parent().parent().siblings(".p-sum").html("￥" + sum)
        $(this).parents('.p-num').siblings(".p-sum").html("￥" + sum)
        getsum()

    })
    // 4. 用户修改文本框的值 计算 小计
    $(".itxt").change(function () {
        //获取文本框的值
        var n = $(this).val()
        console.log($(this).val)
        //获取单价
        var p = $(this).parents('.p-num').siblings(".p-price").html().substr(1)
        console.log(p)
        var sum = (p * n).toFixed(2)
        $(this).parents('.p-num').siblings(".p-sum").html("￥" + sum)

        getsum();

    })

    //5. 计算总额
    function getsum() {
        var count = 0 //计算总件数
        var money = 0 // 计算总价钱
        $(".itxt").each(function (index, domEle) {
            console.log('i', index)
            console.log('d', domEle)
            count += parseInt($(domEle).val())

        })
        $('.amount-sum em').text(count)

        $('.p-sum').each(function (index, domEle) {
            money += parseFloat($(domEle).text().substr(1))

        })
        $('.price-sum em').text(money)
    }

    //6. 删除商品
    $(".p-action a").click(function () {
        $(this).parents('.cart-item').remove()
        getsum()
    })
    //删除选中商品
    $(".remove-batch").click(function () {
        $(".j-checkbox:checked").parents(".cart-item").remove()
        getsum()

    })

    //清空购物车
    $(".clear-all").click(function () {
        $(".j-checkbox").parents(".cart-item").remove()
        getsum()
    })



})