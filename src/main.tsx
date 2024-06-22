import { StrictMode } from 'react'
import App from './app/App'
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root') as HTMLDivElement).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
