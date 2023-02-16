import { professionalAdminFrofileDetails } from "store/actions/professionalAdminAction";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';


export default function Dashboard() {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(professionalAdminFrofileDetails());
    })
    const result = useSelector((state) => state.professionalAdminReducer.professionalAdminData)
    console.log(result,"=====");

    return <div className="dashboard-wrap">
        <div className="container dashboard-container">
        <div className="sidebar">
            <div className="brand">
                <img src="logo.png" alt="" className="" width="200" />
            </div>
            <div className="sidebar-menus-card">
                <ul>
                    <li><a href=""><span className="icon"><svg width="27" height="35" viewBox="0 0 27 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5 17.5C15.2306 17.5 16.9223 16.9868 18.3612 16.0254C19.8002 15.0639 20.9217 13.6973 21.5839 12.0985C22.2462 10.4996 22.4195 8.7403 22.0819 7.04296C21.7443 5.34563 20.9109 3.78653 19.6872 2.56282C18.4635 1.33911 16.9044 0.505753 15.207 0.168133C13.5097 -0.169488 11.7504 0.00379125 10.1515 0.666058C8.55267 1.32832 7.1861 2.44983 6.22464 3.88876C5.26318 5.32769 4.75 7.01942 4.75 8.75C4.75232 11.0699 5.67493 13.2942 7.31537 14.9346C8.95582 16.5751 11.1801 17.4977 13.5 17.5ZM13.5 2.91667C14.6537 2.91667 15.7815 3.25879 16.7408 3.89976C17.7001 4.54074 18.4478 5.45178 18.8893 6.51768C19.3308 7.58359 19.4463 8.75648 19.2212 9.88803C18.9962 11.0196 18.4406 12.059 17.6248 12.8748C16.809 13.6906 15.7696 14.2462 14.638 14.4713C13.5065 14.6963 12.3336 14.5808 11.2677 14.1393C10.2018 13.6978 9.29074 12.9501 8.64976 11.9908C8.00879 11.0315 7.66667 9.90373 7.66667 8.75C7.66667 7.20291 8.28125 5.71918 9.37521 4.62521C10.4692 3.53125 11.9529 2.91667 13.5 2.91667ZM13.5 20.4167C10.0202 20.4205 6.68407 21.8046 4.22349 24.2652C1.76291 26.7257 0.37886 30.0619 0.375 33.5417C0.375 33.9284 0.528645 34.2994 0.802136 34.5729C1.07563 34.8464 1.44656 35 1.83333 35C2.22011 35 2.59104 34.8464 2.86453 34.5729C3.13802 34.2994 3.29167 33.9284 3.29167 33.5417C3.29167 30.8343 4.36718 28.2377 6.28162 26.3233C8.19605 24.4089 10.7926 23.3333 13.5 23.3333C16.2074 23.3333 18.8039 24.4089 20.7184 26.3233C22.6328 28.2377 23.7083 30.8343 23.7083 33.5417C23.7083 33.9284 23.862 34.2994 24.1355 34.5729C24.409 34.8464 24.7799 35 25.1667 35C25.5534 35 25.9244 34.8464 26.1979 34.5729C26.4714 34.2994 26.625 33.9284 26.625 33.5417C26.6211 30.0619 25.2371 26.7257 22.7765 24.2652C20.3159 21.8046 16.9798 20.4205 13.5 20.4167Z" fill="currentColor"/>
