import { Button } from '@repo/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="px-4 flex flex-col items-center justify-center text-center min-h-screen">
        <h1 className="text-8xl font-bold tracking-tighter max-w-4xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          Neonix Labs
        </h1>
        <p className="text-xl max-w-3xl mb-8 font-light">
          We create exceptional products that surprise and empower.
        </p>
        <div className="flex items-center justify-center gap-x-6 lg:justify-start">
          <Link href="/contact">
            <Button>Get started</Button>
          </Link>

          <Link href="/about">
            <Button variant="link">
              Learn more <span aria-hidden="true">→</span>
            </Button>
          </Link>
        </div>
      </div>

      <div className="space-y-8 px-4 md:px-6 py-12 md:py-24 lg:py-32 text-center">
        <h2 className="text-4xl font-semibold text-center">
          Mission Statement
        </h2>

        <p className="text-lg max-w-3xl mx-auto">
          Neonix Labs is committed to transforming ordinary digital experiences
          into extraordinary moments. We believe that technology should be both
          fun and functional, seamlessly integrating into your life and
          empowering you to achieve more. Our mission is to push the boundaries
          of what's possible, creating products that make you wonder, "How did I
          ever live without this?"
        </p>
      </div>
    </>
  )
}
