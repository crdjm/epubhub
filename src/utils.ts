import xmlParser from "fast-xml-parser";
const Parser = require("fast-xml-parser").j2xParser;
const he = require("he");

export function xml2obj(xml) {
  return xmlParser.parse(xml, {
    attributeNamePrefix: "",
    attrNodeName: "attr",
    ignoreAttributes: false,
    parseNodeValue: false,
    parseAttributeValue: false,
    ignoreNameSpace: false,
  });
}

export function obj2xml(json) {
  const defaultOptions = {
    attributeNamePrefix: "@_",
    attrNodeName: "attr", //default is false
    textNodeName: "#text",
    ignoreAttributes: false,
    cdataTagName: "__cdata", //default is false
    cdataPositionChar: "\\c",
    format: true,
    indentBy: "  ",
    supressEmptyNode: false,
    tagValueProcessor: (a) => he.encode(a, { useNamedReferences: true }), // default is a=>a
    attrValueProcessor: (a) =>
      he.encode(a, { isAttributeValue: true, useNamedReferences: true }), // default is a=>a
    rootNodeName: "element",
  };
  const parser = new Parser(defaultOptions);
  const xml = parser.parse(json);
  return xml;
}
