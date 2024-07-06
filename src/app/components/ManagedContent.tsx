import { Button, Dialog, dialogs } from "@lib/main";
import { Display } from "./helpers/formatters";
import MenuSummonButton from "@lib/components/managed-content/menu/MenuSummonButton";
import { v4 } from "uuid";
import MenuBuilder from "@lib/components/managed-content/menu/MenuBuilder";

export default function ManagedContent() {
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

                builder.addItem()
                    .setText('Hello World!')
                    .addProps({ className: 'f-primary' });

                return <MenuSummonButton
                    key={builder.id}
                    id={builder.id}
                    builder={builder}
                    place={place}
                >
                    Menu {place}
                </MenuSummonButton>
            })
        }
    </Display>
}