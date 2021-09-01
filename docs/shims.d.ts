declare interface Window {
  // extend the window
}

// with sass
declare module '*.scss' {
  const scssStyles: never

  export default scssStyles
}

// with vue
declare module '*.vue' {
  import { App, defineComponent } from 'vue'
  const component: ReturnType<typeof defineComponent> & {
    install(app: App): void
  }
  export default component
}

declare module '*.json' {
  const value: unknown
  export default value
}
