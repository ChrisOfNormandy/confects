import './styles/app.scss';
import Buttons from './components/theme-preview/buttons/Buttons';
import Inputs from './components/theme-preview/inputs/Inputs';
import ThemePreview from './components/theme-preview/ThemePreview';

export default function App() {
    return <div>
        <h1>
            Style pack testing!
        </h1>

        <ThemePreview />

        <Buttons />

        <Inputs />
    </div>
}