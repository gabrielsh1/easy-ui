import Link from 'next/link'

import { LogoIcon } from '../../../assets/icons/LogoIcon'

export function Header() {
  return (
    <header className="p-4 w-full h-20 flex items-center fixed top-0 bg-[rgba(255,255,255,0.1)] border-b border-b-[#EFEFEF] backdrop-blur-md">
      <Link href="/" className="gap-4 flex items-center">
        <LogoIcon />

        <h1 className="text-3xl font-bold">
          Easy UI
        </h1>
      </Link>
    </header>
  )
}