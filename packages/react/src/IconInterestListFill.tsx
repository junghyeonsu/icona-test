/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconInterestListFill = (
  {
    size = 24,
    ...props
  }: SVGProps<SVGSVGElement> & {
    size?: number | string,
  },
  ref: Ref<SVGSVGElement>
) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-seed-icon="true"
    data-seed-icon-version="0.0.1"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <path
        d="M10.7628 2.2317C11.15 1.02997 12.8502 1.02997 13.2375 2.2317L15.2412 8.45011H21.4351C22.701 8.45011 23.2202 10.0754 22.1888 10.8093L17.1411 14.4012L19.0847 20.3688C19.475 21.5672 18.1027 22.5641 17.0836 21.8225L12.0001 18.1229L6.9166 21.8225C5.89756 22.5641 4.52524 21.5672 4.91554 20.3688L6.85912 14.4012L1.81145 10.8093C0.780045 10.0754 1.29929 8.45011 2.56517 8.45011H8.75906L10.7628 2.2317Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconInterestListFill);
export default ForwardRef;
