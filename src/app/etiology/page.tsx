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
  title: '病因与发病机制',
  description:
    'HLA-B27遗传因素、环境触发、免疫异常与炎症通路的深度解析',
}

export default function EtiologyPage() {
  return (
    <article className="py-3xl">
      <ContentBlock>
        {/* Page Title */}
        <header className="mb-xl">
          <h1 className="mb-md">强直性脊柱炎病因与发病机制</h1>
          <p className="text-body-lg text-neutral-700 leading-relaxed">
            强直性脊柱炎(AS)是一种慢性炎症性疾病,主要影响脊柱和骶髂关节。本页面系统介绍AS的遗传因素、环境触发、免疫异常与炎症通路,帮助您深入理解疾病的发生机制。
          </p>
        </header>

        {/* Section 1: 遗传因素 */}
        <section className="mb-xl">
          <h2 className="mb-md">遗传因素与易感性</h2>

          <div className="prose mb-md">
            <p>
              AS的遗传度较高,家族聚集性明显。同卵双胞胎一致性约50%,直系亲属风险可增加10-20倍。
              <strong className="text-primary-500">
                人类白细胞抗原B27(HLA-B27)
              </strong>
              是与AS最强的遗传关联,白人AS患者中90%以上携带HLA-B27。
            </p>
            <p>
              然而,普通人群中约10%携带HLA-B27,但仅1%-5%的携带者发病,表明HLA-B27是必要但非充分条件,存在其他易感因子与触发因素共同作用。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl mb-md">
            <div>
              <h3 className="mb-sm">HLA-B27致病机制</h3>
              <div className="prose">
                <ul>
                  <li>
                    <strong>分子模拟:</strong>
                    细菌抗原肽与宿主肽段序列相似,引发T细胞交叉反应
                  </li>
                  <li>
                    <strong>错误折叠/内质网应激:</strong>
                    HLA-B27重链易形成异常二聚体,诱发炎症级联
                  </li>
                  <li>
                    <strong>抗原呈递异常:</strong>
                    影响免疫细胞识别和激活过程
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <ImageViewer
                src="/imgs/hla_b27_genetic_factor.png"
                alt="HLA-B27遗传因素示意图"
                width={800}
                height={600}
                caption="HLA-B27在AS发病机制中的作用"
              />
            </div>
          </div>

          <h4 className="mb-sm">不同族群HLA-B27携带率对比</h4>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>人群/地区</TableHead>
                <TableHead align="right">AS患者阳性率</TableHead>
                <TableHead align="right">普通人群携带率</TableHead>
                <TableHead>说明</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>白人</TableCell>
                <TableCell align="right">&gt;90%</TableCell>
                <TableCell align="right">~10%</TableCell>
                <TableCell>强关联;仅1%-5%携带者发病</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>东亚(中国、韩国)</TableCell>
                <TableCell align="right">&gt;80%</TableCell>
                <TableCell align="right">4%-8%</TableCell>
                <TableCell>
                  HLA-C*15、B*40显示较强关联;HLA-B60/61在B27阴性者中贡献风险
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>其他族群</TableCell>
                <TableCell align="right">变动较大</TableCell>
                <TableCell align="right">变动较大</TableCell>
                <TableCell>需更多跨族群研究</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <div className="prose mt-md">
            <h4>非MHC易感基因</h4>
            <p>
              全基因组关联研究(GWAS)已识别逾110个易感位点,集中于:
            </p>
            <ul>
              <li>
                <strong>ERAP1、ERAP2:</strong>
                内质网氨基肽酶,影响肽段修剪与呈递质量
              </li>
              <li>
                <strong>IL-23/IL-17轴相关基因:</strong>
                提升黏膜与系统性免疫活化风险
              </li>
              <li>
                <strong>模式识别受体(TLR、NLR):</strong>
                参与先天免疫激活
              </li>
            </ul>
          </div>
        </section>

        {/* Section 2: 环境触发因素 */}
        <section className="mb-xl">
          <h2 className="mb-md">环境触发因素与肠-关节轴</h2>

          <div className="prose mb-md">
            <p>
              遗传易感个体在环境触发下发病。感染与微生物群改变是重要的上游触发因素,与HLA-B27及先天免疫系统相互作用,形成
              <strong className="text-primary-500">"肠-关节轴"</strong>
              免疫代谢通路。
            </p>
          </div>

          <h3 className="mb-sm">肠道微生物群失调</h3>
          <div className="prose mb-md">
            <p>AS患者肠道微生物群呈现显著失调:</p>
            <ul>
              <li>α多样性下降,群落组成改变</li>
              <li>厚壁菌门/拟杆菌门(F/B)比值上升</li>
              <li>产短链脂肪酸(SCFAs)菌群减少</li>
              <li>潜在致病菌(如Klebsiella、Prevotella copri)增多</li>
            </ul>
            <p>
              这种生态失衡导致肠屏障功能受损、通透性增加,细菌成分穿越黏膜屏障,激活免疫并放大系统性炎症。
            </p>
          </div>

          <h4 className="mb-sm">
            AS肠道微生物群多样性Meta分析(47项研究、2,494例AS vs 1,885例对照)
          </h4>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>指标</TableHead>
                <TableHead align="center">效应量(SMD, 95%CI)</TableHead>
                <TableHead align="center">异质性(I²)</TableHead>
                <TableHead>解释</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>α多样性(Shannon指数)</TableCell>
                <TableCell align="center">-0.27(-0.49, -0.04)</TableCell>
                <TableCell align="center">85.6%</TableCell>
                <TableCell>AS显著下降,提示生态失衡</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>α多样性(Chao1指数)</TableCell>
                <TableCell align="center">-0.44(-0.80, -0.07)</TableCell>
                <TableCell align="center">80.3%</TableCell>
                <TableCell>物种丰富度降低</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>α多样性(Simpson指数)</TableCell>
                <TableCell align="center">-0.30(-0.53, -0.06)</TableCell>
                <TableCell align="center">76.2%</TableCell>
                <TableCell>群落均匀度降低</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Bifidobacterium</TableCell>
                <TableCell align="center">-0.42(方向性变化)</TableCell>
                <TableCell align="center">—</TableCell>
                <TableCell>常见有益菌减少</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Bacteroidetes</TableCell>
                <TableCell align="center">+0.42(方向性变化)</TableCell>
                <TableCell align="center">—</TableCell>
                <TableCell>门水平上升</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>F/B比值</TableCell>
                <TableCell align="center">上升</TableCell>
                <TableCell align="center">—</TableCell>
                <TableCell>与炎症与代谢改变相关</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <h3 className="mt-lg mb-sm">环境触发因素与证据强度</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>触发因素</TableHead>
                <TableHead>证据类型</TableHead>
                <TableHead>主要结论</TableHead>
                <TableHead align="center">证据强度</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>感染(总体)</TableCell>
                <TableCell>系统综述/Meta</TableCell>
                <TableCell>感染显著增加AS风险</TableCell>
                <TableCell align="center">
                  <span className="text-success-600 font-semibold">高</span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>念珠菌感染</TableCell>
                <TableCell>队列/病例对照</TableCell>
                <TableCell>多年后AS风险升高,独立风险因子</TableCell>
                <TableCell align="center">
                  <span className="text-warning-600 font-semibold">中</span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>肠道菌群失调</TableCell>
                <TableCell>系统综述/Meta/多组学</TableCell>
                <TableCell>
                  α多样性下降、组成改变、F/B比值上升;代谢物调控免疫
                </TableCell>
                <TableCell align="center">
                  <span className="text-success-600 font-semibold">高</span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>吸烟</TableCell>
                <TableCell>观察性/MR/会议报道</TableCell>
                <TableCell>增加发病与进展风险,影响疾病活动</TableCell>
                <TableCell align="center">
                  <span className="text-success-600 font-semibold">中-高</span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>职业体力负荷/振动</TableCell>
                <TableCell>回顾性/前瞻性队列</TableCell>
                <TableCell>与影像学进展相关;胸腰段易感性突出</TableCell>
                <TableCell align="center">
                  <span className="text-warning-600 font-semibold">中</span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>心理压力</TableCell>
                <TableCell>横断面研究</TableCell>
                <TableCell>抑郁/焦虑/压力与疾病负担相关</TableCell>
                <TableCell align="center">
                  <span className="text-warning-600 font-semibold">低-中</span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        {/* Section 3: 免疫系统异常 */}
        <section className="mb-xl">
          <h2 className="mb-md">免疫系统异常</h2>

          <div className="prose mb-md">
            <p>
              AS既具有自身免疫特征,也呈现强烈的自身炎症性质。先天免疫与适应性免疫共同参与,形成"免疫稳态破裂—慢性炎症—组织重塑"的核心病理环路。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-lg mb-md">
            <div className="prose">
              <h3>先天免疫异常</h3>
              <ul>
                <li>
                  <strong>模式识别受体(TLR、NLR):</strong>
                  感知病原分子,引发巨噬细胞、树突状细胞活化
                </li>
                <li>
                  <strong>促炎细胞因子:</strong>
                  释放TNF-α、IL-1β、IL-6与IL-23
                </li>
                <li>
                  <strong>内质网应激:</strong>
                  HLA-B27错误折叠增强炎症级联
                </li>
                <li>
                  <strong>补体系统:</strong>参与黏膜防御与炎症调节
                </li>
              </ul>
            </div>

            <div className="prose">
              <h3>适应性免疫异常</h3>
              <ul>
                <li>
                  <strong>Th17细胞:</strong>
                  通过IL-17、IL-22驱动炎症与上皮防御
                </li>
                <li>
                  <strong>Treg功能不足:</strong>
                  免疫抑制减弱,失衡导致慢性炎症
                </li>
                <li>
                  <strong>其他免疫细胞:</strong>
                  γδT细胞、MAIT细胞、ILC3、NK细胞贡献IL-17产生
                </li>
                <li>
                  <strong>自身抗体:</strong>
                  针对CD74等自身抗原的抗体
                </li>
              </ul>
            </div>
          </div>

          <h4 className="mb-sm">免疫细胞异常汇总</h4>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>免疫细胞类型</TableHead>
                <TableHead>AS中的主要变化</TableHead>
                <TableHead>功能意义</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Th17细胞</TableCell>
                <TableCell>数量增加,IL-17/IL-22分泌增强</TableCell>
                <TableCell>驱动炎症与组织损伤</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Treg细胞</TableCell>
                <TableCell>功能受损,抑制能力下降</TableCell>
                <TableCell>免疫稳态失衡</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>NK细胞</TableCell>
                <TableCell>CD56bright增加,CD56dim减少</TableCell>
                <TableCell>细胞毒性功能下降</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>γδT细胞</TableCell>
                <TableCell>IL-17产生增加</TableCell>
                <TableCell>先天免疫样炎症反应</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>巨噬细胞</TableCell>
                <TableCell>M1型极化,促炎因子释放</TableCell>
                <TableCell>维持慢性炎症微环境</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        {/* Section 4: 炎症通路 */}
        <section className="mb-xl">
          <h2 className="mb-md">炎症通路与分子机制</h2>

          <div className="prose mb-md">
            <p>
              AS的炎症通路以
              <strong className="text-primary-500">IL-23/IL-17轴</strong>
              和
              <strong className="text-primary-500">TNF-α通路</strong>
              为核心,驱动慢性炎症与骨破坏。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl mb-md">
            <div>
              <ImageViewer
                src="/imgs/inflammation_pathway.png"
                alt="AS炎症通路示意图"
                width={800}
                height={600}
                caption="IL-23/IL-17轴与TNF-α通路在AS中的作用"
              />
            </div>

            <div className="prose">
              <h3>IL-23/IL-17轴</h3>
              <ol>
                <li>
                  <strong>IL-23产生:</strong>
                  树突状细胞、巨噬细胞在病原刺激下分泌IL-23
                </li>
                <li>
                  <strong>Th17分化:</strong>IL-23促进Th17细胞分化与扩增
                </li>
                <li>
                  <strong>IL-17释放:</strong>
                  Th17细胞分泌IL-17A、IL-17F、IL-22
                </li>
                <li>
                  <strong>组织效应:</strong>
                  IL-17诱导成纤维细胞、上皮细胞产生趋化因子、基质金属蛋白酶(MMP),招募中性粒细胞,放大炎症
                </li>
              </ol>

              <h3>TNF-α通路</h3>
              <ul>
                <li>
                  <strong>多源产生:</strong>
                  巨噬细胞、T细胞、肥大细胞分泌TNF-α
                </li>
                <li>
                  <strong>多重效应:</strong>
                  激活内皮细胞,上调粘附分子,促进白细胞浸润
                </li>
                <li>
                  <strong>炎症放大:</strong>诱导IL-1、IL-6等细胞因子级联
                </li>
                <li>
                  <strong>骨代谢:</strong>调节破骨细胞与成骨细胞活性
                </li>
              </ul>
            </div>
          </div>

          <h4 className="mb-sm">关键炎症分子与治疗靶点</h4>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>炎症分子</TableHead>
                <TableHead>主要来源</TableHead>
                <TableHead>病理作用</TableHead>
                <TableHead>对应治疗靶点</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>TNF-α</TableCell>
                <TableCell>巨噬细胞、T细胞</TableCell>
                <TableCell>促炎症、血管生成、骨破坏</TableCell>
                <TableCell>TNF抑制剂(英夫利昔单抗等)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>IL-23</TableCell>
                <TableCell>树突状细胞、巨噬细胞</TableCell>
                <TableCell>促Th17分化,上游调控</TableCell>
                <TableCell>IL-23抑制剂(古塞库单抗)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>IL-17A</TableCell>
                <TableCell>Th17细胞、γδT细胞</TableCell>
                <TableCell>诱导趋化因子、MMP,招募中性粒细胞</TableCell>
                <TableCell>IL-17抑制剂(司库奇尤单抗)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>IL-1β</TableCell>
                <TableCell>巨噬细胞、炎症小体</TableCell>
                <TableCell>先天免疫激活,发热、疼痛</TableCell>
                <TableCell>IL-1抑制剂(阿那白滞素)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>IL-6</TableCell>
                <TableCell>多种免疫与基质细胞</TableCell>
                <TableCell>急性期反应,促Th17分化</TableCell>
                <TableCell>IL-6受体抑制剂(托珠单抗)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        {/* Section 5: 疾病进展 */}
        <section className="mb-xl">
          <h2 className="mb-md">疾病进展与炎症-骨化轴</h2>

          <div className="prose mb-md">
            <p>
              AS的病程特点是
              <strong className="text-primary-500">
                炎症期与骨化期的动态演进
              </strong>
              。早期以炎症为主,晚期以异常骨形成(新骨生成、骨桥形成)和骨质疏松并存为特征。
            </p>
          </div>

          <h3 className="mb-sm">炎症-骨化时间线</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>疾病阶段</TableHead>
                <TableHead>时间范围</TableHead>
                <TableHead>主要病理特征</TableHead>
                <TableHead>临床表现</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>早期炎症期</TableCell>
                <TableCell>起病0-5年</TableCell>
                <TableCell>
                  骶髂关节炎、附着点炎、滑膜炎;骨髓水肿、软骨侵蚀
                </TableCell>
                <TableCell>
                  炎性腰背痛、晨僵、夜间痛;BASDAI/ASDAS升高
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>炎症-骨化过渡期</TableCell>
                <TableCell>5-10年</TableCell>
                <TableCell>
                  炎症持续,附着点骨化启动;韧带骨化、骨膜新骨形成
                </TableCell>
                <TableCell>
                  疼痛波动,活动受限加重;影像学出现早期骨桥
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>晚期骨化期</TableCell>
                <TableCell>&gt;10-20年</TableCell>
                <TableCell>
                  广泛韧带骨化、椎体间骨桥形成、关节融合;"竹节样脊柱"
                </TableCell>
                <TableCell>
                  活动度丧失,脊柱僵硬;疼痛可能减轻但功能障碍严重
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>并发症期</TableCell>
                <TableCell>任何阶段</TableCell>
                <TableCell>骨质疏松、骨折、心血管并发症</TableCell>
                <TableCell>脆性骨折、心脏传导阻滞、主动脉瓣关闭不全</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <div className="prose mt-md">
            <h3>炎症-骨化的分子机制</h3>
            <ul>
              <li>
                <strong>Wnt信号通路:</strong>
                调控成骨细胞分化与骨形成,在附着点异常激活
              </li>
              <li>
                <strong>BMP(骨形态发生蛋白):</strong>
                诱导间充质干细胞向成骨方向分化
              </li>
              <li>
                <strong>机械应力:</strong>
                附着点受力集中,微损伤触发炎症-修复-骨化循环
              </li>
              <li>
                <strong>DKK-1与sclerostin:</strong>
                Wnt抑制因子水平下降,失去对异常骨形成的制动
              </li>
            </ul>
            <p>
              <strong className="text-warning-600">临床意义:</strong>
              早期抗炎治疗(TNF抑制剂、IL-17抑制剂)可控制炎症,但对已形成的骨桥无逆转作用。因此,早诊断、早治疗至关重要。
            </p>
          </div>
        </section>

        {/* Summary */}
        <section className="bg-neutral-100 p-lg rounded-sm">
          <h2 className="mb-md">整合模型与临床启示</h2>
          <div className="prose">
            <p>
              AS的发病是
              <strong className="text-primary-500">
                "多重打击"模型
              </strong>
              的典型案例:
            </p>
            <ol>
              <li>
                <strong>遗传易感(第一击):</strong>
                HLA-B27及非MHC基因变异奠定免疫异常基础
              </li>
              <li>
                <strong>环境触发(第二击):</strong>
                感染、肠道菌群失调、吸烟、机械应力等触发免疫激活
              </li>
              <li>
                <strong>免疫失衡(第三击):</strong>
                先天与适应性免疫过度激活,Th17/Treg失衡
              </li>
              <li>
                <strong>炎症放大(第四击):</strong>
                IL-23/IL-17与TNF-α通路形成正反馈,慢性炎症持续
              </li>
              <li>
                <strong>组织重塑(第五击):</strong>
                炎症-骨化轴启动,异常骨形成与骨质疏松并存
              </li>
            </ol>
            <p className="text-body-lg font-semibold text-primary-700 mt-md">
              临床启示:早期识别高危人群(HLA-B27阳性+家族史+环境因素),早期干预炎症通路,可能延缓或阻止不可逆的结构损伤。
            </p>
          </div>
        </section>
      </ContentBlock>
    </article>
  )
}
