import Link from 'next/link'
import { GitHubIcon, XIcon } from '@/components/SocialIcons'

import { ContainerInner, ContainerOuter } from '@/components/Container'

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              {/* // twitter & github , icon and link */}
              <p className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <SocialLink
                  href="https://github.com/isnolan"
                  aria-label="Follow on GitHub"
                  icon={GitHubIcon}
                />

                <SocialLink
                  href="https://twitter.com/nolanzhang"
                  aria-label="Follow on X"
                  icon={XIcon}
                />
              </p>

              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Nolan, All rights reserved.
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
