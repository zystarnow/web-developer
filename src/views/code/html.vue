<template>
  <div>
    <h2>HTML规范</h2>
    <h4>DOCTYPE</h4>
    <p>[强制] 使用 HTML5 的 doctype 来启用标准模式，建议使用大写的 DOCTYPE。</p>
    <p>示例：</p>
    <pre class="well">&lt;!DOCTYPE html&gt;</pre>
    <p>[建议] 启用 IE Edge 模式。</p><p>示例：</p>
    <pre class="well">&lt;meta http-equiv="X-UA-Compatible" content="IE=Edge"&gt;</pre>
    <p>[建议] 在 html 标签上设置正确的 lang 属性。</p>
    <p>解释：</p>
    <p>有助于提高页面的可访问性，如：让语音合成工具确定其所应该采用的发音，令翻译工具确定其翻译语言等。</p>
    <p>示例：</p>
    <pre class="well">&lt;html lang="zh-CN"&gt;</pre>
    <p>[强制] 移动端页面必须使用meta声明viewport来控制页面的缩放。</p>
    <p>示例：</p>
    <pre class="well">&lt;meta name="viewport" content="initial-scale=1, maximum-scale=1,minimum-scale=1,user-scalable=no"&gt;</pre>
    <h4>编码</h4>
    <p>[强制] 页面必须明确指定字符编码。指定字符编码的 meta 必须是 head 的第一个直接子元素。</p>
    <p>示例：</p>
    <pre class="well">&lt;html&gt;
    &lt;head&gt;
        &lt;meta charset="UTF-8"&gt;
        ......
    &lt;/head&gt;
&lt;/html&gt;</pre>
    <h4>CSS和JavaScript引入</h4>
    <p>[强制] 引入 CSS 时必须指明 rel="stylesheet"。</p>
    <p>示例：</p>
    <pre class="well">&lt;link rel="stylesheet" src="page.css"&gt;</pre>
    <p>[建议] 引入 CSS 和 JavaScript 时无须指明 type 属性。</p>
    <p>解释：text/css 和 text/javascript 是 type 的默认值。</p>
    <p>[建议] 展现定义放置于外部 CSS 中，行为定义放置于外部 JavaScript 中。</p>
    <p>解释：结构-样式-行为的代码分离，对于提高代码的可阅读性和维护性都有好处。JSP等部分页面需要直接使用后台传出的变量值可以在页面中直接内联script标签进行定义赋值，但是业务处理代码必须置于外部js文件中（注意定义赋值必须在使用的外部js前面）。</p>
    <p>[建议] 在 head 中引入页面需要的所有 CSS 资源。</p>
    <p>解释：在页面渲染的过程中，新的CSS可能导致元素的样式重新计算和绘制，页面闪烁。</p>
    <p>[建议] JavaScript 应当放在页面末尾，或采用异步加载。</p>
    <p>解释：将 script 放在页面中间将阻断页面的渲染。出于性能方面的考虑，如非必要，请遵守此条建议。</p>
    <p>示例：</p>
    <pre class="well">&lt;body&gt;
    &lt;!-- a lot of elements --&gt;
    &lt;script src="init-behavior.js"&gt; &lt;/script&gt;
 &lt;/body&gt;</pre>
    <p>[建议] 插件、工具、公用应抽离到对应的目录中，业务逻辑强关联的资源应该，外联资源目录应该按模块划分，尽可能保持与页面一致。</p>
    <h4>命名</h4>
    <p>[强制] class 必须单词全字母小写，单词间以 - 分隔。</p>
    <p>[强制] class 必须代表相应模块或部件的内容或功能，不得以样式信息进行命名。</p>
    <p>示例：</p>
    <pre class="well">&lt;!-- good --&gt;
&lt;div class="sidebar">&lt;/div&gt;
&lt;!-- bad --&gt;
&lt;div class="left"&gt;&lt;/div&gt;</pre>
    <p>[强制] 元素 id 必须保证页面唯一。</p>
    <p>解释：同一个页面中，不同的元素包含相同的 id，不符合 id 的属性含义。并且使用 document.getElementById 时可能导致难以追查的问题。</p>
    <p>[建议] id 建议单词全字母小写，单词间以 - 分隔。同项目必须保持风格一致。</p>
    <p>[建议] id、class 命名，在避免冲突并描述清楚的前提下尽可能短。</p>
    <p>示例：</p>
    <pre class="well">&lt;!-- good --&gt;
