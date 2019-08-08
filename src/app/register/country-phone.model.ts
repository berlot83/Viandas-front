import libphonenumber from 'google-libphonenumber';

export class CountryPhone {
  iso: string;
  name: string;
  code: string;
  sample_phone: string;

  constructor (iso: string, name: string) {
    this.iso = iso;
    this.name = name;

    let phoneUtil = libphonenumber.PhoneNumberUtil.getInstance(),
        PNF = libphonenumber.PhoneNumberFormat,
        PNT = libphonenumber.PhoneNumberType,
        country_example_number = phoneUtil.getExampleNumberForType(this.iso, PNT.MOBILE),
        example_number_formatted = phoneUtil.format(country_example_number, PNF.NATIONAL);
    this.sample_phone = example_number_formatted;
    this.code = "+" + country_example_number.getCountryCode();
  }
}
