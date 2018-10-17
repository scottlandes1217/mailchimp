// Fill in your MailChimp popup settings below.
// These can be found in the original popup script from MailChimp.
    var mailchimpConfig = {
        baseUrl: 'mc.us18.list-manage.com',
        uuid: 'ffd6feae87e6d6de0a410fd21',
        lid: 'fc53c93af6'
    };
 
// No edits below this line are required
    var chimpPopupLoader = document.createElement("script");
    chimpPopupLoader.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/signup-forms/popup/embed.js';
    chimpPopupLoader.setAttribute('data-dojo-config', 'usePlainJson: true, isDebug: false');

    var chimpPopup = document.createElement("script");
    chimpPopup.appendChild(document.createTextNode('require(["mojo/signup-forms/Loader"], function (L) { L.start({"baseUrl": "' +  mailchimpConfig.baseUrl + '", "uuid": "' + mailchimpConfig.uuid + '", "lid": "' + mailchimpConfig.lid + '"})});'));

    document.addEventListener("DOMContentLoaded", function(event) {
        document.body.appendChild(chimpPopupLoader);

        window.onload=function () {
            document.body.appendChild(chimpPopup);
        };

    });