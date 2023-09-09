import { createRoot } from 'react-dom/client'
import { Myinfo } from './src/components/myInfo'
import { Projects } from './src/components/projects'
import { MyInfoVerticalBar } from './src/components/myInfoVerticalBar'
import "./index.css"
import { MyInfoProvider } from './src/context/myInfoContext'

const root = createRoot(document.getElementById('app'))

root.render(
    <MyInfoProvider>
        <div className="flex">
            <MyInfoVerticalBar />
            <Myinfo />
            <Projects />
        </div>
    </MyInfoProvider>
)

