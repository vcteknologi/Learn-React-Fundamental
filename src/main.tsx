import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LearnUseState from './learn/hooks/1-useState/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LearnUseState />
  </StrictMode>,
)
