import { MdLanguage } from "react-icons/md";
import { useIsRTL } from "../../hooks";
import i18n from "../../i18n";

function Setting() {
  const isRTL = useIsRTL();

  const toggleLanguage = () => {
    const newLang = isRTL ? "en" : "ar";
    i18n.changeLanguage(newLang);
    const direction = newLang === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = direction;
    document.documentElement.lang = newLang;
  };
  return (
    <button type="button" onClick={toggleLanguage}>
      <MdLanguage className="w-6 h-6 text-mainGray" />
    </button>
  );
}

export default Setting;
