import moment from 'moment/moment';
import {
  PROVINCES,
  VEHICLE_USAGES,
} from '../../utils/forms/constants';

const schema = {
  // Page One -- InitialFields
  requester_name: {
    name: 'requester_name',
    prettified_name: 'Requester Name',
    formValueCategory: 'Other',
    label: 'Who is completing this request?',
    placeholder: 'Who is completing this request?',
    helpText: '',
    type: 'text',
    required: true,
  },

  requester_name_other: {
    name: 'requester_name_other',
    prettified_name: 'Other Requester Name',
    formValueCategory: 'Other',
    label: 'Name of person completing this request?',
    placeholder: 'Name of person completing this request?',
    helpText: 'Only the person listed on the vehicle registration or an authorized individual may make changes to this policy.',
    type: 'text',
    required: true,
  },

  policy_number: {
    name: 'policy_number',
    prettified_name: 'Policy Number',
    formValueCategory: 'Other',
    label: 'Which policy will this change take place on?',
    placeholder: 'Which policy will this change take place on?',
    helpText: '',
    type: 'text',
    required: true,
  },

  // Page One -- VehicleBeingAddedFields
  adding_vehicle_year: {
    name: 'adding_vehicle_year',
    prettified_name: 'Vehicle Year',
    formValueCategory: 'YMMVIN',
    label: 'Vehicle Year',
    placeholder: 'YYYY',
    helpText: '',
    type: 'text',
    required: true,
  },

  adding_old_vehicle_name: {
    name: 'adding_old_vehicle_name',
    prettified_name: 'Vehicle Make and Model',
    formValueCategory: 'YMMVIN',
    label: 'Vehicle Make and Model',
    placeholder: 'Vehicle Make and Model',
    helpText: '',
    type: 'text',
    required: true,
  },

  adding_vehicle_make: {
    name: 'adding_vehicle_make',
    prettified_name: 'Vehicle Make',
    formValueCategory: 'YMMVIN',
    label: 'Vehicle Make',
    placeholder: 'Vehicle Make',
    helpText: '',
    type: 'text',
    required: true,
  },

  adding_vehicle_model: {
    name: 'adding_vehicle_model',
    prettified_name: 'Vehicle Model',
    formValueCategory: 'YMMVIN',
    label: 'Vehicle Model',
    placeholder: 'Vehicle Model',
    helpText: '',
    type: 'text',
    required: true,
  },

  adding_vin: {
    name: 'adding_vin',
    prettified_name: 'VIN',
    formValueCategory: 'YMMVIN',
    label: 'VIN',
    placeholder: 'VIN',
    helpText: 'A vehicle identification number is a unique 17-digit number assigned by automakers to every vehicle they make. It can be found in the top left corner of the dashboard, driver\'s door or post and the firewall under the hood.',
    type: 'text',
    required: false,
  },

  take_possession_date: {
    name: 'take_possession_date',
    prettified_name: 'Possession Date',
    formValueCategory: 'YMMVIN',
    label: 'When do you take possession of this vehicle?',
    placeholder: 'When do you take possession of this vehicle?',
    helpText: 'This is the date you begin driving the car and not the purchase date.',
    type: 'text',
    required: true,
    willMessageTrigger: (stringDate) => {
      if (moment(stringDate).isBefore(moment().add(2, 'days'))) {
        return true;
      }
      return false;
    },
  },

  registered_province: {
    name: 'registered_province',
    prettified_name: 'Registration Province',
    formValueCategory: 'YMMVIN',
    label: 'In what province is the vehicle registered?',
    placeholder: 'In what province is the vehicle registered?',
    helpText: 'Please contact us if the vehicle is not yet registered or if it\'s registered outside of Canada. Start a web chat or call us at 1-888-881-8045.',
    type: 'text',
    required: true,
    willMessageTrigger: (provVal) => {
      if (provVal !== PROVINCES.ON) {
        return true;
      }
      return false;
    },
  },

  vehicle_condition: {
    name: 'vehicle_condition',
    prettified_name: 'Condition',
    formValueCategory: 'YMMVIN',
    label: 'What is the condition of this vehicle?',
    placeholder: 'What is the condition of this vehicle?',
    helpText: '',
    type: 'text',
    required: true,
  },

  kms_at_purchase: {
    name: 'kms_at_purchase',
    prettified_name: 'KMs at Purchase',
    formValueCategory: 'YMMVIN',
    label: 'How many kilometers are on the vehicle at the time of purchase',
    placeholder: 'How many kilometers are on the vehicle at the time of purchase',
    helpText: '',
    type: 'number',
    endLabel: 'km',
    required: true,
  },

  price_of_vehicle: {
    name: 'price_of_vehicle',
    prettified_name: 'Price',
    formValueCategory: 'YMMVIN',
    label: 'What is the price of this vehicle (with tax, before trade-in)',
    placeholder: 'What is the price of this vehicle (with tax, before trade-in)',
    helpText: '',
    startLabel: '$',
    type: 'text',
    required: true,
  },

  vehicle_usage: {
    name: 'vehicle_usage',
    prettified_name: 'Primary Use',
    formValueCategory: 'YMMVIN',
    label: 'Primary Use',
    placeholder: 'Primary Use',
    helpText: 'Pleasure means your  vehicle is used for leisure driving only. Commuting means your vehicle is used to drive to and from work and/or school, as well as for leisure driving. Business means your vehicle is used for work-related purposes and for leisure driving on occasion. For example, a sales person who uses their vehicle to meet with clients.',
    type: 'text',
    required: true,
    willMessageTrigger: (vehUse) => {
      if (vehUse === VEHICLE_USAGES.pleasure) {
        return true;
      }
      return false;
    },
  },

  vehicle_daily_kms: {
    name: 'vehicle_daily_kms',
    prettified_name: 'Daily KM',
    formValueCategory: 'YMMVIN',
    label: 'Daily KM',
    placeholder: 'Daily KM',
    helpText: 'The approximate number of kilometres you drive one way to work/school daily.',
    type: 'number',
    endLabel: 'km',
    required: true,
  },

  vehicle_annual_kms: {
    name: 'vehicle_annual_kms',
    prettified_name: 'Annual KM',
    formValueCategory: 'YMMVIN',
    label: 'Annual KM',
    placeholder: 'Annual KM',
    helpText: 'The total number of kilometres you drive annually for all uses.',
    type: 'number',
    endLabel: 'km',
    required: true,
  },

  business_vehicle_annual_kms: {
    name: 'business_vehicle_annual_kms',
    prettified_name: 'Annual Business KM',
    formValueCategory: 'YMMVIN',
    label: 'Annual Business KM',
    placeholder: '',
    helpText: 'Please choose the number closest to the approximate number of kilometers that you drive for business purposes each year.',
    type: 'number',
    endLabel: 'km',
    required: true,
  },

  carry_passengers_for_compensation: {
    name: 'carry_passengers_for_compensation',
    prettified_name: 'Carrying passengers for compensation',
    formValueCategory: 'YMMVIN',
    label: 'Will the vehicle be used to carry passengers for compensation (ex.taxi, ride sharing services such as Uber or Lyft)?',
    placeholder: 'Will the vehicle be used to carry passengers for compensation (ex.taxi, ride sharing services such as Uber or Lyft)?',
    helpText: '',
    type: 'text',
    required: true,
  },

  carry_special_use: {
    name: 'carry_special_use',
    prettified_name: 'Special Use',
    formValueCategory: 'YMMVIN',
    label: 'Will there be any special use of the vehicle, such as carrying dangerous goods or explosives?',
    placeholder: 'Will there be any special use of the vehicle, such as carrying dangerous goods or explosives?',
    helpText: '',
    type: 'text',
    required: true,
  },

  vehicle_modified: {
    name: 'vehicle_modified',
    prettified_name: 'Modifications',
    formValueCategory: 'YMMVIN',
    label: 'Has the vehicle been modified or customized (after market/not factory installed; ex. wheelchair lift, ground effects, sound system, etc.)?',
    placeholder: 'Has the vehicle been modified or customized (after market/not factory installed; ex. wheelchair lift, ground effects, sound system, etc.)?',
    helpText: 'If we are unaware of changes (ie. aftermarket paint job) or modifications (ie. wheelchair lift), your policy would only reflect a standard model. Therefore, a claim payout would not reflect the cost of the upgrades.',
    type: 'text',
    required: true,
  },

  existing_damage: {
    name: 'existing_damage',
    prettified_name: 'Existing Damage',
    formValueCategory: 'YMMVIN',
    label: 'Is there any existing or unrepaired damage to the vehicle?',
    placeholder: 'Is there any existing or unrepaired damage to the vehicle?',
    helpText: 'If we are not aware of such damage, it can slow down the claims process while insurance adjusters investigate how much damage was sustained in the loss and how much existed prior to the accident.',
    type: 'text',
    required: true,
    willMessageTrigger: (val) => {
      if (val === true || val === 'true') {
        return true;
      }
      return false;
    },
  },

  winter_tires: {
    name: 'winter_tires',
    prettified_name: 'Winter Tires',
    formValueCategory: 'YMMVIN',
    label: 'Do you have Winter Tires for this vehicle?',
    placeholder: 'Do you have Winter Tires for this vehicle?',
    helpText: 'Winter tires can improve driving safety and our insurance partners want to reward you for that improved safety. Is your vehicle equipped with winter tires during the months of November to April?',
    type: 'text',
    required: true,
    willMessageTrigger: (val) => {
      if (val === true || val === 'true') {
        return true;
      }
      return false;
    },
  },

  // DriverInformationFields
  registered_owner: {
    name: 'registered_owner',
    prettified_name: 'Registered Owner',
    formValueCategory: 'YMMVIN',
    label: 'Who is the registered owner of the vehicle?',
    placeholder: 'Who is the registered owner of the vehicle?',
    helpText: 'The name of the person listed on the vehicle registration.',
    type: 'text',
    required: true,
  },
  other_registered_owner_name: {
    name: 'other_registered_owner_name',
    prettified_name: 'Other Registered Owner Driver\'s Name',
    formValueCategory: 'YMMVIN',
    label: "Driver's Name?",
    placeholder: "Driver's Name?",
    helpText: '',
    type: 'text',
    required: true,
  },
  other_registered_owner_licence: {
    name: 'other_registered_owner_licence',
    prettified_name: 'Other Registered Owner Driver\'s Licence Number',
    formValueCategory: 'YMMVIN',
    label: "Driver's Licence Number",
    placeholder: "Driver's Licence Number",
    helpText: '',
    type: 'text',
    required: true,
  },
  principle_driver: {
    name: 'principle_driver',
    prettified_name: 'Principal Driver',
    formValueCategory: 'YMMVIN',
    label: 'Who will be the principal driver of the vehicle?',
    placeholder: 'Who will be the principal driver of the vehicle?',
    helpText: 'The person that drives the vehicle most, usually for commuting purposes.',
    type: 'text',
    required: true,
  },
  other_principle_driver_name: {
    name: 'other_principle_driver_name',
    prettified_name: 'Principal Driver\'s name',
    formValueCategory: 'YMMVIN',
    label: "Driver's Name?",
    placeholder: "Driver's Name?",
    helpText: 'This should be the person who operates the vehicle the most; typically the person who uses the vehicle to commute to work.',
    type: 'text',
    required: true,
  },
  other_principle_driver_licence: {
    name: 'other_principle_driver_licence',
    prettified_name: 'Principal Driver\'s Licence Number',
    formValueCategory: 'YMMVIN',
    label: "Driver's Licence Number",
    placeholder: "Driver's Licence Number",
    helpText: '',
    type: 'text',
    required: true,
  },
  other_frequent_driver: {
    name: 'other_frequent_driver',
    prettified_name: 'Other Drivers',
    formValueCategory: 'Other',
    label: 'Are there any other licenced drivers in the household who are not listed on your policy?',
    placeholder: 'Are there any other licenced drivers in the household who are not listed on your policy?',
    helpText: 'If other drivers have access to your car, they may need to be on your policy as a secondary driver.',
    type: 'text',
    required: true,
  },
  other_frequent_driver_name: {
    name: 'other_frequent_driver_name',
    prettified_name: 'Driver\'s Name',
    formValueCategory: 'Other',
    label: 'Driver\'s Name',
    placeholder: 'Name',
    helpText: '',
    type: 'text',
    required: true,
  },
  other_frequent_driver_licence: {
    name: 'other_frequent_driver_licence',
    prettified_name: 'Driver\'s Licence',
    formValueCategory: 'Other',
    label: 'Driver\'s Licence Number',
    placeholder: 'Licence Number',
    helpText: '',
    type: 'text',
    required: true,
  },
  other_frequent_driver_name_1: {
    name: 'other_frequent_driver_name',
    prettified_name: 'Driver\'s (1) Name',
    formValueCategory: 'Other',
    label: 'Driver\'s Name',
    placeholder: 'Name',
    helpText: '',
    type: 'text',
    required: true,
  },
  other_frequent_driver_licence_1: {
    name: 'other_frequent_driver_licence',
    prettified_name: 'Driver\'s (1) Licence',
    formValueCategory: 'Other',
    label: 'Driver\'s Licence Number',
    placeholder: 'Licence Number',
    helpText: '',
    type: 'text',
    required: true,
  },
  other_frequent_driver_name_2: {
    name: 'other_frequent_driver_name',
    prettified_name: 'Driver\'s (2) Name',
    formValueCategory: 'Other',
    label: 'Driver\'s Name',
    placeholder: 'Name',
    helpText: '',
    type: 'text',
    required: true,
  },
  other_frequent_driver_licence_2: {
    name: 'other_frequent_driver_licence',
    prettified_name: 'Driver\'s (2) Licence',
    formValueCategory: 'Other',
    label: 'Driver\'s Licence Number',
    placeholder: 'Licence Number',
    helpText: '',
    type: 'text',
    required: true,
  },
  other_frequent_driver_name_3: {
    name: 'other_frequent_driver_name',
    prettified_name: 'Driver\'s (3) Name',
    formValueCategory: 'Other',
    label: 'Driver\'s Name',
    placeholder: 'Name',
    helpText: '',
    type: 'text',
    required: true,
  },
  other_frequent_driver_licence_3: {
    name: 'other_frequent_driver_licence',
    prettified_name: 'Driver\'s (3) Licence',
    formValueCategory: 'Other',
    label: 'Driver\'s Licence Number',
    placeholder: 'Licence Number',
    helpText: '',
    type: 'text',
    required: true,
  },
  other_frequent_driver_name_4: {
    name: 'other_frequent_driver_name',
    prettified_name: 'Driver\'s (4) Name',
    formValueCategory: 'Other',
    label: 'Driver\'s Name',
    placeholder: 'Name',
    helpText: '',
    type: 'text',
    required: true,
  },
  other_frequent_driver_licence_4: {
    name: 'other_frequent_driver_licence',
    prettified_name: 'Driver\'s (4) Licence',
    formValueCategory: 'Other',
    label: 'Driver\'s Licence Number',
    placeholder: 'Licence Number',
    helpText: '',
    type: 'text',
    required: true,
  },

  // Lessor/Lienholder Information
  financing: {
    name: 'financing',
    prettified_name: 'Leased or Financed',
    formValueCategory: 'YMMVIN',
    label: 'Is this vehicle leased or financed',
    placeholder: 'Is this vehicle leased or financed',
    helpText: '',
    type: 'text',
    required: true,
  },
  financing_name: {
    name: 'financing_name',
    prettified_name: 'Name',
    formValueCategory: 'YMMVIN',
    label: 'Name',
    placeholder: 'Name',
    helpText: '',
    type: 'text',
    required: false,
  },
  financing_postal_code: {
    name: 'financing_postal_code',
    prettified_name: 'Postal Code',
    formValueCategory: 'YMMVIN',
    label: 'Postal Code',
    placeholder: 'Postal Code',
    helpText: '',
    type: 'text',
    required: false,
  },
  financing_unit_number: {
    name: 'financing_unit_number',
    prettified_name: 'Unit Number',
    formValueCategory: 'YMMVIN',
    label: 'Unit Number (if applicable)',
    placeholder: 'Unit Number (if applicable)',
    helpText: '',
    type: 'text',
    required: false,
  },
  financing_street_number: {
    name: 'financing_street_number',
    prettified_name: 'Street Number',
    formValueCategory: 'YMMVIN',
    label: 'Street Number',
    placeholder: 'Street Number',
    helpText: '',
    type: 'text',
    required: false,
  },
  financing_street_name: {
    name: 'financing_street_name',
    prettified_name: 'Street Name',
    formValueCategory: 'YMMVIN',
    label: 'Street Name',
    placeholder: 'Street Name',
    helpText: '',
    type: 'text',
    required: false,
  },
  financing_city: {
    name: 'financing_city',
    prettified_name: 'City',
    formValueCategory: 'YMMVIN',
    label: 'City',
    placeholder: 'City',
    helpText: '',
    type: 'text',
    required: false,
  },
  financing_province: {
    name: 'financing_province',
    prettified_name: 'Province',
    formValueCategory: 'YMMVIN',
    label: 'Province',
    placeholder: 'Province',
    helpText: '',
    type: 'text',
    required: false,
  },

  // Coverage
  coverage_liability: {
    name: 'coverage_liability',
    prettified_name: 'Liability',
    formValueCategory: 'YMMVIN',
    helpText: 'Liability will provide coverage in the event if a third party were to bring a judgement against you.',
    label: 'Liability',
    placeholder: 'Liability',
    required: true,
    type: 'text',
    willMessageTrigger: true,
  },
  coverage_collision: {
    name: 'coverage_collision',
    prettified_name: 'Collision',
    formValueCategory: 'YMMVIN',
    helpText: 'Collision or Upset',
    label: 'Collision',
    placeholder: 'Collision',
    type: '',
    required: true,
  },
  coverage_comprehensive: {
    name: 'coverage_comprehensive',
    prettified_name: 'Comprehensive',
    formValueCategory: 'YMMVIN',
    helpText: 'Comprehensive covers you for such things as fire, theft, vandalism, and glass breakage.',
    label: 'Comprehensive',
    placeholder: 'Comprehensive',
    type: '',
    required: true,
  },
  endorsement_loss_of_use: {
    name: 'endorsement_loss_of_use',
    prettified_name: 'Coverage for Transportation Replacement (20)',
    formValueCategory: 'YMMVIN',
    helpText: 'If your vehicle is in the shop due to an insured claim, you can be reimbursed up to your limit for a rental car, taxi cab, or whatever you need to get around.',
    label: 'Coverage for Transportation Replacement (20)',
    placeholder: 'Coverage for Transportation Replacement (20)',
    type: '',
    required: false,
  },
  endorsement_non_owned_autos: {
    name: 'endorsement_non_owned_autos',
    prettified_name: 'Liability for Damage to Non-Owned Autos (27)',
    formValueCategory: 'YMMVIN',
    helpText: 'If you happen to rent a vehicle anywhere in Canada or the U.S., you do not need to purchase coverage for that rental vehicle, this policy covers any damage up to your limit.',
    label: 'Liability for Damage to Non-Owned Autos (27)',
    placeholder: 'Liability for Damage to Non-Owned Autos (27)',
    type: '',
    required: false,
  },
  endorsement_depreciation: {
    name: 'endorsement_depreciation',
    prettified_name: 'Limited Waiver of Depreciation/Limited Waiver of Depreciation for Specified Lessee(s)',
    formValueCategory: 'YMMVIN',
    helpText: 'In case you ever get into an accident which causes the full loss of your vehicle within the first few months you own it, you will be reimbursed for the purchase price, not the depreciated value of the vehicle.',
    label: 'Limited Waiver of Depreciation/Limited Waiver of Depreciation for Specified Lessee(s)',
    placeholder: 'Limited Waiver of Depreciation/Limited Waiver of Depreciation for Specified Lessee(s)',
    type: '',
    required: false,
  },
  endorsement_accident: {
    name: 'endorsement_accident',
    prettified_name: 'Accident Waiver',
    formValueCategory: 'YMMVIN',
    helpText: 'In the event of you being in an accident in which you are at fault, it will protect your driving record and forgive the accident.',
    label: 'Accident Waiver',
    placeholder: 'Accident Waiver',
    type: '',
    required: false,
    willMessageTrigger: (val) => {
      if (val === true || val === 'true') {
        return true;
      }
      return false;
    },
  },
  endorsement_conviction: {
    name: 'endorsement_conviction',
    prettified_name: 'Conviction Protector',
    formValueCategory: 'YMMVIN',
    helpText: 'In the event of your first Minor Conviction, this endorsement will prevent you from losing your Conviction Free discount.',
    label: 'Conviction Protector',
    placeholder: 'Conviction Protector',
    type: '',
    required: false,
    willMessageTrigger: (val) => {
      if (val === true || val === 'true') {
        return true;
      }
      return false;
    },
  },
};

export default schema;
