import { IndexRoute, Route } from 'react-router';
import React from 'react';

import ApplicationSyncView from 'app-course-sync/views/ApplicationSyncView';
import PageContainer from 'app-course-sync/containers/PageContainer';
import PersonalInformationView from 'app-course-sync/views/PersonalInformationView';
import RepositoryConfigurationView from 'app-course-sync/views/RepositoryConfigurationView';
import RepositoryForkView from 'app-course-sync/views/RepositoryForkView';
import SyncronizationCompletedView from 'app-course-sync/views/SyncronizationCompletedView';
import WellcomeView from 'app-course-sync/views/WellcomeView';

export default (
    <Route path="/course-sync" component={PageContainer}>
        <IndexRoute component={WellcomeView} />
        <Route path="personal-information" component={PersonalInformationView} />
        <Route path="repository-fork" component={RepositoryForkView} />
        <Route path="application-sync" component={ApplicationSyncView} />
        <Route path="repository-config" component={RepositoryConfigurationView} />
        <Route path="done" component={SyncronizationCompletedView} />
    </Route>
);
