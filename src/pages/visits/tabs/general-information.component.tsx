import React from "react";
import { EncounterList } from "@ohri/openmrs-esm-ohri-commons-lib/src/index";
import { GENERAL_INFORMATION_ENCOUNTER_TYPE } from "../../../constants";
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
        form: { name: "general_information", package: "eth-hiv" },
        encounterUuid: encounter.uuid,
        intent: "*",
        label: "View General Information",
        mode: "view",
      },
      {
        form: { name: "general_information", package: "eth-hiv" },
        encounterUuid: encounter.uuid,
        intent: "*",
        label: "Edit General Information",
        mode: "edit",
      },
    ],
  },
];

const GeneralInformationEncounterList: React.FC<{ patientUuid: string }> = ({
  patientUuid,
}) => {
  return (
    <EncounterList
      patientUuid={patientUuid}
      encounterUuid={GENERAL_INFORMATION_ENCOUNTER_TYPE}
      form={{ package: "eth-hiv", name: "general_information" }}
      columns={columns}
      description="General Information Encounter List"
      headerTitle="General Information"
      dropdownText="Add"
    />
  );
};

export default GeneralInformationEncounterList;
