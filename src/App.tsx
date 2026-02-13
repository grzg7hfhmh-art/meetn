import "./App.scss"
import { useEffect } from "react"
import { Hero } from "./component/hero"
import { Profile } from "./component/profile"
import { Family } from "./component/family"
import { MeetingLocation } from "./component/meetingLocation"
import { Future } from "./component/future"
import { LazyDiv } from "./component/lazyDiv"
import { LanguageSelector } from "./component/languageSelector"
import { useLanguage } from "./component/store/useLanguage"





function App() {
  const { language } = useLanguage()

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return (
    <div className={`background lang-${language}`}>
      {/* <BGEffect /> */}
      <LanguageSelector />
      <div className="card-view">
        <LazyDiv className="card-group">
          {/* Hero: 메인 사진 + 인사말 + 카운트다운 */}
          <Hero />
          {/* Profile: 두 사람 소개/스토리 */}
          <Profile />
        </LazyDiv>

        <LazyDiv className="card-group">
          {/* Family: 양가 소개(탭) */}
          <Family />
          {/* Location: Google Maps + 교통편/메뉴 */}
          <MeetingLocation />
        </LazyDiv>

        <LazyDiv className="card-group">
          {/* Future: 결혼 일정 + 감사 편지 */}
          <Future />
        </LazyDiv>
      </div>
      <div className="site-credit">Developed by Yang</div>
    </div>
  )
}

export default App
