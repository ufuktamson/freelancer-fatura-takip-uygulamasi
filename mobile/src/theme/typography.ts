// ============================================================
// FREELANCER FATURA TAKİP — TİPOGRAFİ SİSTEMİ
// ============================================================

export const Typography = {
  // ── Font Aileleri ──────────────────────────────────────────
  fontFamily: {
    regular:  'Inter-Regular',
    medium:   'Inter-Medium',
    semiBold: 'Inter-SemiBold',
    bold:     'Inter-Bold',
    // Fallback (font yüklenene kadar)
    default:  'System',
  },

  // ── Font Boyutları ─────────────────────────────────────────
  fontSize: {
    xs:   10,
    sm:   12,
    base: 14,
    md:   15,
    lg:   16,
    xl:   18,
    '2xl': 20,
    '3xl': 24,
    '4xl': 28,
    '5xl': 32,
    '6xl': 36,
    '7xl': 40,
    '8xl': 48,
  },

  // ── Line Height ────────────────────────────────────────────
  lineHeight: {
    tight:   1.2,
    snug:    1.375,
    normal:  1.5,
    relaxed: 1.625,
    loose:   2,
    // px değerleri
    xs:   14,
    sm:   16,
    base: 20,
    md:   22,
    lg:   24,
    xl:   28,
    '2xl': 32,
    '3xl': 36,
    '4xl': 40,
  },

  // ── Font Weight ────────────────────────────────────────────
  fontWeight: {
    normal:   '400' as const,
    medium:   '500' as const,
    semiBold: '600' as const,
    bold:     '700' as const,
    extraBold:'800' as const,
  },

  // ── Letter Spacing ─────────────────────────────────────────
  letterSpacing: {
    tighter: -0.5,
    tight:   -0.25,
    normal:   0,
    wide:     0.25,
    wider:    0.5,
    widest:   1,
  },

  // ── Hazır Metin Stilleri ───────────────────────────────────
  // Ekranlarda doğrudan kullanım için
  styles: {
    // Başlıklar
    h1: {
      fontSize: 32,
      fontWeight: '700' as const,
      lineHeight: 40,
      letterSpacing: -0.5,
    },
    h2: {
      fontSize: 28,
      fontWeight: '700' as const,
      lineHeight: 36,
      letterSpacing: -0.25,
    },
    h3: {
      fontSize: 24,
      fontWeight: '600' as const,
      lineHeight: 32,
    },
    h4: {
      fontSize: 20,
      fontWeight: '600' as const,
      lineHeight: 28,
    },
    h5: {
      fontSize: 18,
      fontWeight: '600' as const,
      lineHeight: 24,
    },
    h6: {
      fontSize: 16,
      fontWeight: '600' as const,
      lineHeight: 22,
    },

    // Body metinleri
    bodyLarge: {
      fontSize: 16,
      fontWeight: '400' as const,
      lineHeight: 24,
    },
    bodyMedium: {
      fontSize: 14,
      fontWeight: '400' as const,
      lineHeight: 20,
    },
    bodySmall: {
      fontSize: 12,
      fontWeight: '400' as const,
      lineHeight: 16,
    },

    // Label / Caption
    label: {
      fontSize: 14,
      fontWeight: '500' as const,
      lineHeight: 20,
    },
    labelSmall: {
      fontSize: 12,
      fontWeight: '500' as const,
      lineHeight: 16,
    },
    caption: {
      fontSize: 11,
      fontWeight: '400' as const,
      lineHeight: 16,
    },

    // Özel
    overline: {
      fontSize: 10,
      fontWeight: '600' as const,
      lineHeight: 14,
      letterSpacing: 1,
      textTransform: 'uppercase' as const,
    },
    code: {
      fontSize: 13,
      fontWeight: '400' as const,
      lineHeight: 18,
      fontFamily: 'monospace',
    },
  },
} as const;
