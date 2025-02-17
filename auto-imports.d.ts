/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// noinspection JSUnusedGlobalSymbols
// Generated by unplugin-auto-import
// biome-ignore lint: disable
export {}
declare global {
  const BeButton: typeof import('./src/components/index')['BeButton']
  const BeIcon: typeof import('./src/components/index')['BeIcon']
  const BeLoading: typeof import('./src/components/index')['BeLoading']
  const BeSwitch: typeof import('./src/components/index')['BeSwitch']
  const Button: typeof import('./src/components/Button/index')['default']
  const Icon: typeof import('./src/components/Icon/index')['default']
  const Loading: typeof import('./src/components/Loading/index')['default']
  const VueInstance: typeof import('./src/utils/config')['VueInstance']
  const cn: typeof import('./src/utils/utils')['cn']
  const components: typeof import('./src/components/index')['default']
  const config: typeof import('./src/utils/config')['config']
  const dynamicExports: typeof import('./src/components/index')['dynamicExports']
  const getComponent: typeof import('./src/components/index')['getComponent']
  const processVariant: typeof import('./src/utils/helpers')['processVariant']
  const registerComponent: typeof import('./src/utils/plugins')['registerComponent']
  const registerComponentProgrammatic: typeof import('./src/utils/plugins')['registerComponentProgrammatic']
  const setOptions: typeof import('./src/utils/config')['setOptions']
  const setVueInstance: typeof import('./src/utils/config')['setVueInstance']
  const styleD: typeof import('./src/types/style.d')['default']
}
// for type re-export
declare global {
  // @ts-ignore
  export type { Config } from './src/interfaces/config.interface'
  import('./src/interfaces/config.interface')
}

// for vue template auto import
import { UnwrapRef } from 'vue'
declare module 'vue' {
  interface GlobalComponents {}
  interface ComponentCustomProperties {
    readonly VueInstance: UnwrapRef<typeof import('./src/utils/config')['VueInstance']>
    readonly cn: UnwrapRef<typeof import('./src/utils/utils')['cn']>
    readonly components: UnwrapRef<typeof import('./src/components/index')['default']>
    readonly config: UnwrapRef<typeof import('./src/utils/config')['config']>
    readonly dynamicExports: UnwrapRef<typeof import('./src/components/index')['dynamicExports']>
    readonly getComponent: UnwrapRef<typeof import('./src/components/index')['getComponent']>
    readonly processVariant: UnwrapRef<typeof import('./src/utils/helpers')['processVariant']>
    readonly registerComponent: UnwrapRef<typeof import('./src/utils/plugins')['registerComponent']>
    readonly registerComponentProgrammatic: UnwrapRef<typeof import('./src/utils/plugins')['registerComponentProgrammatic']>
    readonly setOptions: UnwrapRef<typeof import('./src/utils/config')['setOptions']>
    readonly setVueInstance: UnwrapRef<typeof import('./src/utils/config')['setVueInstance']>
    readonly styleD: UnwrapRef<typeof import('./src/types/style.d')['default']>
  }
}