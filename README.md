# 强直性脊柱炎康复指导网站

权威的强直性脊柱炎医学知识与康复指导网站,涵盖病因机制、药物治疗、运动康复方案。

## 项目特点

- ✅ **现代技术栈**: Next.js 14 (App Router) + TypeScript + Tailwind CSS
- ✅ **响应式设计**: 支持手机、平板、桌面设备
- ✅ **瑞士设计风格**: 等宽字体、极简配色、科研质感
- ✅ **完整内容**: 24,000字医学内容、30个数据表格、10张图片、5个视频
- ✅ **媒体交互**: 图片点击放大、视频播放控制(倍速/快捷键)
- ✅ **SEO优化**: 完整metadata、sitemap、Schema.org结构化数据
- ✅ **无障碍**: WCAG AA级标准、键盘导航、屏幕阅读器支持

## 技术架构

### 核心技术
- **框架**: Next.js 14.2+ (App Router)
- **语言**: TypeScript 5+
- **样式**: Tailwind CSS 3.4+
- **内容**: React组件(非MDX实现,更好性能)
- **图片**: Next.js Image组件 + react-medium-image-zoom
- **视频**: video.js
- **分析**: Vercel Analytics

### 设计规范
- **颜色**: 95%中性灰 + 5%医学蓝(#0277BD)
- **字体**: Roboto Mono等宽字体
- **间距**: 8px网格系统
- **断点**: 640px / 768px / 1024px
- **栅格**: 12列系统,8列居中内容区

## 目录结构

```
as-rehabilitation-guide/
├── src/
│   ├── app/                    # Next.js App Router页面
│   │   ├── layout.tsx         # 根布局(导航+页脚+Analytics)
│   │   ├── page.tsx           # 首页
│   │   ├── globals.css        # 全局样式
│   │   ├── sitemap.ts         # Sitemap生成
│   │   ├── robots.ts          # Robots.txt生成
│   │   ├── etiology/          # 病因页面
│   │   ├── medication/        # 药物页面
│   │   └── rehabilitation/    # 康复页面
│   ├── components/            # React组件
│   │   ├── layout/            # Navigation, Footer
│   │   ├── ui/                # Button, Card, Table, DataCard, ContentBlock
│   │   ├── media/             # ImageViewer, VideoPlayer
│   │   └── sections/          # Hero, ThreePillars, QuickStats
│   ├── lib/                   # 工具函数
│   └── types/                 # TypeScript类型
├── public/
│   ├── imgs/                  # 10张医学插图
│   └── videos/                # 5个康复视频
├── docs/                      # 原始文档(参考)
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## 开发指南

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run dev
```

访问 http://localhost:3000

### 构建生产版本

```bash
npm run build
npm run start
```

### 代码检查

```bash
npm run lint
```

## 部署到Vercel

### 方式一:GitHub集成(推荐)

1. 将代码推送到GitHub
```bash
git init
git add .
git commit -m "Initial commit: AS rehabilitation guide"
git remote add origin https://github.com/your-username/as-rehabilitation-guide.git
git push -u origin main
```

2. 访问 [Vercel](https://vercel.com/new)

3. 导入GitHub仓库

4. 配置项目:
   - **Framework Preset**: Next.js
   - **Root Directory**: ./
   - **Build Command**: npm run build (默认)
   - **Output Directory**: .next (默认)

5. 点击Deploy

### 方式二:Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
```

### 部署后更新域名

部署成功后,更新以下文件中的域名:
- `src/app/layout.tsx` (Open Graph URL)
- `src/app/sitemap.ts` (sitemap URL)
- `src/app/robots.ts` (robots.txt sitemap URL)

## 内容说明

### 四个核心页面

1. **首页 (/)**: 疾病概述、三大板块导航、统计数据、典型症状
2. **病因页面 (/etiology)**: HLA-B27遗传因素、环境触发、免疫异常、炎症通路
3. **药物页面 (/medication)**: NSAIDs、TNF抑制剂、IL-17抑制剂、治疗算法
4. **康复页面 (/rehabilitation)**: 呼吸训练、脊柱伸展、姿势矫正、水中运动

### 媒体资源

**图片 (10张)**:
- aquatic_therapy.png (水疗)
- breathing_exercise.png (呼吸训练)
- cat_camel_exercise.png (猫驼式)
- hla_b27_genetic_factor.png (遗传因素)
- inflammation_pathway.png (炎症通路)
- joint_mobility_exercise.png (关节活动度)
- lifestyle_guidance.png (生活方式)
- posture_correction.png (姿势矫正)
- spine_anatomy_comparison.png (脊柱解剖对比)
- tnf_inhibitor_mechanism.png (TNF抑制剂机制)

**视频 (5个)**:
- aquatic_therapy_session.mp4
- breathing_therapy_demo.mp4
- joint_mobility_training.mp4
- posture_correction_training.mp4
- spinal_extension_exercise.mp4

## 性能优化

- ✅ Next.js Image组件自动优化(WebP/AVIF)
- ✅ 视频懒加载with poster图片
- ✅ Roboto Mono字体优化(next/font/google)
- ✅ 代码自动分割(App Router默认)
- ✅ 仅transform/opacity动画(<200ms)

## SEO配置

- ✅ 每页独立metadata (title, description, keywords)
- ✅ Open Graph社交分享卡片
- ✅ Sitemap.xml自动生成
- ✅ Robots.txt配置
- ✅ Schema.org结构化数据(MedicalWebPage)
- ✅ 语义HTML标签

## 无障碍功能

- ✅ 键盘导航(Tab键遍历)
- ✅ 图片alt文本
- ✅ 按钮aria-label
- ✅ `prefers-reduced-motion`支持
- ✅ 触摸目标≥44×44px(移动端)
- ✅ 对比度≥WCAG AA级

## 浏览器支持

- Chrome (最新2个版本)
- Firefox (最新2个版本)
- Safari (最新2个版本)
- Edge (最新2个版本)
- 移动浏览器: iOS Safari, Chrome Android

## 环境变量

如需使用Google Analytics,创建`.env.local`:

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## License

本项目仅供教育和信息目的使用。

## 医学免责声明

本网站内容仅供参考,不能替代专业医疗建议、诊断或治疗。如有疑问,请咨询专业医疗人员。

---

© 2026 强直性脊柱炎康复指导 · 仅供教育和信息目的
