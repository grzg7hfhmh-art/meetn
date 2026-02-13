import { useContext } from "react"
import { LanguageContext, LanguageContextType } from "./languageContext"
import { TRANSLATIONS } from "../../const"

export const useLanguage = (): LanguageContextType & {
  t: (typeof TRANSLATIONS)[keyof typeof TRANSLATIONS]
} => {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }

  return {
    ...context,
    t: TRANSLATIONS[context.language],
  }
}
