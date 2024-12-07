import React from "react";

const Landing = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-gray-50 p-8 md:p-16 mt-8">
      {/* Left Side: Image */}
      <div className="flex-shrink-0 w-full md:w-1/3">
        <img
          src="https://plus.unsplash.com/premium_photo-1668383776856-618354131aa0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVudG9yfGVufDB8fDB8fHww"
          alt="Mentorship platform"
          className="rounded-lg h-[70vh] shadow-md object-cover w-full"
        />
      </div>

      {/* Right Side: Text */}
      <div className="mt-8 md:mt-0 md:ml-12 w-full md:w-2/3">
        <h1 className="text-4xl font-bold text-gray-800">
          Unlock Your Potential with Expert Mentorship
        </h1>
        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
          Whether you're looking to become a mentor or book a mentorship session, 
          we provide a platform that connects you with professionals across various 
          fields. Gain valuable insights, improve your skills, and take your personal 
          or professional growth to the next level.
        </p>
        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
          Our mentors are experienced individuals who are passionate about guiding 
          others on their journey. You can easily browse through profiles, read 
          reviews, and select a mentor that aligns with your goals. If you're ready to 
          learn, you can book a session with the mentor that fits your needs. It's 
          that simple.
        </p>
        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
          Not only can you book a session, but you can also create your own mentor 
          profile, share your expertise, and start helping others reach their potential. 
          Whether you're an aspiring professional or an expert in your field, you can 
          contribute to the growth of others while enhancing your own skills.
        </p>
      </div>
    </section>
  );
};

export default Landing;
