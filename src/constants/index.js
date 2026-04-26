export const PUBLIC_LAYOUT = 'default'
export const PROFILE_OPTIONS = [
    {
        name: " My Wallet",
        icon: "fa-solid fa-wallet",
        route: {
            name: "wallet",
            param: "/wallet"
        }
    },
    {
        name: "Tools",
        icon: "fa-solid fa-toolbox",
        route: {
            name: "tools",
            param: "/tools"
        }
    },
    {
        name: "Privacy",
        icon: "fa-solid fa-lock",
        route: {
            name: "privacy",
            param: "/privacy"
        }
    },
    {
        name: "About",
        icon: "fa-solid fa-info",
        route: {
            name: "about",
            param: "/about"
        }
    },
    {
        name: "Logout",
        icon: "fa-solid fa-arrow-right-from-bracket",
        route: {
            name: "logout",
            param: "/logout"
        }
    }
]
export const MENU_BOTTOM = [
    {
        name: "home",
        icon: "fa-solid fa-grip",
        route: {
            name: "home",
            param: "/home"
        }
    },
    {
        name: "reports",
        icon: "fa-solid fa-chart-simple",
        route: {
            name: "report",
            param: "/report"
        }
    },
    {
        name: "budget",
        icon: "fa-solid fa-wallet",
        route: {
            name: "budget",
            param: "/budget"
        }
    },
    {
        name: "profile",
        icon: "fa-solid fa-user",
        route: {
            name: "profile",
            param: "/profile"
        }
    }
]