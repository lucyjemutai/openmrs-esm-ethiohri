import React from "react";
import { EncounterList } from "@ohri/openmrs-esm-ohri-commons-lib/src/index";
import { HIV_PREVENTION_ENCOUNTER_TYPE } from "../../../constants";
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
        form: { name: "hiv_prevention", package: "eth-hiv" },
        encounterUuid: encounter.uuid,
        intent: "*",
        label: "View HIV Prevention",
        mode: "view",
      },
      {
        form: { name: "hiv_prevention", package: "eth-hiv" },
        encounterUuid: encounter.uuid,
        intent: "*",
        label: "Edit HIV Prevention",
        mode: "edit",
      },
    ],
  },
];

const HIVPreventionEncounterList: React.FC<{ patientUuid: string }> = ({
  patientUuid,
}) => {
  return (
    <EncounterList
      patientUuid={patientUuid}
      encounterUuid={HIV_PREVENTION_ENCOUNTER_TYPE}
      form={{ package: "eth-hiv", name: "hiv_prevention" }}
      columns={columns}
      description="HIV Prevention Encounter List"
      headerTitle="HIV Prevention"
      dropdownText="Add"
    />
  );
};

export default HIVPreventionEncounterList;
