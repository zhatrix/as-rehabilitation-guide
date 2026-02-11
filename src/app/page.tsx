import { Hero } from '@/components/sections/Hero'
import { ThreePillars } from '@/components/sections/ThreePillars'
import { QuickStats } from '@/components/sections/QuickStats'
import { ImageViewer } from '@/components/media/ImageViewer'
import { ContentBlock } from '@/components/ui/ContentBlock'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ThreePillars />
      <QuickStats />

      {/* Disease Characteristics Section */}
      <section className="py-3xl">
        <ContentBlock>
          <h2 className="text-h2 text-center mb-xl">疾病特征</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
            {/* Typical Symptoms */}
            <div>
              <h3 className="text-h3 mb-md">典型症状</h3>
              <ul className="space-y-sm">
                <li className="flex items-start">
                  <span className="text-primary-500 font-bold mr-sm">•</span>
                  <div>
                    <strong className="text-neutral-900">炎性腰背痛：</strong>
                    <span className="text-neutral-700">
                      夜间和晨起疼痛明显，活动后缓解
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 font-bold mr-sm">•</span>
                  <div>
                    <strong className="text-neutral-900">晨僵：</strong>
                    <span className="text-neutral-700">
                      早晨起床时脊柱僵硬，持续30分钟以上
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 font-bold mr-sm">•</span>
                  <div>
                    <strong className="text-neutral-900">活动受限：</strong>
                    <span className="text-neutral-700">
                      脊柱灵活性下降，前屈、后伸困难
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 font-bold mr-sm">•</span>
                  <div>
                    <strong className="text-neutral-900">外周关节炎：</strong>
                    <span className="text-neutral-700">
                      髋关节、膝关节等可能受累
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 font-bold mr-sm">•</span>
                  <div>
                    <strong className="text-neutral-900">附着点炎：</strong>
                    <span className="text-neutral-700">
                      跟腱、足底筋膜等部位疼痛
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 font-bold mr-sm">•</span>
                  <div>
                    <strong className="text-neutral-900">关节外表现：</strong>
                    <span className="text-neutral-700">
                      可伴有虹膜炎、炎症性肠病等
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Spine Anatomy Comparison Image */}
            <div>
              <ImageViewer
                src="/imgs/spine_anatomy_comparison.png"
                alt="正常脊柱与强直性脊柱炎脊柱对比"
                width={800}
                height={600}
                caption="正常脊柱与AS患者脊柱解剖对比"
              />
            </div>
          </div>
        </ContentBlock>
      </section>
    </>
  )
}
