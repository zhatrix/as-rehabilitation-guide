# 内容结构规划 - 强直性脊柱炎康复指导网站

## 1. 材料清单

### 文档资源
- `docs/ankylosing_spondylitis_etiology.md` (约8,200字，13个章节)
  - 病因学与发病机制深度研究
  - 包含遗传因素、环境触发、免疫系统异常、炎症机制等
- `docs/ankylosing_spondylitis_medication.md` (约7,900字，14个章节)
  - 药物治疗策略循证综述
  - 包含NSAIDs、TNF抑制剂、IL-17抑制剂、JAK抑制剂等
- `docs/ankylosing_spondylitis_rehabilitation.md` (约8,200字，13个章节)
  - 运动康复治疗循证实践
  - 包含呼吸训练、姿势矫正、ROM训练、水中运动等

### 视觉资产
**医学插图** (`imgs/` 目录，共10张)：
- `spine_anatomy_comparison.png` - 脊柱解剖对比图
- `hla_b27_genetic_factor.png` - HLA-B27遗传因素图
- `inflammation_pathway.png` - 炎症通路示意图
- `tnf_inhibitor_mechanism.png` - TNF抑制剂机制图
- `breathing_exercise.png` - 呼吸训练动作
- `cat_camel_exercise.png` - 猫驼式训练动作
- `joint_mobility_exercise.png` - 关节活动度训练
- `posture_correction.png` - 姿势矫正训练
- `aquatic_therapy.png` - 水疗训练
- `lifestyle_guidance.png` - 生活方式指导

**康复视频** (`videos/` 目录，共5个)：
- `breathing_therapy_demo.mp4` - 呼吸训练演示
- `spinal_extension_exercise.mp4` - 脊柱伸展运动
- `joint_mobility_training.mp4` - 关节活动度训练
- `posture_correction_training.mp4` - 姿势矫正训练
- `aquatic_therapy_session.mp4` - 水中运动疗法

## 2. 网站结构

**类型**: MPA (多页面应用)

**理由**: 
- 内容量大（24,000字，3个主题领域）
- 信息密度高（医学研究报告级别）
- 用户需求多样（患者查疾病、查药物、查康复方法）
- 媒体素材丰富（10张图+5个视频）
- 符合医学信息网站的导航习惯

## 3. 页面/模块分解

### 页面1: 首页 

**目的**: 建立信任、快速导航、概览病症

**内容映射**:

| 模块 | 组件模式 | 数据文件路径 | 内容提取规则 | 视觉资产（内容图） |
|------|---------|-------------|-------------|-----------------|
| Hero区 | Hero Pattern | `docs/ankylosing_spondylitis_etiology.md` L1-10 | 疾病定义、核心症状描述 | - |
| 三大板块导航 | Card Grid (3列) | 各文档标题+执行摘要 | 病因、药物、康复三大主题简介（各100-150字） | - |
| 快速统计 | Data Card Grid (4卡片) | `etiology.md` L15-35 | 全球患病率、好发年龄、男女比例、HLA-B27阳性率 | - |
| 疾病特征 | 2列布局 | `etiology.md` L1-10 | 左侧：典型症状文字；右侧：解剖对比 | `spine_anatomy_comparison.png` |

**禁止指定**（设计决策）:
- ❌ 背景颜色/渐变
- ❌ 对齐方式（居中/左对齐）
- ❌ 装饰性图案

---

### 页面2: 病因与机制

**目的**: 深度理解疾病成因、遗传与环境因素

**内容映射**:

| 模块 | 组件模式 | 数据文件路径 | 内容提取规则 | 视觉资产（内容图） |
|------|---------|-------------|-------------|-----------------|
| 页面标题 | Page Header | `etiology.md` L1-10 | 标题+引言（约200字） | - |
| 章节1: 遗传因素 | Content Block | `etiology.md` L14-40 | 提取HLA-B27机制、族群差异、表1 | `hla_b27_genetic_factor.png` |
| 章节2: 环境触发 | Content Block | `etiology.md` L42-93 | 感染、肠道菌群、生活方式，表2-3 | - |
| 章节3: 免疫异常 | Content Block | `etiology.md` L95-117 | 先天/适应性免疫、细胞谱系，表4 | - |
| 章节4: 炎症通路 | Content Block + 图解 | `etiology.md` L119-144 | IL-23/IL-17轴、TNF通路、表5 | `inflammation_pathway.png` |
| 章节5: 疾病进展 | Content Block | `etiology.md` L146-179 | 炎症-骨化时间线、表6-7 | - |
| 整合模型 | Summary Section | `etiology.md` L245-252 | 多重打击模型、三重打击机制 | - |

---

### 页面3: 药物治疗 

**目的**: 循证药物方案、安全性管理、治疗路径

**内容映射**:

