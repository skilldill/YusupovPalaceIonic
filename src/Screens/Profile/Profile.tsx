import React from "react";
import {IonContent, IonPage} from "@ionic/react";
import { Navbar } from "../../core/components";

export const Profile = () => {
    return (
        <IonPage>
            <Navbar title="Профиль" />

            <IonContent>
                <h1>Profile</h1>
            </IonContent>
        </IonPage>
    )
}