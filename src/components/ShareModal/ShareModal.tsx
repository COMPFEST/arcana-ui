import { Dialog } from '@headlessui/react';
import React from 'react';
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

    // URL target to share e.g. 'compfest.id/competition'
    target: string;

    // Social medias to share
    socials?: Array<{
        src: string;
        url: string;
    }>;

    // Other props in Skeleton.tsx
}

export type ShareModalProps = BaseShareModalProps & ShareModalSkeletonProps;

const ShareModal: React.FC<ShareModalProps> = (props) => {
    const {
        size = 'md',
        target = 'compfest.id',
        socials = [
            { src: 'line.svg', url: 'https://social-plugins.line.me/lineit/share?url=' },
            { src: 'twitter.svg', url: 'https://twitter.com/intent/tweet?text=&url=' },
            { src: 'whatsApp.svg', url: 'https://wa.me/?text=' },
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
                                    .share-button {
                                        width: 60px;
                                        height: 60px;
                                    }
                                }
                            `,
                        ]}
                    >
                        {socials.map((social, key) => (
                            <ShareIcon key={key} src={social.src} url={social.url} target={target} />
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
                        <div tw="flex hidden md:block">
                            <button
                                css={[tw`uppercase text-blue-500 font-bold`, ShareModalSizeMap[size].text]}
                                onClick={() => onCopy()}
                            >
                                Salin
                            </button>
                        </div>
                    </div>
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
