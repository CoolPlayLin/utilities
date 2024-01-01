export interface Song {
  songName: string;
  singer: string;
  length: number;
}

export interface Scheme {
  fullLength: number;
  songs: Song[];
}
