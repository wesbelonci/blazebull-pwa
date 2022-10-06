import createNumberMask from "text-mask-addons/dist/createNumberMask";
// import { FormattedMessage } from "react-intl";
export interface Mask {
  name: string;
  mask:
    | "cpf"
    | "phone-number"
    | "cel-number"
    | "year"
    | "date"
    | "zip-code"
    | "card-number"
    | "card-expiration-date"
    | "card-ccv"
    | "money-pt-BR"
    | "money-en";
}

const defaultMaskOptions_pt_BR = {
  decimalLimit: 2,
  thousandsSeparatorSymbol: ".",
  decimalSymbol: ",",
  allowDecimal: true,
  integerLimit: 17,
  prefix: "",
  suffix: "",
};

const defaultMaskOptions_en = {
  decimalLimit: 2,
  thousandsSeparatorSymbol: ",",
  decimalSymbol: ".",
  allowDecimal: true,
  integerLimit: 17,
  prefix: "",
  suffix: "",
};

export const masks = [
  {
    name: "cpf",
    mask: [
      /[0-9]/,
      /[0-9]/,
      /[0-9]/,
      ".",
      /[0-9]/,
      /[0-9]/,
      /[0-9]/,
      ".",
      /[0-9]/,
      /[0-9]/,
      /[0-9]/,
      "-",
      /\d/,
      /\d/,
    ],
  },
  {
    name: "phone-number",
    mask: [
      "(",
      /\d/,
      /\d/,
      ")",
      " ",
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      "-",
      /\d/,
      /\d/,
      /\d/,
      /\d/,
    ],
  },
  {
    name: "cel-number",
    mask: [
      "(",
      /\d/,
      /\d/,
      ")",
      " ",
      /\d/,
      " ",
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      "-",
      /\d/,
      /\d/,
      /\d/,
      /\d/,
    ],
  },
  {
    name: "cnpj",
    mask: [
      /[0-9]/,
      /[0-9]/,
      ".",
      /\d/,
      /\d/,
      /\d/,
      ".",
      /\d/,
      /\d/,
      /\d/,
      "/",
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      "-",
      /\d/,
      /\d/,
    ],
  },
  {
    name: "zip-code",
    mask: [/\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/],
  },
  {
    name: "year",
    mask: [/\d/, /\d/, /\d/, /\d/],
  },
  {
    name: "license-plate",
    mask: [
      /[A-Z0-9]*/,
      /[A-Z0-9]*/,
      /[A-Z0-9]*/,
      "-",
      /[A-Z0-9]*/,
      /[A-Z0-9]*/,
      /[A-Z0-9]*/,
      /[A-Z0-9]*/,
    ],
  },
  {
    name: "card-number",
    mask: [
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      " ",
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      " ",
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      " ",
      /\d/,
      /\d/,
      /\d/,
      /\d/,
    ],
  },
  {
    name: "card-expiration-date",
    mask: [/\d/, /\d/, "/", /\d/, /\d/],
  },
  {
    name: "card-ccv",
    mask: [/\d/, /\d/, /\d/],
  },

  {
    name: "money-pt-BR",
    mask: createNumberMask({
      ...defaultMaskOptions_pt_BR,
      prefix: "",
      allowNegative: false,
    }),
  },

  {
    name: "money-en",
    mask: createNumberMask({
      ...defaultMaskOptions_en,
      prefix: "",
      allowNegative: false,
    }),
  },
];
