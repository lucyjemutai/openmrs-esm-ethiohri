import React from "react";
import { EncounterList } from "@ohri/openmrs-esm-ohri-commons-lib/src/index";
import { FOLLOWUP_ENCOUNTER_TYPE } from "../../../constants";
import { getData } from "../../encounterUtils";

const columns = [
  {
    key: "followUpDate",
    header: "Follow-Up Date",
    getValue: (encounter) => {
      return getData(encounter, "b8cd8630-56dd-495e-8c84-e36a636febe7", true);
    },
  },
  {
    key: "onART",
    header: "On antiretroviral therapy",
    getValue: (encounter) => {
      return getData(encounter, "1149AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", false);
    },
  },
  {
    key: "functionalStatus",
    header: "Functional Status",
    getValue: (encounter) => {
      return getData(encounter, "162753AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", false);
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
        form: { name: "followup", package: "eth-hiv" },
        encounterUuid: encounter.uuid,
        intent: "*",
        label: "View Followup",
        mode: "view",
      },
      {
        form: { name: "followup", package: "eth-hiv" },
        encounterUuid: encounter.uuid,
        intent: "*",
        label: "Edit Followup",
        mode: "edit",
      },
    ],
  },
];

const FollowupEncounterList: React.FC<{ patientUuid: string }> = ({
  patientUuid,
}) => {
  return (
    <EncounterList
      patientUuid={patientUuid}
      encounterUuid={FOLLOWUP_ENCOUNTER_TYPE}
      form={{ package: "eth-hiv", name: "followup" }}
      columns={columns}
      description="Followup Encounter List"
      headerTitle="Followup"
      dropdownText="Add"
    />
  );
};

export default FollowupEncounterList;
