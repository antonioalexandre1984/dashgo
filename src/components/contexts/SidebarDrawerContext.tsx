import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { ReactNode, createContext, useContext, useEffect } from "react";


type SidebarDrawerContextData = UseDisclosureReturn;

interface SidebarDrawerProviderProps {
    children: ReactNode;
}

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {

    const disclosure = useDisclosure();

    useEffect(() => {
        disclosure.onClose();
    }, [disclosure]);


    return (
        <SidebarDrawerContext.Provider value={disclosure}>
            {children}
        </SidebarDrawerContext.Provider>
    );
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);