const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className=" flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
      <div className="w-11 h-11 flex bg-coral-red justify-center items-center text-coral-red rounded-full">
        <img src={imgURL} alt="image" width={24} height={24} />
      </div>
      <h3 className="mt-5 text-3xl font-palanquin font-bold leading-normal">
        {label}
      </h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
