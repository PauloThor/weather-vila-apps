export const CitiesTags = [
  {
    name: "Brasília, DF",
    key: "43348",
  },
  {
    name: "Salvador, BA",
    key: "43080",
  },
  {
    name: "Rio de Janeiro, RJ",
    key: "45449",
  },
  {
    name: "São Paulo, SP",
    key: "45881",
  },
];

class CityUtils {
  static Cities = CitiesTags;

  static OpenTab = (link: string) => {
    window.open(link, "_blank");
  };
}

export default CityUtils;
