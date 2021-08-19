import { Dialog } from '@headlessui/react';
import React, { ReactNode } from 'react';
import ShareModalSkeleton, { ShareModalSkeletonProps } from './Skeleton';
import copy from 'copy-to-clipboard';
import toast from 'react-hot-toast';
import tw, { css } from 'twin.macro';
import ShareIcon from './ShareIcon';
import { ShareModalSizeMap } from './styles';

export type ShareModalSize = 'md' | 'lg';

interface BaseShareModalProps {
    // ShareModal size (for desktop)
    size?: ShareModalSize;

    // URL share target e.g. 'compfest.id/competition'
    target: string;

    // Social medias to share
    socials?: Array<{
        svg: ReactNode;
        url: string;
    }>;

    // Other props in Skeleton.tsx
}

export type ShareModalProps = BaseShareModalProps & ShareModalSkeletonProps;

const ShareModal: React.FC<ShareModalProps> = (props) => {
    const {
        size = 'md',
        target,
        socials = [
            {
                svg: (
                    <svg viewBox="0 0 101 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.75 50.0001C0.75 22.3859 23.1358 0.00012207 50.75 0.00012207C78.3642 0.00012207 100.75 22.3859 100.75 50.0001C100.75 77.6144 78.3642 100 50.75 100C23.1358 100 0.75 77.6144 0.75 50.0001Z"
                            fill="#00B900"
                        />
                        <path
                            d="M51.583 23.3334C34.583 23.3334 20.75 34.4771 20.75 48.1745C20.75 60.4543 31.7192 70.7382 46.5364 72.6829C47.5407 72.8977 48.9072 73.3402 49.253 74.1922C49.5639 74.9662 49.4563 76.1786 49.3523 76.9603C49.3523 76.9603 48.9906 79.1203 48.9125 79.5804C48.7784 80.3544 48.2931 82.6072 51.583 81.2305C54.8742 79.8538 69.3402 70.8503 75.809 63.4582C80.2764 58.5935 82.4167 53.6566 82.4167 48.1745C82.4167 34.4771 68.5854 23.3334 51.583 23.3334Z"
                            fill="white"
                        />
                        <path
                            d="M43.0123 41.6668C42.6838 41.6668 42.4167 41.9424 42.4167 42.2811V56.0524C42.4167 56.3917 42.6838 56.6668 43.0123 56.6668H45.1551C45.4836 56.6668 45.7501 56.3917 45.7501 56.0524V42.2811C45.7501 41.9424 45.4836 41.6668 45.1551 41.6668H43.0123Z"
                            fill="#00B900"
                        />
                        <path
                            d="M60.1235 41.6668H57.8678C57.5219 41.6668 57.2414 41.9424 57.2414 42.2811V50.4627L50.8201 41.94C50.8053 41.9182 50.7887 41.8976 50.7714 41.8776L50.7671 41.874C50.7548 41.86 50.7424 41.8479 50.7295 41.8358C50.7258 41.8322 50.7221 41.8292 50.7178 41.8255C50.7073 41.8158 50.6962 41.8067 50.6845 41.7983C50.6796 41.7934 50.674 41.7898 50.6685 41.7855C50.6574 41.7783 50.6469 41.7704 50.6358 41.7637C50.6296 41.7595 50.6235 41.7558 50.6167 41.7528C50.6056 41.7461 50.5945 41.7395 50.5834 41.734C50.5766 41.731 50.5704 41.7274 50.5637 41.7249C50.5519 41.7195 50.5402 41.714 50.5279 41.7098C50.5205 41.7074 50.5143 41.7049 50.5076 41.7025C50.4952 41.6983 50.4829 41.694 50.47 41.691C50.4632 41.6886 50.4558 41.6874 50.4484 41.685C50.436 41.6825 50.4243 41.6795 50.4126 41.6771C50.404 41.6759 50.3947 41.6747 50.3861 41.674C50.375 41.6716 50.3639 41.671 50.3528 41.6698C50.3423 41.6686 50.3319 41.6686 50.3208 41.668C50.3127 41.668 50.3066 41.6668 50.2986 41.6668H48.0435C47.6976 41.6668 47.4165 41.9424 47.4165 42.2811V56.0524C47.4165 56.3917 47.6976 56.6668 48.0435 56.6668H50.2986C50.645 56.6668 50.9255 56.3917 50.9255 56.0524V47.8733L57.3549 56.4069C57.3992 56.4687 57.4541 56.519 57.5139 56.5589C57.5158 56.5602 57.5182 56.562 57.5201 56.5638C57.533 56.5717 57.546 56.5795 57.5589 56.5868C57.5651 56.5904 57.5706 56.5929 57.5768 56.5959C57.586 56.6013 57.5965 56.6062 57.6064 56.6104C57.6169 56.6147 57.6261 56.6189 57.6372 56.6232C57.6434 56.6256 57.6495 56.628 57.6557 56.6298C57.6705 56.6353 57.6841 56.6395 57.6982 56.6438C57.7013 56.6438 57.7044 56.645 57.7075 56.6456C57.7587 56.6589 57.8123 56.6668 57.8678 56.6668H60.1235C60.47 56.6668 60.7498 56.3917 60.7498 56.0524V42.2811C60.7498 41.9424 60.47 41.6668 60.1235 41.6668Z"
                            fill="#00B900"
                        />
                        <path
                            d="M40.1409 53.2183H34.1686V42.2823C34.1686 41.9424 33.8953 41.6668 33.5589 41.6668H31.3603C31.0233 41.6668 30.75 41.9424 30.75 42.2823V56.0506V56.0519C30.75 56.2172 30.8155 56.3669 30.9206 56.4772C30.923 56.4802 30.9254 56.4832 30.929 56.4862C30.932 56.4893 30.935 56.4917 30.938 56.4947C31.048 56.6014 31.1957 56.6668 31.3597 56.6668H40.1409C40.4779 56.6668 40.75 56.3905 40.75 56.0506V53.8339C40.75 53.494 40.4779 53.2183 40.1409 53.2183Z"
                            fill="#00B900"
                        />
                        <path
                            d="M71.8076 45.1152C72.1446 45.1152 72.4168 44.8402 72.4168 44.4997V42.2829C72.4168 41.943 72.1446 41.6668 71.8076 41.6668H63.0271H63.0259C62.8613 41.6668 62.7129 41.7334 62.603 41.8407C62.6006 41.8431 62.5976 41.8449 62.5958 41.8473C62.5922 41.851 62.5892 41.8546 62.5861 41.8582C62.4816 41.9685 62.4167 42.1175 62.4167 42.2823V42.2829V56.0512V56.0519C62.4167 56.2172 62.4822 56.3669 62.5873 56.4772C62.5898 56.4802 62.5928 56.4838 62.5958 56.4862C62.5982 56.4893 62.6018 56.4923 62.6048 56.4947C62.7141 56.6007 62.8625 56.6668 63.0259 56.6668H71.8076C72.1446 56.6668 72.4168 56.3905 72.4168 56.0512V53.8339C72.4168 53.4946 72.1446 53.2183 71.8076 53.2183H65.836V50.8907H71.8076C72.1446 50.8907 72.4168 50.615 72.4168 50.2752V48.0584C72.4168 47.7185 72.1446 47.4423 71.8076 47.4423H65.836V45.1152H71.8076Z"
                            fill="#00B900"
                        />
                    </svg>
                ),
                url: 'https://social-plugins.line.me/lineit/share?url=',
            },
            {
                svg: (
                    <svg viewBox="0 0 101 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.75 50.0001C0.75 22.3859 23.1358 0.00012207 50.75 0.00012207C78.3642 0.00012207 100.75 22.3859 100.75 50.0001C100.75 77.6144 78.3642 100 50.75 100C23.1358 100 0.75 77.6144 0.75 50.0001Z"
                            fill="#55ACEE"
                        />
                        <path
                            d="M49.2525 40.6406L49.3574 42.3707L47.6087 42.1589C41.2435 41.3468 35.6826 38.5927 30.9611 33.9673L28.6528 31.6723L28.0583 33.3671C26.7992 37.1451 27.6036 41.1349 30.2267 43.8184C31.6256 45.3013 31.3109 45.5132 28.8977 44.6305C28.0583 44.348 27.3238 44.1362 27.2539 44.2421C27.0091 44.4892 27.8484 47.7023 28.5129 48.9734C29.4223 50.7388 31.2759 52.4689 33.3044 53.4929L35.0181 54.305L32.9896 54.3403C31.0311 54.3403 30.9611 54.3756 31.171 55.1171C31.8704 57.4121 34.6334 59.8484 37.7111 60.9077L39.8795 61.6491L37.9909 62.779C35.193 64.4032 31.9054 65.3212 28.6179 65.3918C27.044 65.4271 25.75 65.5684 25.75 65.6743C25.75 66.0274 30.0168 68.0047 32.5 68.7814C39.9494 71.0765 48.7978 70.0879 55.4429 66.1686C60.1644 63.3793 64.8859 57.8358 67.0892 52.4689C68.2783 49.609 69.4675 44.3833 69.4675 41.8764C69.4675 40.2522 69.5724 40.0404 71.5309 38.0984C72.6851 36.9685 73.7693 35.7328 73.9791 35.3797C74.3288 34.7088 74.2939 34.7088 72.5102 35.3091C69.5374 36.3683 69.1177 36.2271 70.5866 34.6382C71.6708 33.5083 72.9649 31.4604 72.9649 30.8602C72.9649 30.7543 72.4403 30.9308 71.8457 31.2486C71.2162 31.6017 69.8172 32.1313 68.768 32.4491L66.8794 33.0493L65.1657 31.8841C64.2214 31.2486 62.8924 30.5424 62.1929 30.3306C60.4092 29.8362 57.6812 29.9069 56.0724 30.4718C51.7007 32.0607 48.9377 36.1565 49.2525 40.6406Z"
                            fill="white"
                        />
                    </svg>
                ),
                url: 'https://twitter.com/intent/tweet?text=&url=',
            },
            {
                svg: (
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100Z"
                            fill="#25D366"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M51.648 77.8179H51.6357C46.6597 77.8162 41.7703 76.5677 37.4277 74.199L21.6666 78.3335L25.8845 62.9269C23.2827 58.4179 21.9136 53.3033 21.9158 48.0632C21.9223 31.6704 35.2599 18.3335 51.6477 18.3335C59.6012 18.3369 67.0662 21.4332 72.6795 27.0531C78.2928 32.6727 81.3825 40.1425 81.3794 48.0866C81.3728 64.4757 68.0405 77.8112 51.648 77.8179ZM38.1581 68.8165L39.0604 69.3521C42.8546 71.6036 47.2038 72.7949 51.6381 72.7967H51.6481C65.2684 72.7967 76.354 61.7108 76.3595 48.0849C76.362 41.4818 73.7941 35.2732 69.1285 30.6022C64.4629 25.9311 58.2583 23.3575 51.6578 23.3552C38.027 23.3552 26.9412 34.4399 26.9358 48.0648C26.9339 52.7342 28.2404 57.2816 30.7141 61.216L31.3016 62.151L28.8052 71.27L38.1581 68.8165ZM65.609 54.4879C66.1271 54.7383 66.477 54.9074 66.6264 55.1567C66.812 55.4665 66.812 56.9539 66.1933 58.6895C65.574 60.4248 62.6061 62.0085 61.1787 62.2217C59.8989 62.4131 58.2792 62.4929 56.4997 61.9274C55.4207 61.585 54.037 61.1279 52.2646 60.3625C45.3001 57.3553 40.5936 50.6052 39.7041 49.3295C39.6417 49.2401 39.5982 49.1776 39.5738 49.1451L39.5678 49.1371C39.1747 48.6126 36.5404 45.0978 36.5404 41.4602C36.5404 38.0382 38.2213 36.2446 38.9951 35.419C39.0481 35.3624 39.0968 35.3104 39.1405 35.2627C39.8214 34.519 40.6263 34.333 41.1215 34.333C41.6167 34.333 42.1125 34.3376 42.5453 34.3594C42.5988 34.362 42.6543 34.3617 42.7117 34.3614C43.1447 34.3588 43.6844 34.3557 44.2168 35.6346C44.4217 36.1268 44.7214 36.8565 45.0375 37.6262C45.6768 39.1824 46.383 40.9018 46.5073 41.1507C46.693 41.5225 46.8168 41.9562 46.5692 42.4522C46.532 42.5266 46.4977 42.5968 46.4648 42.6638C46.2788 43.0435 46.142 43.3228 45.8263 43.6914C45.7022 43.8363 45.5739 43.9926 45.4456 44.1488C45.1901 44.4601 44.9345 44.7713 44.712 44.993C44.3401 45.3634 43.9529 45.7653 44.3863 46.5091C44.8196 47.2528 46.3106 49.6855 48.519 51.6554C50.893 53.7729 52.9564 54.6679 54.0022 55.1216C54.2065 55.2102 54.3719 55.2819 54.4933 55.3427C55.2359 55.7146 55.6692 55.6524 56.1026 55.1567C56.536 54.661 57.9597 52.9874 58.4549 52.2438C58.95 51.5004 59.4455 51.6242 60.1263 51.872C60.8074 52.1202 64.4598 53.9171 65.2027 54.289C65.3477 54.3616 65.4833 54.4271 65.609 54.4879Z"
                            fill="#FDFDFD"
                        />
                    </svg>
                ),
                url: 'https://wa.me/?text=',
            },
        ],
        ...other
    } = props;

    const onCopy = () => {
        copy(target.toString());
        toast.success('Link berhasil disalin');
    };

    return (
        <ShareModalSkeleton {...other}>
            <Dialog.Title
                css={[
                    tw`px-8 pb-0 background[#FFF] md:(background[#f6f6f6])`,
                    css`
                        @media (max-width: 767px) {
                            width: 85vw;
                        }
                    `,
                ]}
            >
                <h1 css={[tw`font-bold text-2xl text-black-100 text-center`, ShareModalSizeMap[size].header]}>Share</h1>
            </Dialog.Title>
            <Dialog.Description css={[tw`w-full`, ShareModalSizeMap[size].width]}>
                <div css={[tw`px-8 pt-11 pb-5`, ShareModalSizeMap[size].description]}>
                    <div
                        css={[
                            tw`mb-6 flex justify-around w-full`,
                            ShareModalSizeMap[size].iconSize,
                            css`
                                @media (max-width: 767px) {
                                    & > a {
                                        width: 60px;
                                        height: 60px;
                                    }
                                }
                            `,
                        ]}
                    >
                        {socials.map((social, key) => (
                            <ShareIcon key={key} svg={social.svg} url={social.url} target={target} />
                        ))}
                    </div>

                    <div
                        css={[
                            tw`flex justify-center items-center  background[#e7e7e7] px-5 py-3 mb-4 rounded-lg md:(justify-between)`,
                            ShareModalSizeMap[size].urlPadding,
                        ]}
                    >
                        <h1 css={[tw`font-bold text-xs text-center md:(text-left)`, ShareModalSizeMap[size].text]}>
                            {target.toString()}
                        </h1>
                        {/* On desktop side by side */}
                        <div tw="flex hidden md:block">
                            <button
                                css={[tw`uppercase text-blue-500 font-bold`, ShareModalSizeMap[size].text]}
                                onClick={() => onCopy()}
                            >
                                Salin
                            </button>
                        </div>
                    </div>
                    {/* On mobile separated */}
                    <div tw="flex justify-center w-full md:hidden">
                        <button tw="text-blue-500 font-bold text-base" onClick={() => onCopy()}>
                            Salin
                        </button>
                    </div>
                </div>
            </Dialog.Description>
        </ShareModalSkeleton>
    );
};

export default ShareModal;
