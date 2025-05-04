'use client';

import { deadlineDate } from '@/lib/deadline';
import { CheckFormSection } from '@/sections/checkform';
import { CountdownTimer } from '@/sections/countdownTimer';
import React from 'react';

export default function Home() {
  const [formEnabled, setFormEnabled] = React.useState(false);

  return (
    <>
      {formEnabled && <CheckFormSection />}
      {!formEnabled && <CountdownTimer targetDate={deadlineDate} onComplete={() => setFormEnabled(true)} />}
    </>
  );
}
