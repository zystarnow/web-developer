<template>
  <div>
    <h2>SuperSlide插件</h2>
    <h4>介绍</h4>
    <p>SuperSlide 致力于解决网站大部分特效展示问题，使网站代码规范整洁，方便维护更新。网站上常用的“焦点图/幻灯片”“Tab标签切换”“图片滚动”“无缝滚动”等只需要一个SuperSlide即可解决！还可以多个SuperSlide组合创造更多效果哦~</p>
    <p>想了解更多可前往：<a href="http://www.superslide2.com/" target="_block">SuperSlide官方演示与API</a></p>
    <h4>引用说明</h4>
    <p>下载后，在页面引入最新的js:</p>
    <div class="well">
      <pre><code>&lt;script src="../js/vendor/jquery.SuperSlide.2.1.1.js"&gt;&lt;script&gt;</code></pre>
    </div>
    <p>编写HTML:（以下是默认的HTMl结构，分别是 ".hd" 里面包含ul， ".bd" 里面包含ul）</p>
    <div class="well">
      <pre><code>&lt;div class="slideTxtBox"&gt;
    &lt;div class="hd"&gt;
       &lt;ul&gt;&lt;li&gt;教育&lt;/li&gt;&lt;li&gt;培训&lt;/li&gt;&lt;li&gt;出国&lt;/li&gt;&lt;/ul&gt;
    &lt;/div&gt;
    &lt;div class="bd"&gt;
        &lt;ul&gt;
            &lt;li&gt;&lt;a href="http://www.SuperSlide2.com" target="_blank"&gt;SuperSlide2.0正式发布！&lt;/a&gt;&lt;/li&gt;
            ...
        &lt;/ul&gt;
        &lt;ul&gt;
            &lt;li&gt;&lt;a href="http://www.SuperSlide2.com" target="_blank"&gt;名师教作文：３妙招巧写高分&lt;/a&gt;&lt;/li&gt;
            ...
        &lt;/ul&gt;
        &lt;ul&gt;
            &lt;li&gt;&lt;a href="http://www.SuperSlide2.com" target="_blank"&gt;澳大利亚八大名校招生说明会&lt;/a&gt;&lt;/li&gt;
            ...
        &lt;/ul&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>
    <p>编写CSS，为HTML赋予样色</p>
    <div class="well">
      <pre><code>.slideTxtBox{ width:450px; border:1px solid #ddd; text-align:left;  }
.slideTxtBox .hd{ height:30px; line-height:30px; background:#f4f4f4; padding:0 20px; border-bottom:1px solid #ddd;  position:relative; }
.slideTxtBox .hd ul{ float:left; position:absolute; left:20px; top:-1px; height:32px;   }
.slideTxtBox .hd ul li{ float:left; padding:0 15px; cursor:pointer;  }
.slideTxtBox .hd ul li.on{ height:30px;  background:#fff; border:1px solid #ddd; border-bottom:2px solid #fff; }
.slideTxtBox .bd ul{ padding:15px;  zoom:1;  }
.slideTxtBox .bd li{ height:24px; line-height:24px;   }
.slideTxtBox .bd li .date{ float:right; color:#999;  }
</code></pre>
    </div>
    <p>调用SuperSlide</p>
    <div class="well">
      <pre><code>&lt;script type="text/javascript"&gt;
    $(function () {
        $(".picScroll-left").slide({
            titCell:".hd ul",
            mainCell:".bd ul",
            autoPage:true,
            effect:"left",
            autoPlay:true,
            vis:3
        });
    })
&lt;/script&gt;</code></pre>
    </div>
  </div>
</template>
