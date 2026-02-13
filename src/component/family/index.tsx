import { useMemo, useState } from "react"
import { LazyDiv } from "../lazyDiv"
import { useLanguage } from "../store/useLanguage"
import { getCurrentMeetingFamily } from "../../const"
import { useModal } from "../modal"
import { Button } from "../button"

type Side = "groom" | "bride"

export const Family = () => {
  const { t, language } = useLanguage()
  const { openModal, closeModal } = useModal()
  const family = useMemo(() => getCurrentMeetingFamily(language), [language])
  const [side, setSide] = useState<Side>("groom")

  const members = side === "groom" ? family.groomSide : family.brideSide

  const openDetail = (m: (typeof members)[number]) => {
    const labels = t.meeting.profile.labels

    openModal({
      className: "family-profile-modal",
      closeOnClickBackground: true,
      header: (
        <>
          <div className="image-wrapper">
            <img src={m.profileImageUrl} alt=" " />
          </div>
          <div className="title-group">
            <div className="title">
              {m.name}
              <span className="role">{m.relation}</span>
            </div>
          </div>
        </>
      ),
      content: (
        <div className="family-detail">
          <dl>
            <div className="row">
              <dt>{labels.name}</dt>
              <dd>{m.name}</dd>
            </div>
            {m.job && (
              <div className="row">
                <dt>{labels.job}</dt>
                <dd>{m.job}</dd>
              </div>
            )}
            {typeof m.age === "number" && (
              <div className="row">
                <dt>{labels.age}</dt>
                <dd>
                  {m.age}
                  {language === "ja" ? "歳" : "세"}
                </dd>
              </div>
            )}
            {m.bloodType && (
              <div className="row">
                <dt>{labels.blood_type}</dt>
                <dd>{m.bloodType}</dd>
              </div>
            )}
            {m.hobbies && m.hobbies.length > 0 && (
              <div className="row">
                <dt>{labels.hobbies}</dt>
                <dd>{m.hobbies.join(", ")}</dd>
              </div>
            )}
            <div className="row">
              <dt>{labels.keyword}</dt>
              <dd>{m.keyword}</dd>
            </div>
          </dl>

          {/* {m.memo && m.memo.length > 0 && (
            <div className="memo">
              {m.memo.map((line, idx) => (
                <Fragment key={idx}>
                  <div className="content">{line}</div>
                  {idx < m.memo.length - 1 && <div className="break" />}
                </Fragment>
              ))}
            </div>
          )} */}

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
    <LazyDiv className="card family">
      <h2 className="english">{t.meeting.family.title}</h2>
      <div className="subtitle">{t.meeting.family.subtitle}</div>

      <div className="break" />

      <div className="tabs">
        <button
          className={"tab" + (side === "groom" ? " active" : "")}
          onClick={() => setSide("groom")}
        >
          {t.meeting.family.tabs.groom}
        </button>
        <button
          className={"tab" + (side === "bride" ? " active" : "")}
          onClick={() => setSide("bride")}
        >
          {t.meeting.family.tabs.bride}
        </button>
      </div>

      <div className="break" />

      <div className="member-list">
        {members.map((m) => (
          <button
            type="button"
            className="member"
            key={`${m.relation}-${m.name}`}
            onClick={() => openDetail(m)}
          >
            <div className="top">
              <div
                className={
                  "avatar" + (m.profileImageUrl ? " with-image" : "")
                }
                style={
                  m.profileImageUrl
                    ? { backgroundImage: `url(${m.profileImageUrl})` }
                    : undefined
                }
              >
                {!m.profileImageUrl && <span>{m.name.charAt(0)}</span>}
              </div>
              <div className="text">
                <div className="relation">{m.relation}</div>
        <div className="name">{m.name}</div>
        {m.keyword && <div className="summary">{m.keyword}</div>}
              </div>
            </div>
          </button>
        ))}
      </div>
    </LazyDiv>
  )
}
