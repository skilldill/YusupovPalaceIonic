import React from "react";
import { IonPage } from "@ionic/react";

import { Navbar } from "../../../../core/components";

export const Help = () => {
    return (
        <IonPage>
            <Navbar title="Помощь" withBack />
        </IonPage>
    )
}