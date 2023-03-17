import { Inbox, Drive, Board, Update, Analytics, CRM, Ecommerce, Cryptocurrency, Project, NFT, Setting, Additional, MenuOpen, New } from "../components/AllSVG";

export const menu: any[] = [
   {
        title: "DASHBOARDS",
        icon: MenuOpen,
        item: [
            { icon: Inbox, name: "Inbox", count: 4 },
            { icon: Drive, name: "Drive Files", count: 435 },
            { icon: Board, name: "Boards", count: 5 },
            { icon: Update, name: "Updates" },
            { icon: Analytics, name: "Analytics", count: 2 },
            { icon: CRM, name: "CRM Dashboard", count: 2 },
            { icon: Ecommerce, name: "Ecommerce" },
            { icon: Cryptocurrency, name: "Cryptocurrency" },
            { icon: Project, name: "Projects" },
            { icon: NFT, name: "NFT Marketplace" },
            { icon: Setting, name: "Settings", count: 2 }

        ]
   },
   {
        title: "PROJECTS",
        icon: MenuOpen,
        item: [
            { icon: Additional, name: "Additional Calendar", count: 6 },
            { icon: Additional, name: "Brand Logo Design", count: 11 },
            { icon: Additional, name: "User Research" },
            { icon: Additional, name: "Marketing Sales", count: 23 },
            { icon: Additional, name: "New Project Template", count: 2 },
            { icon: New, name: "Add New Project" }
        ]
   }
];