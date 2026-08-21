const EngineeringPerspective = () => {
  return (
    <section className="py-28 sm:py-40 bg-[#0D0D0D] border-t border-white/10 relative" aria-label="Engineering Perspective">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="max-w-5xl space-y-6 sm:space-y-8">
          <p className="font-heading text-3xl sm:text-5xl md:text-6xl font-light text-white leading-[1.15] tracking-tight">
            Every complex engineering problem has{" "}
            <span className="font-normal text-white">more than one architecture</span>.{" "}
            <span className="text-[#777777]">That's why I explore, prototype, and refine</span> until the system clicks.{" "}
            I don't just write code —{" "}
            <span className="text-primary font-normal">I rethink how the software</span> solves the underlying business challenge.
          </p>
        </div>

      </div>
    </section>
  );
};

export default EngineeringPerspective;
