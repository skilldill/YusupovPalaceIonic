import React from "react";
import { IonContent, IonItem, IonLabel, IonList, IonPage, IonToggle } from "@ionic/react";

import { Navbar } from "../../../../core/components";

export const NotificationsSettings = () => {
    return (
        <IonPage>
            <Navbar title="Уведомления" withBack/>

            <IonContent>
                <IonList>
                    <IonItem>
                        <IonLabel>
                            Новое сообщение
                        </IonLabel>
                        <IonToggle checked />
                    </IonItem>
                        
                    <IonItem>
                        <IonLabel>
                            Подписка
                        </IonLabel>
                        <IonToggle checked />
                    </IonItem>

                    <IonItem>
                        <IonLabel>
                            Изменение 
                        </IonLabel>
                        <IonToggle checked />
                    </IonItem>

                    <IonItem>
                        <IonLabel>
                            Письмо на почту
                        </IonLabel>
                        <IonToggle checked />
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    )
}