</svg>
</span>Profile</a></li>
                    <li><a href=""><span className="icon"><svg width="35" height="32" viewBox="0 0 35 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.5211 0.795898C23.8789 0.821441 22.2726 1.27985 20.8643 2.12484C19.4559 2.96982 18.2955 4.17146 17.5002 5.6084C16.7049 4.17146 15.5445 2.96982 14.1362 2.12484C12.7279 1.27985 11.1215 0.821441 9.47939 0.795898C6.8616 0.909635 4.39521 2.05481 2.61907 3.98124C0.842936 5.90766 -0.0985789 8.45875 0.000224004 11.0771C0.000224004 17.7082 6.97981 24.9503 12.8336 29.8605C14.1405 30.9588 15.793 31.5609 17.5002 31.5609C19.2074 31.5609 20.8599 30.9588 22.1669 29.8605C28.0206 24.9503 35.0002 17.7082 35.0002 11.0771C35.099 8.45875 34.1575 5.90766 32.3814 3.98124C30.6052 2.05481 28.1389 0.909635 25.5211 0.795898ZM20.2929 27.6292C19.5112 28.2875 18.5222 28.6485 17.5002 28.6485C16.4783 28.6485 15.4892 28.2875 14.7075 27.6292C7.2146 21.3424 2.91689 15.3107 2.91689 11.0771C2.8172 9.23194 3.45117 7.42217 4.68055 6.04254C5.90992 4.66292 7.63494 3.82537 9.47939 3.71257C11.3238 3.82537 13.0489 4.66292 14.2782 6.04254C15.5076 7.42217 16.1416 9.23194 16.0419 11.0771C16.0419 11.4639 16.1955 11.8349 16.469 12.1083C16.7425 12.3818 17.1134 12.5355 17.5002 12.5355C17.887 12.5355 18.2579 12.3818 18.5314 12.1083C18.8049 11.8349 18.9586 11.4639 18.9586 11.0771C18.8589 9.23194 19.4928 7.42217 20.7222 6.04254C21.9516 4.66292 23.6766 3.82537 25.5211 3.71257C27.3655 3.82537 29.0905 4.66292 30.3199 6.04254C31.5493 7.42217 32.1832 9.23194 32.0836 11.0771C32.0836 15.3107 27.7858 21.3424 20.2929 27.6234V27.6292Z" fill="currentColor"/>
</svg>
</span>Favorites</a></li>
                    <li><a href=""><span className="icon"><svg width="33" height="35" viewBox="0 0 33 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.8925 19.9234L29.1217 9.95421C28.3095 7.03366 26.5444 4.46838 24.107 2.66615C21.6695 0.863915 18.6996 -0.0718482 15.6692 0.00760194C12.6389 0.0870521 9.72206 1.17716 7.38238 3.10464C5.04271 5.03212 3.41446 7.68636 2.75646 10.6455L0.611249 20.2923C0.374292 21.3583 0.379771 22.4638 0.62728 23.5274C0.874789 24.5909 1.35801 25.5853 2.04126 26.4371C2.72452 27.2889 3.59036 27.9764 4.57487 28.4487C5.55938 28.9211 6.63741 29.1663 7.72937 29.1663H9.35396C9.68867 30.8146 10.5829 32.2966 11.8852 33.361C13.1876 34.4255 14.8178 35.0069 16.4998 35.0069C18.1818 35.0069 19.812 34.4255 21.1143 33.361C22.4166 32.2966 23.3109 30.8146 23.6456 29.1663H24.8677C25.9918 29.1664 27.1007 28.9066 28.1078 28.4071C29.1148 27.9077 29.9928 27.1822 30.6731 26.2873C31.3533 25.3925 31.8175 24.3524 32.0293 23.2484C32.2411 22.1445 32.1933 21.0065 31.8925 19.9234ZM16.4998 32.083C15.5982 32.0792 14.7197 31.797 13.9846 31.2749C13.2495 30.7528 12.6937 30.0164 12.3931 29.1663H20.6065C20.3059 30.0164 19.7501 30.7528 19.015 31.2749C18.2799 31.797 17.4014 32.0792 16.4998 32.083ZM28.3502 24.5215C27.9438 25.0606 27.4173 25.4975 26.8126 25.7975C26.2078 26.0975 25.5413 26.2523 24.8662 26.2496H7.72937C7.07427 26.2495 6.42755 26.1023 5.83695 25.8188C5.24636 25.5353 4.72697 25.1228 4.31711 24.6118C3.90725 24.1007 3.6174 23.5041 3.46894 22.8661C3.32049 22.228 3.31722 21.5648 3.45937 20.9253L5.60312 11.2769C6.11989 8.95264 7.39878 6.8678 9.2365 5.35383C11.0742 3.83985 13.3653 2.98363 15.7455 2.92128C18.1257 2.85892 20.4585 3.59401 22.3729 5.00969C24.2874 6.42537 25.6737 8.44039 26.3115 10.7344L29.0823 20.7036C29.2654 21.3531 29.2945 22.0363 29.1675 22.6991C29.0404 23.3618 28.7606 23.9858 28.3502 24.5215Z" fill="currentColor"/>
