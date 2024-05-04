'use client'
import React from 'react';
import ApplicationComponent  from '@/component/application/page'; // Adjusted import statement
import WithAuth from '@/provider/auth/requireauth';

const ApplicationForm: React.FC = () => {
    return (
        <ApplicationComponent/>
    )
};

export default ApplicationForm;