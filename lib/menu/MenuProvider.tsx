import { HTMLElementProps } from "#types/html";
import { ContentManager } from "@managed/ContentManager";
import { MenuProps } from "lib/menu";
import { Context, createContext, useContext, useEffect, useState } from "react";

let MENU_MANAGER_CONTEXT: Context<ContentManager<MenuProps>> | undefined;

export function MenuProvider(
    {
        children
    }: HTMLElementProps
) {
    const [ready, isReady] = useState(true);
    const [contentManager] = useState(new ContentManager<MenuProps>('menus', isReady));

    useEffect(() => {
        MENU_MANAGER_CONTEXT = createContext(contentManager);
    }, [])

    useEffect(() => {
        if (!ready) {
            isReady(true);
            console.debug('Menu provider update!')
        }
    }, [ready]);

    return <>
        {
            MENU_MANAGER_CONTEXT
                ? <MENU_MANAGER_CONTEXT.Provider
                    value={contentManager}
                >
                    {children}
                </MENU_MANAGER_CONTEXT.Provider>
                : children
        }

        {
            ready &&
            <contentManager.Render
                {...{} as MenuProps}
            />
        }
    </>
}

export function useMenus() {
    if (!MENU_MANAGER_CONTEXT)
        throw new Error('You must use MenuProvider to define the menu manager context.');

    const contentManager = useContext(MENU_MANAGER_CONTEXT);
    if (!contentManager)
        throw new Error('Managed content must be used within a Provider');

    return contentManager;
}