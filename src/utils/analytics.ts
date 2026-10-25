export type LeadSource =
  | 'hero_cta'
  | 'navbar_cta'
  | 'navbar_hotline'
  | 'navbar_mobile'
  | 'floating_wa'
  | 'floating_desktop'
  | 'mobile_bottom_bar'
  | 'service_split_sewa'
  | 'service_split_jual'
  | 'catalog_item'
  | 'calculator'
  | 'package_selector'
  | 'warehouse_proof'
  | 'warehouse_ongkir'
  | 'faq_cta'
  | 'footer_cta'
  | 'footer_wa'
  | 'error_404';

export type TransactionTrackMode =
  | 'SEWA'
  | 'BELI'
  | 'SEWA & BELI'
  | 'BELI BARU'
  | 'BELI BEKAS (REKONDISI)';

export interface WhatsAppLeadPayload {
  lead_source: LeadSource;
  transaction_mode: TransactionTrackMode;
  target_city: string;
  item_name?: string;
  sets_count?: number;
}

export interface DataLayerEvent extends WhatsAppLeadPayload {
  event: 'whatsapp_lead_click';
  timestamp: string;
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/**
 * Fires a `whatsapp_lead_click` custom event into `window.dataLayer`
 * for Google Tag Manager (GTM) & Google Analytics 4 (GA4) conversion tracking.
 */
export function trackWhatsAppClick(payload: WhatsAppLeadPayload): void {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];

  const eventData: DataLayerEvent = {
    event: 'whatsapp_lead_click',
    lead_source: payload.lead_source,
    transaction_mode: payload.transaction_mode,
    target_city: payload.target_city,
    ...(payload.item_name ? { item_name: payload.item_name } : {}),
    ...(typeof payload.sets_count === 'number'
      ? { sets_count: payload.sets_count }
      : {}),
    timestamp: new Date().toISOString(),
  };

  window.dataLayer.push(eventData as unknown as Record<string, unknown>);
}

/**
 * Attaches a single lightweight delegated click listener to track static Astro
 * WhatsApp links annotated with `data-wa-source`, `data-wa-mode`, and `data-wa-city`.
 */
export function initWhatsAppTracking(): void {
  if (typeof document === 'undefined') return;

  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement | null;
    if (!target) return;

    const anchor = target.closest<HTMLAnchorElement>('a[data-wa-source]');
    if (!anchor) return;

    // Skip if already handled directly by a React Island onClick handler
    if (anchor.dataset.waTracked === 'direct') return;

    const leadSource = (anchor.dataset.waSource || 'hero_cta') as LeadSource;
    const transactionMode = (anchor.dataset.waMode ||
      'SEWA & BELI') as TransactionTrackMode;
    const targetCity = anchor.dataset.waCity || 'Tangerang';
    const itemName = anchor.dataset.waItem;

    trackWhatsAppClick({
      lead_source: leadSource,
      transaction_mode: transactionMode,
      target_city: targetCity,
      ...(itemName ? { item_name: itemName } : {}),
    });
  });
}