&lt;div id="nav">&lt;/div&gt;
&lt;!-- bad --&gt;
&lt;div id="navigation">&lt;/div&gt;
&lt;!-- good --&gt;
&lt;p class="comment">&lt;/p&gt;
&lt;!-- bad --&gt;
&lt;p class="com">&lt;/p&gt;
&lt;!-- good --&gt;
&lt;span class="author"&gt;&lt;/span&gt;
&lt;!-- bad --&gt;
&lt;span class="red"&gt;&lt;/span&gt;</pre>
    <p>[强制] 禁止为了 hook 脚本，创建无样式信息的 class。</p>
    <p>解释：不允许 class 只用于让 JavaScript 选择某些元素，class 应该具有明确的语义和样式。否则容易导致 css class 泛滥。</p>
    <p>使用 id、属性选择作为 hook 是更好的方式。</p>
    <p>[建议] 同一页面，应避免使用相同的 name 与 id。</p>
    <p>解释：IE 浏览器会混淆元素的 id 和 name 属性， document.getElementById 可能获得不期望的元素。所以在对元素的 id 与 name 属性的命名需要非常小心。</p>
    <p>一个比较好的实践是，为 id 和 name 使用不同的命名法。</p>
    <p>示例：</p>
    <pre class="well">&lt;input name="foo"&gt;
&lt;div id="foo">&lt;/div&gt;
&lt;script&gt;
  // IE6 将显示 INPUT
  alert(document.getElementById('foo').tagName);
&lt;/script&gt;</pre>
    <h4>标签</h4>
    <p>[强制] 标签名必须使用小写字母。</p>
    <p>示例：</p>
    <pre class="well">&lt;!-- good --&gt;
&lt;p>Hello StyleGuide!&lt;/p&gt;
&lt;!-- bad --&gt;
&lt;P>Hello StyleGuide!&gt;</pre>
    <p>[建议] 对于无需自闭合的标签，不允许自闭合。</p>
    <p>解释：常见无需自闭合标签有input、br、img、hr等。</p>
    <p>示例：</p>
    <pre class="well">&lt;!-- good --&gt;
&lt;input type="text" name="title"&gt;
&lt;!-- bad --&gt;
&lt;input type="text" name="title" /&gt;</pre>
    <p>[强制] 对 HTML5 中规定允许省略的闭合标签，不允许省略闭合标签。</p>
    <p>示例：</p>
    <pre class="well">&lt;!-- good --&gt;
&lt;ul&gt;
    &lt;li&gt;first&lt;/li&gt;
    &lt;li&gt;second&lt;/li&gt;
&lt;/ul&gt;
&lt;!-- bad --&gt;
&lt;ul&gt;
    &lt;li&gt;first
    &lt;li&gt;second
&lt;/ul&gt;</pre>
    <p>[强制] 标签使用必须符合标签嵌套规则。</p>
    <p>解释：比如 div 不得置于 p 中，tbody 必须置于 table 中。</p>
    <p>详细的标签嵌套规则参见HTML DTD中的 Elements 定义部分。</p>
    <p>[建议] HTML 标签的使用应该遵循标签的语义。</p>
    <p>解释：下面是常见标签语义</p>
    <div class="well">p - 段落<br>
      h1,h2,h3,h4,h5,h6 - 层级标题<br>
      strong,em - 强调<br>
      ins - 插入<br>
      del - 删除<br>
      abbr - 缩写<br>
      code - 代码标识<br>
      cite - 引述来源作品的标题<br>
      q - 引用<br>
      blockquote - 一段或长篇引用<br>
      ul - 无序列表<br>
      ol - 有序列表<br>
      dl,dt,dd - 定义列表</div>
    <p>示例：</p>
    <pre class="well">&lt;!-- good --&gt;
&lt;p>Esprima serves as an important &lt;strong>building block&lt;/strong&gt;for some JavaScript language tools.&lt;/p&gt;
&lt;!-- bad --&gt;
&lt;div>Esprima serves as an important &lt;span class="strong">building block&lt;/span&gt; for some JavaScript language tools.&lt;/div&gt;</pre>
    <h4>属性</h4>
    <p>[强制] 属性名必须使用小写字母。</p>
    <p>示例：</p>
    <pre class="well">&lt;!-- good --&gt;
&lt;table cellspacing="0"&gt;...&lt;/table&gt;
&lt;!-- bad --&gt;
&lt;table cellSpacing="0"&gt;...&lt;/table&gt;</pre>
    <p>[强制] 属性值必须用双引号包围。</p>
    <p>解释：不允许使用单引号，不允许不使用引号。</p>
    <p>示例：</p>
    <pre class="well">&lt;!-- good --&gt;
