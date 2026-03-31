// ============================================================
// FREELANCER FATURA TAKİP — SPACING & LAYOUT SİSTEMİ
// ============================================================

export const Spacing = {
  // ── Base Spacing Scale (4px grid) ─────────────────────────
  0:    0,
  0.5:  2,
  1:    4,
  1.5:  6,
  2:    8,
  2.5:  10,
  3:    12,
  3.5:  14,
  4:    16,
  5:    20,
  6:    24,
  7:    28,
  8:    32,
  9:    36,
  10:   40,
  11:   44,
  12:   48,
  14:   56,
  16:   64,
  20:   80,
  24:   96,
  28:   112,
  32:   128,
  36:   144,
  40:   160,
  48:   192,
  56:   224,
  64:   256,

  // ── Semantic Spacing ───────────────────────────────────────
  xs:   4,
  sm:   8,
  md:   16,
  lg:   24,
  xl:   32,
  '2xl': 48,
  '3xl': 64,

  // ── Component Specific ─────────────────────────────────────
  screenPadding:       20,
  screenPaddingSmall:  16,
  cardPadding:         16,
  inputPadding:        14,
  buttonPaddingV:      14,
  buttonPaddingH:      24,
  sectionGap:          24,
  listItemGap:         12,
  iconSize:            24,
  iconSizeSmall:       18,
  iconSizeLarge:       32,
  avatarSize:          40,
  avatarSizeLarge:     56,
  badgePaddingV:       4,
  badgePaddingH:       10,
} as const;

export const BorderRadius = {
  none:   0,
  sm:     4,
  DEFAULT: 8,
  md:     10,
  lg:     12,
  xl:     16,
  '2xl':  20,
  '3xl':  24,
  full:   9999,
  // Component specific
  button: 10,
  card:   12,
  input:  10,
  badge:  20,
  avatar: 9999,
  modal:  20,
} as const;

export const Shadows = {
  none: {
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  xs: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  DEFAULT: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.10,
    shadowRadius: 8,
    elevation: 4,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 6,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 10,
  },
  xl: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.20,
    shadowRadius: 28,
    elevation: 15,
  },
  // Brand shadows
  primary: {
    shadowColor: '#6366F1',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.30,
    shadowRadius: 12,
    elevation: 6,
  },
} as const;

export const Layout = {
  // Tab bar
  tabBarHeight:       60,
  tabBarPaddingBottom: 8,
  // Header
  headerHeight:       56,
  // Status bar
  statusBarHeight:    44,
  // Bottom safe area
  bottomSafeArea:     34,
  // FAB
  fabSize:            56,
  fabBottom:          24,
  fabRight:           20,
} as const;
