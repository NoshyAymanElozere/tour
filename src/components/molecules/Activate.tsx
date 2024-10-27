import { Switch } from '@mantine/core';
import { useTranslation } from 'react-i18next';

type Activate_TP = {
  info: {
    row: {
      original: {
        status: number;
      };
    };
  };
};

function Activate({ info }: Activate_TP) {
  const { t } = useTranslation();



  return (
    <Switch
    disabled
    style={{ justifyContent: 'center' }}
    onLabel={t("Active")} offLabel={t("Not Active")} size="lg"
      checked={info.row.original.status === 1}
    />
  );
}

export default Activate;
