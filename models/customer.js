const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addressSchema = new Schema({
  id: Schema.Types.Mixed, // For large numbers
  customer_id: Schema.Types.Mixed, // For large numbers
  first_name: String,
  last_name: String,
  company: { type: String, default: null },
  address1: String,
  address2: { type: String, default: null },
  city: String,
  province: String,
  country: String,
  zip: String,
  phone: { type: String, default: null },
  name: { type: String, default: "" },
  province_code: { type: String, default: null },
  country_code: { type: String, default: "" },
  country_name: { type: String, default: "" },
  default: Boolean
});

const emailMarketingConsentSchema = new Schema({
  state: String,
  opt_in_level: String,
  consent_updated_at: { type: Date, default: null }
});

const defaultAddressSchema = new Schema({
  id: Schema.Types.Mixed, // For large numbers
  customer_id: Schema.Types.Mixed, // For large numbers
  first_name: String,
  last_name: String,
  company: { type: String, default: null },
  address1: String,
  address2: { type: String, default: null },
  city: String,
  province: String,
  country: String,
  zip: String,
  phone: { type: String, default: null },
  name: { type: String, default: "" },
  province_code: { type: String, default: null },
  country_code: { type: String, default: "" },
  country_name: { type: String, default: "" },
  default: Boolean
});

const spotifyCustomersSchema = new Schema({
  _id: Schema.Types.Mixed, // For large numbers
  addresses: [addressSchema],
  admin_graphql_api_id: String,
  created_at: { type: Date, default: null },
  currency: { type: String, default: "" },
  default_address: defaultAddressSchema,
  email: { type: String, default: "" },
  email_marketing_consent: emailMarketingConsentSchema,
  first_name: String,
  id: Schema.Types.Mixed, // For large numbers
  last_name: String,
  last_order_id: { type: String, default: null },
  last_order_name: { type: String, default: null },
  multipass_identifier: { type: String, default: null },
  note: { type: String, default: null },
  orders_count: { type: Number, default: 0 },
  phone: { type: String, default: null },
  sms_marketing_consent: { type: String, default: null },
  state: String,
  tags: { type: String, default: "" },
  tax_exempt: Boolean,
  tax_exemptions: [String],
  total_spent: { type: String, default: "0.00" },
  updated_at: { type: Date, default: null },
  verified_email: Boolean
}, { collection: "spotifyCustomers" }); // Collection name

const SpotifyCustomer = mongoose.model('SpotifyCustomer', spotifyCustomersSchema);
module.exports = SpotifyCustomer;
