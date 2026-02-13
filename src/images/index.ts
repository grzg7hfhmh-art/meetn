const getImageUrl = (path: string) => new URL(path, import.meta.url).href

export const COVER_IMAGE = getImageUrl("./cover.png")

export const GALLERY_IMAGES = [
  getImageUrl("./image1.png"),
  getImageUrl("./image2.png"),
  getImageUrl("./image3.png"),
  getImageUrl("./image4.png"),
  getImageUrl("./image5.png"),
  getImageUrl("./image6.png"),
  getImageUrl("./image7.png"),
  getImageUrl("./image8.png"),
  getImageUrl("./image9.png"),
  getImageUrl("./image10.png"),
  getImageUrl("./image11.png"),
  getImageUrl("./image12.png"),
]

export const PROFILE_IMAGES = {
  groom: getImageUrl("./groom_profile.png"),
  bride: getImageUrl("./bride_profile.png"),
  groomMother: getImageUrl("./groom_mother_profile.png"),
  groomFather: getImageUrl("./groom_father_profile.png"),
  groomSister: getImageUrl("./groom_sister_profile.png"),
  brideSister: getImageUrl("./bride_sister_profile.png"),
  brideMother: getImageUrl("./bride_mother_profile.png"),
  brideFather: getImageUrl("./bride_father_profile.png"),
}
