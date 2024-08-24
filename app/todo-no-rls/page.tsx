import { sleep } from '@/lib/utils';
import React from 'react'

const page = async () => {
  await sleep(1500);
  // throw new Error("custom error")
  return (
    <div>page</div>
  )
}

export default page