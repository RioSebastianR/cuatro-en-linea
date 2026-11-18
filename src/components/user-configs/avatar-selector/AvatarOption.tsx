import Avatar, { genConfig } from "react-nice-avatar";

export const AvatarOption = () => {
  const config = genConfig({ mouthStyle: "peace" });
  return (
    <div className="flex items-center gap-x-6 m-4">
      <Avatar style={{ width: "5rem", height: "5rem" }} {...config} />
      <div>
        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
          Leslie Alexander
        </h3>
        <p className="text-sm font-semibold leading-6 text-indigo-600">
          Co-Founder / CEO
        </p>
      </div>
    </div>
  );
};
