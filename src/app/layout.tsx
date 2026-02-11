import type { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-roboto-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: '强直性脊柱炎康复指导',
    template: '%s | 强直性脊柱炎康复指导',
  },
  description:
    '权威的强直性脊柱炎医学知识与康复指导，涵盖病因机制、药物治疗、运动康复方案。',
  keywords: [
    '强直性脊柱炎',
    'AS',
    'Ankylosing Spondylitis',
    '康复',
    '运动疗法',
    'TNF抑制剂',
    'HLA-B27',
    '脊柱炎',
    '炎症性关节炎',
  ],
  authors: [{ name: '医学内容团队' }],
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    siteName: '强直性脊柱炎康复指导',
    images: [
      {
        url: '/imgs/spine_anatomy_comparison.png',
        width: 1200,
        height: 630,
        alt: '强直性脊柱炎脊柱解剖对比',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  name: '强直性脊柱炎康复指导',
  description: '权威的强直性脊柱炎医学知识与康复指导',
  specialty: 'Rheumatology',
  about: {
    '@type': 'MedicalCondition',
    name: '强直性脊柱炎',
    alternateName: 'Ankylosing Spondylitis',
    code: {
      '@type': 'MedicalCode',
      code: 'M45',
      codingSystem: 'ICD-10',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" className={robotoMono.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <GoogleAnalytics />
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
