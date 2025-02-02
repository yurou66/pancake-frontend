import { ContextApi } from '@pancakeswap/localization'
import { DropdownMenuItems, MenuItemsType } from '@pancakeswap/uikit'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean; image?: string } & {
  items?: ConfigMenuDropDownItemsType[]
}

const addMenuItemSupported = (item, chainId) => {
  if (!chainId || !item.supportChainIds) {
    return item
  }
  if (item.supportChainIds?.includes(chainId)) {
    return item
  }
  return {
    ...item,
    disabled: true,
  }
}

const config: (
  t: ContextApi['t'],
  isDark: boolean,
  languageCode?: string,
  chainId?: number,
) => ConfigMenuItemsType[] = (t, chainId) =>
  [
    // {
    //   label: t('Trade'),
    //   icon: SwapIcon,
    //   fillIcon: SwapFillIcon,
    //   href: '/swap',
    //   showItemsOnMobile: false,
    // items: [
    //   {
    //     label: t('Swap'),
    //     href: '/swap',
    //   },
    // {
    //   label: t('Liquidity'),
    //   href: '/liquidity/positions',
    // },
    // {
    //   label: t('Perpetual'),
    //   href: getPerpetualUrl({
    //     chainId,
    //     languageCode,
    //     isDark,
    //   }),
    //   confirmModalId: 'perpConfirmModal',
    //   type: DropdownMenuItemType.EXTERNAL_LINK,
    // },
    // {
    //   label: t('Options'),
    //   href: getOptionsUrl(),
    //   confirmModalId: 'optionsConfirmModal',
    //   type: DropdownMenuItemType.EXTERNAL_LINK,
    // },
    // {
    //   label: t('Bridge'),
    //   href: 'https://bridge.pancakeswap.finance/',
    //   type: DropdownMenuItemType.EXTERNAL_LINK,
    // },
    // {
    //   label: `${t('Limit')} (Deprecated)`,
    //   href: '/limit-orders',
    //   supportChainIds: SUPPORT_ONLY_BSC,
    //   image: '/images/decorations/3d-coin.png',
    // },
    // {
    //   label: t('Trading Reward'),
    //   href: '/trading-reward',
    //   hideSubNav: true,
    // },
    // ].map((item) => addMenuItemSupported(item, chainId)),
    // },
    // {
    //   label: t('Buy'),
    //   href: '/buy-crypto',
    //   icon: ShoppingBasketIcon,
    //   fillIcon: ShoppingBasketFilledIcon,
    //   showItemsOnMobile: false,
    //   items: [],
    // },
    // {
    //   label: t('Earn'),
    //   href: '/liquidity/pools',
    //   icon: EarnIcon,
    //   fillIcon: EarnFillIcon,
    //   image: '/images/decorations/pe2.png',
    //   supportChainIds: SUPPORT_FARMS,
    //   items: [
    //     {
    //       label: t('Farms'),
    //       href: '/liquidity/pools',
    //       supportChainIds: SUPPORT_FARMS,
    //     },
    //     {
    //       label: t('CAKE Staking'),
    //       href: '/cake-staking',
    //       supportChainIds: SUPPORT_CAKE_STAKING,
    //     },
    //     {
    //       label: t('Syrup Pools'),
    //       href: '/pools',
    //       supportChainIds: POOL_SUPPORTED_CHAINS,
    //     },
    //     {
    //       label: t('Position Manager'),
    //       href: '/position-managers',
    //       supportChainIds: POSITION_MANAGERS_SUPPORTED_CHAINS,
    //     },
    //     {
    //       label: t('Liquid Staking'),
    //       href: '/liquid-staking',
    //       supportChainIds: LIQUID_STAKING_SUPPORTED_CHAINS,
    //     },
    //     {
    //       label: t('Simple Staking'),
    //       href: '/simple-staking',
    //       supportChainIds: FIXED_STAKING_SUPPORTED_CHAINS,
    //     },
    //   ].map((item) => addMenuItemSupported(item, chainId)),
    // },
    // {
    //   label: t('Game'),
    //   icon: PancakeProtectorIcon,
    //   hideSubNav: true,
    //   href: 'https://pancakeswap.games/',
    //   items: [
    //     {
    //       label: t('Gaming Marketplace'),
    //       href: 'https://pancakeswap.games/',
    //       type: DropdownMenuItemType.EXTERNAL_LINK,
    //     },
    //     {
    //       label: t('Prediction (BETA)'),
    //       href: '/prediction',
    //       image: '/images/decorations/prediction.png',
    //       supportChainIds: PREDICTION_SUPPORTED_CHAINS,
    //     },
    //     {
    //       label: t('Lottery'),
    //       href: '/lottery',
    //       image: '/images/decorations/lottery.png',
    //     },
    //     {
    //       label: t('Quests'),
    //       href: 'https://quest.pancakeswap.finance/quests',
    //       status: { text: t('New'), color: 'success' },
    //       type: DropdownMenuItemType.EXTERNAL_LINK,
    //     },
    //     {
    //       label: t('Pottery (BETA)'),
    //       href: '/pottery',
    //       image: '/images/decorations/lottery.png',
    //     },
    //   ].map((item) => addMenuItemSupported(item, chainId)),
    // },
    // {
    //   label: t('NFT'),
    //   href: `${nftsBaseUrl}`,
    //   icon: NftIcon,
    //   fillIcon: NftFillIcon,
    //   supportChainIds: SUPPORT_ONLY_BSC,
    //   image: '/images/decorations/nft.png',
    //   items: [
    //     {
    //       label: t('Overview'),
    //       href: `${nftsBaseUrl}`,
    //     },
    //     {
    //       label: t('Collections'),
    //       href: `${nftsBaseUrl}/collections`,
    //     },
    //     {
    //       label: t('Activity'),
    //       href: `${nftsBaseUrl}/activity`,
    //     },
    //   ],
    // },
    // {
    //   label: t('v4'),
    //   href: '/v4',
    //   showOnMobile: false,
    //   items: [],
    // },
    // {
    //   label: '',
    //   href: '/info',
    //   icon: MoreIcon,
    //   hideSubNav: true,
    //   items: [
    //     {
    //       label: t('Info'),
    //       href: '/info/v3',
    //     },
    //     {
    //       label: t('IFO'),
    //       href: '/ifo',
    //       image: '/images/ifos/ifo-bunny.png',
    //     },
    //     {
    //       label: t('Affiliate Program'),
    //       href: '/affiliates-program',
    //     },
    //     {
    //       label: t('Voting'),
    //       href: '/voting',
    //       supportChainIds: SUPPORT_ONLY_BSC,
    //       image: '/images/voting/voting-bunny.png',
    //     },
    //     {
    //       type: DropdownMenuItemType.DIVIDER,
    //     },
    //     {
    //       label: t('Leaderboard'),
    //       href: '/teams',
    //       supportChainIds: SUPPORT_ONLY_BSC,
    //       image: '/images/decorations/leaderboard.png',
    //     },
    //     {
    //       type: DropdownMenuItemType.DIVIDER,
    //     },
    //     {
    //       label: t('Blog'),
    //       href: 'https://blog.pancakeswap.finance',
    //       type: DropdownMenuItemType.EXTERNAL_LINK,
    //     },
    //     {
    //       label: t('Docs'),
    //       href: 'https://docs.pancakeswap.finance',
    //       type: DropdownMenuItemType.EXTERNAL_LINK,
    //     },
    //     {
    //       label: t('v4'),
    //       href: '/v4',
    //       isMobileOnly: true,
    //     },
    //   ].map((item) => addMenuItemSupported(item, chainId)),
    // },
  ].map((item) => addMenuItemSupported(item, chainId))

export default config
