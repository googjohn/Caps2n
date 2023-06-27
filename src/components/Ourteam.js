import ourteamLogo  from "../assets/images/ourteam.jpg";

export const Ourteam = () => {
  return (
    <>
    {/* section about */}
    <section id="about" class="border-4 border-gold  text-center ">
      <div className="container mx-auto   pt-4" data-aos="fade-up">
        <div className="row">
          <div className="col-md-12">
            <h3 className="section-title text-3xl font-bold">About Us</h3>
            <div className="section-title-divider" />
             <p className="section-description"> 
              TopAgentPH is a premier real estate brokerage firm that has been
              providing exceptional service to clients throughout the Philippines
              for over a decade.
             </p>
          </div>
        </div>
      </div>
      <div
        className="container about-container mx-auto pb-4"
        data-aos="fade-up"
        data-aos-delay={200}
      >
         
        <div className="row flex">
          <div className="col-lg-6 about-img">
            <img src={ourteamLogo} alt="" />
          </div>
          <div className="col-md-6 about-content self-center ">
            <p className="about-text">
             
TopAgentPH, a Philippine-based real estate firm, excels in assisting clients with property buying, selling, and renting. Their expert team of agents, well-versed in the local market, is dedicated to fulfilling client real estate objectives. They offer comprehensive services such as property listing, management, real estate consultancy, and investment advisory, catering to both local and international clients through a robust online platform.
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* End About Section */}
  </>
  
  )
}
