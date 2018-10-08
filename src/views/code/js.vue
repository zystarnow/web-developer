<template>
  <div>
    <h2>JS规范</h2>
    <h4>命名</h4>
    <p>[强制] 变量 使用 Camel命名法。</p>
    <p>示例：</p>
    <pre class="well">var loadingModules = {};</pre>
    <p>[强制] 常量 使用 全部字母大写，单词间下划线分隔 的命名方式。</p>
    <p>示例：</p>
    <pre class="well">var HTML_ENTITY = {};</pre>
    <p>[强制] 函数 使用 Camel命名法。</p>
    <p>示例：</p>
    <pre class="well">function stringFormat(source) {
}</pre>
    <p>[强制] 函数的 参数 使用 Camel命名法。</p>
    <p>示例：</p>
    <pre class="well">function hear(theBells) {
}</pre>
    <p>[强制] 类 使用 Pascal命名法。</p>
    <p>示例：</p>
    <pre class="well">function TextNode(options) {
}</pre>
    <p>[强制] 类的 方法 / 属性 使用 Camel命名法。</p>
    <p>示例：</p>
    <pre class="well">function TextNode(value, engine) {
    this.value = value;
    this.engine = engine;
}
TextNode.prototype.clone = function () {
    return this;
};</pre>
    <p>[强制] 命名空间 使用 Camel命名法。</p>
    <p>示例：</p>
    <pre class="well">equipments.heavyWeapons = {};</pre>
    <p>[强制] 由多个单词组成的缩写词，在命名中，根据当前命名法和出现的位置，所有字母的大小写与首字母的大小写保持一致。</p>
    <p>示例：</p>
    <pre class="well">function XMLParser() {
}
function insertHTML(element, html) {
}
var httpRequest = new HTTPRequest();</pre>
    <p>[强制] 类名 使用 名词。</p>
    <p>示例：</p>
    <pre class="well">function Engine(options) {
}</pre>
    <p>[建议] 函数名 使用 动宾短语。</p>
    <p>示例：</p>
    <pre class="well">function getStyle(element) {
}</pre>
    <p>[建议] boolean 类型的变量使用 is 或 has 开头。</p>
    <p>示例：</p>
    <pre class="well">var isReady = false;
var hasMoreCommands = false;</pre>
    <p>[建议] Promise对象 用 动宾短语的进行时 表达。</p>
    <p>示例：</p>
    <pre class="well">var loadingData = ajax.get('url');
loadingData.then(callback);</pre>
    <h4>注释</h4>
    <h5 class="text-blue">单行注释</h5>
    <p>[强制] 必须独占一行。缩进与下一行被注释说明的代码一致。</p>
    <h5 class="text-blue">函数/方法注释</h5>
    <p>[强制] 函数/方法注释必须包含函数说明，有参数和返回值时必须使用注释标识。</p>
    <p>[强制] 参数和返回值注释必须包含类型信息和说明。</p>
    <p>[建议] 当函数是内部函数，外部不可访问时，可以使用 @inner 标识。</p>
    <p>示例：</p>
    <pre class="well">/**
 * 函数描述
 *
 * @param {string} p1 参数1的说明
 * @param {string} p2 参数2的说明，比较长
 *     那就换行了.
 * @param {number=} p3 参数3的说明（可选）
 * @return {Object} 返回值描述
 */
function foo(p1, p2, p3) {
    var p3 = p3 || 10;
    return {
        p1: p1,
        p2: p2,
        p3: p3
    };
}</pre>
    <p>[强制] 对 Object 中各项的描述， 必须使用 @param 标识。</p>
    <p>示例：</p>
    <pre class="well">/**
 * 函数描述
 *
 * @param {Object} option 参数描述
 * @param {string} option.url option项描述
 * @param {string=} option.method option项描述，可选参数
 */
function foo(option) {
    // TODO
}</pre>
    <p>[建议] 重写父类方法时， 应当添加 @override 标识。如果重写的形参个数、类型、顺序和返回值类型均未发生变化，可省略 @param、@return，仅用 @override 标识，否则仍应作完整注释。</p>
    <p>解释：简而言之，当子类重写的方法能直接套用父类的方法注释时可省略对参数与返回值的注释。</p>
    <h5 class="text-blue">事件注释</h5>
    <p>[强制] 必须使用 @event 标识事件，事件参数的标识与方法描述的参数标识相同。</p>
    <p>示例：</p>
    <pre class="well">/**
 * 值变更时触发
 *
 * @event
 * @param {Object} e e描述
 * @param {string} e.before before描述
 * @param {string} e.after after描述
 */
