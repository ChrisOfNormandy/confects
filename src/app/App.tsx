import './styles/app.scss';
import { BrowserRouter } from 'react-router-dom';
import { Buttons } from './components/Buttons';
import { CRouter } from '@router/CRouter';
import { Inputs } from './components/Inputs';
import { ManagedContent } from './components/ManagedContent';
import { Managers } from '@managed/Managers';
import { markdownRouter } from '@router/MarkdownRouter';
import { Outlet, Route, Routes } from 'react-router';
import { Page, PageBody, PageFooter, PageHeader } from '$/pages';
import { RouterNav } from '@router/RouterNav';
import { ThemePreview } from './components/ThemePreview';
import { useEffect, useState } from 'react';
import ContentPreview from './components/ContentPreview';
import { themes } from '@chrisofnormandy/confetti/themes';
import { ThemeSelector } from '@buttons/theme-selector/ThemeSelector';

const router = new CRouter(
    {
        routes: [
            {
                path: '/home',
                markdown: {
                    href: '/pages/home.md',
                    features: {
                        bodyOnly: true
                    }
                }
            },
            {
                path: '/samples',
                routes: [
                    {
                        path: '/theme-preview'
                    },
                    {
                        path: '/no-content'
                    },
                    {
                        path: '/content',
                        content: {
                            href: "/pages/content/index.json"
                        }
                    },
                    {
                        path: '/content/preview'
                    },
                    {
                        path: '/previews',
                        routes: [
                            {
                                path: '/buttons',
                            },
                            {
                                path: '/inputs',
                            },
                            {
                                path: '/managers',
                            }
                        ]
                    }
                ]
            },
            {
                path: '/markdown',
                routes: [
                    {
                        path: '/page-1',
                        markdown: {
                            href: '/pages/page-1.md',
                            features: {
                                download: true,
                                renderToggle: true,
                                reload: true,
                                print: true
                            }
                        },
                    },
                    {
                        path: '/page-2',
                        markdown: {
                            href: '/pages/page-2.md'
                        },
                        routes: [
                            {
                                path: '/nested'
                            }
                        ]
                    }
                ],
            },
        ],
        path: '',
        noNav: true,
        default: '/home'
    }
);

router.setElement(
    () => <Page>
        <PageHeader
            className='f-content'
        >
            <span
                className='header-sect'
            >
                <div
                    className='brand'
                >
                    CoNfects
                </div>

                <ThemeSelector />
            </span>

            <span
                className='header-sect'
            >
                <RouterNav />
            </span>
        </PageHeader>

        <PageBody>
            <Outlet />
        </PageBody>

        <PageFooter
            className='f-content'
        >
            Made by Chris :)
        </PageFooter>
    </Page>
);

router.setPathElement('/markdown', () => <Outlet />)
router.setPathElement('/samples', () => <Outlet />)
router.setPathElement('/samples/previews', () => <Outlet />)
router.setPathElement('/samples/previews/buttons', () => <Buttons />)
router.setPathElement('/samples/previews/inputs', () => <Inputs />)
router.setPathElement('/samples/previews/managers', () => <ManagedContent />)
router.setPathElement('/samples/theme-preview', () => <ThemePreview />)
router.setPathElement('/samples/content/preview', () => <ContentPreview />)

export default function App() {

    const [ready, isReady] = useState(false);

    useEffect(() => {
        themes.init();

        isReady(true);
    }, []);

    return <div
        className='app f-main'
    >
        <BrowserRouter>
            {
                ready &&
                <Routes>
                    {markdownRouter(router, Route)}
                </Routes>
            }
        </BrowserRouter>

        {ready && <Managers />}
    </div>
}