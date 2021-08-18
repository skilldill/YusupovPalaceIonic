import React from "react";
import { IonContent, IonItem, IonLabel, IonList, IonPage, IonToggle } from "@ionic/react";

import { Navbar } from "../../../../core/components";

export const ApperanceSettings = () => {
    const handleToggleTheme = () => {
        document.body.classList.toggle('dark');
    }

    return (
        <IonPage>
            <Navbar title="Оформление" withBack /> 

            <IonContent>
                <IonList>
                    <IonItem>
                        <IonLabel>Тёмная тема</IonLabel>
                        <IonToggle onIonChange={handleToggleTheme} />
                    </IonItem>

                    
                </IonList>
            </IonContent>       
        </IonPage>
    )
}