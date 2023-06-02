import { OfferType } from "@/shared/types";

const ClassComponent = ({ name, description, image }: OfferType) => {
  const overlayStyles = `p-5 absolute z-25 flex
    h-[380px] w-[450px] flex-col items-center justify-center whitespace-normal bg-red-700 text-center text-white
    opacity-0 transition duration-500 hover:opacity-90`;

  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img src={image} alt={`${image}`} />
    </li>
  );
};

export default ClassComponent;