| 模块 | 组件模式 | 数据文件路径 | 内容提取规则 | 视觉资产（内容图） |
|------|---------|-------------|-------------|-----------------|
| 页面标题 | Page Header | `medication.md` L1-17 | 执行摘要、核心结论（8条） | - |
| 治疗目标 | Content Block | `medication.md` L19-29 | 疾病机制、评估工具、治疗目标 | - |
| NSAIDs方案 | Content Block | `medication.md` L43-51 | 使用原则、风险管理、CV/GI/肾功能保护 | - |
| TNF抑制剂 | Content Block + 数据表 | `medication.md` L53-61 | 5种药物机制、疗效数据、安全性 | `tnf_inhibitor_mechanism.png` |
| IL-17抑制剂 | Content Block | `medication.md` L63-69 | 4种药物机制、ASAS40应答率、安全性 | - |
| cDMARDs | Content Block | `medication.md` L77-83 | 柳氮磺吡啶、甲氨蝶呤、局限性 | - |
| 糖皮质激素 | Content Block | `medication.md` L85-91 | 短期系统/局部注射、禁忌 | - |
| JAK抑制剂 | Content Block | `medication.md` L93-99 | III期试验、安全性信号、监测要点 | - |
| 治疗算法 | Flowchart Section | `medication.md` L101-109 | NSAIDs→生物制剂→序贯策略 | - |
| 安全性管理 | Table Section | `medication.md` L111-119 | 各类药物监测要点汇总 | - |

---

### 页面4: 运动康复

**目的**: 可执行运动处方、12周训练计划、安全边界

**内容映射**:

| 模块 | 组件模式 | 数据文件路径 | 内容提取规则 | 视觉资产（内容图） |
|------|---------|-------------|-------------|-----------------|
| 页面标题 | Page Header | `rehabilitation.md` L1-22 | 执行摘要、核心结论（4条）、康复目标 | - |
| 康复重要性 | Content Block | `rehabilitation.md` L43-69 | 表1-2：疗效汇总、参数指标 | - |
| 呼吸训练 | Content Block + 视频 | `rehabilitation.md` L99-117 | 表4：呼吸模块、IMT训练方法 | `breathing_exercise.png`<br>`videos/breathing_therapy_demo.mp4` |
| 脊柱伸展 | Content Block + 视频 | `rehabilitation.md` L73-93 | 表3：动作处方、猫驼式等6动作 | `cat_camel_exercise.png`<br>`videos/spinal_extension_exercise.mp4` |
| 姿势矫正 | Content Block + 视频 | `rehabilitation.md` L119-139 | 表5：核心稳定训练、靠墙站立等 | `posture_correction.png`<br>`videos/posture_correction_training.mp4` |
| ROM训练 | Content Block + 视频 | `rehabilitation.md` L141-159 | 表6：关节活动度动作清单 | `joint_mobility_exercise.png`<br>`videos/joint_mobility_training.mp4` |
| 水中运动 | Content Block + 视频 | `rehabilitation.md` L161-177 | 表7：有氧/水中运动处方 | `aquatic_therapy.png`<br>`videos/aquatic_therapy_session.mp4` |
| 日常生活指导 | Content Block | `rehabilitation.md` L179-197 | 表8：ADL场景替代策略 | `lifestyle_guidance.png` |
| 运动禁忌 | Warning Section | `rehabilitation.md` L199-221 | 表9：禁忌动作清单、急性期识别 | - |
| 12周处方示例 | Table Section | `rehabilitation.md` L273-295 | 表12：周-模块-动作-进阶路径 | - |

---

## 4. 内容分析

### 信息密度
**高密度** - 医学研究报告级别
- 总字数: 24,000字
- 平均章节长度: 600-800字
- 表格数量: 约30个数据表
- 引用文献: 约100条

### 内容平衡

| 类型 | 数量 | 占比 | 说明 |
|-----|------|------|------|
| 文字内容 | 24,000字 | 65% | 医学文献综述级别 |
| 数据表格 | 30个表格 | 15% | 疗效数据、风险因素、处方参数 |
| 内容图片 | 10张插图 | 10% | 医学机制图解、训练动作示意 |
| 视频素材 | 5个视频 | 10% | 康复训练演示 |

**内容类型**: 混合型（文本密集 + 数据驱动 + 视觉辅助）

### 目标用户特征
- **年龄**: 18-65岁（以20-40岁青壮年为主）
- **身份**: AS患者、患者家属、医学生/临床医师
- **需求**: 权威医学知识、可操作康复方案、用药安全指导
- **阅读场景**: 深度学习（非碎片化浏览）

### 设计启示
1. **可读性优先**: 文字密度高，需要优秀的排版与层级
2. **数据可视化**: 30个表格需要清晰的表格样式
3. **媒体交互**: 视频需要播放控制，图片需要点击放大
4. **导航清晰**: 4页结构需要明确的页间导航
5. **权威感**: 医学内容需要专业、可信的视觉呈现

---

**文档版本**: 1.0  
**创建时间**: 2025-11-03  
**最后更新**: 2025-11-03
