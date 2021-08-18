import React, { FC } from "react";
import { IonButtons, IonHeader, IonIcon, IonTitle, IonToolbar } from "@ionic/react";
import {chevronBack} from "ionicons/icons";
import { useModals } from "react-mobile-modals";

interface NavbarProps {
    title: string,
    withBack?: boolean
}

export const Navbar: FC<NavbarProps> = (props) => {
    const {title, withBack} = props;

    const {closeModal} = useModals();

    return (
        <IonHeader>
            <IonToolbar>
                {withBack && (
                    <IonButtons slot="start">
                        <IonIcon 
                            icon={chevronBack} 
                            style={{height: 25}}
                            size="large"
                            onClick={closeModal} 
                        />
                    </IonButtons>
                )}

                <IonTitle>{title}</IonTitle>
            </IonToolbar>
        </IonHeader>
    )
}