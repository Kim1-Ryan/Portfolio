import React from 'react';

const emailAddress = 'kimryan.montevellian@gmail.com';
const composeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}`;

export default function EmailLink({ children, ...props }) {
  return (
    <a
      {...props}
      href={composeUrl}
      target="_blank"
      rel="noopener noreferrer"
      title={`Email ${emailAddress} in Gmail (opens in a new tab)`}
    >
      {children}
    </a>
  );
}
