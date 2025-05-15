export default function Footer() {

    const currentYear = new Date().getFullYear(); 

    return (
        <footer className="
        text-gray-500
        py-6 mt-12
        ">
        <div className="
        container mx-auto text-center
        ">
            <p>© {currentYear} HappyHome industries, nervenkitzel auf eigene Gefahr</p>   
        </div>
        </footer>
    )
}