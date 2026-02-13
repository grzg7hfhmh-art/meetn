import { useEffect, useMemo, useState } from "react"
import { LazyDiv } from "../lazyDiv"
import { useLanguage } from "../store/useLanguage"
import { COVER_IMAGE } from "../../images"
import { MEETING_DATE } from "../../const"
import dayjs from "dayjs"

export const Hero = () => {
  const { t, language } = useLanguage()
  const [tsDiff, setTsDiff] = useState(MEETING_DATE.diff())

  useEffect(() => {
    const interval = setInterval(() => {
      setTsDiff(MEETING_DATE.diff())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const diffs = useMemo(() => {
    const tsDiffAbs = Math.abs(tsDiff)
    const seconds = Math.floor((tsDiffAbs % 60000) / 1000)
    const minutes = Math.floor((tsDiffAbs % 3600000) / 60000)
    const hours = Math.floor((tsDiffAbs % 86400000) / 3600000)
    const days = Math.floor(tsDiffAbs / 86400000)
    const isAfter = tsDiff < 0

    return { days, hours, minutes, seconds, isAfter }
  }, [tsDiff])

  const dayDiff = useMemo(() => {
    const dayOffset = MEETING_DATE.diff(MEETING_DATE.startOf("day"))
    return Math.ceil((tsDiff - dayOffset) / 1000 / 60 / 60 / 24)
  }, [tsDiff])

  const locale = language === "ja" ? "ja" : "ko"
  const dateText = dayjs(MEETING_DATE).locale(locale).format("YYYY.MM.DD (ddd) A h:mm")

  return (
    <LazyDiv className="card hero">
      <div className="hero-title">{t.meeting.hero.title}</div>
      <div className="hero-subtitle">{t.meeting.hero.subtitle}</div>

      <div className="break" />

      <div className="hero-date">{dateText}</div>

      <div className="image-wrapper">
        <img src={COVER_IMAGE} alt="hero" />
      </div>

      <div className="hero-greeting">
        {t.meeting.hero.greeting.map((line, idx) => (
          <div key={idx} className={line === "" ? "break" : "content"}>
            {line}
          </div>
        ))}
      </div>

      <div className="break" />

      <div className="countdown-title">{t.meeting.hero.countdown_title}</div>
      <div className="countdown">
        <div className="unit">{t.meeting.hero.countdown_units[0]}</div>
        <div />
        <div className="unit">{t.meeting.hero.countdown_units[1]}</div>
        <div />
        <div className="unit">{t.meeting.hero.countdown_units[2]}</div>
        <div />
        <div className="unit">{t.meeting.hero.countdown_units[3]}</div>
        <div className="count">{diffs.days}</div>
        <span>:</span>
        <div className="count">{diffs.hours}</div>
        <span>:</span>
        <div className="count">{diffs.minutes}</div>
        <span>:</span>
        <div className="count">{diffs.seconds}</div>
      </div>

      <div className="hero-message">
        {dayDiff > 0 ? (
          <>D-{dayDiff}</>
        ) : dayDiff === 0 ? (
          <>{t.meeting.hero.today_message}</>
        ) : (
          <>{t.meeting.hero.past_message.replace("{days}", (-dayDiff).toString())}</>
        )}
      </div>
    </LazyDiv>
  )
}

