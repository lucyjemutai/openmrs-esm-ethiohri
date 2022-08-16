import React from "react";
import { EncounterList } from "@ohri/openmrs-esm-ohri-commons-lib/src/index";
import { TUBERCULOSIS_ENCOUNTER_TYPE } from "../../../constants";
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
        form: { name: "tuberculosis", package: "eth-hiv" },
        encounterUuid: encounter.uuid,
        intent: "*",
        label: "View Tuberculosis",
        mode: "view",
      },
      {
        form: { name: "tuberculosis", package: "eth-hiv" },
        encounterUuid: encounter.uuid,
        intent: "*",
        label: "Edit Tuberculosis",
        mode: "edit",
      },
    ],
  },
];

const TuberculosisEncounterList: React.FC<{ patientUuid: string }> = ({
  patientUuid,
}) => {
  return (
    <EncounterList
      patientUuid={patientUuid}
      encounterUuid={TUBERCULOSIS_ENCOUNTER_TYPE}
      form={{ package: "eth-hiv", name: "tuberculosis" }}
      columns={columns}
      description="Tuberculosis Encounter List"
      headerTitle="Tuberculosis"
      dropdownText="Add"
    />
  );
};

export default TuberculosisEncounterList;
