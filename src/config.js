export default {
    OS_NAME: process.env.VUE_APP_OS_NAME,
    ACCENT_COLOR: "#0366d6",
    SUPPORTED_DEVICES: [
        {
            name: "OnePlus 9",
            model: "lemonade",
        },
        {
            name: "OnePlus 9 Pro",
            model: "lemonadep",
        },
    ],
    RELEASE_VARIANTS: {
        minimal: {
            description: "Minimal version without Google apps or services.",
            suffix: "",
        },
        gapps: {
            description:
                "Version with Google services included, so the apps you’re familiar with will work. Recommended for most users.",
            suffix: " with Google services",
        },
        test: {
            description: "Experimental version for testing only.",
            suffix: "experimental",
        },
        beta: {
            description: "Beta version for testing only.",
            suffix: "beta",
        },
    },
    DONATION_LINKS: [
        {
            title: "One-time donation",
            description:
                "You can also make a one-time donation through PayPal. It doesn’t help with sustainable support, but every little bit is appreciated!",
            highlight: false,
            url: "https://paypal.me/eduardoroms",
            icon: "paypal",
        },
    ],
};
