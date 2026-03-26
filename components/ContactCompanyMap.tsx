export default function ContactCompanyMap() {
    const mapLocation = "Bucuresti+Sector+2+Strada+Andronache+numarul+254";
    return (
        <div className="w-full h-full transition-all duration-700">
            <iframe
                width="100%"
                height="100%"
                src={`https://maps.google.com/maps?q=${mapLocation}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                style={{ filter: "contrast(1.2) opacity(0.9)" }}
            ></iframe>
        </div>
    );
}