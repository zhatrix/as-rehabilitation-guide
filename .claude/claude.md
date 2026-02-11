# 强直性脊柱炎康复指导网站

## 任务概述
建设强直性脊柱炎康复指导网站，包括设计，开发

## 用户特殊要求
- 支持视频播放/暂停控制
- 支持图片点击放大显示
- 响应式设计（手机+电脑）

## 材料清点
**文档：** 3个核心医学文档，总计约24,000字
- ankylosing_spondylitis_etiology.md（病因机制，约8,200字）
- ankylosing_spondylitis_medication.md（药物治疗，约7,900字）
- ankylosing_spondylitis_rehabilitation.md（运动康复，约8,200字）

**图片：** 10张AI生成医学插图
- aquatic_therapy.png（水疗）
- breathing_exercise.png（呼吸训练）
- cat_camel_exercise.png（猫驼式）
- hla_b27_genetic_factor.png（遗传因素）
- inflammation_pathway.png（炎症通路）
- joint_mobility_exercise.png（关节活动度）
- lifestyle_guidance.png（生活方式）
- posture_correction.png（姿势矫正）
- spine_anatomy_comparison.png（脊柱解剖对比）
- tnf_inhibitor_mechanism.png（TNF抑制剂机制）

**视频：** 5个康复训练演示
- aquatic_therapy_session.mp4
- breathing_therapy_demo.mp4
- joint_mobility_training.mp4
- posture_correction_training.mp4
- spinal_extension_exercise.mp4

## 关键分析
**行业定位：** 医学健康信息网站
**目标用户：** 18-65岁强直性脊柱炎患者及家属
**核心目标：** 建立信任、提供权威医学信息、指导康复
**内容类型：** 文本密集（医学信息）+ 多媒体丰富（图片+视频）

**网站结构建议：** MPA（多页面）
- 理由：3个主题、24,000字内容、10+媒体素材、不同信息需求


## 设计规范制定

### 已交付文档（3个核心文件）

1. **内容结构规划** (`docs/content-structure-plan.md`)
   - 材料清单（3文档+10图+5视频）
   - 网站结构：MPA（4页面）
   - 页面/模块分解与内容映射
   - 内容分析（24,000字，高密度）

2. **设计规范** (`docs/design-specification.md`)
   - 字数：约2,800字（符合≤3K要求）
   - 5章节：方向、Tokens、组件、布局、交互
   - 特殊要求实现：✅ 视频控制、✅ 图片放大、✅ 响应式
   - 风格：瑞士设计（95%中性色+5%医学蓝+8px网格+12列栅格）

3. **设计Tokens** 
   - W3C格式：颜色、字体、间距、圆角、阴影、动画、组件参数
   - 兼容Tailwind/CSS Vars/Figma Tokens

### 设计亮点
- **科研质感**：等宽字体营造精准、技术氛围
- **极致可读性**：8列居中布局（66.7%宽度）、行高1.5-1.6、严格网格
- **数据友好**：等宽字体天然对齐表格数字列、30个表格清晰呈现
- **媒体交互**：图片点击放大（全屏Modal）、视频播放控制（倍速/快捷键）
- **权威专业**：95%黑白灰+5%医学蓝、0-2px锐角、极简动画（150-200ms）

### 技术规格
- **WCAG**: 主色与正文色≥AA级，标题≥AAA级
- **响应式**: 3断点（640/768/1024px），4-8-12列栅格适配
- **性能**: 仅transform/opacity动画，<200ms平均时长
- **无障碍**: 键盘导航、屏幕阅读器、减少动画模式

## 状态
✅ **UI设计规范制定完成，可进入开发阶段**
