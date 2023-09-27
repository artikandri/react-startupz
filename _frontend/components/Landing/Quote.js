import leftHand from "@/assets/images/untitled-artwork-12-11@2x.png";
import rightHand from "@/assets/images/untitled-artwork-12-1@2x.png";

const Quote = () => {
  return (
    <>
      <section className="container flex items-center justify-center px-4 pb-24 overflow-hidden md:pb-44">
        <div className="flex items-center justify-center gap-5 md:gap-10">
          <img className="w-14 " src={leftHand} alt="left hand ok" />
          <h3 className="text-base md:text-2xl lg:text-4xl  lg:w-[800px] text-coral text-center">
            Startups create a world that actually is better. Any problem that
            can be solved, will be solved by a startup, and that is a huge
            opportunity.
          </h3>
          <img className="w-14 " src={rightHand} alt="right hand ok" />
        </div>
      </section>
    </>
  );
};

export default Quote;