onchange: function (e) {
}</pre>
    <p>[强制] 在会广播事件的函数前使用 @fires 标识广播的事件，在广播事件代码前使用 @event 标识事件。<p>
    <p>[建议] 对于事件对象的注释，使用 @param 标识，生成文档时可读性更好。</p>
    <p>示例：</p>
    <pre class="well">/**
 * 点击处理
 *
 * @fires Select#change
 * @private
 */
Select.prototype.clickHandler = function () {
    /**
     * 值变更时触发
     *
     * @event Select#change
     * @param {Object} e e描述
     * @param {string} e.before before描述
     * @param {string} e.after after描述
     */
    this.fire(
        'change',
        {
            before: 'foo',
            after: 'bar'
        }
    );
};</pre>
    <h5 class="text-blue">常量注释</h5>
    <p>[建议] 常量必须使用 @const 标记，并包含说明和类型信息。</p>
    <p>示例：</p>
    <pre class="well">/**
 * 常量说明
 *
 * @const
 * @type {string}
 */
var REQUEST_URL = 'myurl.do';</pre>
    <h4>变量</h4>
    <p>[强制] 变量必须 即用即声明，不得在函数或其它形式的代码块起始位置统一声明所有变量。</p>
    <p>解释：变量声明与使用的距离越远，出现的跨度越大，代码的阅读与维护成本越高。虽然JavaScript的变量是函数作用域，还是应该根据编程中的意图，缩小变量出现的距离空间。</p>
    <p>[强制] 变量在使用前必须通过 var 定义。</p>
    <p>解释：不通过 var 定义变量将导致变量污染全局环境，在支持ES6的项目中使用let定义一般变量，使用const定义常量。</p>
    <p>[强制] 除函数声明外，句末和代码块结束必须使用分号。</p>
    <h4>循环</h4>
    <p>[建议] 不要在循环体中包含函数表达式，事先将函数提取到循环体外。</p>
    <p>解释：循环体中的函数表达式，运行过程中会生成循环次数个函数对象。</p>
    <p>示例：</p>
    <pre class="well">// good
function clicker() {
    // ......
}
for (var i = 0, len = elements.length; i &lt; len ; i++ ) {
    var element = elements[i];
    addListener(element, 'click', clicker);
}
// bad
for (var i = 0, len = elements.length; i &lt; len ; i++ ) {
    var element = elements[i];
    addListener(element, 'click', function () {});
}</pre>
    <p>[建议] 对循环内多次使用的不变值，在循环外用变量缓存。</p>
    <p>示例：</p>
    <pre class="well">// good
var width = wrap.offsetWidth + 'px';
for (var i = 0, len = elements.length; i &lt; len; i++) {
    var element = elements[i];
    element.style.width = width;
    // ......
}
// bad
for (var i = 0, len = elements.length; i &lt; len; i++) {
    var element = elements[i];
    element.style.width = wrap.offsetWidth + 'px';
    // ......
}</pre>
    <p>[建议] 对有序集合进行遍历时，缓存 length。</p>
    <p>解释：虽然现代浏览器都对数组长度进行了缓存，但对于一些宿主对象和老旧浏览器的数组对象，在每次 length 访问时会动态计算元素个数，此时缓存 length 能有效提高程序性能。</p>
    <p>示例：</p>
    <pre class="well">for (var i = 0, len = elements.length; i &lt; len; i++) {
    var element = elements[i];
    // ......
}</pre>
    <p>[建议] 对有序集合进行顺序无关的遍历时，使用逆序遍历。</p>
    <p>解释：逆序遍历可以节省变量，代码比较优化。</p>
    <p>示例：</p>
    <pre class="well">var len = elements.length;
while (len--) {
    var element = elements[len];
    // ......
}</pre>
    <p>[建议] 不建议使用for in循环，在必须使用for in循环对对象循环时必须使用hasOwnProperty判断来剔除非对象本身的属性。</p>
    <p>示例：</p>
    <pre class="well">for (var key in obj ) {
    if (obj. hasOwnProperty(key)) {
        var item = obj[key];
        // ......
    }
} </pre>
    <p>[建议] 循环中的处理语句不超过40行。</p>
    <h4>类型</h4>
    <h5 class="text-blue">类型检测</h5>
    <p>[建议] 类型检测优先使用 typeof。对象类型检测使用 instanceof。 null 或 undefined 的检测使用 == null。</p>
    <p>示例：</p>
    <pre class="well">// string
