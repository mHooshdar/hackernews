type StoryID = number;
export interface StoryDTO {
  id: StoryID;
  deleted: boolean;
  type: 'story' | 'job' | 'story' | 'comment' | 'poll' | 'pollopt';
  by: string;
  time: number;
  text: string;
  dead: boolean;
  parent: StoryID;
  poll: StoryID;
  kids: StoryID[];
  url: string;
  score: number;
  title: string;
  parts: StoryID[];
  descendants: number;
}

export type TopStoriesDTO = StoryID[];