</svg>

</span>Notification</a></li>
                    <li><a href=""><span className="icon"><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M34.761 12.8249C34.4627 11.8753 33.8667 11.047 33.0612 10.4624C32.2557 9.8778 31.2835 9.56792 30.2883 9.57861H23.9168L21.9816 3.54695C21.6773 2.59751 21.0793 1.76926 20.2739 1.18162C19.4684 0.593991 18.4972 0.277344 17.5002 0.277344C16.5031 0.277344 15.5319 0.593991 14.7265 1.18162C13.921 1.76926 13.323 2.59751 13.0187 3.54695L11.0835 9.57861H4.71203C3.71999 9.58003 2.75377 9.8949 1.95138 10.4783C1.14899 11.0616 0.551469 11.8836 0.24417 12.8269C-0.0631294 13.7701 -0.0644896 14.7864 0.240283 15.7304C0.545056 16.6745 1.14037 17.4981 1.9412 18.0836L7.12703 21.8753L5.15537 27.9813C4.83674 28.9283 4.8327 29.953 5.14386 30.9025C5.45502 31.852 6.06471 32.6755 6.88203 33.2503C7.68536 33.8435 8.65886 34.1613 9.65747 34.1563C10.6561 34.1513 11.6263 33.8238 12.4237 33.2226L17.5002 29.4863L22.5781 33.2182C23.3799 33.808 24.3482 34.1284 25.3436 34.1332C26.339 34.1381 27.3104 33.8272 28.1179 33.2452C28.9255 32.6632 29.5278 31.8401 29.8381 30.8943C30.1484 29.9485 30.1508 28.9286 29.8449 27.9813L27.8733 21.8753L33.0649 18.0836C33.8749 17.5055 34.4772 16.6819 34.7827 15.7347C35.0882 14.7876 35.0805 13.7673 34.761 12.8249ZM31.3441 15.7284L25.3008 20.1457C25.0526 20.3268 24.8679 20.5816 24.7731 20.8739C24.6783 21.1662 24.6782 21.4809 24.7729 21.7732L27.0697 28.8753C27.186 29.2355 27.185 29.6233 27.0669 29.9829C26.9488 30.3425 26.7198 30.6554 26.4127 30.8767C26.1055 31.0979 25.7362 31.216 25.3577 31.2141C24.9792 31.2122 24.611 31.0903 24.3062 30.8659L18.3635 26.4909C18.1132 26.307 17.8107 26.2079 17.5002 26.2079C17.1896 26.2079 16.8871 26.307 16.6368 26.4909L10.6941 30.8659C10.3894 31.0933 10.0203 31.2177 9.64013 31.2212C9.25998 31.2246 8.88861 31.1069 8.57987 30.8851C8.27112 30.6633 8.04104 30.3489 7.92299 29.9875C7.80493 29.6262 7.80504 29.2366 7.92328 28.8753L10.2275 21.7732C10.3221 21.4809 10.3221 21.1662 10.2272 20.8739C10.1324 20.5816 9.94776 20.3268 9.69953 20.1457L3.6562 15.7284C3.35185 15.5056 3.12571 15.1922 3.01007 14.8332C2.89444 14.4742 2.89523 14.0877 3.01232 13.7292C3.12942 13.3706 3.35684 13.0582 3.66209 12.8366C3.96735 12.615 4.33483 12.4955 4.71203 12.4953H12.1495C12.4583 12.4953 12.7591 12.3973 13.0086 12.2154C13.2581 12.0335 13.4434 11.7771 13.5379 11.4832L15.7983 4.43799C15.9143 4.07747 16.1417 3.76306 16.4478 3.54002C16.7539 3.31698 17.1229 3.19681 17.5016 3.19681C17.8803 3.19681 18.2493 3.31698 18.5554 3.54002C18.8615 3.76306 19.0889 4.07747 19.2049 4.43799L21.4654 11.4832C21.5598 11.7771 21.7452 12.0335 21.9947 12.2154C22.2442 12.3973 22.5449 12.4953 22.8537 12.4953H30.2912C30.6684 12.4955 31.0359 12.615 31.3411 12.8366C31.6464 13.0582 31.8738 13.3706 31.9909 13.7292C32.108 14.0877 32.1088 14.4742 31.9932 14.8332C31.8775 15.1922 31.6514 15.5056 31.347 15.7284H31.3441Z" fill="currentColor"/>
