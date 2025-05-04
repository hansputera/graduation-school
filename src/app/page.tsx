'use client';

import { deadlineDate } from '@/lib/deadline';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const CheckFormSectionLazy = dynamic(() => import('@/sections/checkform'));
const CountdownTimerLazy = dynamic(() => import('@/sections/countdownTimer'));

export default function Home() {
  const [formEnabled, setFormEnabled] = useState(false);

  return (
    <>
      {formEnabled && <CheckFormSectionLazy />}
      {!formEnabled && <CountdownTimerLazy targetDate={deadlineDate} onComplete={() => setFormEnabled(true)} />}
    </>
  );
}
