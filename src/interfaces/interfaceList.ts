export interface HeaderItem {
  text: string;
  subText: string;
  textSize: SubscrptionTextSize;
}
export interface RoomItemProps {
  mainImage: string;
  titleList: string[];
  subtitle: string;
  userList: string[];
}
export interface SubscriptionItem {
  header: HeaderItem[];
  offers: string[];
}
export enum SubscrptionTextSize {
  SMALL,
  MEDIUM,
  LARGE,
}
