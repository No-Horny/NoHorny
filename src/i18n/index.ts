import { createI18n } from "vue-i18n";
import { userPreferences } from "@/shared/user-preferences";
import messages from "@intlify/vite-plugin-vue-i18n/messages";

const i18n = createI18n({
  locale: userPreferences.lang,
  messages,
  fallbackLocale: "en",
});

export default i18n;
