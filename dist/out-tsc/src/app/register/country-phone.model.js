import libphonenumber from 'google-libphonenumber';
var CountryPhone = /** @class */ (function () {
    function CountryPhone(iso, name) {
        this.iso = iso;
        this.name = name;
        var phoneUtil = libphonenumber.PhoneNumberUtil.getInstance(), PNF = libphonenumber.PhoneNumberFormat, PNT = libphonenumber.PhoneNumberType, country_example_number = phoneUtil.getExampleNumberForType(this.iso, PNT.MOBILE), example_number_formatted = phoneUtil.format(country_example_number, PNF.NATIONAL);
        this.sample_phone = example_number_formatted;
        this.code = "+" + country_example_number.getCountryCode();
    }
    return CountryPhone;
}());
export { CountryPhone };
//# sourceMappingURL=country-phone.model.js.map