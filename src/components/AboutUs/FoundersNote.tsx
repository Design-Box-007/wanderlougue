import SubHeading from "../Comman/SubHeading"

const FoundersNote = () => {
    return (
        <section className="shadow-[var(--custom-shadow)] space-y-8 p-12 rounded-xl text-center">
            <div className="space-y-6">
                <SubHeading heading={"The Story Behind Wanderlogue"} className="text-[72px]"/>
                <p className="font-medium text-xl">{"Travel isn’t just about destinations—it’s about the experiences, cultures, and memories created along the way."}</p>
            </div>
            <p className="text-2xl italic text-custom-dark-2">
                {"“We believe that travel should be accessible, well-planned, and, most importantly, enjoyable. Whether you're a solo traveler, a couple on a honeymoon, or a family looking for the perfect vacation, we provide well-researched itineraries, travel hacks, and real-life experiences to make your journey unforgettable.”"}
            </p>
        </section>
    )
}
export default FoundersNote