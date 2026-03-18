export const Hero = () => {

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src="/public/hero-bg.jpg"
                    alt="hero-image"
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 via-background/80 to-background"></div>
            </div>

            {/* green dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((dot, i) => (
                    <div className="absolute w-2 h-2 rounded-full opacity-60"
                        style={{
                            backgroundColor: '#20b2a6',
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`
                        }}
                    >
                        <div key={i}>{dot}</div>
                    </div>
                ))}
            </div>

        </section>
    )

}