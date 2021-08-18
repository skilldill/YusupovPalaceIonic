import React from "react";
import {IonContent, IonIcon, IonItem, IonItemDivider, IonLabel, IonList, IonPage} from "@ionic/react";
import {chevronForward} from "ionicons/icons";
import {useModals} from "react-mobile-modals";

import { Navbar } from "../../core/components";
import { AccountSettings, ApperanceSettings, Help, NotificationsSettings } from "./blocks";


export const Settings = () => {

    const {openModal} = useModals();
    
    const handleOpenNotifications = () => {
        openModal({ component: <NotificationsSettings /> });
    }

    const handleOpenApperance = () => {
        openModal({ component: <ApperanceSettings /> });
    }

    const handleOpenAccount = () => {
        openModal({ component: <AccountSettings /> });
    }

    const handleOpenHelp = () => {
        openModal({ component: <Help /> });
    }

    return (
        <IonPage>
            <Navbar title="Настройки" />

            <IonContent>
                <IonList>
                    <IonItem onClick={handleOpenNotifications}>
                        <IonLabel>
                            Уведомления
                        </IonLabel>
                        <IonIcon icon={chevronForward} style={{ color: '#aaa' }} />
                    </IonItem>
                        
                    <IonItem onClick={handleOpenApperance}>
                        <IonLabel>
                            Оформление
                        </IonLabel>
                        <IonIcon icon={chevronForward} style={{ color: '#aaa' }} />
                    </IonItem>

                    <IonItem onClick={handleOpenAccount}>
                        <IonLabel>
                            Аккаунт
                        </IonLabel>
                        <IonIcon icon={chevronForward} style={{ color: '#aaa' }} />
                    </IonItem>

                    <IonItem onClick={handleOpenHelp}>
                        <IonLabel>
                            Помощь
                        </IonLabel>
                        <IonIcon icon={chevronForward} style={{ color: '#aaa' }} />
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    )
}