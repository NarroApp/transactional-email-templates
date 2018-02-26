const jade    = require('jade');
const action  = jade.compileFile(__dirname + '/views/action.jade', null);
const alert   = jade.compileFile(__dirname + '/views/alert.jade', null);
const billing = jade.compileFile(__dirname + '/views/billing.jade', null);
const actionOpt = {
    title:                 null,
    bodyElements:          [],
    link:                  null,
    linkCTA:               null,
    linkColor:             '#00B933',
    byline:                null,
    footerText:            null,
    footerLink:            null,
    footerLinkText:        null,
    unsubscribeLink:       null,
    unsubscribeLinkText:   'Unsubscribe from these emails',
};
const alertOpt = {
    title:                 null,
    alert:                 null,
    alertColor:            '#ff9f00',
    bodyElements:          [],
    link:                  null,
    linkCTA:               null,
    linkColor:             '#00B933',
    byline:                null,
    footerText:            null,
    footerLink:            null,
    footerLinkText:        null,
    unsubscribeLink:       null,
    unsubscribeLinkText:   'Unsubscribe from these emails',
};
const billingOpt = {
    title:                 null,
    headline:              null,
    bodyElements:          [],
    addressElements:       [],
    lineItems:             [],
    currency:              '$',
    totalTitle:            'Total',
    totalCost:             0,
    link:                  null,
    linkCTA:               null,
    byline:                null,
    footerText:            null,
    footerLink:            null,
    footerLinkText:        null,
    unsubscribeLink:       null,
    unsubscribeLinkText:   'Unsubscribe from these emails',
};

/**
 * @typedef {Object} LineItem
 * @property {String} title
 * @property {Number|String} amount
 */

/**
 * Build billing/invoice email HTML
 * module.exports.billing
 *
 * @access public
 * @param {Object} data
 * @param {String} data.title
 * @param {String} data.headline
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
function constructBilling(data) {
    return billing(Object.assign({}, billingOpt, data));
}

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
function constructAlert(data) {
    return alert(Object.assign({}, alertOpt, data));
}

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
function constructAction(data) {
    return action(Object.assign({}, actionOpt, data));
}

module.exports = {
    billing: constructBilling,
    alert:   constructAlert,
    action:  constructAction,
};
