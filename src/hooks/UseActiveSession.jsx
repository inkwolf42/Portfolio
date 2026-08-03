import { useEffect, useState } from "react";

export function useActiveSection(ids) {
    const [active, setActive] = useState("");

    useEffect(() => {
        const observers = [];

        ids.forEach(id => {
            const el = document.getElementById(id);
            if (!el) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActive(id);
                },
                {
                    threshold: 0.5,      // element is 50% visible
                    rootMargin: "0px",
                }
            );

            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach(o => o.disconnect());
    }, [ids]);

    return active;
}