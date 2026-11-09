# 潘子逸的个人学术主页

访问地址：[pytenter.github.io](https://pytenter.github.io/)。

## 文件结构

- `index.html`：个人信息、教育经历、论文、项目、荣誉与联系方式。
- `static/css/main.css`：中文排版、响应式布局、图片弹窗和打印样式。
- `static/js/main.js`：手机导航、栏目高亮与图片放大等渐进增强功能。
- `static/assets/portrait.webp`：本人提供的插画头像，经等比缩小与压缩用于网页，保留完整画面。
- `static/assets/research/`：论文方法图与研究动机图。
- `static/assets/video/`：真机录像双视角回放录屏（H.264 MP4）和封面图，播放器按需加载，不自动播放。
- `static/assets/robot-gallery/`：本人拍摄的四张机械臂过程图，放在录屏下方，按“桌面接近、抓取、搬到纸盒上方、放入盒中”的过程展示。

网站为原生静态页面，无须安装依赖或构建。GitHub Pages 直接发布仓库根目录。原有根目录 PNG 和早期 ZIP 保留。

## 本地预览

在本目录运行 `python3 -m http.server 8000 --bind 127.0.0.1`，然后打开 `http://127.0.0.1:8000`。

## 内容维护

个人信息依据本人提供的简历与确认内容整理。按本人要求，不展示均分、排名和六级成绩；页面不设置成绩卡片。论文顺序为 LeaRSQ 在前、TrajKV 在后；前者为第一作者、稿件已完成，后者为共同第一作者、ICASSP 在投。LeaRSQ 稿件将实验数字标为 illustrative，因此网页只介绍方法，不将示例性能数字作为实测成果。

按本人要求，主页及附带的旧主页压缩包不提供 LeaRSQ 研究代码链接。

每篇论文是一个独立的 `article.paper-entry`，包括中文标题、英文原题、作者身份、稿件状态、摘要、方法图，以及按“研究问题、算法创新、贡献”组织的详情。更新论文状态应以本人确认为准。项目中的 LIBERO 成功率注明仿真设置，不解释为真机成功率。

简历和论文 PDF 全文均不包含在仓库中；以后有公开论文链接时，可加入相应条目。替换图片时，应同步更新宽高、替代文本和图注。禁用 JavaScript 仍能阅读正文、展开详情并打开原图。

## 模板来源

布局借鉴及许可声明见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。个人头像、研究文字和论文图示的权利归各自作者所有。

图库展示顺序为 `04-release.jpg` → `03-transport.jpg` → `02-grasp.jpg` → `01-approach.jpg`。这些历史文件名保留，页面图注以实际“桌面抓取后放入纸盒”的过程为准。
