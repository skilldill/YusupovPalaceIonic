import React from "react";
import { IonPage } from "@ionic/react";

import { Navbar } from "../../../../core/components";

export const AccountSettings = () => {
    return (
        <IonPage>
            <Navbar title="Аккаунт" withBack />
        </IonPage>
    )
}