import { useState } from "react";
import { Location } from "../../model/location";
import { apiKey, apiUrl } from "../../services/api";
import CityUtils from "../../shared/util/city-utils";
import { AiFillLock } from "react-icons/ai";
import { Container, Item, Items, Tag, Tags } from "./styles";

interface Props {
  handleEvent: (location: Location) => void;
}

const AutoComplete = ({ handleEvent }: Props) => {
  const [value, setValue] = useState<string>("");
  const [list, setList] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLocked, setIsLocked] = useState<boolean>(true);

  const getData = async (text: string) => {
    setIsLoading(true);

    const params = {
      apikey: apiKey,
      language: "pt-br",
      q: value,
    };
    let output = [];
    if (text) {
      const res = await apiUrl
        .get(`/locations/v1/cities/search`, { params })
        .catch((err) => {
          return console.error(err);
        });

      if (!res) {
        return;
      }
      output = res.data.map((city: any) => {
        return {
          key: city.Key,
          name: `${city.LocalizedName}, ${city.AdministrativeArea.ID}`,
        };
      });
      console.log(text);
      console.log("output", output);
      console.log("res", res.data);
    }
    setList(output);
    setIsLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    getData(e.target.value);
  };

  const handleLock = () => {
    setIsLocked(!isLocked);
    setList([]);
  };

  return (
    <Container className="container">
      <Tags>
        {CityUtils.Cities.map((city, index) => {
          return (
            <Tag
              key={`${city.name}-${index}`}
              onClick={() => handleEvent(city)}
            >
              {city.name}
            </Tag>
          );
        })}
      </Tags>
      <input
        value={value}
        autoComplete="off"
        id="autocomplete"
        onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(evt)
        }
        disabled={isLocked}
      />
      <AiFillLock
        size={25}
        onClick={handleLock}
        color={isLocked ? "lightblue" : "white"}
      />
      {!isLoading && (
        <Items>
          {list.map((item) => {
            return <Item onClick={() => handleEvent(item)}>{item.name}</Item>;
          })}
        </Items>
      )}
    </Container>
  );
};

export default AutoComplete;
