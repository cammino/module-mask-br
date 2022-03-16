define([
  'jquery',
  'Eloom_Core/js/masks',
  'Eloom_MaskBr/js/validator/cpf-cnpj',
], function (a, c, d) {
  return {
    apply: function () {
      if ('pt_BR' == window.eloom.core.lang) {
        a(
          'div[name$=".postcode"] input[type="text"], #zip, #shipping-zip-form input[name="postcode"]',
        ).each(function (b) {
          a(this).data('mask') || a(this).data('mask', !0).mask('00000-000');
        });

        if (
          0 < a('div[name$=".telephone"] input[type="text"], #telephone').length
        ) {
          var d = function (b) {
              return 11 === b.replace(/\D/g, '').length
                ? '(00) 00000-0000'
                : '(00) 0000-00009';
            },
            g = {
              onKeyPress: function (b, c, e, f) {
                e.mask(d.apply({}, arguments), f);
              },
            };
          a('div[name$=".telephone"] input[type="text"], #telephone').each(
            function (b) {
              a(this).data('mask') || a(this).data('mask', !0).mask(d, g);
            },
          );
        }

        a(
          'div[name$=".vat_id"] input[type="text"], div[name$=".taxvat"] input[type="text"], #vat_id, #taxvat',
        ).each(function (e) {
          a(this).data('mask') ||
            (a(this).data('mask', !0),
            a(this).metadata().validate
              ? (a(this).metadata().validate['validate-cpf-cnpj'] = !0)
              : (a(this).metadata().validate = {
                  'validate-cpf-cnpj': !0,
                }),
            a(this).keyup(function () {
              a(this).cpfcnpj({
                mask: !0,
                validate: 'cpfcnpj',
                ifValid: function (b) {
                  b.removeClass('mage-error');
                },
                ifInvalid: function (b) {
                  b.addClass('mage-error');
                },
              });
            }));
        });
      }
    },
  };
});
