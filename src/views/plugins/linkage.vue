<template>
  <div>
    <h2>select三级联动</h2>
    <h4>省市区三级联动插件distpicker</h4>
    <p>想了解更多可前往<a href="https://github.com/fengyuanchen/distpicker" target="_block">官方github</a></p>
    <p>demo演示：<a href="https://fengyuanchen.github.io/distpicker/" target="_block">https://fengyuanchen.github.io/distpicker/</a></p>
    <p><strong>引用说明</strong></p>
    <p>下载后，在页面引入最新的js:</p>
    <div class="well">
      <pre><code>&lt;script src=&quot;/path/to/jquery.js&quot;&gt;&lt;/script&gt;&lt;!-- jQuery必须引用 --&gt;
&lt;script src=&quot;/path/to/distpicker.common.js&quot;&gt;&lt;/script&gt;&lt;!-- 省市json等公共文件 --&gt;
&lt;script src=&quot;/path/to/distpicker.js&quot;&gt;&lt;/script&gt;</code></pre>
    </div>
    <div class="well">
      <pre><code>&lt;div data-toggle=&quot;distpicker&quot;&gt;
    &lt;select&gt;&lt;/select&gt;
    &lt;select&gt;&lt;/select&gt;
    &lt;select&gt;&lt;/select&gt;
&lt;/div&gt;</code></pre>
    </div>
    <p>或者：</p>
    <div class="well">
      <pre><code>&lt;div id=&quot;distpicker1&quot;&gt;
    &lt;select&gt;&lt;/select&gt;
    &lt;select&gt;&lt;/select&gt;
    &lt;select&gt;&lt;/select&gt;
&lt;/div&gt;
&lt;!-- JavaScript: --&gt;
$(&quot;#distpicker1&quot;).distpicker();</code></pre>
    </div>
    <h4>jQuery实现普通数据三级联动</h4>
    <p>自定义数据可参看如下例子写：</p>
    <div class="well">
      <pre><code>&lt;script type="text/javascript"&gt;
    $(function () {
            function Init(node) {
                return node.html("&lt;option&gt;---请选择---&lt;/option&gt;");
            }
            // 多维数组做数据来源
            var db = {
                腾讯: {
                    LOL: "德玛,EZ瑞尔,剑圣",
                    BNS: "气功师,力士,刺客,气宗师",
                    DNF:"A,B,C,D"
                },
                阿里巴巴: {
                    APPLAY: "AL,EZ瑞尔,剑圣",
                    HUABEI: "AL,力士,刺客,气宗师",
                    JIEBEI: "AL,B,C,D"
                },
                百度: {
                    ggs: "BD,EZ瑞尔,剑圣",
                    BD: "BD,力士,刺客,气宗师",
                    BDBD: "BD,B,C,D",
                }
            };
            // 初始化select节点
            $.each(db, function (changShang) {
                $("#selF").append("&lt;option&gt;" + changShang + "&lt;/option&gt;");
            })
            //一级变动
            $("#selF").change(function () {
                //清空二三级
                Init($("#selB"));
                Init($("#selC"));
                $.each(db,function (cs,pps) {
                    if ($("#selF option:selected").text() == cs) {
                        $.each(pps, function (pp, xhs) {
                            $("#selB").append("&lt;option&gt;" + pp + "&lt;/option&gt;");
                        });
                        $("#selB").change(function () {
                            Init($("#selC"));
                            $.each(pps, function (pp,xhs) {
                                if ($("#selB option:selected").text()==pp) {
                                    $.each(xhs.split(','), function () {
                                        $("#selC").append("&lt;option&gt;" + this + "&lt;/option&gt;");
                                    })
                                }
                            })
                        })
                    }
                })
            })
        })
&lt;/script&gt;</code></pre>
    </div>
  </div>
</template>
