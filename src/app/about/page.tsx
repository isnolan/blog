import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, XIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Nolan Zhang, Full-stack engineer, focusing on AI software, 5+ years of independent development experience.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Nolan Zhang
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I am a full-stack engineer, dwelling in the romantic realm where
              code and poetry intertwine. I am passionate about computer
              science, yet I also cherish the artistry of words. In my code, the
              elegance of logic dances; in my poetry, the light of reason
              shines.
            </p>
            <p>
              Equipped with extensive experience in business practice, I have
              contributed to various projects in the social and educational
              sectors. I seamlessly integrate technology and business, igniting
              the spark of innovation to illuminate the path to success.
            </p>
            <p>
              A profound wanderlust courses through my veins, propelling me on a
              journey to explore the essence of life. I am captivated by the
              simplicity and purity of nature, and I harbor a deep fascination
              for Buddhist and Taoist philosophies. Amidst mountains and rivers,
              I sense the vastness of heaven and earth; within ancient temples
              and monasteries, I seek tranquility within my soul.
            </p>
            <p>
              An insatiable curiosity fuels my constant exploration of the inner
              world, the physical world, and the fantastical realm of space and
              the future. As a small individual, I yearn to find my place within
              the vast universe and contribute to the betterment of
              humanity&apos;s tomorrow. My guiding principle: Code and poetry
              intertwine, a romantic fusion of technology and humanity. Business
              and technology converge, where dreams and reality embrace. Travel
              and exploration unfold, an eternal dialogue between the soul and
              nature. I eagerly await our encounter, where we shall dance
              together in the world of code, set sail across the ocean of
              poetry, and embark on a journey of exploration hand in hand!
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://github.com/isnolan"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>

            <SocialLink
              href="https://twitter.com/nolanzhang"
              icon={XIcon}
              className="mt-4"
            >
              Follow on X
            </SocialLink>

            <SocialLink
              href="mailto:yhostc@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              nolan@draftai.ai
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
