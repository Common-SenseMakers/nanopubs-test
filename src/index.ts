import { Nanopub, NpProfile } from "@nanopub/sign";

const key = "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC527U4flP7sTZjzl/PEeMdzn6oyWUJLBAI8wSCwCKNAHIOWV5xKt5o+upGCPLfUI6IqEwjtUX3yzg1f/AjJqFcJjZsbmNx19vSRf13J62xVjDUnyQwLYwY0j9XVcygySD3xb7t/o6o27qAVGLOx5emN1SMRPFYE2ShHgW3vTJuI+A28bhTYJ0g0STZ30vkPz2XsHxsHz+HUnnh/ky5VwR7K0TMSYAl9JKXeMri7zColllYuswX58DbMqN5O3ua6psAlhDdO3Pg4GP6zEd4K0E0d+nAqVHI4fbejtx/XqA2sTMngQAqEoysjOWKovW32g0h/5C/LFk80LbTX8yfe7qdAgMBAAECggEAUMXdclnkoeQYYTPVi6aYb+HIRg6QrHXL2jfTZAegfGsPJpFMbB5XXoR9wEYvV0IpT9bkkDg92j0lhoq9kGk/g07QJDutWFKZpD7qsxg5cnKk8iLflViWJEtrX8dYESCYBVaZbdFNqrEj0pXaA0fW7lPpmLR1tvNmrmbf0USWYCrVs8bYN1KHrYzV7tFNbOsiVbggKf9FRGJE04ToGRdO4SGhmCUXj6Owu3drN4HkfosCYYzGfLQOZ+mmewPgrSqSDT1EH1V+ep94EXzEbmuSny6K4NdvQtaex5/5L0FpG/Bufzt8U6nHvBqMiea+XhhkF1qW3ZXmReOBZdESTDD0AQKBgQDavIbpZRga8iLzE/1zu/UWxzLBVOM63stbksF3Bk6C4060OJSb1wRd1p0pGBb+Uf3jr6UsZjjoPlL71YM+xgDZMIWwjkosNQmz03bbga70CibY7cM5CfgrZxmfSTVLNJsusPueWCjG71Sq0AsPr1UBN8kSVhgslXMEtafhZxFdgQKBgQDZhU5Q5c9JG2Ml7gMZKFareLoUBKuIFf1NLPD6dfkjBCDHNXgG3sFSFIk9mjDWa/SwAaSkhDK6YIJDvUvzjRGZeci15+yJMZUfWKKTm5j21iQtrmd4jopKUqv4NSZBPXc6qhhXkCxKPkTJ/uRCY0ZqYekj05TQWPk3ALNVd3ujHQKBgQCpUQn1nIWeRhR7qNumPLYpHaTSNo12QoOTrPQI2F7pvl5r7uhKAZSltr0M1FLoJjurhYkL50zhqWy+97WSX97EQGUcF+iec6fBBU2Z+LaevUT44oMdofPyVOpmfFq+jkgZSnJbTc6yvwwA9O27BHN+b9o7UV2BFWZlHOCJAClXAQKBgFc864fuYxAC9+TCbGOulfP3W0mkBddyWkCVgaAxqFWu1iaO/zBiLk5pBhG6wVN9wIjGX+3LRz0Qb64TQV7QePqAqUqrVWZAiHol5i4k/Vgh0iiwBbeIE1ZziZzmVA1eRW81wMV9gQXVq2kH3Svy/M61rfc8aDaXOHwiv8nLPb7RAoGALjdGSVuHM+VBEE39GQRGiNCminH3L/ez6LhD0dSc1/iHBa3jZ4BYaIRlxlxHYWls7DC2o0AiZTshoPK++SKcBo5J7uSvDh8maqVq6M9voKM9E9nciwAg06SIsFBpfqU8si7YGmBxgwTsySmh82oGHFPPEbKe6XyGGt7hvEb30T8=";
const rdf = `@prefix : <http://purl.org/nanopub/temp/mynanopub#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix dc: <http://purl.org/dc/terms/> .
@prefix pav: <http://purl.org/pav/> .
@prefix prov: <http://www.w3.org/ns/prov#> .
@prefix np: <http://www.nanopub.org/nschema#> .
@prefix npx: <http://purl.org/nanopub/x/> .
@prefix ex: <http://example.org/> .

:Head {
  : np:hasAssertion :assertion ;
    np:hasProvenance :provenance ;
    np:hasPublicationInfo :pubinfo ;
    a np:Nanopublication .
}

:assertion {
  ex:mosquito ex:transmits ex:malaria .
}

:provenance {
  :assertion prov:hadPrimarySource <http://dx.doi.org/10.3233/ISU-2010-0613> .
}

:pubinfo {
  : a npx:ExampleNanopub .
}
`

const profile = new NpProfile(key, '', '', '');
const nanopub = new Nanopub(rdf);
const signed = nanopub.sign(profile);

console.log({profile, nanopub: nanopub.info(), signed: signed.info()})