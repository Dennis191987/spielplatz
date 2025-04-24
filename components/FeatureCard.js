export default function FeatureCard({ title, description }) {
    return (
        <div className="text-center bg-white p-6 rounded-full shadow-md hover:shadow-xl hover:-translate-y-1 hover:scale-110 hover:bg-blue-300 transition-shadow duration-800 bg-[url('/black.jpg')]">
            <h3 className="text-xl font-bold mb-3 text-blue-400">{title}</h3>
            <p className="text-white-600">{description}</p>
        </div>


    )
}

