export type OrderDirection = "asc" | "desc";

type OrderDirectionMap = {
  [K in OrderDirection]: {
    id: K;
    label: string;
  };
};

export const orderDirection: {
  ids: OrderDirection[];
  entities: OrderDirectionMap;
} = {
  ids: ["asc", "desc"],
  entities: {
    asc: {
      id: "asc",
      label: "Oldest first",
    },
    desc: {
      id: "desc",
      label: "Newest first",
    },
  },
};

export default orderDirection;