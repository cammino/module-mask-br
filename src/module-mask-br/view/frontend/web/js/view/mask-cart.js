define(["jquery","Eloom_Core/js/masks"],function(a,b){return{apply:function(){"pt_BR"==window.eloomCore.lang&&a('div[name$=".postcode"] input[type="text"], #zip, #shipping-zip-form input[name="postcode"]').each(function(c){a(this).data("mask")||a(this).data("mask",!0).mask("00000-000")})}}});
