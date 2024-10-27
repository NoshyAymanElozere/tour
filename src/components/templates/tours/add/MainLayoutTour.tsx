import { Button, Group, Stepper } from "@mantine/core";
import { useFormikContext } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutate } from "../../../../hooks";
import { notify } from "../../../../utils/toast";
import StepFourTour from "./StepFourTour/StepFourTour";
import StepOneTour from "./StepOneTour";
import StepThreeTour from "./StepThreeTour/StepThreeTour";
import StepTowTour from "./StepTowTour/StepTowTour";

type MainLayoutTour_TP = {
  editIdTour?: string;
};
function MainLayoutTour({ editIdTour }: MainLayoutTour_TP) {
  const [active, setActive] = useState(0);
  const { values, setFieldValue } = useFormikContext();
  const navigate = useNavigate();

  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  const { mutate: addTour, isLoading: LoadingPost } = useMutate({
    mutationKey: ["tours"],
    endpoint: `tours`,
    onSuccess: (data) => {
      notify("success");
      setFieldValue("tour_id", data?.data?.data?.id);
      nextStep();
      if (active == 3) {
        navigate("/tours");
      }
    },
    onError: (err) => {
      notify("error", err?.response?.data?.message);
    },
    formData: true,
  });
  const { mutate: editTour, isLoading: LoadingEdit } = useMutate({
    mutationKey: [`tours/${editIdTour}`],
    endpoint: `tours/${editIdTour}`,
    onSuccess: (data) => {
      notify("success");
      setFieldValue("tour_id", data?.data?.data?.id);
      nextStep();
      if (active == 3) {
        navigate("/tours");
      }
    },
    onError: (err) => {
      notify("error", err?.response?.data?.message);
    },
    formData: true,
  });
  return (
    <div className="">
      <Stepper active={active} onStepClick={setActive} className="">
        <Stepper.Step label="First step">
          <StepOneTour />
        </Stepper.Step>
        <Stepper.Step label="Second step" disabled={active != 1}>
          <StepTowTour />
        </Stepper.Step>
        <Stepper.Step label="Final step" disabled={active != 2}>
          <StepThreeTour />
        </Stepper.Step>
        <Stepper.Completed disabled={active != 3}>
          <StepFourTour />
        </Stepper.Completed>
      </Stepper>

      <Group justify="end" mt="">
        {/* {active > 0 && (
          <Button className="bg-main" onClick={prevStep}>
            Back
          </Button>
        )} */}
        <Button
          variant="default"
          loading={LoadingPost}
          onClick={() =>
            active == 0
              ? addTour({
                  type: values?.type,
                  step: 1,
                })
              : active == 1
              ? addTour({
                  tour_id: values?.tour_id,
                  title: values?.title,
                  description: values?.description,
                  duration: values?.duration,
                  tags: values?.tags,
                  transportation_mode: "local",
                  tour_itineraries: values?.tour_itineraries,
                  frequently_questions: values?.frequently_questions,
                  category_id: values?.category_id,
                  from_city_id: values?.from_city_id,
                  to_city_id: values?.to_city_id,
                  age_range: values?.age_range,
                  run: values?.run,
                  is_best_deal: values?.is_best_deal,

                  // city_id: "1",
                  step: 2,
                })
              : active == 2
              ? addTour({
                  images: values?.images?.map((item) => item?.id),
                  pdf_file: values?.pdf_file,
                  main_image: values?.main_image[0]?.id,
                  tour_id: values?.tour_id,
                  step: 3,
                })
              : addTour({
                  // tour_availabilities: values?.tour_availabilities,
                  tour_includes: values?.tour_includes,
                  tour_prices: values?.tour_prices,

                  tour_id: values?.tour_id,
                  step: 4,
                })
          }
        >
          Next step
        </Button>
      </Group>
    </div>
  );
}

export default MainLayoutTour;
