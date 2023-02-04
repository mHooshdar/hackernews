export interface StoryDTO {
  by: string;
  desendantes: number;
  id: number;
  kids: Array<number>;
  score: number;
  time: number;
  title: string;
  type: 'story';
  url: string;
}

export type TopStoriesDTO = number[];
