type VideoArray = {
  [
    Video
  ]
}

type Video = {
    id:              string,
    title:           string | null,
    tags:            string[],
    description:     string | null, 
    image:           string | null,
    likedIds:        string[],
    dislikedIds:     string[],
    blocked:        boolean,
    uploadedAt:      string,
    updatedAt:       string,
    userId:          string
  }