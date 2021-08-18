import React, { useEffect } from "react";
import { useModals } from "react-mobile-modals";
import {App} from "@capacitor/app";

import {TabNavigation} from "./TabNavigation";

export const Navigation = () => {
    const {closeModal} = useModals();

    useEffect(() => {
        App.addListener('backButton', closeModal);
    }, [])

    return <TabNavigation />
}