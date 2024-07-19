import './styles/app.scss';
import { Managers, MarkdownRouter, Page, PageBody, PageFooter, PageHeader, Router, RouterNav } from 'lib/main';
import { Outlet } from 'react-router-dom';
import { Buttons } from './components/Buttons';
import { Inputs } from './components/Inputs';
import { ManagedContent } from './components/ManagedContent';
import { ThemePreview } from './components/ThemePreview';

const router = new Router(
    {
        routes: [
            {
                path: '/home',
                markdown: '/pages/home.md'
            },
            {
                path: '/no-content'
            },
            {
                path: '/markdown',
                routes: [
                    {
                        path: '/page-1',
                        markdown: '/pages/page-1.md'
                    },
                    {
                        path: '/page-2',
                        markdown: '/pages/page-2.md'
                    }
                ],
            },
            {
                path: '/buttons',
            },
            {
                path: '/inputs',
            },
            {
                path: '/managers',
            }
        ],
        path: '',
        noOutlet: true,
        default: '/home',
    }
);

router.setElement(
    () => <Page>
        <PageHeader>
            HEADER

            <RouterNav />
        </PageHeader>

        <PageBody>
            <Outlet />
        </PageBody>

        <PageFooter>
            FOOTER
        </PageFooter>
    </Page>
);

router.setPathElement('/buttons', () => <Buttons />)
router.setPathElement('/inputs', () => <Inputs />)
router.setPathElement('/managers', () => <ManagedContent />)

export default function App() {
    return <div
        className='app f-main'
    >
        <ThemePreview />

        <MarkdownRouter
            router={router}
        />

        <Managers />
    </div>
}