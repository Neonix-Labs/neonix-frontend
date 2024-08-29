'use client'

import DataCard from './data-card'
import DataCard2 from './data-card2'
import { Card, CardContent } from '@repo/ui/card'
import { Input } from '@repo/ui/input'
import { Button } from '@repo/ui/button'
import { memo } from 'react'

function LookUpAddress() {
  // const { address } = useAccount()

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    console.log(formData)
  }

  return (
    <div className="w-full space-y-8">
      <div className="flex items-center justify-center">
        <form onSubmit={submit} className="relative w-full sm:w-[600px]">
          <Input
            type="text"
            placeholder="Add your address"
            // defaultValue={address}
            className="rounded-full h-14 text-lg bg-gray-100"
          />

          <Button type="submit" className="absolute right-2 top-2">
            Search
          </Button>
        </form>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <Card className="sm:max-w-xs w-full">
          <CardContent className="h-full p-4">
            <div className="flex w-full justify-center gap-2 flex-col h-full">
              <div className="text-xs text-muted-foreground">Move</div>
              <div className="flex items-baseline gap-1 text-6xl font-bold tabular-nums leading-none">
                562
                <span className="text-2xl font-normal text-muted-foreground">
                  kcal
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <DataCard />
        <DataCard2 />

        <Card className="sm:max-w-xs w-full">
          <CardContent className="h-full p-4">
            <div className="flex w-full justify-center gap-2 flex-col h-full">
              <div className="text-xs text-muted-foreground">Move</div>
              <div className="flex items-baseline gap-1 text-6xl font-bold tabular-nums leading-none">
                562
                <span className="text-2xl font-normal text-muted-foreground">
                  kcal
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="sm:max-w-xs w-full">
          <CardContent className="h-full p-4 blur-[3px]">
            <div className="flex w-full justify-center gap-2 flex-col h-full">
              <div className="text-xs text-muted-foreground">Move</div>
              <div className="flex items-baseline gap-1 text-6xl font-bold tabular-nums leading-none">
                562
                <span className="text-2xl font-normal text-muted-foreground">
                  kcal
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="sm:max-w-xs w-full">
          <CardContent className="h-full p-4 blur-[3px]">
            <div className="flex w-full justify-center gap-2 flex-col h-full">
              <div className="text-xs text-muted-foreground">Move</div>
              <div className="flex items-baseline gap-1 text-6xl font-bold tabular-nums leading-none">
                562
                <span className="text-2xl font-normal text-muted-foreground">
                  kcal
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export const LookUpAddressMemoized = memo(LookUpAddress)
