import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import "dayjs/locale/ko"
import "dayjs/locale/ja"

import { PROFILE_IMAGES } from "./images"

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.locale("ko")

/**
 * 상견례 일정 (일본 개최 가정)
 * - 실제 일정/도시는 여기만 수정하면 됩니다.
 */
export const MEETING_DATE = dayjs.tz("2026-03-09 12:00", "Asia/Tokyo")

/**
 * 상견례 장소
 * - 일본 개최인 경우, Google Maps 검색어/주소를 일본식으로 적어도 됩니다.
 */
export const LOCATION = "Higashiyama Shinjuku Main Store"
export const LOCATION_ADDRESS = "〒160-0023 Tokyo, Shinjuku City, Nishishinjuku, 2 Chome−4−1 29階"

export const GOOGLE_MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(LOCATION)}`
export const GOOGLE_MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(LOCATION)}&output=embed`

// 이름 정보 (언어별)
const NAMES = {
  ko: {
    groom: {
      fullName: "양성준",
      father: "양광석",
      mother: "조정희"
    },
    bride: {
      fullName: "카바야마 사리",
      father: "카바야마 나리토",
      mother: "카바야마 나호코"
    }
  },
  ja: {
    groom: {
      fullName: "梁 成俊",
      father: "梁 光錫",
      mother: "趙 情希"
    },
    bride: {
      fullName: "樺山 紗梨",
      father: "樺山 成人",
      mother: "樺山 菜穂子"
    }
  }
}

export const OG_GROOM_FULLNAME = NAMES.ko.groom.fullName
export const OG_BRIDE_FULLNAME = NAMES.ko.bride.fullName

type MeetingProfilePerson = {
  /** 신랑/신부 구분 */
  role: "groom" | "bride"
  name: string
  age?: number
  job?: string
  bloodType?: string
  hobbies?: string[]
  keyword?: string
  profileImageUrl?: string
}

type MeetingFamilyMember = {
  name: string
  relation: string
  age?: number
  job?: string
  bloodType?: string
  hobbies?: string[]
  keyword?: string
  profileImageUrl?: string
}

const MEETING_PROFILE = {
  ko: {
    groom: {
      role: "groom",
      name: NAMES.ko.groom.fullName,
      age: 28,
      job: "시스템 엔지니어",
      bloodType: "A형",
      hobbies: ["운동", "요리", "커피"],
      keyword: "#차분함 #집돌이 #한다면한다",
      profileImageUrl: PROFILE_IMAGES.groom,
    } satisfies MeetingProfilePerson,
    bride: {
      role: "bride",
      name: NAMES.ko.bride.fullName,
      age: 27,
      job: "이벤트 코디네이터",
      bloodType: "B형",
      hobbies: ["한국어공부", "넷플릭스시청", "운동"],
      keyword: "#실행력 #집순이 #책임감 #계획러 ",
      profileImageUrl: PROFILE_IMAGES.bride,
    } satisfies MeetingProfilePerson,
  },
  ja: {
    groom: {
      role: "groom",
      name: NAMES.ja.groom.fullName,
      age: 28,
      job: "システムエンジニア",
      bloodType: "A型",
      hobbies: ["運動","料理","コーヒー"],
      keyword: "#落ち着く #インドア派 #やるときはやる",
      profileImageUrl: PROFILE_IMAGES.groom,
    } satisfies MeetingProfilePerson,
    bride: {
      role: "bride",
      name: NAMES.ja.bride.fullName,
      age: 27,
      job: "イベントコーディネーター",
      bloodType: "B型",
      hobbies: ["韓国語学習", "Netflix鑑賞", "運動"],
      keyword: "#実行力 #インドア派 #責任感 #計画的",
      profileImageUrl: PROFILE_IMAGES.bride,
    } satisfies MeetingProfilePerson,
  },
} as const

export const getCurrentMeetingProfile = (language: "ko" | "ja") =>
  MEETING_PROFILE[language]

