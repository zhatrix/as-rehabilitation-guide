import { DataCard } from '@/components/ui/DataCard'
import { ContentBlock } from '@/components/ui/ContentBlock'

const stats = [
  {
    value: '0.1-1.4%',
    label: '全球患病率',
    description: '不同地区患病率存在差异',
  },
  {
    value: '20-40岁',
    label: '好发年龄',
    description: '青壮年时期高发',
  },
  {
    value: '3:1',
    label: '男女比例',
    description: '男性发病率更高',
  },
  {
    value: '90%',
    label: 'HLA-B27阳性',
    description: 'AS患者中的阳性率',
  },
]

export function QuickStats() {
  return (
    <section className="py-3xl bg-neutral-100">
      <ContentBlock>
        <h2 className="text-h2 text-center mb-xl">疾病统计数据</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
          {stats.map((stat, index) => (
            <DataCard
              key={index}
              value={stat.value}
              label={stat.label}
              description={stat.description}
            />
          ))}
        </div>
      </ContentBlock>
    </section>
  )
}
