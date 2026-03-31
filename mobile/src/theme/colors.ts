// ============================================================
// FREELANCER FATURA TAKİP — RENK SİSTEMİ
// Pixel-perfect tasarım için tam renk paleti
// ============================================================

export const Colors = {
  // ── Primary Brand ──────────────────────────────────────────
  primary: {
    50:  '#EEF2FF',
    100: '#E0E7FF',
    200: '#C7D2FE',
    300: '#A5B4FC',
    400: '#818CF8',
    500: '#6366F1',   // Ana marka rengi (Indigo)
    600: '#4F46E5',
    700: '#4338CA',
    800: '#3730A3',
    900: '#312E81',
  },

  // ── Secondary / Accent ─────────────────────────────────────
  secondary: {
    50:  '#F0FDF4',
    100: '#DCFCE7',
    200: '#BBF7D0',
    300: '#86EFAC',
    400: '#4ADE80',
    500: '#22C55E',   // Başarı / Ödendi
    600: '#16A34A',
    700: '#15803D',
    800: '#166534',
    900: '#14532D',
  },

  // ── Status Renkleri ────────────────────────────────────────
  success: {
    light: '#DCFCE7',
    DEFAULT: '#22C55E',
    dark: '#16A34A',
    text: '#14532D',
  },
  warning: {
    light: '#FEF9C3',
    DEFAULT: '#EAB308',
    dark: '#CA8A04',
    text: '#713F12',
  },
  danger: {
    light: '#FEE2E2',
    DEFAULT: '#EF4444',
    dark: '#DC2626',
    text: '#7F1D1D',
  },
  info: {
    light: '#DBEAFE',
    DEFAULT: '#3B82F6',
    dark: '#2563EB',
    text: '#1E3A8A',
  },

  // ── Fatura Durum Renkleri ──────────────────────────────────
  invoice: {
    open: {
      bg: '#DBEAFE',
      text: '#1D4ED8',
      border: '#93C5FD',
    },
    closed: {
      bg: '#DCFCE7',
      text: '#15803D',
      border: '#86EFAC',
    },
    overdue: {
      bg: '#FEE2E2',
      text: '#DC2626',
      border: '#FCA5A5',
    },
    draft: {
      bg: '#F3F4F6',
      text: '#6B7280',
      border: '#D1D5DB',
    },
  },

  // ── Nötr / Gri Paleti ─────────────────────────────────────
  neutral: {
    0:   '#FFFFFF',
    50:  '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
    950: '#030712',
  },

  // ── Semantik Renkler ───────────────────────────────────────
  background: {
    primary: '#F9FAFB',
    secondary: '#FFFFFF',
    tertiary: '#F3F4F6',
    card: '#FFFFFF',
    overlay: 'rgba(0, 0, 0, 0.5)',
  },

  text: {
    primary:   '#111827',
    secondary: '#374151',
    tertiary:  '#6B7280',
    disabled:  '#9CA3AF',
    inverse:   '#FFFFFF',
    link:      '#4F46E5',
  },

  border: {
    light:   '#F3F4F6',
    DEFAULT: '#E5E7EB',
    medium:  '#D1D5DB',
    dark:    '#9CA3AF',
    focus:   '#6366F1',
  },

  // ── Özel Amaçlı ───────────────────────────────────────────
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',

  // ── Gradient Tanımları ─────────────────────────────────────
  gradient: {
    primary: ['#6366F1', '#4F46E5'],
    success: ['#22C55E', '#16A34A'],
    warning: ['#F59E0B', '#D97706'],
    danger:  ['#EF4444', '#DC2626'],
    card:    ['#FFFFFF', '#F9FAFB'],
    header:  ['#4F46E5', '#312E81'],
  },
} as const;

// Type export
export type ColorKeys = typeof Colors;
