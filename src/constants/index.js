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