&lt;script src="esl.js"&gt;&lt;/script&gt;
&lt;!-- bad --&gt;
&lt;script src='esl.js'&gt;&lt;/script&gt;
&lt;script src=esl.js&gt;&lt;/script&gt;</pre>
    <p>[建议] 布尔类型的属性，建议不添加属性值。</p>
    <p>示例：</p>
    <pre class="well">&lt;input type="text" disabled&gt;
&lt;input type="checkbox" value="1" checked&gt;</pre>
    <p>[建议] 自定义属性建议以 xxx- 为前缀，推荐使用 data-。</p>
    <p>解释：使用前缀有助于区分自定义属性和标准定义的属性。</p>
    <p>示例：</p>
    <pre class="well">&lt;ol data-ui-type="Select">&lt;/ol&gt;</pre>
    <h4>图片</h4>
    <p>[强制] 禁止 img 的 src 取值为空。延迟加载的图片也要增加默认的 src。</p>
    <p>解释：src 取值为空，会导致部分浏览器重新加载一次当前页面，参考：<a href="https://developer.yahoo.com/performance/rules.html#emptysrc">https://developer.yahoo.com/performance/rules.html#emptysrc</a></p>
    <p>[建议] 避免为 img 添加不必要的 title 属性。</p>
    <p>解释：多余的 title 影响看图体验，并且增加了页面尺寸。</p>
    <p>[建议] 为重要图片添加 alt 属性。</p>
    <p>解释：可以提高图片加载失败时的用户体验。</p>
    <h4>checkbox/radio控件标题</h4>
    <p>[强制] 有文本标题的控件必须使用 label 标签将其与其标题相关联。</p>
    <p>解释：</p>
    <p>有两种方式：</p>
    <p>将控件置于 label 内。</p>
    <p>label 的 for 属性指向控件的 id。</p>
    <p>推荐使用第一种，减少不必要的 id。如果 DOM 结构不允许直接嵌套，则应使用第二种。</p>
    <p>示例：</p>
    <pre class="well">&lt;label&gt;&lt;input type="checkbox" name="confirm" value="on"&gt;我已确认上述条款&lt;/label&gt;
&lt;label for="username">用户名：&lt;/label&gt;&lt;input type="textbox" name="username" id="username"&gt;</pre>
    <h4>模板中的 HTML</h4>
    <p>[建议] 模板代码的缩进优先保证 HTML 代码的缩进规则。</p>
    <p>示例：</p>
    <pre class="well">&lt;!-- good --&gt;
{if $display == true}
&lt;div&gt;
   &lt;ul&gt;
    {foreach $item_list as $item}
        &lt;li>{$item.name}&lt;i&gt;
    {/foreach}
    &lt;/ul&gt;
&lt;/div&gt;
{/if}
&lt;!-- bad --&gt;
{if $display == true}
    &lt;&lt;div&gt;
        &lt;ul&gt;
    {foreach $item_list as $item}
        &lt;li&gt;{$item.name}&lt;li&gt;
    {/foreach}
        &lt;/ul&gt;
    &lt;/div&gt;
{/if}</pre>
    <p>[建议] 模板代码应以保证 HTML 单个标签语法的正确性为基本原则。</p>
    <p>示例：</p>
    <pre class="well">&lt;!-- good --&gt;
&lt;li class="{if $item.type_id == $current_type}focus{/if}"&gt;{ $item.type_name }&lt;/li&gt;
&lt;!-- bad --&gt;
&lt;li {if $item.type_id == $current_type} class="focus"{/if}&gt;{ $item.type_name }&lt;/li&gt;</pre>
    <p>[建议] 在循环处理模板数据构造表格时，若要求每行输出固定的个数，建议先将数据分组，之后再循环输出。</p>
    <p>示例：</p>
    <pre class="well">&lt;!-- good --&gt;
&lt;table&gt;
    {foreach $item_list as $item_group}
    &lt;tr&gt;
        {foreach $item_group as $item}
        &lt;td&gt;{ $item.name }&lt;/td&gt;
        {/foreach}
    &lt;tr&gt;
    {/foreach}
&lt;/table&gt;
&lt;!-- bad --&gt;
&lt;table&gt;
&lt;tr&gt;
    {foreach $item_list as $item}
    &lt;td&gt;{ $item.name }&lt;/td&gt;
        {if $item@iteration is div by 5}
    &lt;/tr&gt;
    &lt;tr&gt;
        {/if}
    {/foreach}
&lt;/tr&gt;
&lt;/table&gt;</pre>
  </div>
</template>