const MEETING_FAMILY = {
  ko: {
    groomSide: [
      {
        relation: "신랑 아버지",
        name: NAMES.ko.groom.father,
        age: 59,
        job: "공무원",
        bloodType: "O형",
        hobbies: ["테니스", "낚시", "목공"],
        keyword: "#긍정적 #다정다감 #목수",
        profileImageUrl: PROFILE_IMAGES.groomFather,
      },
      {
        relation: "신랑 어머니",
        name: NAMES.ko.groom.mother,
        age: 59,
        job: "공무원",
        bloodType: "A형",
        hobbies: ["골프", "도예"],
        keyword: "#실행력 #다재다능 #새벽운동",
        profileImageUrl: PROFILE_IMAGES.groomMother,
      },
      {
        relation: "신랑 누나",
        name: "양수휘",
        age: 30,
        job: "물리치료사",
        bloodType: "A형",
        hobbies: ["야구경기관람", "여행"],
        keyword: "#똑부러짐 #정보수집담당 #여행러",
        profileImageUrl: PROFILE_IMAGES.groomSister,
      },
    ] satisfies MeetingFamilyMember[],
    brideSide: [
      {
        relation: "신부 아버지",
        name: NAMES.ko.bride.father,
        age: 70,
        job: "무대감독",
        bloodType: "O형",
        hobbies: ["게임", "야구관람"],
        keyword: "#애주가 #디저트 #유머러스 #장난기",
        profileImageUrl: PROFILE_IMAGES.brideFather,
      },
      {
        relation: "신부 어머니",
        name: NAMES.ko.bride.mother,
        age: 61,
        job: "회시원",
        bloodType: "AB형",
        hobbies: ["넷플릭스감상", "언어공부"],
        keyword: "#똑부러짐 #계획적 #한국드라마",
        profileImageUrl: PROFILE_IMAGES.brideMother,
      },
      {
        relation: "신부 언니",
        name: "카바야마 칸나",
        age: 30,
        job: "공무원",
        bloodType: "A형",
        hobbies: ["술만들기", "베이킹"],
        keyword: "#여행러 #디즈니 #잔잔한사교성",
        profileImageUrl: PROFILE_IMAGES.brideSister,
      },
    ] satisfies MeetingFamilyMember[],
  },
  ja: {
    groomSide: [
      {
        relation: "新郎の父",
        name: NAMES.ja.groom.father + "（ヤン グァンソク）",
        age: 60,
        job: "公務員",
        bloodType: "O型",
        hobbies: ["登山", "釣り"],
        keyword: "#ポジティブ #思いやり #大工さん",
        profileImageUrl: PROFILE_IMAGES.groomFather,
      },
      {
        relation: "新郎の母",
        name: NAMES.ja.groom.mother+ "（チョ　ジョンヒ）",
        age: 60,
        job: "職業サンプル（新郎の母）",
        bloodType: "A型",
        hobbies: ["ゴルフ", "陶芸"],
        keyword: "#行動力 #多才 #医学博識 #早朝活",
        profileImageUrl: PROFILE_IMAGES.groomMother,
      },
      {
        relation: "新郎の姉",
        name: "梁 秀輝（ヤン スフィ）",
        age: 30,
        job: "理学療法士",
        bloodType: "A型",
        hobbies: ["野球観戦", "旅行"],
        keyword: "#しっかり者 #情報収集担当 #旅行好き",
        profileImageUrl: PROFILE_IMAGES.groomSister,
      },
    ] satisfies MeetingFamilyMember[],
    brideSide: [
      {
        relation: "新婦の父",
        name: NAMES.ja.bride.father,
        age: 70,
        job: "舞台監督",
        bloodType: "O型",
        hobbies: ["ゲーム", "野球観戦"],
        keyword: "#お酒好き #甘党 #頑固 #おちゃめ",
        profileImageUrl: PROFILE_IMAGES.brideFather,
      },
      {
        relation: "新婦の母",
        name: NAMES.ja.bride.mother,
        age: 61,
        job: "会社員",
        bloodType: "AB型",
        hobbies: ["Netflix視聴", "言語学習"],
        keyword: "#しっかり者 #韓国好き #完全なT",
        profileImageUrl: PROFILE_IMAGES.brideMother,
      },
      {
        relation: "新婦の姉",
        name: "新婦のお姉さん",
        age: 30,
        job: "公務員",
        bloodType: "A型",
        hobbies: ["お酒作り", "ベーキング"],
        keyword: "#旅行好き #ディズニー #社交性",
        profileImageUrl: PROFILE_IMAGES.brideSister,
      },
    ] satisfies MeetingFamilyMember[],
  },
} as const

