# 部署指南

## 准备工作

### 1. 检查构建

```bash
npm run build
```

确保构建成功,无错误。

### 2. 测试本地生产版本

```bash
npm run start
```

访问 http://localhost:3000 检查所有页面和功能。

## 部署到Vercel

### 步骤1: 初始化Git仓库

如果还没有初始化Git:

```bash
git init
git add .
git commit -m "Initial commit: AS rehabilitation guide website"
```

### 步骤2: 创建GitHub仓库

1. 访问 https://github.com/new
2. 创建新仓库 `as-rehabilitation-guide`
3. 不要初始化README、.gitignore或license(我们已经有了)

### 步骤3: 推送到GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/as-rehabilitation-guide.git
git branch -M main
git push -u origin main
```

将`YOUR_USERNAME`替换为你的GitHub用户名。

### 步骤4: 连接到Vercel

1. 访问 https://vercel.com/new
2. 如果没有账号,用GitHub登录注册
3. 点击"Import Project"
4. 选择GitHub,授权Vercel访问你的仓库
5. 选择`as-rehabilitation-guide`仓库

### 步骤5: 配置项目

Vercel会自动检测到这是Next.js项目,默认配置通常就可以:

- **Framework Preset**: Next.js (自动检测)
- **Root Directory**: ./
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

如果需要Google Analytics,在"Environment Variables"添加:
- **Key**: `NEXT_PUBLIC_GA_ID`
- **Value**: `G-XXXXXXXXXX`

### 步骤6: 部署

点击"Deploy"按钮,等待部署完成(通常2-3分钟)。

部署成功后,Vercel会提供:
- **Production URL**: `https://your-project-name.vercel.app`
- **Preview URL**: 每次Git推送时自动生成预览链接

### 步骤7: 更新域名配置

部署成功后,更新代码中的域名:

1. **src/app/layout.tsx** - 第32行左右
```typescript
openGraph: {
  url: 'https://your-actual-domain.vercel.app',
  // ...
}
```

2. **src/app/sitemap.ts** - 第4行
```typescript
const baseUrl = 'https://your-actual-domain.vercel.app'
```

3. **src/app/robots.ts** - 第4行
```typescript
const baseUrl = 'https://your-actual-domain.vercel.app'
```

4. 提交并推送更改:
```bash
git add .
git commit -m "Update domain URLs"
git push
```

Vercel会自动重新部署。

### 步骤8(可选): 配置自定义域名

1. 在Vercel项目设置中点击"Domains"
2. 添加你的自定义域名
3. 按照Vercel的指引配置DNS记录
4. 等待DNS传播(通常5分钟-24小时)

## 部署后检查清单

访问你的生产网站,逐项检查:

### 功能检查
- [ ] 首页正常加载,Hero区、三大板块、统计数据显示正确
- [ ] 导航菜单(桌面+移动)工作正常,活动状态正确高亮
- [ ] 病因页面加载,所有表格和2张图片显示
- [ ] 药物页面加载,所有表格和TNF抑制剂图片显示
- [ ] 康复页面加载,5个视频和6张图片显示

### 媒体功能
- [ ] 点击任意图片可放大到全屏
- [ ] 点击背景或关闭按钮可关闭放大视图
- [ ] 视频可以播放/暂停
- [ ] 视频进度条可拖拽
- [ ] 视频倍速控制正常(0.5x, 1x, 1.5x, 2x)
- [ ] 视频空格键快捷键可播放/暂停

### 响应式测试
- [ ] 桌面(>1024px): 12列布局,水平导航
- [ ] 平板(768-1024px): 8列布局,导航正常
- [ ] 手机(<768px): 垂直堆叠,汉堡菜单可打开/关闭
- [ ] 表格在移动端可横向滚动

### SEO检查
- [ ] 访问 `/sitemap.xml` 可见站点地图
- [ ] 访问 `/robots.txt` 可见robots配置
- [ ] 每个页面的`<title>`独立且正确
- [ ] 使用Chrome DevTools查看meta标签(description, keywords, og:image等)
- [ ] 使用 [Google Rich Results Test](https://search.google.com/test/rich-results) 验证结构化数据

### 性能检查
- [ ] Chrome DevTools Lighthouse测试:
  - Performance ≥90
  - Accessibility ≥90
  - Best Practices ≥90
  - SEO ≥95
- [ ] 图片使用WebP/AVIF格式
- [ ] First Contentful Paint (FCP) <2秒
- [ ] Largest Contentful Paint (LCP) <2.5秒

### 无障碍检查
- [ ] 使用Tab键可遍历所有交互元素
- [ ] 所有图片有alt文本
- [ ] 按钮有清晰的文本或aria-label
- [ ] 颜色对比度符合WCAG AA标准(使用Chrome DevTools Color Picker检查)

## 持续部署

配置完成后,每次推送到GitHub的`main`分支,Vercel会自动:
1. 拉取最新代码
2. 运行构建
3. 部署到生产环境
4. 发送部署通知邮件

## 监控与分析

### Vercel Analytics
Vercel Analytics已集成(在`src/app/layout.tsx`中),部署后自动生效。

访问Vercel项目控制台查看:
- 页面访问量
- 访客来源
- 设备类型
- 性能指标

### Google Analytics(可选)
如果配置了GA环境变量,可在Google Analytics控制台查看详细数据。

## 故障排查

### 构建失败
- 检查`npm run build`在本地是否成功
- 查看Vercel部署日志中的错误信息
- 确保所有依赖都在`package.json`中

### 图片/视频不显示
- 检查`public/imgs`和`public/videos`目录是否包含所有文件
- 确保文件名拼写正确(区分大小写)
- 检查浏览器控制台是否有404错误

### 样式错乱
- 清除浏览器缓存
- 检查Tailwind配置是否正确
- 确保`globals.css`被正确导入

### SEO问题
- 确保`metadataBase`在部署后更新为实际域名
- 检查`sitemap.ts`和`robots.ts`中的URL是否正确
- 使用Google Search Console验证站点

## 进一步优化

### 1. 设置自定义404页面

创建`src/app/not-found.tsx`:
```typescript
export default function NotFound() {
  return (
    <div className="py-3xl text-center">
      <h1 className="mb-md">404 - 页面未找到</h1>
      <p>您访问的页面不存在。</p>
    </div>
  )
}
```

### 2. 添加加载状态

创建`src/app/loading.tsx`:
```typescript
export default function Loading() {
  return (
    <div className="py-3xl text-center">
      <p>加载中...</p>
    </div>
  )
}
```

### 3. 配置Google Search Console
1. 访问 https://search.google.com/search-console
2. 添加你的网站
3. 验证所有权
4. 提交sitemap: `https://your-domain.vercel.app/sitemap.xml`

### 4. 启用HTTPS(Vercel自动)
Vercel自动为所有部署启用HTTPS,无需额外配置。

### 5. 性能监控
使用Vercel Speed Insights监控真实用户性能数据:
```bash
npm install @vercel/speed-insights
```

在`src/app/layout.tsx`中添加:
```typescript
import { SpeedInsights } from '@vercel/speed-insights/next'

// 在<body>中添加:
<SpeedInsights />
```

## 联系支持

如遇到问题:
- **Vercel文档**: https://vercel.com/docs
- **Next.js文档**: https://nextjs.org/docs
- **Vercel社区**: https://github.com/vercel/vercel/discussions

---

祝部署顺利! 🚀
