import React from "react";
import { EncounterList } from "@ohri/openmrs-esm-ohri-commons-lib/src/index";
import { LAB_RESULTS_ENCOUNTER_TYPE } from "../../../constants";
import { getData } from "../../encounterUtils";

const columns = [
  {
    key: "viralLoadDone",
    header: "Viral load done",
    getValue: (encounter) => {
      return getData(encounter, "163310AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", false);
    },
  },
  {
    key: "viralLoadCount",
    header: "Viral load count",
    getValue: (encounter) => {
      return getData(encounter, "856AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", false);
    },
  },
  {
    key: "viralLoadStatus",
    header: "Viral load status",
    getValue: (encounter) => {
      return getData(encounter, "2dc9ee04-4d12-4606-ae0f-86895bf14a44", false);
    },
  },
  {
    key: "cd4Done",
    header: "CD4 Done",
    getValue: (encounter) => {
      return getData(encounter, "4868dd2d-4d56-4e72-8c89-8658a32a9072", false);
    },
  },
  {
    key: "cd4mm3",
    header: "CD4 /mm3",
    getValue: (encounter) => {
      return getData(encounter, "5497AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", false);
    },
  },
  {
    key: "actions",
    header: "Actions",
    getValue: (encounter) => [
      {
        form: { name: "lab_results", package: "eth-hiv" },
        encounterUuid: encounter.uuid,
        intent: "*",
        label: "View Lab Results",
        mode: "view",
      },
      {
        form: { name: "lab_results", package: "eth-hiv" },
        encounterUuid: encounter.uuid,
        intent: "*",
        label: "Edit Lab Results",
        mode: "edit",
      },
    ],
  },
];

const LabResultsEncounterList: React.FC<{ patientUuid: string }> = ({
  patientUuid,
}) => {
  return (
    <EncounterList
      patientUuid={patientUuid}
      encounterUuid={LAB_RESULTS_ENCOUNTER_TYPE}
      form={{ package: "eth-hiv", name: "lab_results" }}
      columns={columns}
      description="Lab Results Encounter List"
      headerTitle="Lab Results"
      dropdownText="Add"
    />
  );
};

export default LabResultsEncounterList;
