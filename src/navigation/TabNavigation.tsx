import React from "react";

import { ModalsProvider } from "react-mobile-modals";
import {Stack, StackScreen, Tabs, Tab, useMobileNavigation} from "react-mobile-stack-router";

import { TabIcon } from "../core/components/Tabs";
import {Rooms, Room} from "../Screens";
import {ListSVG, HeartOutlineSVG, HeartSVG, ListGraySVG} from "../assets";

import styles from "./Navigation.module.css";
import { RoomsStore } from "core/contexts";

export const TabNavigation = () => {
    const {changeStack} = useMobileNavigation();
    const {setActiveListName} = RoomsStore();

    const handleChangeTab = (tabName: string) => {
        changeStack(tabName);
        setActiveListName(tabName);
    }

    return (
        <Tabs onChange={handleChangeTab} classTabbar={styles.tabbar}>
            <Tab 
                name="all"
                title={<TabIcon icon={ListGraySVG} title="Комнаты" />} 
                titleActive={<TabIcon icon={ListSVG} active title="Комнаты" />}
            >
                <ModalsProvider>
                    <Stack name="all" key="all">
                        <StackScreen name="list">
                            <Rooms />
                        </StackScreen>

                        <StackScreen name="room">
                            <Room />
                        </StackScreen>
                    </Stack>
                </ModalsProvider>
            </Tab>

            <Tab 
                name="liked"
                title={<TabIcon icon={HeartOutlineSVG} title="Понравилось" />} 
                titleActive={<TabIcon icon={HeartSVG} active title="Понравилось" />} 
            >
                <ModalsProvider>
                    <Stack name="liked" key="liked">
                        <StackScreen name="list">
                            <Rooms liked />
                        </StackScreen>

                        <StackScreen name="room">
                            <Room />
                        </StackScreen>
                    </Stack>
                </ModalsProvider>
            </Tab>
        </Tabs>
    )
}