import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const FirstSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const imageHostKey = process.env.REACT_APP_imgbb_key;
  // console.log(imageHostKey);
  const navigate = useNavigate();

  // const { data: specialties, isLoading } = useQuery({
  //   queryKey: ["specialty"],
  //   queryFn: async () => {
  //     const res = await fetch("http://localhost:5000/appointmentSpecialty");
  //     const data = await res.json();
  //     return data;
  //   },
  // });

  const handleAddPost = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const colloquyUser = {
            text: data.text,
            image: imgData.data.url,
          };
          console.log(colloquyUser);
          // save colloquyUser information to the database
          fetch("http://localhost:5000/colloquyUser", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              // authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(colloquyUser),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success("Your post is added successfully");
              navigate("/media");
            });
        }
      });
  };

  // if (isLoading) {
  //   return <Loading></Loading>;
  // }

  return (
    <div className="w-9/12 mx-auto my-5">
      <h2 className="text-4xl my-2">Create a post.</h2>
      <form
        className="bg-slate-200 rounded-2xl p-5"
        onSubmit={handleSubmit(handleAddPost)}
      >
        <div className="form-control w-full max-w-xs">
          <textarea
            type="text"
            {...register("text", {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs h-[150px]"
            placeholder="type here"
          />
          {errors.text && <p className="text-red-500">{errors.text.message}</p>}
        </div>
        <div className="form-control w-full max-w-xs p-2">
          <input
            type="file"
            {...register("image", {
              required: "Photo is Required",
            })}
            className="input w-full max-w-xs mt-2 pt-2"
          />
          {errors.img && <p className="text-red-500">{errors.img.message}</p>}
        </div>
        <input
          className="btn btn-outline btn-info btn-sm mt-2"
          value="Submit"
          type="submit"
        />
      </form>
    </div>
  );
};

export default FirstSection;
