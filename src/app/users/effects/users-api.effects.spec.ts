import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { UsersApiEffects } from './users-api.effects';

describe('UsersApiEffects', () => {
  let actions$: Observable<any>;
  let effects: UsersApiEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UsersApiEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<UsersApiEffects>(UsersApiEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
