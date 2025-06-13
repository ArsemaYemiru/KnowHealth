import React from "react";

const Hero: React.FC = () => {
    return (
        <section
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "60vh",
                background: "linear-gradient(135deg, #e0f7fa 0%, #80deea 100%)",
                padding: "2rem",
                textAlign: "center",
            }}
        >
            <h1 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "1rem" }}>
                Welcome to KnowHealth
            </h1>
            <p style={{ fontSize: "1.25rem", color: "#333", maxWidth: 600 }}>
                Empowering you with knowledge for a healthier life. Discover tips, resources, and tools to take charge of your well-being.
            </p>
        </section>
    );
};

export default Hero;