import React, { useState, useEffect } from "react";
import axios from "axios";

const key = process.env.REACT_APP_MY_GOOGLE_TRANSLATE_KEY;

const Convert = ({ language, text }) => {
  useEffect(() => {
    axios.post(
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
  }, [language, text]);

  return <div></div>;
};

export default Convert;
