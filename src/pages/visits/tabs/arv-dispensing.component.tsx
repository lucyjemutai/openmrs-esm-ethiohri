import React from "react";
import { EncounterList } from "@ohri/openmrs-esm-ohri-commons-lib/src/index";
import { ARV_DISPENSING_ENCOUNTER_TYPE } from "../../../constants";
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
        form: { name: "arv_dispensing", package: "eth-hiv" },
        encounterUuid: encounter.uuid,
        intent: "*",
        label: "View ARV Dispensing",
        mode: "view",
      },
      {
        form: { name: "arv_dispensing", package: "eth-hiv" },
        encounterUuid: encounter.uuid,
        intent: "*",
        label: "Edit ARV Dispensing",
        mode: "edit",
      },
    ],
  },
];

const ARVDispensingEncounterList: React.FC<{ patientUuid: string }> = ({
  patientUuid,
}) => {
  return (
    <EncounterList
      patientUuid={patientUuid}
      encounterUuid={ARV_DISPENSING_ENCOUNTER_TYPE}
      form={{ package: "eth-hiv", name: "arv_dispensing" }}
      columns={columns}
      description="ARV Dispensing Encounter List"
      headerTitle="ARV Dispensing"
      dropdownText="Add"
    />
  );
};

export default ARVDispensingEncounterList;
