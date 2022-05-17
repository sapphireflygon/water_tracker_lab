import { useState } from "react";
export const useDarkLightToggle = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    };

    return (
    {isDarkMode, toggleDarkMode}
);
};