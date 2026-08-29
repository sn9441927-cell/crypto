import { useState } from "react";
import Link from "next/link";
import { HeaderItem } from "../../../../types/menu";
import { Icon } from "@iconify/react";

const MobileHeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleToggle = () => {
    setSubmenuOpen(!submenuOpen);
  };

  return (
    <div className="relative w-full">
      <Link
        href={item.href}
        onClick={item.submenu ? handleToggle : undefined}
        className="flex items-center justify-between w-full py-3 text-white focus:outline-none border-b border-white/5"
      >
        <span className="text-17 font-medium">{item.label}</span>
        {item.submenu && (
          <Icon
            icon="tabler:chevron-down"
            className={`transition-transform duration-300 ${submenuOpen ? 'rotate-180' : ''}`}
            style={{ color: '#f9ac20' }}
          />
        )}
      </Link>
      {submenuOpen && item.submenu && (
        <div className="bg-white/5 backdrop-blur-md rounded-xl mt-2 overflow-hidden border border-white/10">
          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              className="block py-3 px-6 text-white/70 hover:text-primary hover:bg-primary/5 transition-colors border-l-2 border-transparent hover:border-primary"
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileHeaderLink;
