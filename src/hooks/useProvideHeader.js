import React, { useState, useEffect } from 'react';
import PublicServices from '../api/public/PublicServices';

function useProvideHeader() {
  const [host, setHost] = useState(localStorage.getItem("host"));
  const [key, setKey] = useState(localStorage.getItem("key"));

  const getHeaderKeys = async () => {
    try {
      const result = await PublicServices.getHeaderKeys();
      if (result.responseCode === 200) {
        localStorage.setItem("host", result?.data?.host);
        localStorage.setItem("key", result?.data?.key);
        setHost(result?.data?.host);
        setKey(result?.data?.key);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getHeaderKeys();
  }, []);
  return {
    host,
    key
  }
}

export default useProvideHeader;