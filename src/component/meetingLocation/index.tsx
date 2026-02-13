import { LazyDiv } from "../lazyDiv"
import { useLanguage } from "../store/useLanguage"
import { GOOGLE_MAP_EMBED_URL, GOOGLE_MAP_URL, LOCATION, LOCATION_ADDRESS } from "../../const"

export const MeetingLocation = () => {
  const { t } = useLanguage()
  const isMenuHeading = (line: string) => {
    const text = line.trim()
    return (
      (text.startsWith("[") && text.endsWith("]")) ||
      (text.startsWith("【") && text.endsWith("】"))
    )
  }

  return (
    <LazyDiv className="card meeting-location">
      <h2 className="english">{t.meeting.location.title}</h2>
      <div className="subtitle">{t.meeting.location.subtitle}</div>

      <div className="break" />

      <div className="addr">
        {LOCATION}
        <div className="detail">{LOCATION_ADDRESS}</div>
      </div>

      <div className="map-wrapper">
        <iframe
          className="map-iframe"
          src={GOOGLE_MAP_EMBED_URL}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        />
      </div>

      <div className="map-actions">
        <button
          className="open-google"
          onClick={() => window.open(GOOGLE_MAP_URL, "_blank")}
        >
          {t.meeting.location.open_google_maps}
        </button>
      </div>

      <div className="break" />

      <div className="info-block">
        <div className="heading">{t.meeting.location.transport_title}</div>
        <ul>
          {t.meeting.location.transport.map((line, idx) => (
            <li key={idx}>{line}</li>
          ))}
        </ul>
      </div>

      <div className="break" />

      <div className="info-block">
        <div className="heading">{t.meeting.location.menu_title}</div>
        <ul className="menu-list">
          {t.meeting.location.menu.map((line, idx) => (
            <li
              key={idx}
              className={`menu-item${isMenuHeading(line) ? " menu-heading" : ""}`}
            >
              {line}
            </li>
          ))}
        </ul>
      </div>
    </LazyDiv>
  )
}
