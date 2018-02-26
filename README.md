# transactional-email-templates
Customizable transitional HTML email templates, compiled with variable content

## Usage

~~~js
const templates = require('transactional-email-templates');

const currency = '$';
const totalCost = 34.56;
const billingEmailHTML = templates.billing({
    headline: `You owe ${currency} ${totalCost}`,
    addressElements: [ '123 Main St.' ],
    lineItems: [
        { title: 'Food', amount: 34 },
        { title: 'Beverage', amount: 0.56 }
    ],
    link: 'https://example.com/bill',
    linkCTA: 'Pay online',
    totalCost,
});
~~~

## Options

## Install

## Acknowledgments
- Based on Mailgun's excellent [transactional email templates][0]


[0]: http://blog.mailgun.com/transactional-html-email-templates/
