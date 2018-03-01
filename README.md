# transactional-email-templates
Customizable transitional HTML email templates for Node.js, compiled with variable content. Each template is responsive and each has been tested in all the popular email clients.

![Transactional email templates](http://blog.mailgun.com/content/images/2014/Aug/icons.png)

## Usage

~~~js
const templates = require('transactional-email-templates');

const alertEmailHTML = templates.alert({
    title: 'You are approaching your limit',
    alert: "Warning: You're approaching your limit. Please upgrade.",
    alertColor: '#FD9E28',
    bodyElements: [
        'You have <strong>1 free report</strong> remaining.'
        "Add your credit card now to upgrade your account to a premium plan to ensure you don't miss out on any reports.",
    ],
    link: 'http://www.mailgun.com/',
    linkCTA: 'Confirm Email Address',
    linkColor: '#3A90D7',
    byline: 'Thanks for choosing Acme, Inc.',
    unsubscribeLink: 'https://www.mailgun.com',
    unsubscribeLinkText: 'Unsubscribe from these alerts.',
});
// yields http://mailgun.github.io/transactional-email-templates/alert.html

const currency = '$';
const totalCost = 33.98;
const billingEmailHTML = templates.billing({
    title: 'Paid',
    headline: `${currency} ${totalCost} Paid`,
    addressElements: [
        'Lee Munroe',
        'Invoice #12345',
        'June 01 2014',
    ],
    lineItems: [
        { title: 'Service 1', amount: 19.99 },
        { title: 'Service 2', amount: 9.99 },
        { title: 'Service 3', amount: '4.00' },
    ],
    link: 'https://mailgun.com',
    linkCTA: 'View in browser',
    byline: 'Acme Inc. 123 Van Ness, San Francisco 94102',
    footerText: 'Questions? Email ',
    footerLink: 'mailto:support@acme.inc',
    footerLinkText: 'support@acme.inc',
    currency,
    totalCost,
});
// yields http://mailgun.github.io/transactional-email-templates/billing.html

const actionEmailHTML = templates.action({
    title: 'Reset your password',
    bodyElements: [
        'Please confirm your email address by clicking the link below.',
        'We may need to send you critical information about our service and it is important that we have an accurate email address.',
    ],
    link: 'http://www.mailgun.com/',
    linkCTA: 'Confirm Email Address',
    linkColor: '#3A90D7',
    byline: '- The Mailgunners',
    footerText: 'Follow ',
    footerLink: 'http://twitter.com/mail_gun',
    footerLinkText: '@Mail_Gun on Twitter',
});
// yields http://mailgun.github.io/transactional-email-templates/action.html
~~~

## Options

~~~js
/**
 * Build alert email HTML
 * module.exports.alert
 *
 * @access public
 * @param {Object} data
 * @param {String} data.title
 * @param {String} data.alert
 * @param {String} [data.alertColor]
 * @param {String[]} data.bodyElements
 * @param {String} data.link
 * @param {String} data.linkCTA
 * @param {String} [data.linkColor]
 * @param {String} [data.byline]
 * @param {String} data.footerText
 * @param {String} [data.footerLink]
 * @param {String} [data.footerLinkText]
 * @param {String} [data.unsubscribeLink]
 * @param {String} [data.unsubscribeLinkText]
 * @returns {String} HTML email content
 */

/**
 * Build action email HTML
 * module.exports.action
 *
 * @access public
 * @param {Object} data
 * @param {String} data.title
 * @param {String[]} data.bodyElements
 * @param {String} data.link
 * @param {String} data.linkCTA
 * @param {String} [data.linkColor]
 * @param {String} [data.byline]
 * @param {String} data.footerText
 * @param {String} [data.footerLink]
 * @param {String} [data.footerLinkText]
 * @param {String} [data.unsubscribeLink]
 * @param {String} [data.unsubscribeLinkText]
 * @returns {String} HTML email content
 */

/**
 * Build billing/invoice email HTML
 * module.exports.billing
 *
 * @access public
 * @param {Object} data
 * @param {String} data.title
 * @param {String} [data.alert]
 * @param {String} [data.alertColor]
 * @param {String} [data.headline]
 * @param {String[]} data.bodyElements
 * @param {String[]} data.addressElements
 * @param {String} [data.link]
 * @param {String} [data.linkCTA]
 * @param {String} data.currency
 * @param {String} data.totalTitle
 * @param {Number|String} data.totalCost
 * @param {LineItem[]} data.lineItems
 * @param {String} [data.byline]
 * @param {String} data.footerText
 * @param {String} [data.footerLink]
 * @param {String} [data.footerLinkText]
 * @param {String} [data.unsubscribeLink]
 * @param {String} [data.unsubscribeLinkText]
 * @returns {String} HTML email content
 */

/**
 * @typedef {Object} LineItem
 * @property {String} title
 * @property {Number|String} amount
 */
~~~

## Install

~~~sh
$ npm install transactional-email-templates --save
~~~

## Acknowledgments
- Based on Mailgun's excellent [transactional email templates][0]


[0]: http://blog.mailgun.com/transactional-html-email-templates/
