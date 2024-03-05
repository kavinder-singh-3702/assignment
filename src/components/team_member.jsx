export default function team_member({ image, name, designation, description }) {
  return (
    <div className="flex rounded-md bg-blue-100 p-2 my-4 mr-4  ">
      <div className="flex flex-col gap-4 ml-4 pt-4 items-center justify-center">
        <img src={image} alt="" className="h-[10vh] w-[10vh] rounded-md" />
        <div className=" my-2">
          <h3 className="text-[14px] font-semibold w-[6vw] text-center">
            {" "}
            {name}
          </h3>
          <h3 className="text-[8px] text-grey-200 text-center">
            {designation}
          </h3>
        </div>
      </div>
      <div className="p-4 pl-6">{description}</div>
    </div>
  );
}
