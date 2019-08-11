"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_latitude_degrees_1 = require("../../../../data/data.latitude-degrees");
var data_altitude_1 = require("../../../../data/data.altitude");
var data_heart_rate_1 = require("../../../../data/data.heart-rate");
var data_cadence_1 = require("../../../../data/data.cadence");
var data_temperature_1 = require("../../../../data/data.temperature");
var data_distance_1 = require("../../../../data/data.distance");
var data_speed_1 = require("../../../../data/data.speed");
var data_pace_1 = require("../../../../data/data.pace");
var data_vertical_speed_1 = require("../../../../data/data.vertical-speed");
var data_power_1 = require("../../../../data/data.power");
var data_longitude_degrees_1 = require("../../../../data/data.longitude-degrees");
var data_form_power_1 = require("../../../../data/data.form-power");
var data_leg_stiffness_1 = require("../../../../data/data.leg-stiffness");
var data_vertical_oscillation_1 = require("../../../../data/data.vertical-oscillation");
var helpers_1 = require("../../../utilities/helpers");
var data_accumulated_power_1 = require("../../../../data/data.accumulated-power");
var data_stryd_altitude_1 = require("../../../../data/data.stryd-altitude");
var data_stryd_distance_1 = require("../../../../data/data.stryd-distance");
var data_stryd_speed_1 = require("../../../../data/data.stryd-speed");
exports.FITSampleMapper = [
    {
        dataType: data_latitude_degrees_1.DataLatitudeDegrees.type,
        getSampleValue: function (sample) {
            return sample.position_lat;
        },
    },
    {
        dataType: data_longitude_degrees_1.DataLongitudeDegrees.type,
        getSampleValue: function (sample) {
            return sample.position_long;
        },
    },
    {
        dataType: data_distance_1.DataDistance.type,
        getSampleValue: function (sample) {
            return sample.distance;
        },
    },
    {
        dataType: data_heart_rate_1.DataHeartRate.type,
        getSampleValue: function (sample) {
            return sample.heart_rate;
        },
    },
    {
        dataType: data_altitude_1.DataAltitude.type,
        getSampleValue: function (sample) {
            return sample.altitude;
        },
    },
    {
        dataType: data_stryd_altitude_1.DataStrydAltitude.type,
        getSampleValue: function (sample) {
            return sample.Elevation;
        },
    },
    {
        dataType: data_stryd_distance_1.DataStrydDistance.type,
        getSampleValue: function (sample) {
            return sample.Distance;
        },
    },
    {
        dataType: data_stryd_speed_1.DataStrydSpeed.type,
        getSampleValue: function (sample) {
            return sample.Speed;
        },
    },
    {
        dataType: data_cadence_1.DataCadence.type,
        getSampleValue: function (sample) {
            var cadenceValue = sample.cadence;
            if (helpers_1.isNumber(sample.fractional_cadence)) {
                cadenceValue += sample.fractional_cadence;
            }
            return cadenceValue;
        },
    },
    {
        dataType: data_speed_1.DataSpeed.type,
        getSampleValue: function (sample) {
            return sample.speed;
        },
    },
    {
        dataType: data_pace_1.DataPace.type,
        getSampleValue: function (sample) {
            return helpers_1.isNumber(sample.speed) ? helpers_1.convertSpeedToPace(sample.speed) : null;
        },
    },
    {
        dataType: data_vertical_speed_1.DataVerticalSpeed.type,
        getSampleValue: function (sample) {
            return sample.vertical_speed;
        },
    },
    {
        dataType: data_power_1.DataPower.type,
        getSampleValue: function (sample) {
            return sample.power;
        },
    },
    {
        dataType: data_accumulated_power_1.DataAccumulatedPower.type,
        getSampleValue: function (sample) {
            return sample.accumulated_power;
        },
    },
    {
        dataType: data_temperature_1.DataTemperature.type,
        getSampleValue: function (sample) {
            return sample.temperature;
        },
    },
    {
        dataType: data_form_power_1.DataFormPower.type,
        getSampleValue: function (sample) {
            return sample['Form Power'];
        },
    },
    {
        dataType: data_leg_stiffness_1.DataLegStiffness.type,
        getSampleValue: function (sample) {
            return sample['Leg Spring Stiffness'];
        },
    },
    {
        dataType: data_vertical_oscillation_1.DataVerticalOscillation.type,
        getSampleValue: function (sample) {
            return sample.vertical_oscillation;
        },
    },
];