typeof variable === 'string'
// number
typeof variable === 'number'
// boolean
typeof variable === 'boolean'
// Function
typeof variable === 'function'
// Object
typeof variable === 'object'
// RegExp
variable instanceof RegExp
// Array
variable instanceof Array
// null
variable === null
// null or undefined
variable == null
// undefined
typeof variable === 'undefined'</pre>
    <h5 class="text-blue">类型转换</h5>
    <p>[强制] 使用 parseInt 时，必须指定进制。</p>
    <p>[建议] 转换成 string 时，使用 + ''。</p>
    <p>[建议] 转换成 number 时，通常使用 +。</p>
    <p>[建议] 转换成 boolean 时，使用 !!。</p>
    <p>[建议] number 去除小数点，使用 Math.floor / Math.round / Math.ceil，不使用 parseInt。</p>
    <h4>字符串</h4>
    <p>[建议] 字符串开头和结束使用单引号 '。</p>
    <p>解释：</p>
    <p>输入单引号不需要按住 shift，方便输入。</p>
    <p>实际使用中，字符串经常用来拼接 HTML。为方便 HTML 中包含双引号而不需要转义写法。</p>
    <p>示例：</p>
    <pre class="well">var str = '我是一个字符串';
var html = '&lt;div class="cls"&gt;拼接HTML可以省去双引号转义&lt;/div&gt;';</pre>
    <p>[建议] 使用 数组 或 + 拼接字符串。</p>
    <p>解释：</p>
    <p>使用 + 拼接字符串，如果拼接的全部是 StringLiteral，压缩工具可以对其进行自动合并的优化。所以，静态字符串建议使用 + 拼接。</p>
    <p>在现代浏览器下，使用 + 拼接字符串，性能较数组的方式要高。</p>
    <p>如需要兼顾老旧浏览器，应尽量使用数组拼接字符串。</p>
    <h4>对象</h4>
    <p>[强制] 使用对象字面量 {} 创建新 Object。</p>
    <p>示例：</p>
    <pre class="well">// good
var obj = {};
// bad
var obj = new Object();</pre>
    <p>[强制] 对象创建时，如果一个对象的所有 属性 均可以不添加引号，则所有 属性 不得添加引号。</p>
    <p>[强制] 对象创建时，如果任何一个 属性 需要添加引号，则所有 属性 必须添加 '。</p>
    <p>解释：如果属性不符合 Identifier 和 NumberLiteral 的形式，就需要以 StringLiteral 的形式提供。</p>
    <p>示例：</p>
    <pre class="well">// good
var info = {
    'name': 'someone',
    'age': 28,
    'more-info': '...'
};
// bad
var info = {
    name: 'someone',
    age: 28,
    'more-info': '...'
};</pre>
    <p>[强制] 不允许修改和扩展任何原生对象和宿主对象的原型。</p>
    <p>示例：</p>
    <pre class="well">// 以下行为绝对禁止
String.prototype.trim = function () {
};</pre>
    <p>[建议] 属性访问时，尽量使用 .点号访问。</p>
    <p>解释：</p>
    <p>属性名符合 Identifier 的要求，就可以通过 . 来访问，否则就只能通过 [expr] 方式访问。</p>
    <p>通常在 JavaScript 中声明的对象，属性命名是使用 Camel 命名法，用 . 来访问更清晰简洁。部分特殊的属性(比如来自后端的JSON)，可能采用不寻常的命名方式，可以通过 [expr] 方式访问。</p>
    <h4>数组</h4>
    <p>[强制] 使用数组字面量 [] 创建新数组，除非想要创建的是指定长度的数组。</p>
    <p>示例：</p>
    <pre class="well">// good
var arr = [];
// bad
var arr = new Array();</pre>
    <p>[建议] 清空数组使用 .length = 0。</p>
    <h4>函数</h4>
    <h5 class="text-blue">函数长度和嵌套</h5>
    <p>[建议] 一个函数的长度控制在 50 行以内。</p>
    <p>解释：</p>
    <p>将过多的逻辑单元混在一个大函数中，易导致难以维护。一个清晰易懂的函数应该完成单一的逻辑单元。复杂的操作应进一步抽取，通过函数的调用来体现流程。</p>
    <p>特定算法等不可分割的逻辑允许例外。</p>
    <p>[强制] 代码块嵌套的深度禁止超过 5 层。</p>
    <p>[强制] 回调函数嵌套禁止超过 3 层，多了请用 async await 替代。</p>
    <h5 class="text-blue">参数设计</h5>
    <p>[建议] 一个函数的参数控制在 7 个以内。</p>
    <p>解释：除去不定长参数以外，函数具备不同逻辑意义的参数建议控制在 7 个以内，过多参数会导致维护难度增大。某些情况下，如使用 AMD Loader 的 require 加载多个模块时，其 callback 可能会存在较多参数，因此对函数参数的个数不做强制限制。</p>
    <p>[建议] 通过 options 参数传递非数据输入型参数。</p>
    <p>解释：有些函数的参数并不是作为算法的输入，而是对算法的某些分支条件判断之用，此类参数建议通过一个 options 参数传递。</p>
    <p>如下函数：</p>
    <pre class="well">/**
 * 移除某个元素
 *
 * @param {Node} element 需要移除的元素
 * @param {boolean} removeEventListeners 是否同时将所有注册在元素上的事件移除
 */
