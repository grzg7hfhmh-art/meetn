import { LazyDiv } from "../lazyDiv"
import { useLanguage } from "../store/useLanguage"

export const Future = () => {
  const { t } = useLanguage()

  return (
    <LazyDiv className="card future">
      <h2 className="english">{t.meeting.future.title}</h2>
      <div className="subtitle">{t.meeting.future.subtitle}</div>

      <div className="break" />

      <div className="block">
        <div className="heading">{t.meeting.future.wedding_schedule_title}</div>
        <ul>
          {t.meeting.future.wedding_schedule.map((line, idx) => (
            <li key={idx}>{line}</li>
          ))}
        </ul>
      </div>

      <div className="break" />

      <div className="block">
        <div className="heading">{t.meeting.future.letter_title}</div>
        <div className="letter">
          {t.meeting.future.letter.map((line, idx) => (
            <div key={idx} className={line === "" ? "break" : "content"}>
              {line}
            </div>
          ))}
        </div>
      </div>
    </LazyDiv>
  )
}

