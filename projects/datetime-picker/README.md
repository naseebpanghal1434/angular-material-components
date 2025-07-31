# Angular Material DatetimePicker, Timepicker for @angular/material 7.x, 8.x, 9.x, 10.x, 11.x, 12.x, 13.x, 14.x, 15.x, 16.x, 18.x, 19.x

[![Build Status](https://travis-ci.com/h2qutc/angular-material-components.svg?branch=master)](https://travis-ci.com/h2qutc/angular-material-components)
[![License](https://img.shields.io/npm/l/angular-material-components.svg)](https://www.npmjs.com/package/angular-material-components)
[![npm version](https://badge.fury.io/js/%40angular-material-components%2Fdatetime-picker.svg)](https://www.npmjs.com/package/@ngxmc/datetime-picker)
[![Github All Releases](https://img.shields.io/npm/dt/@ngxmc/datetime-picker.svg)]()

## Description

A DatetimePicker like @angular/material
[Datepicker](https://material.angular.io/components/datepicker/overview) by adding support for
choosing time.

<a href="https://www.buymeacoffee.com/gnurub" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

## DEMO

@see [LIVE DEMO AND DOCUMENTATION](https://h2qutc.github.io/angular-material-components/)

@see [DEMO stackblitz](https://stackblitz.com/edit/demo-ngx-mat-datetime-picker)

![Alt Text](demo_datetime_picker.png)

Choose the version corresponding to your Angular version:

| Angular | @ngxmc/datetime-picker          |
| ------- | ------------------------------- |
| 19      | 19.x+                           |
| 18      | 18.x+                           |
| 16      | 16.x+                           |
| 15      | 15.x+ OR 9.x+ for legacy import |
| 14      | 8.x+                            |
| 13      | 7.x+                            |
| 12      | 6.x+                            |
| 11      | 5.x+                            |
| 10      | 4.x+                            |
| 9       | 2.x+                            |
| 8       | 2.x+                            |
| 7       | 2.x+                            |

## Getting started

```
# For Angular 19
npm install --save @naseebsingh3510/datetime-picker

# Or with specific version
npm install --save @naseebsingh3510/datetime-picker@19.4.0
```

## Setup

Add the date provider to your app configuration.

[!IMPORTANT] to prevent the \_ERROR Error: NgxMatDatetimePicker: No provider found for DateAdapter.
You must import one of the following providers at your application root or standalone component:
provideNativeDateAdapter, provideMomentDateAdapter, provideLuxonDateAdapter, provideDateFnsAdapter,
or provide a custom implementation.

```typescript
import { provideNativeDateAdapter } from '@angular/material/core';

export const appConfig: ApplicationConfig = {
  providers: [
    ...,
    provideNativeDateAdapter(),
    ...,
  ],
};
```

On your component, you can use the datepicker as follows:

```typescript
import {
  NgxMatDatepickerActions,
  NgxMatDatepickerApply,
  NgxMatDatepickerCancel,
  NgxMatDatepickerClear,
  NgxMatDatepickerInput,
  NgxMatDatetimepicker,
} from '@ngxmc/datetime-picker';

@Component({
  selector: 'test',
  imports: [
    NgxMatDatepickerActions,
    NgxMatDatepickerActions,
    NgxMatDatepickerApply,
    NgxMatDatepickerCancel,
    NgxMatDatepickerClear,
    NgxMatDatepickerInput,
    NgxMatDatetimepicker,
    ..., // other imports
  ],
  template: `
    <input matInput [ngxMatDatetimePicker]="event" class="hidden" />

    <ngx-mat-datetime-picker #event>
      <ngx-mat-datepicker-actions>
        <div class="flex w-full justify-between">
          <button mat-button ngxMatDatepickerClear>Clear</button>
          <div>
            <button mat-button ngxMatDatepickerCancel>Cancel</button>
            <button mat-raised-button color="primary" ngxMatDatepickerApply>Apply</button>
          </div>
        </div>
      </ngx-mat-datepicker-actions>
    </ngx-mat-datetime-picker>
  `,
})
export class TestComponent {}
```

@see [src/app/demo-datetime/demo-datetime.module.ts](src/app/demo-datetime/demo-datetime.module.ts)

## Using the component The same API as @angular/material Datepicker (@see [API

docs](https://material.angular.io/components/datepicker/api)) ### Datetime Picker
(ngx-mat-datetime-picker)

```html
<mat-form-field>
  <input
    matInput
    [ngxMatDatetimePicker]="picker"
    placeholder="Choose a date"
    [formControl]="dateControl"
    [min]="minDate"
    [max]="maxDate"
    [disabled]="disabled" />
  <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
  <ngx-mat-datetime-picker
    #picker
    [showSpinners]="showSpinners"
    [showSeconds]="showSeconds"
    [stepHour]="stepHour"
    [stepMinute]="stepMinute"
    [stepSecond]="stepSecond"
    [touchUi]="touchUi"
    [color]="color"
    [enableMeridian]="enableMeridian"
    [disableMinute]="disableMinute"
    [hideTime]="hideTime">
  </ngx-mat-datetime-picker>
</mat-form-field>
```

### Timepicker (ngx-mat-timepicker)

```
<ngx-mat-timepicker [(ngModel)]="date"></ngx-mat-timepicker>
<ngx-mat-timepicker [(ngModel)]="date" [disabled]="disabled"></ngx-mat-timepicker>
<ngx-mat-timepicker [(ngModel)]="date" [stepHour]="2" [stepMinute]="5" [stepSecond]="10"></ngx-mat-timepicker>
<ngx-mat-timepicker [(ngModel)]="date" [showSpinners]="showSpinners"></ngx-mat-timepicker>
<ngx-mat-timepicker [(ngModel)]="date" [showSeconds]="showSeconds"></ngx-mat-timepicker>
<ngx-mat-timepicker [(ngModel)]="date" [disableMinute]="disableMinute"></ngx-mat-timepicker>
<ngx-mat-timepicker [(ngModel)]="date" [defaultTime]="defaultTime"></ngx-mat-timepicker>
<ngx-mat-timepicker [formControl]="formControl"></ngx-mat-timepicker>
```

#### List of @Input of ngx-mat-timepicker

_You can use all @Input of ngx-mat-timepicker for ngx-mat-datetime-picker_

| @Input             | Type         | Default value | Description                                                                                                                                                                  |
| ------------------ | ------------ | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **disabled**       | boolean      | null          | If true, the picker is readonly and can't be modified                                                                                                                        |
| **showSpinners**   | boolean      | true          | If true, the spinners above and below input are visible                                                                                                                      |
| **showSeconds**    | boolean      | true          | If true, it is not possible to select seconds                                                                                                                                |
| **disableMinute**  | boolean      | false         | If true, the minute (and second) is readonly                                                                                                                                 |
| **defaultTime**    | Array        | undefined     | An array [hour, minute, second] for default time when the date is not yet defined                                                                                            |
| **stepHour**       | number       | 1             | The number of hours to add/substract when clicking hour spinners                                                                                                             |
| **stepMinute**     | number       | 1             | The number of minutes to add/substract when clicking minute spinners                                                                                                         |
| **stepSecond**     | number       | 1             | The number of seconds to add/substract when clicking second spinners                                                                                                         |
| **color**          | ThemePalette | undefined     | Color palette to use on the datepicker's calendar.                                                                                                                           |
| **enableMeridian** | boolean      | false         | Whether to display 12H or 24H mode.                                                                                                                                          |
| **hideTime**       | boolean      | false         | If true, the time is hidden.                                                                                                                                                 |
| **touchUi**        | boolean      | false         | Whether the calendar UI is in touch mode. In touch mode the calendar opens in a dialog rather than a popup and elements have more padding to allow for bigger touch targets. |

## Choosing a date implementation and date format settings

[NativeDateAdapter](https://github.com/angular/components/blob/main/src/material/core/datetime/index.ts)
[DateFnsAdapter](https://github.com/angular/components/blob/main/src/material-date-fns-adapter/adapter/index.ts)
[LuxonDateAdapter](https://github.com/angular/components/blob/main/src/material-luxon-adapter/adapter/index.ts)
[MomentDateAdapter](https://github.com/angular/components/blob/main/src/material-moment-adapter/adapter/index.ts)

### Using Different Date Adapters for Material Datepicker vs NgxMat Datetime Picker

Starting from Angular 19, you can use different date adapters for Angular Material's standard datepicker and NgxMat's datetime picker. This is useful when you want different date formatting or behavior between the two components.

**Example 1: Different adapters for each component**

```typescript
import { ApplicationConfig } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { provideNgxMatDateAdapter } from '@naseebsingh3510/datetime-picker';
import { CustomDateTimeAdapter, CUSTOM_DATETIME_FORMATS } from './custom-adapters';

export const appConfig: ApplicationConfig = {
  providers: [
    // For Angular Material's standard datepicker
    provideNativeDateAdapter(),
    
    // For NgxMat datetime picker only
    provideNgxMatDateAdapter(CustomDateTimeAdapter, CUSTOM_DATETIME_FORMATS),
  ],
};
```

**Example 2: Same adapter for both (backward compatible)**

```typescript
import { ApplicationConfig } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';

export const appConfig: ApplicationConfig = {
  providers: [
    // Both standard Material datepicker and NgxMat datetime picker use this
    provideNativeDateAdapter(),
  ],
};
```

**Example 3: Creating a custom date adapter**

```typescript
@Injectable()
export class CustomDateTimeAdapter extends DateAdapter<Date> {
  // Your custom implementation
  format(date: Date, displayFormat: string): string {
    // Custom formatting logic for datetime picker
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  }
  // ... other methods
}

const CUSTOM_DATETIME_FORMATS: MatDateFormats = {
  parse: {
    dateInput: "l, LTS"
  },
  display: {
    dateInput: "l, LTS",
    monthYearLabel: "MMM YYYY",
    dateA11yLabel: "LL",
    monthYearA11yLabel: "MMMM YYYY"
  }
};

// Usage
export const appConfig: ApplicationConfig = {
  providers: [
    provideNativeDateAdapter(), // For mat-datepicker
    provideNgxMatDateAdapter(CustomDateTimeAdapter, CUSTOM_DATETIME_FORMATS), // For ngx-mat-datetime-picker
  ],
};
```

### Migration from Previous Versions

If you were using `NgxMatDateAdapter` in previous versions, the migration is straightforward:

**Before (Angular 15/16):**
```typescript
@NgModule({
  providers: [
    {
      provide: NgxMatDateAdapter,
      useClass: CustomDateAdapter,
      deps: [MAT_DATE_LOCALE]
    }
  ],
})
```

**After (Angular 19):**
```typescript
export const appConfig: ApplicationConfig = {
  providers: [
    provideNgxMatDateAdapter(CustomDateAdapter, CUSTOM_DATE_FORMATS),
  ],
};
```

## Theming

- @see @angular/material
  [Using a pre-built theme](https://material.angular.io/guide/theming#using-a-pre-built-theme)
- Add the Material Design icon font to your index.html

```
<link href="https://fonts.googleapis.com/icon?family=Material+Icons&display=block" rel="stylesheet">
```

## License

MIT
