import { Metadata } from 'next'
import { ContentBlock } from '@/components/ui/ContentBlock'
import { ImageViewer } from '@/components/media/ImageViewer'
import { VideoPlayer } from '@/components/media/VideoPlayer'
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui/Table'

export const metadata: Metadata = {
  title: '运动康复训练',
  description: '科学的康复训练方案,包括呼吸训练、脊柱伸展、姿势矫正、关节活动度训练和水中运动',
}

export default function RehabilitationPage() {
  return (
    <article className="py-3xl">
      <ContentBlock>
        {/* Page Title */}
        <header className="mb-xl">
          <h1 className="mb-md">强直性脊柱炎运动康复训练</h1>
          <p className="text-body-lg text-neutral-700 leading-relaxed">
            运动康复是AS综合管理的不可替代基石。本页面提供循证的运动处方,包括呼吸训练、脊柱伸展、姿势矫正、关节活动度训练和水中运动,帮助您维持功能、改善姿势、提升生活质量。
          </p>
        </header>

        {/* Executive Summary */}
        <section className="bg-primary-50 p-lg rounded-sm mb-xl">
          <h2 className="mb-md">核心结论与建议</h2>
          <div className="prose">
            <ul>
              <li>
                <strong>运动总体有效:</strong>
                与无干预相比,运动可中等程度改善功能与疼痛,降低疾病活动度,安全性良好
              </li>
              <li>
                <strong>监督群体运动优于居家:</strong>
                在医疗专业人员监督下的群体运动效果更显著
              </li>
              <li>
                <strong>呼吸训练是必需模块:</strong>
                多达1/3的AS患者存在胸部扩张受限,深呼吸与胸廓扩展训练应作为基础干预
              </li>
              <li>
                <strong>水中运动有独特优势:</strong>
                在疼痛与生活质量改善方面效果良好,适用于疼痛显著或负重困难者
              </li>
              <li>
                <strong>康复目标:</strong>
                减轻疼痛与晨僵 → 维持/改善脊柱活动度 → 增强核心稳定性 → 提升呼吸能力 → 促进功能独立
              </li>
            </ul>
          </div>
        </section>

        {/* Importance of Rehabilitation */}
        <section className="mb-xl">
          <h2 className="mb-md">康复的重要性</h2>

          <div className="prose mb-md">
            <p>
              AS的病理特征为中轴骨骼的慢性炎症,常累及骶髂关节与脊柱。炎症修复过程中新骨形成可导致椎体间桥接与强直。
              <strong className="text-primary-500">
                药物治疗改善疾病活动度,但运动康复在维持功能、姿势与呼吸能力方面不可替代。
              </strong>
            </p>

            <h3>临床表现与功能影响</h3>
            <ul>
              <li>炎性腰背痛、晨僵和进行性活动受限</li>
              <li>胸廓受累时,肋椎关节僵硬限制胸部扩张,影响呼吸效率</li>
              <li>
                随疾病进展,可能出现胸椎后凸增加、颈前伸与骨盆前倾等姿势改变
              </li>
            </ul>
          </div>

          <h4 className="mb-sm">物理治疗干预疗效汇总</h4>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>干预类型</TableHead>
                <TableHead>频次/时长</TableHead>
                <TableHead>持续时间</TableHead>
                <TableHead>主要结局</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>个体化居家运动</TableCell>
                <TableCell>每日约30分钟</TableCell>
                <TableCell>2-6个月</TableCell>
                <TableCell>
                  疼痛、功能与疾病活动度较无干预改善;脊柱活动度改善5-50%
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>监督群体运动</TableCell>
                <TableCell>每周1次,1小时体能+水中运动</TableCell>
                <TableCell>3周-9个月</TableCell>
                <TableCell>
                  脊柱活动度相对提升约7.5-18%;患者整体评估改善约1.46cm
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>水疗-运动联合</TableCell>
                <TableCell>
                  集体体能、步行、矫正、水中运动、体育、桑拿
                </TableCell>
                <TableCell>3周住院+37周门诊</TableCell>
                <TableCell>
                  疼痛改善约18%;功能改善约24%;患者整体评估改善约27%
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>综合运动项目</TableCell>
                <TableCell>每周约3次,单次约60分钟</TableCell>
                <TableCell>中位12周</TableCell>
                <TableCell>
                  vs无干预:功能-1.3、疼痛-2.1、疾病活动度-0.9;安全性良好
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        {/* Breathing Exercises */}
        <section className="mb-xl">
          <h2 className="mb-md">呼吸训练</h2>

          <div className="prose mb-md">
            <p>
              多达1/3的AS患者存在胸部扩张受限。
              <strong className="text-primary-500">
                深呼吸与胸廓扩展训练应作为起始即纳入的基础干预。
              </strong>
              8周吸气肌训练(IMT)可显著提升胸廓扩张、有氧能力与呼吸肌力量。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl mb-md">
            <div>
              <ImageViewer
                src="/imgs/breathing_exercise.png"
                alt="呼吸训练示意图"
                width={800}
                height={600}
                caption="深呼吸与胸廓扩展训练"
              />
            </div>
            <div>
              <VideoPlayer
                src="/videos/breathing_therapy_demo.mp4"
                poster="/imgs/breathing_exercise.png"
                caption="呼吸训练演示视频"
              />
            </div>
          </div>

          <div className="prose mb-md">
            <h3>呼吸训练方法</h3>
            <ol>
              <li>
                <strong>腹式呼吸:</strong>
                仰卧或坐位,一手放胸部,一手放腹部。缓慢深吸气,腹部隆起,胸部不动;缓慢呼气,腹部下沉。每次10-15分钟,每日2-3次。
              </li>
              <li>
                <strong>胸式深呼吸:</strong>
                站立或坐位,双手放在肋骨两侧。深吸气时感受肋骨向两侧扩张,呼气时肋骨回缩。每次10分钟,每日2次。
              </li>
              <li>
                <strong>扩胸呼吸:</strong>
                站立,双臂向两侧展开。深吸气时双臂向后展,扩张胸廓;呼气时双臂回收。重复10-15次,每日2-3组。
              </li>
              <li>
                <strong>吸气肌训练(IMT):</strong>
                使用阻力呼吸训练器,设定阻力为最大吸气压的30-40%开始。每次训练15-30次深呼吸,每日1-2次,每周5-7天。
              </li>
            </ol>

            <h3>呼吸训练注意事项</h3>
            <ul>
              <li>呼吸应缓慢、深长、有节奏,避免过度通气导致头晕</li>
              <li>急性发作期疼痛明显时,减少训练强度或暂停</li>
              <li>IMT阻力应逐渐递增,每1-2周增加5-10%</li>
              <li>持续训练至少8-12周方可见到显著效果</li>
            </ul>
          </div>

          <h4 className="mb-sm">呼吸训练处方参数</h4>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>训练类型</TableHead>
                <TableHead>强度/阻力</TableHead>
                <TableHead>频次</TableHead>
                <TableHead>周期</TableHead>
                <TableHead>预期效果</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>深呼吸训练</TableCell>
                <TableCell>无阻力,自主深呼吸</TableCell>
                <TableCell>每次10-15分钟,每日2-3次</TableCell>
                <TableCell>持续进行</TableCell>
                <TableCell>改善胸廓活动度,缓解呼吸受限</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>吸气肌训练(IMT)</TableCell>
                <TableCell>最大吸气压的30-40%起始</TableCell>
                <TableCell>每次15-30次,每日1-2次,每周5-7天</TableCell>
                <TableCell>8-12周</TableCell>
                <TableCell>
                  胸廓扩张+1.2cm,吸气肌力+26%,有氧能力提升
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>扩胸呼吸</TableCell>
                <TableCell>自主,结合上肢运动</TableCell>
                <TableCell>10-15次,每日2-3组</TableCell>
                <TableCell>持续进行</TableCell>
                <TableCell>增强胸廓扩张,改善姿势</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        {/* Spinal Extension */}
        <section className="mb-xl">
          <h2 className="mb-md">脊柱伸展训练</h2>

          <div className="prose mb-md">
            <p>
              脊柱伸展训练旨在对抗AS导致的脊柱前屈趋势,维持或改善脊柱灵活性,预防脊柱后凸畸形。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl mb-md">
            <div>
              <ImageViewer
                src="/imgs/cat_camel_exercise.png"
                alt="猫驼式伸展"
                width={800}
                height={600}
                caption="猫驼式脊柱伸展动作"
              />
            </div>
            <div>
              <VideoPlayer
                src="/videos/spinal_extension_exercise.mp4"
                poster="/imgs/cat_camel_exercise.png"
                caption="脊柱伸展训练演示"
              />
            </div>
          </div>

          <div className="prose mb-md">
            <h3>脊柱伸展动作(6个核心动作)</h3>
            <ol>
              <li>
                <strong>猫驼式(Cat-Camel):</strong>
                四肢支撑,交替拱背(猫式)和凹背(驼式)。每个方向保持5秒,重复10-15次,每日2-3组。
              </li>
              <li>
                <strong>俯卧撑式伸展(Cobra Stretch):</strong>
                俯卧,双手撑地,缓慢抬起上半身,头向后仰,伸展脊柱。保持15-30秒,重复3-5次,每日2组。
              </li>
              <li>
                <strong>仰卧胸椎伸展:</strong>
                仰卧,腰下垫泡沫轴或毛巾卷,双臂向后展开,保持10-20秒,重复5-10次。
              </li>
              <li>
                <strong>站立背部伸展:</strong>
                站立,双手放在腰部,缓慢向后仰,伸展脊柱。保持5-10秒,重复10次,每日2-3组。
              </li>
              <li>
                <strong>门框伸展:</strong>
                站在门框中,双手扶门框,身体前倾,伸展胸部和脊柱。保持15-30秒,重复3-5次。
              </li>
              <li>
                <strong>婴儿式放松(Child's
                Pose):</strong>跪坐,上身前倾,双臂前伸,放松脊柱。保持1-2分钟,用于训练后放松。
              </li>
            </ol>

            <h3>注意事项</h3>
            <ul>
              <li>动作应缓慢、受控,避免突然用力或弹震式伸展</li>
              <li>疼痛明显时停止,调整幅度或休息</li>
              <li>晨起僵硬时可先热敷5-10分钟再进行伸展</li>
              <li>长期坚持,每日至少进行1次完整训练</li>
            </ul>
          </div>

          <h4 className="mb-sm">脊柱伸展训练处方</h4>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>动作名称</TableHead>
                <TableHead>重复次数</TableHead>
                <TableHead>保持时间</TableHead>
                <TableHead>每日组数</TableHead>
                <TableHead>主要效果</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>猫驼式</TableCell>
                <TableCell>10-15次</TableCell>
                <TableCell>每个方向5秒</TableCell>
                <TableCell>2-3组</TableCell>
                <TableCell>改善脊柱灵活性,缓解僵硬</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>俯卧撑式伸展(Cobra)</TableCell>
                <TableCell>3-5次</TableCell>
                <TableCell>15-30秒</TableCell>
                <TableCell>2组</TableCell>
                <TableCell>伸展腰椎和胸椎,对抗前屈</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>仰卧胸椎伸展</TableCell>
                <TableCell>5-10次</TableCell>
                <TableCell>10-20秒</TableCell>
                <TableCell>1-2组</TableCell>
                <TableCell>改善胸椎活动度,矫正后凸</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>站立背部伸展</TableCell>
                <TableCell>10次</TableCell>
                <TableCell>5-10秒</TableCell>
                <TableCell>2-3组</TableCell>
                <TableCell>维持直立姿势,预防驼背</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>门框伸展</TableCell>
                <TableCell>3-5次</TableCell>
                <TableCell>15-30秒</TableCell>
                <TableCell>1-2组</TableCell>
                <TableCell>扩展胸廓,改善胸椎活动度</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>婴儿式放松</TableCell>
                <TableCell>1次</TableCell>
                <TableCell>1-2分钟</TableCell>
                <TableCell>1组(训练后)</TableCell>
                <TableCell>放松脊柱,缓解疲劳</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        {/* Posture Correction */}
        <section className="mb-xl">
          <h2 className="mb-md">姿势矫正与核心稳定训练</h2>

          <div className="prose mb-md">
            <p>
              AS患者常出现胸椎后凸、颈前伸、骨盆前倾等姿势改变。
              <strong className="text-primary-500">
                核心稳定训练可增强腹部和背部肌肉力量,支撑脊柱,矫正和维持良好姿势。
              </strong>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl mb-md">
            <div>
              <ImageViewer
                src="/imgs/posture_correction.png"
                alt="姿势矫正训练"
                width={800}
                height={600}
                caption="正确姿势与核心稳定训练"
              />
            </div>
            <div>
              <VideoPlayer
                src="/videos/posture_correction_training.mp4"
                poster="/imgs/posture_correction.png"
                caption="姿势矫正训练演示"
              />
            </div>
          </div>

          <div className="prose mb-md">
            <h3>核心稳定训练动作</h3>
            <ol>
              <li>
                <strong>平板支撑(Plank):</strong>
                俯卧,前臂和脚尖支撑,身体呈一条直线。保持20-60秒,重复3-5次,每日1-2组。
              </li>
              <li>
                <strong>桥式(Bridge):</strong>
                仰卧,屈膝,双脚平放,抬起臀部至肩-髋-膝呈一条直线。保持10-30秒,重复10-15次。
              </li>
              <li>
                <strong>鸟狗式(Bird Dog):</strong>
                四肢支撑,伸出对侧手臂和腿,保持平衡。每侧保持5-10秒,重复10次,每日2组。
              </li>
              <li>
                <strong>死虫式(Dead Bug):</strong>
                仰卧,双臂向上,双腿屈膝抬起。交替伸出对侧手臂和腿,保持腰部贴地。每侧10次,2-3组。
              </li>
              <li>
                <strong>侧桥(Side Plank):</strong>
                侧卧,单侧前臂支撑,身体呈一条直线。每侧保持15-30秒,重复2-3次,每日1-2组。
              </li>
            </ol>

            <h3>日常姿势管理</h3>
            <ul>
              <li>
                <strong>站姿:</strong>
                双脚与肩同宽,膝盖微屈,骨盆中立位,肩膀向后向下,下巴微收
              </li>
              <li>
                <strong>坐姿:</strong>
                腰部支撑(使用腰垫),双脚平放地面,避免长时间低头
              </li>
              <li>
                <strong>睡姿:</strong>
                使用较硬床垫,侧卧时膝间夹枕头,仰卧时颈下放小枕头
              </li>
              <li>
                <strong>工作姿势:</strong>
                电脑屏幕与眼睛平齐,每30-60分钟起身活动5分钟
              </li>
            </ul>
          </div>

          <h4 className="mb-sm">核心稳定训练处方</h4>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>动作名称</TableHead>
                <TableHead>保持时间/重复</TableHead>
                <TableHead>每日组数</TableHead>
                <TableHead>难度进阶</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>平板支撑</TableCell>
                <TableCell>20-60秒,3-5次</TableCell>
                <TableCell>1-2组</TableCell>
                <TableCell>初级20秒 → 中级40秒 → 高级60秒</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>桥式</TableCell>
                <TableCell>10-30秒,10-15次</TableCell>
                <TableCell>1-2组</TableCell>
                <TableCell>双腿桥式 → 单腿桥式</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>鸟狗式</TableCell>
                <TableCell>5-10秒/侧,10次/侧</TableCell>
                <TableCell>2组</TableCell>
                <TableCell>静态 → 动态交替</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>死虫式</TableCell>
                <TableCell>10次/侧</TableCell>
                <TableCell>2-3组</TableCell>
                <TableCell>慢速 → 快速,增加重复次数</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>侧桥</TableCell>
                <TableCell>15-30秒/侧,2-3次/侧</TableCell>
                <TableCell>1-2组</TableCell>
                <TableCell>膝支撑 → 脚支撑 → 加抬腿</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        {/* ROM Training */}
        <section className="mb-xl">
          <h2 className="mb-md">关节活动度(ROM)训练</h2>

          <div className="prose mb-md">
            <p>
              关节活动度训练旨在维持和改善脊柱、髋关节、肩关节等关节的灵活性,预防关节僵硬和活动受限。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl mb-md">
            <div>
              <ImageViewer
                src="/imgs/joint_mobility_exercise.png"
                alt="关节活动度训练"
                width={800}
                height={600}
                caption="关节活动度训练动作"
              />
            </div>
            <div>
              <VideoPlayer
                src="/videos/joint_mobility_training.mp4"
                poster="/imgs/joint_mobility_exercise.png"
                caption="关节活动度训练演示"
              />
            </div>
          </div>

          <div className="prose mb-md">
            <h3>关节活动度训练动作</h3>

            <h4>颈椎活动度</h4>
            <ul>
              <li>
                <strong>颈部前屈/后伸:</strong>
                缓慢低头(下巴靠近胸部)和仰头,各保持5秒,重复10次
              </li>
              <li>
                <strong>颈部侧屈:</strong>
                头向左/右侧倾(耳朵靠近肩膀),保持5秒,重复10次/侧
              </li>
              <li>
                <strong>颈部旋转:</strong>转头向左/右看,保持5秒,重复10次/侧
              </li>
            </ul>

            <h4>脊柱活动度</h4>
            <ul>
              <li>
                <strong>脊柱侧屈:</strong>
                站立,单手向上伸展,身体向对侧弯曲,保持10秒,重复5次/侧
              </li>
              <li>
                <strong>脊柱旋转:</strong>
                坐位,双手抱胸,旋转上半身向左/右,保持5-10秒,重复10次/侧
              </li>
            </ul>

            <h4>髋关节活动度</h4>
            <ul>
              <li>
                <strong>髋屈曲:</strong>仰卧,屈膝抱腿靠近胸部,保持15-30秒,重复5次
              </li>
              <li>
                <strong>髋外展:</strong>侧卧,上腿向上抬起,保持5秒,重复10-15次/侧
              </li>
              <li>
                <strong>髋旋转:</strong>
                坐位,脚踝放在对侧膝上,轻压膝盖向下,保持15-30秒,重复3-5次/侧
              </li>
            </ul>

            <h4>肩关节活动度</h4>
            <ul>
              <li>
                <strong>肩前屈/后伸:</strong>
                双臂前举至头顶,后伸至背后,各保持5秒,重复10次
              </li>
              <li>
                <strong>肩外展:</strong>
                双臂向两侧平举至肩高,保持5秒,重复10次
              </li>
              <li>
                <strong>肩旋转:</strong>手指触肩,做圆周运动,前后各10次
              </li>
            </ul>
          </div>

          <h4 className="mb-sm">ROM训练处方</h4>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>关节部位</TableHead>
                <TableHead>训练动作</TableHead>
                <TableHead>重复次数</TableHead>
                <TableHead>每日频次</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>颈椎</TableCell>
                <TableCell>前屈/后伸、侧屈、旋转</TableCell>
                <TableCell>10次/方向</TableCell>
                <TableCell>每日2-3次</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>脊柱</TableCell>
                <TableCell>侧屈、旋转</TableCell>
                <TableCell>10次/侧</TableCell>
                <TableCell>每日2次</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>髋关节</TableCell>
                <TableCell>屈曲、外展、旋转</TableCell>
                <TableCell>10-15次/动作</TableCell>
                <TableCell>每日1-2次</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>肩关节</TableCell>
                <TableCell>前屈/后伸、外展、旋转</TableCell>
                <TableCell>10次/动作</TableCell>
                <TableCell>每日2次</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        {/* Aquatic Therapy */}
        <section className="mb-xl">
          <h2 className="mb-md">水中运动与有氧训练</h2>

          <div className="prose mb-md">
            <p>
              <strong className="text-primary-500">
                水中运动在疼痛与生活质量改善方面具有独特优势
              </strong>
              ,适用于疼痛显著或负重困难者。水的浮力减轻关节负担,温水促进血液循环,缓解肌肉紧张。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl mb-md">
            <div>
              <ImageViewer
                src="/imgs/aquatic_therapy.png"
                alt="水中运动治疗"
                width={800}
                height={600}
                caption="水中运动与水疗"
              />
            </div>
            <div>
              <VideoPlayer
                src="/videos/aquatic_therapy_session.mp4"
                poster="/imgs/aquatic_therapy.png"
                caption="水中运动演示"
              />
            </div>
          </div>

          <div className="prose mb-md">
            <h3>水中运动方案</h3>
            <ol>
              <li>
                <strong>水中步行:</strong>
                在胸深的水中前后行走,摆动双臂。10-15分钟,逐渐增加至20-30分钟。
              </li>
              <li>
                <strong>水中伸展:</strong>
                在水中进行脊柱前屈、后伸、侧屈和旋转动作。每个方向5-10次,重复2-3组。
              </li>
              <li>
                <strong>水中腿部运动:</strong>
                扶池边,进行腿部前抬、后踢、侧抬动作。每个方向10-15次。
              </li>
              <li>
                <strong>水中游泳:</strong>
                蛙泳、仰泳等姿势,避免蝶泳(脊柱过度伸展)。每次15-30分钟。
              </li>
            </ol>

            <h3>陆上有氧运动</h3>
            <ul>
              <li>
                <strong>步行:</strong>
                快步行走,保持正确姿势。每次20-40分钟,每周5-7天。
              </li>
              <li>
                <strong>骑车:</strong>
                固定单车或室外骑行,保持躯干直立。每次20-30分钟,每周3-5次。
              </li>
              <li>
                <strong>椭圆机:</strong>
                低冲击有氧运动,适合关节保护。每次20-30分钟,每周3-5次。
              </li>
            </ul>

            <h3>注意事项</h3>
            <ul>
              <li>
                <strong>水温:</strong>建议28-32°C,过冷或过热均不适宜
              </li>
              <li>
                <strong>时长:</strong>
                初期15-20分钟,逐渐增加至30-45分钟
              </li>
              <li>
                <strong>频率:</strong>每周2-3次水中运动,配合陆上训练
              </li>
              <li>
                <strong>安全:</strong>
                确保水深适宜(胸深),有扶手或辅助设施,避免滑倒
              </li>
            </ul>
          </div>

          <h4 className="mb-sm">有氧运动与水中训练处方</h4>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>运动类型</TableHead>
                <TableHead>强度</TableHead>
                <TableHead>时长</TableHead>
                <TableHead>频率</TableHead>
                <TableHead>主要效果</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>水中步行</TableCell>
                <TableCell>中等</TableCell>
                <TableCell>20-30分钟</TableCell>
                <TableCell>每周2-3次</TableCell>
                <TableCell>改善心肺功能,缓解关节疼痛</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>水中伸展</TableCell>
                <TableCell>轻-中</TableCell>
                <TableCell>15-20分钟</TableCell>
                <TableCell>每周2-3次</TableCell>
                <TableCell>增加ROM,放松肌肉</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>游泳</TableCell>
                <TableCell>中-高</TableCell>
                <TableCell>15-30分钟</TableCell>
                <TableCell>每周2-3次</TableCell>
                <TableCell>全身有氧,增强肌力</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>快步行走</TableCell>
                <TableCell>中等</TableCell>
                <TableCell>20-40分钟</TableCell>
                <TableCell>每周5-7天</TableCell>
                <TableCell>改善心肺耐力,维持体重</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>骑车</TableCell>
                <TableCell>中等</TableCell>
                <TableCell>20-30分钟</TableCell>
                <TableCell>每周3-5次</TableCell>
                <TableCell>低冲击有氧,保护关节</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        {/* Daily Living */}
        <section className="mb-xl">
          <h2 className="mb-md">日常生活指导</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl mb-md">
            <div>
              <ImageViewer
                src="/imgs/lifestyle_guidance.png"
                alt="生活方式指导"
                width={800}
                height={600}
                caption="日常生活活动与人体工学指导"
              />
            </div>

            <div className="prose">
              <h3>工作与人体工学</h3>
              <ul>
                <li>
                  <strong>办公桌设置:</strong>
                  电脑屏幕与眼睛平齐,键盘和鼠标在肘部高度
                </li>
                <li>
                  <strong>座椅选择:</strong>
                  腰部支撑良好的椅子,双脚平放地面
                </li>
                <li>
                  <strong>定时活动:</strong>
                  每30-60分钟起身活动5分钟,进行简单伸展
                </li>
                <li>
                  <strong>搬运物品:</strong>
                  避免弯腰搬重物,使用下蹲姿势,保持脊柱直立
                </li>
              </ul>

              <h3>睡眠与休息</h3>
              <ul>
                <li>
                  <strong>床垫选择:</strong>
                  中等硬度床垫,避免过软导致脊柱下陷
                </li>
                <li>
                  <strong>睡姿:</strong>
                  侧卧时膝间夹枕头,仰卧时颈下放小枕头,避免俯卧
                </li>
                <li>
                  <strong>晨起习惯:</strong>
                  醒后在床上进行5-10分钟简单伸展再起身
                </li>
              </ul>
            </div>
          </div>

          <div className="prose mb-md">
            <h3>饮食与营养</h3>
            <ul>
              <li>
                <strong>抗炎饮食:</strong>
                多吃富含Omega-3脂肪酸的食物(深海鱼、亚麻籽)、新鲜蔬果、全谷物
              </li>
              <li>
                <strong>维生素D与钙:</strong>
                补充维生素D(800-1000 IU/天)和钙(1000-1200 mg/天),预防骨质疏松
              </li>
              <li>
                <strong>体重管理:</strong>
                维持健康体重(BMI 18.5-24.9),减轻关节负担
              </li>
              <li>
                <strong>限制:</strong>减少精制糖、饱和脂肪、加工食品摄入
              </li>
            </ul>

            <h3>心理健康</h3>
            <ul>
              <li>
                <strong>疾病教育:</strong>
                了解AS知识,建立合理预期,减少焦虑
              </li>
              <li>
                <strong>社会支持:</strong>
                加入AS患者支持小组,分享经验与情感
              </li>
              <li>
                <strong>压力管理:</strong>
                正念冥想、渐进性肌肉放松、深呼吸等技术
              </li>
              <li>
                <strong>专业帮助:</strong>
                必要时寻求心理咨询师或精神科医生帮助
              </li>
            </ul>
          </div>

          <h4 className="mb-sm">日常生活活动(ADL)建议</h4>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>活动类别</TableHead>
                <TableHead>建议措施</TableHead>
                <TableHead>避免事项</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>工作/学习</TableCell>
                <TableCell>
                  人体工学座椅、屏幕平齐、定时活动、站立办公交替
                </TableCell>
                <TableCell>长时间低头、久坐不动、弯腰搬重物</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>家务劳动</TableCell>
                <TableCell>
                  使用长柄工具、下蹲取物、分段完成、避免过度劳累
                </TableCell>
                <TableCell>弯腰拖地、长时间站立、突然扭转脊柱</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>睡眠休息</TableCell>
                <TableCell>
                  中等硬度床垫、侧卧/仰卧、小枕头、晨起伸展
                </TableCell>
                <TableCell>过软床垫、俯卧、高枕头</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>交通出行</TableCell>
                <TableCell>腰部支撑、定时休息、避免颠簸、安全带调整</TableCell>
                <TableCell>长时间驾驶不休息、座椅过低或过软</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>休闲娱乐</TableCell>
                <TableCell>
                  适度运动(游泳、步行)、正确姿势、避免冲击性活动
                </TableCell>
                <TableCell>
                  跳跃、剧烈扭转、接触性运动(足球、篮球)
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        {/* Exercise Contraindications */}
        <section className="mb-xl">
          <h2 className="mb-md">运动禁忌与分期管理</h2>

          <div className="prose mb-md">
            <h3>绝对禁忌(暂停所有运动)</h3>
            <ul className="text-error-600 font-semibold">
              <li>急性脊柱骨折或骨折风险极高(严重骨质疏松)</li>
              <li>急性感染、发热(&gt;38°C)、全身性炎症未控制</li>
              <li>严重心血管疾病(不稳定心绞痛、心梗后急性期)</li>
              <li>严重贫血(Hb &lt; 8 g/dL)或凝血功能障碍</li>
            </ul>

            <h3>相对禁忌(需调整或限制)</h3>
            <ul>
              <li>
                <strong>急性炎症期(BASDAI &gt; 6):</strong>
                减少运动强度和时长,以温和伸展和呼吸训练为主,避免负重和剧烈运动
              </li>
              <li>
                <strong>外周关节急性炎症:</strong>
                受累关节进行被动或辅助ROM训练,避免负重和抗阻训练
              </li>
              <li>
                <strong>骨质疏松(T-score &lt; -2.5):</strong>
                避免脊柱前屈、扭转和冲击性运动,优先水中运动和核心稳定训练
              </li>
              <li>
                <strong>葡萄膜炎发作期:</strong>
                避免剧烈运动和头部剧烈晃动,以温和伸展为主
              </li>
              <li>
                <strong>妊娠期:</strong>
                避免仰卧位运动(孕中晚期)、冲击性运动和过度伸展,优先水中运动和温和伸展
              </li>
            </ul>

            <h3>分期运动建议</h3>
            <h4>急性期/高疾病活动期</h4>
            <ul>
              <li>以呼吸训练、温和伸展和ROM训练为主</li>
              <li>避免负重和剧烈有氧运动</li>
              <li>每日10-15分钟,分次进行</li>
              <li>疼痛明显时可适当休息,但避免完全制动</li>
            </ul>

            <h4>缓解期/低疾病活动期</h4>
            <ul>
              <li>全面运动处方:伸展+核心稳定+ROM+有氧/水中运动</li>
              <li>逐渐增加运动强度和时长</li>
              <li>每日30-60分钟,包括多种训练形式</li>
              <li>定期评估,调整处方</li>
            </ul>
          </div>

          <h4 className="mb-sm">运动禁忌与注意事项</h4>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>情况</TableHead>
                <TableHead>运动限制</TableHead>
                <TableHead>建议措施</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="text-error-600 font-semibold">
                  急性骨折/骨折高风险
                </TableCell>
                <TableCell>绝对禁忌</TableCell>
                <TableCell>
                  立即就医,骨科评估,康复后在医师指导下逐步恢复
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-error-600 font-semibold">
                  急性感染/发热
                </TableCell>
                <TableCell>绝对禁忌</TableCell>
                <TableCell>休息,治疗感染,症状消失后逐步恢复运动</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>急性炎症期(BASDAI &gt; 6)</TableCell>
                <TableCell>相对禁忌,减少强度</TableCell>
                <TableCell>
                  温和伸展+呼吸训练,10-15分钟/次,避免负重和剧烈运动
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>骨质疏松(T-score &lt; -2.5)</TableCell>
                <TableCell>避免前屈、扭转、冲击</TableCell>
                <TableCell>
                  水中运动+核心稳定,补充钙与维生素D,定期骨密度评估
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>外周关节急性炎症</TableCell>
                <TableCell>受累关节限制负重</TableCell>
                <TableCell>
                  被动/辅助ROM训练,冰敷,药物控制炎症后恢复
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>妊娠期</TableCell>
                <TableCell>避免仰卧(孕中晚期)、冲击、过度伸展</TableCell>
                <TableCell>
                  水中运动+温和伸展,在产科与风湿科共同指导下进行
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        {/* 12-Week Program */}
        <section className="mb-xl">
          <h2 className="mb-md">12周运动处方示例</h2>

          <div className="prose mb-md">
            <p>
              以下是一个针对缓解期AS患者的12周渐进式运动处方,涵盖呼吸训练、脊柱伸展、核心稳定、ROM训练和有氧运动。
              <strong className="text-primary-500">
                个体化调整基于评估结果与症状反馈。
              </strong>
            </p>
          </div>

          <h4 className="mb-sm">12周运动处方(缓解期患者)</h4>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>周数</TableHead>
                <TableHead>训练内容</TableHead>
                <TableHead>频次</TableHead>
                <TableHead>时长</TableHead>
                <TableHead>重点目标</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>第1-2周</TableCell>
                <TableCell>
                  呼吸训练(深呼吸+扩胸)
                  <br />
                  脊柱伸展(猫驼式+Cobra)
                  <br />
                  ROM训练(颈椎+脊柱)
                </TableCell>
                <TableCell>每日1次</TableCell>
                <TableCell>20-25分钟</TableCell>
                <TableCell>
                  建立基础,熟悉动作,评估耐受性
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>第3-4周</TableCell>
                <TableCell>
                  呼吸训练+吸气肌训练(IMT起始)
                  <br />
                  脊柱伸展(增加门框伸展)
                  <br />
                  核心稳定(平板支撑+桥式)
                  <br />
                  ROM训练(全身)
                </TableCell>
                <TableCell>每日1次</TableCell>
                <TableCell>30-35分钟</TableCell>
                <TableCell>增加核心稳定,引入IMT</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>第5-6周</TableCell>
                <TableCell>
                  呼吸训练+IMT(阻力提升至35-40%)
                  <br />
                  脊柱伸展(完整6动作)
                  <br />
                  核心稳定(增加鸟狗式+死虫式)
                  <br />
                  ROM训练
                  <br />
                  有氧运动(快步行走)
                </TableCell>
                <TableCell>每日1次+有氧3次/周</TableCell>
                <TableCell>核心35分钟+有氧20分钟</TableCell>
                <TableCell>
                  全面训练,引入有氧
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>第7-8周</TableCell>
                <TableCell>
                  呼吸训练+IMT(阻力40-45%)
                  <br />
                  脊柱伸展+核心稳定(增加侧桥)
                  <br />
                  ROM训练
                  <br />
                  有氧运动(步行+骑车交替)
                </TableCell>
                <TableCell>每日1次+有氧4-5次/周</TableCell>
                <TableCell>核心40分钟+有氧25分钟</TableCell>
                <TableCell>提升强度,增加有氧频次</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>第9-10周</TableCell>
                <TableCell>
                  呼吸训练+IMT(阻力45-50%)
                  <br />
                  脊柱伸展+核心稳定(高级变式)
                  <br />
                  ROM训练
                  <br />
                  水中运动(每周1-2次)
                  <br />
                  陆上有氧(步行+骑车)
                </TableCell>
                <TableCell>
                  每日1次+有氧5次/周+水中1-2次/周
                </TableCell>
                <TableCell>核心40分钟+有氧30分钟+水中30分钟</TableCell>
                <TableCell>引入水中运动,全面强化</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>第11-12周</TableCell>
                <TableCell>
                  呼吸训练+IMT(维持阻力)
                  <br />
                  脊柱伸展+核心稳定(维持高级)
                  <br />
                  ROM训练
                  <br />
                  水中运动(每周2次)
                  <br />
                  陆上有氧(多样化:步行+骑车+椭圆机)
                </TableCell>
                <TableCell>
                  每日1次+有氧5-7次/周+水中2次/周
                </TableCell>
                <TableCell>核心40分钟+有氧30-40分钟+水中30-45分钟</TableCell>
                <TableCell>
                  巩固效果,评估进展,制定长期计划
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <div className="prose mt-md">
            <h3>评估与调整</h3>
            <ul>
              <li>
                <strong>基线评估(第0周):</strong>
                BASDAI、BASFI、BAS-G、胸廓扩展、Schober试验、指地距离、疼痛VAS
              </li>
              <li>
                <strong>中期评估(第6周):</strong>
                重复基线评估,根据改善情况调整强度与频次
              </li>
              <li>
                <strong>终期评估(第12周):</strong>
                完整评估,对比基线,制定长期维持方案
              </li>
              <li>
                <strong>调整原则:</strong>
                若疼痛加重或疾病活动度升高,减少强度;若进展良好,逐步增加难度
              </li>
            </ul>

            <h3>长期维持(第13周及以后)</h3>
            <p>
              完成12周处方后,建立长期运动习惯:
            </p>
            <ul>
              <li>
                <strong>核心训练:</strong>每周至少5次,每次30-40分钟
              </li>
              <li>
                <strong>有氧运动:</strong>
                每周至少150分钟中等强度或75分钟高强度
              </li>
              <li>
                <strong>水中运动:</strong>
                每周1-2次,作为陆上训练的补充
              </li>
              <li>
                <strong>定期评估:</strong>
                每3-6个月复查,调整处方
              </li>
            </ul>
          </div>
        </section>

        {/* Summary */}
        <section className="bg-neutral-100 p-lg rounded-sm">
          <h2 className="mb-md">总结与实践要点</h2>
          <div className="prose">
            <ol className="text-body-lg">
              <li>
                <strong>运动是AS管理的基石:</strong>
                药物控制炎症,运动维持功能,两者缺一不可
              </li>
              <li>
                <strong>呼吸训练不可忽视:</strong>
                深呼吸与IMT应作为基础模块,长期坚持
              </li>
              <li>
                <strong>全面训练方案:</strong>
                呼吸+伸展+核心稳定+ROM+有氧/水中,缺一不可
              </li>
              <li>
                <strong>个体化处方:</strong>
                根据疾病活动度、功能水平、合并症调整强度与内容
              </li>
              <li>
                <strong>监督优于自主:</strong>
                在物理治疗师或运动康复师指导下进行效果更佳
              </li>
              <li>
                <strong>长期依从性:</strong>
                建立习惯,融入生活,定期评估与调整
              </li>
              <li>
                <strong>安全第一:</strong>
                注意禁忌症,急性期调整方案,避免过度训练
              </li>
              <li>
                <strong>多学科协作:</strong>
                风湿科+康复科+营养科+心理科,全方位管理
              </li>
            </ol>

            <p className="text-body-lg font-semibold text-primary-700 mt-md">
              坚持科学、规律的运动康复训练,配合药物治疗和生活方式调整,可以显著改善AS患者的功能、疼痛和生活质量,延缓疾病进展,实现长期健康管理。
            </p>
          </div>
        </section>
      </ContentBlock>
    </article>
  )
}
