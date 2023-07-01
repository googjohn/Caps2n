import Image from "../assets/images/profilePictures/ourteam.jpg";

export const Careers = () => {
  return (
    <section className="solutions flex flex-col md:flex-row">
      <div className="md:w-1/2 flex justify-center items-center">
        <div className="p-4">
          <img src={Image} alt="People" style={{ width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}/>
          <div className="overlay bg-gold">
            <div style={{ color: 'white' }} className="text-center">
              <h3 style={{ fontSize: '2rem', fontWeight: '600', maxWidth: '80%', margin: '0 auto' }}>JOIN US NOW</h3>
              <p className= "pb-3 "style={{ marginTop: '0.5rem', maxWidth: '90%', margin: '0 auto'  }}>"Being part of TopAgent will give you satisfaction, fulfillment and personal growth. The work environment is perfect!"</p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center items-center">
        <div className="p-4">
          <h2 className="text-5xl">Become part of our team!</h2>
          <p className="my-4 text-2xl text-gray-600">
            Join our team and unlock your potential as a real estate agent! Experience a rewarding career with limitless opportunities in the dynamic world of property sales and investments. Apply now and embark on a journey of success!
          </p>
          <a href="mailto:cogy@example.com?subject=Job%20Application%20-%20Real%20Estate%20Agent" className="btn btn-outline text-gray-600 text-2xl">
            Email Us <span className="underline text-gold text-2xl">topagent@example.com</span>
          </a>
        </div>
      </div>
    </section>
  );
};
export default Careers;