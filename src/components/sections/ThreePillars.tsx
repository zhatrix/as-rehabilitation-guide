import Link from 'next/link'
import { Card } from '@/components/ui/Card'
import { ContentBlock } from '@/components/ui/ContentBlock'

const pillars = [
  {
    title: '病因与发病机制',
    description:
      '深入了解强直性脊柱炎的遗传因素(HLA-B27)、环境触发因素、免疫异常机制和炎症通路。掌握疾病的病理生理过程，为科学治疗奠定理论基础。',
    href: '/etiology',
    icon: '🧬',
  },
  {
    title: '药物治疗方案',
    description:
      '系统介绍NSAIDs、TNF抑制剂、IL-17抑制剂等药物的作用机制、疗效数据和安全性管理。根据疾病活动度选择合适的治疗方案，实现疾病控制。',
    href: '/medication',
    icon: '💊',
  },
  {
    title: '运动康复训练',
    description:
      '提供科学的康复训练方案，包括呼吸训练、脊柱伸展、姿势矫正、关节活动度训练和水中运动。通过规律锻炼维持关节活动度，改善身体功能。',
    href: '/rehabilitation',
    icon: '🏃',
  },
]

export function ThreePillars() {
  return (
    <section className="py-3xl">
      <ContentBlock>
        <h2 className="text-h2 text-center mb-xl">三大核心内容</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
          {pillars.map((pillar) => (
            <Link key={pillar.href} href={pillar.href} className="block">
              <Card hover className="h-full">
                <div className="text-5xl mb-md">{pillar.icon}</div>
                <h3 className="text-h3 mb-sm">{pillar.title}</h3>
                <p className="text-body text-neutral-700 mb-md leading-relaxed">
                  {pillar.description}
                </p>
                <span className="text-body text-primary-500 font-medium hover:underline">
                  了解更多 →
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </ContentBlock>
    </section>
  )
}
