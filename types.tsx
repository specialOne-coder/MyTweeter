export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  Notifications: undefined;
  Messages: undefined;
};

export type HomeParamList = {
  HomeScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type UserType = {
  id: string,
  username: string,
  name: string,
  image: string
}
export type TweetType = {
  id: string,
  createdAt: string,
  user: UserType,
  content: string,
  image?:string,
  numberOfComment: number,
  numberOfRetweet: number,
  numberOfLikes: number,
}
