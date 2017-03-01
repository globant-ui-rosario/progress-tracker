import _ from 'lodash';
import axios from 'axios';

const METHODS_WITH_DATA = ['post', 'put', 'patch'];

const services = {

    initialize (config) {
        this.config = config;
    },

    execute (serviceId, data) {
        let call;
        const method = this.getServiceMethod(serviceId);
        const onError = this.config.onError;
        const url = this.getServiceUrl(serviceId);
        const config = {
            method: method,
            url: url
        };

        if (_.includes(METHODS_WITH_DATA, method)) {
            config.data = data;
        } else {
            config.params = data;
        }

        call = axios(config);

        if (onError) {
            call.catch(onError);
        }

        return call;
    },

    getServiceUrl (serviceId) {
        const config = this.config;
        const serviceUrl = _.get(config, `services[${serviceId}].url`);

        return config.host + '/' + config.prefix + serviceUrl;
    },

    getServiceMethod(serviceId) {
        return _.get(this.config, `services[${serviceId}].method`, 'get');
    }
};

export default services;
