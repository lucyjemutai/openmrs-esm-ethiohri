import React from "react";
import { EncounterList } from "@ohri/openmrs-esm-ohri-commons-lib/src/index";
import { TUBERCULOSIS_ENCOUNTER_TYPE } from "../../../constants";
import { getData } from "../../encounterUtils";

const columns = [
  {
    key: "currentlyOnTBTreatment",
    header: "Currently On TB Treatment",
    getValue: (encounter) => {
      return getData(encounter, "159798AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", false);
    },
  },
  {
    key: "eligibleForTPT",
    header: "Eligible for TPT",
    getValue: (encounter) => {
      return getData(encounter, "162275AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", false);
    },
  },
  {
    key: "monthsOnRifapentine",
    header: "Months on Rifapentine (3HP)",
    getValue: (encounter) => {
      return getData(encounter, "2691cc93-2e8a-4a54-bf06-fe957aa5fd08", false);
    },
  },
  {
    key: "tbDiagnosticTestResult",
    header: "TB Diagnostic Test Result",
    getValue: (encounter) => {
      return getData(encounter, "162202AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", false);
    },
  },
  {
    key: "tbTreatmentStatus",
    header: "TB Treatment Status",
    getValue: (encounter) => {
      return getData(encounter, "d4bc3007-3ba8-40ae-8d64-830bcbde56e2", false);
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
