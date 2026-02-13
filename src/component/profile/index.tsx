import { LazyDiv } from "../lazyDiv"
import { useLanguage } from "../store/useLanguage"
import { getCurrentMeetingProfile } from "../../const"
import { useModal } from "../modal"
import { Button } from "../button"

export const Profile = () => {
  const { t, language } = useLanguage()
  const { openModal, closeModal } = useModal()
  const profile = getCurrentMeetingProfile(language)

  const openDetail = (personKey: "groom" | "bride") => {
    const p = profile[personKey]
    const labels = t.meeting.profile.labels

    openModal({
      className: "profile-modal",
      closeOnClickBackground: true,
      header: (
        <>
          <div className="image-wrapper">
            <img src={p.profileImageUrl} alt=" " />
          </div>
          <div className="title-group">
            <div className="title">
              {p.name}
              <span className="role">{p.role === "groom" ? labels.role_groom : labels.role_bride}</span>
            </div>
          </div>
        </>
      ),
      content: (
        <div className="profile-detail">
          <dl>
            <div className="row">
              <dt>{labels.name}</dt>
              <dd>{p.name}</dd>
            </div>
            {p.job && (
              <div className="row">
                <dt>{labels.job}</dt>
                <dd>{p.job}</dd>
              </div>
            )}
            {typeof p.age === "number" && (
              <div className="row">
                <dt>{labels.age}</dt>
                <dd>{p.age}</dd>
              </div>
            )}
            {p.bloodType && (
              <div className="row">
                <dt>{labels.blood_type}</dt>
                <dd>{p.bloodType}</dd>
              </div>
            )}
            {p.hobbies && p.hobbies.length > 0 && (
              <div className="row">
                <dt>{labels.hobbies}</dt>
                <dd>{p.hobbies.join(", ")}</dd>
              </div>
            )}
            {p.keyword && (
              <div className="row">
                <dt>{labels.keyword}</dt>
                <dd>{p.keyword}</dd>
              </div>
            )}
          </dl>
        </div>
      ),
      footer: (
        <Button
          buttonStyle="style2"
          className="bg-light-grey-color text-dark-color"
          onClick={closeModal}
        >
          {t.common.close}
        </Button>
      ),
    })
  }

  return (
    <LazyDiv className="card profile">
      <h2 className="english">{t.meeting.profile.title}</h2>
      <div className="subtitle">{t.meeting.profile.subtitle}</div>

      <div className="break" />

      <div className="section">
        {t.meeting.profile.couple_intro.map((line, idx) => (
          <div key={idx} className="content">
            {line}
          </div>
        ))}
      </div>

      <div className="break" />

       {/* 신랑/신부 간단 프로필 카드 */}
      <div className="person-grid">
        {(["groom", "bride"] as const).map((key) => {
          const p = profile[key]
          const labels = t.meeting.profile.labels
          return (
            <button
              key={key}
              className="person-card"
              type="button"
              onClick={() => openDetail(key)}
            >
              <div
                className={
                  "avatar" + (p.profileImageUrl ? " with-image" : "")
                }
                style={
                  p.profileImageUrl
                    ? { backgroundImage: `url(${p.profileImageUrl})` }
                    : undefined
                }
              >
                {!p.profileImageUrl && <span>{p.name.charAt(0)}</span>}
              </div>
              <div className="person-main">
                <div className="name-row">
                  <span className="name">{p.name}</span>
                  <span className="role">
                    {p.role === "groom" ? labels.role_groom : labels.role_bride}
                  </span>
                </div>
                <div className="meta">
                  {p.job && <span>{p.job}</span>}
                  {typeof p.age === "number" && (
                    <span>
                      {p.age}
                      {language === "ja" ? "歳" : "세"}
                    </span>
                  )}
                  {p.bloodType && <span>{p.bloodType}</span>}
                </div>
                {p.keyword && p.keyword.length > 0 && (
                  <div className="hobbies">
                    {p.keyword}
                  </div>
                )}
              </div>
            </button>
          )
        })}
      </div>

      <div className="break" />

      <div className="section timeline-section">
        <div className="heading">{t.meeting.profile.story_title}</div>
        <div className="timeline">
          {t.meeting.profile.story.map((item, idx) => (
            <div className="timeline-item" key={idx}>
              <div className="year">{item.year}</div>
              <div className="text">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </LazyDiv>
  )
}
