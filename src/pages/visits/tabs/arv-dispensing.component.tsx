import React from "react";
import { EncounterList } from "@ohri/openmrs-esm-ohri-commons-lib/src/index";
import { ARV_DISPENSING_ENCOUNTER_TYPE } from "../../../constants";
import { getData } from "../../encounterUtils";

const columns = [
  {
    key: "arvAdherence",
    header: "ARV Adherence",
    getValue: (encounter) => {
      return getData(encounter, "da4e1fd2-727f-4677-ab5f-44058555052c", false);
    },
  },
  {
    key: "patientStatus",
    header: "Patient Status",
    getValue: (encounter) => {
      return getData(encounter, "160433AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", false);
    },
  },
  {
    key: "regimen",
    header: "Regimen",
    getValue: (encounter) => {
      return getData(encounter, "6d7d0327-e1f8-4246-bfe5-be1e82d94b14", false);
    },
  },
  {
    key: "arvDispensedInDays",
    header: "ARV Dispensed in days",
    getValue: (encounter) => {
      return getData(encounter, "3a0709e9-d7a8-44b9-9512-111db5ce3989", false);
    },
  },
  {
    key: "arvSideEffects",
    header: "ARV Side Effects",
    getValue: (encounter) => {
      return getData(encounter, "165273AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", false);
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
