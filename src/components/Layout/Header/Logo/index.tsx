import { getImagePrefix } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src={`${getImagePrefix()}images/logo/logo.svg`}
        alt="logo"
        width={160}
        height={50}
        className="w-36 h-auto sm:w-36 md:w-36 lg:w-40 xl:w-[160px] transition-all duration-300"
        quality={100}
        priority
      />
    </Link>
  );
};

export default Logo;
