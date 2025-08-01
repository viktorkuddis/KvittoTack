import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'



import { ClerkProvider } from '@clerk/clerk-react'

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

import { svSE } from '@clerk/localizations'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider localization={svSE} publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>

      <App />

    </ClerkProvider>
  </StrictMode>,
)
