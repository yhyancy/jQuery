$(function () {
    load()

    // 1.按下回车，把数据添加到本地存储里面
    //存储数据格式 var todolist = [{ title: '好好学习', done: false }]
    $("#title").on('keydown', function (event) {
        if (event.keyCode === 13) {
           if($(this).val()===''){
               alert('不能为空')
           }
           else{

               // 1.1先读取本地存储原来的数据
               var local = getData()
               console.log(local)

               //1.2 把local 数据进行更新数据， 把最新的数据追加给local 数组
               local.push({ title: $(this).val(), done: false })
               //1.3 把local 数据 存到本地存储里
               saveData(local)
               load()
               $(this).val("")

           }


        }

    })

    //1.1读取本地存储的数据
    function getData() {
        var data = localStorage.getItem("todolist")
        if (data !== null) {
            //本地存储里面的数据是字符串格式，但是我们需要对象格式的
            return JSON.parse(data)
        }
        else {
            return []
        }
    }

    //1.3 保存本地存储
    function saveData(data) {
        localStorage.setItem("todolist", JSON.stringify(data))
    }
    //渲染 加载数据到页面
    function load(){
         //读取本地数据
        var data= getData()
        console.log(data)
        //遍历之前先清空ol里面的元素
        $("ol,ul").empty()
        // 遍历数据
        var todoCount=0
        var doneCount=0
        $.each(data, function (i, n) {

          if(n.done){
              $("ul").prepend
                  ("<li><input type='checkbox' checked='checked'> <p>" + n.title + "</p><a href='javascript:;'id=" + i + "></a></li>")
              doneCount++
          }
          else {
              $("ol").prepend
                  ("<li><input type='checkbox'> <p>" + n.title + "</p><a href='javascript:;'id=" + i + "></a></li>")
              todoCount++
          }
       })
       $("#todocount").text(todoCount)
       $("#donecount").text(doneCount)
    }
    //3.删除操作
$("ol,ul").on('click','a', function(){
    // alert('11')
    //获取本地存储
    var data= getData()
    console.log(data)
    //修改数据，自定义索引号
    var index = $(this).attr("id") //attr获取自定义属性值id 再line 58自定义属性
    console.log(index)
    // 删除数据
    data.splice(index,1)
    //保存到本地存储
     saveData(data)
     //渲染页面
     load()


})
// 4. 正在进行和已完成选项操作

$("ol, ul").on('click', 'input', function(){
    //获取本地数据
var data = getData()
    //修改数据
   var index= $(this).siblings("a").attr("id")

   data[index].done =$(this).prop("checked")
   console.log(data)

    //保存到本地存储
    saveData(data)
    //重新渲染
    load()

} )




})