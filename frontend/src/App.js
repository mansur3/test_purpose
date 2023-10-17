import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { getAllData } from "./Interceptor";

export const ValidationSchemaExample = () => {
  const [personsData, setpersonData] = useState([]);
  useEffect(() => {
    handleGetData();
  }, []);
  const handleGetData = async () => {
    console.log("proce", process.env.BASE_URL);
    const data = await getAllData();
    setpersonData(data.data);
  };
  return (
    <div>
      <h1>Show Data</h1>

      {personsData?.map((item) => {
        return (
          <>
            <hr />
            <h1>{item?.FirstName}</h1>
            <h1>{item?.LastName}</h1>
            <p>City: {item?.City}</p>
            <p>State: {item?.Address}</p>
            <hr />
          </>
        );
      })}
    </div>
  );
};