</svg>
</span>Watchlist</a></li>
                    <li><a href=""><span className="icon"><svg width="33" height="35" viewBox="0 0 33 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.4998 11.667C15.3461 11.667 14.2183 12.0091 13.259 12.6501C12.2997 13.2911 11.5521 14.2021 11.1105 15.268C10.669 16.3339 10.5535 17.5068 10.7786 18.6384C11.0037 19.7699 11.5592 20.8093 12.3751 21.6251C13.1909 22.4409 14.2303 22.9965 15.3618 23.2216C16.4934 23.4467 17.6663 23.3311 18.7322 22.8896C19.7981 22.4481 20.7091 21.7004 21.3501 20.7412C21.9911 19.7819 22.3332 18.654 22.3332 17.5003C22.3332 15.9532 21.7186 14.4695 20.6246 13.3755C19.5307 12.2816 18.0469 11.667 16.4998 11.667ZM16.4998 20.417C15.923 20.417 15.3591 20.2459 14.8794 19.9254C14.3998 19.605 14.0259 19.1494 13.8052 18.6165C13.5844 18.0835 13.5267 17.4971 13.6392 16.9313C13.7518 16.3655 14.0295 15.8458 14.4374 15.4379C14.8453 15.03 15.365 14.7522 15.9308 14.6397C16.4966 14.5272 17.083 14.5849 17.616 14.8057C18.149 15.0264 18.6045 15.4003 18.925 15.8799C19.2454 16.3596 19.4165 16.9235 19.4165 17.5003C19.4165 18.2739 19.1092 19.0157 18.5622 19.5627C18.0153 20.1097 17.2734 20.417 16.4998 20.417Z" fill="#A8A8A8"/>
