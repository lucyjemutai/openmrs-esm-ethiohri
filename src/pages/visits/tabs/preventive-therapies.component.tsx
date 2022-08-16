import React from "react";
import { EncounterList } from "@ohri/openmrs-esm-ohri-commons-lib/src/index";
import { PREVENTIVE_THERAPIES_ENCOUNTER_TYPE } from "../../../constants";
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
        form: { name: "preventive_therapies", package: "eth-hiv" },
        encounterUuid: encounter.uuid,
        intent: "*",
        label: "View Preventive Therapies",
        mode: "view",
      },
      {
        form: { name: "preventive_therapies", package: "eth-hiv" },
        encounterUuid: encounter.uuid,
        intent: "*",
        label: "Edit Preventive Therapies",
        mode: "edit",
      },
    ],
  },
];

const PreventiveTherapiesEncounterList: React.FC<{ patientUuid: string }> = ({
  patientUuid,
}) => {
  return (
    <EncounterList
      patientUuid={patientUuid}
      encounterUuid={PREVENTIVE_THERAPIES_ENCOUNTER_TYPE}
      form={{ package: "eth-hiv", name: "preventive_therapies" }}
      columns={columns}
      description="Preventive Therapies Encounter List"
      headerTitle="Preventive Therapies"
      dropdownText="Add"
    />
  );
};

export default PreventiveTherapiesEncounterList;
