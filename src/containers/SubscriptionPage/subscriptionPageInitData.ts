import {
  SubscriptionItem,
  SubscrptionTextSize,
} from "./../../interfaces/interfaceList";
export const subscriptionItemsInit: SubscriptionItem[] = [
  {
    header: [
      {
        text: "$0",
        subText: "/mo",
        textSize: SubscrptionTextSize.LARGE,
      },
      {
        text: "Free",
        subText: "",
        textSize: SubscrptionTextSize.MEDIUM,
      },
    ],
    offers: [
      "25Mb upload limited one file",
      "100MB Storage",
      "2 active rooms",
      "Public link share",
      "25 active rooms",
    ],
  },
  {
    header: [
      {
        text: "$14",
        subText: "/mo",
        textSize: SubscrptionTextSize.LARGE,
      },
      {
        text: "$168 payment per year",
        subText: "",
        textSize: SubscrptionTextSize.SMALL,
      },
      {
        text: "Personal",
        subText: "",
        textSize: SubscrptionTextSize.MEDIUM,
      },
      {
        text: "1 user / 25 rooms",
        subText: "",
        textSize: SubscrptionTextSize.SMALL,
      },
    ],
    offers: [
      "Unlimited file size per upload",
      "Unlimited uploads per room",
      "2Gb storage",
      "25 active rooms",
      "Private link share",
    ],
  },
];
export const getMonthPaymentText = (amount: number) => {
  return `\$${amount}`;
};
export const getYearlyPaymentText = (amount: number) => {
  return `\$${amount} payment per year`;
};
export const getRoomsListText = (usedRoom: number, totalRoom: number) => {
  return `\$${usedRoom} user / ${totalRoom} rooms`;
};
