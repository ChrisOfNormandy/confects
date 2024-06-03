import { Button } from '../../../../lib/interfaces/buttons/Button';
import { Icon } from '../../../../lib/icon/Icon';
import './styles/buttons.scss';
import SocialLink from '../../../../lib/interfaces/links/SocialLink';
import { brands } from '../../../../lib/interfaces/links/brands';

function Row({ n, style = '' }) {

    const styleType = `${style}-${n}`

    return <div
        key={n}
        className='btn-row'
    >
        <Button
            styleType={styleType}
        >
            Click Me!
        </Button>

        <Button
            circular
            styleType={styleType}
        >
            <Icon
                icon='emoji-smile'
            />
        </Button>

        <Button
            styleType={styleType}
            disabled
        >
            {"Don't Click Me!"}
        </Button>

        <Button
            circular
            styleType={styleType}
            disabled
        >
            <Icon
                icon='emoji-frown'
            />
        </Button>
    </div>
}

export default function Buttons() {

    const brandNames = Object.keys(brands);
    const brandsPerCol = Math.round(brandNames.length / 5);

    const brandLists = [];
    for (let c = 0; c < 5; c++) {
        brandLists[c] = [];

        for (let b = 0; b < brandsPerCol; b++) {
            const i = b + c * brandsPerCol;
            if (i >= brandNames.length)
                break;

            brandLists[c].push(brandNames[i])
        }
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