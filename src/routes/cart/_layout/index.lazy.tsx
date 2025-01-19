import CartHomePage from '@/components/views/cart/home'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/cart/_layout/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className="mx-auto grid max-w-7xl lg:grid-cols-3">
      <CartHomePage />
    </main>
  )
}
