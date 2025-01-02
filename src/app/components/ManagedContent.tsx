import { Button } from 'lib/buttons';
import { Display } from './helpers/formatters';
import { v4 } from 'uuid';
import { Dialog, DialogProps, useDialogs } from 'lib/dialogs';
import { MenuBuilder, MenuSummonButton, useMenus } from 'lib/menu';
import { memo } from 'react';
import ExpandingMenu from 'lib/menu/expanding/ExpandingMenu';

function Dialogs() {
    const dialogs = useDialogs();

    return <Display
        heading='dialogs'
    >
        <Button
            onClick={() => {
                const ID = 'example_dialog';

                const dialog = memo((p: DialogProps) => <Dialog
                    {...p}
                    mobile='header'
                >
                    Cool!
                </Dialog>);

                dialogs.add(ID, dialog).open();
            }}
        >
            Dialog
        </Button>
    </Display>;
}

function Menus() {
    const menus = useMenus();

    return <>
        <Display heading='basic menu'>
            {
                ([undefined, 'top', 'bottom', 'left', 'right'] as ('top' | 'bottom' | 'left' | 'right')[]).map((place) => {
                    const builder = new MenuBuilder(menus, v4());

                    builder.addContent()
                        .setText('Hello World!')
                        .addProps({ className: 'f-primary' });

                    return <MenuSummonButton
                        builder={builder}
                        place={place}
                    >
                        Menu {place}
                    </MenuSummonButton>;
                })
            }
        </Display>

        <Display heading='expanding menu'>
            <ExpandingMenu
                builder={new MenuBuilder(menus, v4())}
            />
        </Display>

        <Display heading='radial menu'>

        </Display>
    </>;
}

export function ManagedContent() {
    return <>
        <Dialogs />
        <Menus />
    </>;
}