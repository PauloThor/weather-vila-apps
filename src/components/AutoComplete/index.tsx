import { useState } from "react";
import { apiKey, apiUrl } from "../../services/api";

const AutoComplete = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [list, setList] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
      console.log(value);
      console.log("output", output);
      console.log("res", res.data);
    }
    setList(output);
    setIsLoading(false);
  };

  const validationProps = {
    isFocused,
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    getData(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" && isFocused) {
      e.preventDefault();
      setList([]);
      // set Nova Cidade
      return;
    }
  };
  return (
    <div>
      <input
        value={value}
        id="autocomplete"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(evt)
        }
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default AutoComplete;