export const getCurrentMeetingFamily = (language: "ko" | "ja") =>
  MEETING_FAMILY[language]

export const TRANSLATIONS = {
  ko: {
    meeting: {
      hero: {
        title: "상견례 안내",
        subtitle: "두 가족이 처음으로 인사드리는 자리",
        greeting: [
          "소중한 분들을 모시고",
          "두 가족이 처음으로 인사를 나누는",
          "상견례 자리를 마련했습니다.",
          "",
          "부담 없이 편하게 오셔서",
          "따뜻한 대화를 나누며",
          "좋은 시간 보내주시면 감사하겠습니다.",
        ],
        countdown_title: "상견례까지",
        countdown_units: ["일", "시", "분", "초"],
        today_message: "오늘입니다.",
        past_message: "{days}일 지났습니다.",
      },
      profile: {
        title: "Profile",
        subtitle: "두 사람 소개 & 짧은 이야기",
        couple_intro: [
          "서로의 하루를 가장 먼저 나누는 사람이 되었고,",
          "이제는 두 가족이 함께 웃을 수 있는 시간을 만들고자 합니다.",
        ],
        labels: {
          name: "이름",
          role_groom: "신랑",
          role_bride: "신부",
          job: "직업",
          age: "나이",
          blood_type: "혈액형",
          hobbies: "취미",
          keyword: "키워드",
        },
        story_title: "우리의 이야기",
        story: [
          { year: "2024.03", text: "처음 인연이 시작되었습니다." },
          { year: "2025.07", text: "동거를 시작하고 함께 생활하며 많은 것을 함께 경험했습니다." },
          { year: "2026.03", text: "두 가족이 함께 인사드리는 자리를 마련했습니다." },
        ],
      },
      family: {
        title: "Family",
        subtitle: "양가 소개 (탭을 눌러 전환하세요)",
        tabs: { groom: "신랑측", bride: "신부측" },
      },
      location: {
        title: "Location",
        subtitle: "오시는 길 & 메뉴 안내",
        open_google_maps: "Google Maps로 열기",
        transport_title: "교통편",
        transport: ["신주쿠역 하차 후 도보 8분"],
        menu_title: "메뉴",
        menu: [
          "[전채 요리]",
          "원앙 모양 절임과 계절 요리 2종을 포함한 여덟 가지 전채",
          "달콤하고 부드러운 치즈 카스텔라",
          "잘게 다진 닭고기를 구워낸 토리 마츠카제",
          "단맛을 살려 통통하게 삶은 새우 자박이",
          "달콤하게 졸인 자색 강낭콩 정과",
          "꽃잎 모양의 백합 뿌리 조림",
          "[회]",
          "엄선한 두 가지 생선회와 곁들임 채소",
          "감칠맛을 더한 다시마 간장",
          "[메인 냄비 요리]",
          "흑돼지 스키야키 (개별 화로 제공)",
          "[중간 요리]",
          "주방장 특선 세 가지 요리 모둠",
          "[찜 요리]",
          "찰밥 유바 찜",
          "부드러운 푸딩 식감의 달걀찜에 성게알(우니)과 곁들임 채소를 올린 요리",
          "[식사]",
          "키누죠 이나니와 우동",
          "도미 뼈로 우려낸 뽀얀 두유 육수를 곁들인 매끄러운 식감의 우동",
          "[디저트]",
          "데일리 엄선 디저트",
        ],
      },
      future: {
        title: "Future",
        subtitle: "결혼 일정 & 감사의 글",
        wedding_schedule_title: "결혼 일정",
        wedding_schedule: [
          "예식: 2026년 6월 21일 (일) 12:30 · 진주",
          "상세 안내는 추후 다시 공유드리겠습니다.",
        ],
        letter_title: "감사의 글",
        letter: [
          "오늘 함께해주셔서 진심으로 감사합니다.",
          "두 가족이 편안하게 가까워질 수 있도록",
          "따뜻한 마음으로 자리해주시면 큰 힘이 됩니다.",
          "",
          "앞으로도 잘 부탁드립니다.",
        ],
      },
    },
    common: {
      close: "닫기",
    },
  },
  ja: {
    meeting: {
      hero: {
        title: "顔合わせのご案内",
        subtitle: "両家で初めてご挨拶する場",
        greeting: [
          "大切な皆さまをお迎えし、",
          "両家で初めてご挨拶を交わす",
          "顔合わせの席を設けました。",
          "",
          "どうぞ肩の力を抜いてお越しいただき、",
          "温かい会話とともに",
          "楽しい時間をお過ごしください。",
        ],
        countdown_title: "顔合わせまで",
        countdown_units: ["日", "時", "分", "秒"],
        today_message: "本日です。",
        past_message: "{days}日経ちました。",
      },
      profile: {
        title: "Profile",
        subtitle: "二人の紹介 & 短いストーリー",
        couple_intro: [
          "日々の出来事を最初に分かち合う存在になり、",
          "これからは両家が一緒に笑える時間を大切にしたいと思っています。",
        ],
        labels: {
          name: "名前",
          role_groom: "新郎",
          role_bride: "新婦",
          job: "職業",
          age: "年齢",
          blood_type: "血液型",
          hobbies: "趣味",
          keyword: "キーワード",
        },
        story_title: "私たちのストーリー",
        story: [
          { year: "2024.03", text: "ご縁が始まりました。" },
          { year: "2025.07", text: "同棲を始めて共に生活を楽しんでいます。" },
          { year: "2026.03", text: "両家でご挨拶する場を用意しました。" },
        ],
      },
      family: {
        title: "Family",
        subtitle: "ご家族紹介（タブで切り替え）",
        tabs: { groom: "新郎側", bride: "新婦側" },
      },
      location: {
        title: "Location",
        subtitle: "アクセス & メニュー案内",
        open_google_maps: "Google Mapsで開く",
        transport_title: "アクセス",
        transport: [
          "新宿駅「南口・西口」より徒歩7分",
          "西武新宿駅より徒歩約15分",
          "都庁前駅A3出口より徒歩約3分",
        ],
        menu_title: "メニュー",
        menu: [
          "【御祝八寸】",
          "鴛鴦に（季節もの二種）チーズカステラ　鶏松風　海老芝煮　紫花豆甘露煮　おちょぼ百合根",
          "御造里",
          "二種盛り合わせ　妻一式　昆布醤油",
          "【御鍋物】",
          "黒豚出汁しゃぶ一人鍋",
          "【御合肴】",
          "三種盛り込み",
          "【御留肴】",
          "赤飯湯葉蒸し　玉地　雲丹　青味",
          "【御食事】",
          "絹女稲庭うどん　鯛潮豆乳仕立て",
          "【甘味】",
          "本日用意の甘味より",
        ],
      },
      future: {
        title: "Future",
        subtitle: "結婚の予定 & お礼",
        wedding_schedule_title: "結婚の予定",
        wedding_schedule: [
          "挙式: 2026年6月21日（日）12:30",
          "詳細は改めてご案内いたします。",
        ],
        letter_title: "お礼",
        letter: [
          "本日はお越しいただき誠にありがとうございます。",
          "両家が和やかに近づけるよう、",
          "温かいお気持ちでご一緒いただけますと幸いです。",
          "",
          "今後ともどうぞよろしくお願いいたします。",
        ],
      },
    },
    common: {
      close: "閉じる",
    },
  },
}
