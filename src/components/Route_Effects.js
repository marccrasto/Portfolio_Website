import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";

export default function RouteEffects() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.refreshHard();
    }, [pathname]);

    return null;
}