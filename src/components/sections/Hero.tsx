import { Button } from '@/components/ui/Button'
import { ContentBlock } from '@/components/ui/ContentBlock'

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-neutral-100 to-neutral-0 py-3xl">
      <ContentBlock narrow>
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-display mb-md">强直性脊柱炎康复指导</h1>
          <p className="text-body-lg text-neutral-700 mb-xl leading-relaxed">
            强直性脊柱炎(AS)是一种慢性炎症性疾病，主要影响脊柱和骶髂关节。通过系统的医学知识学习和科学的康复训练，可以有效控制病情进展，改善生活质量。
          </p>
          <div className="flex flex-col sm:flex-row gap-sm justify-center">
            <Button href="/rehabilitation" variant="primary">
              开始康复训练
            </Button>
            <Button href="/etiology" variant="secondary">
              了解病因机制
            </Button>
          </div>
        </div>
      </ContentBlock>
    </section>
  )
}
