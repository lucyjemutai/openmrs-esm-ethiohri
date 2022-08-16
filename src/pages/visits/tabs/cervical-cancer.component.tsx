import React from "react";
import { EncounterList } from "@ohri/openmrs-esm-ohri-commons-lib/src/index";
import { FOLLOWUP_ENCOUNTER_TYPE } from "../../../constants";
import { getData } from "../../encounterUtils";

const columns = [
  {
    key: "followUpDate",
    header: "Follow-Up Date",
    getValue: (encounter) => {
      return getData(encounter, "160753AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", true);
    },
  },
  {
    key: "artStatus",
    header: "ART Status",
    getValue: (encounter) => {
      return "---";
    },
  },
  {
    key: "artStartDate",
    header: "ART Start Date",
    getValue: (encounter) => {
      return getData(encounter, "159599AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", true);
    },
  },
  {
    key: "followupStatus",
    header: "Followup Status",
    getValue: (encounter) => {
      return "---";
    },
  },
  {
    key: "nextVisitDate",
    header: "Next visit date",
    getValue: (encounter) => {
      return getData(encounter, "5096AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", true);
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
      encounterUuid={FOLLOWUP_ENCOUNTER_TYPE}
      form={{ package: "eth-hiv", name: "cervical_cancer" }}
      columns={columns}
      description="Cervical Cancer Encounter List"
      headerTitle="Cervical Cancer"
      dropdownText="Add"
    />
  );
};

export default CervicalCancerEncounterList;
