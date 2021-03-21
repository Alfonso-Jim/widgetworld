import React, { useState, useEffect } from "react";
import axios from "axios";

const key = process.env.REACT_APP_MY_GOOGLE_TRANSLATE_KEY;

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: text,
            target: language.value,
            key: key,
          },
        }
      );

      setTranslated(data.data.translations[0].translatedText);
    };

    doTranslation();
  }, [language, text]);

  return <h1 className="ui header">{translated}</h1>;
};

export default Convert;
