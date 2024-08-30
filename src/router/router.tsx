/*
 * @Descripttion:
 * @version:
 * @Author: lugfa
 * @Date: 2024-08-30 09:52:12
 * @LastEditors: lugfa
 * @LastEditTime: 2024-08-30 13:35:47
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
    }
  ])
}

export default Router
