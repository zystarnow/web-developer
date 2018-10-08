<template>
  <div>
    <h2>CSS规范</h2>
    <h4>基本规范</h4>
    <ul>
      <li>[建议] 选择器 与 { 之间必须包含空格。</li>
      <li>[建议] 属性名 与之后的 : 之间不允许包含空格， : 与 属性值 之间必须包含空格。</li>
      <li>[建议] 列表型属性值 书写在单行时，, 后必须跟一个空格。</li>
      <li>[建议] 对于超长的样式，在样式值的 空格 处或 , 后换行，建议按逻辑分组。</li>
      <li class="margin2em">示例：</li>
      <li class="well margin2em">
        <pre><code>/* 不同属性值按逻辑分组 */
background:
  transparent url(aVeryVeryVeryLongUrlIsPlacedHere)
  no-repeat 0 0;
/* 可重复多次的属性，每次重复一行 */
background-image:
  url(aVeryVeryVeryLongUrlIsPlacedHere)
  url(anotherVeryVeryVeryLongUrlIsPlacedHere);
/* 类似函数的属性值可以根据函数调用的缩进进行 */
background-image: -webkit-gradient(
  linear,
  left bottom,
  left top,
  color-stop(0.04, rgb(88,94,124)),
  color-stop(0.52, rgb(115,123,162))
);</code></pre>
      </li>
      <li>[建议] >、+、~ 选择器的两边各保留一个空格。</li>
      <li>[强制] 属性选择器中的值必须用双引号包围。</li>
      <li>[建议] 属性定义必须另起一行。</li>
      <li>[强制] 属性定义后必须以分号结尾。</li>
      <li>[强制] 如无必要，不得为 id、class 选择器添加类型选择器进行限定。</li>
      <li class="margin2em">解释：在性能和维护性上，都有一定的影响。</li>
      <li>[建议] 选择器的嵌套层级应不大于 3 级，位置靠后的限定条件应尽可能精确。</li>
      <li>[建议] 在可以使用缩写的情况下，尽量使用属性缩写。</li>
      <li>[建议] 同一 rule set 下的属性在书写时，应按功能进行分组，并以 Formatting Model（布局方式、位置） > Box Model（尺寸） > Typographic（文本相关） > Visual（视觉效果） 的顺序书写，以提高代码的可读性。</li>
      <li class="margin2em">解释：</li>
      <li class="well margin2em">Formatting Model 相关属性包括：position / top / right / bottom / left / float / display / overflow 等；<br>
Box Model 相关属性包括：border / margin / padding / width / height 等；<br>
Typographic 相关属性包括：font / line-height / text-align / word-wrap 等；<br>
Visual 相关属性包括：background / color / transition / list-style 等；<br>
另外，如果包含 content 属性，应放在最前面。</li>
      <li class="margin2em">示例：</li>
      <li class="well margin2em">
        <pre><code>.sidebar {
    /* formatting model: positioning schemes / offsets / z-indexes / display / ...  */
    position: absolute;
    top: 50px;
    left: 0;
    overflow-x: hidden;
    /* box model: sizes / margins / paddings / borders / ...  */
    width: 200px;
    padding: 5px;
    border: 1px solid #ddd;
    /* typographic: font / aligns / text styles / ... */
    font-size: 14px;
    line-height: 20px;
    /* visual: colors / shadows / gradients / ... */
    background: #f5f5f5;
    color: #333;
    -webkit-transition: color 1s;
       -moz-transition: color 1s;
            transition: color 1s;
}</code></pre>
      </li>
    </ul>
  </div>
</template>
