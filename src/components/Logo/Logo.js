import React from 'react'
import { WavyLink } from 'react-wavy-transitions'

const Logo = () => {
  return (
    <>
      {window.location.pathname === '/' ? 
        <svg className='header__logo' width="75" height="30" viewBox="0 0 75 30" fill="#" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_45_99)">
              <path d="M63.8998 29.8516C61.9045 28.5828 64.4104 22.7451 60.9107 24.4812C60.5871 26.3114 61.0462 29.7027 58.6921 29.6828C58.3576 27.2477 59.9582 24.0479 57.9318 22.0774C54.6151 19.6046 60.0672 20.1884 60.8276 22.1007C64.7171 21.2312 63.9904 25.8987 64.7173 28.3407C65.7468 29.1372 65.125 30.4441 63.8997 29.8516H63.8998Z" fill="black" />
              <path d="M36.5692 28.9231C34.573 27.0936 35.4602 24.0381 35.05 21.6317C34.152 18.0587 31.5016 21.2488 32.3309 23.5299C32.8893 26.5096 29.7578 26.0129 30.5721 23.2251C30.4077 21.996 30.8511 20.583 30.4032 19.4482C29.7808 17.2204 27.6896 18.4764 26.4697 17.9696C26.8816 14.9037 31.2003 15.9724 31.9194 18.3824C32.8602 19.8381 35.524 17.7507 36.7042 19.7371C38.0501 22.0187 36.2227 25.4056 37.9577 27.3983C38.9501 27.6094 40.6793 24.6052 40.1436 27.0739C39.8305 28.7964 38.0814 29.5331 36.5693 28.9232L36.5692 28.9231Z" fill="black" />
              <path d="M71.2911 28.9768C68.3685 28.8854 67.2766 25.846 67.0718 23.3493C67.083 21.6739 64.9983 18.3266 67.153 17.4949C68.6834 17.0429 67.6743 20.2441 68.8398 20.6315C70.1537 20.6194 74.9298 21.3752 72.8467 23.1758C71.3412 23.3914 67.7238 21.0986 69.2971 24.2446C69.4406 27.5206 73.4058 27.1354 74.9973 27.9593C74.3051 29.3272 72.5805 29.0643 71.2912 28.9768L71.2911 28.9768Z" fill="black" />
              <path d="M45.7331 28.1554C43.041 27.2532 40.6523 25.0263 41.0651 21.864C40.3562 18.9664 43.5357 15.2735 45.9501 18.1182C45.8594 20.4517 42.2746 18.2668 42.9015 21.2714C41.9487 24.915 45.4663 26.2984 48.1296 27.1238C49.4393 27.899 46.3405 28.9394 45.7327 28.1554H45.7331Z" fill="black" />
              <path d="M52.5151 28.0483C49.1808 27.2589 48.2885 23.257 49.7218 20.4076C50.0405 17.2412 54.515 16.6036 54.9592 20.0144C56.3049 21.8584 52.0641 24.3197 52.8651 21.9455C55.0678 20.6869 51.4439 18.2236 51.1707 21.0704C49.5194 23.9692 52.2421 27.6388 55.3827 26.7128C58.3526 27.2726 53.3903 29.4716 52.5148 28.0483L52.5151 28.0483Z" fill="black" />
              <path d="M13.0055 6.06984C12.9148 4.91986 11.4974 0.828057 10.6494 2.43296C10.7887 3.25423 11.8026 7.7026 13.0055 6.06984ZM4.75628 26.7574C2.16309 25.6015 -0.775597 23.0171 0.180254 19.8082C0.374193 16.9723 0.492485 14.1328 0.850176 11.3159C0.773127 9.07184 1.58218 6.85918 1.02397 4.62098C-0.0397536 3.01003 -0.912308 0.0417709 2.10426 0.00088501C4.73484 0.375036 5.57057 3.53368 3.87662 5.56637C3.74231 11.0501 3.87141 16.5416 3.80047 22.0287C5.04832 23.4459 7.02392 25.2023 8.87382 23.78C11.2285 22.0384 12.504 19.0608 13.4505 16.3011C13.6697 14.4751 15.0465 10.6756 12.5108 10.3151C9.7793 9.42652 8.66246 6.09049 8.44643 3.38238C7.35581 -0.193801 11.8181 -1.08561 13.1722 1.85305C15.2615 3.58479 14.0722 9.85562 18.024 7.48174C19.1969 7.13339 19.2296 3.57953 20.317 5.86463C20.1683 9.39367 15.4031 9.54222 15.3892 12.6554C15.1364 17.9342 12.3597 22.9832 8.36888 26.2385C7.31445 26.9277 5.95087 26.9594 4.75615 26.7574L4.75628 26.7574Z" fill="black" />
              <path d="M22.7577 25.2631C22.1627 22.375 23.2458 19.358 22.5371 16.5085C23.3546 13.6868 26.6551 16.8307 24.5137 18.637C24.4368 20.4603 22.7741 24.505 25.838 23.9249C25.9645 25.363 23.6325 26.2248 22.7577 25.2631L22.7577 25.2631Z" fill="black" />
              <path d="M24.4869 9.60501C23.0153 9.78458 20.9225 8.87799 22.839 7.48019C24.825 6.14354 27.032 9.39093 24.4869 9.60501Z" fill="black" />
        </g>
        <defs>
          <clipPath id="clip0_45_99">
              <rect width="75" height="30" fill="white" />
          </clipPath>
        </defs>
        </svg>
      :
        <WavyLink to={`/`} color="#8f44fd">
          <div className="header__logo-backhome">
            <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M3.61461 0.159096L0.622553 3.61591C0.438946 3.82804 0.438946 4.17196 0.622553 4.38409L3.61461 7.8409C3.79822 8.05303 4.0959 8.05303 4.27951 7.8409C4.46312 7.62878 4.46312 7.28485 4.27951 7.07272L2.09006 4.54319H16V3.45681H2.09006L4.27951 0.927276C4.46312 0.715149 4.46312 0.371223 4.27951 0.159096C4.0959 -0.0530318 3.79822 -0.0530318 3.61461 0.159096Z" fill="black" />
            </svg>
            <span>home</span>
          </div>
        </WavyLink>  
      }
    </>
  )
}

export default Logo