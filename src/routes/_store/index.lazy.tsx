import { createLazyFileRoute } from '@tanstack/react-router'
import StoreHomePage from '@/components/views/store/home'

export const Route = createLazyFileRoute('/_store/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <StoreHomePage />
}
