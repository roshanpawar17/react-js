import { useEffect } from "react"

export default function CleanupFunction() {

    useEffect(() => {
        const handleResize = () => {
            console.log("Window Resized");
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <div>
            <h3>2. Cleanup Function</h3>
        </div>
    )
}
