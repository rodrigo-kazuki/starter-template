import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  postalCode: string;
  service: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,lastName,postalCode,service
}) => (
  <div>
    <p>Hello my name is , {firstName} {lastName}</p>
    <p>My postal code is {postalCode}</p>
    <p>The service I would like to resquest is: {service}</p>
  </div>
);