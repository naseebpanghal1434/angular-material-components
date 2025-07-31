import { InjectionToken, inject, makeEnvironmentProviders } from '@angular/core';
import { DateAdapter, MAT_DATE_LOCALE, MatDateFormats } from '@angular/material/core';

/** Injection token for the NgxMat date adapter. */
export const NGX_MAT_DATE_ADAPTER = new InjectionToken<DateAdapter<unknown>>(
  'NgxMatDateAdapter',
  {
    providedIn: 'root',
    factory: () => {
      // Try to get the global DateAdapter as fallback
      try {
        return inject(DateAdapter, { optional: true });
      } catch {
        return null;
      }
    },
  }
);

/** Injection token for the NgxMat date formats. */
export const NGX_MAT_DATE_FORMATS = new InjectionToken<MatDateFormats>(
  'NgxMatDateFormats'
);

/**
 * Creates a provider for NgxMat datetime picker with a custom date adapter.
 * This allows you to use different date adapters for Angular Material's standard
 * datepicker and NgxMat's datetime picker.
 * 
 * @param adapter The date adapter class to use for NgxMat datetime picker
 * @param formats The date formats to use for NgxMat datetime picker
 * @param deps Additional dependencies for the date adapter
 * @returns Environment providers for the custom date adapter
 */
export function provideNgxMatDateAdapter<D>(
  adapter: new (...args: any[]) => DateAdapter<D>,
  formats?: MatDateFormats,
  deps: any[] = [MAT_DATE_LOCALE]
) {
  const providers: any[] = [
    {
      provide: NGX_MAT_DATE_ADAPTER,
      useClass: adapter,
      deps: deps,
    },
  ];

  if (formats) {
    providers.push({
      provide: NGX_MAT_DATE_FORMATS,
      useValue: formats,
    });
  }

  return makeEnvironmentProviders(providers);
}

/**
 * Gets the effective date adapter, preferring NGX-specific over global.
 * @param ngxAdapter The NGX-specific date adapter (optional)
 * @param globalAdapter The global date adapter (optional)
 * @returns The date adapter to use
 */
export function getEffectiveDateAdapter<D>(
  ngxAdapter: DateAdapter<D> | null,
  globalAdapter: DateAdapter<D> | null
): DateAdapter<D> | null {
  return ngxAdapter || globalAdapter;
}

/**
 * Gets the effective date formats, preferring NGX-specific over global.
 * @param ngxFormats The NGX-specific date formats (optional)
 * @param globalFormats The global date formats (optional)
 * @returns The date formats to use
 */
export function getEffectiveDateFormats(
  ngxFormats: MatDateFormats | null,
  globalFormats: MatDateFormats | null
): MatDateFormats | null {
  return ngxFormats || globalFormats;
}