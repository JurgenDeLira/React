import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { InvoiceApp } from './components/Invoice.App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InvoiceApp />
  </StrictMode>
)
