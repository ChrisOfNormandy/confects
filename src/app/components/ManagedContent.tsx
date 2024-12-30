import { Button } from "lib/buttons";
import { Display } from "./helpers/formatters";
import { v4 } from "uuid";
import { Dialog } from "lib/dialogs";
import { MenuBuilder, MenuSummonButton } from "lib/menu";

export function ManagedContent() {
    return <Display heading='managed-content'>
        <Button
            onClick={() => {
                const ID = 'example_dialog';

                const dialog = <Dialog
                    id={ID}
                    mobile='header'
                >
                    Cool!
                </Dialog>

                dialogs.store(ID, dialog).open();
            }}
        >
            Dialog
        </Button>

        {
            ([undefined, 'top', 'bottom', 'left', 'right'] as ('top' | 'bottom' | 'left' | 'right')[]).map((place) => {
                const builder = new MenuBuilder(v4());

                builder.addContent()
                    .setText('Hello World!')
                    .addProps({ className: 'f-primary' });

                return <MenuSummonButton
                    builder={builder}
                    place={place}
                >
                    Menu {place}
                </MenuSummonButton>
            })
        }
    </Display>
}