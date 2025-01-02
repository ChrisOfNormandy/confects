import { HTMLElementProps } from '#types';
import { ContentManager } from '@managed';
import { DialogProps } from '@dialogs';
import { Context, createContext, useContext, useEffect, useState } from 'react';

type DialogType = DialogProps;

let DIALOG_MANAGER_CONTEXT: Context<ContentManager<DialogType>> | undefined;

export function DialogProvider(
    {
        children
    }: HTMLElementProps
) {
    const [ready, isReady] = useState(true);
    const [contentManager] = useState(new ContentManager<DialogType>('dialogs', isReady));

    useEffect(() => {
        DIALOG_MANAGER_CONTEXT = createContext(contentManager);
    }, []);

    return <>
        {
            DIALOG_MANAGER_CONTEXT
                ? <DIALOG_MANAGER_CONTEXT.Provider
                    value={contentManager}
                >
                    {children}
                </DIALOG_MANAGER_CONTEXT.Provider>
                : children
        }

        {
            ready &&
            <contentManager.Render
                {...{} as DialogType}
            />
        }
    </>;
}

export function useDialogs() {
    if (!DIALOG_MANAGER_CONTEXT)
        throw new Error('You must use DialogProvider to define the dialog manager context.');

    const contentManager = useContext(DIALOG_MANAGER_CONTEXT);
    if (!contentManager)
        throw new Error('Managed content must be used within a Provider');

    return contentManager;
}