import React from "react";
import { EncounterList } from "@ohri/openmrs-esm-ohri-commons-lib";
import { FAMILY_INFO_ENCOUNTER_TYPE } from "../../../constants";
import { getData } from "../../encounterUtils";
import { moduleName } from "../../../index";

const columns = [
  {
    key: "familyMember",
    header: "Family Member",
    getValue: (encounter) => {
      return getData(encounter, "1560AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    },
  },
  {
    key: "familyMemberAge",
    header: "Age",
    getValue: (encounter) => {
      return getData(encounter, "1532AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    },
  },
  {
    key: "Sex",
    header: "Sex",
    getValue: (encounter) => {
      return getData(encounter, "1533AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    },
  },
  {
    key: "healthStatus",
    header: "Health Status",
    getValue: (encounter) => {
      return getData(encounter, "4ab0e5e3-fff7-4819-bd2e-4f070eedcd3d");
    },
  },
  {
    key: "counselledforhiv",
    header: "Counselled for HIV",
    getValue: (encounter) => {
      return getData(encounter, "ff9eccda-485e-4044-ad92-414e97b279c0");
    },
  },
  {
    key: "testedforHIV",
    header: "Tested for HIV",
    getValue: (encounter) => {
      return getData(encounter, "164401AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    },
  },
  {
    key: "testeResult",
    header: "HIV test Result",
    getValue: (encounter) => {
      return getData(encounter, "159427AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    },
  },
  {
    key: "actions",
    header: "Actions",
    getValue: (encounter) => [
      {
        form: { name: "Family Information", package: "eth_hiv" },
        encounterUuid: encounter.uuid,
        intent: "*",
        label: "View Family Information",
        mode: "view",
      },
      {
        form: { name: "Family Information", package: "eth_hiv" },
        encounterUuid: encounter.uuid,
        intent: "*",
        label: "Edit Family Information",
        mode: "edit",
      },
    ],
  },
];

const FamilyInformationList: React.FC<{ patientUuid: string }> = ({
  patientUuid,
}) => {
  return (
    <EncounterList
      patientUuid={patientUuid}
      encounterType={FAMILY_INFO_ENCOUNTER_TYPE}
      formList={[{ name: "Family Information" }]}
      columns={columns}
      description="Family Information List"
      headerTitle="Family Members"
      launchOptions={{
        displayText: "Add",
        moduleName: moduleName,
      }}
    />
  );
};

export default FamilyInformationList;
