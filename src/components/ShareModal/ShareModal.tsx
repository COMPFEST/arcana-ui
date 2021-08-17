import { Dialog } from '@headlessui/react';
import React from 'react';
import ShareModalSkeleton, { ShareModalSkeletonProps } from './Skeleton';
import copy from 'copy-to-clipboard';
import toast from 'react-hot-toast';
import tw, { css } from 'twin.macro';
import IconShare, { IconShareProps } from './IconShare';

export type ShareModalProps = ShareModalSkeletonProps & IconShareProps;

const ShareModal: React.FC<ShareModalProps> = (props) => {
    const { url, ...other } = props;

    const onCopy = () => {
        copy(url.toString());
        toast.success('Link berhasil disalin');
    };

    return (
        <ShareModalSkeleton {...other}>
            <Dialog.Title
                css={[
                    tw`px-8 pb-0 background[#FFF] md:(background[#f6f6f6] pb-10)`,
                    css`
                        @media (max-width: 767px) {
                            width: 85vw;
                        }
                    `,
                ]}
            >
                <h1 tw="font-bold text-2xl text-black-100 text-center md:text-5xl">Share</h1>
            </Dialog.Title>
            <Dialog.Description tw="px-0 pt-11 pb-5 mx-8 md:(px-40 py-28 mx-0)">
                <div
                    css={[
                        tw`mb-6 md:mb-6`,
                        css`
                            margin-bottom: 3.75rem;
                            & > a {
                                .share-button {
                                    margin: 0 3.375rem;
                                }
                                &:first-child > .share-button {
                                    margin-left: 0;
                                }
                                &:last-child > .share-button {
                                    margin-right: 0;
                                }
                            }
                            .share-button {
                                mix-blend-mode: normal;
                                z-index: 1;
                                position: relative;
                                width: 100px;
                                height: 100px;
                            }
                            @media (max-width: 767px) {
                                & > a {
                                    .share-button {
                                        margin: 0;
                                    }
                                }
                                .share-button {
                                    width: 60px;
                                    height: 60px;
                                }
                            }
                        `,
                        tw`flex justify-around w-full`,
                    ]}
                >
                    <IconShare url={url} />
                </div>
                <div tw="background[#e7e7e7] px-5 py-3 mb-4 flex justify-between rounded-lg items-center md:(px-6 py-5 mb-5)">
                    <h1 tw="font-semibold text-xs text-center md:(text-2xl text-left)">{url.toString()}</h1>
                    <div tw="flex hidden md:block">
                        <button tw="uppercase text-blue-500 font-semibold text-xl md:text-2xl" onClick={() => onCopy()}>
                            Salin
                        </button>
                    </div>
                </div>
                <div tw="flex justify-center w-full md:hidden">
                    <button tw="text-blue-500 font-semibold text-base md:text-2xl" onClick={() => onCopy()}>
                        Salin
                    </button>
                </div>
            </Dialog.Description>
        </ShareModalSkeleton>
    );
};

export default ShareModal;
