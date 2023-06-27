import Image from "../assets/images/profilePictures/jeric2.jpeg";

export const Careers = () => {
  return (
    <section className="solutions flex flex-col md:flex-row">
      <div className="md:w-1/2 flex justify-center items-center">
        <div className="p-4">
          <img src={Image} alt="People" style={{ width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}/>
          <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} className="overlay">
            <div style={{ color: 'white' }} className="text-center">
              <h3 style={{ fontSize: '2rem', fontWeight: '600', maxWidth: '80%', margin: '0 auto' }}>Ronald Jhon Snow</h3>
              <p style={{ marginTop: '0.5rem', maxWidth: '90%', margin: '0 auto'  }}>"Being an agent in TopAgent gives me satisfaction, fulfillment and personal growth. The work environment is perfect!"</p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center items-center">
        <div className="p-4">
          <h2 className="text-4xl">Be part of our team!</h2>
          <p className="my-4">
            Join our team and unlock your potential as a real estate agent! Experience a rewarding career with limitless opportunities in the dynamic world of property sales and investments. Apply now and embark on a journey of success!
          </p>
          <a href="mailto:cogy@example.com?subject=Job%20Application%20-%20Real%20Estate%20Agent" className="btn btn-outline">
            Email Us <span className="underline text-blue-500">cogy@example.com</span>
          </a>
        </div>
      </div>
    </section>
  );
};
