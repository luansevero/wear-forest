/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as StoreImport } from './routes/_store'
import { Route as StoreIndexImport } from './routes/_store/index'
import { Route as CartOrderImport } from './routes/cart/order'
import { Route as CartLayoutImport } from './routes/cart/_layout'

// Create Virtual Routes

const CartImport = createFileRoute('/cart')()
const CartLayoutIndexLazyImport = createFileRoute('/cart/_layout/')()

// Create/Update Routes

const CartRoute = CartImport.update({
  id: '/cart',
  path: '/cart',
  getParentRoute: () => rootRoute,
} as any)

const StoreRoute = StoreImport.update({
  id: '/_store',
  getParentRoute: () => rootRoute,
} as any)

const StoreIndexRoute = StoreIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => StoreRoute,
} as any).lazy(() => import('./routes/_store/index.lazy').then((d) => d.Route))

const CartOrderRoute = CartOrderImport.update({
  id: '/order',
  path: '/order',
  getParentRoute: () => CartRoute,
} as any).lazy(() => import('./routes/cart/order.lazy').then((d) => d.Route))

const CartLayoutRoute = CartLayoutImport.update({
  id: '/_layout',
  getParentRoute: () => CartRoute,
} as any)

const CartLayoutIndexLazyRoute = CartLayoutIndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => CartLayoutRoute,
} as any).lazy(() =>
  import('./routes/cart/_layout/index.lazy').then((d) => d.Route),
)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_store': {
      id: '/_store'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof StoreImport
      parentRoute: typeof rootRoute
    }
    '/cart': {
      id: '/cart'
      path: '/cart'
      fullPath: '/cart'
      preLoaderRoute: typeof CartImport
      parentRoute: typeof rootRoute
    }
    '/cart/_layout': {
      id: '/cart/_layout'
      path: '/cart'
      fullPath: '/cart'
      preLoaderRoute: typeof CartLayoutImport
      parentRoute: typeof CartRoute
    }
    '/cart/order': {
      id: '/cart/order'
      path: '/order'
      fullPath: '/cart/order'
      preLoaderRoute: typeof CartOrderImport
      parentRoute: typeof CartImport
    }
    '/_store/': {
      id: '/_store/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof StoreIndexImport
      parentRoute: typeof StoreImport
    }
    '/cart/_layout/': {
      id: '/cart/_layout/'
      path: '/'
      fullPath: '/cart/'
      preLoaderRoute: typeof CartLayoutIndexLazyImport
      parentRoute: typeof CartLayoutImport
    }
  }
}

// Create and export the route tree

interface StoreRouteChildren {
  StoreIndexRoute: typeof StoreIndexRoute
}

const StoreRouteChildren: StoreRouteChildren = {
  StoreIndexRoute: StoreIndexRoute,
}

const StoreRouteWithChildren = StoreRoute._addFileChildren(StoreRouteChildren)

interface CartLayoutRouteChildren {
  CartLayoutIndexLazyRoute: typeof CartLayoutIndexLazyRoute
}

const CartLayoutRouteChildren: CartLayoutRouteChildren = {
  CartLayoutIndexLazyRoute: CartLayoutIndexLazyRoute,
}

const CartLayoutRouteWithChildren = CartLayoutRoute._addFileChildren(
  CartLayoutRouteChildren,
)

interface CartRouteChildren {
  CartLayoutRoute: typeof CartLayoutRouteWithChildren
  CartOrderRoute: typeof CartOrderRoute
}

const CartRouteChildren: CartRouteChildren = {
  CartLayoutRoute: CartLayoutRouteWithChildren,
  CartOrderRoute: CartOrderRoute,
}

const CartRouteWithChildren = CartRoute._addFileChildren(CartRouteChildren)

export interface FileRoutesByFullPath {
  '': typeof StoreRouteWithChildren
  '/cart': typeof CartLayoutRouteWithChildren
  '/cart/order': typeof CartOrderRoute
  '/': typeof StoreIndexRoute
  '/cart/': typeof CartLayoutIndexLazyRoute
}

export interface FileRoutesByTo {
  '/cart': typeof CartLayoutIndexLazyRoute
  '/cart/order': typeof CartOrderRoute
  '/': typeof StoreIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_store': typeof StoreRouteWithChildren
  '/cart': typeof CartRouteWithChildren
  '/cart/_layout': typeof CartLayoutRouteWithChildren
  '/cart/order': typeof CartOrderRoute
  '/_store/': typeof StoreIndexRoute
  '/cart/_layout/': typeof CartLayoutIndexLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '' | '/cart' | '/cart/order' | '/' | '/cart/'
  fileRoutesByTo: FileRoutesByTo
  to: '/cart' | '/cart/order' | '/'
  id:
    | '__root__'
    | '/_store'
    | '/cart'
    | '/cart/_layout'
    | '/cart/order'
    | '/_store/'
    | '/cart/_layout/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  StoreRoute: typeof StoreRouteWithChildren
  CartRoute: typeof CartRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  StoreRoute: StoreRouteWithChildren,
  CartRoute: CartRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_store",
        "/cart"
      ]
    },
    "/_store": {
      "filePath": "_store.tsx",
      "children": [
        "/_store/"
      ]
    },
    "/cart": {
      "filePath": "cart",
      "children": [
        "/cart/_layout",
        "/cart/order"
      ]
    },
    "/cart/_layout": {
      "filePath": "cart/_layout.tsx",
      "parent": "/cart",
      "children": [
        "/cart/_layout/"
      ]
    },
    "/cart/order": {
      "filePath": "cart/order.tsx",
      "parent": "/cart"
    },
    "/_store/": {
      "filePath": "_store/index.tsx",
      "parent": "/_store"
    },
    "/cart/_layout/": {
      "filePath": "cart/_layout/index.lazy.tsx",
      "parent": "/cart/_layout"
    }
  }
}
ROUTE_MANIFEST_END */
