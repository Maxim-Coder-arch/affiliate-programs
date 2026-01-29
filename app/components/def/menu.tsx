'use client';
import Link from "next/link";
import { JSX, useState, useEffect } from "react";
import { motion } from "framer-motion";
interface IData { sectionId: string; text: string; }
const NAV_ITEMS: IData[] = [
  { sectionId: "#hero-section", text: "Главная" },
  { sectionId: "#our-offers", text: "Наши предложения" },
  { sectionId: "#trust", text: "Почему нам можно доверять?" },
  { sectionId: "#cards", text: "Банковские продукты" },
  { sectionId: "#faq", text: "FAQ" }
];
const BurgerMenu = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    className="button-menu"
    aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
    aria-expanded={isOpen}
  >
    {Array.from({ length: 3 }).map((_, index) => (
      <div
        key={index}
        className={`line line${index} ${isOpen ? `line-decorate-${index}` : ""}`}
      />
    ))}
  </button>
);
const NavItem = ({ item, index, isVisible, variant = 'default' }: { 
  item: IData; 
  index: number; 
  isVisible: boolean;
  variant?: 'default' | 'mobile';
}) => {
  const animations = {
    default: {
      initial: { opacity: 0, y: 15 },
      animate: isVisible ? { opacity: 1, y: 0 } : {},
      transition: { duration: 0.5, delay: 0.1 * index, ease: "easeOut" }
    },
    mobile: {
      initial: { opacity: 0, width: "200px" },
      animate: isVisible ? { opacity: 1, width: "100%" } : {},
      transition: { duration: 0.6, delay: 0.2 * index, ease: "easeInOut" }
    }
  };
  return (
    <Link href={item.sectionId}>
      <motion.li {...animations[variant]}>
        {item.text}
      </motion.li>
    </Link>
  );
};
export default function Menu(): JSX.Element {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  useEffect(() => {
    const timeout = setTimeout(() => setIsInitialized(true), 1800);
    const handleResize = () => {
      const mobile = window.innerWidth <= 960;
      setIsMobile(mobile);
      if (!mobile) setIsMenuOpen(false);
    };
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    handleResize();
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const showBurgerMenu = (isMobile && !isScrolled) || isScrolled;
  return (
    <>
      {showBurgerMenu && (
        <BurgerMenu 
          isOpen={isMenuOpen} 
          onClick={() => setIsMenuOpen(prev => !prev)} 
        />
      )}
      {!isScrolled && (
        <nav className="navigation" role="navigation" aria-label="Основное меню">
          <ol>
            {NAV_ITEMS.map((item, index) => (
              <NavItem
                key={item.sectionId}
                item={item}
                index={index}
                isVisible={isInitialized}
                variant="default"
              />
            ))}
          </ol>
        </nav>
      )}
      {isMenuOpen && (
        <motion.nav
          className="navigation-style"
          role="navigation"
          aria-label="Мобильное меню"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <ol>
            {NAV_ITEMS.map((item, index) => (
              <Link 
                href={item.sectionId} 
                key={item.sectionId}
                onClick={() => setIsMenuOpen(false)}
              >
                <NavItem
                  item={item}
                  index={index}
                  isVisible={isInitialized}
                  variant="mobile"
                />
              </Link>
            ))}
          </ol>
        </motion.nav>
      )}
    </>
  );
}