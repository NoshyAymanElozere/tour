import { Tabs, rem } from "@mantine/core";
import {
  IconPhoto,
  IconMessageCircle,
  IconSettings,
} from "@tabler/icons-react";
import StepOneTour from "../add/StepOneTour";
import StepTowTour from "../add/StepTowTour/StepTowTour";
import StepThreeTour from "../add/StepThreeTour/StepThreeTour";
import StepFourTour from "../add/StepFourTour/StepFourTour";
import { useMutate } from "../../../../hooks";
import { notify } from "../../../../utils/toast";
import { useFormikContext } from "formik";
import { Button } from "../../../atoms";
import { useState } from "react";

interface MainLayoutTourProps {
  editIdTour: string;
}

function MainLayoutTour({ editIdTour }: MainLayoutTourProps) {
  const iconStyle = { width: rem(12), height: rem(12) };
  const { values } = useFormikContext<any>();

  const { mutate: editTour, isLoading: LoadingEdit } = useMutate({
    mutationKey: [`tours/${editIdTour}`],
    endpoint: `tours/${editIdTour}`,
    onSuccess: () => {
      notify("success");
    },
    onError: (err) => {
      notify("error", err?.response?.data?.message);
    },
    formData: true,
  });

  const [activeTab, setActiveTab] = useState<string | null>("firstStep");

  const handleUpdate = () => {
    const payload = getPayloadForActiveTab(activeTab, values);
    editTour(payload);
  };

  const getPayloadForActiveTab = (tab: string | null, values: any) => {
    switch (tab) {
      case "firstStep":
        return {
          type: values?.type,
          step: 1,
          _method: "PUT",
        };
      case "secondStep":
        return {
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
          step: 2,
          _method: "PUT",
        };
      case "thirdStep":
        return {
          images: values?.images?.map((item)=>item?.id),
          main_image: values?.main_image[0]?.id ?values?.main_image[0]?.id : values?.main_image[0] ,
          pdf_file: values?.pdf_file,
          tour_id: values?.tour_id,
          step: 3,
          _method: "PUT",
        };
      case "finalStep":
        return {
          tour_includes: values?.tour_includes,
          tour_prices: values?.tour_prices,
          tour_id: values?.tour_id,
          step: 4,
          _method: "PUT",
        };
      default:
        return {};
    }
  };

  return (
    <Tabs value={activeTab} onChange={setActiveTab}>
      <Tabs.List>
        <Tabs.Tab
          value="firstStep"
          // style={{
          //   border:"1px solid"
          // }}
          leftSection={<IconPhoto style={iconStyle} />}
        >
          First step
        </Tabs.Tab>
        <Tabs.Tab
          value="secondStep"
          leftSection={<IconMessageCircle style={iconStyle} />}
        >
          Second step
        </Tabs.Tab>
        <Tabs.Tab
          value="thirdStep"
          leftSection={<IconSettings style={iconStyle} />}
        >
          Third step
        </Tabs.Tab>
        <Tabs.Tab
          value="finalStep"
          leftSection={<IconSettings style={iconStyle} />}
        >
          Final step
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="firstStep">
        <StepOneTour />
      </Tabs.Panel>
      <Tabs.Panel value="secondStep">
        <StepTowTour />
      </Tabs.Panel>
      <Tabs.Panel value="thirdStep">
        <StepThreeTour />
      </Tabs.Panel>
      <Tabs.Panel value="finalStep">
        <StepFourTour />
      </Tabs.Panel>

      <div className="flex justify-end">
        <Button loading={LoadingEdit} action={handleUpdate}>
          Update
        </Button>
      </div>
    </Tabs>
  );
}

export default MainLayoutTour;