<path d="M30.0538 20.2708L29.4063 19.8975C29.6978 18.3115 29.6978 16.6856 29.4063 15.0996L30.0538 14.7262C30.5517 14.439 30.9882 14.0565 31.3383 13.6005C31.6884 13.1446 31.9452 12.6241 32.0942 12.0689C32.2432 11.5137 32.2813 10.9346 32.2064 10.3646C32.1316 9.79465 31.9452 9.24501 31.6579 8.74708C31.3707 8.24916 30.9882 7.81268 30.5322 7.46259C30.0763 7.11249 29.5558 6.85563 29.0006 6.70667C28.4454 6.55771 27.8663 6.51957 27.2963 6.59442C26.7263 6.66927 26.1767 6.85565 25.6788 7.14292L25.0298 7.51771C23.8041 6.47051 22.3956 5.6587 20.875 5.12313V4.375C20.875 3.21468 20.4141 2.10188 19.5936 1.28141C18.7732 0.460936 17.6604 0 16.5 0C15.3397 0 14.2269 0.460936 13.4064 1.28141C12.586 2.10188 12.125 3.21468 12.125 4.375V5.12313C10.6046 5.66062 9.19648 6.47442 7.9717 7.52354L7.31982 7.14583C6.31421 6.56567 5.11932 6.40875 3.99801 6.70959C2.8767 7.01043 1.92082 7.74439 1.34066 8.75C0.760496 9.75561 0.603575 10.9505 0.904414 12.0718C1.20525 13.1931 1.93921 14.149 2.94482 14.7292L3.59232 15.1025C3.30082 16.6885 3.30082 18.3144 3.59232 19.9004L2.94482 20.2738C1.93921 20.8539 1.20525 21.8098 0.904414 22.9311C0.603575 24.0524 0.760496 25.2473 1.34066 26.2529C1.92082 27.2585 2.8767 27.9925 3.99801 28.2933C5.11932 28.5942 6.31421 28.4372 7.31982 27.8571L7.96878 27.4823C9.1949 28.5296 10.604 29.3415 12.125 29.8769V30.625C12.125 31.7853 12.586 32.8981 13.4064 33.7186C14.2269 34.5391 15.3397 35 16.5 35C17.6604 35 18.7732 34.5391 19.5936 33.7186C20.4141 32.8981 20.875 31.7853 20.875 30.625V29.8769C22.3955 29.3394 23.8036 28.5256 25.0284 27.4765L25.6802 27.8527C26.6859 28.4329 27.8807 28.5898 29.0021 28.289C30.1234 27.9881 31.0792 27.2542 31.6594 26.2485C32.2396 25.2429 32.3965 24.048 32.0956 22.9267C31.7948 21.8054 31.0609 20.8495 30.0552 20.2694L30.0538 20.2708ZM26.3379 14.7642C26.8318 16.5536 26.8318 18.4434 26.3379 20.2329C26.2517 20.5444 26.2714 20.8757 26.3939 21.1747C26.5163 21.4738 26.7347 21.7237 27.0146 21.8852L28.5954 22.7981C28.9306 22.9915 29.1752 23.3101 29.2754 23.6838C29.3756 24.0576 29.3233 24.4558 29.1299 24.7909C28.9365 25.1261 28.6179 25.3707 28.2442 25.4709C27.8705 25.5711 27.4723 25.5188 27.1371 25.3254L25.5534 24.4096C25.2732 24.2473 24.947 24.1829 24.6262 24.2265C24.3054 24.27 24.0082 24.4191 23.7815 24.6502C22.4834 25.9753 20.8482 26.9208 19.0521 27.3846C18.7386 27.4652 18.4609 27.6478 18.2626 27.9036C18.0643 28.1595 17.9567 28.474 17.9569 28.7977V30.625C17.9569 31.0118 17.8033 31.3827 17.5298 31.6562C17.2563 31.9297 16.8853 32.0833 16.4986 32.0833C16.1118 32.0833 15.7409 31.9297 15.4674 31.6562C15.1939 31.3827 15.0402 31.0118 15.0402 30.625V28.7992C15.0404 28.4755 14.9329 28.1609 14.7346 27.9051C14.5363 27.6492 14.2585 27.4666 13.945 27.386C12.1489 26.9204 10.5141 25.9729 9.21712 24.6458C8.99038 24.4147 8.69319 24.2657 8.37238 24.2221C8.05158 24.1785 7.72539 24.2429 7.44524 24.4052L5.86441 25.3196C5.69849 25.4169 5.51497 25.4803 5.32442 25.5064C5.13387 25.5324 4.94005 25.5206 4.75411 25.4714C4.56817 25.4222 4.3938 25.3368 4.24102 25.22C4.08824 25.1031 3.96008 24.9572 3.86392 24.7907C3.76775 24.6241 3.70548 24.4402 3.68069 24.2495C3.6559 24.0588 3.66908 23.865 3.71948 23.6794C3.76987 23.4938 3.85647 23.32 3.97431 23.168C4.09214 23.016 4.23888 22.8888 4.40607 22.7938L5.98691 21.8808C6.26683 21.7193 6.48518 21.4694 6.60766 21.1703C6.73014 20.8713 6.74981 20.54 6.66357 20.2285C6.16972 18.4391 6.16972 16.5493 6.66357 14.7598C6.74825 14.449 6.72765 14.1189 6.60497 13.8211C6.48229 13.5232 6.26445 13.2743 5.98545 13.1133L4.40462 12.2004C4.06948 12.007 3.82488 11.6884 3.72465 11.3147C3.62442 10.941 3.67675 10.5427 3.87014 10.2076C4.06352 9.87246 4.38212 9.62787 4.75585 9.52764C5.12957 9.42741 5.52781 9.47974 5.86295 9.67313L7.4467 10.589C7.72608 10.7516 8.05159 10.8168 8.37205 10.7743C8.69251 10.7318 8.98977 10.584 9.21712 10.3542C10.5152 9.02904 12.1504 8.08357 13.9465 7.61979C14.261 7.53895 14.5394 7.35547 14.7378 7.09844C14.9362 6.84141 15.0432 6.52552 15.0417 6.20083V4.375C15.0417 3.98823 15.1953 3.61729 15.4688 3.3438C15.7423 3.07031 16.1133 2.91667 16.5 2.91667C16.8868 2.91667 17.2577 3.07031 17.5312 3.3438C17.8047 3.61729 17.9584 3.98823 17.9584 4.375V6.20083C17.9582 6.52452 18.0657 6.83906 18.264 7.09491C18.4623 7.35075 18.7401 7.53336 19.0536 7.61396C20.8503 8.07939 22.4856 9.02691 23.7829 10.3542C24.0097 10.5853 24.3069 10.7343 24.6277 10.7779C24.9485 10.8215 25.2747 10.7571 25.5548 10.5948L27.1357 9.68042C27.3016 9.58315 27.4851 9.51966 27.6756 9.49361C27.8662 9.46755 28.06 9.47945 28.246 9.52861C28.4319 9.57776 28.6063 9.66322 28.759 9.78004C28.9118 9.89687 29.04 10.0428 29.1361 10.2093C29.2323 10.3759 29.2946 10.5598 29.3194 10.7505C29.3442 10.9412 29.331 11.135 29.2806 11.3206C29.2302 11.5062 29.1436 11.68 29.0258 11.832C28.9079 11.984 28.7612 12.1112 28.594 12.2063L27.0132 13.1192C26.7347 13.2806 26.5174 13.5297 26.3953 13.8275C26.2732 14.1253 26.253 14.4551 26.3379 14.7656V14.7642Z" fill="#A8A8A8"/>
</svg>


