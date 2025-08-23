// Define components with their selectors and import functions
const components = [
  {
    selector: "[data-component='example']",
    importFn: () => import('./components/example.js'),
  },
  // Add more components here
]

async function loadComponent({ selector, importFn }) {
  try {
    const component = document.querySelector(selector)
    if (!component) return
    const module = await importFn()
    const componentName = importFn.name || 'unknown'

    if (typeof module.default === 'function') {
      module.default(component)
      console.log(`✅ ${selector} loaded`)
    } else {
      console.warn(`No valid default function found in ${componentName}.js`)
    }
  } catch (error) {
    console.error(`Failed to load ${importFn.name || 'component'}:`, error)
  }
}

;(async () => {
  try {
    const module = await import('./components/global.js')
    if (typeof module.default === 'function') {
      module.default()
      console.log(`✅ global function loaded`)
    } else {
      console.warn(`No valid default function found in global.js`)
    }
  } catch (error) {
    console.error(`Failed to load global function:`, error)
  }
  await Promise.all(components.map(loadComponent))
})()
