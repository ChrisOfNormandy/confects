import './styles/app.scss';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Managers } from '@lib/main';
import Buttons from './components/Buttons';
import EverythingElse from './components/EverythingElse';
import ThemePreview from './components/ThemePreview';

export default function App() {
    return <div
        className='app f-main'
    >
        <ThemePreview />

        <BrowserRouter>
            <div
                className='navigation'
            >
                <NavLink to='/buttons'>Buttons</NavLink>
                <NavLink to='/inputs'>Inputs</NavLink>
                <NavLink to='/managed-content'>Managed Content</NavLink>
                <NavLink to='/markdown'>Markdown</NavLink>
            </div>

            <Routes>
                <Route
                    path='/buttons'
                    element={<Buttons />}
                />

                <Route
                    path='/inputs'
                    element={<Buttons />}
                />

                <Route
                    path='/managed-content'
                    element={<Buttons />}
                />

                <Route
                    path='/markdown'
                    element={<EverythingElse />
                    }
                />
            </Routes>
        </BrowserRouter>

        <Managers />
    </div>
}