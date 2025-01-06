/*
 * @Descripttion:
 * @version:
 * @Author: lugfa
 * @Date: 2024-08-30 09:52:12
 * @LastEditors: lugfa
 * @LastEditTime: 2025-01-06 15:50:55
 * @FilePath: /react-ts-app/src/router/router.tsx
 */
import { useRoutes } from 'react-router-dom'
import { Suspense, lazy } from 'react'

interface LazyLoadProps {
  path: string
}
const LazyLoad = ({ path }: LazyLoadProps) => {
  const Comp = lazy(() => import('@/pages' + path))
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Comp />
    </Suspense>
  )
}

function Router() {
  return useRoutes([
    {
      path: '/home',
      element: <LazyLoad path="/home" />
    },
    {
      path: '/test1',
      element: <LazyLoad path="/test1" />
    },
    {
      path: '/test2',
      element: <LazyLoad path="/test2" />
    }
  ])
}

export default Router
