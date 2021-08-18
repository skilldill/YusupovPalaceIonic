import React from "react";
import {IonIcon} from "@ionic/react";
import {person, settings, image} from "ionicons/icons";

import { Tabs, Tab, TabIcon } from "../core/components/Tabs";
import {Settings, Profile, Main, Room, Rooms} from "../Screens";
import {ListSVG, HeartOutlineSVG, HeartSVG, ListGraySVG} from "../assets";
import { ModalsProvider } from "react-mobile-modals";

export const TabNavigation = () => {
    return (
        <Tabs>
            <Tab 
                title={<TabIcon icon={ListGraySVG} title="Комнаты" />} 
                titleActive={<TabIcon icon={ListSVG} active title="Комнаты" />}
            >
                <ModalsProvider>
                    <Rooms />
                </ModalsProvider>
            </Tab>

            <Tab 
                title={<TabIcon icon={HeartOutlineSVG} title="Понравилось" />} 
                titleActive={<TabIcon icon={HeartSVG} active title="Понравилось" />} 
            >
                <ModalsProvider>
                    <Rooms liked />
                </ModalsProvider>
            </Tab>
        </Tabs>
    )
}