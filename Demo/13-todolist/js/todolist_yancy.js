$(function () {

    // 1.按下回车，把数据添加到本地存储里面
    //存储数据格式 var todolist = [{ title: '好好学习', done: false }]
    $("#title").on('keydown', function (event) {
        if (event.keyCode === 13) {
            // 1.1先读取本地存储原来的数据
            var local = getData()
            console.log(local)
            //1.2 把local 数据进行更新数据， 把最新的数据追加给local 数组
            local.push({ title: $(this).val(), done: false })
            //1.3 把local 数据 存到本地存储里
            saveData(local)

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
})