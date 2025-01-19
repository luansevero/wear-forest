import CartHeaderNav from '@/@core/components/theme/CartHeaderNav'
import { createFileRoute, Outlet } from '@tanstack/react-router'
import React from 'react'

export const Route = createFileRoute('/cart/_layout')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <React.Fragment>
      <CartHeaderNav />
      <Outlet />
    </React.Fragment>
  )
}
