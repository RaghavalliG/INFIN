import { useForm } from '@mantine/form';
import { NumberInput, TextInput, Button, Textarea  } from '@mantine/core';
import Image from 'next/image';
export default function Contact() {
    const form = useForm({
        initialValues: { name: '', email: '', message: '' },
    
        // functions will be used to validate values at corresponding key
        validate: {
          name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
          email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
          message: (value) => (value < 5 ? 'You must be at least 5' : null),
        },
      });
    return <div className="home-contact">
        <div className="container">
            <div className="contact-info row">
                <div className="col-lg-6">
                    <h2 className="secondary-title">Stay connected with us</h2>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                </div>
                <div className="col-lg-3">
                    <div className="card icon-card flex-row">
                        <div className="icon"><svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M77.0938 0.53125C74.5144 0.532936 71.9644 1.07943 69.6109 2.13494C67.2574 3.19045 65.1533 4.73119 63.4365 6.65625H14.3125C13.9064 6.65625 13.5169 6.81758 13.2297 7.10474C12.9426 7.39191 12.7812 7.78139 12.7812 8.1875V34.2708L0.943156 46.9557C0.678601 47.2391 0.531396 47.6123 0.53125 48V93.9375C0.53125 94.3436 0.692578 94.7331 0.979743 95.0203C1.26691 95.3074 1.65639 95.4688 2.0625 95.4688H87.8125C88.2186 95.4688 88.6081 95.3074 88.8953 95.0203C89.1824 94.7331 89.3438 94.3436 89.3438 93.9375V48C89.3436 47.6123 89.1964 47.2391 88.9318 46.9557L79.7091 37.073C84.3059 36.4123 88.4817 34.0345 91.3956 30.4185C94.3096 26.8024 95.7453 22.2167 95.4138 17.5845C95.0823 12.9523 93.0081 8.61779 89.6088 5.4536C86.2096 2.28941 81.7378 0.530586 77.0938 0.53125ZM61.2055 9.71875C59.9982 11.7782 59.211 14.0564 58.8893 16.4218C58.5676 18.7872 58.7178 21.193 59.3313 23.5H21.9688V26.5625H60.4031C60.8992 27.6386 61.4981 28.6642 62.1916 29.625H21.9688V32.6875H64.98C67.5359 34.9417 70.6709 36.4368 74.0312 37.0041V56.1861L56.0329 69.3548L45.8272 62.0645C45.5675 61.8792 45.2565 61.7796 44.9375 61.7796C44.6185 61.7796 44.3075 61.8792 44.0478 62.0645L33.8421 69.3548L15.8438 56.1861V9.71875H61.2055ZM31.2175 71.2306L3.59375 90.9623V51.0181L31.2175 71.2306ZM44.9375 65.1944L83.0335 92.4062H6.84153L44.9375 65.1944ZM58.6575 71.2306L86.2812 51.0181V90.9623L58.6575 71.2306ZM77.0938 53.9458V38.7604L85.5156 47.7826L77.0938 53.9458ZM12.7812 53.9458L4.35938 47.7826L12.7812 38.7604V53.9458ZM77.0938 34.2188C74.0652 34.2188 71.1047 33.3207 68.5866 31.6381C66.0685 29.9556 64.1058 27.5641 62.9468 24.7661C61.7879 21.9681 61.4846 18.8893 62.0755 15.9189C62.6663 12.9486 64.1247 10.2202 66.2662 8.07868C68.4077 5.93719 71.1361 4.47881 74.1064 3.88798C77.0768 3.29714 80.1556 3.60038 82.9536 4.75935C85.7516 5.91831 88.1431 7.88095 89.8256 10.3991C91.5082 12.9172 92.4062 15.8777 92.4062 18.9062C92.4018 22.966 90.7871 26.8582 87.9164 29.7289C85.0457 32.5996 81.1535 34.2143 77.0938 34.2188Z" fill="#47B6F4"/>
</svg>
</div>
                        <div className="info">
                            <h3 className="card-title">Email address</h3>
                            <p className="card-text text-truncate">support.demo.freshdesk.com</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                <div className="card icon-card flex-row">
                        <div className="icon"><svg width="88" height="96" viewBox="0 0 88 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M69.2416 68.1868L60.3298 65.2168L57.1304 58.818C60.0127 55.8844 62.0139 52.0028 62.6887 47.9541L63.0877 45.5625H66.5C69.6016 45.5625 72.125 43.0391 72.125 39.9375V28.125C72.125 12.6169 59.5081 0 44 0C28.4521 0 15.875 12.5807 15.875 28.125V39.9375C15.875 42.3817 17.4427 44.466 19.625 45.24V47.4375C19.625 50.5391 22.1484 53.0625 25.25 53.0625H26.8966C27.7071 54.8277 28.7662 56.4677 30.0417 57.9326C30.3078 58.2374 30.5833 58.5339 30.8679 58.8216L27.6702 65.2168L18.7582 68.187C8.396 71.6423 0.875 82.5508 0.875 94.125C0.875 95.1606 1.71444 96 2.75 96H85.25C86.2854 96 87.125 95.1606 87.125 94.125C87.125 82.5508 79.6042 71.6423 69.2416 68.1868ZM68.375 39.9375C68.375 40.9714 67.5339 41.8125 66.5 41.8125H63.6384C64.115 38.1206 64.4326 34.1919 64.5603 30.3225C64.5641 30.2134 64.5671 30.1073 64.5704 30H68.375V39.9375ZM21.5 41.8125C20.4661 41.8125 19.625 40.9714 19.625 39.9375V30H23.4309C23.4371 30.1956 23.4436 30.3921 23.4509 30.5899L23.4517 30.6099V30.6116C23.5829 34.3751 23.8964 38.2018 24.3622 41.8123H21.5V41.8125ZM25.25 49.3125C24.2161 49.3125 23.375 48.4714 23.375 47.4375V45.5625H24.9121L25.3111 47.9548C25.3879 48.4105 25.4806 48.8633 25.589 49.3125H25.25ZM23.3782 26.25H19.6962C20.6459 13.6836 31.1332 3.75 44 3.75C56.8096 3.75 67.343 13.6823 68.3036 26.25H64.622C64.487 15.8949 56.0546 7.5 45.6783 7.5H42.3221C31.946 7.5 23.513 15.8949 23.3782 26.25ZM42.3219 11.25H45.6781C54.0798 11.25 60.8799 18.1221 60.875 26.5144C60.875 27.1044 60.8703 27.6182 60.8604 28.0856L60.8602 28.104L58.5149 27.7689C52.1437 26.8592 46.1279 23.8513 41.5758 19.2992C41.2242 18.9476 40.7473 18.7501 40.25 18.75C35.2145 18.75 30.3943 21.0443 27.2079 24.9202C27.9931 17.2854 34.4474 11.25 42.3219 11.25ZM29.4762 49.3125C28.5376 46.1901 27.4636 37.0026 27.2262 31.1151L29.7498 27.7502C32.0675 24.6609 35.6733 22.7415 39.509 22.5212C44.5559 27.3242 51.0851 30.4959 57.9847 31.4811L60.7451 31.8756C60.5606 35.7915 60.1835 39.7211 59.6433 43.3352L59.6428 43.3389C59.471 44.5009 59.3356 45.2486 58.9899 47.3372C57.9969 53.2931 53.5527 58.6791 47.6861 60.1459C45.266 60.7486 42.735 60.7486 40.3149 60.1459C36.6517 59.2301 33.2928 56.6955 31.1251 53.0625H34.9475C35.7215 55.2448 37.8056 56.8125 40.25 56.8125H44C47.1078 56.8125 49.625 54.2955 49.625 51.1875C49.625 48.0859 47.1016 45.5625 44 45.5625H40.25C37.7512 45.5625 35.6979 47.1765 34.9443 49.3125H29.4762ZM40.0923 63.9405C41.3772 64.2119 42.6868 64.3491 44 64.35C45.0258 64.35 46.0518 64.2641 47.0662 64.0976L43.7531 67.6014L40.0923 63.9405ZM41.1753 70.3273L35.2282 76.6164C33.5897 73.4801 32.1866 70.2263 31.0303 66.882L33.2636 62.4154L41.1753 70.3273ZM54.4186 61.7801L56.9694 66.8818C55.8131 70.2272 54.4097 73.482 52.7709 76.6192L46.4056 70.254L54.4186 61.7801ZM38.375 51.1875C38.375 50.1523 39.2146 49.3125 40.25 49.3125H44C45.0339 49.3125 45.875 50.1536 45.875 51.1875C45.875 52.2229 45.0352 53.0625 44 53.0625H40.25C39.2161 53.0625 38.375 52.2214 38.375 51.1875ZM4.7 92.25C5.44306 82.9614 11.6248 74.5187 19.9441 71.7444L27.8368 69.1142C29.2847 73.1171 31.07 76.9898 33.1736 80.6904L33.1841 80.7094L33.1842 80.7097C34.7304 83.4263 36.4445 86.0439 38.3165 88.5471L40.6231 92.25H4.7ZM44 90.5786L41.4571 86.4962C41.4287 86.4505 41.3983 86.406 41.366 86.3629C39.8469 84.3353 38.4367 82.2285 37.1413 80.0513L43.8281 72.9799L50.8739 80.0257C49.5746 82.212 48.1594 84.3272 46.6344 86.3625C46.5425 86.4849 46.6728 86.292 44 90.5786ZM47.3769 92.25L49.6833 88.5473C51.5699 86.0249 53.2961 83.3865 54.8516 80.6475C54.8609 80.631 54.8698 80.6141 54.8791 80.5976L54.8825 80.5916C56.962 76.9209 58.7285 73.0815 60.1633 69.1142L68.0557 71.7444C76.3753 74.5187 82.5569 82.9614 83.3 92.25H47.3769Z" fill="#47B6F4"/>
</svg>
</div>
                        <div className="info">
                            <h3 className="card-title">Contact</h3>
                            <p className="card-text">80789 75000</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row home-contact-form-wrap mt-5">
                <div className="col-lg-6"><Image src="/contact-img.png" alt="" className='img-fluid' width={805} height={633} /></div>
                <div className="col-lg-6">
                    {/* onSubmit funciton */}
                <form onSubmit={form.onSubmit(console.log)}>
      <TextInput placeholder="Name" {...form.getInputProps('name')} />
      <TextInput mt="sm"  placeholder="Email" {...form.getInputProps('email')} />
      <Textarea mt="sm"
      placeholder="Message"
      withAsterisk
      {...form.getInputProps('message')}
    />
      <Button type="submit" mt="sm">
        Submit
      </Button>
    </form>
                </div>
            </div>
        </div>
    </div>
  }