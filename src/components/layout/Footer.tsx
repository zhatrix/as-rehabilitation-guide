import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-800 text-neutral-0 mt-3xl">
      <div className="max-w-container mx-auto px-sm md:px-md py-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-lg">
          {/* About */}
          <div>
            <h3 className="text-h4 text-neutral-0 mb-sm">关于本站</h3>
            <p className="text-small text-neutral-300">
              本网站提供强直性脊柱炎的权威医学知识与康复指导，包括病因机制、药物治疗和运动康复方案。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-h4 text-neutral-0 mb-sm">快速导航</h3>
            <ul className="space-y-xs">
              <li>
                <Link
                  href="/etiology"
                  className="text-small text-neutral-300 hover:text-primary-50 transition-colors"
                >
                  病因与发病机制
                </Link>
              </li>
              <li>
                <Link
                  href="/medication"
                  className="text-small text-neutral-300 hover:text-primary-50 transition-colors"
                >
                  药物治疗方案
                </Link>
              </li>
              <li>
                <Link
                  href="/rehabilitation"
                  className="text-small text-neutral-300 hover:text-primary-50 transition-colors"
                >
                  运动康复指导
                </Link>
              </li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div>
            <h3 className="text-h4 text-neutral-0 mb-sm">医学免责声明</h3>
            <p className="text-small text-neutral-300">
              本站内容仅供参考，不能替代专业医疗建议、诊断或治疗。如有疑问，请咨询专业医疗人员。
            </p>
          </div>
        </div>

        <div className="border-t border-neutral-700 pt-md">
          <p className="text-small text-neutral-400 text-center">
            © {currentYear} 强直性脊柱炎康复指导 · 仅供教育和信息目的
          </p>
        </div>
      </div>
    </footer>
  )
}
