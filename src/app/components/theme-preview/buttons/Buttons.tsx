import { BrandName, brands } from '../../../../../lib/components/interfaces/links/brands';
import { Button, Icon, SocialLink } from '../../../../../lib/main';
import './styles/buttons.scss';

function Row({ n, style = '' }: { n: number, style: string }) {

    const styleType = `${style}-${n}`

    return <div
        key={n}
        className='btn-row'
    >
        <Button
            category={styleType}
        >
            Click Me!
        </Button>

        <Button
            className='circular'
            category={styleType}
        >
            <Icon
                icon='emoji-smile'
            />
        </Button>

        <Button
            category={styleType}
            disabled
        >
            {"Don't Click Me!"}
        </Button>

        <Button
            className='circular'
            category={styleType}
            disabled
        >
            <Icon
                icon='emoji-frown'
            />
        </Button>
    </div>
}

export default function Buttons() {

    const brandNames = Object.keys(brands) as BrandName[];
    const brandsPerCol = Math.round(brandNames.length / 5);

    const brandLists: BrandName[][] = [];
    for (let c = 0; c < 5; c++) {
        const list: BrandName[] = [];

        for (let b = 0; b < brandsPerCol; b++) {
            const i = b + c * brandsPerCol;
            if (i >= brandNames.length)
                break;

            const item = brandNames[i];
            if (!item)
                throw new Error('Undefined brand item')

            list.push(item)
        }

        brandLists[c] = list;
    }

    console.log(brandLists)

    return <div
        className='buttons-wrapper'
    >
        <h3>
            Buttons
        </h3>

        <div
            className='buttons'
        >
            {
                ['default', 'inverse', 'compliment'].map((style) => {
                    return <div
                        key={style}
                        className='buttons-column'
                    >
                        {
                            [0, 1, 2, 3, 4].map((n) => <Row key={n} n={n} style={style} />)
                        }
                    </div>
                })
            }
        </div>

        <h3>
            Brands
        </h3>

        <div
            className='brands'
        >
            {
                brandLists.map((list, i) => {
                    return <div
                        key={i}
                        className='brand-column'
                    >
                        {
                            list.map((brand) => {
                                return <div
                                    key={brand}
                                    className='brand-row'
                                >
                                    <SocialLink
                                        brand={brand}
                                    />

                                    <SocialLink
                                        brand={brand}
                                        fill
                                    />

                                    <SocialLink
                                        brand={brand}
                                        withLabel
                                    />

                                    <SocialLink
                                        brand={brand}
                                        fill
                                        withLabel
                                    />
                                </div>
                            })
                        }
                    </div>
                })
            }
        </div>
    </div>
}