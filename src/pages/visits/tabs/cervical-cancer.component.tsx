import React from "react";
import { EncounterList } from "@ohri/openmrs-esm-ohri-commons-lib/src/index";
import { CERVICAL_CANCER_ENCOUNTER_TYPE } from "../../../constants";
import { getData } from "../../encounterUtils";

const columns = [
  {
    key: "screenedForCervicalCancer",
    header: "Screened for cervical cancer",
    getValue: (encounter) => {
      return getData(encounter, "e5e99fc7-ff2d-4306-aefd-b87a07fc9ab4", false);
    },
  },
  {
    key: "typeOfCxCaScreening",
    header: "Type of Cx Ca Screening",
    getValue: (encounter) => {
      return getData(encounter, "53ff5cd0-0f37-4190-87b1-9eb439a15e94", false);
    },
  },
  {
    key: "managementOfCervicalLesions",
    header: "Management of cervical lesions",
    getValue: (encounter) => {
      return getData(encounter, "3a8bb4b4-7496-415d-a327-57ae3711d4eb", false);
    },
  },
  {
    key: "actions",
    header: "Actions",
    getValue: (encounter) => [
      {
        form: { name: "cervical_cancer", package: "eth-hiv" },
        encounterUuid: encounter.uuid,
        intent: "*",
        label: "View Cervical Cancer",
        mode: "view",
      },
      {
        form: { name: "cervical_cancer", package: "eth-hiv" },
        encounterUuid: encounter.uuid,
        intent: "*",
        label: "Edit Cervical Cancer",
        mode: "edit",
      },
    ],
  },
];

const CervicalCancerEncounterList: React.FC<{ patientUuid: string }> = ({
  patientUuid,
}) => {
  return (
    <EncounterList
      patientUuid={patientUuid}
      encounterUuid={CERVICAL_CANCER_ENCOUNTER_TYPE}
      form={{ package: "eth-hiv", name: "cervical_cancer" }}
      columns={columns}
      description="Cervical Cancer Encounter List"
      headerTitle="Cervical Cancer"
      dropdownText="Add"
    />
  );
};

export default CervicalCancerEncounterList;
