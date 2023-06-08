import Image from "next/image";
import SteelersLogo from "../public/Steelers-Club-Logo-_1_-transformed.png";

export default function Logo(props: any) {
  const { renderDefault, title } = props;

  return (
    <div className="flex items-center space-x-2">
      <Image
        className="rounded-full object-cover"
        height={80}
        src={SteelersLogo}
        alt="logo"
        width={80}
      />
      {<>{renderDefault(props)}</>}
    </div>
  );
}
