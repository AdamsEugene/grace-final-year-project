import { ThemeColors } from "./@types";

const defaultColors = {
    purple: "#4b4ba3e3",
    dark: "#000000",
    tableBackground: "rgba(242, 246, 250, 0.7)",
    white: "#ffffff"
};

export const darkTheme: ThemeColors = {
    ...defaultColors,
    background: "#1B2228",
    dashboardBackground: "#17191c",
    blockBorder: "#232323",
    sidebarBackground: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), linear-gradient(180deg, rgba(129, 61, 241, 0.79) -19.58%, #5135E5 100%)`,
    sidebarShadow: "rgba(114, 114, 114, 0.2)",
    sidebarActive: "#4F4B4A",
    imageBackground: "#ffbc99",
    inputBorderBottom: "#444",
    pageTitle: "#cacaca",
    clickText: "#aaa",
    inputItemSelected: "#222",
    checkboxBackground: "#AAA",
    alternateText: "#ccc",
    imageBorder: "#6a54f5",
    mainList: "#cfcfcf",
    tableHover: "#383838",
    toolbarShadowColor: "#181818",
    paginateBackground: "#383838",
    iconColor: "#ccc",
    tableText: "#bbb",
    hoverColor: "#4F4B4A",
    borderColor: "#383838",
    darkText: "#aaa",
    darkHover: "#ccccccaa",
    boxShadow: "rgba(0, 0, 0, 0.8)",
    primary: "#ccc",
    dark: "#000000",
    sidebarHover: "#404040",
    red: "#DD6575",
    dot: "#ff6a55",
    overrideBackground: "#38383899",
    addRolesBackground: "#FFFFFF99",
    userPrivilegeShadow: "rgb(0, 0, 0)",
    green: "#30de5a",
    blue: "#5499C7",
    separatorColor: "#444",
    deepShadow: "#888",
    alternateShadow: "none !important;",
    tertiary: {
        fade: "#ccc"
    },
    ashBoard: "#F7F7F7",
    body: "#d9d9d9",
    brown: "#B65617",
    gray: "",
    lightBody: "",
    main: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), #6A54F5`,
    success: "#39C272",
    warning: "#E60000",
    card: `linear-gradient(0deg,rgba(255, 255, 255, 0.09),rgba(255, 255, 255, 0.09)),#121212`,
    lightCard: `linear-gradient(0deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12)), #121212`,
    cardShadow: `0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2)`,
    lightCardShadow: `0px 5px 5px rgba(0, 0, 0, 0.2), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 8px 10px rgba(0, 0, 0, 0.14)`,
    buttonMainShadow: `0px 4.08437px 10.8916px -5.44582px rgba(47, 128, 237, 0.35)`,
    buttonLightShadow: `0px 5px 5px rgba(0, 0, 0, 0.2), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 8px 10px rgba(0, 0, 0, 0.14)`,
    buttonLight: `#FCFCFC`,
    buttonBorder: `#F7F7F7`,
    h2Color: `rgba(255, 255, 255, 0.87)`,
    roundButtonBackground: `rgba(255, 255, 255, 0.6)`,
    subHeading: `#ffffff99`
};

export const lightTheme: ThemeColors = {
    ...defaultColors,
    background: "#F4F4F4",
    dashboardBackground: "#fcfcfc",
    blockBorder: "#d9d9d9",
    inputItemSelected: "#00000007",
    sidebarBackground: `linear-gradient(0deg, #5135e6 0%,rgba(129, 61, 241, 0.79) 117.39%)`,
    sidebarShadow: "rgba(114, 114, 114, 0.2)",
    imageBackground: "#ffbc99",
    inputBorderBottom: "#E5E5E5",
    pageTitle: "#272b30",
    checkboxBackground: "#fff",
    toolbarShadowColor: "#dbdbdb",
    alternateText: "#4b4ba3e3",
    paginateBackground: "#4b4ba3e3",
    sidebarHover: "#eeeeee",
    imageBorder: "#6a54f5",
    tableText: "rgba(0,0,0,.87)",
    tableHover: "rgba(234, 250, 241, 0.4)",
    userPrivilegeShadow: "rgb(153, 153, 153)",
    sidebarActive: "#e6e6e6",
    mainList: "#1a1d1f",
    iconColor: "#555",
    darkText: "#666",
    clickText: "#33383f",
    borderColor: "rgba(189, 189, 189, 0.6)",
    darkHover: "#0000000a",
    hoverColor: "#999",
    white: "#ffffff",
    primary: "#111315",
    boxShadow: "rgba(114, 114, 114, 0.1)",
    red: "#C9152E",
    dot: "#ff6a55",
    overrideBackground: "#eeeeee99",
    addRolesBackground: "#efefef",
    green: "teal",
    blue: "#145688",
    separatorColor: "#ddd",
    deepShadow: "#6f767e",
    alternateShadow: "0px 0px 6px #eee",
    tertiary: {
        fade: "#4f4f4f"
    },
    ashBoard: "#F7F7F7",
    body: "#131313",
    brown: "#B65617",
    gray: "#D9D9D9",
    lightBody: "#818C99",
    main: "#6A54F5",
    success: "#39C272",
    warning: "#E60000",
    card: `rgba(255, 255, 255, 0.9)`,
    cardShadow: `0px 4px 5px rgba(18, 18, 18, 0.02), 0px 1px 10px rgba(18, 18, 18, 0.01), 0px 2px 4px rgba(18, 18, 18, 0.01)`,
    lightCard: `rgba(255, 255, 255, 0.9)`,
    lightCardShadow: `0px 8px 10px rgba(18, 18, 18, 0.04), 0px 3px 14px rgba(18, 18, 18, 0.04), 0px 5px 5px rgba(18, 18, 18, 0.03)`,
    buttonMainShadow: `0px 4.08437px 10.8916px -5.44582px rgba(47, 128, 237, 0.35)`,
    buttonLightShadow: `0px 4.08437px 10.8916px -5.44582px rgba(47, 128, 237, 0.35)`,
    buttonLight: `rgba(255, 255, 255, 0.9)`,
    buttonBorder: `rgba(18, 18, 18, 0.6)`,
    h2Color: `rgba(18, 18, 18, 0.87)`,
    roundButtonBackground: `rgba(255, 255, 255, 0.9)`,
    subHeading: `rgba(18, 18, 18, 0.6)`
};
