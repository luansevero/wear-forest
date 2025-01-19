import { Badge } from '@/@core/components/ui/Badge'
import Section from '@/@core/components/ui/Section'
import Typography from '@/@core/components/ui/Typography'
import RedirectToStoreButton from '@/components/buttons/RedirectToStoreButton'
import { useCartStore } from '@/stores/cartStore'
import { createLazyFileRoute } from '@tanstack/react-router'
import { PackageCheck } from 'lucide-react'

export const Route = createLazyFileRoute('/cart/order')({
  component: RouteComponent,
})

function RouteComponent() {
  const { lastOrderNumber } = useCartStore()
  return (
    <main className="flex flex-1 flex-col items-center justify-center">
      <Section className="items-center">
        <PackageCheck className="size-32 text-green-500" />
        <Typography className="max-w-md text-center">
          Your transaction has been completed successfully. We have emailed you
          details of your order
        </Typography>
        <Badge size={'lg'} variant={'outline'}>
          <Typography variant="span" className="text-xs font-medium">
            YOUR ORDER:{' '}
            <Typography
              variant="span"
              className="text-sm font-bold text-green-500"
            >
              #{lastOrderNumber}
            </Typography>
          </Typography>
        </Badge>
      </Section>
      <Section className="flex items-center pt-6">
        <RedirectToStoreButton label="Back to Shop" />
      </Section>
    </main>
  )
}
