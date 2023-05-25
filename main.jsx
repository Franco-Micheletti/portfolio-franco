import { createRoot } from 'react-dom/client'
import { Home } from './src/components/home'
import "./index.css"

const root = createRoot(document.getElementById('app'))

root.render(
    <div>
        <Home />
    </div>

)

