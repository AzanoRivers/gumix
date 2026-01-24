/**
 * Footer Component - Reusable footer section for the extension
 * @author AzanoRivers | manually created
 */

export function Footer() {
    return (
        <>
            <article className="w-full h-full text-end text-xs">
                <span className="text-gumpix-pink dark:text-gumpix-pink-light">Developed by</span>
                <a className="text-sm pl-1 text-gumpix-blue" href="https://www.azanorivers.com" target="_blank" rel="noopener noreferrer">
                    AzanoRivers
                </a>
            </article>
            <article className="w-full h-full text-end text-xs">
                <span className="text-gumpix-pink dark:text-gumpix-pink-light">Supported by</span>
                <a className="text-sm font-semibold pl-1 text-gumpix-blue" href="https://www.pixigummies.com" target="_blank" rel="noopener noreferrer">
                    PixiGummies Project
                </a>
            </article>
        </>
    )
}