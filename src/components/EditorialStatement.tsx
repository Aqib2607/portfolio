const EditorialStatement = () => {
  return (
    <section id="statement" className="py-28 sm:py-40 bg-[#0D0D0D] border-t border-white/10 relative" aria-label="Engineering Statement">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="max-w-5xl space-y-6 sm:space-y-8">
          <p className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.12] tracking-tight">
            <span className="text-[#777777]">Anyone</span> can write code.{" "}
            <span className="text-[#777777]">Some can</span> make it work.{" "}
            A <span className="font-normal text-white">professional software engineer</span> brings{" "}
            <span className="text-primary font-normal">architecture</span> to life, turning complex requirements into{" "}
            <span className="font-normal text-white">reliable systems</span> people can actually use.
          </p>
        </div>

      </div>
    </section>
  );
};

export default EditorialStatement;
