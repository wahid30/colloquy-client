import React from "react";

const MediaCategory = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5 w-[90%] mx-auto">
      {/* seo management  */}
      <div className="card shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://resultsgrow.com/wp-content/uploads/2020/03/seo-icon.png"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Seo Management</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed ut id eu
            elit
          </p>
        </div>
      </div>
      {/* Social Media  */}
      <div className="card bg-emerald-300 shadow-xl mb-7">
        <figure className="px-10 pt-10">
          <img
            src="https://th.bing.com/th/id/R.25f1eaf0a63f3a96c91784f08fb499df?rik=Aj4sgYCoDg6xVg&pid=ImgRaw&r=0"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Social Media</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed ut id eu
            elit
          </p>
        </div>
      </div>
      {/* Product Branding */}
      <div className="card shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://th.bing.com/th/id/OIP.nburQyj1SHjExRBzaHJUWwHaEc?pid=ImgDet&rs=1"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Product Branding</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed ut id eu
            elit
          </p>
        </div>
      </div>
      {/* Digital Marketing */}
      <div className="card shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://th.bing.com/th/id/R.f456a17f332bb2f0fe08a6505768d784?rik=KmFxy5%2bDiKlZJg&pid=ImgRaw&r=0"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Digital Marketing</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed ut id eu
            elit
          </p>
        </div>
      </div>
    </div>
  );
};

export default MediaCategory;