function removeElement(element, removeEventListeners) {
    element.parent.removeChild(element);
    if (removeEventListeners) {
        element.clearEventListeners();
    }
}</pre>
    <p>可以转换为下面的签名：</p>
    <pre class="well">/**
 * 移除某个元素
 *
 * @param {Node} element 需要移除的元素
 * @param {Object} options 相关的逻辑配置
 * @param {boolean} options.removeEventListeners 是否同时将所有注册在元素上的事件移除
 */
function removeElement(element, options) {
    element.parent.removeChild(element);
    if (options.removeEventListeners) {
        element.clearEventListeners();
    }
}</pre>
    <p>这种模式有几个显著的优势：</p>
    <p>boolean 型的配置项具备名称，从调用的代码上更易理解其表达的逻辑意义。</p>
    <p>当配置项有增长时，无需无休止地增加参数个数，不会出现 removeElement(element, true, false, false, 3) 这样难以理解的调用代码。</p>
    <p>当部分配置参数可选时，多个参数的形式非常难处理重载逻辑，而使用一个 options 对象只需判断属性是否存在，实现得以简化。</p>
    <h5 class="text-blue">空函数</h5>
    <p>[建议] 空函数不使用 new Function() 的形式。</p>
    <p>示例：</p>
    <pre class="well">var emptyFunction = function () {};</pre>
    <h4>动态特性</h4>
    <p>[强制] 避免使用直接 eval 函数。</p>
    <p>解释：</p>
    <p>直接 eval，指的是以函数方式调用 eval 的调用方法。直接 eval 调用执行代码的作用域为本地作用域，应当避免。</p>
    <p>如果有特殊情况需要使用直接 eval，需在代码中用详细的注释说明为何必须使用直接 eval，不能使用其它动态执行代码的方式，同时需要其他资深工程师进行 Code Review。</p>
    <p>[建议] 尽量避免使用 eval 函数。</p>
    <p>[建议] 使用 new Function 执行动态代码。</p>
    <p>解释：通过 new Function 生成的函数作用域是全局使用域，不会影响当当前的本地作用域。如果有动态代码执行的需求，建议使用 new Function。</p>
    <p>示例：</p>
    <pre class="well">var handler = new Function('x', 'y', 'return x + y;');
var result = handler($('#x').val(), $('#y').val());</pre>
    <p>[建议] 减少 delete 的使用。</p>
    <p>解释：如果没有特别的需求，减少或避免使用delete。delete的使用会破坏部分 JavaScript 引擎的性能优化。</p>
    <p>[建议] 处理 delete 可能产生的异常。</p>
    <p>解释：</p>
    <p>对于有被遍历需求，且值 null 被认为具有业务逻辑意义的值的对象，移除某个属性必须使用 delete 操作。</p>
    <p>在严格模式或IE下使用 delete 时，不能被删除的属性会抛出异常，因此在不确定属性是否可以删除的情况下，建议添加 try-catch 块。</p>
    <h4>DOM</h4>
    <p>[建议] 尽量减少 DOM 操作。</p>
    <p>解释：</p>
    <p>DOM 操作也是非常耗时的一种操作，减少 DOM 操作有助于提高性能。举一个简单的例子，构建一个列表。我们可以用两种方式：</p>
    <p>1.在循环体中 createElement 并 append 到父元素中。</p>
    <p>2.在循环体中拼接 HTML 字符串，循环结束后写父元素的 innerHTML。</p>
    <p>第一种方法看起来比较标准，但是每次循环都会对 DOM 进行操作，性能极低。在这里推荐使用第二种方法。</p>
    <p>[建议] 建议使用事件委托或者事件监听来绑定事件，优先使用事件委托，禁止在html中直接使用on绑定事件。</p>
    <p>解释：</p>
    <p>在html中直接绑定事件容易导致互相覆盖，并且需要执行的方法名称必须先在全局定义。</p>
    <p>使用事件委托可以减少事件监听，提高处理速度，当动态生成DOM元素时，不需要重新监听。</p>
    <p>示例：</p>
    <pre class="well">// 事件监听
target.addEventListener ('click',fn);
// 事件委托
document.addEventListener("click",function(event){
  var target = event.target;
  if(target == item1){
    // do something
  }
}</pre>
  </div>
</template>
