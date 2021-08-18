import React from "react";
import {IonContent, IonPage, IonRefresher, IonRefresherContent} from "@ionic/react";
import { Navbar } from "../../core/components";
import { Card } from "./components";

const gallery = [
    {
        src: 'https://images.unsplash.com/photo-1613310023042-ad79320c00ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80 750w', 
        description: 'Красивая гора', 
        likes: 104
    },

    {
        src: 'https://images.unsplash.com/photo-1610809027249-86c649feacd5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80 750w', 
        description: 'Где-то в горах', 
        likes: 100
    },

    {
        src: 'https://images.unsplash.com/photo-1617083934555-5fc3dc25434d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80 580w', 
        description: 'Белый гигант', 
        likes: 105
    },

    {
        src: 'https://images.unsplash.com/photo-1616635472195-80955c7029e0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80 334w', 
        description: 'Познал мир', 
        likes: 106
    },

    {
        src: 'https://images.unsplash.com/photo-1619631430699-043f820268ef?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1vdW5hdGluc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60 100w', 
        description: 'Ого, а так можно было?', 
        likes: 107
    },
]

export const Main = () => {
    return (
        <IonPage>
            <Navbar title="Список" />

            <IonContent>
                {gallery.map((card, i) => <Card key={i} {...card}/>)}
            </IonContent>
        </IonPage>
    )
}