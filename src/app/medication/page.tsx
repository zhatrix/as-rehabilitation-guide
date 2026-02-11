import { Metadata } from 'next'
import { ContentBlock } from '@/components/ui/ContentBlock'
import { ImageViewer } from '@/components/media/ImageViewer'
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui/Table'

export const metadata: Metadata = {
  title: '药物治疗方案',
  description: 'NSAIDs、TNF抑制剂、IL-17抑制剂等药物的作用机制、疗效数据和安全性管理',
}

export default function MedicationPage() {
  return (
    <article className="py-3xl">
      <ContentBlock>
        {/* Page Title */}
        <header className="mb-xl">
          <h1 className="mb-md">强直性脊柱炎药物治疗方案</h1>
          <p className="text-body-lg text-neutral-700 leading-relaxed">
            本页面系统介绍AS的药物治疗策略,包括NSAIDs、生物制剂(TNF抑制剂、IL-17抑制剂)、传统DMARDs等药物的作用机制、疗效数据和安全性管理,帮助您了解现代AS治疗的循证医学证据。
          </p>
        </header>

        {/* Executive Summary */}
        <section className="bg-primary-50 p-lg rounded-sm mb-xl">
          <h2 className="mb-md">核心结论与策略要点</h2>
          <div className="prose">
            <ul>
              <li>
                <strong>NSAIDs:</strong>
                一线对症治疗,规律使用,需进行心血管与胃肠道风险评估
              </li>
              <li>
                <strong>生物制剂:</strong>
                NSAIDs应答不足或高疾病活动度患者的标准升级方案;TNF抑制剂与IL-17抑制剂均有高质量证据支持
              </li>
              <li>
                <strong>TNF抑制剂:</strong>
                在伴复发性葡萄膜炎或炎症性肠病表型中更具优势
              </li>
              <li>
                <strong>IL-17抑制剂:</strong>
                靶向附着点炎症核心通路,在影像学进展延缓方面呈现积极信号
              </li>
              <li>
                <strong>传统DMARDs:</strong>
                对轴性症状疗效有限,主要用于外周关节炎
              </li>
              <li>
                <strong>糖皮质激素:</strong>
                不作长期系统使用,短期或局部注射在特定场景可用
              </li>
              <li>
                <strong>JAK抑制剂:</strong>
                新兴口服选项,需在获益明确且风险可控人群中使用
              </li>
              <li>
                <strong>治疗算法:</strong>
                足量NSAIDs → 升级生物制剂 → 个体化序贯与转换
              </li>
            </ul>
          </div>
        </section>

        {/* Treatment Goals */}
        <section className="mb-xl">
          <h2 className="mb-md">疾病概述与治疗目标</h2>
          <div className="prose mb-md">
            <p>
              AS属于中轴型脊柱关节炎(axSpA)谱系,病理机制涉及天然免疫与适应性免疫的异常激活。促炎细胞因子(如
              <strong className="text-primary-500">TNF-α、IL-17A/F</strong>
              )与JAK-STAT信号通路在疾病发生与持续中扮演关键角色。
            </p>
            <p>
              <strong>疾病评估工具:</strong>
            </p>
            <ul>
              <li>
                <strong>ASDAS</strong>
                (强直性脊柱炎疾病活动评分):综合患者自评与炎症指标(CRP/ESR)
              </li>
              <li>
                <strong>BASDAI</strong>
                (巴斯强直性脊柱炎疾病活动指数):以患者自评症状为主
              </li>
            </ul>
            <p>
              <strong className="text-primary-500">治疗目标:</strong>
              症状控制 → 炎症抑制 → 功能维持 → 生活质量提升 → 影像学进展延缓
            </p>
          </div>
        </section>

        {/* NSAIDs */}
        <section className="mb-xl">
          <h2 className="mb-md">非甾体抗炎药(NSAIDs)</h2>

          <div className="prose mb-md">
            <h3>作用机制</h3>
            <p>
              NSAIDs通过抑制环氧化酶(COX-1/COX-2)降低前列腺素合成,缓解炎性疼痛与僵硬,是AS症状控制的基础用药。
            </p>

            <h3>使用策略</h3>
            <ul>
              <li>在最低有效剂量下规律使用</li>
              <li>定期评估疗效与风险</li>
              <li>个体化选择药物与防护策略</li>
              <li>不能改变疾病自然病程或阻止影像学进展</li>
            </ul>
          </div>

          <h4 className="mb-sm">常用NSAIDs药物</h4>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>药物名称</TableHead>
                <TableHead>类型</TableHead>
                <TableHead>特点</TableHead>
                <TableHead>适用人群</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>布洛芬</TableCell>
                <TableCell>非选择性</TableCell>
                <TableCell>疗效确切,价格低廉</TableCell>
                <TableCell>一般患者</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>萘普生</TableCell>
                <TableCell>非选择性</TableCell>
                <TableCell>作用时间较长</TableCell>
                <TableCell>一般患者</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>双氯芬酸</TableCell>
                <TableCell>非选择性</TableCell>
                <TableCell>抗炎效果强</TableCell>
                <TableCell>一般患者</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>塞来昔布</TableCell>
                <TableCell>COX-2选择性</TableCell>
                <TableCell>胃肠道不良反应较少</TableCell>
                <TableCell>胃肠道高风险患者</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <div className="prose mt-md">
            <h3>风险管理</h3>
            <h4>心血管风险</h4>
            <ul>
              <li>既往心梗、脑卒中、心衰患者应谨慎使用</li>
              <li>避免高风险药物与高剂量长期暴露</li>
              <li>定期监测血压、血脂等指标</li>
            </ul>

            <h4>胃肠道风险</h4>
            <ul>
              <li>高龄、既往溃疡/出血史患者高风险</li>
              <li>联合抗凝/抗血小板治疗需特别注意</li>
              <li>优先选择COX-2选择性药物或加用胃黏膜保护剂</li>
            </ul>

            <h4>肾功能保护</h4>
            <ul>
              <li>脱水、肾功能不全时谨慎使用</li>
              <li>定期监测肌酐与电解质</li>
              <li>避免与其他肾毒性药物联合使用</li>
            </ul>
          </div>
        </section>

        {/* TNF Inhibitors */}
        <section className="mb-xl">
          <h2 className="mb-md">TNF抑制剂</h2>

          <div className="prose mb-md">
            <h3>作用机制</h3>
            <p>
              TNF抑制剂通过中和TNF-α或阻断其受体,迅速抑制炎症、改善症状与功能,是NSAIDs应答不足或高疾病活动度患者的标准升级方案。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl mb-md">
            <div>
              <ImageViewer
                src="/imgs/tnf_inhibitor_mechanism.png"
                alt="TNF抑制剂作用机制"
                width={800}
                height={600}
                caption="TNF抑制剂阻断TNF-α信号通路"
              />
            </div>

            <div className="prose">
              <h3>适应症</h3>
              <ul>
                <li>NSAIDs治疗无效或不耐受</li>
                <li>疾病活动度高(BASDAI ≥4, ASDAS ≥2.1)</li>
                <li>伴有外周关节炎</li>
                <li>伴有复发性葡萄膜炎或炎症性肠病(优先选择)</li>
              </ul>

              <h3>临床优势</h3>
              <ul>
                <li>快速起效,通常2-4周见效</li>
                <li>显著改善疼痛、僵硬和功能</li>
                <li>长期使用可能延缓影像学进展</li>
                <li>对关节外表现(如葡萄膜炎、IBD)有效</li>
              </ul>
            </div>
          </div>

          <h4 className="mb-sm">TNF抑制剂疗效数据</h4>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>药物名称</TableHead>
                <TableHead>类型</TableHead>
                <TableHead>给药方式</TableHead>
                <TableHead>临床缓解率</TableHead>
                <TableHead>对照组</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>依那西普(Etanercept)</TableCell>
                <TableCell>可溶性TNF受体融合蛋白</TableCell>
                <TableCell>皮下注射,50mg/周</TableCell>
                <TableCell>80% (4个月)</TableCell>
                <TableCell>30% (P=0.004)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>英夫利昔单抗(Infliximab)</TableCell>
                <TableCell>人-鼠嵌合单抗</TableCell>
                <TableCell>静脉输注,5mg/kg</TableCell>
                <TableCell>61.2% (24周)</TableCell>
                <TableCell>19.2% (P&lt;0.001)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>阿达木单抗(Adalimumab)</TableCell>
                <TableCell>全人源单抗</TableCell>
                <TableCell>皮下注射,40mg/2周</TableCell>
                <TableCell>58.2% (12周)</TableCell>
                <TableCell>20.6% (P&lt;0.001)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>戈利木单抗(Golimumab)</TableCell>
                <TableCell>全人源单抗</TableCell>
                <TableCell>皮下注射,50mg/月</TableCell>
                <TableCell>
                  ASAS20: 71.1%
                  <br />
                  ASAS40: 56.7%
                </TableCell>
                <TableCell>
                  40.0%
                  <br />
                  23.0% (P&lt;0.0001)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>赛妥珠单抗(Certolizumab)</TableCell>
                <TableCell>聚乙二醇化Fab片段</TableCell>
                <TableCell>皮下注射,200mg/2周</TableCell>
                <TableCell>57.7-63.6% (ASAS20)</TableCell>
                <TableCell>38.3% (P&lt;0.001)</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <div className="prose mt-md">
            <h3>安全性与监测</h3>
            <h4>基线筛查(治疗前必须完成)</h4>
            <ul>
              <li>
                <strong>结核筛查:</strong>PPD试验或IGRA(γ干扰素释放试验)
              </li>
              <li>
                <strong>病毒筛查:</strong>乙型肝炎(HBsAg、抗-HBc、抗-HBs)、丙型肝炎、HIV
              </li>
              <li>
                <strong>胸部X线:</strong>排除活动性肺部感染
              </li>
            </ul>

            <h4>常见不良反应</h4>
            <ul>
              <li>注射部位反应(依那西普、阿达木单抗、戈利木单抗)</li>
              <li>输液反应(英夫利昔单抗)</li>
              <li>上呼吸道感染风险增加</li>
              <li>活动性结核再激活(需预防性治疗)</li>
              <li>乙肝再激活(HBV携带者需抗病毒预防)</li>
            </ul>

            <h4>禁忌症</h4>
            <ul>
              <li>活动性感染(包括活动性结核、严重细菌/真菌感染)</li>
              <li>未治疗的潜伏性结核(需先预防性抗结核治疗)</li>
              <li>严重心力衰竭(NYHA III-IV级)</li>
              <li>脱髓鞘疾病(如多发性硬化症)</li>
              <li>近期恶性肿瘤(需评估个体风险)</li>
            </ul>
          </div>
        </section>

        {/* IL-17 Inhibitors */}
        <section className="mb-xl">
          <h2 className="mb-md">IL-17抑制剂</h2>

          <div className="prose mb-md">
            <h3>作用机制</h3>
            <p>
              IL-17抑制剂通过抑制IL-17A或IL-17F及其受体信号,针对附着点与中轴炎症核心通路。
              <strong className="text-primary-500">
                IL-23/Th17轴与附着点微环境炎症
              </strong>
              是驱动中轴与外周症状的重要机制。
            </p>

            <h3>相比TNF抑制剂的优势</h3>
            <ul>
              <li>更精准靶向附着点炎症通路</li>
              <li>在影像学进展延缓方面呈现积极信号</li>
              <li>适合银屑病合并AS患者</li>
              <li>适合TNF抑制剂失败或不耐受患者</li>
            </ul>
          </div>

          <h4 className="mb-sm">IL-17抑制剂疗效数据</h4>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>药物名称</TableHead>
                <TableHead>靶点</TableHead>
                <TableHead>给药方式</TableHead>
                <TableHead>主要疗效</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>司库奇尤单抗(Secukinumab)</TableCell>
                <TableCell>抗IL-17A单抗</TableCell>
                <TableCell>皮下注射,150mg/月</TableCell>
                <TableCell>
                  BASDAI改善: -2.3 vs -0.6 (安慰剂) (P&lt;0.0001)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>依奇珠单抗(Ixekizumab)</TableCell>
                <TableCell>抗IL-17A单抗</TableCell>
                <TableCell>皮下注射,80mg/4周</TableCell>
                <TableCell>
                  ASAS40 (16周): 52% vs 18% (安慰剂) (P&lt;0.0001)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Bimekizumab</TableCell>
                <TableCell>抗IL-17A & IL-17F</TableCell>
                <TableCell>皮下注射,160mg/4周</TableCell>
                <TableCell>
                  ASAS40 (16周): 47.7% vs 21.4% (安慰剂) (P&lt;0.001)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Netakimab</TableCell>
                <TableCell>抗IL-17A单抗</TableCell>
                <TableCell>皮下注射,120mg</TableCell>
                <TableCell>
                  ASAS20: 90.91% (120mg组) vs 42.86% (安慰剂)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Brodalumab</TableCell>
                <TableCell>IL-17受体A阻断</TableCell>
                <TableCell>皮下注射</TableCell>
                <TableCell>研究中</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <div className="prose mt-md">
            <h3>安全性特征</h3>
            <h4>常见不良反应</h4>
            <ul>
              <li>上呼吸道感染</li>
              <li>胃肠道不适(恶心、腹泻)</li>
              <li>
                <strong className="text-warning-600">黏膜念珠菌病</strong>
                (口腔、食道、外生殖器)
              </li>
              <li>注射部位反应</li>
            </ul>

            <h4>使用注意事项</h4>
            <ul>
              <li>
                <strong className="text-error-600">禁忌:</strong>
                活动性克罗恩病(CD)患者慎用,可能加重IBD症状
              </li>
              <li>
                <strong>复发性葡萄膜炎患者:</strong>
                IL-17抑制剂对葡萄膜炎疗效不如TNF抑制剂,指南建议优先TNF抑制剂
              </li>
              <li>真菌感染史患者需密切监测</li>
              <li>妊娠期安全性数据有限,需谨慎评估</li>
            </ul>
          </div>
        </section>

        {/* cDMARDs */}
        <section className="mb-xl">
          <h2 className="mb-md">传统合成改善病情抗风湿药(cDMARDs)</h2>

          <div className="prose mb-md">
            <p>
              传统DMARDs(如柳氮磺吡啶、甲氨蝶呤)
              <strong className="text-warning-600">对轴性症状疗效有限</strong>
              ,主要用于外周关节炎或资源受限情境。
            </p>

            <h3>柳氮磺吡啶(Sulfasalazine)</h3>
            <ul>
              <li>
                <strong>适应症:</strong>主要用于AS伴外周关节炎,特别是髋关节、膝关节受累
              </li>
              <li>
                <strong>剂量:</strong>2-3g/天,分次口服
              </li>
              <li>
                <strong>疗效:</strong>
                对外周关节炎有一定效果,但对轴性症状及影像学进展无显著影响
              </li>
              <li>
                <strong>不良反应:</strong>
                胃肠道不适(恶心、腹痛、腹泻)、皮疹、肝功能异常、血细胞减少
              </li>
              <li>
                <strong>监测:</strong>治疗初期每2-4周监测血常规、肝功能,稳定后每3个月监测
              </li>
            </ul>

            <h3>甲氨蝶呤(Methotrexate)</h3>
            <ul>
              <li>
                <strong>适应症:</strong>AS伴外周关节炎或银屑病
              </li>
              <li>
                <strong>剂量:</strong>7.5-25mg/周,口服或皮下注射
              </li>
              <li>
                <strong>疗效:</strong>Cochrane系统综述显示对AS轴性症状获益证据不足
              </li>
              <li>
                <strong>不良反应:</strong>
                恶心、口腔溃疡、肝毒性、骨髓抑制、间质性肺炎(罕见)
              </li>
              <li>
                <strong>注意:</strong>育龄期女性需严格避孕,男性在计划生育前3个月停药
              </li>
            </ul>

            <h3>循证证据</h3>
            <p>
              长期队列研究证实,cDMARDs与脊柱放射学进展(mSASSS)
              <strong className="text-error-600">无显著相关性</strong>
              。从机制角度,这些药物可能无法有效穿透关节囊或到达附着点炎症核心部位。
            </p>
          </div>
        </section>

        {/* Corticosteroids */}
        <section className="mb-xl">
          <h2 className="mb-md">糖皮质激素</h2>

          <div className="prose">
            <p>
              <strong className="text-error-600">不推荐</strong>
              长期系统性使用糖皮质激素治疗AS。短期系统使用或局部注射(关节腔/附着点)在特定场景可获益。
            </p>

            <h3>适用场景</h3>
            <ul>
              <li>
                <strong>外周关节急性炎症:</strong>
                关节腔内注射(如髋关节、膝关节、踝关节)
              </li>
              <li>
                <strong>附着点炎:</strong>局部注射(如跟腱附着点、足底筋膜)
              </li>
              <li>
                <strong>急性疾病加重:</strong>
                短期口服(7-14天),用于桥接治疗或等待生物制剂起效
              </li>
              <li>
                <strong>骶髂关节炎:</strong>
                骶髂关节腔内注射或骶髂关节周围注射(在影像引导下)
              </li>
            </ul>

            <h3>风险与副作用</h3>
            <ul>
              <li>
                <strong>骨质疏松:</strong>长期使用显著增加骨折风险
              </li>
              <li>
                <strong>代谢异常:</strong>血糖升高、体重增加、脂质代谢紊乱
              </li>
              <li>
                <strong>感染风险:</strong>免疫抑制增加感染几率
              </li>
              <li>
                <strong>肾上腺抑制:</strong>长期使用需逐渐减停,避免肾上腺危象
              </li>
              <li>
                <strong>其他:</strong>
                高血压、消化性溃疡、白内障、青光眼、情绪改变
              </li>
            </ul>

            <h3>使用原则</h3>
            <ol>
              <li>
                <strong>最低有效剂量,最短疗程</strong>
              </li>
              <li>局部注射优于系统给药</li>
              <li>长期使用(&gt;3个月)需补充钙剂与维生素D,预防骨质疏松</li>
              <li>定期监测血糖、血压、骨密度</li>
              <li>减停需逐渐减量,避免反跳现象</li>
            </ol>
          </div>
        </section>

        {/* JAK Inhibitors */}
        <section className="mb-xl">
          <h2 className="mb-md">JAK抑制剂</h2>

          <div className="prose">
            <p>
              JAK(Janus激酶)抑制剂是新兴的口服小分子药物,通过抑制JAK-STAT信号通路,阻断多种促炎细胞因子(IL-6、IL-23、IL-17、IFN-γ等)的信号转导。
            </p>

            <h3>代表药物</h3>
            <ul>
              <li>
                <strong>托法替布(Tofacitinib):</strong>JAK1/3抑制剂,5-10mg,每日2次
              </li>
              <li>
                <strong>乌帕替尼(Upadacitinib):</strong>
                选择性JAK1抑制剂,15mg,每日1次
              </li>
              <li>
                <strong>巴瑞替尼(Baricitinib):</strong>JAK1/2抑制剂,4mg,每日1次
              </li>
            </ul>

            <h3>疗效</h3>
            <p>
              III期临床试验显示JAK抑制剂对AS的短期疗效良好,但长期疗效和安全性数据仍在积累中。
            </p>

            <h3>安全性考量</h3>
            <h4 className="text-error-600">类属安全性信号(需特别关注)</h4>
            <ul>
              <li>
                <strong>感染风险:</strong>严重感染(包括结核、带状疱疹)风险增加
              </li>
              <li>
                <strong>实验室异常:</strong>
                血脂升高、肝酶升高、血细胞计数变化(淋巴细胞、中性粒细胞、血红蛋白)
              </li>
              <li>
                <strong>心血管事件:</strong>
                部分研究显示主要心血管不良事件(MACE)风险可能增加,特别是高风险人群
              </li>
              <li>
                <strong>血栓栓塞:</strong>
                深静脉血栓(DVT)、肺栓塞(PE)风险增加(特别是高龄、肥胖、有血栓史患者)
              </li>
              <li>
                <strong>肿瘤风险:</strong>长期使用的恶性肿瘤风险尚需更多数据
              </li>
            </ul>

            <h4>适用人群</h4>
            <p>
              建议在获益明确且风险可控的人群中优先使用:
            </p>
            <ul>
              <li>TNF抑制剂和IL-17抑制剂失败或不耐受患者</li>
              <li>不适合或拒绝注射治疗的患者</li>
              <li>
                <strong className="text-error-600">避免:</strong>
                高心血管风险、活动性恶性肿瘤、血栓栓塞史患者
              </li>
            </ul>

            <h4>监测要求</h4>
            <ul>
              <li>
                <strong>基线:</strong>结核筛查、肝炎病毒筛查、血常规、肝肾功能、血脂
              </li>
              <li>
                <strong>随访:</strong>
                每4-12周监测血常规、肝功能、血脂;定期评估感染风险与心血管风险
              </li>
            </ul>
          </div>
        </section>

        {/* Treatment Algorithm */}
        <section className="mb-xl">
          <h2 className="mb-md">治疗算法与序贯策略</h2>

          <div className="prose mb-md">
            <p>
              AS的治疗遵循
              <strong className="text-primary-500">阶梯式升级</strong>
              原则,根据疾病活动度、治疗反应和合并症个体化选择。
            </p>
          </div>

          <h4 className="mb-sm">AS治疗算法</h4>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>治疗阶段</TableHead>
                <TableHead>药物选择</TableHead>
                <TableHead>适应条件</TableHead>
                <TableHead>目标</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <strong>一线治疗</strong>
                </TableCell>
                <TableCell>NSAIDs + 运动康复</TableCell>
                <TableCell>新诊断或轻-中度活动</TableCell>
                <TableCell>症状控制,维持功能</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <strong>二线治疗</strong>
                </TableCell>
                <TableCell>
                  生物制剂(TNF抑制剂或IL-17抑制剂)
                  <br />
                  ± NSAIDs
                </TableCell>
                <TableCell>
                  NSAIDs无效/不耐受
                  <br />
                  高疾病活动度(BASDAI≥4, ASDAS≥2.1)
                  <br />
                  外周关节炎
                </TableCell>
                <TableCell>疾病缓解(ASDAS&lt;1.3)或低疾病活动度</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <strong>生物制剂选择</strong>
                </TableCell>
                <TableCell>
                  TNF抑制剂(优先)
                  <br />
                  或IL-17抑制剂
                </TableCell>
                <TableCell>
                  伴葡萄膜炎/IBD → TNF抑制剂
                  <br />
                  伴银屑病 → IL-17抑制剂或TNF抑制剂
                  <br />
                  无特殊合并症 → 任选
                </TableCell>
                <TableCell>个体化选择,兼顾合并症</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <strong>生物制剂失败</strong>
                </TableCell>
                <TableCell>
                  转换至另一TNF抑制剂
                  <br />
                  或转换至IL-17抑制剂
                  <br />
                  或JAK抑制剂(特定情况)
                </TableCell>
                <TableCell>
                  首个生物制剂12-16周无效或继发失效
                  <br />
                  不良反应不可耐受
                </TableCell>
                <TableCell>恢复疾病控制</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <strong>外周关节炎为主</strong>
                </TableCell>
                <TableCell>
                  cDMARDs(柳氮磺吡啶)
                  <br />
                  或生物制剂
                </TableCell>
                <TableCell>外周关节炎突出,轴性症状轻微</TableCell>
                <TableCell>控制外周关节炎症</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <strong>难治性/D2M表型</strong>
                </TableCell>
                <TableCell>
                  多学科协作
                  <br />
                  策略性调整(联合用药、剂量优化)
                  <br />
                  新型靶向药物(临床试验)
                </TableCell>
                <TableCell>
                  多个生物制剂失败
                  <br />
                  持续高疾病活动度
                </TableCell>
                <TableCell>最大程度改善疾病控制与生活质量</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <div className="prose mt-md">
            <h3>生物制剂间转换策略</h3>
            <ul>
              <li>
                <strong>TNF抑制剂原发失效:</strong>
                转换至IL-17抑制剂(机制不同,疗效可能更好)
              </li>
              <li>
                <strong>TNF抑制剂继发失效:</strong>
                可转换至另一TNF抑制剂或IL-17抑制剂
              </li>
              <li>
                <strong>IL-17抑制剂失效:</strong>转换至TNF抑制剂或JAK抑制剂
              </li>
              <li>
                <strong>不良反应:</strong>
                根据不良反应类型选择不同机制药物(如注射部位反应严重→转换为静脉输注或口服药物)
              </li>
            </ul>

            <h3>达标治疗(Treat-to-Target)</h3>
            <p>
              <strong className="text-primary-500">治疗目标:</strong>
            </p>
            <ul>
              <li>
                <strong>理想目标:</strong>疾病缓解(ASDAS &lt; 1.3)
              </li>
              <li>
                <strong>可接受目标:</strong>低疾病活动度(ASDAS 1.3-2.1)
              </li>
              <li>
                <strong>评估频率:</strong>每3-6个月评估疾病活动度
              </li>
              <li>
                <strong>治疗调整:</strong>
                若3-6个月未达标,需调整治疗方案(剂量优化、转换药物)
              </li>
            </ul>
          </div>
        </section>

        {/* Safety Management */}
        <section className="mb-xl">
          <h2 className="mb-md">安全性管理与监测</h2>

          <h4 className="mb-sm">各类药物安全性监测要点</h4>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>药物类别</TableHead>
                <TableHead>主要风险</TableHead>
                <TableHead>监测项目</TableHead>
                <TableHead>监测频率</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>NSAIDs</TableCell>
                <TableCell>GI出血、心血管事件、肾损伤</TableCell>
                <TableCell>血压、肌酐、大便潜血</TableCell>
                <TableCell>高风险者每3-6个月</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>TNF抑制剂</TableCell>
                <TableCell>感染(TB、HBV)、脱髓鞘、心衰</TableCell>
                <TableCell>
                  基线:TB筛查、肝炎筛查、胸片
                  <br />
                  随访:感染症状监测
                </TableCell>
                <TableCell>
                  基线必查
                  <br />
                  随访:每6-12个月或出现症状时
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>IL-17抑制剂</TableCell>
                <TableCell>真菌感染、IBD加重(罕见)</TableCell>
                <TableCell>黏膜念珠菌病监测、IBD症状</TableCell>
                <TableCell>出现症状时</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>cDMARDs</TableCell>
                <TableCell>肝毒性、骨髓抑制</TableCell>
                <TableCell>血常规、肝功能</TableCell>
                <TableCell>
                  初期:每2-4周
                  <br />
                  稳定:每3个月
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>糖皮质激素(长期)</TableCell>
                <TableCell>骨质疏松、代谢异常、感染</TableCell>
                <TableCell>血糖、血压、骨密度</TableCell>
                <TableCell>
                  血糖/血压:每3个月
                  <br />
                  骨密度:每12个月
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>JAK抑制剂</TableCell>
                <TableCell>感染、血栓、MACE、实验室异常</TableCell>
                <TableCell>
                  血常规、肝功能、血脂、TB筛查、心血管风险评估
                </TableCell>
                <TableCell>
                  基线必查
                  <br />
                  随访:每4-12周
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        {/* Special Populations */}
        <section className="mb-xl">
          <h2 className="mb-md">特殊人群用药</h2>

          <div className="prose">
            <h3>妊娠期与哺乳期</h3>
            <h4>可用药物</h4>
            <ul>
              <li>
                <strong>NSAIDs:</strong>
                孕早期和孕晚期避免使用,孕中期短期使用可能相对安全
              </li>
              <li>
                <strong>TNF抑制剂(部分):</strong>
                赛妥珠单抗(Fc段缺失,胎盘转运少)相对安全;英夫利昔单抗、阿达木单抗需在孕晚期停药
              </li>
              <li>
                <strong>柳氮磺吡啶:</strong>妊娠期B类,需补充叶酸
              </li>
              <li>
                <strong>糖皮质激素(小剂量):</strong>
                泼尼松≤20mg/天,但需警惕妊娠期糖尿病、高血压
              </li>
            </ul>

            <h4 className="text-error-600">禁用药物</h4>
            <ul>
              <li>
                <strong>甲氨蝶呤:</strong>强致畸性,妊娠禁用,孕前3个月停药
              </li>
              <li>
                <strong>来氟米特:</strong>强致畸性,需清除药物后方可妊娠
              </li>
              <li>
                <strong>JAK抑制剂:</strong>妊娠期安全性数据不足,避免使用
              </li>
            </ul>

            <h3>老年患者</h3>
            <ul>
              <li>NSAIDs使用需特别谨慎,心血管、胃肠道、肾脏风险增加</li>
              <li>生物制剂相对安全,但需密切监测感染风险</li>
              <li>糖皮质激素增加骨质疏松、骨折风险,尽量避免</li>
              <li>定期评估肾功能、心血管状态</li>
            </ul>

            <h3>儿童与青少年</h3>
            <ul>
              <li>
                NSAIDs可用,但需注意胃肠道保护与肾功能监测
              </li>
              <li>
                TNF抑制剂(如依那西普、阿达木单抗)在青少年AS中有循证证据支持
              </li>
              <li>IL-17抑制剂在儿童中的数据有限</li>
              <li>甲氨蝶呤、柳氮磺吡啶可用于外周关节炎,需密切监测</li>
            </ul>
          </div>
        </section>

        {/* Summary */}
        <section className="bg-neutral-100 p-lg rounded-sm">
          <h2 className="mb-md">总结与临床启示</h2>
          <div className="prose">
            <ol className="text-body-lg">
              <li>
                <strong>NSAIDs是基础:</strong>
                规律使用,个体化风险管理,是症状控制的第一步
              </li>
              <li>
                <strong>生物制剂是关键:</strong>
                TNF抑制剂和IL-17抑制剂显著改善疾病活动度,延缓进展
              </li>
              <li>
                <strong>个体化选择:</strong>
                根据合并症(葡萄膜炎/IBD/银屑病)、治疗反应、患者偏好选择药物
              </li>
              <li>
                <strong>达标治疗:</strong>
                定期评估疾病活动度,未达标及时调整方案
              </li>
              <li>
                <strong>安全性优先:</strong>
                基线筛查、定期监测、及时处理不良反应
              </li>
              <li>
                <strong>多学科协作:</strong>
                风湿科、眼科、消化科、皮肤科联合管理合并症
              </li>
              <li>
                <strong>非药物治疗不可忽视:</strong>
                运动康复、物理治疗、心理支持是综合治疗的重要组成
              </li>
            </ol>

            <p className="text-body-lg font-semibold text-primary-700 mt-md">
              早期诊断、早期治疗、规范用药、长期随访,是改善AS患者预后和生活质量的关键。
            </p>
          </div>
        </section>
      </ContentBlock>
    </article>
  )
}
