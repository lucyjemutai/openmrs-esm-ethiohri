import React from "react";
import { EncounterList } from "openmrs-esm-ohri-commons-lib/src/index";
import { PHDP_ENCOUNTER_TYPE } from "../../../constants";
import { getData } from "../../encounterUtils";

const columns = [
  {
    key: "phdpdate",
    header: "Date",
    getValue: (encounter) => {
      return getData(encounter, "160753AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", true);
    },
  },
  {
    key: "issuesAddressed",
    header: "Issues Addressed",
    getValue: (encounter) => {
      return getData(encounter, "bbcdc4d4-8e9e-41ab-b197-2b5d97c1a7e0");
    },
  },
  {
    key: "conclusion",
    header: "Conclusion",
    getValue: (encounter) => {
      return getData(encounter, "160632AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    },
  },
  ,
  {
    key: "actions",
    header: "Actions",
    getValue: (encounter) => [
      {
        form: { name: "phdp", package: "eth-hiv" },
        encounterUuid: encounter.uuid,
        intent: "*",
        label: "View PHDP",
        mode: "view",
      },
      {
        form: { name: "phdp", package: "eth-hiv" },
        encounterUuid: encounter.uuid,
        intent: "*",
        label: "Edit PHDP",
        mode: "edit",
      },
    ],
  },
];

const PHDPList: React.FC<{ patientUuid: string }> = ({ patientUuid }) => {
  return (
    <EncounterList
      patientUuid={patientUuid}
      encounterUuid={PHDP_ENCOUNTER_TYPE}
      form={{ package: "eth-hiv", name: "phdp" }}
      columns={columns}
      description="PHDP List"
      headerTitle="PHDP"
      dropdownText="Add"
    />
  );
};

export default PHDPList;
