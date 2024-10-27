import React, { useState } from "react";
import MainLayoutTour from "../../../components/templates/tours/add/MainLayoutTour";
import { Form, Formik } from "formik";

function AddTour() {
  const initialValues = {
    tour_itineraries: [
      {
        title: "",
        description: "",
      },
    ],
    tour_availabilities: [
      {
        date: "",
        discount: "",
        description: "",
      },
    ],
    tour_prices: [
      {
        title: "",
        description: "",
        type: "",
        price: "",
      },
    ],
    frequently_questions: [
      {
        question: "",
        answer: "",
      },
    ],
    tour_includes: [
      {
        title: "",
        description: "",
        status: "yes",
      },
    ],
    images: [],
    main_image: [],
    pdf_file: [],
  };
  return (
    <div className="">
      <Formik initialValues={initialValues} onSubmit={() => {}}>
        <Form>
          <MainLayoutTour />
        </Form>
      </Formik>
    </div>
  );
}

export default AddTour;