</span>Settings</a></li>
                </ul>
            </div>
            <div className="sidebar-footer">
                <ul className="sidebar-footer-menu">
                    <li><a href=""><span className="icon"><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M33.3475 14.4066L26.6596 7.71865C26.5251 7.57936 26.3642 7.46826 26.1863 7.39184C26.0083 7.31541 25.817 7.27518 25.6233 7.27349C25.4297 7.27181 25.2377 7.30871 25.0584 7.38203C24.8792 7.45536 24.7164 7.56365 24.5795 7.70057C24.4425 7.8375 24.3343 8.00033 24.2609 8.17955C24.1876 8.35877 24.1507 8.55081 24.1524 8.74444C24.1541 8.93808 24.1943 9.12944 24.2707 9.30736C24.3472 9.48529 24.4583 9.64621 24.5975 9.78073L30.813 15.9976L8.74984 16.0414C8.36306 16.0414 7.99213 16.195 7.71864 16.4685C7.44515 16.742 7.2915 17.1129 7.2915 17.4997C7.2915 17.8865 7.44515 18.2574 7.71864 18.5309C7.99213 18.8044 8.36306 18.958 8.74984 18.958L30.899 18.9128L24.5946 25.2186C24.4553 25.3532 24.3442 25.5141 24.2678 25.692C24.1914 25.8699 24.1512 26.0613 24.1495 26.2549C24.1478 26.4486 24.1847 26.6406 24.258 26.8198C24.3313 26.9991 24.4396 27.1619 24.5766 27.2988C24.7135 27.4357 24.8763 27.544 25.0555 27.6173C25.2348 27.6907 25.4268 27.7276 25.6204 27.7259C25.8141 27.7242 26.0054 27.684 26.1833 27.6075C26.3613 27.5311 26.5222 27.42 26.6567 27.2807L33.3446 20.5928C34.1652 19.7728 34.6265 18.6604 34.627 17.5003C34.6276 16.3402 34.1673 15.2274 33.3475 14.4066Z" fill="currentColor"/>
</svg>
</span>Logout</a></li>
                </ul>
            </div>
        </div>
        <div className="dashboard-content-area">
            <div className="block-content-box bg-primary profile-info-card">
                <div className="avatar"></div>
                <div className="info">
                    <h2 className="card-title">Rahul Chaudhri</h2>
                    <p className="card-text">CEO</p>
                </div>
            </div>
            <div className="block-content-box profile-info-details-card">
                <div className="key-val-items">
                <div className="item"><span className="key">Contact Number:</span><span className="val">1234 5678 910</span></div>
                <div className="item"><span className="key">Email address: :</span><span className="val">demomail@gmail.com</span></div>
                <div className="item"><span className="key">Membership number:</span><span className="val">ABC123456 ASC</span></div>
                <div className="item"><span className="key">Contact address: </span><span className="val">Ap285-7193 Ullamcorper Avenue
                                  Amesbury HI 93373</span></div>
                                  </div>
                                  <div className="action">
                                    <a href="" className="btn btn-primary-light">Back to Home</a>
                                  </div>
            </div>
        </div>
        </div>
    </div>
  }