import { useTranslation } from "react-i18next"
import i18n from "../../../util/i18n";

export default function TranslationComponent() {
const {t} = useTranslation(["translation"]);

const switchToLanguage= (language) => {
    console.log('switch ', language);
    i18n.changeLanguage(language);
}

  return (
    <div>
      <div>ini translation</div>
      <div onClick={() => switchToLanguage("id")}>idn</div>
      <div onClick={() => switchToLanguage("en")}>en</div>
      <div>
        <h1>{t("greeting")}</h1>
        <p>{t("message")}</p>
      </div>
    </div>
  );
}
